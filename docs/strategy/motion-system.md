# Lamucca — Motion System v1.0 «La imprenta»

**Status:** adopted 2026-07-25 · extends creative-direction.md §6 and design-system.md §7
**Principle unchanged:** *the press, not the cursor.* Things stamp, settle, slide and dry.

---

## 0. The library question — answered honestly

The brief asks for GSAP where appropriate and Lenis if it genuinely improves things.
Both were evaluated against the actual moments this page needs.

### Lenis — **declined**

Smooth-scroll libraries replace native scrolling with a JS-driven transform loop.

- It contradicts an adopted brand rule (four fives: *never trade speed for spectacle*;
  experience principle 4: *fast is part of the hospitality*).
- On mobile it is actively worse: it fights iOS momentum and rubber-banding, breaks
  scroll-anchoring, and adds input latency to the one gesture users make constantly.
- It costs a JS bundle on a page that currently ships **zero**.
- It would delay the primary conversion gesture — the thing we are forbidden to do.

Native scrolling *is* the premium choice here. Declined on the merits, not by reflex.

### GSAP — **not needed for these moments**

Everything this page requires is now a platform primitive, and the platform version is
smaller, runs off the main thread, and degrades to "already printed" for free:

| Need | Native primitive used | Why not GSAP |
|---|---|---|
| Scroll-linked progress | CSS `animation-timeline: scroll()` / `view()` | Runs on the compositor, not in JS; no rAF loop |
| Chapter transitions | Scroll-driven `clip-path` | Same effect, zero bundle |
| Filter re-flow (FLIP) | View Transitions API | FLIP for free, no manual measurement |
| Page-to-page morph | Cross-document View Transitions (CSS-only) | GSAP cannot do cross-document at all |
| Discrete micro-interactions | WAAPI `.animate()` | Already in every browser |

**When GSAP would be reconsidered:** a timeline with genuine interdependency —
scrubbed sequences with overlapping easing across many elements (e.g. a future
commissioned film sequence, or SVG morph choreography). No such moment exists here.
If one is commissioned, GSAP core + ScrollTrigger enters as a *route-scoped* import,
never a global one.

**Net result:** every moment below ships with **zero added dependencies** and the
homepage keeps its zero-JS-bundle profile.

---

## 1. The system

### 1.1 Layers

| Layer | Trigger | Technique | Reverses? |
|---|---|---|---|
| **Load** | page load | CSS keyframes, once | no |
| **Entrance** | element enters view | IntersectionObserver + class (trigger-once) | no |
| **Progress** | scroll position | CSS scroll-driven animation | yes (scrubbed) |
| **Transition** | navigation / state change | View Transitions API | n/a |
| **Micro** | pointer / keyboard | CSS transition + WAAPI | yes |

**Why entrance is trigger-once and not scrubbed:** ink does not un-dry. Content reveals
that reverse on scroll-up read as a gimmick and cost comprehension. Scrubbing is
reserved for things that genuinely represent *progress* — the timeline, the ink spread,
the hero drift.

### 1.2 Reveal variants

All driven by `data-reveal="…"`, all staggered with `--reveal-delay`:

| Variant | Motion | Used for |
|---|---|---|
| *(default)* | translateY(24px) + fade — "ink dry" | body copy, blocks |
| `line` | clip-path wipe upward + slight rise | display typography |
| `stamp` | scale(1.06→1) + rotate to rest | stamps, dictionary card |
| `rule` | scaleX(0→1) from left | rules, dividers |
| `field` | halftone dots scale up + fade | `.campo` media fields |

### 1.3 Timing (unchanged tokens)

`--t-instant 120ms` · `--t-micro 200ms` · `--t-stamp 250ms` · `--t-enter 400ms` ·
`--t-reveal 700ms`. Ceiling 800ms. Anything blocking a booking gesture: 0ms.
Easing: `--ease-out` (dry), `--ease-snap` (press), `--ease-move` (positional).

---

## 2. The five signature moments

Each exists for a reason. No moment is decorative.

### WOW 1 — «La tirada» (the press run) · Chapter 01, on load

The page prints itself: the masthead rule draws left→right, the two headline lines wipe
up from behind a clip mask (not a fade — a *print reveal*), the halftone field inks up
as its dots scale from nothing, and the stamp lands last with its settle.

**Reason to exist.** The first three seconds must establish the thesis: this is a
printed object, made by hand, not a template. It is the only load animation on the
site, so it carries the whole first impression. Pure CSS — it runs even if JS fails.

### WOW 2 — «La mancha» (the ink spread) · Chapters 03 and 07

As an ink chapter enters, its dark field spreads from an inset rounded block to full
bleed, scrubbed to scroll position. The ink literally floods the page.

**Reason to exist.** The IA specifies an ink flood as the transition into memory
(Chapter 03) and into the closing invitation (Chapter 07). It makes the emotional gear
change *felt*, marking chapter boundaries without a decorative divider. Content is never
hidden — the inset stays inside the section's own padding.

### WOW 3 — «El carrete» (the reel) · Chapter 03 timeline

Scrolling the 2008→2025 strip fills a progress rule beneath it, and each year's tick
inks in as it crosses into view — driven by the strip's *own* horizontal scroll.

**Reason to exist.** It converts "18 restaurants" from a claim into a felt duration —
the city calling them, year by year. Critically it uses native horizontal scroll with no
pinning and no hijack, so the gesture stays the user's.

### WOW 4 — «El pase» (the pass) · card → venue page

Tapping a casa card morphs its colour field into that venue's page hero; the nav stays
fixed while the world changes underneath. Cross-document View Transitions, declared in
CSS, with the shared name assigned to the clicked card only.

**Reason to exist.** This is what makes 18 venues feel like one continuous place rather
than 18 documents — the literal answer to "a living digital world." It also improves
*perceived* performance at the exact moment a user is heading toward a booking.

### WOW 5 — «La criba» (the sieve) · Chapter 04 picker

When filters change, cards don't pop in and out: removed casas ink out, survivors glide
to their new positions, and the result count rolls.

**Reason to exist.** The picker is the signature product moment, and without continuity
users lose track of what just happened to their choices. This motion produces
*understanding* — the first thing the brief requires an interaction to create.

---

## 3. Parallax policy

Exactly **one** parallax element on the page: the hero's halftone field drifts ~14px
slower than scroll, desktop only, scroll-driven, transform only.

**Why only one.** Parallax is a depth cue; used more than once per page it becomes
wallpaper and starts costing frames. The hero field earns it because it is the only
place we are simulating a photographic plane. Everything else moves at the speed of the
page — which is what "confident" looks like.

## 4. What we explicitly do not do

No scroll-jacking. No pinned sections. No scroll-driven video. No 3D. No floating
decorative elements. No infinite ambient motion (tickers are the sole loop, and they
stop under reduced-motion). No generic fade-in-everything — reveals are typed by
content role. No animation between a user and a table.

## 5. Accessibility & performance

- `prefers-reduced-motion: reduce` disables **everything**: load animations, reveals,
  scroll-driven progress, view transitions (`::view-transition-*` animations set to
  `none`), tickers, and the parallax drift. The page resolves to its final printed
  state with nothing lost.
- Every scroll-driven and load animation is wrapped in `@supports`, so unsupported
  browsers get the static final state rather than a broken intermediate one.
- Animated properties: `transform`, `opacity`, `clip-path`, `scale` only.
  No layout-triggering properties are ever animated.
- `will-change` is set only on the ticker track.
- Mobile: parallax is disabled below 900px; view transitions are capped at 260ms so
  navigation never feels slowed; scroll-driven work runs on the compositor.
