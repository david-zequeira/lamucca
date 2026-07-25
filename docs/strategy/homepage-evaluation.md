# Homepage v1 — Evaluation (2026-07-25)

Seven chapters, «A Dos Tintas», measured in-browser. Scores are honest, not generous.

| Dimension | Score | Verdict |
|---|---|---|
| Brand | 9/10 | The concept is structural, not decorative |
| Storytelling | 8/10 | A real arc; one chapter still under-served |
| UX | 8/10 | The picker works; the page is long |
| Visual hierarchy | 8/10 | Clear, but weakened without photography |
| Conversion | 9/10 | 24 booking paths, never buried |
| Performance | 10/10 | 11.2 KB gzipped, zero JS bundles |
| Accessibility | 9/10 | AA verified by measurement, PE throughout |
| Mobile | 9/10 | Designed at 375px, not adapted |

---

## Brand — 9/10

Every screen carries both inks. The concept isn't applied to the page, it *is* the
page: Fraunces vs Archivo in permanent tension, the stamp as the only red object and
only rotated element, halftone fields instead of stock photography, the ticker as
printed street banner.

Brand language is verbatim where it matters: the muckero dictionary entry, the HIGH
LOW promise, «Como éramos inconscientes, abrimos», «Los locales nos llaman»,
«Reivindicamos el valor de la sonrisa», the careers copy, and the food chapter built
entirely on their own invented verb chain (Desayunar/Aperitivear/…/Recenar).

The edition mechanic — masthead reading *"Edición del aperitivo · Madrid, 16:06"* with
the matching verb lighting up — makes the site feel alive without betting the
foundation on it.

**Deduction:** the visual identity's own heart mark and coral are present but modest;
their real photography would carry brand weight nothing typographic can replace.

## Storytelling — 8/10

The arc holds: arrival → world → city → choice → food → people → invitation. Chapter 02
deliberately withholds individual venues (concept families only) so Chapter 04 can be
the meeting; Chapter 03 inverts to ink for the quietest beat; Chapter 05's manifesto
lands as a rest before the community and the table.

Transitions are compositional (ticker as divider, ink flood into memory) rather than
scroll effects — cinematic without scroll-jacking.

**Deduction:** Chapter 06 (Muckeros) is the thinnest — the community's real power is
faces and profiles, and without portraits it's a dictionary card plus a classified ad.
It states the culture; it doesn't yet let you feel it.

## UX — 8/10

The picker is the signature move and it genuinely works: five axes, AND across / OR
within, live count with correct singular-plural, an empty state that offers a way out,
one-zone-at-a-time logic (you can only be in one place), and "Sorpréndeme" for the
undecided. Verified: *Con niños* → Andes, Plaza España, Kiosco Magadán; adding *Centro*
→ Plaza España alone.

Progressive enhancement is real, not claimed: the filter panel ships `hidden` and is
revealed by script, so a no-JS user sees 17 fully linked, bookable casas and zero
broken affordances.

**Deduction:** the page is long (~16,000px). The picker showing all 17 casas by default
is the right call for portfolio visibility (objective B2) but costs scroll depth. A
"top 3 for you" collapse is the obvious next iteration.

## Visual hierarchy — 8/10

One H1, clean H1→H2→H3 nesting, chapter numbers as consistent wayfinding, a fluid scale
that goes 60px→120px for display while body stays 16–19px. The 1.5px ink rule aligns
the grid and does the structural work that borders and shadows do elsewhere.

**Deduction:** with color fields standing in for photography, several chapters rely on
type alone. It reads as intentional (and the halftone helps) but real imagery would add
the depth layer the hierarchy currently simulates.

## Conversion — 9/10

24 booking paths on one page. The stamp is in the nav on every screen, on every venue
card, and on every row of the closing chapter. Chapter 07 is a dedicated conversion
finale on ink with every bookable casa, the real phone number, and a routed path for
large parties rather than a dead end.

All handoffs go to the venue's real CoverManager module with `rel="noopener"`.
Booking copy is never joked with — the one place the playful voice stands down.

**Deduction:** the events/groups path currently links to the group's existing site
because `/eventos/` doesn't exist yet (R3). Honest, but a leak in the highest-ticket
funnel.

## Performance — 10/10

- **11.2 KB gzipped homepage**, 604 KB total dist including 9 font files
- **Zero JS bundles** — all three scripts inlined by Astro (reveals + edition, nav,
  picker); no libraries added, as required
- No images to load: the halftone fields are CSS gradients
- Animation is transform/opacity only; `will-change` only on the ticker
- `aspect-ratio` declared on every field, so no layout shift

Measured live: no console errors, no horizontal overflow at 375px or 1280px.

## Accessibility — 9/10

Verified by computing actual contrast ratios in-browser: every sampled text pair passes
AA, lowest 4.61:1, most 5.1–14.8:1. The primary CTA uses `--stamp-fill` (5.4:1) because
plain tomato measured 4.05:1 and would have failed.

Also: skip link, single H1, semantic landmarks, `aria-pressed` toggles, `aria-live`
result count, chips that signal selection with a ✓ and not colour alone, `scroll-margin`
so the sticky nav never covers an anchor, full `prefers-reduced-motion` support
(reveals resolve instantly, ticker stops, stamp tilt freezes), tap targets raised to
44px on text links, keyboard-navigable timeline strip, and every in-page anchor verified
to resolve.

**Deduction:** not yet tested with a real screen reader, and the `<html lang="es">`
page mixes in English brand phrases without `lang` annotations.

## Mobile — 9/10

Designed at 375px, not shrunk. Specific mobile decisions rather than breakpoint
fallout:
- The hero field switches to a 4:5 art-directed portrait crop, not a letterboxed
  desktop image
- Filter chips become per-axis horizontal snap rails, bleeding to the screen edge —
  27 chips would be an unreadable pile if wrapped
- The Reservar stamp **never** hides in the mobile bar
- Burger 48×48, stamp 53px tall, body 19px, no iOS zoom-on-focus risk
- Venue pages keep the sticky bottom reserve bar with safe-area padding

**Deduction:** the timeline strip and chip rails need a visible scroll affordance
(edge fade) — discoverable by feel but not by sight.

---

## Honest gaps carried into the next iteration

1. **Photography.** The single biggest lever. The architecture is ready (`.campo`
   accepts `<img>`, duotone filter and ratios defined) but no real assets exist. We did
   not fake them.
2. **Muckero faces.** The community chapter needs portraits and profiles.
3. **`/eventos/`.** The highest-ticket funnel still leaks to the old site.
4. **English.** No EN version; audience segment 3 (visitors) is unserved.
5. **Counters.** The brand's own device (pizzas served, euros donated) is deliberately
   absent — we will not invent figures.
6. **Page length.** Consider a "3 casas para ti" collapse in the picker.
