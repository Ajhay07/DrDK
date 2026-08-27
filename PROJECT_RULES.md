# PROJECT_RULES.md

Coding standards for the Dr. Dinesh Kumar aesthetic & plastic surgery website. These rules apply to every contribution, human or AI-assisted.

---

## 1. TypeScript Standards

- `strict` mode stays on (do not weaken `tsconfig.json`).
- No `any`. Use `unknown` + narrowing, or a proper type/generic.
- Every exported function has explicit parameter and return types; local inference is fine for trivial variables.
- Domain types (Procedure, FaqEntry, EducationArticle, etc.) live in `src/types/` and are the single source of truth — do not redefine shapes ad hoc in components.
- Prefer `interface` for object shapes that might be extended, `type` for unions/utility compositions.

## 2. Component Conventions

- One component per file; filename matches the exported component name (`ProcedureCard.tsx` exports `ProcedureCard`).
- Props are typed via a `ComponentNameProps` interface declared directly above the component.
- Components in `ui/` accept no data-fetching, no side effects — pure presentation.
- Components in `sections/` may receive fetched data as props but do not fetch data themselves unless they are the page's direct Server Component child.
- Components in `interactive/` are the only place `"use client"` should appear except where a genuine leaf-level need exists (e.g. a single animated icon) — keep the client boundary as small/deep as possible.
- No default exports for components — use named exports for consistent refactors and clearer imports.

## 3. Server vs. Client Component Rules

- Default to Server Components. Adding `"use client"` requires a concrete reason: local state, effects, event handlers, or browser-only APIs.
- Never mark a whole page `"use client"` to use one interactive widget — extract the widget into its own Client Component and import it into the Server Component page.
- Data fetching happens in Server Components or Route Handlers, never inside a Client Component via `useEffect`.
- Client Components receive already-fetched, serializable data as props.

## 4. Accessibility Requirements

- Target WCAG 2.1 AA.
- All interactive elements are reachable and operable by keyboard alone; visible focus states are never removed (`outline: none` without a replacement focus style is not allowed).
- Images require meaningful `alt` text; purely decorative images use `alt=""`.
- Color contrast: minimum 4.5:1 for body text, 3:1 for large text/UI components.
- Use semantic HTML elements (`<nav>`, `<button>`, `<article>`, headings in order) before reaching for ARIA; ARIA supplements semantics, it doesn't replace them.
- Respect `prefers-reduced-motion` for any non-essential animation.
- Form inputs always have associated, visible or properly linked labels — no placeholder-as-label.

## 5. SEO Requirements

- Every route exports `metadata` or `generateMetadata` — no page ships without a title/description.
- One `<h1>` per page, matching the page's primary topic; heading levels are not skipped.
- Dynamic routes (`/procedures/[slug]`, `/education/[slug]`) implement `generateStaticParams` for SSG unless there's a specific reason for on-demand rendering.
- All internal links use `next/link`; no `<a>` for internal navigation.
- Structured data (JSON-LD) is added through the shared helpers in `lib/seo/`, not inlined per page.

## 6. Performance Requirements

- Justify every new npm dependency against its bundle-size cost (see §9) before adding it.
- Any component that isn't needed above the fold and carries non-trivial client JS is loaded via `next/dynamic`.
- Images always go through `next/image`; never a raw `<img>` for content images.
- No blocking synchronous scripts; third-party scripts load via `next/script` with an appropriate `strategy`.
- Avoid unnecessary re-renders: memoize expensive computations in interactive components, keep state as local as possible.

## 7. Responsive Design Rules

- Mobile-first: write base (unprefixed) Tailwind classes for mobile, layer up with `sm:`/`md:`/`lg:`/`xl:` for larger viewports.
- Test at minimum: 375px (mobile), 768px (tablet), 1280px+ (desktop) before considering a UI complete.
- No fixed pixel widths on layout containers — use relative units, `max-w-*`, and fluid grids.
- Touch targets are at least 44x44px on mobile.

## 8. Animation Rules

- Motion is restrained and purposeful: transitions communicate state change (hover, open/close, step progression), never decoration for its own sake.
- No auto-playing, looping decorative animations competing with content.
- All animation respects `prefers-reduced-motion: reduce` (disable or drastically shorten).
- Prefer CSS transitions/transforms for simple effects; reach for a JS animation library only when CSS genuinely cannot express the interaction (see dependency discipline below).
- Standard easing/duration values are defined once (in Tailwind config or a shared constant) rather than picked ad hoc per component.

## 9. Image Optimization Rules

- All static images live under `public/images/`, organized by feature/section.
- Every image is pre-sized/compressed before committing — don't rely on `next/image` to fix an oversized source file.
- Use modern formats (AVIF/WebP source where possible); `next/image` handles format negotiation on top.
- Always set explicit `width`/`height` (or `fill` with a sized/aspect-ratio parent) to prevent layout shift.
- Above-the-fold hero images use `priority`; nothing else does.

## 10. File Naming Conventions

- Components: `PascalCase.tsx` (`ProcedureCard.tsx`).
- Hooks: `camelCase.ts` prefixed with `use` (`useRecoveryTimeline.ts`).
- Utilities/plain functions: `camelCase.ts` (`formatDate.ts`).
- Route files follow Next.js conventions exactly (`page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`, `route.ts`).
- Content data files: `kebab-case.ts` matching the slug (`rhinoplasty.ts`).
- Types: `camelCase.ts` in `src/types/` (`procedure.ts` exports `Procedure`).

## 11. Dependency Discipline

- Before adding a package, check whether the same result is achievable with what's already installed (Next.js, React, Tailwind) or a small amount of native code.
- No UI kit is installed wholesale (e.g. no MUI/Chakra) — this is a bespoke, editorial design system; components are built directly with Tailwind.
- Any accepted dependency must state, at the point it's added, what it's for and why nothing existing covers it.
- Avoid multiple libraries that solve the same problem (e.g. only one date library, only one animation library, if any).
- Dev-only tooling (linters, formatters) is fine to add liberally; runtime dependencies are the ones held to scrutiny.

## 12. Premium Visual Design Rules

- No generic "medical blue" gradients, stock dashboard patterns, glassmorphism-everywhere, or default rounded-card grids — see `CLAUDE.md`-level project brief for the full list of patterns to avoid.
- Typography carries the design: establish a strong editorial type scale before reaching for decorative UI elements.
- Whitespace is a deliberate design tool, not empty space to be filled — resist the urge to add filler content/icons to "balance" a section.
- Every new section should be checked against the brand adjectives (premium, editorial, minimal, calm, precise) before being considered done — if a component looks like a generic SaaS landing page block, it does not ship.
- Icons are used sparingly and only where they add real clarity, never as decoration.

---

*These rules govern Phase 2+ implementation. Phase 1 (this commit) only establishes the project foundation — no visual design work has been done yet.*
