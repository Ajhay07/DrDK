import { Container } from "@/components/ui/Container";
import { Magnetic } from "@/components/interactive/Magnetic";
import { consultationHref, proceduresHref } from "@/config/navigation";

/**
 * Hand-drawn abstract silhouette — deliberately not a photograph. An
 * earlier version used a real portrait (with CSS filters/blend modes
 * trying to soften it into an illustration), which still read as "a
 * woman's photo on the right" rather than editorial artwork. This is a
 * single soft SVG path suggesting a head/neck/shoulder profile, filled
 * with a gradient that fades toward transparent on the face side, plus
 * translucent ribbon shapes — no facial features, no realism.
 */
function CtaArtwork(): React.ReactElement {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 400 600"
      preserveAspectRatio="xMaxYMid slice"
      className="h-full w-full"
    >
      <defs>
        <linearGradient id="cta-silhouette-fade" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="var(--color-clay)" stopOpacity="0" />
          <stop offset="55%" stopColor="var(--color-clay)" stopOpacity="0.22" />
          <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0.38" />
        </linearGradient>
        <linearGradient id="cta-ribbon-fade" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--color-border-strong)" stopOpacity="0" />
          <stop offset="100%" stopColor="var(--color-border-strong)" stopOpacity="0.3" />
        </linearGradient>
      </defs>

      {/* Soft translucent ribbon forms — fabric/light movement, not a face. */}
      <path
        d="M40,0 C160,60 140,160 220,220 C300,280 260,380 340,440 C380,470 400,520 400,600 L400,0 Z"
        fill="url(#cta-ribbon-fade)"
      />

      {/* Abstract head / neck / shoulder profile, facing left. No eyes,
          nose or mouth are drawn — just a single continuous silhouette
          edge, soft enough to read as suggestion rather than portrait. */}
      <path
        d="M400,10
           C 330,25 300,70 310,120
           C 270,135 250,170 265,205
           C 230,215 215,245 232,275
           C 205,290 198,320 218,345
           C 195,360 195,390 220,405
           C 205,425 215,450 245,460
           C 235,490 250,520 285,535
           C 300,565 330,585 375,595
           C 385,597 393,598 400,598
           Z"
        fill="url(#cta-silhouette-fade)"
      />
    </svg>
  );
}

/**
 * The closing screen — a light, warm-sage environment (not a dark banner)
 * where the consultation action is a word inside the sentence itself, not
 * a boxed button. A conclusion, not a banner.
 */
export function FinalConsultationCTA(): React.ReactElement {
  return (
    <section className="relative overflow-hidden bg-(--color-bg-secondary)">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -right-24 top-1/2 h-[28rem] w-[28rem] -translate-y-1/2 rounded-full bg-(--color-clay)/25 blur-3xl" />
        <div className="absolute right-10 top-0 h-full w-1/3 bg-gradient-to-l from-(--color-clay)/15 to-transparent" />

        <div className="absolute inset-y-0 right-0 hidden w-[45%] md:block">
          <CtaArtwork />
        </div>
      </div>
      <Container width="wide" className="relative py-16 md:py-24">
        <div className="flex items-baseline justify-between">
          <span className="text-eyebrow">06 &mdash; Begin with a Conversation</span>
          <span className="text-eyebrow">Chennai, India</span>
        </div>

        <p className="text-hero mt-10 max-w-5xl text-(--color-ink)">
          Every decision begins with{" "}
          <Magnetic data-cursor="Open" className="inline-block">
            <a
              href={consultationHref}
              className="text-(--color-accent) italic underline decoration-2 underline-offset-8 transition-colors duration-(--duration-fast) ease-(--ease-editorial) hover:text-(--color-accent-strong)"
            >
              understanding
            </a>
          </Magnetic>
          .
        </p>

        <p className="text-body-lg mt-6 max-w-lg text-(--color-ink-muted)">
          Take the first step towards a more confident you.
        </p>

        <div className="mt-12">
          <Magnetic data-cursor="Explore">
            <a
              href={proceduresHref}
              className="text-eyebrow inline-flex items-center gap-2 border-b border-(--color-ink) pb-0.5 text-(--color-ink) transition-colors duration-(--duration-fast) ease-(--ease-editorial) hover:text-(--color-accent) hover:border-(--color-accent)"
            >
              Explore Procedures
              <span aria-hidden="true">&#8594;</span>
            </a>
          </Magnetic>
        </div>
      </Container>
    </section>
  );
}
