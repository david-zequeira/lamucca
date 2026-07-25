# Lamucca — Product Strategy v1.0

**Status:** adopted 2026-07-25 · governs scope and prioritization for the digital experience
**Upstream:** docs/strategy/brand-strategy.md (brand DNA, four fives) · docs/research/*
**Rule:** if a feature doesn't serve a journey below, it doesn't get built.

---

# 1. Product vision

**Every appetite in Madrid finds its Lamucca in under a minute — and feels like a
regular before walking in.**

The digital experience is not a website about restaurants; it is the group's
hospitality, practiced digitally. It does for the portfolio what a great camarero does
for a table: reads you, guides you, seats you, remembers you.

# 2. Product mission

Turn Lamucca's real advantages — 18 genuinely different casas, a named community, a
craft story, fair prices — into the fastest, warmest restaurant-choosing and booking
experience in Madrid, on the phone in someone's hand.

# 3. Core user promise

> **«En un minuto sabes cuál es tu Lamucca — y tienes mesa.»**
> (One minute to know which Lamucca is yours — and to hold a table.)

Corollaries: what you see is real (photos, prices, hours); you never re-enter data you
already gave; the tone that greets you online is the tone that greets you at the door.

# 4. Business objectives (measurable)

| # | Objective | KPI | v1 target |
|---|-----------|-----|-----------|
| B1 | Grow direct online reservations | Session → CoverManager handoff rate; completed-booking events | ≥ 8% handoff; baseline → +30% bookings in 90 days |
| B2 | Make the full portfolio visible | % of sessions viewing ≥ 2 venues; all 18 venues indexed with rich results | ≥ 35%; 18/18 with `Restaurant` schema |
| B3 | Open a community capture channel | Newsletter/community signups | ≥ 2% of sessions |
| B4 | Generate high-value group/event leads | Qualified event inquiries/month | ≥ 20/month |
| B5 | Restore digital trust & brand equity | CWV all green on 4G mobile; brand SERP owned | LCP < 1.8s p75; #1 for "lamucca" |

# 5. User objectives

1. Decide **which** venue fits tonight's plan without research effort.
2. Book in seconds, on mobile, often for the same evening.
3. Know before going: real menu with prices, hours, address, allergens, kid/terrace/
   group suitability.
4. Feel the room before arriving (spaces, music, people).
5. For visitors: understand and book in English with local-insider confidence.

# 6. Primary conversion

**A completed reservation**, via the venue's real CoverManager module, reached in one
gesture from any venue surface. We optimize the *approach* (right venue, right
confidence, minimum steps) and instrument the handoff; the widget itself is theirs.

# 7. Secondary conversions

Ranked by business value:
1. Group/private-event inquiry (highest ticket).
2. Newsletter / community signup (compounding asset).
3. "Cómo llegar" tap (maps) — intent proxy for walk-ins.
4. Delivery click-through (Glovo/Uber Eats).
5. Menu view (pre-booking confidence signal).
6. Follow @lamucca.
7. Career application (talent pipeline).

# 8. Key user journeys

Six designed journeys (detailed in Part II): Discoverer, Tourist, Local-tonight,
Group plan, Returning Muckero, Direct booker. The IA must let each complete its journey
without crossing another's path: story-seekers never block bookers; bookers never miss
the universe.

# 9. User personas

**P1 · Marta, 33 — la organizadora** (Chamberí, product manager). Plans dinners for
4–8 friends and family meals. Decides on mobile, on the metro, day-of. Values: fast
comparison, terrace/kids info, price certainty. Fear: choosing a place people shrug at.

**P2 · Javi, 27 — el muckero** (Malasaña, works hospitality-adjacent). Knows "his"
Lamucca; follows @lamucca. Wants: what's new, book in 3 taps, feel the community is
real. Fear: the brand going corporate.

**P3 · Emma, 30 — la visitante** (London, 4 days in Madrid). Found the brand on
Instagram/TikTok. Wants: local-not-touristy validation, English, exact address, "will
they get my allergy?". Fear: tourist traps.

**P4 · Carlos, 41 — el que celebra** (Las Rozas, sales director). Books the team
dinner (14 people) and his daughter's communion lunch. Wants: private rooms, group
menus, one contact, fast written confirmation. Fear: sounding improvised to his boss.

**P5 · Lucía, 24 — futura muckera** (talent). Evaluates the employer through the site.
Wants: to see real people and culture. Fear: a smiling brand hiding a grim employer.

# 10. Jobs-to-be-done

- **JTBD-1 (decide):** When it's Thursday 19:40 and the group said "you pick," help me
  choose a place everyone will love, so I look like the one who knows Madrid.
- **JTBD-2 (book):** When I've decided, let me lock the table now — before the plan
  evaporates — with zero re-entry.
- **JTBD-3 (trust):** When I don't know the brand, show me evidence (real rooms, real
  prices, real people) so I can commit without doubt.
- **JTBD-4 (belong):** When I already love Lamucca, give me ways to be *more* muckero —
  news, profiles, perks — so my loyalty compounds.
- **JTBD-5 (celebrate):** When the occasion matters, make me confident the venue can
  hold it (space, menu, budget) and give me a human path for the details.
- **JTBD-6 (visit):** When I'm in Madrid briefly, let me experience the city like a
  local with one safe choice, in my language.

---

# Part II — The six journeys

## JOURNEY 1 — Never heard of Lamucca (the Discoverer)

- **Entry point:** Google ("restaurantes Malasaña", "donde comer Madrid centro"),
  a shared link, or a press mention. Lands on homepage or a venue page via SEO.
- **Emotional state:** neutral-skeptical; evaluating in seconds; zero brand context.
- **User intention:** "Is this place good, real, and for people like me?"
- **Ideal experience:** within one screen: who Lamucca is (Madrid family, since 2008,
  HIGH LOW in plain words), proof (real spaces, real prices), and a low-effort next
  step (see the casas). The hero states identity, not adjectives. Scrolling rewards
  with story; the venue grid shows *different personalities*, not branches.
- **Potential friction:** brand-speak without evidence; being pushed to book before
  trusting; landing on a venue page with no group context.
- **Desired action:** views 2+ venues, understands HIGH LOW, saves/shares or books.
- **Conversion point:** first venue page visit → "Reservar" tap; secondary: follow/
  newsletter. Success = trust built in <60 seconds.

## JOURNEY 2 — Tourist visiting Madrid (Emma)

- **Entry point:** Instagram bio link, TikTok creator video, Google Maps profile,
  "best non-touristy restaurants Madrid" listicle.
- **Emotional state:** excited but wary of tourist traps; possibly on hotel Wi-Fi or
  roaming; limited Spanish.
- **User intention:** "One authentic dinner near where I'll be — bookable now, in
  English."
- **Ideal experience:** instant EN toggle; venues presented by neighborhood with
  walking context ("2 min from Sol, hidden square"); local validation signals ("un
  clásico madrileño desde 2008"); allergen/menu access; book in EN via CoverManager's
  language param; address → Apple/Google Maps in one tap.
- **Potential friction:** no English (current reality); slow site on roaming; not
  knowing dress code/price level; fear of needing to call.
- **Desired action:** books the nearest/most iconic casa for a specific evening.
- **Conversion point:** EN venue page → Reservar (EN module). Proxy: maps tap.

## JOURNEY 3 — Local looking for dinner tonight (Marta solo/pareja mode)

- **Entry point:** direct URL / brand search / bookmark; it's 18:30, dinner at 21:00.
- **Emotional state:** hungry, decisive, impatient; phone in one hand.
- **User intention:** "Somewhere good tonight, near me or my mood — now."
- **Ideal experience:** the wayfinding moment: "¿Qué Lamucca te toca hoy?" — pick a
  mood/barrio/occasion, get 2–3 casas with tonight-availability paths, book in ≤3 taps
  total. Hours and "kitchen open all day" visible without hunting.
- **Potential friction:** any step that delays the shortlist; venue pages that read
  like brochures instead of answering tonight's questions; discovering at the end that
  there's no table (availability disappointment late in the funnel).
- **Desired action:** booked table within 90 seconds of landing.
- **Conversion point:** picker result → venue → Reservar. KPI: median time-to-handoff.

## JOURNEY 4 — Group of friends looking for a place (Marta organizer mode)

- **Entry point:** WhatsApp group delegates; Marta opens the site to build a proposal;
  often desktop-and-mobile mixed, day before or day-of.
- **Emotional state:** responsible, slightly stressed; needs consensus ammunition.
- **User intention:** "A place for 8 that fits everyone (one vegan, one with a dog,
  two picky), bookable for Friday 21:30, shareable to the group."
- **Ideal experience:** filter by group-friendliness (long tables, terrace, pet
  friendly, kids); venue pages state group capacity and privados plainly; a share-ready
  venue card (OG image with name + barrio + vibe) that looks great in WhatsApp; group
  size flows into the booking module.
- **Potential friction:** no capacity info; ugly link previews; booking capped below
  group size with no fallback path (should route to events/phone).
- **Desired action:** shares one venue link to the group, then books for 8.
- **Conversion point:** Reservar with party size ≥6; overflow → event inquiry.
  Secondary: link shares (measured via share-parameter visits).

## JOURNEY 5 — Returning Muckero (Javi)

- **Entry point:** direct, IG story tap, or newsletter (future).
- **Emotional state:** at home; affectionate; low patience for being marketed to.
- **User intention:** "What's new? When's the next opening? Book my usual. Prove
  you're still you."
- **Ideal experience:** novelty surfaces fast (new casas, Muckero del mes, counters);
  his usual casa is one tap from anywhere; community has a place to belong (newsletter
  now, membership later); tone stays cheeky ("MUCK YOU!" energy preserved).
- **Potential friction:** static site that never changes (nothing to come back for);
  community content buried; corporate re-skin killing the voice.
- **Desired action:** repeat booking + newsletter signup + shares novelty.
- **Conversion point:** Reservar (return path ≤2 taps); signup. KPI: returning-visitor
  booking rate.

## JOURNEY 6 — Already knows which restaurant (the Direct booker)

- **Entry point:** Google "lamucca prado", Maps profile, a friend's "book Lamucca de
  Pez"; lands directly on the venue page.
- **Emotional state:** decided; anything between them and the table is friction.
- **User intention:** "Book. Confirm. Done."
- **Ideal experience:** venue page front-loads action: Reservar visible without
  scrolling (sticky on mobile), hours/address/phone immediately, module opens with
  venue preselected. Everything else (story, photos) exists *below* the action layer.
- **Potential friction:** story content pushing the CTA down; redirect chains; the
  12-name dropdown (they already chose!); phone as only fallback.
- **Desired action:** completed booking in <30 seconds from landing.
- **Conversion point:** landing → Reservar in one gesture. KPI: venue-page handoff
  rate, bounce-to-booking ratio.

---

# Part III — Product hierarchy (MoSCoW)

## MUST HAVE (v1 is broken without these)

1. **Full portfolio, truthfully** — all 18 venues, verified content model, sourced
   facts, per-venue `Restaurant` JSON-LD, sitemap, honest hours (add when verified).
2. **Character-first venue system** — cards and pages that transmit each casa's
   personality (accent, tagline, traits, barrio narrative) inside one family system.
3. **One-gesture booking everywhere** — CoverManager deep links on every venue
   surface; mobile sticky reserve bar; direct-booker layout (action above story).
4. **Wayfinding: "¿Qué Lamucca te toca hoy?"** — mood/barrio/occasion picker producing
   a 2–3 casa shortlist. The signature product move; no competitor has it.
5. **Brand story layer** — Historia, HIGH LOW, Muckero definition (verbatim), staged
   as felt experiences (already built in v1 site).
6. **Performance & accessibility as features** — CWV green on mid-range Android/4G,
   reduced-motion support, semantic headings, AA contrast.
7. **Measurement** — privacy-respecting analytics on all conversion events (handoffs,
   maps, menus, signups); UTM discipline on outbound modules.

## SHOULD HAVE (v1.x, weeks after launch)

1. **English version** (ES canonical, EN full) — unlocks Journey 2 completely.
2. **Groups & events funnel** — dedicated page (privados, Club Fishermans, group
   menus) + inquiry form with venue/size/date; overflow routing from big-party
   bookings (Journey 4/Carlos).
3. **Newsletter / community capture** — "Hazte muckero" with brand-voice onboarding.
4. **Venue map view** — all casas on one Madrid map with character labels.
5. **Menus as fast HTML** (not PDF), with prices; allergen access; per-venue hours
   once verified with the client.
6. **Share-grade OG images** per venue (WhatsApp-first design).
7. **Delivery hub** — per-venue Glovo/Uber Eats routing.

## NICE TO HAVE (differentiators when core is proven)

1. **Gift cards** on CoverManager rails (Arzábal-proven, zero new vendors).
2. **En Bruto craft story** — the obrador/roastery/kombucha narrative as an editorial
   page (producers story, Big Mamma-grade).
3. **Muckero del mes** on-site editorial (cross-post from IG franchise).
4. **Live counters** (boletus pizzas served, euros donated) — brand's own device,
   revived.
5. **Careers page with faces** — Lucía's journey; culture proof over job-board copy.
6. **Music layer** — per-casa playlists (needs client's real playlists; music is in
   the muckero definition).

## FUTURE (post-v1 bets, need client/ops involvement)

1. **Muckero membership** — perks, priority tables, birthday rewards; the community
   as compounding product.
2. **Real-time "mesa esta noche"** — cross-venue availability surface (needs
   CoverManager API depth).
3. **UGC surfaces** — the TikTok creator energy, owned.
4. **Merch / e-shop** (En Bruto bread subscriptions, "MUCK YOU!" merch).
5. **Multi-city architecture** (Mallorca is already reality; "los locales nos llaman").

---

# Part IV — v1 roadmap (prioritized)

**R0 — Foundation · done.** Design system, 18-page static build, venue content model
(16 entries verified), story sections, booking paths, 0-JS-bundle performance base.

**R1 — "La base que convierte" (next).**
Scope: direct-booker venue-page layout (action above story, sticky bar everywhere);
JSON-LD + sitemap + per-page SEO; analytics events; venue pages enriched (traits,
barrio narrative, maps links); missing-venue gap vs. current site closed (already
modeled).
Exit criteria: B5 metrics green; every venue bookable in ≤2 taps from anywhere;
schema validates for 18/18.

**R2 — "El guía" — the signature move.**
Scope: "¿Qué Lamucca te toca hoy?" wayfinding (mood/occasion/barrio → shortlist);
venue map; occasion/character tags added to content model; share-grade OG images.
Exit criteria: ≥25% of homepage sessions engage the picker; picker-assisted handoff
rate ≥ direct-grid rate.

**R3 — "Puertas abiertas".**
Scope: English version; groups & events funnel + inquiry form; menus as HTML with
prices; delivery hub.
Exit criteria: EN sessions convert ≥60% of ES rate; ≥20 qualified event leads/month.

**R4 — "La comunidad".**
Scope: newsletter capture with muckero onboarding; Muckero del mes editorial; En Bruto
craft story; counters; careers with faces.
Exit criteria: ≥2% session→signup; returning-visitor share grows month-over-month.

**Sequencing logic:** conversion rails before discovery magic (R1→R2), reach before
community (R3→R4) — each release compounds the previous one's KPI. Gift cards slot
into R3/R4 opportunistically if the client confirms CoverManager product setup.

---

*Constraints carried from brand strategy: never luxury-code, never uniform the venues,
never invent facts, never trade speed for spectacle, never bury the reservation. The
four fives govern acceptance of every feature above.*
