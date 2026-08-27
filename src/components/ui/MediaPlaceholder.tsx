import Image from "next/image";
import { cn } from "@/lib/utils/cn";

interface MediaPlaceholderProps {
  aspect?: "portrait" | "square" | "wide";
  label?: string;
  className?: string;
  imageSrc?: string;
  alt?: string;
  priority?: boolean;
  sizes?: string;
}

const aspectClass: Record<NonNullable<MediaPlaceholderProps["aspect"]>, string> = {
  portrait: "aspect-[4/5]",
  square: "aspect-square",
  wide: "aspect-[16/9]",
};

/**
 * Art-directed stand-in for photography that doesn't exist yet. Isolated so
 * that dropping in a real asset later is a one-line change: pass `imageSrc`
 * and this renders through next/image inside the same sized frame instead
 * of the placeholder treatment — no layout or call-site changes required.
 */
export function MediaPlaceholder({
  aspect = "portrait",
  label = "Photography forthcoming",
  className,
  imageSrc,
  alt = "",
  priority = false,
  sizes = "(min-width: 1024px) 40vw, 100vw",
}: MediaPlaceholderProps): React.ReactElement {
  if (imageSrc) {
    return (
      <div className={cn("relative overflow-hidden", aspectClass[aspect], className)}>
        <Image
          src={imageSrc}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover object-top"
        />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={alt || label}
      className={cn(
        "relative overflow-hidden bg-(--color-bg-secondary) border border-(--color-border)",
        aspectClass[aspect],
        className,
      )}
    >
      {/* Corner crop marks — a quiet nod to precision framing rather than a gray box. */}
      <span className="absolute left-4 top-4 h-5 w-5 border-l border-t border-(--color-border-strong)" aria-hidden="true" />
      <span className="absolute right-4 top-4 h-5 w-5 border-r border-t border-(--color-border-strong)" aria-hidden="true" />
      <span className="absolute bottom-4 left-4 h-5 w-5 border-b border-l border-(--color-border-strong)" aria-hidden="true" />
      <span className="absolute bottom-4 right-4 h-5 w-5 border-r border-b border-(--color-border-strong)" aria-hidden="true" />

      <span className="absolute bottom-6 left-6 text-eyebrow text-(--color-ink-faint)" aria-hidden="true">
        {label}
      </span>
    </div>
  );
}
