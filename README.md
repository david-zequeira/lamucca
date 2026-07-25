# Lamucca — digital brand experience

Editorial, cinematic web experience for **Lamucca Company** (Grupo Lamucca), the
Madrid restaurant family founded by Ofelia and Álex Marín in 2008.

- **Concept:** "HIGH LOW, printed" — the brand's philosophy expressed as a design
  system. See [DESIGN-DECISIONS.md](DESIGN-DECISIONS.md) (living document).
- **Facts:** every brand claim is verified and sourced — see
  [docs/research/brand-report.md](docs/research/brand-report.md). Venue data lives in
  a typed content model (`src/content/restaurants/*.json`) with per-entry sources.
- **Stack:** Astro (static), vanilla TS, self-hosted variable fonts (Fraunces +
  Archivo). Zero JS bundles; two tiny inline scripts (reveals, mobile menu).

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static build to dist/
```

## Structure

- `src/pages/index.astro` — homepage (hero, venue grid, historia, high low, muckero, universo)
- `src/pages/restaurantes/[slug].astro` — venue pages, mobile sticky reserve bar
- `src/content/restaurants/` — verified venue content model
- `src/styles/tokens.css` — design tokens (palette, fluid type/space scales, motion)

## Content still pending

- Real photography (art-directed color slots hold the layout until assets arrive)
- Per-venue opening hours (unverified — deliberately omitted)
- OG/social images
