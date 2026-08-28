import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Magnetic } from "@/components/interactive/Magnetic";
import { consultationHref, proceduresHref } from "@/config/navigation";

/**
 * Homepage hero — text-only by design. Every treatment of the low-
 * resolution portrait (woven into the headline, framed beside it) read
 * as weak rather than premium, so the hero now relies entirely on
 * typography and composition — a legitimate, common approach for
 * premium personal-brand sites, and lower-risk than a photo that keeps
 * undermining the impression.
 */
export function Hero(): React.ReactElement {
  return (
    <section className="bg-(--color-bg)">
      <Container width="wide">
        <div className="flex items-baseline justify-between border-t border-b border-(--color-border) py-5">
          <span className="text-eyebrow">Plastic Surgeon</span>
          <span className="text-eyebrow">Chennai, India</span>
        </div>

        <div className="max-w-3xl py-20 md:py-28">
          <h1 className="text-display text-(--color-ink) motion-fade-in">
            Precision in surgery.
            <br />
            <span className="italic">Individuality</span> in aesthetics.
          </h1>

          <p
            className="text-body-lg mt-8 max-w-lg text-(--color-ink-muted) motion-fade-in"
            style={{ animationDelay: "100ms" }}
          >
            A refined approach to aesthetic and reconstructive surgery, centred
            around proportion, individuality and informed decisions.
          </p>

          <div
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center motion-fade-in"
            style={{ animationDelay: "180ms" }}
          >
            <Magnetic data-cursor="Open">
              <Button href={consultationHref} variant="primary" className="w-full sm:w-auto">
                Book a Consultation
              </Button>
            </Magnetic>
            <Magnetic data-cursor="Explore">
              <Button href={proceduresHref} variant="secondary" className="w-full sm:w-auto">
                Explore Procedures
              </Button>
            </Magnetic>
          </div>

          <p
            className="text-eyebrow mt-14 motion-fade-in"
            style={{ animationDelay: "240ms" }}
          >
            MBBS &middot; MS &middot; MCh (Plastic Surgery) &middot; Vijaya Hospitals, Chennai
          </p>
        </div>
      </Container>
    </section>
  );
}
