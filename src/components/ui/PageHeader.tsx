import { Eyebrow } from "@/components/ui/Eyebrow";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
}

/** Shared page-level header (eyebrow + h1 + optional intro) for route foundation pages. */
export function PageHeader({ eyebrow, title, description }: PageHeaderProps): React.ReactElement {
  return (
    <div className="max-w-2xl">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1 className="text-h1 mt-6 text-(--color-ink)">{title}</h1>
      {description ? (
        <p className="text-body-lg mt-6 text-(--color-ink-muted)">{description}</p>
      ) : null}
    </div>
  );
}
