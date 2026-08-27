"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils/cn";

/**
 * A single, centralized custom cursor. Visibility is gated purely by CSS
 * (`.cursor-dot`, hidden by default and shown only under
 * `(pointer: fine) and (prefers-reduced-motion: no-preference)` — see
 * globals.css) so this component always renders the same markup on server
 * and client; the effect below independently early-returns for the same
 * conditions before touching the DOM/cursor or attaching listeners, so
 * touch, keyboard, and reduced-motion users never lose the native cursor.
 *
 * Position updates happen in a rAF loop via direct style mutation (no React
 * re-render per frame); only the contextual label — set by hovering an
 * element with `data-cursor="Explore"` etc. — triggers a state update, and
 * that happens at most once per element enter/leave.
 */
export function CustomCursor(): React.ReactElement {
  const outerRef = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState<string | null>(null);

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!isFinePointer || prefersReducedMotion) return;

    document.documentElement.classList.add("has-custom-cursor");

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let frame = 0;

    const handlePointerMove = (event: PointerEvent): void => {
      x = event.clientX;
      y = event.clientY;
    };

    const render = (): void => {
      if (outerRef.current) {
        outerRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      }
      frame = requestAnimationFrame(render);
    };

    const handlePointerOver = (event: PointerEvent): void => {
      const target = (event.target as HTMLElement).closest<HTMLElement>("[data-cursor]");
      setLabel(target?.dataset.cursor ?? null);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.addEventListener("pointerover", handlePointerOver);
    frame = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerover", handlePointerOver);
      cancelAnimationFrame(frame);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, []);

  return (
    <div
      ref={outerRef}
      aria-hidden="true"
      className="cursor-dot pointer-events-none fixed left-0 top-0 z-[100]"
    >
      <div
        className={cn(
          "flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-(--color-ink) transition-transform duration-(--duration-base) ease-(--ease-editorial)",
          label ? "scale-100" : "scale-[0.12]",
        )}
      >
        <span
          className={cn(
            "text-eyebrow text-(--color-bg) transition-opacity duration-(--duration-fast) ease-(--ease-editorial)",
            label ? "opacity-100" : "opacity-0",
          )}
        >
          {label}
        </span>
      </div>
    </div>
  );
}
