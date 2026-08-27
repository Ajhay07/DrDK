import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Magnetic } from "@/components/interactive/Magnetic";
import { HeroPortrait } from "@/components/interactive/HeroPortrait";
import { consultationHref, proceduresHref } from "@/config/navigation";

/**
 * Homepage hero. Server-rendered aside from the portrait's pointer-tilt
 * (HeroPortrait, an isolated client island). Typography carries the
 * composition: the portrait is embedded inline within the headline itself
 * rather than occupying its own image column, at a size close to its
 * native 150×150 resolution so it never looks stretched.
 */
export function Hero(): React.ReactElement {
  return (
    <section className="bg-(--color-bg)">
      <Container width="wide">
        <div className="flex items-baseline justify-between border-t border-b border-(--color-border) py-5">
          <Eyebrow>Plastic &amp; Aesthetic Surgery</Eyebrow>
          <span className="text-eyebrow">Chennai, India</span>
        </div>

        <h1 className="text-mega pt-14 text-(--color-ink) motion-fade-in lg:pt-20">
          <span className="block">Precision in surgery.</span>
          <span className="mt-2 flex flex-wrap items-center gap-4 sm:gap-6">
            <span className="italic">Individuality</span>
            <HeroPortrait />
            <span>in aesthetics.</span>
          </span>
        </h1>

        <div className="grid grid-cols-1 gap-10 pt-10 pb-16 lg:grid-cols-12 lg:gap-8 lg:pb-24">
          <div className="lg:col-span-6">
            <p
              className="text-body-lg text-(--color-ink-muted) motion-fade-in"
              style={{ animationDelay: "120ms" }}
            >
              A refined approach to aesthetic and reconstructive surgery, centred
              around proportion, individuality and informed decisions.
            </p>

            <div
              className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center motion-fade-in"
              style={{ animationDelay: "200ms" }}
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
          </div>

          <div className="flex items-end lg:col-span-6 lg:justify-end">
            <div className="flex items-center gap-3 text-(--color-ink-faint)">
              <span className="text-eyebrow">Scroll</span>
              <span aria-hidden="true" className="h-px w-10 bg-(--color-border-strong)" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
