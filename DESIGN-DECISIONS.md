# La Mucca Company — Design Decisions

A living record. Every entry states the decision, the reasoning, and what it rules out.
Iterations must preserve these unless a decision is explicitly revisited here.

---

## 001 — Creative concept: "HIGH LOW, printed"

**Decision.** The brand's own philosophy — HIGH LOW (quality without pretension) — becomes
the design system itself. Every layer pairs one "high" element with one "low" element:

| Layer       | HIGH                                   | LOW                                        |
|-------------|----------------------------------------|--------------------------------------------|
| Typography  | Fraunces (soft editorial serif, italic, optical sizing) | Archivo (street-signage grotesque, caps, tight) |
| Color       | Paper & ink (editorial restraint)      | Tomato red + warm accents (market awning, neon) |
| Layout      | Generous editorial grid, white space   | Stickers, stamps, marquee tickers, torn edges |
| Motion      | Slow cinematic reveals                 | Snappy, playful micro-interactions          |
| Voice       | Confident, warm copy                   | Street Spanish interjections ("¡Muckero!")  |

**Why.** The brief demands the site *communicate* HIGH LOW, not just claim it. Making the
tension visible in every layer means the philosophy is felt before it is read.

**Rules out.** Single-register design (all-luxury or all-street), glassmorphism, dark-luxe
hotel aesthetics, generic template symmetry.

## 002 — Visual language: warm editorial print, not screen-native gloss

**Decision.** The site behaves like a beautifully printed city magazine that came alive:
warm paper background, warm-black ink, photography as the hero, typographic scale doing
the heavy lifting. No gradients-as-decoration, no glass blur, no drop-shadow cards.

**Why.** Madrid identity + family origin + authenticity read as *print, paper, market,
street*. Screen-gloss reads as SaaS/AI-generated — explicitly forbidden by the brief.

## 003 — Palette

Warm paper `#F4EEE3`, warm ink `#201B16`, tomato `#D2401E` (primary accent, CTA),
butter `#E8B940` (secondary, sparingly), olive `#5D6141` (tertiary, sparingly).
Contrast: ink on paper 13+:1; paper on tomato ≥ 4.5:1 at CTA sizes.

**Why.** Appetizing, warm, urban-Madrid (awnings, vermut, terraza light) without falling
into red/white pizzeria cliché. Accents are condiments, not sauce.

## 004 — Typography

- **Display:** Fraunces Variable (self-hosted). Optical size + SOFT/WONK axes give warmth
  and playfulness at large sizes while staying editorial.
- **Text/labels:** Archivo Variable (self-hosted). Caps + tracked-out for wayfinding
  labels (very "street signage"); regular for body UI.
- Body copy min 16px mobile; display scale is fluid (clamp).

**Why.** The pairing *is* concept 001. Both variable = 2 font files total, performance-safe.

## 005 — Stack: Astro + vanilla TS + CSS

Astro (static output, content collections, built-in image optimization). Interactions in
small vanilla TS modules (IntersectionObserver reveals, no scroll-jacking). No GSAP/Lenis/
WebGL in v1 — only added later if a specific narrative moment justifies it.

**Why.** Editorial content site → static-first, zero-JS baseline, LCP = hero image.
Content collections give us the required *content model* for restaurants instead of
hardcoded fake facts.

## 006 — Content honesty

Real facts only, sourced from lamucca.es + press (research report in `/docs/research/`).
Where a fact is unverified, the content model carries a `verified: false` flag and the UI
copy stays generic rather than inventing specifics. No fake awards, no fake quotes.

## 007 — Booking is the primary conversion

Every restaurant surface carries a direct "Reservar" path (the group's real booking links).
Booking is never more than one tap away on mobile (sticky bottom bar on restaurant pages).
No fake booking widget: we link to the group's actual reservation system.

## 008 — Motion principles

- Motion narrates (reveal on scroll, marquee as street-energy, image settle on load).
- 150–300ms micro; 500–800ms narrative reveals; nothing loops except marquee tickers.
- Everything honors `prefers-reduced-motion` (reveals become instant, marquees stop).
- Transform/opacity only. No scroll-jacking. 60fps or it ships without the effect.

## 010 — Research alignment (2026-07-25)

Brand research (docs/research/brand-report.md) corrected and enriched the foundation:

- The brand writes itself **"Lamucca"**, one word. All copy and the nav lockup follow.
- The **heart** is the brand's core mark ("I love Lamucca"); adopted as micro-motif
  (nav heart, marquee separators) in brand coral `#ff6863` — decorative only, never text.
- Official HIGH LOW and **Muckero** definitions exist in the brand's own words; the
  Muckero definition is staged as a dictionary entry — verbatim, not paraphrased.
- Real conversion path: **CoverManager** per venue; links live in the content model.
- 16 venues modeled (8 Lamucca flagships + 8 other concepts), all `verified: true`
  with source URLs. Homepage = flagship grid + "El universo Lamucca" index list.
- Their current identity uses American Typewriter (not openly licensable); Fraunces
  stays as our display voice — same warm print register, variable, open license.

## 012 — Strategic foundation adopted (2026-07-25)

docs/strategy/brand-strategy.md v1.0 is the governing document: brand DNA ("belonging,
dressed as dinner"), experience principles, and the four fives (feel / understand /
act / never). Every future design decision must trace to it. Key implications already
visible in the build: speed-as-hospitality, character-before-catalog venue
presentation, verbatim brand language, booking always one gesture away. Next-phase
candidates it mandates: venue wayfinding ("¿Qué Lamucca te toca hoy?"), Muckero
community home, En Bruto craft storytelling, EN version, gift/event funnels on
CoverManager rails.

## 013 — Product strategy adopted (2026-07-25)

docs/strategy/product-strategy.md v1.0 governs scope and priority. Vision: "Every
appetite in Madrid finds its Lamucca in under a minute — and feels like a regular
before walking in." Primary conversion: completed CoverManager reservation. Signature
product move: the wayfinding picker "¿Qué Lamucca te toca hoy?" (R2). Roadmap:
R1 conversion rails → R2 wayfinding → R3 EN + events + menus → R4 community. Feature
acceptance is gated by the six journeys and the four fives.

## 014 — Information architecture adopted (2026-07-25)

docs/strategy/information-architecture.md v1.0. Model: **"editorial spine, contextual
booking"** — five stable doors (Restaurantes · ¿Cuál te toca? · Historia · Muckeros ·
Eventos) + Reservar as a persistent contextual layer (sheet → CoverManager), never a
page. Immersion lives inside homepage chapters, never between the user and a table.
Homepage = 7 chapters (Puerta → Casas → Pregunta → Tahona → Manifiesto → Muckeros →
Universo). FOOD and ABOUT rejected as doors (food distributes to cartas/Historia;
"Nosotros" becomes Historia). AI concierge = voice interface to the picker, scripted
in R2, LLM later; never modal, never gating. QR menu site's role absorbed at /cartas/.

## 015 — Creative direction adopted: «A DOS TINTAS» (2026-07-25)

docs/strategy/creative-direction.md. Three concepts explored (A Dos Tintas / Siempre
Es La Hora / Los Locales Llaman); winner: **A DOS TINTAS** — the experience as a
living two-ink neighborhood publication (ink = HIGH, tomato = LOW). Supersedes and
completes concept 001 ("HIGH LOW, printed" was its embryo). Transplants adopted: the
**edition mechanic** (masthead line + accent temperature by Madrid daypart, cosmetic
only) and the **past-life scene** on venue pages ("esto era una tahona…"). New
component vocabulary: cabecera, sello (stamp CTA), portada, entrada de diccionario,
teletipo, clasificado, cita, tira, marcas de registro. Image law: two-ink duotone by
default, full color earned at appetite moments. Acceptance test: printable, both inks
in tension, deliberate red stamp, loads like text, makes a muckero smirk.

## 016 — Design system «A DOS TINTAS» v1.0 (2026-07-25)

docs/strategy/design-system.md is the production spec; `src/styles/tokens.css` is its
only source of truth. Two token layers: **primitives** (palette, scales) and
**semantic** (`--text-secondary`, `--stamp-fill`, `--on-butter`) — components consume
semantic tokens only; no raw hex, px font-size or bespoke easing outside tokens.

**Contrast correction (measured, not estimated).** Paper-on-`--tomato` = **4.05:1**,
which fails AA at label size. The primary CTA therefore prints in `--tomato-deep`
(**5.4:1**) via `--stamp-fill`; `--tomato` is demoted to decorative/large-text ink.
Verified ratios now recorded as acceptance criteria: ink 14.8:1, ink-soft 8.3:1,
ink-faint 5.1:1 (passes AA — better than first assumed), ink-on-butter 9.3:1,
paper-on-olive 5.6:1, coral 2.5:1 (decorative only, enforced).

Other system laws set here: field colors dictate their own text ink (`--on-butter`
= ink, `--on-olive` = paper); `[data-ink]` scope flips text tokens once for inverted
sections instead of per-component overrides; `[data-edition]` carries the edition
mechanic as accent-only (cosmetic, non-layout-shifting); the stamp is the only
rotated element (−1.5°, straightens on hover); `--shadow-print` is the only shadow;
duotone is the default image state and full color is earned in three named places;
motion animates transform/opacity only, ceiling 800ms, hover wrapped in
`@media (hover: hover)`.

Applied to the build: `.btn--stamp`/`.btn--primary` now consume the stamp tokens
(fixes the AA failure) and `:focus-visible` consumes `--focus-ring`. Build verified:
18 pages, no console errors, no horizontal overflow, 1.5px rule and fluid scale
confirmed in-browser.

## 017 — Homepage v1: the seven chapters (2026-07-25)

Built as seven chapter components (`src/components/home/`) composed by
`src/pages/index.astro`: Portada/hero → El mundo → Madrid → Descubre → La comida →
Muckeros → La mesa. Evaluation in docs/strategy/homepage-evaluation.md.

**Chapter reconciliation.** The brief's chapters (Hero/World/Madrid/Discover/Food/
Muckeros/Book) supersede the IA's earlier seven while preserving their content:
La Tahona (origin) folded into **Madrid**, El Manifiesto (HIGH LOW) folded into
**La comida** — food identity *is* the HIGH LOW argument — and El Universo folded into
**El mundo** as concept families.

**Photography.** No real assets exist and none were faked. `.campo` is a photo slot
that currently renders a two-ink halftone field (CSS radial gradients, two passes with
soft masks). It accepts `<img>` with the duotone filter the moment assets arrive.
This satisfies "cinematic" honestly and unifies future legacy photography.

**Discovery taxonomy.** Content model gained `moods/occasions/zone/times/groups/
features`, populated for all 17 venues. These are editorial classifications *derived
from each venue's sourced description* — never invented capabilities.

**The picker.** Five axes, AND across / OR within, one-zone-at-a-time, live count with
correct pluralisation, empty state with escape, "Sorpréndeme". Progressive enhancement
is structural: the panel ships `hidden` and is revealed by script, so no-JS users get
17 linked, bookable casas and zero dead buttons.

**Edition mechanic shipped** (from decision 015): `data-edition` on `<html>` from
Madrid's clock via `Intl` with `timeZone: 'Europe/Madrid'`; writes the masthead line
and lights the matching verb in La comida. Cosmetic only; the SSG default is a
statement true at any hour ("Cocina abierta todo el día").

**Regression fixed:** nav, footer and venue pages still pointed at pre-existing anchors
(`#restaurantes`, `#universo`, `#historia`, `#high-low`) that the new chapter IDs
removed. All rewritten and every in-page anchor verified to resolve. Legacy
`.btn--primary` migrated to `.btn--stamp`.

**Measured:** 11.2 KB gzipped homepage, **zero JS bundles** (all three scripts inlined),
604 KB dist, no console errors, no horizontal overflow at 375/1280, every sampled text
pair ≥ 4.61:1, single H1, tap targets ≥44px.

## 011 — Iteration log

- **v1 (2026-07-25).** Foundations: tokens, type system, nav/overlay, homepage
  (hero, marquee, venue grid, historia, high-low, muckero, universo), venue detail
  pages with mobile sticky reserve bar. Build: 18 static pages, **0 JS bundles**
  (two inline scripts only), ~230 KB total fonts (subset woff2), 28 KB homepage HTML.
  Pending next: real photography (awaiting assets — art-directed color slots hold the
  grid), per-venue hours (unverified), OG images, Historia deep-dive page.

## 009 — Mobile first, thumb first

Designed at 375px first. Nav = top bar + full-screen overlay menu. Restaurant switching =
horizontal snap carousel. Sticky reserve bar. Touch targets ≥ 44px.

## 018 — «El carrete»: the casas list becomes a contact sheet (2026-07-26)

The Chapter 03 `tira` (a horizontal scroller of year + name + coloured tick) was the
only place the site listed every casa, and it showed none of them. It is replaced by
`src/components/CarreteCasas.astro`: one full-width row per casa, in the order they
opened, each row carrying the venue's own photograph.

**Interaction.** Point at a row and it opens: the plate takes the frame and blooms
into full colour, the tagline lands 120ms behind it, and the rest of the sheet steps
back to 42%. Keyboard focus does exactly what the pointer does. All of it is CSS
transitions driven by one class — no GSAP timeline, matching the motion system's
"zero libraries" default. The old WOW-4 block in `src/scripts/motion.js` is gone.

**Layout stability.** Only one row is ever open, so the list carries a trailing
spacer whose height is exactly the expansion delta and which shrinks to zero on the
same curve the row grows on. The sum is constant: nothing below the carrete moves by
a pixel, at any point in the animation. No CLS, no scroll jump.

**Image law, extended (amends #016).** Full colour was permitted in three places;
this is the fourth, and it is the same principle as the first: *colour is earned by
asking*. At rest each plate is `grayscale(1) contrast(1.05) brightness(0.58)` under a
`mix-blend-mode: color` wash in the casa's own accent — a real two-ink duotone, not a
grey photo — and the resting veil keeps the type block on near-solid ink so a bright
room and a dark one carry identical weight. Opening a row removes tint, veil and
brightness together over `--t-enter`.

**Two modes, exact complements.** `(hover: hover) and (min-width: 900px)` gets the
carrete proper (5.5rem rows opening to 22rem). Everything else gets
`(hover: none), (max-width: 899px)`: there is no hover to spend, so nothing is
hidden — every row is already open at 11rem, colour arrives as the row scrolls into
view, the veil becomes a bottom-up scrim, and the whole row is one link. Neither
block undoes the other's work. `.casa__linea` places year/name/neighbourhood with
grid areas so each mode can rearrange them without a wrapper only one mode wants.

**Photography (closes the #017 "no real assets exist" gap).** 17 venue photographs
sourced from lamuccacompany.com's own CDN, plus Origen for Makáá and press for
Kiosco Magadán, Lamucca del Mar and Ultramarines Trafalgar. Rooms and façades were
chosen over plated food — the carrete sells the space; Chapter 05 sells the food.
They live in `src/assets/casas/<slug>.jpg` and ship through Astro `<Picture>` as
AVIF/WebP with a JPEG fallback at 560/900/1240w.

**Two fixes carried along.** Chapter 04's concierge card pointed at
`public/assets/casas/*` files that never existed — every recommendation rendered a
broken image. It now resolves real optimised URLs server-side via `getImage()` and
hands them to the client script. And the nav's "Restaurantes" now lands on `#casas`
(the list of restaurants) instead of `#descubre` (the picker), which answers a
different question.
