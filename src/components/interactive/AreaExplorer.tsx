"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils/cn";
import type { AreaExplorerConfig } from "@/config/area-explorer";

interface AreaExplorerProps {
  config: AreaExplorerConfig;
}

/**
 * Photographic hotspot explorer: a real photo with an SVG interaction
 * overlay (ellipse hotspots, not a hand-drawn illustration), an "Areas we
 * explore" nav list, and a floating info panel — all driven by one
 * activeId state. Reused across every procedure page's explorer; the
 * source photo and its regions come from src/config/area-explorer.ts.
 *
 * The overlay SVG's viewBox matches the photo's native pixel dimensions
 * with preserveAspectRatio="xMidYMid slice", which reproduces next/image's
 * object-fit: cover cropping exactly, so hotspot ellipses stay aligned
 * with the photo at any container size.
 */
export function AreaExplorer({ config }: AreaExplorerProps): React.ReactElement {
  const [hoverId, setHoverId] = useState<string | null>(null);
  const [pinnedId, setPinnedId] = useState<string | null>(null);
  const activeId = hoverId ?? pinnedId;
  const active = config.regions.find((region) => region.id === activeId) ?? null;
  const byId = new Map(config.regions.map((region) => [region.id, region]));

  const enter = (id: string): void => setHoverId(id);
  const leave = (): void => setHoverId(null);
  const focus = (id: string): void => setHoverId(id);
  const blur = (): void => setHoverId(null);
  const toggle = (id: string): void =>
    setPinnedId((current) => (current === id ? null : id));
  const onKeyDown = (event: React.KeyboardEvent, id: string): void => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggle(id);
    }
  };

  const { image, regions } = config;
  const activeRegion = activeId ? byId.get(activeId) : undefined;

  return (
    <div className="flex flex-col gap-10 lg:grid lg:grid-cols-12 lg:items-start lg:gap-8">
      {/* Area navigation */}
      <div className="order-3 lg:order-none lg:col-span-3">
        <span className="text-eyebrow">Areas we explore</span>
        <ul className="mt-6 border-t border-(--color-border)">
          {regions.map((region, index) => {
            const isActive = activeId === region.id;
            return (
              <li key={region.id} className="border-b border-(--color-border)">
                <button
                  type="button"
                  aria-current={isActive}
                  onMouseEnter={() => enter(region.id)}
                  onMouseLeave={leave}
                  onFocus={() => focus(region.id)}
                  onBlur={blur}
                  onClick={() => toggle(region.id)}
                  className="flex w-full items-center gap-4 py-4 text-left outline-none"
                >
                  <span
                    className={cn(
                      "text-eyebrow tabular-nums transition-colors duration-(--duration-fast) ease-(--ease-editorial)",
                      isActive ? "text-(--color-accent)" : "text-(--color-ink-faint)",
                    )}
                  >
                    0{index + 1}
                  </span>
                  <span
                    className={cn(
                      "text-body-lg flex-1 transition-colors duration-(--duration-base) ease-(--ease-editorial)",
                      isActive ? "text-(--color-ink)" : "text-(--color-ink-muted)",
                    )}
                  >
                    {region.name}
                  </span>
                  <span
                    aria-hidden="true"
                    className={cn(
                      "text-eyebrow transition-all duration-(--duration-fast) ease-(--ease-editorial)",
                      isActive ? "rotate-45 text-(--color-accent)" : "text-(--color-ink-faint)",
                    )}
                  >
                    +
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Photograph + interactive overlay */}
      <div className="relative order-1 lg:order-none lg:col-span-6">
        <div className="relative aspect-[4/5] select-none overflow-hidden border border-(--color-border)">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
            style={{ objectPosition: image.objectPosition }}
            priority={false}
          />

          <svg
            viewBox={`0 0 ${image.nativeWidth} ${image.nativeHeight}`}
            preserveAspectRatio="xMidYMid slice"
            className="absolute inset-0 h-full w-full touch-manipulation"
            role="img"
            aria-label="Interactive diagram of the pictured area. Hover or tap a region to learn more."
          >
            <defs>
              <mask id={`explorer-dim-${config.slug}`}>
                <rect x="0" y="0" width={image.nativeWidth} height={image.nativeHeight} fill="white" />
                {activeRegion
                  ? activeRegion.hotspots.map((hotspot) => (
                      <ellipse
                        key={`${hotspot.cx}-${hotspot.cy}`}
                        cx={hotspot.cx}
                        cy={hotspot.cy}
                        rx={hotspot.rx}
                        ry={hotspot.ry}
                        fill="black"
                      />
                    ))
                  : null}
              </mask>
            </defs>

            <rect
              x="0"
              y="0"
              width={image.nativeWidth}
              height={image.nativeHeight}
              fill="var(--color-ink)"
              opacity={activeId ? 0.28 : 0}
              mask={`url(#explorer-dim-${config.slug})`}
              className="pointer-events-none transition-opacity duration-(--duration-base) ease-(--ease-editorial)"
            />

            {activeRegion
              ? activeRegion.hotspots.map((hotspot) => (
                  <ellipse
                    key={`${hotspot.cx}-${hotspot.cy}-active`}
                    cx={hotspot.cx}
                    cy={hotspot.cy}
                    rx={hotspot.rx}
                    ry={hotspot.ry}
                    fill="var(--color-accent)"
                    fillOpacity="0.08"
                    stroke="var(--color-accent)"
                    strokeWidth="2.5"
                    strokeDasharray="7 7"
                    className="pointer-events-none transition-all duration-(--duration-base) ease-(--ease-editorial)"
                  />
                ))
              : null}

            {regions.map((region) => {
              const isActive = activeId === region.id;
              return region.hotspots.map((hotspot) => (
                <circle
                  key={`${region.id}-${hotspot.cx}-${hotspot.cy}-anchor`}
                  cx={hotspot.cx}
                  cy={hotspot.cy}
                  r={isActive ? 9 : 5}
                  fill={isActive ? "var(--color-accent)" : "var(--color-bg)"}
                  stroke={isActive ? "var(--color-accent)" : "var(--color-ink)"}
                  strokeWidth="2"
                  opacity={isActive ? 1 : 0.65}
                  className="pointer-events-none transition-all duration-(--duration-base) ease-(--ease-editorial)"
                />
              ));
            })}

            {regions.map((region) => {
              const isActive = activeId === region.id;
              return region.hotspots.map((hotspot, hotspotIndex) => (
                <ellipse
                  key={`${region.id}-${hotspotIndex}-hit`}
                  cx={hotspot.cx}
                  cy={hotspot.cy}
                  rx={hotspot.rx}
                  ry={hotspot.ry}
                  fill="transparent"
                  role="button"
                  tabIndex={0}
                  aria-label={region.name}
                  aria-pressed={isActive}
                  data-cursor={isActive ? "VIEW AREA" : "EXPLORE"}
                  style={{ pointerEvents: "all", WebkitTapHighlightColor: "transparent" }}
                  className="cursor-pointer touch-manipulation outline-none"
                  onMouseEnter={() => enter(region.id)}
                  onMouseLeave={leave}
                  onFocus={() => focus(region.id)}
                  onBlur={blur}
                  onClick={() => toggle(region.id)}
                  onKeyDown={(event) => onKeyDown(event, region.id)}
                />
              ));
            })}
          </svg>
        </div>

        {!activeId ? (
          <p
            aria-hidden="true"
            className="text-eyebrow pointer-events-none mt-4 text-center text-(--color-ink-faint)"
          >
            Hover or tap the photograph to explore
          </p>
        ) : null}
      </div>

      {/* Floating information panel */}
      <div className="relative order-2 lg:order-none lg:col-span-3">
        <div className="relative border border-(--color-border) bg-(--color-bg) p-6 lg:p-7">
          <span className="absolute left-2 top-2 h-3 w-3 border-l border-t border-(--color-border-strong)" aria-hidden="true" />
          <span className="absolute right-2 top-2 h-3 w-3 border-r border-t border-(--color-border-strong)" aria-hidden="true" />
          <span className="absolute bottom-2 left-2 h-3 w-3 border-b border-l border-(--color-border-strong)" aria-hidden="true" />
          <span className="absolute bottom-2 right-2 h-3 w-3 border-r border-b border-(--color-border-strong)" aria-hidden="true" />

          {active ? (
            <div key={active.id} className="motion-fade-in">
              <span className="text-eyebrow text-(--color-accent)">{active.name}</span>

              <p className="text-eyebrow mt-6 text-(--color-ink-faint)">About this area</p>
              <p className="text-body mt-2 text-(--color-ink-muted)">{active.description}</p>

              <p className="text-eyebrow mt-6 text-(--color-ink-faint)">Common procedures</p>
              <ul className="mt-2 space-y-1">
                {active.commonProcedures.map((item) => (
                  <li key={item} className="text-body text-(--color-ink-muted)">
                    {item}
                  </li>
                ))}
              </ul>

              <p className="text-eyebrow mt-6 text-(--color-ink-faint)">Key considerations</p>
              <ul className="mt-2 space-y-1">
                {active.keyConsiderations.map((item) => (
                  <li key={item} className="text-body text-(--color-ink-muted)">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div>
              <span className="text-eyebrow text-(--color-ink-faint)">Select an area</span>
              <p className="text-body mt-4 text-(--color-ink-muted)">
                Choose a region from the list or the photograph to see what a consultation
                typically considers there — common procedures and key factors, not a
                promise of any specific outcome.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
