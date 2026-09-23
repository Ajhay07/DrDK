interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  /**
   * "hero" (default) is the oversized treatment for short route titles.
   * "display" is a step down, for longer sentence-length titles (e.g. the
   * About page's headline) where "hero" would wrap across several lines
   * and overpower the page.
   */
  size?: "hero" | "display";
}

const titleClass: Record<NonNullable<PageHeaderProps["size"]>, string> = {
  hero: "text-hero max-w-4xl",
  display: "text-display max-w-3xl",
};

/** Shared page-level header (eyebrow + oversized h1 + optional intro) for route foundation pages. */
export function PageHeader({ eyebrow, title, description, size = "hero" }: PageHeaderProps): React.ReactElement {
  return (
    <div>
      <span className="text-eyebrow">{eyebrow}</span>
      <h1 className={`${titleClass[size]} mt-6 text-(--color-ink)`}>{title}</h1>
      {description ? (
        <p className="text-body-lg mt-8 max-w-xl text-(--color-ink-muted)">{description}</p>
      ) : null}
    </div>
  );
}
