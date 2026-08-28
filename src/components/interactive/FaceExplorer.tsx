"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils/cn";
import type { FaceRegion } from "@/config/face-explorer";

interface FaceExplorerProps {
  regions: FaceRegion[];
}

/**
 * Hotspot geometry expressed in the source photograph's native pixel space
 * (2400x1600 — public/images/procedures/face-explorer.jpg). The overlay SVG
 * uses the same viewBox with `preserveAspectRatio="xMidYMid slice"`, which
 * reproduces the <Image>'s `object-fit: cover` cropping exactly, so these
 * coordinates stay aligned with the photo at any container size.
 *
 * Photo: Fleur Kaan via Unsplash (Unsplash License — free to use).
 */
const IMAGE_W = 2400;
const IMAGE_H = 1600;

const HOTSPOTS: Record<string, string> = {
  forehead: "M912,220 C1050,175 1350,175 1488,220 L1488,500 L912,500 Z",
  eyes: "M900,460 C1050,420 1350,420 1500,460 L1500,660 C1350,700 1050,700 900,660 Z",
  nose: "M1120,470 C1170,470 1230,470 1280,470 L1330,800 C1240,840 1160,840 1070,800 Z",
  cheeks: "M648,560 C760,540 900,560 990,620 L950,980 C820,980 700,920 630,820 Z M1752,560 C1640,540 1500,560 1410,620 L1450,980 C1580,980 1700,920 1770,820 Z",
  jawline: "M760,850 C900,1020 1100,1150 1200,1180 C1300,1150 1500,1020 1640,850 L1560,780 C1460,900 1330,980 1200,1000 C1070,980 940,900 840,780 Z",
  lips: "M1020,820 C1120,780 1280,780 1380,820 C1360,900 1280,950 1200,950 C1120,950 1040,900 1020,820 Z",
};

/** Anchor point (native px) for each region's rest-state marker dot. */
const ANCHORS: Record<string, { x: number; y: number }> = {
  forehead: { x: 1200, y: 320 },
  eyes: { x: 1200, y: 540 },
  nose: { x: 1200, y: 640 },
  cheeks: { x: 800, y: 720 },
  jawline: { x: 1200, y: 1080 },
  lips: { x: 1200, y: 870 },
};

/** Draw order: broad regions first, fine/central features last so they win overlapping hit-tests. */
const HOTSPOT_ORDER = ["forehead", "cheeks", "jawline", "nose", "eyes", "lips"];

export function FaceExplorer({ regions }: FaceExplorerProps): React.ReactElement {
  const [hoverId, setHoverId] = useState<string | null>(null);
  const [pinnedId, setPinnedId] = useState<string | null>(null);
  const activeId = hoverId ?? pinnedId;
  const active = regions.find((region) => region.id === activeId) ?? null;
  const byId = new Map(regions.map((region) => [region.id, region]));

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
            src="/images/procedures/face-explorer.jpg"
            alt="Close-up portrait of a face, used to illustrate areas commonly discussed during a facial consultation"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
            style={{ objectPosition: "50% 20%" }}
            priority={false}
          />

          <svg
            viewBox={`0 0 ${IMAGE_W} ${IMAGE_H}`}
            preserveAspectRatio="xMidYMid slice"
            className="absolute inset-0 h-full w-full touch-manipulation"
            role="img"
            aria-label="Interactive diagram of facial regions. Hover or tap a region to learn more."
          >
            <defs>
              <mask id="face-explorer-dim">
                <rect x="0" y="0" width={IMAGE_W} height={IMAGE_H} fill="white" />
                {activeId ? <path d={HOTSPOTS[activeId]} fill="black" /> : null}
              </mask>
            </defs>

            <rect
              x="0"
              y="0"
              width={IMAGE_W}
              height={IMAGE_H}
              fill="var(--color-ink)"
              opacity={activeId ? 0.28 : 0}
              mask="url(#face-explorer-dim)"
              className="pointer-events-none transition-opacity duration-(--duration-base) ease-(--ease-editorial)"
            />

            {activeId ? (
              <path
                d={HOTSPOTS[activeId]}
                fill="var(--color-accent)"
                fillOpacity="0.08"
                stroke="var(--color-accent)"
                strokeWidth="2.5"
                strokeDasharray="7 7"
                className="pointer-events-none transition-all duration-(--duration-base) ease-(--ease-editorial)"
              />
            ) : null}

            {regions.map((region) => {
              const isActive = activeId === region.id;
              const anchor = ANCHORS[region.id];
              return (
                <circle
                  key={`${region.id}-anchor`}
                  cx={anchor.x}
                  cy={anchor.y}
                  r={isActive ? 9 : 5}
                  fill={isActive ? "var(--color-accent)" : "var(--color-bg)"}
                  stroke={isActive ? "var(--color-accent)" : "var(--color-ink)"}
                  strokeWidth="2"
                  opacity={isActive ? 1 : 0.65}
                  className="pointer-events-none transition-all duration-(--duration-base) ease-(--ease-editorial)"
                />
              );
            })}

            {HOTSPOT_ORDER.map((id) => {
              const region = byId.get(id);
              if (!region) return null;
              const isActive = activeId === id;
              return (
                <path
                  key={`${id}-hit`}
                  d={HOTSPOTS[id]}
                  fill="transparent"
                  role="button"
                  tabIndex={0}
                  aria-label={region.name}
                  aria-pressed={isActive}
                  data-cursor={isActive ? "VIEW AREA" : "EXPLORE"}
                  style={{ pointerEvents: "all", WebkitTapHighlightColor: "transparent" }}
                  className="cursor-pointer touch-manipulation outline-none"
                  onMouseEnter={() => enter(id)}
                  onMouseLeave={leave}
                  onFocus={() => focus(id)}
                  onBlur={blur}
                  onClick={() => toggle(id)}
                  onKeyDown={(event) => onKeyDown(event, id)}
                />
              );
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
