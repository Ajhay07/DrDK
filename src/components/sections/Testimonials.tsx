import { Container } from "@/components/ui/Container";
import { testimonials } from "@/config/testimonials";

/**
 * DEMO placeholder testimonials — illustrative only, not real patients.
 * Stacked editorial pull-quotes rather than a review-card grid.
 */
export function Testimonials(): React.ReactElement {
  return (
    <section className="bg-(--color-surface)">
      <Container width="wide" className="py-20 md:py-32">
        <span className="text-eyebrow">06 &mdash; Patient Voices</span>
        <h2 className="text-display mt-6 max-w-2xl text-(--color-ink)">
          What patients say.
        </h2>

        <ul className="mt-16 border-t border-(--color-border) md:mt-20">
          {testimonials.map((testimonial) => (
            <li key={testimonial.name} className="border-b border-(--color-border) py-10 md:py-14">
              <p className="text-h2 max-w-3xl italic text-(--color-ink)">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <p className="text-eyebrow mt-6">
                {testimonial.name} &middot; {testimonial.context}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
