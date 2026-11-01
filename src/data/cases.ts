// Case studies for /work and /work/[slug]. Add a project = add one object.
// Copy rules: owner outcomes first, no em dashes, no hype adjectives, only measured results.
// See Thao-OS 01-Worlds/business/wiki/copy-business-language.md

export type CaseType = "website" | "ad-video";
export type CaseStatus = "live" | "rebuilt" | "sample" | "coming-soon";

export interface Proof { value: string; label: string; when?: string }
export interface Swatch { name: string; hex: string }
export interface SpecimenLine { font: string; weight?: number; italic?: boolean; size: number; accent?: boolean; muted?: boolean; text: string }
export interface Specimen { bg: string; ink: string; accent: string; names: string; lines: SpecimenLine[] }

export type Pin =
  | { kind: "palette"; span?: 1 | 2 | 3; label: string; caption: string; swatches: Swatch[] }
  | { kind: "type"; span?: 1 | 2 | 3; label: string; caption: string; specimen: Specimen }
  | { kind: "image"; span?: 1 | 2 | 3; label: string; caption: string; src: string; w: number; h: number; alt: string }
  | { kind: "stat"; span?: 1 | 2 | 3; label: string; caption: string; value: string; note?: string }
  | { kind: "note"; span?: 1 | 2 | 3; label: string; caption: string; text: string };

interface Shot { desktop: string; mobile: string; fullDesktop?: string; fullMobile?: string }

export interface Case {
  slug: string;
  type: CaseType;
  status: CaseStatus;
  draft?: boolean;
  since?: string; // human date, live sites only
  dateCreated?: string; // ISO, for JSON-LD
  name: string;
  kind: string;
  location?: string;
  url?: string;
  urlLabel?: string;
  accent: string;
  hook: string;
  summary: string;
  services: string[];
  stamp?: string; // short proof for the listing card hover
  seo: { title: string; description: string };
  media: {
    cover?: { src: string; alt: string; pos?: string };
    before?: Shot;
    after?: Shot;
    og?: string;
    video?: string;
    poster?: string;
  };
  outcomes: string[];
  proof: Proof[];
  board: Pin[];
}

const W = "/assets/work/";
const IMG = "/assets/images/";

const CASES: Case[] = [
  {
    slug: "young-group",
    type: "website",
    status: "live",
    since: "Aug 29, 2026",
    dateCreated: "2026-08-29",
    name: "Young Group",
    kind: "1-on-1 weight-loss coaching",
    location: "Clients in the US, Vietnam, Australia, Canada",
    url: "https://tranthuytien.net",
    urlLabel: "tranthuytien.net",
    accent: "#B88A2E",
    hook: "Found first on Google, in two languages.",
    summary: "One long Vietnamese page became a seven‑page bilingual site.",
    services: ["Website design & build, bilingual VI/EN", "SEO & AI search, monthly", "Blog articles", "Calorie calculator with email capture"],
    stamp: "#1 on Google",
    seo: {
      title: "Young Group Website Case Study | TechPersona Studio",
      description: "A bilingual rebuild for a Vietnamese weight-loss coach: #1 on Google in the US in 8 weeks, and named first by Google's AI in 7 of 9 coach searches.",
    },
    media: {
      cover: { src: W + "yg-cover.webp", alt: "Founder Trần Thủy Tiên", pos: "50% 30%" },
      before: { desktop: W + "yg-before-d.webp", mobile: W + "yg-before-m.webp", fullDesktop: IMG + "old-tranthuytien.net_.webp", fullMobile: W + "yg-before-m-full.webp" },
      after: { desktop: W + "yg-after-d.webp", mobile: W + "yg-after-m.webp", fullDesktop: IMG + "work-yg-desktop.webp", fullMobile: IMG + "work-yg-mobile.webp" },
      og: W + "yg-after-d.webp",
    },
    outcomes: [
      "Bilingual, not translated. Every visitor reads it like home.",
      "Real clients, real before and afters. Each one gets its own stage.",
      "Every new article is another door in from Google.",
    ],
    proof: [
      { value: "#1", label: "on Google in the US for “vietnamese weight loss coach”", when: "8 weeks after launch" },
      { value: "7 of 9", label: "coach searches where Google's AI names her first", when: "Oct 27 snapshot" },
      { value: "VI + EN", label: "seven pages, both languages", when: "Live since Aug 29" },
    ],
    board: [
      { kind: "palette", span: 2, label: "Color", caption: "A look that feels like her, not a template", swatches: [
        { name: "Cream", hex: "#F2E6D0" }, { name: "Soft gold", hex: "#F3D18A" }, { name: "Gold", hex: "#96702F" }, { name: "Espresso", hex: "#261D18" } ] },
      { kind: "type", span: 1, label: "Type", caption: "Words that make visitors feel understood",
        specimen: { bg: "#F7EEDD", ink: "#261D18", accent: "#96702F", names: "Plus Jakarta Sans + Cormorant", lines: [
          { font: "Cormorant Garamond", italic: true, weight: 500, size: 1.3, accent: true, text: "It’s not your fault." },
          { font: "Plus Jakarta Sans", weight: 800, size: 2.1, text: "Lose weight by addressing the real cause." } ] } },
      { kind: "image", span: 1, label: "Feature", src: W + "yg-out-lang.webp", w: 700, h: 569, alt: "The homepage in Vietnamese and in English", caption: "Twice the audience: Vietnamese and English clients" },
      { kind: "image", span: 1, label: "Feature", src: W + "yg-out-stories.webp", w: 600, h: 600, alt: "A client before and after photo", caption: "Client proof that does the selling for her" },
      { kind: "image", span: 1, label: "Feature", src: W + "yg-b-tdee.webp", w: 600, h: 1150, alt: "The free calorie calculator page", caption: "A free calculator that turns visitors into leads" },
      { kind: "stat", span: 3, label: "Result", value: "#1", caption: "on Google in the US for “vietnamese weight loss coach”", note: "8 weeks after launch" },
    ],
  },
  {
    slug: "quan-pho",
    type: "website",
    status: "rebuilt", // not live on its domain yet: say "rebuilt", never "launched"
    name: "Quán Phở",
    kind: "Vietnamese restaurant",
    location: "Saugus, MA",
    accent: "#C06A45",
    hook: "Feels like walking in.",
    summary: "Same restaurant. A different first impression.",
    services: ["Website design & build", "Online ordering + whole-place booking", "Private event form to email + text", "Menu you edit in Google Sheets"],
    stamp: "2 taps to order",
    seo: {
      title: "Quán Phở Restaurant Website | TechPersona Studio",
      description: "A Vietnamese restaurant in Saugus, MA, rebuilt to feel like walking in: orders in two taps, whole-place bookings, and a menu the owner edits in a minute.",
    },
    media: {
      cover: { src: W + "qp-cover.webp", alt: "The dining room at Quán Phở, under red lanterns", pos: "50% 50%" },
      before: { desktop: W + "qp-before-d.webp", mobile: W + "qp-before-m.webp", fullDesktop: IMG + "old-quanphoinsaugus.com_.webp", fullMobile: W + "qp-before-m-full.webp" },
      after: { desktop: W + "qp-after-d.webp", mobile: W + "qp-after-m.webp", fullDesktop: IMG + "work-qp-desktop.webp", fullMobile: IMG + "work-qp-mobile.webp" },
      og: W + "qp-after-d.webp",
    },
    outcomes: [
      "You can almost smell the broth.",
      "Hungry to ordered in two taps.",
      "Party bookings ping the owner's phone in seconds.",
      "New dish tonight? On the menu in a minute. No developer.",
      "Fast on a phone, so nobody gives up hungry.",
    ],
    proof: [
      { value: "2 taps", label: "to order online or book the whole place" },
      { value: "Seconds", label: "for a party request to reach the owner's phone" },
      { value: "1 min", label: "to change the menu, no developer" },
    ],
    board: [
      { kind: "palette", span: 2, label: "Color", caption: "Feels like the restaurant before you walk in", swatches: [
        { name: "Night", hex: "#1C1410" }, { name: "Broth", hex: "#C9701F" }, { name: "Saffron", hex: "#F2B233" }, { name: "Lantern red", hex: "#C8352B" }, { name: "Rice paper", hex: "#FBF3E4" } ] },
      { kind: "type", span: 1, label: "Type", caption: "A menu anyone can read on a phone",
        specimen: { bg: "#1C1410", ink: "#FBF3E4", accent: "#F2B233", names: "Fraunces + Hanken Grotesk", lines: [
          { font: "Fraunces", weight: 600, size: 2.1, text: "Real Vietnamese phở, right here in Saugus." },
          { font: "Hanken Grotesk", weight: 400, size: 1, muted: true, text: "Broth simmered overnight. A lantern-lit room." } ] } },
      { kind: "image", span: 1, label: "Feature", src: W + "qp-out-order.webp", w: 600, h: 830, alt: "Let's Eat and Order buttons on a phone", caption: "Orders straight from the site, not just calls" },
      { kind: "image", span: 1, label: "Feature", src: W + "qp-karaoke.webp", w: 600, h: 791, alt: "Karaoke night poster", caption: "Party bookings, not just dinner tables" },
      { kind: "image", span: 1, label: "Feature", src: W + "qp-out-menu.webp", w: 600, h: 540, alt: "The menu with dishes and prices", caption: "Menu changes in a minute, no developer bills" },
      { kind: "stat", span: 3, label: "Result", value: "2 taps", caption: "to order online or book the whole place" },
    ],
  },
  {
    // coming soon: flip draft to false once screenshots and results exist
    slug: "luat-su-vy",
    type: "website",
    status: "coming-soon",
    draft: true,
    name: "Law Offices of Vy H. Truong",
    kind: "Bilingual law firm",
    accent: "#1E3A34",
    hook: "",
    summary: "A bilingual law firm site.",
    services: [],
    seo: { title: "Law Offices of Vy H. Truong | TechPersona Studio", description: "A bilingual law firm site." },
    media: {},
    outcomes: [],
    proof: [],
    board: [],
  },
  {
    // AI story ad sample. Client deliberately unnamed.
    slug: "sample-story-ad",
    type: "ad-video",
    status: "sample",
    name: "Sample story ad",
    kind: "Weight-loss coach",
    accent: "#C06A45",
    hook: "Ads get skipped. Stories get watched.",
    summary: "An AI‑made, Pixar‑style short story instead of a hard‑sell ad.",
    services: ["Story & script", "AI characters & scenes", "Edit, captions & sound"],
    stamp: "Story, not a sell",
    seo: {
      title: "Sample AI Story Ad | TechPersona Studio",
      description: "A sample AI story ad for a weight-loss coach: a short Pixar-style story made to be watched, not skipped. Vertical 9:16 for Reels, Stories and TikTok.",
    },
    media: {
      video: "/assets/videos/story-sample-EN.mp4",
      poster: W + "story-poster.webp",
      og: W + "story-poster.webp",
    },
    outcomes: ["A short story, not a hard sell", "AI-made, Pixar-style characters", "Vertical 9:16 for Reels, Stories and TikTok"],
    proof: [],
    board: [
      { kind: "note", span: 2, label: "Hook", text: "Ads get skipped. Stories get watched.", caption: "The one idea behind the ad" },
      { kind: "palette", span: 1, label: "Color", caption: "Warm kitchen light keeps it homey", swatches: [
        { name: "Ember", hex: "#431B0F" }, { name: "Rust", hex: "#893719" }, { name: "Blush", hex: "#DE8D74" }, { name: "Glow", hex: "#EFB27D" } ] },
      { kind: "image", span: 1, label: "Style frame", src: W + "story-b-quit.webp", w: 420, h: 747, alt: "The scene turns grey as she thinks about quitting", caption: "Color drains when she wants to quit" },
      { kind: "image", span: 2, label: "Style frame", src: W + "story-b-day63.webp", w: 420, h: 747, alt: "Day 63, stretching with her daughter", caption: "Day 63, the payoff" },
    ],
  },
];

const TYPE_ORDER: CaseType[] = ["website", "ad-video"];
export const TYPE_LABEL: Record<CaseType, string> = { website: "Website", "ad-video": "Story ad" };

/** Published cases, websites first, then ads; array order within a type. */
export function listCases(): Case[] {
  const live = CASES.filter((c) => !c.draft);
  return TYPE_ORDER.flatMap((t) => live.filter((c) => c.type === t));
}

export function nextCase(slug: string): Case | undefined {
  const cs = listCases();
  if (cs.length < 2) return undefined;
  const i = cs.findIndex((c) => c.slug === slug);
  return cs[(i + 1) % cs.length];
}

export function statusShort(c: Case): string {
  return { live: "Live", rebuilt: "Rebuilt", sample: "Sample", "coming-soon": "Coming soon" }[c.status];
}

/** "192,106,69" from "#C06A45", for rgba() without color-mix (Safari 15). */
export function rgb(hex: string): string {
  const m = /^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i.exec(hex);
  return m ? [m[1], m[2], m[3]].map((x) => parseInt(x, 16)).join(",") : "192,106,69";
}

/** Card / thumbnail image for a case. */
export function thumbOf(c: Case): string {
  return c.type === "ad-video" ? c.media.poster ?? "" : c.media.cover?.src ?? c.media.after?.desktop ?? "";
}
