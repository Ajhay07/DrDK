"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

/**
 * The hero's single interactive concept: the small inline portrait tilts
 * and drifts a few pixels toward the pointer as it moves across the page,
 * as if it were a physical print sitting on the page rather than a static
 * image. Transform-only, rAF-throttled, and a no-op on touch/coarse
 * pointers or prefers-reduced-motion (the image just sits still).
 */
export function HeroPortrait(): React.ReactElement {
  const wrapRef = useRef<HTMLSpanElement>(null);
  const frame = useRef<number | null>(null);

  useEffect(() => {
    const enabled =
      window.matchMedia("(pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!enabled) return;

    const handlePointerMove = (event: PointerEvent): void => {
      const el = wrapRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const dx = (event.clientX - (rect.left + rect.width / 2)) / window.innerWidth;
      const dy = (event.clientY - (rect.top + rect.height / 2)) / window.innerHeight;

      if (frame.current) cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        if (el) {
          el.style.transform = `translate3d(${dx * 12}px, ${dy * 12}px, 0) rotate(${dx * 5}deg)`;
        }
      });
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, []);

  return (
    <span
      ref={wrapRef}
      data-cursor="View"
      className="relative block h-28 w-28 shrink-0 overflow-hidden bg-(--color-bg-secondary) sm:h-32 sm:w-32 lg:h-36 lg:w-36"
      style={{ willChange: "transform" }}
    >
      <Image
        src="/images/doctor/dr-dinesh-portrait.png"
        alt="Portrait of Dr. Dinesh Kumar, plastic surgeon"
        fill
        priority
        sizes="9rem"
        className="object-cover object-center"
      />
    </span>
  );
}
