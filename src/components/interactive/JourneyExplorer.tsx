"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/utils/cn";
import type { JourneyStage } from "@/config/journey";

interface JourneyExplorerProps {
  stages: JourneyStage[];
}

/**
 * Isolated interactive island for the Patient Journey section. A single
 * `activeIndex` drives two presentations of the same data: an inline
 * accordion reveal on mobile, and a prominent side panel on desktop.
 * Arrow/Home/End keys move both focus and selection; each trigger is a
 * plain button so Tab order and Enter/Space activation work natively.
 */
export function JourneyExplorer({ stages }: JourneyExplorerProps): React.ReactElement {
  const [activeIndex, setActiveIndex] = useState(0);
  const triggerRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const activeStage = stages[activeIndex];

  function handleKeyDown(event: React.KeyboardEvent<HTMLButtonElement>, index: number): void {
    let nextIndex: number | null = null;

    switch (event.key) {
      case "ArrowDown":
      case "ArrowRight":
        nextIndex = (index + 1) % stages.length;
        break;
      case "ArrowUp":
      case "ArrowLeft":
        nextIndex = (index - 1 + stages.length) % stages.length;
        break;
      case "Home":
        nextIndex = 0;
        break;
      case "End":
        nextIndex = stages.length - 1;
        break;
      default:
        return;
    }

    event.preventDefault();
    setActiveIndex(nextIndex);
    triggerRefs.current[nextIndex]?.focus();
  }

  return (
    <div>
      <div className="flex gap-2" role="presentation">
        {stages.map((stage, index) => (
          <span
            key={stage.number}
            aria-hidden="true"
            className={cn(
              "h-px flex-1 bg-(--color-border) transition-colors duration-(--duration-base) ease-(--ease-editorial)",
              index <= activeIndex && "bg-(--color-accent)",
            )}
          />
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-6">
        <ol className="border-t border-(--color-border)">
          {stages.map((stage, index) => {
            const isActive = index === activeIndex;
            return (
              <li key={stage.number} className="border-b border-(--color-border)">
                <button
                  ref={(el) => {
                    triggerRefs.current[index] = el;
                  }}
                  type="button"
                  data-cursor="Select"
                  aria-expanded={isActive}
                  aria-controls={`journey-panel-${stage.number}`}
                  onClick={() => setActiveIndex(index)}
                  onKeyDown={(event) => handleKeyDown(event, index)}
                  className="flex w-full items-baseline gap-6 py-6 text-left md:py-7"
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      "text-small tabular-nums transition-colors duration-(--duration-fast) ease-(--ease-editorial)",
                      isActive ? "text-(--color-accent)" : "text-(--color-ink-faint)",
                    )}
                  >
                    {stage.number}
                  </span>
                  <span
                    className={cn(
                      "text-h3 transition-colors duration-(--duration-fast) ease-(--ease-editorial)",
                      isActive ? "text-(--color-ink)" : "text-(--color-ink-muted)",
                    )}
                  >
                    {stage.title}
                  </span>
                </button>

                <div
                  id={`journey-panel-${stage.number}`}
                  className={cn(
                    "overflow-hidden transition-[max-height,opacity] duration-(--duration-base) ease-(--ease-editorial) md:hidden",
                    isActive ? "max-h-40 opacity-100" : "max-h-0 opacity-0",
                  )}
                >
                  <p className="text-body pr-6 pb-6 text-(--color-ink-muted)">
                    {stage.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>

      <div
        className="hidden md:col-span-5 md:col-start-8 md:flex md:flex-col md:justify-center"
        aria-live="polite"
      >
        <span aria-hidden="true" className="text-eyebrow text-(--color-accent)">
          {activeStage.number}
        </span>
        <h3 key={activeStage.number} className="text-h2 mt-4 text-(--color-ink) motion-fade-in">
          {activeStage.title}
        </h3>
        <p
          key={`${activeStage.number}-desc`}
          className="text-body-lg mt-4 max-w-md text-(--color-ink-muted) motion-fade-in"
        >
          {activeStage.description}
        </p>
      </div>
      </div>
    </div>
  );
}
