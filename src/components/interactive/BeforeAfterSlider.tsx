"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils/cn";

interface BeforeAfterSliderProps {
  label?: string;
  beforeSrc?: string;
  afterSrc?: string;
  beforeAlt?: string;
  afterAlt?: string;
  aspect?: "portrait" | "square" | "wide";
  className?: string;
}

const aspectClass: Record<NonNullable<BeforeAfterSliderProps["aspect"]>, string> = {
  portrait: "aspect-[4/5]",
  square: "aspect-square",
  wide: "aspect-[16/9]",
};

const STEP = 3;

/**
 * Drag-to-reveal before/after comparison. Falls back to a labelled
 * placeholder panel per side (matching MediaPlaceholder's treatment) when
 * no imageSrc is supplied, so the interaction itself can ship ahead of
 * real case photography — see MediaPlaceholder.tsx for the same pattern.
 */
export function BeforeAfterSlider({
  label,
  beforeSrc,
  afterSrc,
  beforeAlt = "Before",
  afterAlt = "After",
  aspect = "portrait",
  className,
}: BeforeAfterSliderProps): React.ReactElement {
  const containerRef = useRef<HTMLDivElement>(null);
  const [percent, setPercent] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPercent(Math.min(100, Math.max(0, next)));
  }, []);

  useEffect(() => {
    if (!isDragging) return;

    const handlePointerMove = (event: PointerEvent): void => {
      updateFromClientX(event.clientX);
    };
    const handlePointerUp = (): void => setIsDragging(false);

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, [isDragging, updateFromClientX]);

  const onTrackPointerDown = (event: React.PointerEvent<HTMLDivElement>): void => {
    updateFromClientX(event.clientX);
    setIsDragging(true);
  };

  const onHandleKeyDown = (event: React.KeyboardEvent): void => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      setPercent((current) => Math.max(0, current - STEP));
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      setPercent((current) => Math.min(100, current + STEP));
    } else if (event.key === "Home") {
      event.preventDefault();
      setPercent(0);
    } else if (event.key === "End") {
      event.preventDefault();
      setPercent(100);
    }
  };

  return (
    <div
      ref={containerRef}
      onPointerDown={onTrackPointerDown}
      data-cursor="DRAG"
      className={cn(
        "relative touch-none select-none overflow-hidden border border-(--color-border)",
        aspectClass[aspect],
        className,
      )}
    >
      {/* After — full layer underneath */}
      <div className="absolute inset-0">
        {afterSrc ? (
          <Image src={afterSrc} alt={afterAlt} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
        ) : (
          <PlaceholderPanel />
        )}
      </div>

      {/* Before — clipped to the slider position */}
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - percent}% 0 0)` }}>
        {beforeSrc ? (
          <Image src={beforeSrc} alt={beforeAlt} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
        ) : (
          <PlaceholderPanel />
        )}
      </div>

      <span className="text-eyebrow pointer-events-none absolute left-4 top-4 text-(--color-ink-faint)" aria-hidden="true">
        Before
      </span>
      <span className="text-eyebrow pointer-events-none absolute right-4 top-4 text-(--color-ink-faint)" aria-hidden="true">
        After
      </span>
      {label ? (
        <span className="text-eyebrow pointer-events-none absolute bottom-4 left-4 text-(--color-ink-faint)" aria-hidden="true">
          {label}
        </span>
      ) : null}

      {/* Divider + drag handle */}
      <div
        className={cn(
          "pointer-events-none absolute inset-y-0 w-px bg-(--color-bg)",
          !isDragging && "transition-[left] duration-(--duration-fast) ease-(--ease-editorial)",
        )}
        style={{ left: `${percent}%` }}
      >
        <div
          role="slider"
          tabIndex={0}
          aria-label={label ? `Before and after comparison slider for ${label}` : "Before and after comparison slider"}
          aria-valuenow={Math.round(percent)}
          aria-valuemin={0}
          aria-valuemax={100}
          onKeyDown={onHandleKeyDown}
          onPointerDown={(event) => {
            event.stopPropagation();
            setIsDragging(true);
          }}
          className="pointer-events-auto absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full border border-(--color-bg) bg-(--color-ink) outline-none focus-visible:ring-2 focus-visible:ring-(--color-accent) focus-visible:ring-offset-2"
        >
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
            <path d="M4 1L1 5L4 9" stroke="var(--color-bg)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10 1L13 5L10 9" stroke="var(--color-bg)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function PlaceholderPanel(): React.ReactElement {
  return (
    <div className="relative h-full w-full bg-(--color-bg-secondary)">
      <span className="absolute left-4 top-4 h-5 w-5 border-l border-t border-(--color-border-strong)" aria-hidden="true" />
      <span className="absolute right-4 top-4 h-5 w-5 border-r border-t border-(--color-border-strong)" aria-hidden="true" />
      <span className="absolute bottom-4 left-4 h-5 w-5 border-b border-l border-(--color-border-strong)" aria-hidden="true" />
      <span className="absolute bottom-4 right-4 h-5 w-5 border-r border-b border-(--color-border-strong)" aria-hidden="true" />
    </div>
  );
}
