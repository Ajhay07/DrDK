type ClassValue = string | number | false | null | undefined;

/**
 * Joins class names, dropping falsy values. Intentionally not a full
 * clsx/tailwind-merge replacement — see PROJECT_RULES.md "Dependency
 * Discipline": this covers every current use case without a dependency.
 */
export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}
