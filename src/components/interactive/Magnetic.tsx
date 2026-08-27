"use client";

import { useEffect, useRef } from "react";

interface MagneticProps {
  children: React.ReactNode;
  strength?: number;
  className?: string;
  "data-cursor"?: string;
}

/**
 * Wraps an important interactive element (a CTA, a key nav link) with a
 * subtle magnetic pull toward the pointer. Transform-only, rAF-throttled,
 * and inert on touch/coarse pointers and prefers-reduced-motion — those
 * users just get the element with no wrapper behavior.
 *
 * Uses native addEventListener (matching CustomCursor.tsx) rather than JSX
 * onPointerMove/onPointerLeave props — verified more reliable for
 * high-frequency pointer tracking than React's synthetic pointer events.
 */
export function Magnetic({
  children,
  strength = 0.25,
  className,
  "data-cursor": dataCursor,
}: MagneticProps): React.ReactElement {
  const ref = useRef<HTMLSpanElement>(null);
  const frame = useRef<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const enabled =
      window.matchMedia("(pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!enabled) return;

    const handlePointerMove = (event: PointerEvent): void => {
      const rect = el.getBoundingClientRect();
      const relX = event.clientX - (rect.left + rect.width / 2);
      const relY = event.clientY - (rect.top + rect.height / 2);

      if (frame.current) cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        el.style.transform = `translate3d(${relX * strength}px, ${relY * strength}px, 0)`;
      });
    };

    const handlePointerLeave = (): void => {
      if (frame.current) cancelAnimationFrame(frame.current);
      el.style.transform = "translate3d(0, 0, 0)";
    };

    el.addEventListener("pointermove", handlePointerMove);
    el.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      el.removeEventListener("pointermove", handlePointerMove);
      el.removeEventListener("pointerleave", handlePointerLeave);
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, [strength]);

  return (
    <span
      ref={ref}
      data-cursor={dataCursor}
      className={className ?? "inline-block"}
      style={{ transition: "transform 300ms var(--ease-editorial)", willChange: "transform" }}
    >
      {children}
    </span>
  );
}
