# TechPersona Studio — brand guide

The look: warm editorial print. Think a well-set broadsheet or a letterpress flyer, not a SaaS dashboard. Cream paper, near-black ink, one confident terracotta accent. Hard edges, blocky shadows, a faint paper grain. Confident and human, never slick or corporate.

---

## Personality

- **Honest, not hypey.** Plain language an owner uses, never agency jargon.
- **Confident, not loud.** One accent color, used sparingly, carries all the energy.
- **Crafted, not templated.** Sharp borders and offset shadows read as deliberate and printed.
- **Human, not corporate.** Warm cream over cold white. A real person, not a faceless studio.

---

## Color

| Token | Hex | Use |
|-------|-----|-----|
| `--paper` | `#F2ECDF` | Default background. Warm cream. |
| `--paper-deep` | `#E9E0CD` | Alternate section background, for rhythm between bands. |
| `--ink` | `#1A1813` | Primary text, borders, dark section backgrounds. Near-black, warm. |
| `--ink-soft` | `#534D40` | Body text on cream, secondary copy. |
| `--ink-faint` | `#8A8270` | Labels, captions, muted detail. |
| `--accent` | `#CE3A18` | Terracotta. The one accent. CTAs, emphasis, highlights. |
| `--accent-deep` | `#A82C0F` | Hover/pressed accent, calmer fills on dark backgrounds. |
| `--hair` | `rgba(26,24,19,.14)` | Faint section dividers and hairlines. |

**Ratio:** roughly 70% cream, 25% ink, 5% terracotta. The accent earns its punch by being rare. Never let red cover large areas; it's a spice, not a base.

**Section rhythm:** alternate cream / deep cream / dark ink so no two touching sections share a shade. This prevents blending and keeps the eye moving.

---

## Typography

Two families, pulled from Google Fonts.

- **Fraunces** (serif display) — headings, the logo, italic emphasis, big numbers. Weights 400-700, plus italic 500. Set tight: `line-height:1.02`, `letter-spacing:-.015em`. The italic is a signature move; use it for a single emphasized phrase, not whole sentences.
- **Hanken Grotesk** (sans body) — all body copy, buttons, labels, UI. Weights 400-700. Comfortable, readable, neutral enough to let Fraunces lead.

**Pairing rule:** Fraunces sets the voice and the moments; Hanken does the reading. Don't swap them. Body in serif gets tiring; headings in sans lose the editorial feel.

**Casing:** sentence case for headings (not Title Case). Uppercase only for small tracked labels/kickers (`letter-spacing:.14em`).

---

## Shape & texture

- **Borders:** `2px solid ink` on interactive/standout elements (buttons, cards, chips). Faint `--hair` for section dividers. Sharp 90° corners; no rounding on structural elements.
- **Shadows:** hard offset blocks, not soft blur. `6px 6px 0 ink` on buttons, up to `18px 18px 0 ink` on big cards. The shadow is a solid shape, never a glow.
- **Grain:** a faint SVG paper-noise overlay (`opacity:.05`, multiply blend) sits over everything. It's what makes the cream feel like paper.
- **Rounded elements** appear only where they're human: the phone mockup, chat bubbles, status dots. Structure stays sharp; people stay round. That contrast is intentional.

---

## Motion

- **One orchestrated load,** not scattered micro-animations. Hero staggers in (`load` with stepped `animation-delay`).
- **Scroll-reveal** via IntersectionObserver: elements rise and fade in once.
- **Scroll-scrubbed journey:** the connecting line draws itself as you scroll. Tied to scroll position, not a loop.
- **Hover:** buttons lift up-left and the shadow grows (`translate(-3px,-3px)` + bigger offset). Tactile, like pressing a printed button.
- Every animation guarded by `prefers-reduced-motion`.

---

## Buttons

- **Primary:** terracotta fill, ink border, hard ink shadow, white-cream text. Lifts on hover, deepens to `--accent-deep`. Use on cream.
- **On dark sections:** deeper fill (`--accent-deep`) with a faint light edge instead of the ink shadow (which vanishes on black).
- **Ghost:** text with a 2px ink underline; underline goes terracotta on hover. For secondary actions.

---

## What to avoid

- **No purple/blue gradients, no glassmorphism, no frosted blur.** That's the generic SaaS look this brand deliberately rejects.
- **No pure white (`#FFF`) backgrounds.** Always warm cream. White reads cold and clinical.
- **No soft drop shadows or glows.** Shadows are solid offset blocks, full stop.
- **No rounded corners on structural elements** (sections, cards, buttons). Rounding belongs only to human/device elements.
- **No second accent color.** Terracotta is the only accent. Adding teal, gold, etc. dilutes it.
- **No large fields of red.** The accent stays under ~5% of any view.
- **No generic fonts** (Inter, Roboto, Arial, system stacks). Fraunces + Hanken only.
- **No Title Case headings.** Sentence case, always.
- **No corporate jargon** in copy: "leverage," "seamless," "robust," "innovative," "best practices." Plain owner-language only.
- **No stock-photo gloss or fake-result stats.** Honest and specific beats polished and vague.

---

## Quick reference (copy-paste tokens)

```css
:root{
  --paper:#F2ECDF;
  --paper-deep:#E9E0CD;
  --ink:#1A1813;
  --ink-soft:#534D40;
  --ink-faint:#8A8270;
  --accent:#CE3A18;
  --accent-deep:#A82C0F;
  --hair:rgba(26,24,19,.14);
  --shadow:18px 18px 0 rgba(26,24,19,1);
}
```

Fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,500&family=Hanken+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
```
