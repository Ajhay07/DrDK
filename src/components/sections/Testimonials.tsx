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

      <div className="mt-12 py-4 md:mt-16">
        <div className="motion-marquee flex w-max items-center gap-6 px-(--gutter)">
          {track.map((testimonial, index) => (
            <blockquote
              key={`${testimonial.name}-${index}`}
              className={`flex w-[20rem] shrink-0 flex-col justify-between rounded-2xl bg-(--color-bg) p-8 shadow-[0_24px_48px_rgba(23,27,19,0.14)] transition-transform duration-(--duration-base) ease-(--ease-editorial) hover:-translate-y-1 sm:w-[24rem] ${
                index % 2 === 0 ? "" : "sm:translate-y-5"
              }`}
            >
              <span aria-hidden="true" className="font-(family-name:--font-display) text-4xl italic text-(--color-accent)">
                &ldquo;
              </span>
              <p className="text-body-lg mt-2 italic text-(--color-ink)">{testimonial.quote}</p>
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
