import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Magnetic } from "@/components/interactive/Magnetic";
import { HeroPortrait } from "@/components/interactive/HeroPortrait";
import { consultationHref, proceduresHref } from "@/config/navigation";

/**
 * Homepage hero — a single editorial poster composition rather than a
 * left-text/right-image template. Extreme scale contrast within one
 * statement (large word / small connecting phrase, repeated) carries the
 * identity; the portrait is a small element overlapping the whitespace
 * around the type, not a dedicated image column.
 */
export function Hero(): React.ReactElement {
  return (
    <section className="bg-(--color-bg)">
      <Container width="wide" className="pt-10 pb-16 md:pt-14 md:pb-24">
        <div className="flex items-baseline justify-between">
          <span className="text-eyebrow">Plastic Surgeon</span>
          <span className="text-eyebrow">Chennai, India</span>
        </div>

        <div className="relative mt-10 md:mt-16">
          <h1
            aria-label="Precision in form. Individuality in aesthetics."
            className="text-(--color-ink) motion-fade-in"
          >
            <span className="text-hero block">Precision</span>
            <span className="text-giant block pl-8 italic text-(--color-ink-muted) sm:pl-16 md:pl-28">
              in form.
            </span>
            <span className="text-hero mt-2 block md:mt-4">Individuality</span>
            <span className="text-giant block pl-8 italic sm:pl-16 md:pl-28">
              in aesthetics.
            </span>
          </h1>

          <div
            className="mt-10 flex items-end gap-6 motion-fade-in md:absolute md:right-0 md:top-[8%] md:mt-0"
            style={{ animationDelay: "120ms" }}
          >
            <HeroPortrait />
            <p className="font-(--font-display) text-lg italic text-(--color-ink)">
              Dr. Dinesh
              <br />
              Kumar
            </p>
          </div>
        </div>

        <div
          className="mt-14 flex flex-col gap-6 border-t border-(--color-border) pt-8 motion-fade-in sm:flex-row sm:items-center sm:justify-between md:mt-20"
          style={{ animationDelay: "220ms" }}
        >
          <p className="text-body-lg max-w-md text-(--color-ink-muted)">
            A refined approach to aesthetic and reconstructive surgery, centred
            around proportion, individuality and informed decisions.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
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
        </div>
      </Container>
    </section>
  );
}
