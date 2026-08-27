# PROJECT_ARCHITECTURE.md

Architecture reference for the Dr. Dinesh Kumar aesthetic & plastic surgery personal-brand website. This is Phase 1 (foundation only) — no visual design or homepage content exists yet.

---

## 1. Folder Structure

```
dr-dinesh-aesthetics/
├── src/
│   ├── app/                       # Next.js App Router — routes & layouts
│   │   ├── layout.tsx             # Root layout (fonts, global metadata)
│   │   ├── page.tsx               # Homepage (placeholder in Phase 1)
│   │   └── globals.css            # Tailwind entry + design tokens
│   ├── components/
│   │   ├── ui/                    # Primitive, style-only building blocks (Button, Badge, Divider)
│   │   ├── layout/                # Header, footer, nav, page shells
│   │   ├── sections/               # Page-level composed sections (Hero, Credentials, CTA band)
│   │   └── interactive/           # Client Components: explorers, quizzes, journeys, calculators
│   ├── lib/
│   │   ├── seo/                   # Metadata builders, JSON-LD schema generators, sitemap helpers
│   │   ├── analytics/             # Event tracking client, conversion tracking helpers
│   │   ├── utils/                 # Generic helpers (formatting, cn(), slugify)
│   │   └── hooks/                 # Shared client-side React hooks
│   ├── content/                   # Structured content (see §4)
│   │   ├── procedures/            # One file per procedure page
│   │   ├── faqs/                  # FAQ entries grouped by topic
│   │   └── education/             # Patient education / recovery-journey content
│   ├── types/                     # Shared TypeScript types & zod schemas
│   └── config/                    # Site-wide constants (nav structure, contact info, feature flags)
├── public/
│   ├── images/                    # Optimized static imagery
│   └── icons/                     # Favicons, app icons, social share images
├── PROJECT_ARCHITECTURE.md
├── PROJECT_RULES.md
└── (standard Next.js config files)
```

**Rationale**: `content/` is separated from `components/` and `lib/` so that non-technical content edits (procedure descriptions, FAQ copy) never require touching component logic, and so this directory can be swapped for a CMS data source later without restructuring the app.

---

## 2. Route Architecture

Planned route map (App Router, all under `src/app/`):

| Route | Purpose |
|---|---|
| `/` | Homepage — premium editorial landing experience |
| `/about` | Dr. Dinesh's story, credentials, philosophy |
| `/procedures` | Interactive procedure discovery/explorer (index) |
| `/procedures/[slug]` | Individual procedure detail page (dynamic, SSG where possible) |
| `/education` | Patient education hub (index of guides/articles) |
| `/education/[slug]` | Individual education article |
| `/recovery-journeys/[procedureSlug]` | Interactive step-by-step recovery timeline experience |
| `/faq` | Searchable/filterable FAQ and knowledge base |
| `/consultation` | Consultation booking funnel (multi-step form) |
| `/contact` | Contact details, location, WhatsApp entry point |
| `/sitemap.xml`, `/robots.txt` | Generated via Next.js Metadata File Conventions |

**Conventions**:
- Dynamic procedure/education pages use `generateStaticParams` + `generateMetadata` for SSG + per-page SEO.
- Each route segment owns only its `page.tsx` (+ optional `loading.tsx`/`error.tsx`); shared UI lives in `components/`, not colocated per-route, unless a component is truly route-exclusive (colocate as `_components/` inside that route segment in that case).
- Route groups (e.g. `(marketing)`, `(funnel)`) will be introduced in Phase 2+ once the booking funnel needs a distinct layout shell.

---

## 3. Component Architecture

- **Server Components by default.** A component only becomes a Client Component (`"use client"`) when it needs interactivity, browser APIs, or state (procedure explorer filters, recovery-journey sliders, booking form steps, animated reveals).
- **Three-tier component model**:
  1. `ui/` — dumb, reusable, no data fetching, no business logic (Button, Tag, SectionHeading).
  2. `sections/` — composed, page-specific blocks assembled from `ui/` primitives; may be Server Components that fetch/receive data as props.
  3. `interactive/` — Client Components that own local state/interaction logic (procedure explorer, quiz, comparison slider). These should be as small/leaf as possible — wrap only the interactive part, not the whole section, to minimize client JS.
- **Composition over configuration**: prefer passing children/slots over large boolean-prop APIs.
- **Co-location of variants**: component-specific types live in the same file unless shared elsewhere, in which case they move to `src/types/`.

---

## 4. Content & Data Architecture

Phase 1 uses **local structured content** (TypeScript/JSON modules under `src/content/`), typed via `src/types/`, e.g.:

```ts
// src/types/procedure.ts
export interface Procedure {
  slug: string;
  name: string;
  category: "face" | "body" | "reconstructive" | "non-surgical";
  summary: string;
  heroImage: string;
  overview: string;
  candidacy: string[];
  recoveryTimeline: RecoveryMilestone[];
  faqs: string[]; // FAQ ids
  seo: SeoFields;
}
```

- Content authoring happens in typed data files, not hardcoded inside components — every page component receives content as data and renders it, so the same rendering logic can later be pointed at a CMS query instead of a local file (see §11).
- Cross-referencing (procedure ↔ FAQ ↔ education article) is done via slugs/ids, resolved by small lookup utilities in `lib/utils/`, not duplicated content.

---

## 5. Interactive Feature Architecture

Interactive features (procedure explorer, recovery journeys, FAQ search) follow a consistent pattern:

- **Data down, events up**: the Server Component page fetches/imports the full dataset and passes it to a single Client Component "island"; the island manages filter/selection state internally.
- **Progressive enhancement**: the non-JS fallback for any interactive feature is a readable, navigable static list (e.g. procedure explorer degrades to a plain grid of links).
- **State stays local** unless multiple independent islands need to share it — no global client state library is introduced until a real cross-island requirement exists.
- Heavy interaction logic (step sequencing for recovery journeys, quiz branching) is extracted into plain TypeScript functions in `lib/utils/` or feature-local hooks, kept separate from JSX for testability.

---

## 6. SEO Architecture

- **Metadata API**: every route defines `generateMetadata` (dynamic routes) or a static `metadata` export, centralizing title templates via the root layout (`title.template`).
- **Structured data**: `lib/seo/` will hold JSON-LD builders for `Physician`/`MedicalBusiness`, `MedicalProcedure`, `FAQPage`, and `BreadcrumbList` schemas, injected per relevant route.
- **Sitemap & robots**: generated via `app/sitemap.ts` and `app/robots.ts` (Next.js Metadata File Conventions) once routes exist, so they stay in sync with actual pages instead of being hand-maintained.
- **Canonical URLs & Open Graph/Twitter cards**: set centrally through a shared `buildMetadata()` helper in `lib/seo/` so every page gets consistent OG image, canonical, and locale defaults without repeating boilerplate.
- **Semantic HTML & heading hierarchy** are treated as SEO-critical, not just accessibility-critical — enforced in `PROJECT_RULES.md`.

---

## 7. Analytics Architecture

- A single analytics abstraction (`lib/analytics/`) wraps whichever provider(s) are chosen (e.g. GA4/Vercel Analytics), exposing a small `track(event, payload)` API — pages/components never call a vendor SDK directly.
- Page-view tracking is handled once, centrally (root layout or a shared listener), not duplicated per page.
- Vendor scripts load via `next/script` with `strategy="afterInteractive"` or `"lazyOnload"` to avoid blocking LCP/TBT.

---

## 8. Conversion Tracking Architecture

- Key conversion events (WhatsApp click, consultation form start/step/submit, phone click, procedure-explorer engagement) are defined as a typed enum/const map in `lib/analytics/events.ts`, so event names can't drift between features.
- The consultation funnel tracks step-level drop-off (`funnel_step_view`, `funnel_step_complete`) to support future optimization.
- WhatsApp deep links are generated by a single helper (`lib/utils/whatsapp.ts`) so the phone number/prefilled message is defined once and every "Chat on WhatsApp" CTA reuses it — and every click fires the same tracked event.

---

## 9. Performance Strategy

- Server Components by default to minimize client JS shipped.
- Interactive islands are lazy-loaded (`next/dynamic`) where they are below the fold (recovery journey visualizations, procedure explorer on non-index pages).
- Fonts loaded via `next/font` (already configured) for zero layout shift and no external font requests.
- Target Core Web Vitals budgets: LCP < 2.5s, CLS < 0.1, INP < 200ms on 4G mobile — enforced by only introducing a dependency when its bundle-size cost is justified (see `PROJECT_RULES.md` §"Dependency Discipline").

---

## 10. Image & Media Strategy

- All imagery served through `next/image` for automatic responsive sizing, lazy loading, and format negotiation (AVIF/WebP).
- Hero/above-the-fold imagery uses `priority` + explicit `sizes`; everything else lazy-loads by default.
- Source images are optimized/pre-sized before entering `public/images/`; the folder is organized by feature (`public/images/procedures/`, `public/images/about/`) once content is added.
- Any future video content (recovery journey walkthroughs) is served via a CDN/streaming provider, not raw files in `public/`.

---

## 11. Accessibility Strategy

- WCAG 2.1 AA is the baseline target across color contrast, focus states, keyboard navigation, and semantic structure.
- Interactive components (explorer filters, funnel steps, accordions) are built on accessible primitives with correct ARIA roles/states rather than div-soup.
- Motion respects `prefers-reduced-motion`.
- Full detail in `PROJECT_RULES.md` §"Accessibility Requirements".

---

## 12. Future CMS Integration Strategy

Phase 1 intentionally keeps content as typed local data so the eventual CMS migration is additive, not a rewrite:

- Content types in `src/types/` are designed to map 1:1 onto a future CMS schema (e.g. Sanity, Payload, or Contentful).
- Data-fetching for content is already isolated behind small functions (e.g. `getProcedureBySlug()`, `getAllProcedures()`) living in `src/lib/`/`src/content/` — when a CMS is introduced, only these functions change to fetch remotely (with `fetch`/ISR revalidation) instead of importing local files. Page/component code stays unchanged.
- Draft/preview mode support (Next.js Draft Mode) is deferred until a CMS is chosen, since it depends on the provider.

---

*Phase 1 status: foundation only — no homepage, design system, or content has been built yet. This document will be extended as later phases introduce the design system, real content, and integrations.*
