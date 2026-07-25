# Lamucca — Information Architecture v1.0

**Status:** adopted 2026-07-25 · governs structure, navigation and homepage narrative
**Upstream:** brand-strategy.md (four fives) · product-strategy.md (six journeys, MoSCoW)
**Test for every node:** which journey does it serve, and what does it cost the others?

---

# Part I — The navigation model

## Candidates considered

| Model | What it means here | Verdict |
|---|---|---|
| **Traditional** | Home / Restaurantes / Carta / Nosotros / Noticias / Contacto | Safe, dead. It's the current site's structure — the "chain" feeling we must never produce. Rejected as a whole; retained as a comprehension baseline. |
| **Editorial** | Magazine-style: issues, features, columns; nav as table of contents | Right *feeling*, wrong *skeleton*: Journey 6 (direct booker) and Journey 3 (tonight) die in it. Rejected as skeleton; adopted as voice and layout language. |
| **Contextual** | Nav mutates by intent/context (booking layer follows you, venue context persists) | Correct for the booking layer and cross-sell, insufficient alone — first-time users need stable doors. Adopted as a layer. |
| **Immersive** | Full-screen world, scroll-driven scenes, hidden nav | Violates "never trade speed for spectacle" and every conversion journey. Rejected — immersion must live *inside* chapters, never *between* the user and a table. |
| **Hybrid** | Few stable doors + editorial content + a contextual booking layer | **Adopted.** |

## The model: «Editorial spine, contextual booking»

Three simultaneous systems:

1. **The spine** — five stable doors, always visible, never clever at the cost of
   clarity. A label may be playful only if a first-time tourist still understands it.
2. **The booking layer** — "Reservar" is not a page; it is a persistent contextual
   layer (button → sheet → CoverManager) available from every screen, pre-resolved to
   the venue in context.
3. **The world** — the living-world feeling comes from *content behavior* (chapters,
   tickers, counters, faces, seasonal accents), not from unconventional wayfinding.
   The house is theatrical; the doors are solid.

## 1. Global navigation (desktop)

```
Lamucca ♥   |   Restaurantes   ¿Cuál te toca?   Historia   Muckeros   Eventos   |   [ Reservar ]
```

Label decisions (challenged, not inherited):
- **Restaurantes** — not "Las Casas". We *speak* "casas" everywhere in copy, but the
  door must pass the tourist/abuela test and win the SERP. Clarity is hospitality.
- **¿Cuál te toca?** — replaces "Discover". A question in brand voice that explains
  itself and only the signature picker can answer. (EN: "Which one's yours?")
- **Historia** — absorbs ABOUT + STORIES (manifesto layer). One door for meaning:
  origin, HIGH LOW, the spaces, the cocina philosophy. "Nosotros" is corporate;
  "Historia" is a promise of narrative.
- **Muckeros** — absorbs community + careers + journal. The brand's own word; no
  generic "Comunidad".
- **Eventos** — plain and findable because it's the highest-ticket conversion (B4);
  Carlos (P4) is stressed and must never hunt. (Ships R3; nav slot reserved.)
- **FOOD as a door: rejected.** Food is everywhere (cartas live on venue pages; cocina
  narrative lives in Historia; En Bruto gets an editorial page in R4). A global "Food"
  page is a brochure reflex — it serves no journey.
- **HOME as a label: rejected.** The wordmark is home.
- **BOOKING as a nav destination: rejected.** Reservar is a button/layer, never a page
  to visit.

## 2. Mobile navigation

- **Top bar (sticky, 64px):** wordmark ♥ · [Reservar] · burger. Reservar never hides.
- **Overlay menu:** full-screen paper, the five doors as large Fraunces links,
  bottom-anchored in thumb reach; utility row above them (ES/EN · Instagram ·
  Delivery). Numbered 01–05 (already built pattern).
- **Venue pages:** persistent bottom reserve bar (name + Reservar) with
  safe-area padding (built). The bar is the mobile embodiment of the booking layer.
- **No bottom tab bar** — we are a narrative site with one dominant action, not an app
  with four equal modes.

## 3. Footer architecture

The footer is the site's index page — where the spine's restraint gets released.

```
Row 1 — La despedida: "Nos vemos en la mesa." (voice moment, ink background)
Row 2 — four columns:
  LAMUCCA            LAS CASAS (all 18)      COMPAÑÍA               PRÁCTICO
  claim + heart      Lamucca de Pez …        Historia               Reservar
  "Your friendly     …all venues,            Muckeros               Cartas
  neighborhood       grouped by concept      Eventos & grupos       Delivery
  place." Madrid,    (SEO + direct           Trabaja con nosotros   Contacto · 91 521 00 00
  desde 2008.        bookers)                Prensa                 ES / EN
Row 3 — legal: aviso legal · privacidad · cookies · © Lamucca Company
```

## 4. Restaurant discovery (`/restaurantes/`)

Three modes, one page, zero dead ends:
- **Mode A — El paseo (default):** character-first cards (flagships), then "El
  universo" list (other concepts). Cards lead with personality: accent color, tagline,
  barrio, year, 2 traits — never uniform branch tiles.
- **Mode B — El mapa:** toggle to a Madrid map; pins carry casa accents and taglines.
  Serves "near me now" (Journey 3) and tourists anchoring to landmarks (Journey 2).
- **Mode C — La pregunta:** an inline entry to ¿Cuál te toca? for the undecided
  ("¿No sabes cuál? Deja que te sentemos nosotros.").
- **Filter chips** (contextual, not a sidebar): Terraza · Con niños · En grupo ·
  Pet friendly · Orgánico/parrilla · Hasta tarde · Barrio.
  Powered by occasion/mood tags added to the content model (R2).

## 5. Restaurant detail pages (`/restaurantes/[slug]/`)

Layered for the two competing journeys (direct booker vs. discoverer) — action first,
story below, in strict order:

1. **Action layer (above the fold):** name, barrio, tagline; Reservar (primary),
   Cómo llegar, teléfono; hours signal (once verified: "cocina abierta ahora").
2. **Character layer:** editorial description, traits, photography of the space
   (spaces > faces > food priority), venue accent applied.
3. **Practical layer:** carta (HTML, prices — R3), allergens, delivery links, privado/
   grupo capacity flags (feeds Journey 4 and routes overflow to Eventos).
4. **Story layer:** what the space was (tahona, floristería, kiosco de 1907) — the
   past-life narrative is each casa's unique asset.
5. **Continuation layer:** "Si esta casa te gusta…" — 2 sibling casas by shared mood
   + a door to El universo. No page ends; the world continues.
6. **Structured data:** `Restaurant` JSON-LD per page (address, geo, booking URL,
   hours when verified, servesCuisine).

## 6. Menu architecture

- **Canonical home:** each venue's carta lives at `/restaurantes/[slug]/carta/` —
  HTML, fast, prices visible, allergen access. No PDFs, ever.
- **Data model:** a `dishes` collection (name, description, price, tags, allergens,
  photo?) mapped to venues — shared icons (pizza de boletus) render on every casa that
  serves them with per-venue price; concept menus (Pescadería rices, Ultramarines
  casquería) stay distinct.
- **The QR role, absorbed:** `/cartas/` = "¿En qué restaurante estás?" — a
  geolocation-light contextual index (choose casa → its carta), replacing the split
  .es site so the table-side scan lands inside the brand world. Preserves the "MUCK
  YOU!" sign-off.

## 7. Storytelling architecture

Two layers, one rule (the story is felt, not read):

- **The Manifesto (`/historia/`):** a cinematic scroll in chapters — 2008 tahona →
  the accidental empire, casa by casa (timeline where each opening is a beat) →
  HIGH LOW staged typographically → the spaces (past lives, designers) → la cocina
  (all-day philosophy, En Bruto craft in R4). Founder quotes verbatim, always.
- **The Journal (inside Muckeros, R4):** living content — Muckero del mes, openings,
  news. The journal is why the world feels alive on the twentieth visit; the manifesto
  is why it feels deep on the first.
- **Distributed story:** every venue page carries its micro-story (layer 4 above);
  the homepage tells the whole arc in 7 chapters (Part III).

## 8. Muckero community architecture (`/muckeros/`)

- **La definición** — the dictionary entry, verbatim (the community's founding text).
- **Muckero del mes** — profile cards → individual profiles (R4); staff and regulars
  as equal heroes.
- **Los números** — live counters (boletus pizzas, euros donados) once wired to real
  data; never fake numbers.
- **Hazte muckero** — newsletter capture with brand-voice onboarding (R4; single
  email field, promise stated in muckero terms: aperturas, fiestas, cero spam).
- **Trabaja con nosotros** — careers as a community subpage ("muckeros de oficio"),
  faces first, then roles ("Buscamos… una sonrisa imborrable").

## 9. Booking flow (the contextual layer)

```
Context             Gesture 1                  Gesture 2                   Handoff
────────────────────────────────────────────────────────────────────────────────────
Venue surface   →   [Reservar]             →   —                       →   CoverManager (venue module, lang-matched)
Global surface  →   [Reservar]             →   Booking sheet: pick casa    CoverManager (chosen module)
                                                (cards w/ barrio + vibe,
                                                NOT bare names) or
                                                "¿No sabes cuál?" → picker
Party ≥ big     →   size chosen in module  →   overflow surface: "Para grupos grandes → Eventos" (form / phone)
No JS / edge    →   tel: 91 521 00 00 always present as fallback
```

Rules: the sheet is the only overlay allowed to interrupt; venue context always
pre-resolves it; every handoff carries UTM + language; the phone number is never more
than one layer away.

## 10. AI concierge entry point («Pregúntale a Lamucca»)

The concierge is the *voice interface to the picker*, not a support chatbot.

- **Entry points (quiet, never modal-on-load):** inside ¿Cuál te toca? as the framing
  device ("Dinos qué plan tienes y te sentamos"); inside the booking sheet ("¿No sabes
  cuál?"); on the 404 ("Te has perdido — ¿qué te apetece?"); EN mirror for tourists.
- **v1 (R2):** scripted conversational quiz — 2–3 questions (plan, barrio/zona,
  mood), deterministic mapping to casa tags, zero latency, works offline-ish. Feels
  conversational; costs nothing; can't hallucinate.
- **Future (roadmap FUTURE tier):** LLM concierge (Claude) with strict grounding in
  the verified content model + availability awareness; same entry points, same voice.
- **Voice rules:** speaks like a muckero waiter (tú, playful, concrete), recommends at
  most 2–3 casas, always ends in an action (Reservar / Cómo llegar), always offers the
  human fallback. Never gates any direct path — the concierge is a shortcut for the
  undecided, invisible to the decided.

---

# Part II — Complete sitemap

```
/                               Home — the 7 chapters                     [R0–R2]
/restaurantes/                  Discovery: paseo · mapa · pregunta        [R0 grid · R2 map/filters]
/restaurantes/[slug]/           18 venue pages (layered)                  [R0 · R1 enrichment]
/restaurantes/[slug]/carta/     Per-venue HTML menus                      [R3]
/cual-te-toca/                  The picker / concierge                    [R2]
/historia/                      The manifesto (origin · HIGH LOW ·
                                espacios · cocina)                        [R2–R3]
/muckeros/                      Community hub (definición · del mes ·
                                números · hazte muckero)                  [R4]
/muckeros/[perfil]/             Muckero del mes profiles                  [R4]
/muckeros/trabaja/              Careers                                   [R4]
/eventos/                       Groups & private events + inquiry         [R3]
/cartas/                        "¿En qué restaurante estás?" QR hub       [R3]
/en/…                           English mirror of all of the above       [R3]
/aviso-legal/ /privacidad/ /cookies/                                      [R1]
(booking = contextual layer → external CoverManager modules ×12+)
(404 → concierge entry)
```

Depth: nothing is more than 2 clicks from home; every leaf carries the booking layer.

---

# Part III — Homepage: seven chapters

**Narrative arc:** arrival → the world → the choice → the origin → the belief → the
people → the invitation. Deciders exit at chapters 2–3 with a table; scrollers get a
complete story with rising intimacy — each chapter earns the next. One interaction
moment per chapter, never more.

## CHAPTER 01 — La Puerta (the arrival)

- **Purpose:** identity + promise in five seconds; route the two big intents (book /
  discover). Serves Journeys 1, 3, 6.
- **Story:** "You've walked past us a hundred times. This is who we are: Madrid,
  familia, HIGH LOW."
- **Content:** kicker (Grupo de restaurantes · Madrid · desde 2008), headline "High en
  producto, low en pretensión.", one-line manifesto with *Your friendly neighborhood
  place*, dual CTA.
- **Interaction:** staggered type reveal on load (the only load animation on the
  site); heart pulses once.
- **Visual direction:** paper + ink typographic hero, Fraunces at maximum optical
  size, tomato italic accent. No hero carousel, no video wall — confidence is
  typographic.
- **Transition:** the marquee ticker (Madrid ♥ Pizza de boletus ♥ Desde 2008…) rolls
  in as a printed street-banner — the world starts moving.
- **CTA:** primary «Reservar mesa» · secondary «¿Cuál te toca?».

## CHAPTER 02 — Las Casas (the world)

- **Purpose:** the conversion core — show the portfolio as personalities; let deciders
  decide. Serves Journeys 3, 4, 6; B1/B2.
- **Story:** "Eighteen houses, one family. Each barrio changed us; each casa has its
  own character."
- **Content:** 8 flagship character cards (accent, year, barrio, tagline, traits) with
  per-card Reservar + Conocer.
- **Interaction:** cards lift on hover (print-block shadow); mobile: vertical rhythm
  with staggered reveals. Direct Reservar on every card.
- **Visual direction:** editorial card grid, hard 1.5px ink borders, venue accents —
  a shelf of magazine covers, not a location grid.
- **Transition:** the grid ends with a question mark card — literally a card asking
  «¿No sabes cuál?» — that hands off to Chapter 03.
- **CTA:** per-card «Reservar» / «Conocer»; grid-end «¿Cuál te toca? →».

## CHAPTER 03 — La Pregunta (the choice, made easy)

- **Purpose:** the signature product moment — collapse choice paralysis into play.
  Serves Journeys 1–4; the picker's front door.
- **Story:** "Don't study the map. Tell us the plan — we'll seat you. It's what we do
  all day."
- **Content:** conversational teaser of the picker: plan chips (Terraza · Con niños ·
  En grupo · De tardeo · Hasta tarde · Sorpréndeme) rendered as menu-stamp buttons.
- **Interaction:** tapping a chip previews a matching casa inline (name + tagline +
  accent flash) and offers «Ver mi Lamucca» → full picker. One playful mechanic,
  fully functional without JS (chips degrade to links into /cual-te-toca/).
- **Visual direction:** LOW register — stamps, stickers, Archivo caps, coral heart;
  the street answering the editorial grid above.
- **Transition:** ink flood — the page inverts to warm black as we enter memory.
- **CTA:** «¿Cuál te toca? — pregúntanos».

## CHAPTER 04 — La Tahona (the origin)

- **Purpose:** trust through story; the family fact that separates Lamucca from every
  group. Serves Journey 1 (belief), Journey 5 (pride).
- **Story:** "Two siblings — theatre and engineering — opened a dead bakery in 2008
  because nobody told them not to. «Como éramos inconscientes, abrimos.»"
- **Content:** the origin paragraph, Ofelia's quote as monument, the growth line
  ("los locales nos llaman"), 2008→2026 casa timeline as a typographic strip.
- **Interaction:** slow reveals; the timeline strip scrubs horizontally on touch
  (inertia scroll, no scroll-jack).
- **Visual direction:** ink section (paper text on warm black), butter accents,
  biggest quiet moment of the page — cinema, not montage.
- **Transition:** back to paper with the HIGH/LOW split entering from opposite edges.
- **CTA:** soft — «Conoce la historia →» (/historia/).

## CHAPTER 05 — El Manifiesto (the belief)

- **Purpose:** make HIGH LOW understood in one glance (thing-to-understand #2).
- **Story:** "The best from above, the soul from below — quality is not ceremony."
- **Content:** HIGH block (producto, ambiente, esquinas) vs LOW block (precio justo,
  cero ceremonia, música alta); closing claim «Lo auténtico, a precio justo.»
- **Interaction:** the two registers reveal in opposition (serif drifts down-in,
  grotesque snaps up-in); claim settles last.
- **Visual direction:** pure typography, maximum contrast of the two type voices —
  the concept made visible, no imagery to dilute it.
- **Transition:** the coral heart from the claim's period floats down into Chapter 06
  as its bullet mark.
- **CTA:** none — beliefs don't ask for clicks. (Deliberate rest beat.)

## CHAPTER 06 — Los Muckeros (the people)

- **Purpose:** community as proof and invitation; open the capture channel (B3).
  Serves Journeys 1, 5; persona P5 sees culture here.
- **Story:** "This has a name. Staff and regulars, same word, same pride."
- **Content:** the dictionary entry (verbatim, the set-piece), faces strip (Muckero
  del mes portraits when real photography lands), counters (pizzas/euros) when real,
  «Hazte muckero» capture (R4; IG follow until then).
- **Interaction:** dictionary card "prints" in (stamp-settle); faces strip drags.
- **Visual direction:** paper-deep card, print artifacts (stamp edges, register
  marks); warm portraits over food glamour.
- **Transition:** marquee returns (the street again) carrying universe names —
  Pescadería ♥ Ultramarines ♥ En Bruto… — into Chapter 07.
- **CTA:** «Hazte muckero» (capture) · «Muckero del mes →».

## CHAPTER 07 — El Universo (the invitation outward)

- **Purpose:** reveal the world is bigger than the door you entered (objective:
  explore-the-universe); route remaining intents (eventos, delivery, EN).
- **Story:** "And when it's not a Lamucca: rices in an old fishmonger's, a club with a
  password, a 1907 kiosk, a rooftop pool, a house by the sea."
- **Content:** the universe index (9 concepts, editorial list rows), quiet utility
  block (Eventos y grupos · Delivery · Cartas), then the farewell.
- **Interaction:** rows slide + arrow nudges on hover; list is fully crawlable links.
- **Visual direction:** editorial index — a table of contents for the rest of the
  world; ink footer follows with «Nos vemos en la mesa.»
- **Transition:** into the footer-as-despedida — the site says goodbye like a waiter,
  not a sitemap.
- **CTA:** per-row «Conocer» · «Reservar» floating action persists · footer paths.

---

## Acceptance rules for this IA

1. Every page carries the booking layer; the phone fallback is never >1 layer deep.
2. No label ships that a first-time tourist can't decode in context.
3. Chapters may be theatrical; doors may not.
4. The concierge never interrupts and never gates.
5. New nodes require a journey + a KPI, or they don't enter the sitemap.
