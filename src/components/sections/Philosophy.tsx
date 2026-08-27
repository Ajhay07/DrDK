import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

/**
 * A visual manifesto in the deep forest-charcoal environment — three
 * distinct scenes, not a three-column card grid. Each principle gets its
 * own alignment and composition rather than a repeated template.
 */
export function Philosophy(): React.ReactElement {
  return (
    <section className="bg-(--color-ink) text-(--color-bg)">
      <Container width="wide" className="py-24 md:py-40">
        <Eyebrow className="text-(--color-bg) opacity-60">Philosophy</Eyebrow>

        <div className="mt-16 grid grid-cols-1 gap-6 md:mt-20 md:grid-cols-12 md:items-end">
          <h2 className="text-hero md:col-span-7">Proportion.</h2>
          <p className="text-body-lg opacity-70 md:col-span-4 md:col-start-9">
            Every decision begins with balance — facial or bodily proportion —
            rather than a fixed idea of beauty.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-6 text-right md:mt-32 md:grid-cols-12 md:items-start md:text-left">
          <p className="text-body-lg opacity-70 md:col-span-4 md:order-1">
            Outcomes are designed around your own features and goals, not a
            template result repeated across patients.
          </p>
          <h2 className="text-hero italic md:order-2 md:col-span-7 md:col-start-6 md:text-right">
            Individuality.
          </h2>
        </div>

        <div className="mt-20 text-center md:mt-32">
          <h2 className="text-hero">Informed</h2>
          <h2 className="text-giant italic opacity-80">decisions.</h2>
          <p className="text-body-lg mx-auto mt-8 max-w-md opacity-70">
            Every consultation prioritises clear, honest explanation, so you
            can decide with confidence and time.
          </p>
        </div>
      </Container>
    </section>
  );
}
