"use client";

import { useState } from "react";
import { cn } from "@/lib/utils/cn";

interface InteractiveDiagramProps {
  considerations: string[];
}

const SIZE = 200;
const CENTER = SIZE / 2;
const POINT_RADIUS = 76;

/**
 * An abstract precision diagram — a core mark with thin lines radiating to
 * evenly spaced, numbered points — rather than a literal anatomical
 * illustration. Deliberately geometric (computed, not hand-drawn) so it
 * reads as a precise instrument diagram, not clip art, and needs no
 * per-procedure custom artwork. Hovering (desktop) or tapping (touch) a
 * point reveals the matching fact below; clicking pins it open.
 */
export function InteractiveDiagram({
  considerations,
}: InteractiveDiagramProps): React.ReactElement {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [pinnedIndex, setPinnedIndex] = useState<number | null>(null);
  const activeIndex = pinnedIndex ?? hoverIndex;

  const points = considerations.map((_, index) => {
    const angle = (-90 + index * (360 / considerations.length)) * (Math.PI / 180);
    return {
      x: CENTER + POINT_RADIUS * Math.cos(angle),
      y: CENTER + POINT_RADIUS * Math.sin(angle),
    };
  });

  return (
    <div>
      <div className="relative mx-auto aspect-square w-full max-w-sm border border-(--color-border) bg-(--color-bg-secondary)">
        <span className="absolute left-3 top-3 h-4 w-4 border-l border-t border-(--color-border-strong)" aria-hidden="true" />
        <span className="absolute right-3 top-3 h-4 w-4 border-r border-t border-(--color-border-strong)" aria-hidden="true" />
        <span className="absolute bottom-3 left-3 h-4 w-4 border-b border-l border-(--color-border-strong)" aria-hidden="true" />
        <span className="absolute bottom-3 right-3 h-4 w-4 border-r border-b border-(--color-border-strong)" aria-hidden="true" />

        <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className="absolute inset-0 h-full w-full" aria-hidden="true">
          <circle
            cx={CENTER}
            cy={CENTER}
            r={POINT_RADIUS}
            fill="none"
            stroke="var(--color-border-strong)"
            strokeWidth="0.5"
          />
          {points.map((point, index) => (
            <line
              key={`line-${point.x}-${point.y}`}
              x1={CENTER}
              y1={CENTER}
              x2={point.x}
              y2={point.y}
              stroke="var(--color-border-strong)"
              strokeWidth={activeIndex === index ? 1 : 0.5}
              className="transition-all duration-(--duration-fast) ease-(--ease-editorial)"
            />
          ))}
          <circle cx={CENTER} cy={CENTER} r="3" fill="var(--color-accent)" />
        </svg>

        {considerations.map((_, index) => {
          const point = points[index];
          const isActive = activeIndex === index;
          return (
            <button
              key={`point-${point.x}-${point.y}`}
              type="button"
              aria-label={`Point 0${index + 1} of ${considerations.length}`}
              aria-expanded={isActive}
              data-cursor="View"
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
              onFocus={() => setHoverIndex(index)}
              onBlur={() => setHoverIndex(null)}
              onClick={() => setPinnedIndex((current) => (current === index ? null : index))}
              style={{ left: `${(point.x / SIZE) * 100}%`, top: `${(point.y / SIZE) * 100}%` }}
              className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5"
            >
              <span
                aria-hidden="true"
                className={cn(
                  "block h-2.5 w-2.5 rounded-full border transition-all duration-(--duration-fast) ease-(--ease-editorial)",
                  isActive
                    ? "scale-150 border-(--color-accent) bg-(--color-accent)"
                    : "border-(--color-accent) bg-(--color-bg-secondary)",
                )}
              />
              <span
                aria-hidden="true"
                className={cn(
                  "text-small tabular-nums transition-colors duration-(--duration-fast) ease-(--ease-editorial)",
                  isActive ? "text-(--color-accent)" : "text-(--color-ink-faint)",
                )}
              >
                0{index + 1}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-10 min-h-24 border-t border-(--color-border) pt-6 text-center">
        {activeIndex !== null ? (
          <p className="text-body-lg mx-auto max-w-md text-(--color-ink)">
            <span className="text-eyebrow mr-2 text-(--color-accent)">
              0{activeIndex + 1}
            </span>
            {considerations[activeIndex]}
          </p>
        ) : (
          <p className="text-body text-(--color-ink-faint)">
            Hover or tap a point on the diagram to learn more.
          </p>
        )}
      </div>
    </div>
  );
}
