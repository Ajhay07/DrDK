interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
}

/** Shared page-level header (eyebrow + oversized h1 + optional intro) for route foundation pages. */
export function PageHeader({ eyebrow, title, description }: PageHeaderProps): React.ReactElement {
  return (
    <div>
      <span className="text-eyebrow">{eyebrow}</span>
      <h1 className="text-hero mt-6 max-w-4xl text-(--color-ink)">{title}</h1>
      {description ? (
        <p className="text-body-lg mt-8 max-w-xl text-(--color-ink-muted)">{description}</p>
      ) : null}
    </div>
  );
}
