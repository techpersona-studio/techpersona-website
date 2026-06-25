# Branding Visual Guide
## TechPersona Studio

**Guide type:** Website-first visual operating system
**Version:** 1.0 — 2026-06-24
**Prepared by:** TechPersona Studio / Thao Phuong
**Status:** All decisions locked. Ready for website blueprint.

> **Visual thesis:** A solo craftsperson's studio — warm stone and pine, editorial presence, and the specific quiet confidence of someone who signs their own work.

---

## 1. Visual north star

**The brand should feel like:** A skilled craftsperson you'd trust to build something important for your business — warm, direct, and present from first call to delivery.

**Not like:** A faceless agency portal, an AI vendor pitch, or a solutions website.

### Anchor adjectives

1. Grounded
2. Human-warm
3. Quietly credible

### Anti-adjectives

1. Flashy
2. Corporate
3. Automated-feeling

### Why this direction fits

TechPersona Studio is Thao, not a team. Every trust decision rests on a single named person. The buyer is a non-tech small business owner — a plumber, a restaurant owner, a nail salon — who has been burned by vague vendors. The brand must feel like someone who shows up, signs their name, and stands behind the work. Editorial/Human carries that. Enterprise/Stable gives it backbone. Nothing else fits the brief.

---

## 2. Direction mix

- **Primary:** Editorial / Human — 65%
- **Secondary influence:** Enterprise / Stable — 35%

**What this means in practice:**

The visual system leads with warmth and human presence. Stone-paper backgrounds, editorial serif moments, founder portrait, first-person voice. The Enterprise/Stable layer provides structure: pine anchor, clean grid, proof modules that communicate reliability without over-claiming. The result is a site that feels personal and credible — not casual, not corporate.

**What to avoid:**

- Cutting-edge / Innovative as any influence — it creates distance from the target audience and contradicts the "quiet" brand promise
- 50/50 mix — the brand has a clear center of gravity; hedging it produces blandness
- Agency-style authority signaling (awards, partner logos, team headshots)

---

## 3. Color system

### Palette overview

The palette has four layers: warm stone neutrals (the body), deep pine (the trust anchor), ink (text), and terracotta (the single accent). There is no second accent. Terracotta earns its punch by appearing rarely.

### Full palette

| Token | Hex | Role |
|---|---|---|
| `--paper` | `#F6F3EE` | Default page background |
| `--paper-deep` | `#EFEAE1` | Alternate section band |
| `--pine-wash` | `#E8EFEC` | Soft pine-tinted band, tags, quiet panels |
| `--core` | `#FBFAF7` | Card interior, input background |
| `--ink` | `#171717` | Primary text, high-contrast detail |
| `--ink-soft` | `#4E4E4E` | Body copy, secondary text |
| `--ink-faint` | `#857F75` | Labels, captions, muted detail |
| `--pine` | `#1E3A34` | Primary brand anchor. CTAs, dark sections, logo mark |
| `--pine-soft` | `#2E5148` | Pine hover/pressed state |
| `--terra` | `#C06A45` | Terracotta accent. Single most important CTA, italic emphasis |
| `--terra-deep` | `#9F4F33` | Terracotta hover/pressed state |
| `--terra-light` | `#E7A282` | Terracotta on dark pine backgrounds |
| `--hair` | `rgba(23,23,23,.10)` | Dividers, hairline borders |

### Usage ratio

- **~60%** — stone neutrals (paper, paper-deep, core)
- **~30%** — pine and ink (pine, pine-soft, pine-wash, ink tones)
- **~8–10%** — terracotta (terra, terra-deep, terra-light)
- **0%** — any other color

### Section banding rule

Alternate bands so no two adjacent sections share a shade:

`paper` → `paper-deep` → `pine-wash` → `pine` (dark) → back to `paper`

One dark pine band per page maximum. It anchors the scroll and gives the page a calm rhythm.

### State colors

- **Focus ring:** 2px solid `--pine`, offset 2px — never browser-default blue
- **Error:** `#B84B35` (warm desaturated red — stays in palette family)
- **Success:** `--pine` with a checkmark — no separate green

### Accessibility

- `--ink` on `--paper`: contrast ~14:1 — passes AAA
- `--ink` on `--core`: contrast ~13:1 — passes AAA
- `--paper` on `--pine` (dark section): contrast ~11:1 — passes AAA
- `--terra` on `--paper`: contrast ~3.8:1 — passes AA for large text and UI; do not use for small body copy
- `--terra-light` on `--pine`: contrast ~5.2:1 — passes AA

### Color anti-patterns

- Pure `#FFF` — cold, clinical, and generic. Always use `--paper` or `--core`
- Purple/blue/teal — the SaaS associations this brand explicitly rejects
- Any second accent color — terracotta only
- Large fields of terracotta — it is a spice, not a base
- Tech gradients — no gradient on any primary surface

---

## 4. Typography system

### Typefaces

**Hanken Grotesk** (Google Fonts) — primary. Body, UI, labels, most headings. Weights 400–800. This is the workhorse: operationally readable, confident, never precious.

**Cormorant Garamond** (Google Fonts) — accent display only. Italic weight. Hero headlines and one emphasis moment per section. The editorial soul of the brand. ~10% of all type on a page.

**Font load:**
```html
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,400;1,500;1,600&family=Hanken+Grotesk:wght@400;500;600;700;800&display=swap" rel="stylesheet">
```

**Fallback stacks:**
- Hanken: `'Hanken Grotesk', system-ui, -apple-system, sans-serif`
- Cormorant Garamond: `'Cormorant Garamond', Georgia, serif`

### Hierarchy

| Level | Font | Weight | Size (desktop) | Tracking | Case |
|---|---|---|---|---|---|
| Display / Hero | Cormorant Garamond italic + Hanken | 800 | 4–6rem | `-.045em` | Sentence |
| H1 | Hanken | 800 | 3–3.5rem | `-.04em` | Sentence |
| H2 | Hanken | 700 | 2–2.5rem | `-.03em` | Sentence |
| H3 | Hanken | 600 | 1.25–1.5rem | `-.015em` | Sentence |
| Body | Hanken | 400 | 1rem (16px base) | `0` | Normal |
| Label / UI | Hanken | 500 | 0.875rem | `0` | Normal |
| Kicker | Hanken | 600 | 0.75rem | `.20em` | ALL CAPS |
| Caption | Hanken | 400 | 0.8125rem | `0` | Normal |

### Casing rules

- All headings: sentence case. Never Title Case.
- Kickers and category labels: all-caps with `letter-spacing: .20em` — at small size only
- Body: normal sentence casing

### The signature typographic move

One italic Cormorant Garamond phrase in terracotta (`--terra`), per section, at display size. A fragment or a proper noun — not a full sentence. This is the brand's editorial marker. Use it once. Overuse destroys it.

**Correct:** Hero headline reads "I build the website that wins the customer *before* they call the next name." — "before" set in Cormorant Garamond italic, terracotta.

**Wrong:** Full paragraph sentences in Cormorant Garamond. Cormorant Garamond in body text. Cormorant Garamond used in UI or nav.

### Typography anti-patterns

- Inter, Roboto, system-ui as primary font — generic, kills differentiation
- Cormorant Garamond for any body, UI, or small text
- Title Case headings
- Tracked all-caps at heading scale
- More than two typefaces

---

## 5. Layout rhythm

### Layout mode

Flow-based narrative scroll. Not a modular dashboard. Not a card grid. The page reads like an argument: problem → cost → solution → proof → invitation.

### Grid

- Max content width: `1200px`
- Column grid: 12-column, 24px gutters
- Section padding: `120px` top/bottom desktop, `72px` tablet, `48px` mobile
- Text column: max `680px` for body-led sections

### Section banding rhythm

Each section gets one background. Adjacent sections must differ:

```
1. Hero          → --paper
2. Problem       → --paper-deep
3. How it works  → --pine-wash
4. Services      → --paper
5. Proof         → --paper-deep
6. Process       → --pine (dark)
7. About         → --paper
8. CTA closing   → --pine (dark)
```

No two consecutive sections share a shade. One dark pine section in the upper half; one in the closing position.

### Hero composition

**Structure:** Text left, founder portrait right (desktop). Portrait stacks below text (mobile).

- Left column: Kicker → H1 with Cormorant Garamond italic moment → 2-line body statement → primary CTA (island button, pine) → social proof micro-line beneath CTA
- Right column: Founder portrait (close-medium crop, warm natural lighting, polished-candid) with floating proof chip overlay (e.g. "New inquiry · 9:48 pm — replied in 2 min")
- Hero background: `--paper`
- No gradients, no abstract graphics, no dashboard screenshots in hero

### Common section patterns

1. **Full-width narrative** — centered text column, max 680px, for problem/pain sections. No sidebar. Let the copy land.
2. **2-column split** — 6+6 grid for service pairs (Website / Quiet Systems). Left: heading + body. Right: feature detail or outcome list.
3. **Process steps** — horizontal 3-step row on desktop, vertical stack on mobile. Step number in pine, short label in Hanken 600, one-line description in Hanken 400.
4. **Proof band** — alternating testimonial card + founder note on `--paper-deep` background.
5. **CTA band** — `--pine` dark background. Single heading. Single CTA in terracotta (island button). No competing elements.

### Mobile behavior

- Single column on all sections
- Hero portrait moves below text, reduced crop
- Process steps stack vertically
- 2-column sections become single column, service pair listed sequentially
- CTA band: heading + button only, centered
- Proof chips reduce to one visible
- Navigation: flat with hamburger, CTA button hidden behind menu on smallest breakpoints

### Layout anti-patterns

- Dashboard-feel card grids with metric widgets
- Multiple CTAs competing in a single section
- Long unbroken copy walls without visual rhythm breaks
- Hyper-asymmetric layout without clear purpose
- Side-by-side comparison tables (these read as SaaS)

---

## 6. Component language

### Overall feel

Soft / Rounded. Squircle radii throughout. The brand is warm and human — no brutalist hard edges, no clinical sharp corners.

### Radius system

- **Card outer shell:** `border-radius: 1.75rem` (~28px)
- **Card inner core:** `border-radius: calc(1.75rem - 10px)` (~18px) — concentric
- **Buttons (pill):** `border-radius: 999px`
- **Proof chips:** `border-radius: 999px` (fully rounded)
- **Portrait frame:** `border-radius: 1.25rem`
- **Input fields:** `border-radius: 0.625rem`

### Card language — double-shell

Cards are the signature surface treatment.

**Outer shell:** `background: rgba(30,58,52,.04)`, `border: 1px solid rgba(30,58,52,.08)`, `border-radius: 1.75rem`, `padding: 10px`

**Inner core:** `background: var(--core)`, `border-radius: calc(1.75rem - 10px)`, `box-shadow: inset 0 1px 1px rgba(255,255,255,.7)`, `padding: 1.5rem 2rem`

**Effect:** Cards read like machined hardware — not flat panels, not heavy drop shadows. The pine tint in the outer shell ties every card back to the brand anchor.

**Shadow:**
```css
box-shadow: 0 1px 2px rgba(30,58,52,.04), 0 18px 40px -22px rgba(30,58,52,.30);
```
Never a hard offset block shadow. Never `18px 18px 0 #000`.

### Button language

**Primary — pine island button (default CTA):**
- Fill: `--pine`
- Text: `--paper`
- Shape: pill (`border-radius: 999px`)
- Padding: `0.75rem 1.25rem 0.75rem 1.75rem`
- Trailing icon: nested circular wrapper (`background: rgba(255,255,255,.15)`, `border-radius: 999px`, `padding: 0.5rem`) holding `→` or icon
- Hover: magnetic drift (JS), icon translates diagonally up-right, fill lightens to `--pine-soft`
- Used: all CTAs except the one most important audit CTA per page

**Accent — terracotta island button (single audit CTA):**
- Same structure as pine island button
- Fill: `--terra`
- Hover fill: `--terra-deep`
- Used: exactly once per page — the primary "Get my free website audit" CTA at closing

**Ghost:**
- Text only, 2px underline in `--ink`
- Hover: underline color transitions to `--terra`
- Used: secondary actions, inline links in nav

**On dark pine sections:**
- Pine island button uses `--pine-soft` fill with a faint `rgba(255,255,255,.12)` border and inset highlight
- Terracotta island button unchanged

### Form language

Minimal, high-trust. The audit form collects name + website URL + email. Three fields only.

- Input background: `--core`
- Input border: `1px solid var(--hair)`
- Input border-radius: `0.625rem`
- Focus border: `2px solid var(--pine)`
- Label: Hanken 500, `--ink`, 0.875rem
- Submit button: terracotta island button
- No multi-step wizard, no progress bars, no distraction

### Navigation

- Flat, quiet, direct
- Logo left, nav links center, single CTA button right
- Nav link weight: Hanken 500, sentence case, `--ink-soft`
- Active/hover: `--ink`
- CTA: pine island button, small variant
- No mega-menu. No dropdown complexity.
- Sticky on scroll with light `--paper` background and faint `--hair` border-bottom

### Proof modules

**1. Founder note**
First-person copy block with a portrait thumbnail (close crop, circular). Hanken body at 1.0625rem. Quote attribution: Hanken 600, name; Hanken 400 italic, title. Pine hairline left border.

**2. Floating proof chips**
Rounded pill cards overlaid on the founder portrait in the hero. Contain an icon + short outcome text ("New inquiry · 9:48 pm", "Replied in 2 min"). Background `--core`, shadow `--lift`, `border-radius: 999px`. Clearly illustrative until replaced with real data.

**3. Credential bar**
Single-line strip on `--pine-wash`. Hanken 500, centered or left. "6 years of software engineering · One person on your project · Audit delivered in 2 days." No badge graphics.

**4. Testimonial card (placeholder structure)**
Double-shell card. Inner: quote in Hanken 400 1.0625rem, attribution (name + business type) in Hanken 600 + Hanken 400. No star rating until real reviews exist. Portrait photo required with any real testimonial — no headshot placeholder icons.

**5. Before/after comparison**
Two-column layout on `--paper-deep`. Left: "Before" list (Hanken 400, `--ink-faint`). Right: "After" list (Hanken 600, `--ink`). Visual distinction via weight and color, not color-coded badges. Named client required — no fabricated examples.

### Signature component

**The island button** is the brand's single most recognizable UI element. A filled pill with a nested circular icon wrapper holding a directional `→`, soft pine lift shadow, magnetic hover with diagonal icon drift. Every designer and developer must implement this exactly — it is what the brand feels like at the interaction layer.

### Component anti-patterns

- App-style sidebar navigation or dashboard chrome
- Overdesigned service cards stacking icon + badge + pill + shadow simultaneously
- Multiple competing button styles in one section
- Fake SaaS widgets (chatbot previews, analytics panels, workflow boards)
- Award/badge clusters without verifiable credentials
- Hard offset block shadows anywhere

---

## 7. Proof presentation

Proof is the highest-stakes section of the site. This brand has high trust burden and zero third-party reviews at launch. Every proof decision must be honest, specific, and structured to grow.

### What must appear above the fold

- Founder portrait (primary identity proof)
- One floating proof chip (illustrative outcome — clearly labeled if not real data)
- Credential line: years of engineering + one-person promise

### Testimonial rules

- Never display a testimonial without a real full name and real photo
- No generic avatar icons, no stock headshots
- No star ratings until earned on a third-party platform (GBP, Google, etc.)
- Structure the testimonial card now with an honest placeholder state ("First client reviews in progress — see the before/after below")
- When real reviews arrive: add name, photo, and verbatim quote. Remove the placeholder state.

### Founder proof

The single most powerful trust signal for this brand. Display prominently:
- First-person note: "I'm Thao. One person on your project, start to finish."
- Portrait: close-medium, warm natural light, polished-candid — not posed corporate
- Credential bar: 6 years software engineering, named clearly and specifically

### Before/after proof

The "Quán Phở, rebuilt" example is the only proof currently available. Use it prominently.
- Named clearly — "Quán Phở" — never anonymous
- Visual format: two-column attribute comparison (Old site / New site)
- Do not add metrics that don't exist. Let the before/after comparison speak.
- When more case studies arrive: add outcome data (load time, booking rate, response time) if real and specific

### Guarantee / promise claims

Frame the free audit as the proof-of-quality offer:
- "Yours to keep, nothing owed, nothing to cancel."
- "You see the full scope and price before you commit."
These are already on the site. Present them prominently in the proof section, not buried in the FAQ.

### What never gets fabricated

- Review counts or star ratings
- Client revenue numbers or "conversion rate improvements"
- Named client results without explicit permission
- "AI transformation" before/after metrics
- Testimonials without a real person attached

---

## 8. Imagery and art direction

### Photography direction

Founder-led. Thao's portrait is the primary trust signal. All other imagery is secondary.

### Subject priority

1. Thao — polished-candid, warm natural light, close-medium crop
2. Proof moments — notification cards, booking confirmations, outcome illustrations
3. Client work — before/after comparisons (named, specific)

### Mood

Warm. Intimate. Unhurried. The opposite of stock photography energy.

### Lighting

Natural or soft studio. Warm color temperature. No high-contrast harsh shadows. No cold overlit corporate headshot aesthetic.

### Composition

- Portrait: close-medium crop, slight warmth, looking into frame (not away)
- Outcome illustrations: tight crop on the notification or booking confirmation detail — not a phone mockup shot
- No wide establishing shots unless showing a client's physical business

### Retouching philosophy

Light and honest. Clean up distractions but do not over-smooth or whiten. The brand is human, not polished-to-perfection.

### Illustration and icon direction

Minimal outline icons only. Used in: service section labels, process step markers. Never decorative. Line weight: 1.5px, stroke color `--ink-soft` or `--pine`.

No complex illustration systems. No icon packs with varied styles. No emoji in UI.

### Proof imagery rules

- Floating proof chips: illustrative notification cards — designed in the brand system, not screenshots
- Before/after: real client work only, named explicitly
- Never fabricate UI results (fake analytics screens, fake booking calendars)

### Image treatment

No filters, no color overlays, no vignettes. Imagery sits on `--paper` or `--core` backgrounds without treatment. Let the photography be warm by nature, not by post-processing.

### Imagery anti-patterns

- Generic stock: laptops, handshakes, smiling-at-computer, team-at-whiteboard
- Phone mockup hero shots (this is not an app)
- Workflow node diagrams or automation flow screenshots
- Dashboard UI screenshots
- Before/after without real attribution
- Cold corporate headshots
- Magnifying glass on laptop, gears-on-a-screen, lightbulb-over-head

---

## 9. Motion and interaction

### Motion level

Restrained. Motion serves reveal and hover. Nothing decorative, nothing looping.

### Motion role

- **Scroll reveal:** Elements fade up and rise once as they enter the viewport. Not on every scroll event — only on first enter.
- **Island button:** Magnetic hover drift + diagonal icon translate.
- No other motion required.

### Button interaction detail

```css
.island-btn {
  transition: transform 150ms var(--ease), box-shadow 150ms var(--ease);
}
.island-btn:hover {
  transform: translateY(-1px);
}
.island-btn .icon {
  transition: transform 200ms var(--ease-soft);
}
.island-btn:hover .icon {
  transform: translate(2px, -2px);
}
```

### Scroll reveal

```js
const observer = new IntersectionObserver(
  entries => entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target); // once only
    }
  }),
  { threshold: 0.15 }
);
document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));
```

```css
[data-reveal] { opacity: 0; transform: translateY(16px); transition: opacity 600ms var(--ease-soft), transform 600ms var(--ease-soft); }
[data-reveal].visible { opacity: 1; transform: none; }
```

### Performance rules

- Animate `transform` and `opacity` only
- `backdrop-blur` only on fixed elements (nav)
- Grain texture on a `position: fixed; pointer-events: none` layer
- No layout-triggering properties in animation

### Reduced motion

All animations guarded:
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Motion anti-patterns

- Looping ambient animations
- Parallax scrolling
- Floating or persistent animated widgets
- Transitions that delay reading content
- Animations re-triggering on every scroll pass
- Staggered entrance animations on body copy

---

## 10. Homepage application

### Section sequence

Every section traces to a buyer need, proof requirement, or conversion goal from the Business Persona.

| # | Section | Background | Purpose |
|---|---|---|---|
| 1 | Nav | `--paper` + `--hair` border | Direct access, single CTA |
| 2 | Hero | `--paper` | Identity + problem + primary CTA. Founder portrait + proof chip. |
| 3 | Problem / cost | `--paper-deep` | Name the invisible cost. "Most owners lose the customer before anyone ever talks to them." |
| 4 | How it works | `--pine-wash` | Customer journey — 3 steps. "They find you. They reach out. They hear back fast. They book again." |
| 5 | Services | `--paper` | Two halves: Website / Quiet Systems. 2-column split. |
| 6 | Proof | `--paper-deep` | Before/after (Quán Phở). Founder note. Credential bar. Placeholder testimonial structure. |
| 7 | Process | `--pine` (dark) | Step 1: Free audit. Step 2: Scope + price. Step 3: Build. Short, reassuring. |
| 8 | About | `--paper` | Thao's bio. First-person, short, founder-present. Engineering credential. Direct access promise. |
| 9 | CTA closing | `--pine` (dark) | "Stop losing customers you'll never know you lost." Single terracotta CTA. |
| 10 | Footer | `--paper-deep` | Email, phone, copyright. No noise. |

### CTA pattern

- Hero: pine island button ("Get my free website audit →")
- Process section end: ghost link ("See what the audit covers")
- Closing CTA band: terracotta island button ("Send me your URL →") — the one terracotta CTA per page

### Proof placement

- Above the fold: founder portrait + floating proof chip
- Mid-page: before/after comparison + credential bar
- Lower: placeholder testimonial card structure with honest framing

### Mobile notes

- Hero: portrait drops below the heading. Proof chip positions below portrait.
- Process steps: vertical stack, numbered
- Services: single column
- About: portrait above bio
- Closing CTA: full-width terracotta island button, centered

---

## 11. Mockup directions

### Hero mockup

```
┌─ nav: logo left · links center · pine CTA right ────────────────────┐
│                                                                       │
│  [kicker: all-caps, pine-wash bg]                                    │
│                                                                       │
│  I build the website that wins                          ┌──────────┐ │
│  the customer *before* they call     [Cormorant Garamond italic]  │  Thao    │ │
│  the next name.                                         │ portrait │ │
│                                                         │          │ │
│  Two lines of body copy. Direct. One idea per line.     │ ┌──────┐ │ │
│                                                         │ │chip  │ │ │
│  [pine island btn: Get my free website audit →]         │ └──────┘ │ │
│                                                         └──────────┘ │
│  ↓ Free · no commitment · yours to keep                              │
└──────────────────────────────────────────────────────────────────────┘
Background: --paper
```

### Proof section mockup

```
┌── proof band ────────────────────────────────────────────────────────┐
│  Background: --paper-deep                                            │
│                                                                       │
│  [Before/after comparison — 2 column]                                │
│  Quán Phở, rebuilt                                                   │
│  BEFORE (--ink-faint)          AFTER (--ink, weight 600)             │
│  No mobile site                Fast on every device                  │
│  No online booking             Bookings while you cook               │
│  No follow-up on missed calls  Auto-reply in 2 min                   │
│                                                                       │
│  ────────────────────────────────────────────────────────           │
│                                                                       │
│  [Founder note — left]              [Credential bar — right]         │
│  Portrait + pine hairline border    "6 years · One person · 2 days"  │
│  First-person quote block                                             │
└──────────────────────────────────────────────────────────────────────┘
```

### CTA band mockup

```
┌── closing CTA ────────────────────────────────────────────────────────┐
│  Background: --pine (dark)                                            │
│                                                                       │
│        Stop losing customers you'll never know you lost.             │
│        [Hanken 700, --paper, sentence case]                          │
│                                                                       │
│        [terracotta island btn: Send me your URL →]                   │
│                                                                       │
│        Free · No commitment · Audit in 2 days                        │
│        [Hanken 400, --terra-light, 0.875rem]                         │
└───────────────────────────────────────────────────────────────────────┘
```

### Service card mockup (double-shell)

```
┌─ outer shell: rgba(30,58,52,.04) · hairline · 1.75rem radius ────────┐
│  ┌─ inner core: --core · concentric radius · inset highlight ──────┐ │
│  │                                                                  │ │
│  │  [kicker: SERVICE 01 — all-caps, tracked, pine]                 │ │
│  │  Websites                                                        │ │
│  │  [Hanken 700, 1.5rem, --ink]                                    │ │
│  │                                                                  │ │
│  │  A site that gets found and actually converts.                  │ │
│  │  [Hanken 400, 1rem, --ink-soft]                                 │ │
│  │                                                                  │ │
│  │  [ghost btn: See what's included ↗]                             │ │
│  └──────────────────────────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────────────────────┘
```

### Social tile direction

Square format (1080×1080). `--pine` background. Single quote line in Hanken 700, `--paper`. Cormorant Garamond italic fragment in `--terra-light`. Logo mark bottom-left. No photography. Clean and bold.

---

## 12. Do / Don't rules

### Do

1. Lead every section with the problem or cost of inaction — solution second
2. Use first-person singular in all copy ("I build," "I send back," "you reach me directly") — never "we"
3. Keep Thao's portrait visible in the hero above the fold on all viewports
4. Use pine as the trust anchor throughout — never introduce a second brand color
5. Alternate section backgrounds so no two adjacent bands match
6. Limit terracotta to the single most important CTA per page
7. Use sentence case for all headings without exception
8. Place the free audit CTA in the hero and the closing section at minimum
9. Use the double-shell card treatment for all service and proof cards
10. Keep the Cormorant Garamond italic to one fragment per section — it must stay rare

### Don't

1. Use stock photography (laptops, handshakes, smiling-at-screen, team-at-whiteboard)
2. Introduce any second accent color for any reason
3. Show workflow diagrams, node maps, automation flows, or dashboard screenshots
4. Write in plural voice anywhere on the site
5. Display a testimonial or star rating without a real name and real photo
6. Use pure `#FFF` as a background — `--paper` and `--core` only
7. Use Cormorant Garamond for body, UI, nav, or caption text
8. Fabricate metrics, review counts, client revenue numbers, or "AI transformation" results
9. Place more than one CTA in a single section
10. Use hard offset block shadows — soft diffused pine-tinted depth only
11. Use blue, purple, teal, or any color outside the locked palette
12. Use Title Case for headings

---

## 13. Design tokens

### CSS custom properties

```css
:root {
  /* Color */
  --paper:        #F6F3EE;
  --paper-deep:   #EFEAE1;
  --pine-wash:    #E8EFEC;
  --core:         #FBFAF7;
  --ink:          #171717;
  --ink-soft:     #4E4E4E;
  --ink-faint:    #857F75;
  --pine:         #1E3A34;
  --pine-soft:    #2E5148;
  --terra:        #C06A45;
  --terra-deep:   #9F4F33;
  --terra-light:  #E7A282;
  --hair:         rgba(23,23,23,.10);

  /* Shadows */
  --lift:    0 1px 2px rgba(30,58,52,.04), 0 18px 40px -22px rgba(30,58,52,.30);
  --lift-lg: 0 2px 4px rgba(30,58,52,.05), 0 44px 80px -36px rgba(30,58,52,.40);
  --inner-hi: inset 0 1px 1px rgba(255,255,255,.70);

  /* Radius */
  --r-card:   1.75rem;
  --r-inner:  calc(1.75rem - 10px);
  --r-pill:   999px;
  --r-input:  0.625rem;
  --r-portrait: 1.25rem;

  /* Motion */
  --ease:      cubic-bezier(.32,.72,0,1);
  --ease-soft: cubic-bezier(.22,1,.36,1);
  --dur-fast:  150ms;
  --dur-base:  300ms;
  --dur-slow:  600ms;

  /* Typography */
  --font-sans: 'Hanken Grotesk', system-ui, -apple-system, sans-serif;
  --font-serif: 'Cormorant Garamond', Georgia, serif;

  /* Layout */
  --max-w:      1200px;
  --section-py: 120px;
  --text-col:   680px;
}
```

### JSON tokens (optional reference)

```json
{
  "color": {
    "paper":       "#F6F3EE",
    "paper-deep":  "#EFEAE1",
    "pine-wash":   "#E8EFEC",
    "core":        "#FBFAF7",
    "ink":         "#171717",
    "ink-soft":    "#4E4E4E",
    "ink-faint":   "#857F75",
    "pine":        "#1E3A34",
    "pine-soft":   "#2E5148",
    "terra":       "#C06A45",
    "terra-deep":  "#9F4F33",
    "terra-light": "#E7A282"
  },
  "radius": {
    "card":    "1.75rem",
    "inner":   "calc(1.75rem - 10px)",
    "pill":    "999px",
    "input":   "0.625rem"
  },
  "font": {
    "sans":  "Hanken Grotesk",
    "serif": "Cormorant Garamond"
  }
}
```

---

## 14. Implementation notes

### What developers must preserve exactly

- Token names and hex values — every color referenced by CSS custom property, not hardcoded hex
- Double-shell card structure — outer shell + inner core + inset highlight, in that order
- Island button structure — pill wrapper, inner icon wrapper, magnetic hover JS
- Section background sequence — never two adjacent sections with the same band
- Reduced-motion guard on every animation
- Cormorant Garamond loaded from Google Fonts, not substituted
- Sentence case on all headings — never Title Case

### What can flex

- Section padding can scale responsively (e.g. `clamp(48px, 8vw, 120px)`)
- Typography sizes can use `clamp()` for fluid scaling
- Proof chip content will be updated as real reviews come in
- Testimonial placeholder can be replaced with real testimonials as they arrive

### What must remain consistent across all future pages

- Color tokens — never add a color outside the palette
- Navigation structure — flat, single CTA right
- Island button as the only primary CTA shape
- Cormorant Garamond italic as the one serif accent per section
- Section banding rhythm

### What future agents must never improvise

- Second accent color
- New typeface
- Gradient or glassmorphism surface
- Plural voice in copy
- Hard shadow blocks
- Dashboard or workflow imagery

### Accessibility notes

- All interactive elements must have `:focus-visible` outlines using `--pine`
- Color is never the only way information is conveyed (use shape, weight, or label alongside)
- Alt text required on all images — portrait: "Thao Phuong, founder of TechPersona Studio"
- Form labels must be visible, not placeholder-only
- Reduced motion guard is required, not optional
- Minimum tap target: 44×44px on all buttons

### Print / PDF notes

The HTML guide is print-ready. Use browser File → Print → Save as PDF. The print CSS preserves:
- Section backgrounds with `-webkit-print-color-adjust: exact`
- Clean page breaks between major sections
- Legible typography at standard PDF zoom levels

---

## 15. Appendix

### Swappable proof modules

**Phase 1 (now — zero reviews):**
- Floating proof chip: illustrative, labeled "Illustrative example"
- Testimonial area: placeholder with honest copy ("First client reviews in progress")
- Credential bar: 6 years engineering + one-person promise + audit-in-2-days

**Phase 2 (first 2–3 reviews arrive):**
- Replace placeholder with real testimonial card: name + photo + verbatim quote
- Remove "in progress" framing
- Add GBP/Google review link if live

**Phase 3 (case study data available):**
- Add outcome metrics to before/after (load time, booking rate, response time) — real numbers only

### Notes for website blueprint stage

- Navigation CTA: "Get my free website audit" or condensed "Free audit →" on mobile
- Footer: email + phone only. No social icons until profiles are active and maintained.
- Blog/content section: not recommended at launch. Add only when there is a consistent publishing plan.
- FAQ: include 3–4 answers addressing the main objection ("Can I trust a solo operator?"), pricing model, and process. Already confirmed on current site — preserve.
