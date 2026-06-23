# TechPersona Studio — Pine Editorial brand guide

The look: warm editorial calm with operational backbone. Stone-paper neutrals, a deep pine that anchors trust, one rare terracotta accent for warmth. Soft, diffused depth and squircle corners, not hard print blocks. Big serif moments over quiet sans body. Founder-led and human, credible enough for a law firm and grounded enough for a roofer.

> **North star:** you're hiring a named person, not an agency. The brand should always feel like *Thao*, not a faceless studio or another AI vendor.

---

## Personality

- **Founder-led, not faceless.** A real person carries the brand. First-person voice ("I'm Thao"), a real face, plain owner-language.
- **Calm, not loud.** One accent color, used rarely, holds all the warmth. Pine and stone do the rest.
- **Premium, not precious.** Soft depth, generous whitespace, restrained color. Expensive-feeling, never over-art-directed.
- **Operational, not decorative.** Outcomes a busy owner understands in five seconds. The technology stays behind the wall.
- **Human, not corporate.** Warm stone over cold white. Rounded human elements against a calm structural grid.

---

## Color

Pine is the trust anchor. Stone neutrals keep it calm. Terracotta is warmth and emphasis only, never a base.

| Token | Hex | Use |
|-------|-----|-----|
| `--paper` | `#F6F3EE` | Default background. Warm stone neutral. |
| `--paper-deep` | `#EFEAE1` | Alternate section background, for band rhythm. |
| `--pine-wash` | `#E8EFEC` | Soft pine-tinted band, tags, quiet panels. |
| `--core` | `#FBFAF7` | Card interiors. A soft off-white, never clinical `#FFF`. |
| `--ink` | `#171717` | Primary text and highest-contrast detail. |
| `--ink-soft` | `#4E4E4E` | Body copy, secondary text. |
| `--ink-faint` | `#857F75` | Labels, captions, muted detail. |
| `--pine` | `#1E3A34` | Primary brand color. CTAs, dark sections, the logo mark. |
| `--pine-soft` | `#2E5148` | Hover/pressed pine, softer fills on dark. |
| `--terra` | `#C06A45` | Terracotta. The one accent: a single primary CTA, italic emphasis. |
| `--terra-deep` | `#9F4F33` | Hover/pressed terracotta. |
| `--terra-light` | `#E7A282` | Terracotta on dark pine (kickers, italic emphasis on dark). |
| `--hair` | `rgba(23,23,23,.10)` | Faint dividers and hairline borders. |

**Ratio:** roughly 60% stone, 30% pine/ink, ~8% terracotta. The accent earns its punch by being rare. Never let terracotta cover large areas; it's a spice, not a base, and it must never compete with pine.

**Section rhythm:** alternate stone / deep stone / pine-wash / dark pine so no two touching bands share a shade. One dark pine band per page keeps the eye moving and gives the brand a calm anchor.

---

## Typography

Two families from Google Fonts. Hanken leads, Fraunces accents (~90/10).

- **Hanken Grotesk** (sans) — body, UI, labels, and most headings. Weights 400–800. This is the workhorse; it makes the brand read operationally competent, not artsy.
- **Fraunces** (serif display) — reserved for hero headlines and *one* emphasized phrase per section. The **italic Fraunces phrase is the signature move** (set in terracotta). Use it once, not for whole sentences.

**Pairing rule:** Fraunces sets the moments; Hanken does the reading. Too much serif pulls the brand into newspaper territory; too little loses the editorial soul. Keep it to display sizes and single accents.

**Casing:** sentence case for headings (never Title Case). Uppercase only for small tracked kickers (`letter-spacing:.20em`).

**Headline feel:** `line-height:1.02`, `letter-spacing:-.045em`. Tight, confident, big.

---

## Shape & texture

- **Corners:** squircle radii. Outer card shells `~2rem`; inner cores a concentric `calc(2rem - 10px)`; buttons fully rounded pills. Rounded throughout, this version is calm, not brutalist.
- **Shadows:** soft, diffused, **pine-tinted**, never hard offset blocks. Example: `0 18px 40px -22px rgba(30,58,52,.30)`. Depth reads premium; a hard `18px 18px 0` block reads "indie studio" and is banned.
- **Double-bezel cards:** a pine-tinted outer shell (`rgba(30,58,52,.045)`, hairline, `~2rem` radius, `~10px` padding) wrapping an inner core (`--core`, concentric radius, faint inset highlight `inset 0 1px 1px rgba(255,255,255,.7)`). Cards look like machined hardware, not flat panels.
- **Grain:** a whisper of SVG noise (`opacity:.04`, multiply) on a *fixed* `pointer-events:none` layer. Texture, not a paper-print effect.
- **Rounded human elements:** portrait frames, proof chips, status dots stay soft. Structure stays calm and gridded; people and proof stay round.

---

## Motion

- **One orchestrated load.** The hero staggers in (`rise` keyframe with stepped delays), not scattered micro-animations.
- **Scroll-reveal** via IntersectionObserver: elements fade, rise, and unblur once as they enter view.
- **Magnetic island buttons:** the button drifts a few pixels toward the cursor; the nested icon translates diagonally on hover.
- **Easing:** custom cubic-beziers only (`cubic-bezier(.32,.72,0,1)` for UI, `cubic-bezier(.22,1,.36,1)` for reveals). Never `linear` or `ease-in-out`.
- **Performance:** animate `transform` and `opacity` only. `backdrop-blur` only on fixed elements. Grain on a fixed layer.
- Every animation guarded by `prefers-reduced-motion`.

---

## Buttons

The **island button** with a button-in-button trailing icon is the signature control.

- **Primary (pine):** pine fill, paper text, soft lift, a nested circular icon wrapper holding the `→`. Magnetic on hover; icon drifts up-right. Default CTA across the site.
- **Accent (terracotta):** same shape in terracotta. Reserved for the **single most important CTA** per page (usually the final audit CTA). Rare by design.
- **Ghost:** text with a 2px ink underline; underline goes terracotta on hover. Secondary actions.
- **On dark pine:** pine-soft fill with a faint light edge; the soft shadow is invisible on dark, so lean on the inset highlight.

---

## Imagery & proof

- **Show the human and the outcome,** never the machinery. A real face (Thao or a real owner), a booked job, a fast reply, a customer who came back.
- **No phone-chatbot UI as hero, no workflow/node diagrams, no dashboards.** The customer journey is the only "flow" allowed, and it's framed as the customer's experience.
- **Floating proof chips** (e.g. "New booking · Sat 9:48 pm", "Replied in 2 min") sit over a portrait as soft rounded cards. Keep them illustrative until real, never fabricate metrics.
- **Quiet systems** are shown as three felt outcomes: *found you first · heard back fast · felt remembered.*

---

## What to avoid

- **No hard offset block shadows.** The single biggest "indie agency" tell. Soft, diffused, pine-tinted depth only.
- **No purple/blue AI gradients, glassmorphism, or frosted blur on content.** That's the generic SaaS look this brand rejects.
- **No workflow/node diagrams, dashboards, or integration logos.** The technology stays behind the wall.
- **No pure white (`#FFF`) fields.** Warm stone and `--core` off-white; white reads cold and clinical.
- **No second accent color.** Terracotta is the only accent. Adding teal, gold, etc. dilutes it.
- **No large fields of terracotta.** The accent stays under ~10% of any view and never competes with pine.
- **No serif body or serif everywhere.** Fraunces is a 10% accent; Hanken does the reading.
- **No generic fonts** (Inter, Roboto, Arial, system stacks). Fraunces + Hanken only.
- **No Title Case headings.** Sentence case, always.
- **No corporate jargon** ("leverage," "seamless," "robust," "innovative," "best practices"). Plain owner-language only.
- **No fake metrics, fake case studies, or "AI transformation" claims.** Honest and specific beats polished and vague.
- **No faceless-agency framing.** Lead with the founder; one person, start to finish.

---

## Quick reference (copy-paste tokens)

```css
:root{
  --paper:#F6F3EE;
  --paper-deep:#EFEAE1;
  --pine-wash:#E8EFEC;
  --core:#FBFAF7;
  --ink:#171717;
  --ink-soft:#4E4E4E;
  --ink-faint:#857F75;
  --pine:#1E3A34;
  --pine-soft:#2E5148;
  --terra:#C06A45;
  --terra-deep:#9F4F33;
  --terra-light:#E7A282;
  --hair:rgba(23,23,23,.10);
  /* soft, pine-tinted depth — never hard offset blocks */
  --lift:0 1px 2px rgba(30,58,52,.04), 0 18px 40px -22px rgba(30,58,52,.30);
  --lift-lg:0 2px 4px rgba(30,58,52,.05), 0 44px 80px -36px rgba(30,58,52,.40);
  --inner-hi:inset 0 1px 1px rgba(255,255,255,.7);
  --ease:cubic-bezier(.32,.72,0,1);
  --ease-soft:cubic-bezier(.22,1,.36,1);
}
```

Fonts:

```html
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,500&family=Hanken+Grotesk:wght@400;500;600;700;800&display=swap" rel="stylesheet">
```

Reference build: `branding/techpersona_pine_editorial.html`.
