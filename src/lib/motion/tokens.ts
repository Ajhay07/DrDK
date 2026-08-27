/**
 * Shared motion tokens. Mirrors the CSS custom properties defined in
 * globals.css (--duration-*, --ease-editorial) for use in JS-driven
 * animation (e.g. a future Framer Motion adoption for interactive
 * experiences). Keeping both in one place prevents timing drift between
 * CSS transitions and JS animations. See DESIGN_SYSTEM.md "Motion System".
 */
export const duration = {
  fast: 0.15,
  base: 0.3,
  slow: 0.6,
} as const;

export const easeEditorial = [0.22, 1, 0.36, 1] as const;
