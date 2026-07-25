# Lamucca — Design System «A DOS TINTAS» v1.0

**Status:** adopted 2026-07-25 · the production specification
**Upstream:** creative-direction.md (the law: every page carries both inks)
**Implementation:** `src/styles/tokens.css` (tokens) → `src/styles/base.css` (primitives)
→ components. **Tokens are the only source of truth; no raw hex or px in components.**

Naming convention: `--category-role-variant`. Two layers:
- **Primitive tokens** (`--ink`, `--space-m`) — the palette and scales. Never used
  directly in components when a semantic token exists.
- **Semantic tokens** (`--surface-page`, `--stamp-fill`) — role-based aliases.
  Components consume these, so a role can be re-tuned globally in one line.

---

# 1. TYPOGRAPHY

## 1.1 The two voices

The concept is two inks; typography is two voices that must co-occur on every composed
block. A screen with only one voice is off-concept.

**Primary font — Fraunces Variable** (`--font-display`) — *the HIGH ink.*
Self-hosted variable (wght 100–900 + italic; optical sizing + SOFT/WONK axes).
Role: headlines, venue names, pull quotes, dictionary head-words, the `.voice` italic.
Rationale: a soft, slightly wonky old-style serif with real optical sizing — editorial
warmth without luxury coldness. It is the closest open-licensed relative to the
brand's American Typewriter register, but with far more range.
Fallback: `Georgia, 'Times New Roman', serif` (metric-compatible enough for a
sub-0.1 CLS swap).

**Secondary font — Archivo Variable** (`--font-text`) — *the LOW ink.*
Self-hosted variable (wght 100–900). Role: body copy, UI, labels, wayfinding, stamps,
tickers, prices, forms. Rationale: a grotesque drawn from American gothic wood-type
and signage — it *is* street lettering, and it stays legible at 13px on a phone.
Fallback: `'Helvetica Neue', Arial, sans-serif`.

**Never introduce a third family.** New expressive needs are solved with Fraunces'
axes (SOFT/WONK/optical) or Archivo's weight range, not new files.

## 1.2 Display typography

| Role | Token | Family | Weight | Tracking | Leading |
|---|---|---|---|---|---|
| Hero headline | `--step-6` | Fraunces | 560 | −0.02em | 1.02 |
| Chapter title | `--step-4` | Fraunces | 560 | −0.015em | 1.06 |
| Venue name (page) | `--step-5` | Fraunces | 560 | −0.015em | 1.04 |
| Venue name (card) | `--step-2` | Fraunces | 540 | −0.01em | 1.1 |
| Pull quote (`.cita`) | `--step-3` | Fraunces italic | 420 | 0 | 1.15 |
| Manifesto claim | `--step-5` | Fraunces | 540 | −0.015em | 1.02 |

Rules: display type is set in **Fraunces only**; optical sizing runs automatically;
SOFT/WONK axes are permitted at ≥56px (they add the hand-drawn warmth) and forbidden
below. Headlines are `text-wrap: balance`, max 13ch for heroes, 18ch for chapter
titles — a long display line is a broken display line.

## 1.3 Body typography

| Role | Token | Family | Weight | Tracking | Leading | Measure |
|---|---|---|---|---|---|---|
| Body / paragraph | `--step-0` | Archivo | 400 | 0 | 1.6 | 62ch |
| Lead paragraph | `--step-1` | Archivo | 400 | 0 | 1.5 | 36ch |
| Editorial body (ink sections) | `--step-1` | Archivo | 400 | 0 | 1.6 | 52ch |
| Small print / legal | `--step--1` | Archivo | 400 | 0.01em | 1.5 | 68ch |
| **Label / wayfinding** (`.label`) | `--step--1` | Archivo | 640 | **0.14em** | 1.3 | — |
| Stamp label | `--step--1` | Archivo | 700 | 0.10em | 1 | — |
| Price | `--step-0` | Archivo | 600 | 0.01em | 1.4 | — |

Rules: body text is **never** set in Fraunces. `.label` (uppercase, 0.14em tracked) is
the signage voice — it is never used for sentences, only for wayfinding, kickers,
eyebrows and metadata. Body is ≥16px on mobile, always. Never below `--step--1` (13px)
for any text.

## 1.4 Scale

A fluid 1.19 ratio at 375px opening to 1.28 at 1440px — modest on mobile (so long
Spanish words survive), dramatic on desktop (so the front page can shout).

| Token | 375px | 1440px | Use |
|---|---|---|---|
| `--step--1` | 13px | 14px | labels, captions, legal |
| `--step-0` | 16px | 18px | body |
| `--step-1` | 19px | 23px | lead, editorial body |
| `--step-2` | 24px | 31px | card titles, sub-heads |
| `--step-3` | 31px | 44px | quotes, section sub-heads |
| `--step-4` | 40px | 64px | chapter titles |
| `--step-5` | 50px | 90px | venue names, claims |
| `--step-6` | 60px | 120px | hero |

## 1.5 Letter spacing & line height — the rule of thumb

- Tracking **tightens as size grows** (−0.02em at hero, 0 at body) and **opens as
  weight/caps increase** (+0.10 to +0.14em for caps labels). Never track lowercase
  body copy.
- Leading **tightens as size grows**: 1.02 (hero) → 1.1 (card titles) → 1.5–1.6 (body).
  Body leading never goes below 1.5; display leading never above 1.2.

---

# 2. COLOR

Two inks on paper. Everything else is a condiment. **Measured contrast ratios below
are computed, not estimated** — they are acceptance criteria.

## 2.1 Primary colors (the two inks + the page)

| Token | Hex | Role | Contrast |
|---|---|---|---|
| `--paper` | `#F4EEE3` | the page | — |
| `--ink` | `#201B16` | first ink: text, rules, borders | **14.8:1** on paper ✓ AAA |
| `--tomato` | `#D2401E` | second ink: fields, accents, decorative | 4.05:1 on paper — **large text / decorative only** |

## 2.2 Secondary colors

| Token | Hex | Role | Contrast |
|---|---|---|---|
| `--paper-deep` | `#ECE3D2` | cards, alternating sections, insets | — |
| `--ink-soft` | `#4C443B` | secondary text | **8.3:1** on paper ✓ AAA |
| `--ink-faint` | `#6D6357` | captions, metadata | **5.1:1** on paper ✓ AA |
| `--tomato-deep` | `#B23317` | **the stamp fill**, small tomato text, hovers | **5.4:1** vs paper ✓ AA |

**Critical rule:** the primary CTA (el sello) prints in `--tomato-deep`, not `--tomato`.
Paper-on-tomato measures 4.05:1 and fails AA at label size; paper-on-tomato-deep
measures 5.4:1 and passes. `--tomato` remains the decorative ink (fields, rules,
italic accents ≥24px). This is non-negotiable and encoded in `--stamp-fill`.

## 2.3 Accent colors (casa accents + the heart)

| Token | Hex | Role | Text on it |
|---|---|---|---|
| `--butter` | `#E8B940` | casa accent (Prado, Carmen, Plaza España, En Bruto, Makáá) | **ink** (9.3:1 ✓) — never paper (1.6:1 ✗) |
| `--olive` | `#5D6141` | casa accent (Almagro, Fuencarral, Andes, Pescadería, Magadán, Mar) | **paper** (5.6:1 ✓) — never ink (2.6:1 ✗) |
| `--coral` | `#FF6863` | **the brand heart only** — logo mark, ticker separators | decorative only (2.5:1) — never text, never a CTA |

Casa accents are assigned in the content model (`accent` field) and applied as fields,
never as text color. The system enforces the correct text ink per field via semantic
tokens (`--on-butter`, `--on-olive`).

## 2.4 Backgrounds (surfaces)

| Semantic token | Value | Use |
|---|---|---|
| `--surface-page` | `--paper` | default page |
| `--surface-raised` | `--paper-deep` | cards, dictionary card, insets |
| `--surface-inverse` | `--ink` | the ink chapters (Tahona, footer) |
| `--surface-field` | casa accent | venue card media, venue hero |

On `--surface-inverse`, text tokens invert: `--text-primary` → paper,
`--text-secondary` → `rgb(244 238 227 / 0.85)`, `--text-tertiary` →
`rgb(244 238 227 / 0.6)`. Handled by a `[data-ink]` scope, not by per-component
overrides.

## 2.5 Text hierarchy

| Level | Token | Value | Use |
|---|---|---|---|
| Primary | `--text-primary` | `--ink` | headlines, body |
| Secondary | `--text-secondary` | `--ink-soft` | lead paragraphs, descriptions |
| Tertiary | `--text-tertiary` | `--ink-faint` | metadata, captions, hours |
| Accent | `--text-accent` | `--tomato-deep` | kickers, links, "Conocer →" |
| Inverse | `--text-inverse` | `--paper` | text on ink/tomato/olive fields |

Color is never the sole carrier of meaning: links carry underline-on-hover or an
arrow; states carry icons or text, not just hue.

## 2.6 Lines & borders

`--line` = `rgb(32 27 22 / 0.16)` (hairline dividers, nav underline)
`--rule` = `1.5px solid var(--ink)` (**the press rule** — cards, sections, tags).
The 1.5px hard ink rule is a signature: it reads as printed, not as a UI border.
No box-shadows for depth; the only shadow permitted is the **print-block** offset
(`0 12px 0 -6px var(--ink)`) on card hover, which reads as paper lifting.

---

# 3. SPACING

## 3.1 Base unit

**4px base, 8px rhythm.** Every fluid step resolves to a multiple of 4 at both ends of
its clamp. Component padding uses the fluid space scale; hairline offsets (icon nudges,
optical corrections) may use raw 1–3px and are the only exception.

## 3.2 Scale

| Token | 375px | 1440px | Typical use |
|---|---|---|---|
| `--space-2xs` | 8px | 9px | icon gaps, tag inner |
| `--space-xs` | 12px | 14px | label→title, chip padding |
| `--space-s` | 16px | 18px | button padding, tight stacks |
| `--space-m` | 24px | 27px | card padding, paragraph rhythm |
| `--space-l` | 32px | 36px | block separation, grid gaps |
| `--space-xl` | 48px | 54px | sub-section separation |
| `--space-2xl` | 64px | 88px | chapter head→body |
| `--space-3xl` | 96px | 144px | **chapter separation** |

## 3.3 Margins (gutters)

`--gutter: clamp(20px, 4vw, 48px)` — the page margin, applied by `.container`.
Full-bleed elements (ticker, ink chapters, venue hero fields) break the gutter
deliberately; their *content* re-enters it via a nested `.container`.

## 3.4 Section spacing

- **Between chapters:** `--space-3xl` (96→144px). Chapters are separated by space or
  by an ink-flood transition — never by a decorative divider.
- **Chapter head → content:** `--space-2xl`.
- **Within a block:** `--space-m` between paragraphs, `--space-l` between sub-blocks.
- **Ink chapters** carry `padding-block: var(--space-3xl)` so the color field has
  weight; paper chapters may use `--space-3xl` top / `--space-2xl` bottom.

---

# 4. LAYOUT

## 4.1 Maximum content width

`--container: 84rem` (1344px) — the page. `--container-narrow: 56rem` (896px) for
reading-dense pages (Historia, legal). Body measure is capped at **62ch** regardless
of container; a paragraph never spans the full 1344px.

## 4.2 Desktop grid (≥1100px)

**12 columns**, `--space-l` gutter, max 1344px.
Standard placements: venue covers 4-4-4 (3 up) · editorial two-column 5/7 (story) ·
manifesto full-12 centered · universe index rows full-12 · aside layouts 7/5.
The grid is a placement tool, not a visible artifact — but the **1.5px ink rules
align to it**, which is what makes the page read as printed.

## 4.3 Tablet grid (700–1099px)

**8 columns**, `--space-l` gutter. Venue covers 4-4 (2 up); editorial collapses to a
single column at 900px; asides move below content. The nav switches to the overlay
menu below 900px.

## 4.4 Mobile grid (<700px)

**4 columns**, `--space-s` gutter, `--gutter` 20px page margin.
Everything is single-column; venue covers stack full-width; the sticky reserve bar
occupies the bottom edge; content reserves 76px bottom padding to clear it.
Touch targets ≥44×44px, spaced ≥8px. Designed at 375px first.

## 4.5 Breakpoints

`--bp-s: 480px` · `--bp-m: 700px` · `--bp-l: 900px` · `--bp-xl: 1100px` ·
`--bp-2xl: 1400px`. (Declared for documentation; media queries use literals since
CSS custom properties can't be used in `@media` conditions.)

---

# 5. IMAGERY

## 5.1 Photography direction

Priority of subject, in order: **spaces → faces → food**. The brand's biggest sensory
asset is its rooms; the second is its people; food is the proof, not the poster.

- **Spaces:** shot in service, warm practical light, people blurred in motion, wide
  enough to read the architecture (the marble bar, the graffiti, the beams). Never
  empty-restaurant-at-noon real-estate shots.
- **Faces:** muckeros at work — hands, mid-laugh, mid-service. Environmental portraits
  at thresholds (the transplanted organ from «Los Locales Llaman»). Never stock smiles.
- **Food:** on the actual table, from the diner's angle, in the room's light, with
  hands and glasses in frame. Never food-on-white, never tweezers, never overhead
  flat-lays.
- **Forbidden:** stock photography of any kind, AI-generated food, motion blur as
  style, HDR, teal-and-orange grading.

## 5.2 Cropping

Crop for **place, not product**: keep enough room to feel the space. Faces are cropped
generously (never at the chin). Full-bleed crops are permitted only for chapter
transitions and venue heroes. Every image has an art-directed mobile crop — the
desktop crop is never merely letterboxed (`<picture>` with a mobile source).

## 5.3 Aspect ratios

| Ratio | Use |
|---|---|
| **3:2** | venue cover cards (the standard cover) |
| **4:5** | portraits (muckeros), mobile-first editorial images |
| **16:9** | venue hero, chapter full-bleed bands |
| **1:1** | tiles, share/OG crops, gallery grid |
| **21:9** | rare cinematic band (once per page maximum) |

`aspect-ratio` is always declared so no image causes layout shift.

## 5.4 Image treatments

**The duotone law.** All photography renders by default in two-ink duotone — ink +
paper, or casa-accent + paper — via a CSS filter chain (grayscale → contrast →
sepia-shift → tint blend), no image processing required. This unifies the brand's
uneven legacy photography instantly and makes future art direction cheap.

**Full color is earned**, permitted in exactly three places: (1) the venue-page
gallery on user interaction, (2) future commissioned hero photography, (3) the food
proof shot on a carta page. Everything else stays two-ink.

Tokens: `--img-duotone-ink`, `--img-duotone-accent`, `--img-full` (the escape hatch).
Transition between duotone and full color is 400ms `--ease-out` — the moment appetite
arrives.

**Technical:** AVIF/WebP with JPEG fallback via Astro `<Image>`; `loading="lazy"` +
`decoding="async"` on everything below the fold; the LCP image is `fetchpriority=high`
and never lazy. Alt text is a descriptive sentence, never a filename (fixes an audit
finding). Decorative press artifacts are `aria-hidden`.

---

# 6. COMPONENTS

Nine press artifacts + the interface primitives. Every component is specified as:
anatomy → states → responsive → a11y.

## 6.1 Buttons

Three ranks. Only one primary per view.

**`.btn--stamp` (primary — el sello).** The red stamp; the site's single most
important object.
- Anatomy: pill (radius 999px), fill `--stamp-fill` (`--tomato-deep`), label
  `--text-inverse`, Archivo 700 / `--step--1` / 0.10em caps, padding `0.8em 1.7em`,
  min-height 48px (44px in dense contexts), rotation `-1.5deg` at rest.
- States: hover → rotate to 0deg + fill darkens 6% ("re-ink"), 200ms; active →
  scale 0.98; focus-visible → 3px `--tomato` ring, 3px offset; disabled → never
  (a booking CTA is never disabled; if a venue can't be booked, it shows a phone
  link instead).
- Entrance: stamp-settle (see §7).
- Rule: the stamp is the only rotated element in the system. Nothing else tilts.

**`.btn` (secondary).** Ghost pill: 1.5px ink border, transparent fill, ink label.
Hover → ink fill + paper label. Same metrics as the stamp, no rotation.

**`.btn--quiet` (tertiary).** Text + arrow (`Conocer →`), `--text-accent`, underline
on hover (offset 4px), arrow translates 6px. Min tap area 44px via padding.

## 6.2 Navigation

**Desktop bar (`.nav`):** sticky, 76px, paper at 92% + 8px backdrop blur (the only
blur in the system — legibility, not decoration), 1px `--line` bottom.
Left: wordmark (Fraunces 640) + coral heart (scales 1.25 on hover).
Center: five doors as `.label` links with a tomato underline that wipes in from the
left (200ms). Right: `.btn--stamp` (42px dense variant).

**Mobile bar:** 64px; wordmark + stamp + burger (48×48, two 24×2px ink lines →
rotate to X at 45°/−45°). **The stamp never hides on mobile.**

**Overlay menu:** full-screen paper; doors as Fraunces `--step-4` links, numbered
01–05 in tomato, staggered in at 70ms intervals; utility row (ES/EN · Instagram ·
Delivery); bottom-anchored for thumb reach; Escape and link-click close it;
`body` scroll locks while open; focus is trapped and returns to the burger on close.

**Footer nav:** four columns, `.label` headings in `rgb(paper/0.6)`, links in paper,
butter on hover. Full 18-venue index lives here (SEO + direct bookers).

## 6.3 Cards (the base)

`.card`: `--surface-raised` fill, `--rule` border, 14px radius, `--space-m` padding.
Hover (only when interactive): `translateY(-4px)` + print-block shadow
`0 12px 0 -6px var(--ink)`, 200ms. Never scale, never soften shadows.

## 6.4 Restaurant cards (`.portada` — the cover)

The system's signature component. **Anatomy, top to bottom:**
1. **Field** (3:2): casa accent color or duotone photo tinted with that accent;
   number `01`–`08` bottom-left, opening year bottom-right, both `.label` in the
   correct text ink for that field (enforced by `--on-butter`/`--on-olive`).
2. **Rule:** 1.5px ink separating field from body (the fold of the cover).
3. **Body:** venue name (Fraunces `--step-2`) → barrio (`.label`, tertiary) →
   tagline (`.voice` italic, `--step-1`) → trait tags (max 2 on cards) →
   actions row: `.btn--stamp` (dense) + `.btn--quiet` ("Conocer →").

Rules: the *structure* is identical across all casas; the *character* (accent,
tagline, traits, year) is always different. Uniform tiles are a concept violation.
Entire card is not a single link (it holds two actions) — the field and the name are
both links to the venue page; the stamp goes to CoverManager.
Mobile: full-width stack. Tablet: 2-up. Desktop: 3-up.

## 6.5 Menu items (`.plato`)

For `/restaurantes/[slug]/carta/` (R3).
Row anatomy: name (Archivo 600, `--step-0`) · dotted leader rule (`--line`, flex-grow)
· **price** (Archivo 600, tabular-nums, right-aligned, never hidden).
Below: description (`--text-secondary`, `--step--1`, max 60ch) + allergen/diet tags.
Signature dishes (pizza de boletus) carry a small coral heart before the name.
Sections are `.label` headings with a full-width ink rule.
Mobile: price wraps to the right of the name, never below the description.
Prices are always visible — hiding price is a brand violation ("precio justo").

## 6.6 Tags (`.tag`)

Pill, 1.5px ink border, transparent fill, `.label` type, padding `0.5em 1em`,
min-height 32px (44px when interactive as a filter chip).
- **Static tag** (venue traits): not interactive, no hover.
- **Filter chip** (discovery): interactive; selected state = `--tomato-deep` fill +
  paper label + no border; hover = ink fill. Selected state also carries a check glyph
  so color isn't the only signal.
- **Stamp chip** (Chapter 03 picker): filter chip with the stamp's −1.5deg rest
  rotation, straightening on hover.

## 6.7 CTAs (placement law)

- **Global:** the stamp lives in the nav on every page and in the mobile sticky bar on
  venue pages. Booking is never more than one gesture away (four fives).
- **Per chapter:** exactly one primary CTA. Chapter 05 (El Manifiesto) deliberately
  has none — the rest beat.
- **Per card:** one stamp + one quiet link. Never two stamps in the same card.
- **Copy:** "Reservar" / "Reservar mesa" only. The reservation CTA is never a joke and
  never a verb experiment — the one place the playful voice stands down.

## 6.8 Forms

Used by: newsletter (R4), event inquiry (R3), concierge (R2).
- **Field:** paper fill, 1.5px ink border, 12px radius, min-height 48px, padding
  `0.75em 1em`, Archivo 400 `--step-0` (**16px minimum — prevents iOS zoom-on-focus**).
- **Label:** always visible above the field (`.label`, tertiary) — never
  placeholder-as-label. Placeholder is an example, in `--ink-faint`.
- **Focus:** 3px tomato ring, 3px offset; border darkens to ink.
- **Error:** border `--tomato-deep` + message below in `--tomato-deep` with a warning
  glyph, `aria-describedby`-linked, `aria-invalid` set. Never color alone.
- **Success:** brand-voice confirmation in a dictionary-card frame ("Ya eres muckero.").
- **Submit:** `.btn--stamp`; on submit → label swaps to "Enviando…", button stays
  enabled-looking but blocks double submit; never a spinner-only state.
- **Required fields** marked with the word "obligatorio", not an asterisk alone.

## 6.9 Booking modules (the contextual layer)

**The sheet (`.reserva-hoja`)** — the global Reservar when no venue is in context.
- Presentation: bottom sheet on mobile (max-height 85vh, drag/close affordance),
  centered dialog ≤560px on desktop. `<dialog>` element: native focus trap, Escape,
  backdrop.
- Content: `.label` "¿Dónde te sentamos?" → **casa cards, never a dropdown of names**
  (each row: accent swatch, name, barrio, tagline) → footer row: "¿No sabes cuál?
  Pregúntanos →" (concierge) and the phone number.
- The only overlay permitted to interrupt.

**The venue stamp** — when a venue *is* in context, the stamp goes straight to that
venue's CoverManager module. Zero intermediate steps (Journey 6 is measured in
seconds).

**Handoff rules:** every outbound URL carries UTM + language (`/spanish` | `/english`);
opens in a new tab with `rel="noopener"`; the handoff fires an analytics event;
`tel:+34915210000` is present as fallback on every booking surface.

**Overflow:** party sizes beyond a venue's online cap surface a `.clasificado` block
routing to `/eventos/` — never a dead end.

## 6.10 The remaining press artifacts

| Component | Spec summary |
|---|---|
| `.cabecera` (masthead) | Kicker `.label` + hairline rules + edition line ("Edición del aperitivo · Madrid, 13:07") in `--text-tertiary`. |
| `.teletipo` (ticker) | Full-bleed, 1.5px ink rules top and bottom, `.label` items with coral ♥ separators, 30s linear loop, duplicated track, `aria-hidden`, paused by reduced-motion. Chapter-divider duty. |
| `.diccionario` | `--surface-raised` card, `--rule`, max 44rem centered: head-word (Fraunces 600 `--step-3`) + phonetic (`.label`, tomato-deep, lowercase) + numbered definitions with italic part-of-speech. |
| `.cita` (pull quote) | Fraunces italic `--step-3`, 3px left rule in butter (on ink) or tomato (on paper), byline `.label` tertiary. |
| `.tira` (timeline) | Horizontal scroll-snap strip, one beat per casa (year + name + accent tick), inertia scroll, keyboard-arrow navigable, never scroll-jacked. |
| `.clasificado` | Bordered box, `.label` heading, terse copy ("SE BUSCA: sonrisa imborrable. Razón: aquí."), one quiet CTA. |
| `marcas de registro` | Corner crop/registration marks, `--line` color, `aria-hidden`, **max one set per chapter**. |

---

# 7. MOTION

Philosophy: **the press, not the cursor.** Things stamp, settle, slide and dry.
Nothing floats, blurs, parallaxes or loops (except tickers).

## 7.1 Duration

| Token | Value | Use |
|---|---|---|
| `--t-instant` | 120ms | color-only swaps |
| `--t-micro` | 200ms | hovers, focus, chip toggles |
| `--t-stamp` | 250ms | stamp-settle |
| `--t-enter` | 400ms | sheets, overlays, duotone→color |
| `--t-reveal` | 700ms | narrative scroll reveals |

Ceiling: nothing exceeds 800ms. Anything that delays a booking action: 0ms.

## 7.2 Easing

| Token | Curve | Use |
|---|---|---|
| `--ease-out` | `cubic-bezier(0.22, 1, 0.36, 1)` | reveals, entrances (ink drying) |
| `--ease-snap` | `cubic-bezier(0.34, 1.3, 0.64, 1)` | stamp-settle, chip toggles (the press) |
| `--ease-move` | `cubic-bezier(0.4, 0, 0.2, 1)` | sheets, strips, positional moves |

No `linear` except the ticker. No bounce beyond the 1.3 overshoot.

## 7.3 Entrance animations

- **Ink-dry reveal** (default): `opacity 0→1` + `translateY(24px→0)`, `--t-reveal`,
  `--ease-out`, triggered by IntersectionObserver at 10% with `-10%` bottom margin,
  unobserved after firing. Staggered in groups of ≤4 at 90ms.
- **Stamp-settle:** `scale(1.06→1)` + `rotate(0→-1.5deg)`, `--t-stamp`, `--ease-snap`.
  Stamps only.
- **Press-slide:** `translateX(±24px→0)` + fade, `--t-enter`, `--ease-move`. Tickers,
  strips, the manifesto's two inks entering from opposite edges.
- **Overlay/sheet:** slide from bottom (mobile) / fade+`scale(0.98→1)` (desktop),
  `--t-enter`, `--ease-move`.
- **Load:** exactly one entrance animation on page load (the hero's staggered type).
  Everything else waits for scroll.

## 7.4 Hover behavior

Colour and position only — **never scale, never layout shift**.
- Stamp: rotate to 0 + re-ink (darken).
- Ghost button: fill ink, label paper.
- Cover card: `translateY(-4px)` + print-block shadow.
- Index row: background → `--paper-deep`, `padding-left` +16px, arrow +6px.
- Nav link: tomato underline wipes in from left.
- Heart: `scale(1.25)`.
All hover styles are wrapped in `@media (hover: hover)` so touch devices never inherit
sticky hover states.

## 7.5 Scroll behavior

- **Native scrolling only.** No scroll-jacking, no smooth-scroll libraries, no
  parallax, no pinned sections, no scroll-driven video. (Four fives: never trade speed
  for spectacle.)
- `scroll-behavior: smooth` for in-page anchors; `scroll-margin-top: 88px` on all
  anchor targets so the sticky nav never covers a heading.
- Horizontal strips (`.tira`, faces strip) use CSS scroll-snap with
  `overscroll-behavior-x: contain`, are keyboard-navigable, and show a scroll
  affordance (fade edge).
- Chapter transitions are compositional (ink flood, ticker), not scroll-driven effects.

## 7.6 Reduced motion

`@media (prefers-reduced-motion: reduce)`: all reveals resolve to their final state
instantly, tickers stop, stamp-settle becomes a static −1.5deg, sheets fade only,
`scroll-behavior: auto`. **Nothing is lost** — the page is simply already printed.

## 7.7 Performance budget (motion is not exempt)

Animate `transform` and `opacity` only. `will-change` is applied only to the ticker
track and only while visible. Targets: LCP < 1.8s p75 on 4G mid-range Android, CLS <
0.05, INP < 200ms, 60fps on every animation. **An effect that misses the budget ships
without the effect.**

---

# 8. Governance

1. **Tokens first.** No component may introduce a raw hex, px font-size, or bespoke
   easing. If a value is missing, add a token.
2. **Semantic over primitive.** Components consume `--text-secondary`, not `--ink-soft`.
3. **Contrast is an acceptance criterion**, not a review note. The ratios in §2 are
   tested; a new color must be measured before it enters the system.
4. **One new component per real need.** The nine press artifacts cover the concept; a
   tenth requires a documented journey that the nine can't serve.
5. **Every addition updates this document and DESIGN-DECISIONS.md.**
