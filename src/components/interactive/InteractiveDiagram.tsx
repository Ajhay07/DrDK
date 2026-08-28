"use client";

import { useState } from "react";
import { cn } from "@/lib/utils/cn";

interface InteractiveDiagramProps {
  considerations: string[];
}

const SIZE = 240;

/**
 * Asymmetric point positions on a fine measurement grid, each with a
 * crosshair marker and a leader line running out to a numbered callout at
 * the frame edge — a technical spec-sheet layout rather than a circular
 * radar or a hand-drawn illustration (both of which the client rejected).
 * Positions are fixed (not computed from count) so each callout gets a
 * deliberate, uncluttered leader-line path; only the first four
 * considerations are plotted.
 */
const LAYOUT = [
  { point: { x: 96, y: 54 }, callout: { x: 34, y: 20 }, side: "left" as const },
  { point: { x: 176, y: 92 }, callout: { x: 218, y: 56 }, side: "right" as const },
  { point: { x: 138, y: 172 }, callout: { x: 34, y: 210 }, side: "left" as const },
  { point: { x: 200, y: 190 }, callout: { x: 218, y: 224 }, side: "right" as const },
];

export function InteractiveDiagram({
  considerations,
}: InteractiveDiagramProps): React.ReactElement {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [pinnedIndex, setPinnedIndex] = useState<number | null>(null);
  const activeIndex = pinnedIndex ?? hoverIndex;
  const items = considerations.slice(0, 4);

  return (
    <div>
      <div className="relative mx-auto aspect-square w-full max-w-sm border border-(--color-border) bg-(--color-bg-secondary)">
        <span className="absolute left-3 top-3 h-4 w-4 border-l border-t border-(--color-border-strong)" aria-hidden="true" />
        <span className="absolute right-3 top-3 h-4 w-4 border-r border-t border-(--color-border-strong)" aria-hidden="true" />
        <span className="absolute bottom-3 left-3 h-4 w-4 border-b border-l border-(--color-border-strong)" aria-hidden="true" />
        <span className="absolute bottom-3 right-3 h-4 w-4 border-r border-b border-(--color-border-strong)" aria-hidden="true" />

        <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className="absolute inset-0 h-full w-full">
          <defs>
            <pattern id="idg-grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="var(--color-border-strong)" opacity="0.5" />
            </pattern>
          </defs>
          <rect x="0" y="0" width={SIZE} height={SIZE} fill="url(#idg-grid)" />

          {items.map((item, index) => {
            const { point, callout } = LAYOUT[index];
            const isActive = activeIndex === index;
            const midX = (point.x + callout.x) / 2;
            return (
              <g key={item}>
                <path
                  d={`M ${point.x} ${point.y} L ${midX} ${point.y} L ${midX} ${callout.y} L ${callout.x} ${callout.y}`}
                  fill="none"
                  stroke="var(--color-border-strong)"
                  strokeWidth={isActive ? 1 : 0.5}
                  className="transition-all duration-(--duration-fast) ease-(--ease-editorial)"
                />
              </g>
            );
          })}
        </svg>

        {items.map((item, index) => {
          const { point } = LAYOUT[index];
          const isActive = activeIndex === index;
          return (
            <button
              key={`marker-${item}`}
              type="button"
              aria-label={`Point 0${index + 1} of ${items.length}`}
              aria-expanded={isActive}
              data-cursor="View"
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
              onFocus={() => setHoverIndex(index)}
              onBlur={() => setHoverIndex(null)}
              onClick={() => setPinnedIndex((current) => (current === index ? null : index))}
              style={{ left: `${(point.x / SIZE) * 100}%`, top: `${(point.y / SIZE) * 100}%` }}
              className="absolute flex h-6 w-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center"
            >
              <span
                aria-hidden="true"
                className={cn(
                  "relative block h-3 w-3 transition-transform duration-(--duration-fast) ease-(--ease-editorial)",
                  isActive && "scale-125",
                )}
              >
                <span
                  className={cn(
                    "absolute left-1/2 top-0 h-full w-px -translate-x-1/2",
                    isActive ? "bg-(--color-accent)" : "bg-(--color-border-strong)",
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 top-1/2 h-px w-full -translate-y-1/2",
                    isActive ? "bg-(--color-accent)" : "bg-(--color-border-strong)",
                  )}
                />
              </span>
            </button>
          );
        })}

        {items.map((item, index) => {
          const { callout, side } = LAYOUT[index];
          const isActive = activeIndex === index;
          return (
            <span
              key={`callout-${item}`}
              aria-hidden="true"
              style={{
                left: `${(callout.x / SIZE) * 100}%`,
                top: `${(callout.y / SIZE) * 100}%`,
              }}
              className={cn(
                "text-eyebrow absolute -translate-y-1/2 tabular-nums transition-colors duration-(--duration-fast) ease-(--ease-editorial)",
                side === "left" ? "-translate-x-full pr-2 text-right" : "pl-2",
                isActive ? "text-(--color-accent)" : "text-(--color-ink-faint)",
              )}
            >
              0{index + 1}
            </span>
          );
        })}
      </div>

      <div className="mt-10 min-h-24 border-t border-(--color-border) pt-6 text-center">
        {activeIndex !== null ? (
          <p className="text-body-lg mx-auto max-w-md text-(--color-ink)">
            <span className="text-eyebrow mr-2 text-(--color-accent)">
              0{activeIndex + 1}
            </span>
            {items[activeIndex]}
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
