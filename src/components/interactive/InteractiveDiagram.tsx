"use client";

import { useState } from "react";
import { cn } from "@/lib/utils/cn";
import { ProcedureDiagram } from "@/components/ui/ProcedureDiagrams";
import type { Hotspot } from "@/config/concerns";

interface InteractiveDiagramProps {
  slug: string;
  considerations: string[];
  hotspots: Hotspot[];
}

/**
 * A continuous-line illustration inside a quiet "blueprint" frame (grid +
 * corner brackets, matching the precision-framing motif used elsewhere on
 * the site) with numbered annotation points. Hovering (desktop) or tapping
 * (touch) a point reveals the matching fact below the diagram; clicking
 * pins it open so touch devices don't depend on a hover state.
 */
export function InteractiveDiagram({
  slug,
  considerations,
  hotspots,
}: InteractiveDiagramProps): React.ReactElement {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [pinnedIndex, setPinnedIndex] = useState<number | null>(null);
  const activeIndex = pinnedIndex ?? hoverIndex;

  return (
    <div>
      <div
        className="relative mx-auto aspect-[5/6] w-full max-w-sm border border-(--color-border) bg-(--color-bg-secondary)"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, var(--color-border) 0 1px, transparent 1px 12.5%), repeating-linear-gradient(90deg, var(--color-border) 0 1px, transparent 1px 12.5%)",
          backgroundSize: "100% 100%",
        }}
      >
        <span className="absolute left-3 top-3 h-4 w-4 border-l border-t border-(--color-border-strong)" aria-hidden="true" />
        <span className="absolute right-3 top-3 h-4 w-4 border-r border-t border-(--color-border-strong)" aria-hidden="true" />
        <span className="absolute bottom-3 left-3 h-4 w-4 border-b border-l border-(--color-border-strong)" aria-hidden="true" />
        <span className="absolute bottom-3 right-3 h-4 w-4 border-r border-b border-(--color-border-strong)" aria-hidden="true" />

        <ProcedureDiagram slug={slug} className="absolute inset-0 h-full w-full text-(--color-ink)" />

        {hotspots.map((point, index) => {
          const isActive = activeIndex === index;
          return (
            <button
              key={`${point.x}-${point.y}`}
              type="button"
              aria-label={`Point 0${index + 1} of ${hotspots.length}`}
              aria-expanded={isActive}
              data-cursor="View"
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
              onFocus={() => setHoverIndex(index)}
              onBlur={() => setHoverIndex(null)}
              onClick={() => setPinnedIndex((current) => (current === index ? null : index))}
              style={{ left: `${point.x}%`, top: `${point.y}%` }}
              className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5"
            >
              <span
                aria-hidden="true"
                className={cn(
                  "block h-2 w-2 rounded-full border transition-all duration-(--duration-fast) ease-(--ease-editorial)",
                  isActive
                    ? "scale-150 border-(--color-accent) bg-(--color-accent)"
                    : "border-(--color-accent) bg-(--color-bg)",
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
