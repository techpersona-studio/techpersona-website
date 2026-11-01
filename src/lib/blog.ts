// Display + SEO helpers for the blog templates. Pure functions over WP data;
// fetching stays in wordpress.ts.
import type { WordPressPost } from "./wordpress";
import { cleanArticle, cleanText } from "./wordpress";

export const SITE_NAME = "TechPersona Studio";
export const AUTHOR = {
  name: "Thao Phuong",
  role: "Founder, TechPersona Studio",
  avatar: "/assets/images/profile-pic.webp",
  bio: "I run TechPersona Studio, a one-person studio in Worcester, MA. I build websites, SEO and AI ads for small businesses, and I write here about what works in practice.",
};

export function siteUrl(): string {
  return (import.meta.env.PUBLIC_SITE_URL ?? "https://www.techpersonastudio.com").replace(/\/+$/, "");
}

export function absUrl(path: string): string {
  return new URL(path, siteUrl() + "/").href;
}

// ---- text ----

const ENTITIES: Record<string, string> = {
  amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " ", hellip: "…",
  mdash: "—", ndash: "–", rsquo: "’", lsquo: "‘", rdquo: "”", ldquo: "“",
};

export function decodeEntities(s: string): string {
  return s
    .replace(/&#(\d+);/g, (_m, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_m, n) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/&([a-z]+);/gi, (m, n) => ENTITIES[n.toLowerCase()] ?? m);
}

const LEAD_EMOJI = /^(?:[\p{Extended_Pictographic}\p{Regional_Indicator}️‍⃣]|\s)+/u;
// keycap digits ("1️⃣", "🔟") carry meaning in numbered headings: keep the number
export function keycapsToText(s: string): string {
  return s.replace(/🔟/gu, "10.").replace(/(\d)\uFE0F?\u20E3/gu, "$1.");
}

export function stripLeadingEmoji(s: string): string {
  return keycapsToText(s).replace(LEAD_EMOJI, "");
}

// plain text, entities decoded, whitespace collapsed
export function plain(html: string): string {
  const spaced = html.replace(/<br\s*\/?>|<\/(?:p|li|h[1-6]|div)>/gi, " ");
  return decodeEntities(cleanText(spaced))
    .replace(/([a-z)][.!?])([A-Z])/g, "$1 $2") // WP excerpts drop the space where a <br> was
    .replace(/\s+/g, " ")
    .trim();
}

function noDashes(s: string): string {
  return s.replace(/\s*[—–]\s*/g, ", ").replace(/,\s*,/g, ",");
}

function clip(s: string, max: number): string {
  if (s.length <= max) return s;
  const cut = s.slice(0, max - 1);
  return cut.slice(0, cut.lastIndexOf(" ")).replace(/[,.;:!?\s]+$/, "") + "…";
}

// card excerpt: WP excerpt minus emoji and the "[…]" tail; falls back to first paragraph
export function excerptFor(post: WordPressPost): string {
  const ex = stripLeadingEmoji(plain(post.excerpt.rendered).replace(/\s*\[…\]\s*$/, "").replace(/\s*…$/, ""));
  return ex || firstParagraph(post);
}

// hand-written WP excerpt, or "" when WP auto-generated it (ends in "[…]",
// which just repeats the opening lines)
export function manualExcerpt(post: WordPressPost): string {
  const raw = post.excerpt.rendered;
  if (/\[(?:&hellip;|…)\]/.test(raw)) return "";
  return stripLeadingEmoji(plain(raw));
}

function leadParagraphs(post: WordPressPost, min: number): string[] {
  const html = cleanArticle(post.content.rendered);
  const out: string[] = [];
  let len = 0;
  for (const m of html.matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/gi)) {
    const t = stripLeadingEmoji(plain(m[1]));
    if (t.length < 25) continue;
    out.push(/[.!?…:]$/.test(t) ? t : t + ".");
    len += t.length;
    if (len >= min) break;
  }
  return out;
}

export function firstParagraph(post: WordPressPost): string {
  return leadParagraphs(post, 40)[0] ?? "";
}

// meta description: ~155 chars, no emoji, no em/en dashes
export function metaDescription(post: WordPressPost): string {
  // auto excerpts glue headings into the text; real paragraphs read better
  const ex = manualExcerpt(post);
  const src = ex.length >= 110 ? ex : leadParagraphs(post, 130).join(" ") || ex || excerptFor(post);
  return clip(noDashes(src), 155);
}

export function postTitle(post: WordPressPost): string {
  return stripLeadingEmoji(plain(post.title.rendered));
}

// <title>: keep under ~60 chars; brand suffix only when it fits
export function seoTitle(title: string): string {
  const suffix = " | " + SITE_NAME;
  // first clause: before ":", "(", or a spaced dash
  const head = title.split(/\s*[:(]\s*|\s+[—–-]\s+/)[0].trim();
  const headOk = head.length >= 20;
  if (title.length + suffix.length <= 60) return title + suffix;
  if (headOk && head.length + suffix.length <= 60) return head + suffix;
  if (title.length <= 60) return title;
  if (headOk && head.length <= 60) return head;
  // no clean cut: keep the full title (Google truncates the display, keeps the words)
  return title;
}

export function readingMinutes(post: WordPressPost): number {
  const words = plain(post.content.rendered).split(" ").filter(Boolean).length;
  return Math.max(1, Math.round(words / 225));
}

export function formatShortDate(date: string): string {
  const d = new Date(date);
  return Number.isNaN(d.getTime())
    ? ""
    : d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

// ---- topics ----
// WP custom taxonomy "topic" lives in _embedded["wp:term"]. Topics map onto four
// lanes that match the studio's services; lanes drive the index filter + covers.

type Term = { taxonomy?: string; name?: string; slug?: string };

export function topicsOf(post: WordPressPost): string[] {
  const groups = ((post._embedded as Record<string, unknown> | undefined)?.["wp:term"] ?? []) as Term[][];
  return groups
    .flat()
    .filter((t) => t?.taxonomy === "topic" && t.name)
    .map((t) => decodeEntities(t.name!));
}

export type Lane = { id: string; label: string; word: string; tone: "pine" | "terra" | "wash" | "deep" };

export const LANES: Lane[] = [
  { id: "design", label: "Web design", word: "design", tone: "wash" },
  { id: "search", label: "SEO & AI search", word: "search", tone: "pine" },
  { id: "ads", label: "AI content & ads", word: "content", tone: "terra" },
  { id: "systems", label: "Automation", word: "systems", tone: "deep" },
];

function laneFor(text: string): Lane | undefined {
  if (/seo|visibility|google|search/.test(text)) return LANES[1];
  if (/automation|n8n|workflows? that|systems/.test(text)) return LANES[3];
  if (/media|video|marketing|content|\bads?\b/.test(text)) return LANES[2];
  if (/web|design|wordpress|next\.?js|ux/.test(text)) return LANES[0];
  return undefined;
}

// topic taxonomy decides; title only when the post has no topic
export function laneOf(post: WordPressPost): Lane {
  const topics = topicsOf(post).join(" ").toLowerCase();
  return (topics && laneFor(topics)) || laneFor(plain(post.title.rendered).toLowerCase()) || LANES[0];
}

// one word for the typographic cover, specific to the post when we can tell
const COVER_WORDS: [RegExp, string][] = [
  [/hidden power of n8n/i, "automate"],
  [/n8n/i, "n8n"],
  [/videos are made/i, "process"],
  [/ai videos?/i, "video"],
  [/still the best/i, "local"],
  [/wordpress/i, "WordPress"],
  [/next\.?js/i, "Next.js"],
  [/google can/i, "Google"],
  [/\bseo\b/i, "SEO"],
  [/micro-interaction/i, "motion"],
  [/mistakes/i, "mistakes"],
  [/second rule/i, "7 seconds"],
  [/one click/i, "one click"],
  [/content strategy/i, "strategy"],
  [/marketing/i, "marketing"],
];
export function coverWord(post: WordPressPost): string {
  const t = plain(post.title.rendered);
  return COVER_WORDS.find(([re]) => re.test(t))?.[1] ?? laneOf(post).word;
}

export function primaryTopic(post: WordPressPost): string {
  return topicsOf(post)[0] ?? laneOf(post).label;
}

// ---- article body ----

export type TocItem = { id: string; text: string; level: 2 | 3 };

function slugify(s: string): string {
  return s.toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 60) || "section";
}

// Posts use h3-h5 for their top sections. Shift so the shallowest heading is
// an h2 (no skipped levels under the title h1), add ids, strip leading emoji,
// wrap tables for horizontal scroll, and collect a TOC from h2/h3.
export function prepareArticle(raw: string): { html: string; toc: TocItem[] } {
  let html = cleanArticle(raw);
  // section level = shallowest level used 2+ times (a lone h2 "Final Thought" or
  // h5 intro shouldn't set the scale); it becomes h2, lone shallower ones clamp to h2
  const counts = new Map<number, number>();
  for (const m of html.matchAll(/<h([1-6])\b/gi)) counts.set(Number(m[1]), (counts.get(Number(m[1])) ?? 0) + 1);
  const levels = [...counts.keys()].sort();
  const section = levels.find((l) => (counts.get(l) ?? 0) >= 2) ?? levels[0];
  const shift = section ? section - 2 : 0;
  if (shift > 0) {
    html = html.replace(/<(\/?)h([1-6])\b/gi, (_m, sl, n) => `<${sl}h${Math.max(2, Number(n) - shift)}`);
  }

  const toc: TocItem[] = [];
  const used = new Set<string>();
  html = html.replace(/<h([2-6])\b([^>]*)>([\s\S]*?)<\/h\1>/gi, (_m, n, attrs: string, inner: string) => {
    const level = Number(n);
    const cleanedInner = keycapsToText(inner).replace(LEAD_EMOJI, "").replace(/^(<[^>]+>)\s*(?:[\p{Extended_Pictographic}️‍]\s*)+/u, "$1");
    const text = stripLeadingEmoji(plain(cleanedInner));
    let id = (attrs.match(/\bid="([^"]+)"/) ?? [])[1];
    if (!id) {
      id = slugify(text);
      let i = 2;
      while (used.has(id)) id = `${slugify(text)}-${i++}`;
      attrs += ` id="${id}"`;
    }
    used.add(id);
    if ((level === 2 || level === 3) && text) toc.push({ id, text, level: level as 2 | 3 });
    return `<h${n}${attrs}>${cleanedInner}</h${n}>`;
  });

  html = html.replace(/<table\b[\s\S]*?<\/table>/gi, (t) => `<div class="table-scroll">${t}</div>`);
  html = html.replace(/<img\b(?![^>]*\bloading=)/gi, '<img loading="lazy" decoding="async"');

  // only list h3s in the TOC when there are few h2s
  const h2s = toc.filter((t) => t.level === 2);
  return { html, toc: h2s.length >= 4 ? h2s : toc };
}
