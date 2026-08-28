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
 * A line-art diagram with hoverable/tappable points: hovering (desktop) or
 * tapping (touch) a point reveals the matching consideration below the
 * diagram. Click also "pins" a point so it stays open on touch devices
 * without a hover state. Keyboard-focusable and announced via
 * aria-expanded, since these are the only source of this information.
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
      <div className="relative mx-auto aspect-square w-full max-w-sm">
        <ProcedureDiagram slug={slug} className="h-full w-full text-(--color-ink-faint)" />

        {hotspots.map((point, index) => {
          const isActive = activeIndex === index;
          return (
            <button
              key={`${point.x}-${point.y}`}
              type="button"
              aria-label={`Point ${index + 1} of ${hotspots.length}`}
              aria-expanded={isActive}
              data-cursor="View"
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
              onFocus={() => setHoverIndex(index)}
              onBlur={() => setHoverIndex(null)}
              onClick={() => setPinnedIndex((current) => (current === index ? null : index))}
              style={{ left: `${point.x}%`, top: `${point.y}%` }}
              className={cn(
                "absolute flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center",
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  "block h-2.5 w-2.5 rounded-full border border-(--color-accent) transition-all duration-(--duration-fast) ease-(--ease-editorial)",
                  isActive ? "scale-150 bg-(--color-accent)" : "bg-(--color-bg)",
                )}
              />
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
