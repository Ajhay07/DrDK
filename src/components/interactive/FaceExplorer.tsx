"use client";

import { useState } from "react";
import type { FaceRegion } from "@/config/face-explorer";

interface FaceExplorerProps {
  regions: FaceRegion[];
}

/**
 * Minimal single-weight line contour of a face, tuned to the classic
 * facial-thirds proportion guide (hairline / brow / nose-base / chin) so
 * the faint guide lines read as intentional, not decorative filler.
 * viewBox is 400x560; all region geometry below is expressed in the same
 * coordinate space.
 */
const SILHOUETTE_D =
  "M200,60 C290,60 338,140 338,205 C338,270 320,335 300,380 C285,412 262,445 200,468 C138,445 115,412 100,380 C80,335 62,270 62,205 C62,140 110,60 200,60 Z";

const NECK_LEFT_D = "M158,455 C150,485 138,515 108,548";
const NECK_RIGHT_D = "M242,455 C250,485 262,515 292,548";
const MOUTH_D = "M168,392 C182,400 218,400 232,392";

/** Decorative (shown) geometry per region — dims/emphasizes with hover state. */
const DECORATION: Record<string, { d: string; fill?: string }[]> = {
  forehead: [],
  brows: [
    { d: "M118,196 C133,183 165,183 180,195" },
    { d: "M220,195 C235,183 267,183 282,196" },
  ],
  eyes: [
    { d: "M116,224 C129,211 167,211 180,224 C167,235 129,235 116,224 Z" },
    { d: "M220,224 C233,211 271,211 284,224 C271,235 233,235 220,224 Z" },
    { d: "M148,224 m-2.5,0 a2.5,2.5 0 1,0 5,0 a2.5,2.5 0 1,0 -5,0", fill: "currentColor" },
    { d: "M252,224 m-2.5,0 a2.5,2.5 0 1,0 5,0 a2.5,2.5 0 1,0 -5,0", fill: "currentColor" },
  ],
  nose: [
    { d: "M199,196 L196,298" },
    { d: "M186,298 C180,308 180,316 189,321" },
    { d: "M212,298 C218,308 218,316 209,321" },
    { d: "M189,321 C195,325 205,325 209,321" },
  ],
  cheeks: [
    { d: "M108,252 C98,277 98,302 107,326" },
    { d: "M292,252 C302,277 302,302 293,326" },
  ],
  jawline: [
    {
      d: "M100,380 C115,412 138,445 200,468 C262,445 285,412 300,380",
    },
  ],
  chin: [{ d: "M172,452 C182,462 218,462 228,452" }],
  neck: [{ d: NECK_LEFT_D }, { d: NECK_RIGHT_D }],
};

/** Invisible hit-areas — deliberately generous for comfortable hover/tap targets. */
const HOTSPOTS: Record<string, string> = {
  forehead: "M108,72 C108,72 292,72 292,72 C300,110 300,150 292,172 L108,172 C100,150 100,110 108,72 Z",
  brows: "M100,180 h200 v28 h-200 Z",
  eyes: "M100,208 h200 v40 h-200 Z",
  nose: "M176,178 h48 v148 h-48 Z",
  cheeks: "M84,246 h55 v88 h-55 Z M261,246 h55 v88 h-55 Z",
  jawline:
    "M92,375 C108,412 132,448 200,472 C268,448 292,412 308,375 L286,375 C266,406 244,432 200,450 C156,432 134,406 114,375 Z",
  chin: "M200,452 m-38,0 a38,24 0 1,0 76,0 a38,24 0 1,0 -76,0",
  neck: "M132,468 L268,468 L294,552 L106,552 Z",
};

/** Draw order matters: broad regions first, fine features last so they win overlapping hit-tests. */
const HOTSPOT_ORDER = ["forehead", "cheeks", "jawline", "chin", "neck", "nose", "eyes", "brows"];

export function FaceExplorer({ regions }: FaceExplorerProps): React.ReactElement {
  const [hoverId, setHoverId] = useState<string | null>(null);
  const [pinnedId, setPinnedId] = useState<string | null>(null);
  const activeId = hoverId ?? pinnedId;
  const active = regions.find((region) => region.id === activeId) ?? null;
  const anyActive = activeId !== null;

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
    <div className="grid grid-cols-1 gap-14 md:grid-cols-12 md:items-center md:gap-12">
      <div className="relative select-none md:col-span-7">
        <svg
          viewBox="0 0 400 560"
          role="img"
          aria-label="Interactive diagram of facial regions. Hover or tap a region to learn more."
          className="mx-auto h-auto w-full max-w-sm touch-manipulation text-(--color-ink) md:max-w-md"
        >
          <g aria-hidden="true" stroke="var(--color-border-strong)" strokeWidth="0.5" strokeDasharray="1 5">
            <line x1="30" y1="196" x2="370" y2="196" />
            <line x1="30" y1="298" x2="370" y2="298" />
            <line x1="30" y1="392" x2="370" y2="392" />
          </g>

          <path
            d={SILHOUETTE_D}
            fill="none"
            stroke="currentColor"
            strokeWidth={anyActive ? 0.75 : 1}
            opacity={anyActive ? 0.3 : 0.85}
            className="transition-all duration-(--duration-base) ease-(--ease-editorial)"
          />
          <path
            d={MOUTH_D}
            fill="none"
            stroke="currentColor"
            strokeWidth="0.75"
            opacity={anyActive ? 0.2 : 0.55}
            aria-hidden="true"
            className="transition-all duration-(--duration-base) ease-(--ease-editorial)"
          />

          {regions.map((region) => {
            const isActive = activeId === region.id;
            const shapes = DECORATION[region.id] ?? [];
            return (
              <g
                key={`${region.id}-decoration`}
                aria-hidden="true"
                opacity={!anyActive ? 0.85 : isActive ? 1 : 0.18}
                className="transition-opacity duration-(--duration-base) ease-(--ease-editorial)"
              >
                {shapes.map((shape) => (
                  <path
                    key={shape.d}
                    d={shape.d}
                    fill={shape.fill ?? "none"}
                    stroke={isActive ? "var(--color-accent)" : "currentColor"}
                    strokeWidth={isActive ? 1.5 : 1}
                    className="transition-all duration-(--duration-base) ease-(--ease-editorial)"
                  />
                ))}
              </g>
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
                data-cursor={isActive ? "VIEW" : "EXPLORE"}
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

        {!anyActive ? (
          <p
            aria-hidden="true"
            className="text-eyebrow pointer-events-none absolute inset-x-0 bottom-0 text-center text-(--color-ink-faint)"
          >
            Hover or tap to explore
          </p>
        ) : null}
      </div>

      <div className="border-t border-(--color-border) pt-8 md:col-span-5 md:border-l md:border-t-0 md:pl-10 md:pt-0">
        {active ? (
          <div key={active.id} className="motion-fade-in">
            <span className="text-eyebrow text-(--color-accent)">{active.name}</span>
            <p className="text-h3 mt-4 text-(--color-ink)">{active.shortDescription}</p>
            <p className="text-body mt-4 text-(--color-ink-muted)">{active.extendedDescription}</p>
          </div>
        ) : (
          <div>
            <span className="text-eyebrow text-(--color-ink-faint)">Explore the face</span>
            <p className="text-body-lg mt-4 text-(--color-ink-muted)">
              Hover or tap a region — forehead, brows, eyes, nose, cheeks, jawline, chin or
              neck — to learn what a consultation typically considers there.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
