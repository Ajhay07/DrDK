"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

/**
 * Site-wide GSAP ScrollSmoother. Wraps the page content (not the fixed
 * header) so wheel/touch scrolling eases instead of jumping. Skipped
 * entirely for prefers-reduced-motion, in which case the wrapper is inert
 * and native scrolling is untouched.
 */
export function SmoothScroll({ children }: { children: React.ReactNode }): React.ReactElement {
  const pathname = usePathname();
  const smootherRef = useRef<ScrollSmoother | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.2,
      smoothTouch: 0.1,
      normalizeScroll: false,
    });
    smootherRef.current = smoother;

    return () => {
      smoother.kill();
      smootherRef.current = null;
    };
  }, []);

  useEffect(() => {
    smootherRef.current?.scrollTop(0);
    ScrollTrigger.refresh();
  }, [pathname]);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content" className="flex min-h-screen flex-col pt-(--nav-height)">
        {children}
      </div>
    </div>
  );
}
