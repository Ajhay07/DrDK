"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/utils/cn";
import type { JourneyStage } from "@/config/journey";

interface JourneyExplorerProps {
  stages: JourneyStage[];
}

/**
 * A horizontal system spanning the viewport on desktop: the stage numbers
 * themselves grow and darken on selection (the interaction IS the
 * typography), and the content beneath transforms — not a small side
 * panel beside a button list. Mobile gets an independent vertical
 * accordion since a horizontal number row doesn't fit a narrow viewport.
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
      {/* Desktop: the number row IS the interaction */}
      <div className="hidden items-end justify-between gap-4 border-b border-(--color-ink-faint) pb-6 md:flex">
        {stages.map((stage, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={stage.number}
              ref={(el) => {
                triggerRefs.current[index] = el;
              }}
              type="button"
              data-cursor="Select"
              aria-expanded={isActive}
              aria-controls="journey-panel-desktop"
              onClick={() => setActiveIndex(index)}
              onKeyDown={(event) => handleKeyDown(event, index)}
              className={cn(
                "font-(--font-display) transition-all duration-(--duration-base) ease-(--ease-editorial)",
                isActive
                  ? "text-6xl text-(--color-ink) lg:text-7xl"
                  : "text-2xl text-(--color-ink-faint) hover:text-(--color-ink-muted)",
              )}
            >
              {stage.number}
            </button>
          );
        })}
      </div>

      <div id="journey-panel-desktop" className="mt-10 hidden md:block" aria-live="polite">
        <span aria-hidden="true" className="text-eyebrow text-(--color-accent)">
          Stage {activeStage.number} / {stages.length.toString().padStart(2, "0")}
        </span>
        <h3 key={activeStage.number} className="text-display mt-4 text-(--color-ink) motion-fade-in">
          {activeStage.title}
        </h3>
        <p
          key={`${activeStage.number}-desc`}
          className="text-body-lg mt-4 max-w-xl text-(--color-ink-muted) motion-fade-in"
        >
          {activeStage.description}
        </p>
      </div>

      {/* Mobile: independent vertical accordion */}
      <ol className="border-t border-(--color-ink-faint) md:hidden">
        {stages.map((stage, index) => {
          const isActive = index === activeIndex;
          return (
            <li key={stage.number} className="border-b border-(--color-ink-faint)">
              <button
                type="button"
                data-cursor="Select"
                aria-expanded={isActive}
                aria-controls={`journey-panel-${stage.number}`}
                onClick={() => setActiveIndex(index)}
                className="flex w-full items-baseline gap-5 py-5 text-left"
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    "text-index",
                    isActive ? "text-(--color-accent)" : "text-(--color-ink-faint)",
                  )}
                >
                  {stage.number}
                </span>
                <span
                  className={cn(
                    "text-h3",
                    isActive ? "text-(--color-ink)" : "text-(--color-ink-muted)",
                  )}
                >
                  {stage.title}
                </span>
              </button>

              <div
                id={`journey-panel-${stage.number}`}
                className={cn(
                  "overflow-hidden transition-[max-height,opacity] duration-(--duration-base) ease-(--ease-editorial)",
                  isActive ? "max-h-40 opacity-100" : "max-h-0 opacity-0",
                )}
              >
                <p className="text-body pb-5 pl-11 text-(--color-ink-muted)">{stage.description}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
