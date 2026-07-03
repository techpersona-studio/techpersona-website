# SEO Action List — 2026-07-02

From audit `seo-audit-2026-07-02.md`. Score 68/100. Ordered by impact ÷ effort.
Check off as done.

## Now — code, ~30 min total (do these today)

- [ ] **Remove legal pages from `sitemap.xml`.** Delete the `/privacy-policy` and
  `/terms` `<url>` blocks — they're `noindex`, so they must not be in the sitemap.
  Leave only the homepage entry. *(File: `sitemap.xml`)*
- [ ] **Add geo to the `<title>`.** Change to
  `Website Redesign in Worcester, MA | TechPersona Studio` (or similar). Keep under
  ~60 chars. *(File: `index.html` line 13)*
- [ ] **Bump sitemap `<lastmod>`** for the homepage to today's publish date.
  *(File: `sitemap.xml`)*
- [ ] **Add intrinsic `width`/`height` to the 3 `<video>` elements** (or confirm CSS
  reserves aspect-ratio) to lock CLS. *(File: `index.html`)*
- [ ] **Add "Saugus, MA" to the Quán Phở before-image alt** for extra geo signal.
  *(File: `index.html` line 427)*

## Soon — content, this week

- [ ] **Add a soft pricing anchor.** One line ("Most first projects start at $X,
  one-time") in the audit section or a new FAQ entry. Reduces abandonment + answers
  a top AI/search query.
- [ ] **Add a timeline FAQ passage** surfaced in the FAQ list (currently only in the
  process section): "How long does a website redesign take?"
- [ ] **Ask the Quán Phở owner for one sentence** you can quote as the first real
  testimonial. Highest-leverage trust upgrade available right now.
- [ ] **Convert below-fold sample videos to play-on-scroll** (`preload="none"` +
  intersection observer) to cut ~10 MB of mobile autoplay.

## When GBP goes public — unblocks the biggest gap

- [ ] **Populate `sameAs`** in the schema with the GBP maps URL + any LinkedIn /
  other real profile. *(File: `index.html`, `#business` node)*
- [ ] **Link GBP / profile in the footer** for a human-visible trust signal.
- [ ] **Add `aggregateRating`** to schema ONLY once real reviews exist (never fake it).

## Next phase — architecture (expands ranking surface)

- [ ] **Build one standalone service page**, e.g. `/website-redesign-worcester-ma`,
  explaining what a redesign involves + a real geo H1/title. Biggest topical-surface
  gain after the quick wins.
- [ ] **Decide Vietnamese strategy:** keep JS toggle (UX only) or split to `/vi/`
  URLs with hreflang if VI search is a real target. Don't half-build hreflang.
- [ ] Add a second real case study when one exists.
- [ ] Optional: image sitemap + video sitemap once there are more assets.

## Monitor (no code)

- [ ] Watch Search Console queries + indexing weekly.
- [ ] Watch field CWV after GTM addition (INP/LCP) in CrUX/Search Console.
- [ ] Revisit title/H1 once real query data arrives.
