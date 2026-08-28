import { Container } from "@/components/ui/Container";
import { testimonials } from "@/config/testimonials";

function initials(name: string): string {
  return name
    .replace(/[^A-Za-z .]/g, "")
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function StarIcon({ className }: { className?: string }): React.ReactElement {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
      <path d="M10 1.5l2.47 5.13 5.65.66-4.2 3.86 1.13 5.6L10 13.9l-5.05 2.85 1.13-5.6-4.2-3.86 5.65-.66L10 1.5Z" />
    </svg>
  );
}

/**
 * DEMO placeholder testimonials — illustrative only, not real patients.
 * Styled like a Google-review card (avatar initials, 5-star row, reviewer
 * name/context, review text) inside a continuously sliding (right-to-left)
 * floating-window track. The list is duplicated once so the CSS marquee
 * (globals.css) loops seamlessly; pauses on hover/focus and freezes
 * entirely under prefers-reduced-motion (global rule).
 */
export function Testimonials(): React.ReactElement {
  const track = [...testimonials, ...testimonials];

  return (
    <section className="bg-(--color-surface) overflow-hidden">
      <Container width="wide" className="pt-16 pb-8 md:pt-24 md:pb-8">
        <span className="text-eyebrow">05 &mdash; Patient Voices</span>
        <h2 className="text-display mt-6 max-w-2xl text-(--color-ink)">
          What patients say.
        </h2>
      </Container>

      <div className="py-4 pb-16 md:pb-24">
        <div className="motion-marquee flex w-max items-center gap-6 px-(--gutter)">
          {track.map((testimonial, index) => (
            <div
              key={`${testimonial.name}-${index}`}
              className={`flex w-[20rem] shrink-0 flex-col rounded-2xl bg-(--color-bg) p-6 shadow-[0_24px_48px_rgba(23,27,19,0.14)] transition-transform duration-(--duration-base) ease-(--ease-editorial) hover:-translate-y-1 sm:w-[22rem] ${
                index % 2 === 0 ? "" : "sm:translate-y-5"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-(--color-bg-secondary) text-sm font-medium text-(--color-ink)">
                  {initials(testimonial.name)}
                </span>
                <div>
                  <p className="text-sm font-medium text-(--color-ink)">{testimonial.name}</p>
                  <p className="text-xs text-(--color-ink-faint)">{testimonial.context}</p>
                </div>
              </div>

              <div className="mt-3 flex gap-0.5 text-(--color-accent)">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <StarIcon key={starIndex} className="h-4 w-4" />
                ))}
              </div>

              <p className="text-sm mt-3 leading-relaxed text-(--color-ink-muted)">{testimonial.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
