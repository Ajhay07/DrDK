"use client";

import { useRef } from "react";
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

function ArrowIcon({ direction, className }: { direction: "left" | "right"; className?: string }): React.ReactElement {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
      style={{ transform: direction === "left" ? "rotate(180deg)" : undefined }}
    >
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * DEMO placeholder testimonials — illustrative only, not real patients.
 * A horizontally scrolling, snap-aligned carousel (native scroll +
 * scroll-snap, nudged by the arrow buttons) rather than a static grid,
 * so all reviews stay reachable without growing the page height.
 */
export function Testimonials(): React.ReactElement {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: "left" | "right"): void => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-card]");
    const amount = (card?.offsetWidth ?? 320) + 24;
    track.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section className="bg-(--color-surface) overflow-hidden">
      <Container width="wide" className="pt-16 pb-8 md:pt-24 md:pb-8">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <div>
            <span className="text-eyebrow">05 &mdash; Patient Voices</span>
            <h2 className="text-display mt-6 max-w-2xl text-(--color-ink)">
              What patients say.
            </h2>
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scrollByCard("left")}
              aria-label="Previous stories"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-(--color-border-strong) text-(--color-ink) transition-colors duration-(--duration-fast) ease-(--ease-editorial) hover:border-(--color-accent) hover:text-(--color-accent)"
            >
              <ArrowIcon direction="left" className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard("right")}
              aria-label="Next stories"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-(--color-border-strong) text-(--color-ink) transition-colors duration-(--duration-fast) ease-(--ease-editorial) hover:border-(--color-accent) hover:text-(--color-accent)"
            >
              <ArrowIcon direction="right" className="h-4 w-4" />
            </button>
          </div>
        </div>
      </Container>

      <div
        ref={trackRef}
        className="scrollbar-none flex snap-x snap-mandatory gap-6 overflow-x-auto py-4 pb-16 md:pb-24"
        style={{ paddingInline: "var(--gutter)", scrollPadding: "var(--gutter)" }}
      >
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.name}
            data-card
            className="flex w-[20rem] shrink-0 snap-start flex-col rounded-(--radius-lg) border border-(--color-border) bg-(--color-bg) p-6 shadow-[0_16px_32px_rgba(80,65,45,0.07)] transition-transform duration-(--duration-base) ease-(--ease-editorial) hover:-translate-y-1 sm:w-[22rem]"
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
    </section>
  );
}
