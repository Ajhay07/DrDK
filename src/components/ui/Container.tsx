import { cn } from "@/lib/utils/cn";

interface ContainerProps {
  children: React.ReactNode;
  width?: "content" | "wide" | "full";
  className?: string;
  as?: "div" | "section" | "header" | "footer" | "article";
}

/**
 * Horizontal content container. "content" is the standard editorial
 * reading width, "wide" allows large photography/asymmetric layouts,
 * "full" removes the max-width entirely for full-bleed sections.
 */
export function Container({
  children,
  width = "content",
  className,
  as: Tag = "div",
}: ContainerProps): React.ReactElement {
  return (
    <Tag
      className={cn(
        "mx-auto w-full px-[var(--gutter)]",
        width === "content" && "max-w-[var(--container-content)]",
        width === "wide" && "max-w-[var(--container-wide)]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
