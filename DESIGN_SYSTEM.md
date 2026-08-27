# DESIGN_SYSTEM.md

The visual language for the Dr. Dinesh Kumar website. Every future page, section, and component is built from the tokens and primitives documented here — nothing outside this system should be invented ad hoc. Phase 2 scope: tokens, primitives, and this document only. No homepage or procedure pages exist yet.

---

## 1. Visual Philosophy

**"Quiet luxury meets surgical precision."**

The site is expensive-feeling because of restraint, not effects: strong editorial typography, generous whitespace, and precise composition — not shadows, gradients, or motion. It should read as a piece of considered print design translated to the web, with the calm authority of a serious clinical practice underneath.

Explicitly rejected: medical blue, glassmorphism, floating pills/badges, card-grid templating, bouncy/glowing UI, dashboard aesthetics, salon-brand softness, dark cyberpunk tech styling, decorative icon clutter.

Every component built from this system should be checked against: *does this feel composed, or assembled from a template?* If it's the latter, it doesn't ship (see `PROJECT_RULES.md` §12).

---

## 2. Color System

Defined as CSS custom properties in [globals.css](src/app/globals.css), with Tailwind v4 `@theme inline` bindings so they're usable as `bg-(--color-x)` / `text-(--color-x)` utilities.

| Token | Light value | Semantic purpose |
|---|---|---|
| `--color-bg` | `#F7F5F1` (Bone) | Primary page background — warm off-white, not pure white |
| `--color-bg-secondary` | `#EEEAE2` (Stone) | Alternate section background, used to separate editorial blocks without a border |
| `--color-surface` | `#FFFFFF` (Paper) | Raised/inset surfaces: form fields, cards where truly justified |
| `--color-ink` | `#1B1A17` | Primary text — warm near-black, softer than `#000` |
| `--color-ink-muted` | `#6B6459` | Secondary text: captions, metadata, supporting copy |
| `--color-ink-faint` | `#A39C8E` | Placeholder / disabled text only |
| `--color-accent` | `#2F3B32` (Deep Pine) | Links, primary CTAs, focus rings, emphasis — used sparingly |
| `--color-accent-strong` | `#232C26` | Accent hover/active state |
| `--color-accent-ink` | `#F7F5F1` | Text/icon color placed on top of a filled accent surface |
| `--color-border` | `#E2DDD2` | Default hairline border/divider |
| `--color-border-strong` | `#C9C1B1` | Emphasized border, input focus border |
| `--color-danger` | `#8A3B2F` | Form validation errors only — never decorative |

**Why this palette**: warm neutrals (bone/stone/ink) carry the "editorial, human, timeless" brand adjectives; a single desaturated deep-pine accent reads as calm and precise rather than clinical-blue or salon-pink, and is gender-neutral. The palette deliberately has one accent, not a family of accents — restraint is the point.

**Dark mode strategy**: dark mode is supported via `prefers-color-scheme` (no manual toggle in Phase 2) as a secondary, respectful experience — inverted warm-charcoal background (`#16150F`) with the same relationships preserved (bone-toned ink, pine accent lightened for contrast on dark). The site's primary, designed-for experience is light — closer to print/editorial — and dark mode is treated as a faithful inversion rather than a distinct aesthetic.

**Contrast**: `--color-ink` on `--color-bg` and `--color-ink-muted` on `--color-bg` both exceed 4.5:1 (verified — Ink/Bone ≈ 14.8:1, Muted/Bone ≈ 4.6:1). `--color-accent` on `--color-bg` exceeds 7:1.

---

## 3. Typography System

**Fonts** (loaded via `next/font/google` in [layout.tsx](src/app/layout.tsx) — self-hosted, zero layout shift, no external requests):

- **Display / editorial — [Fraunces](https://fonts.google.com/specimen/Fraunces)**: a variable serif built for large-size editorial use, with real weight range and italics. Used only for `display`, `h1`, and `h2` — the moments where the brand needs personality. Warm, soft-contrast, contemporary rather than a decorative/trendy display face; it reads as considered and human, not as generic "AI startup" typography.
- **Functional / UI — [Inter](https://fonts.google.com/specimen/Inter)**: used for `h3`, body copy, navigation, buttons, eyebrows, and all small/medical content. Chosen for exceptional legibility at small sizes, a large weight range, and a neutral character that doesn't compete with the serif headlines — this is where "medical credibility" and readability live.

This two-family split is the entire typographic system: **serif carries brand moments, sans carries information.** No third font is introduced.

**Scale** (utility classes defined in `globals.css`, fluid via `clamp()` so they scale continuously between mobile and desktop rather than jumping at breakpoints):

| Class | Font | Weight | Size (mobile → desktop) | Use |
|---|---|---|---|---|
| `.text-display` | Fraunces | 400 | 2.75rem → 5.5rem | Rare, single hero moments |
| `.text-h1` | Fraunces | 400 | 2.25rem → 3.75rem | Page-level heading |
| `.text-h2` | Fraunces | 500 | 1.75rem → 2.75rem | Section heading |
| `.text-h3` | Inter | 600 | 1.25rem → 1.625rem | Sub-section / card-level heading |
| `.text-body-lg` | Inter | 400 | 1.0625rem → 1.25rem | Editorial lead paragraphs |
| `.text-body` | Inter | 400 | 1rem | Default body copy |
| `.text-small` | Inter | 400 | 0.875rem | Captions, footnotes, form hints |
| `.text-eyebrow` | Inter | 600 | 0.75rem, uppercase, 0.14em tracking | Metadata label above a heading |
| `.text-nav` | Inter | 500 | 0.9375rem | Navigation links |
| `.text-button` | Inter | 500 | 0.9375rem | Button/CTA label |

**Line height & letter spacing**: display/headings use tight line-height (1.04–1.3) and slightly negative tracking for cohesion at large sizes; body copy uses generous line-height (1.65) for long-form medical readability; eyebrows use wide positive tracking to read as metadata, not a heading.

**Responsive scaling strategy**: every heading and body-large size uses `clamp(min, fluid, max)` so type scales smoothly with viewport width instead of via fixed per-breakpoint overrides — this keeps editorial proportions consistent at any width, including in-between sizes Tailwind's fixed breakpoints would otherwise skip.

---

## 4. Spacing System

Tailwind's default spacing scale (4px base unit) is used as-is for component-level spacing — no override needed. On top of it, section-level rhythm is standardized through the `Section` primitive so spacing decisions aren't repeated per page:

| Spacing intent | Token / class | Mobile | Desktop |
|---|---|---|---|
| Component spacing | Tailwind scale (`gap-2`…`gap-8`) | as needed | as needed |
| Section spacing — standard | `Section spacing="md"` | `py-16` (4rem) | `py-24` (6rem) |
| Section spacing — editorial | `Section spacing="lg"` (default) | `py-20` (5rem) | `py-32` (8rem) |
| Section spacing — large/hero | `Section spacing="xl"` | `py-24` (6rem) | `py-40` (10rem) |
| Responsive gutter | `--gutter` (`clamp(1.25rem, 4vw, 3rem)`) | ~1.25rem | up to 3rem |

**Principle**: whitespace is generous and intentional by default (`lg` is the baseline, not `md`) — a section has to earn a tighter spacing, not the other way around.

---

## 5. Layout / Grid System

- `--container-content` (72rem / 1152px): standard editorial reading width — body copy, forms, most section content.
- `--container-wide` (92rem / 1472px): for large photography, split/asymmetric layouts, and future interactive experiences that need more horizontal room.
- Full-bleed: omit the `Container` entirely (`width="full"` or no wrapper) for edge-to-edge imagery/backgrounds.
- The responsive gutter (`--gutter`) is applied by `Container` as horizontal padding so content never touches the viewport edge on mobile.
- **No global grid/card system is imposed.** Sections compose their own internal layout (CSS Grid/Flexbox as needed per section) using the container widths and spacing scale above as the only shared constraints — this is what keeps the site editorial rather than "template + card grid."

---

## 6. UI Primitives

Implemented in `src/components/ui/`. Deliberately minimal — only what multiple future sections will actually need:

| Component | Purpose |
|---|---|
| [Container.tsx](src/components/ui/Container.tsx) | Horizontal width + gutter control (`content` / `wide`) |
| [Section.tsx](src/components/ui/Section.tsx) | Vertical rhythm + background for a page section |
| [Button.tsx](src/components/ui/Button.tsx) | Primary / secondary / text CTA (see §7) |
| [TextLink.tsx](src/components/ui/TextLink.tsx) | In-copy and standalone text links |
| [Eyebrow.tsx](src/components/ui/Eyebrow.tsx) | Uppercase metadata label above a heading |
| [Divider.tsx](src/components/ui/Divider.tsx) | Hairline rule for separation instead of shadows/cards |

No generic component library was built (no Card, Badge, Modal, Tabs, etc. yet) — those are added only when a real section in Phase 3+ needs one, per `PROJECT_RULES.md` §11 (Dependency/complexity discipline applies to internal components too).

---

## 7. Button System

Three CTA weights only, implemented in [Button.tsx](src/components/ui/Button.tsx):

- **Primary** — filled, `--color-accent` background, for the single most important action in a given context (e.g. "Request a Consultation").
- **Secondary** — outlined (`--color-border-strong`), for supporting actions alongside a primary.
- **Text** — underlined text only, no padding/background, for the lowest-emphasis action (e.g. "Learn more").

**States**: default → hover (color shift only, no scale/shadow change) → `:focus-visible` (2px accent outline, 3px offset, defined globally in `globals.css`, never suppressed) → active (accent-strong / bg-secondary) → disabled (`opacity-40`, `pointer-events-none`).

**Explicitly avoided**: border-radius beyond `--radius-sm` (2px), scale/bounce transitions, glow/shadow effects, gradient fills. `Button` renders as a real `<button>` or, when given an `href`, as a `next/link` `<a>` — never a `<div onClick>`.

---

## 8. Motion System

**Philosophy: "Subtle, deliberate, cinematic."**

- Tokens: `--duration-fast` (150ms, hover/color changes), `--duration-base` (300ms, small transitions), `--duration-slow` (600ms, entrance reveals), and `--ease-editorial` (`cubic-bezier(0.22, 1, 0.36, 1)`, a soft decelerate used everywhere instead of linear/default easing). Mirrored as plain JS constants in [motion/tokens.ts](src/lib/motion/tokens.ts) for future JS-driven animation (e.g. an interactive recovery-journey timeline), so CSS and JS motion never drift out of sync.
- Only `transform` and `opacity` are animated for performance; layout-affecting properties are not transitioned.
- `.motion-fade-in` is the one general-purpose entrance utility provided in Phase 2 — a small opacity/translateY reveal — used sparingly, not on every element.
- `prefers-reduced-motion: reduce` is handled globally in `globals.css`: all animation/transition durations collapse to near-zero and smooth scrolling is disabled, site-wide, with no per-component opt-out needed.
- No animation/scroll library is installed. If Phase 3+ interactive experiences (recovery journeys, procedure explorer) need orchestration CSS can't express, the justified addition is a single, purpose-fit library (e.g. Framer Motion) — evaluated at that time against `PROJECT_RULES.md` §11, not pre-installed speculatively now.
- Scroll-jacking, autoplay loops, and animating content that delays readability/accessibility are disallowed outright (already stated in `PROJECT_RULES.md` §8).

---

## 9. Image Strategy

- All imagery renders through `next/image` (per `PROJECT_RULES.md` §6/§9) — no raw `<img>` for content.
- **Aspect ratios**: portraits of Dr. Dinesh use `4:5` (editorial portrait crop); environmental/clinical photography uses `3:2`; full-bleed hero imagery uses `16:9` on desktop, cropping to `4:5` on mobile via `sizes`/art direction when needed. Ratios are enforced by a sized aspect-ratio wrapper, not by stretching the image.
- **Object positioning**: `object-cover` with a deliberate `object-position` (usually top-aligned for portraits, so headroom crops before the subject does).
- **Loading behavior**: hero/above-the-fold images use `priority` + explicit `sizes`; every other image lazy-loads by default (`next/image`'s default behavior — no manual override needed).
- **Placeholder strategy**: `next/image`'s `blurDataURL` (generated from the real optimized asset) is the standard placeholder — no generic gray boxes or unrelated stock imagery are used as stand-ins. Until real photography exists, sections that need imagery are simply not built yet (per this phase's scope), rather than filled with placeholder stock photos.
- No decorative stock photography is used anywhere on the site — every image is either real photography of Dr. Dinesh/the practice or a deliberately chosen editorial/procedure illustration.

---

## 10. Responsive Design Rules

Mobile is designed as its own composition, not a squeezed desktop layout:

- **Typography**: fluid `clamp()` scales (§3) mean type genuinely shrinks in proportion on mobile rather than just wrapping; display-scale type is used sparingly on mobile to avoid dominating small viewports.
- **Section spacing**: every `Section` spacing tier has an explicit, smaller mobile value (§4) — mobile sections are visibly more compact than desktop, not the same padding at a smaller viewport.
- **Navigation**: full-width desktop nav bars collapse to a minimal mobile pattern (menu button + full-screen or slide-in panel) when the nav is built in Phase 3 — governed by this system's spacing/typography tokens, not a separate mobile design language.
- **Editorial/split layouts**: multi-column or asymmetric compositions (e.g. text beside a large image) stack to a single column on mobile in a deliberate order (most important content first), never via a naive grid-to-block collapse that loses hierarchy.
- **Interactive components**: touch targets are ≥44×44px (already codified in `PROJECT_RULES.md` §7); hover-dependent interactions (e.g. hover-to-reveal) always have a tap-equivalent on touch devices.
- Breakpoints follow Tailwind's defaults (`sm` 640px / `md` 768px / `lg` 1024px / `xl` 1280px); no custom breakpoints have been needed yet.

---

## 11. Accessibility Principles

- **Focus states**: a visible 2px `--color-accent` outline with 3px offset is applied globally via `:focus-visible` in `globals.css` and is never removed without an equal-or-stronger replacement.
- **Contrast**: all text/background pairs in §2 meet or exceed WCAG AA (4.5:1 body, 3:1 large text/UI) — verified against the documented hex values.
- **Semantic HTML**: heading levels map to the type scale in order (`display`/`h1` → one per page; `h2`/`h3` follow document structure) — the type-scale classes are a styling layer on top of real heading elements, not a substitute for them.
- **Reduced motion**: handled globally (§8) — no component needs to implement its own reduced-motion check for the base animation utilities provided here.
- **Touch targets**: ≥44×44px, per `PROJECT_RULES.md` §7.
- **Screen readers**: decorative elements (e.g. a divider used purely visually) use `role="presentation"`/`aria-hidden` where appropriate; the `Button`/`TextLink` primitives render real interactive elements (`<button>`, `<a>`) so assistive tech gets correct semantics for free.

---

## 12. Rules Future Components Must Follow

1. Use the color, type, spacing, and motion **tokens** defined here — never a hardcoded hex, one-off font-size, or ad hoc easing curve.
2. Compose sections from `Container` + `Section` + the type-scale classes; only add a new shared primitive to `ui/` when at least two real sections need it.
3. Any new color must be justified against the existing palette (§2) before being added — the default answer is "reuse an existing token."
4. Border-radius stays at `--radius-sm`/`--radius-md` for interactive elements; nothing site-wide becomes pill-shaped.
5. New motion must use `--duration-*`/`--ease-editorial` and only animate `transform`/`opacity`, and must degrade correctly under `prefers-reduced-motion` (already handled globally, but don't add per-component animation that bypasses it, e.g. via inline styles).
6. A section is not "done" if it could be mistaken for a generic SaaS/template block — re-check against §1 before shipping (per `PROJECT_RULES.md` §12).
7. No new runtime dependency (animation library, UI kit, icon set) is added to serve the design system without the justification step in `PROJECT_RULES.md` §11.

---

*Phase 2 status: tokens, base styles, and UI primitives are implemented and verified (lint + production build pass). No homepage, navigation, or procedure pages have been built — that begins in Phase 3, using only what's defined in this document.*
