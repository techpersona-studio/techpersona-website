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

export async function getPosts(): Promise<WordPressPost[]> {
  try {
    return await fetchFromWordPress<WordPressPost[]>("/posts?_embed");
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.warn(`[wordpress] getPosts failed: ${message}`);
    return [];
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

    return posts;
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

export function formatPostDate(date: string): string {
  const parsed = new Date(date);

  if (Number.isNaN(parsed.getTime())) return "";

  return parsed.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
