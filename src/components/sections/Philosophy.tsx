import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

/**
 * A visual manifesto in a soft-stone light environment — three distinct
 * scenes, not a three-column card grid. Each principle gets its own
 * alignment and composition rather than a repeated template.
 */
export function Philosophy(): React.ReactElement {
  return (
    <section className="bg-(--color-surface)">
      <Container width="wide" className="py-16 md:py-24">
        <Eyebrow>04 &mdash; Philosophy</Eyebrow>

        <div className="mt-16 grid grid-cols-1 gap-6 md:mt-20 md:grid-cols-12 md:items-end">
          <h2 className="text-hero text-(--color-ink) md:col-span-7">Proportion.</h2>
          <p className="text-body-lg text-(--color-ink-muted) md:col-start-9 md:col-end-13">
            Every decision begins with balance — facial or bodily proportion —
            rather than a fixed idea of beauty.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-6 text-right md:mt-32 md:grid-cols-12 md:items-start md:text-left">
          <p className="text-body-lg text-(--color-ink-muted) md:col-span-4 md:order-1">
            Outcomes are designed around your own features and goals, not a
            template result repeated across patients.
          </p>
          <h2 className="text-hero italic text-(--color-ink) md:order-2 md:col-start-6 md:col-end-13 md:text-right">
            Individuality.
          </h2>
        </div>

        <div className="mt-20 text-center md:mt-32">
          <h2 className="text-hero text-(--color-ink)">Informed</h2>
          <h2 className="text-giant italic text-(--color-accent)">decisions.</h2>
          <p className="text-body-lg mx-auto mt-8 max-w-md text-(--color-ink-muted)">
            Every consultation prioritises clear, honest explanation, so you
            can decide with confidence and time.
          </p>
        </div>
      </Container>
    </section>
  );
}
