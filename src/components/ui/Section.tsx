import { cn } from "@/lib/utils/cn";

interface SectionProps {
  children: React.ReactNode;
  background?: "bg" | "bg-secondary" | "surface";
  spacing?: "md" | "lg" | "xl";
  className?: string;
  id?: string;
}

const backgroundClass: Record<NonNullable<SectionProps["background"]>, string> = {
  bg: "bg-(--color-bg)",
  "bg-secondary": "bg-(--color-bg-secondary)",
  surface: "bg-(--color-surface)",
};

const spacingClass: Record<NonNullable<SectionProps["spacing"]>, string> = {
  md: "py-16 md:py-24",
  lg: "py-20 md:py-32",
  xl: "py-24 md:py-40",
};

/**
 * Vertical rhythm wrapper for page sections. Controls background and
 * section-level spacing only — layout/grid is left to the section's own
 * content so sections can stay compositional rather than templated.
 */
export function Section({
  children,
  background = "bg",
  spacing = "lg",
  className,
  id,
}: SectionProps): React.ReactElement {
  return (
    <section
      id={id}
      className={cn(backgroundClass[background], spacingClass[spacing], className)}
    >
      {children}
    </section>
  );
}
