import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Magnetic } from "@/components/interactive/Magnetic";
import { HeroPortrait } from "@/components/interactive/HeroPortrait";
import { consultationHref, proceduresHref } from "@/config/navigation";

/**
 * Homepage hero — one 12-column grid composition. Every element (eyebrow,
 * headline lines, portrait, caption, supporting copy, CTAs) is placed by
 * explicit grid-column/row assignment against the same column tracks —
 * no absolute positioning, no one-off translate/margin offsets.
 *
 * Note: an item combining col-span-N with col-start-M does NOT work in
 * Tailwind — col-span sets the `grid-column` shorthand (start AND end),
 * so it silently overwrites col-start. Every offset item here uses
 * col-start-N + col-end-M instead, which are independent longhands.
 */
export function Hero(): React.ReactElement {
  return (
    <section className="bg-(--color-bg)">
      <Container width="wide">
        <div className="flex items-baseline justify-between border-t border-b border-(--color-border) py-5">
          <span className="text-eyebrow">Plastic Surgeon</span>
          <span className="text-eyebrow">Chennai, India</span>
        </div>

        <h1
          aria-label="Precision in form. Individuality in aesthetics."
          className="grid grid-cols-12 gap-x-(--grid-gap) gap-y-3 pt-10 text-(--color-ink) md:gap-y-4 md:pt-16"
        >
          <span className="text-hero motion-reveal col-span-12 block md:col-span-8">Precision</span>

          <span className="col-start-1 col-end-13 mt-4 flex items-center gap-4 motion-fade-in lg:col-start-9 lg:col-end-13 lg:row-span-3 lg:mt-0 lg:flex-col lg:items-start lg:justify-end">
            <HeroPortrait />
            <span className="font-(--font-display) text-lg italic text-(--color-ink) lg:mt-4">
              Dr. Dinesh Kumar
            </span>
          </span>

          <span
            className="text-giant motion-reveal col-start-2 col-end-13 block italic text-(--color-ink-muted) md:col-end-8"
            style={{ animationDelay: "80ms" }}
          >
            in form.
          </span>

          <span
            className="text-hero motion-reveal col-span-12 block md:col-span-8"
            style={{ animationDelay: "140ms" }}
          >
            Individuality
          </span>

          <span
            className="text-giant motion-reveal col-start-2 col-end-13 block italic text-(--color-ink-muted) md:col-end-8"
            style={{ animationDelay: "200ms" }}
          >
            in aesthetics.
          </span>
        </h1>

        <div className="mt-14 grid grid-cols-12 gap-x-(--grid-gap) gap-y-8 border-t border-(--color-border) pt-8 motion-fade-in md:mt-20">
          <p className="text-body-lg col-span-12 text-(--color-ink-muted) md:col-span-5">
            A refined approach to aesthetic and reconstructive surgery, centred
            around proportion, individuality and informed decisions.
          </p>

          <div className="col-start-1 col-end-13 flex flex-col gap-4 sm:flex-row md:col-start-8 md:col-end-13 md:items-center">
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
