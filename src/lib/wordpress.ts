export interface WordPressRenderedField {
  rendered: string;
}

export interface WordPressAuthor {
  id: number;
  name: string;
  slug: string;
}

export interface WordPressMedia {
  id: number;
  source_url: string;
  alt_text: string;
}

export interface WordPressComment {
  id: number;
  post: number;
  parent: number;
  author_name: string;
  author_url: string;
  date: string;
  content: WordPressRenderedField;
  author_avatar_urls?: Record<string, string>;
  link: string;
}

export interface WordPressPost {
  id: number;
  slug: string;
  date: string;
  title: WordPressRenderedField;
  content: WordPressRenderedField;
  excerpt: WordPressRenderedField;
  featured_media: number;
  _embedded?: {
    author?: WordPressAuthor[];
    "wp:featuredmedia"?: WordPressMedia[];
  };
}

export interface WordPressPostNavigationItem {
  id: number;
  slug: string;
  date: string;
  title: WordPressRenderedField;
}

function getApiUrl(): string {
  const url = import.meta.env.PUBLIC_WORDPRESS_API_URL;

  if (!url) {
    throw new Error(
      "PUBLIC_WORDPRESS_API_URL is not set. Copy .env.example to .env and add your WordPress API URL.",
    );
  }

  return url.endsWith("/") ? url.slice(0, -1) : url;
}

function getSiteUrl(): string {
  const apiUrl = getApiUrl();
  const siteUrl = apiUrl.replace(/\/wp-json\/wp\/v2$/, "");
  return siteUrl.endsWith("/") ? siteUrl.slice(0, -1) : siteUrl;
}

async function fetchFromWordPress<T>(endpoint: string): Promise<T> {
  const apiUrl = getApiUrl();
  const path = endpoint.startsWith("/") ? endpoint : `/${endpoint}`;
  const url = `${apiUrl}${path}`;

  let response: Response;

  try {
    response = await fetch(url);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown network error";
    throw new Error(`Failed to reach WordPress API at ${url}: ${message}`);
  }

  if (!response.ok) {
    throw new Error(
      `WordPress API returned ${response.status} ${response.statusText} for ${url}`,
    );
  }

  return (await response.json()) as T;
}

// Posts held back from the public site until they're fixed at the source in
// WordPress. Reversible — clear a slug here and it returns on the next build.
// - the-2026-seo-playbook…: body says "2025" throughout; needs a rewrite.
export const EXCLUDED_SLUGS = new Set<string>([
  "the-2026-seo-playbook-what-actually-works-after-googles-latest-algorithm-shift",
]);

export async function getPosts(): Promise<WordPressPost[]> {
  const posts: WordPressPost[] = [];
  const perPage = 100;
  let page = 1;

  try {
    // WordPress REST defaults to per_page=10; paginate so every published
    // post gets a static route (otherwise older posts 404).
    while (true) {
      const batch = await fetchFromWordPress<WordPressPost[]>(
        `/posts?status=publish&per_page=${perPage}&page=${page}&_embed`,
      );

      posts.push(...batch);

      if (batch.length < perPage) {
        break;
      }

      page += 1;
    }

    return posts.filter((p) => !EXCLUDED_SLUGS.has(p.slug));
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.warn(`[wordpress] getPosts failed: ${message}`);
    return posts.filter((p) => !EXCLUDED_SLUGS.has(p.slug));
  }
}

export async function getPostBySlug(slug: string): Promise<WordPressPost | null> {
  try {
    const posts = await fetchFromWordPress<WordPressPost[]>(
      `/posts?slug=${encodeURIComponent(slug)}&_embed`,
    );
    return posts[0] ?? null;
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.warn(`[wordpress] getPostBySlug("${slug}") failed: ${message}`);
    return null;
  }
}

export async function getPostsForNavigation(): Promise<WordPressPostNavigationItem[]> {
  const posts: WordPressPostNavigationItem[] = [];
  const perPage = 100;
  let page = 1;

  try {
    while (true) {
      const batch = await fetchFromWordPress<WordPressPostNavigationItem[]>(
        `/posts?status=publish&orderby=date&order=asc&per_page=${perPage}&page=${page}&_fields=id,slug,date,title`,
      );

      posts.push(...batch);

      if (batch.length < perPage) {
        break;
      }

      page += 1;
    }

    return posts.filter((p) => !EXCLUDED_SLUGS.has(p.slug));
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.warn(`[wordpress] getPostsForNavigation failed: ${message}`);
    return [];
  }
}

export async function getCommentsForPost(postId: number): Promise<WordPressComment[]> {
  try {
    return await fetchFromWordPress<WordPressComment[]>(
      `/comments?post=${encodeURIComponent(postId)}&per_page=5&orderby=date&order=asc`,
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.warn(`[wordpress] getCommentsForPost(${postId}) failed: ${message}`);
    return [];
  }
}

export function getWordPressCommentsApiUrl(postId: number): string {
  return `${getApiUrl()}/comments?post=${encodeURIComponent(postId)}&per_page=5&orderby=date&order=asc`;
}

export function getWordPressCommentActionUrl(): string {
  return `${getSiteUrl()}/wp-comments-post.php`;
}

export function getFeaturedImageUrl(post: WordPressPost): string | undefined {
  return post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
}

export function getFeaturedImageAlt(post: WordPressPost): string {
  return post._embedded?.["wp:featuredmedia"]?.[0]?.alt_text ?? "";
}

export function getAuthorName(post: WordPressPost): string | undefined {
  return post._embedded?.author?.[0]?.name;
}

export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").trim();
}

// AI-draft scaffolding that leaked into published posts, e.g. "[insert image: ...]".
const SCAFFOLD_INLINE = /\[insert[^\]]*\]/gi;

// Leaked authoring labels that are never legitimate prose (safe to strip inline).
// NB: bare "keyword(s):" is only stripped as a leading block (see stripScaffolding),
// since it can appear mid-sentence legitimately ("add local keywords: ...").
const LEAKED_LABEL_TEXT =
  /(?:seo\s+keywords?|meta\s+description|focus\s+keyword|target\s+keyword|your\s+headline)\s*:[^\n<]*/gi;

// Remove leftover authoring artifacts: "[insert ...]" prompt scaffolding and
// WordPress block-editor demo content ("toggle me" details, corgi test image).
export function stripScaffolding(html: string): string {
  return html
    // A block whose entire content is a scaffold bracket → drop the block.
    .replace(
      /<(p|h[1-6]|figure|figcaption|li)\b[^>]*>\s*(?:<[^>]+>\s*)*\[insert[^\]]*\]\s*(?:<\/[^>]+>\s*)*<\/\1>/gi,
      "",
    )
    // Any remaining inline scaffold text.
    .replace(SCAFFOLD_INLINE, "")
    // A block that STARTS with an authoring label ("SEO Keywords: ...",
    // "Keyword: ...", "Your headline: ...") → drop the whole block.
    .replace(
      /<(p|h[1-6]|li)\b[^>]*>\s*(?:<[^>]+>\s*)*(?:seo\s+keywords?|focus\s+keyword|target\s+keyword|meta\s+description|your\s+headline|keywords?|keyword)\s*:[\s\S]*?<\/\1>/gi,
      "",
    )
    // Inline leftovers of the never-legit labels.
    .replace(LEAKED_LABEL_TEXT, "")
    // Leftover WP demo blocks.
    .replace(/<details\b[^>]*>[\s\S]*?toggle me[\s\S]*?<\/details>/gi, "")
    .replace(/<figure\b[^>]*>\s*<img\b[^>]*corgi-test[^>]*>[\s\S]*?<\/figure>/gi, "")
    .replace(/<img\b[^>]*corgi-test[^>]*>/gi, "")
    // Tidy up any now-empty paragraphs/headings.
    .replace(/<(p|h[1-6])\b[^>]*>\s*<\/\1>/gi, "");
}

// The post title is the page's single <h1>. WP posts that used <h1> for their
// own sections create multiple H1s — shift every content heading down one level
// (only when an <h1> is present) so the title stays the sole H1.
export function demoteHeadings(html: string): string {
  if (!/<h1[\s>]/i.test(html)) return html;
  return html.replace(/<(\/?)h([1-5])\b/gi, (_m, slash, n) => `<${slash}h${Number(n) + 1}`);
}

// Full cleanup for article body HTML rendered via set:html.
export function cleanArticle(html: string): string {
  return demoteHeadings(stripScaffolding(html));
}

// Cleanup for inline HTML kept as-is (titles rendered via set:html — preserves entities).
export function cleanInline(html: string): string {
  return html.replace(SCAFFOLD_INLINE, "").replace(LEAKED_LABEL_TEXT, "").trim();
}

// Cleanup for plain-text output (meta title/description).
export function cleanText(html: string): string {
  return stripHtml(html.replace(SCAFFOLD_INLINE, "").replace(LEAKED_LABEL_TEXT, "")).trim();
}

export function formatPostDate(date: string): string {
  const parsed = new Date(date);

  if (Number.isNaN(parsed.getTime())) return "";

  return parsed.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
