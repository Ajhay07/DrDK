import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Magnetic } from "@/components/interactive/Magnetic";
import { consultationHref, proceduresHref } from "@/config/navigation";

/**
 * Client-supplied editorial artwork — flowing champagne fabric shapes
 * with a soft female profile emerging on the right, already in the
 * site's warm sepia palette. Used as-is, with only a left-edge mask so
 * it meets the section's own background color without a seam; no color
 * filters, overlays, or opacity reduction per the asset owner's request.
 */
const ctaArtwork = "/images/cta-artwork.webp";

/**
 * The closing screen — a light, warm-sage environment (not a dark banner)
 * where the consultation action is a word inside the sentence itself, not
 * a boxed button. A conclusion, not a banner.
 */
export function FinalConsultationCTA(): React.ReactElement {
  return (
    <section className="relative overflow-hidden bg-(--color-bg-secondary)">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 md:block"
        style={{
          WebkitMaskImage: "linear-gradient(90deg, transparent 0%, black 12%)",
          maskImage: "linear-gradient(90deg, transparent 0%, black 12%)",
        }}
      >
        <Image
          src={ctaArtwork}
          alt=""
          fill
          sizes="50vw"
          className="object-cover object-right"
        />
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
