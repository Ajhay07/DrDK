"use client";

import { useState } from "react";
import { cn } from "@/lib/utils/cn";

interface InteractiveDiagramProps {
  considerations: string[];
}

/**
 * A stacked numbered list, editorial in style rather than illustrative.
 * Hovering/focusing a row highlights it — replaced an abstract geometric
 * diagram that didn't read as premium.
 */
export function InteractiveDiagram({
  considerations,
}: InteractiveDiagramProps): React.ReactElement {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="border-y border-(--color-border)">
      {considerations.map((item, index) => {
        const isActive = activeIndex === index;
        return (
          <div
            key={item}
            tabIndex={0}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
            onFocus={() => setActiveIndex(index)}
            onBlur={() => setActiveIndex(null)}
            className="group flex items-baseline gap-5 border-b border-(--color-border) py-5 outline-none last:border-b-0"
          >
            <span
              className={cn(
                "text-eyebrow shrink-0 tabular-nums transition-colors duration-(--duration-fast) ease-(--ease-editorial)",
                isActive ? "text-(--color-accent)" : "text-(--color-ink-faint)",
              )}
            >
              0{index + 1}
            </span>
            <span
              className={cn(
                "text-body-lg transition-colors duration-(--duration-base) ease-(--ease-editorial)",
                isActive ? "text-(--color-ink)" : "text-(--color-ink-muted)",
              )}
            >
              {item}
            </span>
          </div>
        );
      })}
    </div>
  );
}
