import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Magnetic } from "@/components/interactive/Magnetic";
import { consultationHref, proceduresHref } from "@/config/navigation";

/**
 * Free-license Unsplash photo (Kirill Balobanov,
 * unsplash.com/photos/2rIs8OH5ng0 — standard Unsplash license, free for
 * commercial use), desaturated and sepia-tinted via CSS filter and faded
 * into the section background with a mask, rather than shown as a literal
 * photograph — see ctaArtwork usage below.
 */
const ctaArtwork = "/images/cta-female-profile.jpg";

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

        <div
          className="absolute inset-y-0 right-0 hidden w-[42%] md:block"
          style={{
            WebkitMaskImage: "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.5) 35%, black 65%)",
            maskImage: "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.5) 35%, black 65%)",
          }}
        >
          <Image
            src={ctaArtwork}
            alt=""
            fill
            sizes="42vw"
            className="object-cover object-top opacity-60 mix-blend-multiply"
            style={{ filter: "sepia(0.55) saturate(1.3) hue-rotate(-8deg) brightness(1.05)" }}
          />
        </div>

        <svg
          className="absolute right-0 top-0 h-full w-2/5 opacity-40"
          viewBox="0 0 400 500"
          preserveAspectRatio="none"
          fill="none"
        >
          <path d="M420 0C300 90 260 180 320 260C380 340 340 430 220 500" stroke="var(--color-clay)" strokeWidth="1.5" />
          <path d="M460 0C360 110 330 210 400 290C440 340 420 420 320 500" stroke="var(--color-border-strong)" strokeWidth="1" />
        </svg>
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
