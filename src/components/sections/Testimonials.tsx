"use client";

import { useState } from "react";
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
 * Shown as a calm, static editorial grid (first four) with a "View more"
 * toggle to reveal the rest in place, rather than an auto-scrolling
 * marquee — a quieter, more deliberate presentation for the champagne
 * redesign. Motion is limited to a subtle hover lift.
 */
export function Testimonials(): React.ReactElement {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? testimonials : testimonials.slice(0, 4);

  return (
    <section className="bg-(--color-surface)">
      <Container width="wide" className="py-16 md:py-24">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <div>
            <span className="text-eyebrow">05 &mdash; Patient Voices</span>
            <h2 className="text-display mt-6 max-w-2xl text-(--color-ink)">
              What patients say.
            </h2>
          </div>

          {testimonials.length > 4 ? (
            <button
              type="button"
              onClick={() => setExpanded((current) => !current)}
              className="text-eyebrow inline-flex items-center gap-2 text-(--color-accent) transition-colors duration-(--duration-fast) ease-(--ease-editorial) hover:text-(--color-accent-strong)"
            >
              {expanded ? "Show fewer stories" : "View more stories"}
              <span aria-hidden="true">&rarr;</span>
            </button>
          ) : null}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {visible.map((testimonial) => (
            <div
              key={testimonial.name}
              className="flex flex-col rounded-(--radius-lg) border border-(--color-border) bg-(--color-bg) p-6 shadow-[0_16px_32px_rgba(80,65,45,0.07)] transition-transform duration-(--duration-base) ease-(--ease-editorial) hover:-translate-y-1"
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

              <div className="mt-3 flex items-start justify-between gap-2">
                <div className="flex gap-0.5 text-(--color-accent)">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <StarIcon key={starIndex} className="h-4 w-4" />
                  ))}
                </div>
                <span
                  aria-hidden="true"
                  className="font-(family-name:--font-display) text-3xl italic leading-none text-(--color-clay)"
                >
                  &rdquo;
                </span>
              </div>

              <p className="text-sm mt-3 leading-relaxed text-(--color-ink-muted)">{testimonial.quote}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
