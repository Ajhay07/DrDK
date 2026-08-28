import { Container } from "@/components/ui/Container";
import { testimonials } from "@/config/testimonials";

/**
 * DEMO placeholder testimonials — illustrative only, not real patients.
 * A continuously sliding (right-to-left) track of pull-quote cards rather
 * than a stack of full-width paragraphs. The list is duplicated once so
 * the CSS marquee (globals.css) loops seamlessly; pauses on hover/focus
 * and freezes entirely under prefers-reduced-motion (global rule).
 */
export function Testimonials(): React.ReactElement {
  const track = [...testimonials, ...testimonials];

  return (
    <section className="bg-(--color-surface) overflow-hidden">
      <Container width="wide" className="py-16 md:py-24">
        <span className="text-eyebrow">06 &mdash; Patient Voices</span>
        <h2 className="text-display mt-6 max-w-2xl text-(--color-ink)">
          What patients say.
        </h2>
      </Container>

      <div className="mt-12 md:mt-16">
        <div className="motion-marquee flex w-max gap-6 px-(--gutter)">
          {track.map((testimonial, index) => (
            <blockquote
              key={`${testimonial.name}-${index}`}
              className="flex w-[20rem] shrink-0 flex-col justify-between border border-(--color-border) bg-(--color-bg) p-8 sm:w-[24rem]"
            >
              <p className="text-body-lg italic text-(--color-ink)">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <footer className="text-eyebrow mt-8 text-(--color-ink-muted)">
                {testimonial.name} &middot; {testimonial.context}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
