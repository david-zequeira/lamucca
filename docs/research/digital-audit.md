# Lamucca — Existing Digital Experience Audit (2026-07-25)

Compiled from fetched HTML of lamuccacompany.com / lamuccacompany.es and competitor
sites. VERIFIED unless marked INFERENCE. Raw HTML evidence in session scratchpad.

## lamuccacompany.com (brand site)

**Platform:** WordPress 5.2.24 (2019 branch, outdated), Astra theme + Elementor Pro,
heavy plugin stack (jet-engine, jet-smart-filters, the-grid, pixelyoursite, etc.).
PHP 7.4 (EOL). Footer says © 2023.

**Critical trust failure:** TLS certificate expired — every visitor gets a browser
security interstitial before seeing anything.

**Performance:** homepage HTML 360 KB; 36 stylesheets + 43 scripts (render-blocking);
~92 imgs, 58 without responsive sizes; informal asset pipeline (a hero file is named
`WhatsApp-Image-2018-06-09...jpeg`).

**IA:** Home / Restaurantes (12 dropdown) / Carta / Nosotros / Noticias / Muckero del
mes / Trabaja con nosotros + Delivery + Reserva Online (12-item dropdown).
**A third of the portfolio is missing**: no venue pages for Makáá, Kiosco Magadán,
En Bruto, Barra de Ultramarines, Lamucca del Mar (news posts only). "Nosotros" meta
still claims "7 restaurantes" (real: 18).

**Booking journey:** RESERVA ONLINE dropdown → pick one of 12 bare names (no photo/
neighborhood/character cues) → hard redirect to generic off-brand CoverManager module.
The "which venue?" decision is forced before any differentiation is shown. No
comparison view, no map, no filters (terrace/kids/organic/late-night).

**SEO:** homepage title is brand-less keyword bait ("Los Mejores Restaurantes para
comer en Madrid"); no H1 on homepage (32 H2s); duplicate H1s on venue pages (Elementor
desktop+mobile DOM duplication); **zero JSON-LD** (no Restaurant/LocalBusiness/Menu/
Organization schema).

**Conversion/CRM absences:** no newsletter, no gift cards (CoverManager supports them —
Arzábal uses that exact feature), no loyalty/community capture despite the Muckero
narrative.

**Accessibility:** alt text present but filename-quality; broken heading hierarchy;
duplicated DOM doubles screen-reader noise.

## lamuccacompany.es (QR site)

Table-side QR menu hub — "¿En qué restaurante estás?" (nice conceit). WordPress + Divi.
14 venue pages — **more current than the brand site**. Links per venue: cartas,
alérgenos, delivery, CoverManager. Footer: "MUCK YOU!" — the brand's cheekiest line
lives on its most utilitarian page.
INFERENCE: operational tooling gets updated; brand storytelling doesn't.

## Tone of voice — verbatim samples

1. "¿Buscas los mejores restaurantes para comer en Madrid? ¡Ven a Lamucca! Porque aquí
   no importa la hora, ni si eres grande o pequeño. Aquí solo importas tú."
2. "¿Desayunar, Aperitivear, Comer, Tapear, Merendar, Cenar y Recenar en Madrid?…
   vegano o carnívoro… Aquí, solo importas tú." (invented verbs)
3. Muckero dictionary entry + "¡Únete a nuestra Comunidad!"
4. "MUCK YOU!" (QR-site footer)
5. IG: "Lamucca l Un Clásico Madrileño 😁" / "Your friendly neighborhood place"
6. "Moni te carga las pilas… super vitamina y taaaan cute!" (Muckero profile)
7. "un remolino que te atrapa con su verborrea huracanada…" (Muckero profile, Ofelia)
8. "Buscamos gente enérgica, exigente, independiente… y una sonrisa imborrable."
9. "Reivindicamos el valor de la sonrisa como la mayor virtud de nuestro equipo."
10. "una teatral paleta de color con el amarillo, que es el color del buen humor"
11. "te acoge con el olor a pan recién tostado… a vermut de aperitivo con torreznos…
    y para cenas que acaban en baile." (Ultramarines)
12. ALL-CAPS exclamatory news: "¡CUMPLIMOS 10 AÑOS, Y VAMOS A CELEBRARLO!"

**Voice = 5 adjectives:** cercano (always tú) · juguetón (invented words, bilingual
puns, stretched vowels, emoji in official copy) · persona-driven (staff/regulars as
magazine heroes with pet names) · inclusivo/anti-pretensión ("aquí solo importas tú") ·
evocador-castizo (vermut, torreznos, "cenas que acaban en baile").
ES/EN code-switching is instinctive, not managed — **no English version of any site**.

## Social presence

- IG @lamucca ~51K; Muckero del mes runs cross-channel (site editorial + IG embeds).
- Facebook ×2; X dormant; **no verified TikTok** (abundant third-party creator content:
  "bueno, bonito y barato… servicio 10/10"); no Spotify/YouTube.
- LinkedIn (3,845 followers): tagline "¡El lugar donde siempre querrás volver!";
  posts = baking/pastry championships, kombucha lab, roastery pride — a **maker/artisan
  employer brand** the consumer site never surfaces.
- Gap: their strongest differentiator (people/community/craft) is socially native but
  has **no owned digital home** (no newsletter, club, UGC surface).

## Competitive landscape

- **GLH (ex-Larrumba):** gift purchases + events as first-class nav; but interchangeable
  venue presentation, bland corporate voice, mid-rebrand confusion.
- **Grupo Paraguas:** group site literally in "MANTENIMIENTO" mode — no group-level
  digital front door.
- **Arzábal:** strongest Spanish comparator. Concept-first copy ("RESERVA LOS MEJORES
  ASIENTOS DE MADRID — Un banco en El Retiro. Una silla frente al Guernica…"), community
  adjective ("LA VIDA ARZABALERA"), hours+map per venue on homepage, CoverManager for
  reservations AND gift products.
- **Big Mamma Group:** gold standard. Venue cards with tags making choice effortless,
  dual CTAs (Menu/Book), 5 languages, producers storytelling, newsletter, e-shop,
  centralized private-hire forms, in-house design studio.

## White space Lamucca could own

1. **Playful multi-venue wayfinding** ("which Lamucca is for you?") — mood/occasion/
   barrio picker. Nobody in Madrid does it; Lamucca's venues are genuinely different
   but presented as a flat name list.
2. **Community as product** — Muckero is real and named with 15+ published profiles;
   zero capture today. Arzábal has a slogan; Lamucca has people.
3. **Craft/obrador storytelling** — En Bruto (bakery, award roastery, kombucha lab) is
   a Big-Mamma-grade producer story, currently only on LinkedIn/press.
4. **Monetization on existing rails** — gift cards + event funnels via the CoverManager
   they already pay for.
5. **Table stakes first:** TLS, platform, one consolidated site with the full 18-venue
   roster, H1s/schema, English version, newsletter.
