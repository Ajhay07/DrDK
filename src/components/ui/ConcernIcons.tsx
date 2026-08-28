interface ConcernIconProps {
  className?: string;
}

/**
 * Minimal single-stroke line marks for each procedure area — abstract and
 * geometric by design, not clinical illustrations or literal anatomy.
 * Kept restrained (currentColor, 1px stroke) to match the editorial system
 * rather than reaching for a generic icon set.
 */
function FaceIcon({ className }: ConcernIconProps): React.ReactElement {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="1" />
      <circle cx="18.5" cy="21" r="1.2" fill="currentColor" />
      <circle cx="29.5" cy="21" r="1.2" fill="currentColor" />
      <path d="M20 30c1.5 1.3 6.5 1.3 8 0" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

function NoseIcon({ className }: ConcernIconProps): React.ReactElement {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path
        d="M21 14c0 6-5 10-5 16a8 8 0 0 0 16 0"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
}

function EyesIcon({ className }: ConcernIconProps): React.ReactElement {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path
        d="M6 24c4-6 10-9 18-9s14 3 18 9c-4 6-10 9-18 9S10 30 6 24Z"
        stroke="currentColor"
        strokeWidth="1"
      />
      <circle cx="24" cy="24" r="4" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

function BreastIcon({ className }: ConcernIconProps): React.ReactElement {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path
        d="M8 30c0-10 6-16 16-16s16 6 16 16"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path d="M8 30c2 6 6 9 16 9s14-3 16-9" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

function BodyIcon({ className }: ConcernIconProps): React.ReactElement {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <circle cx="24" cy="10" r="4.5" stroke="currentColor" strokeWidth="1" />
      <path
        d="M14 38c0-9 3-16 10-16s10 7 10 16"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MenIcon({ className }: ConcernIconProps): React.ReactElement {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <circle cx="24" cy="12" r="4.5" stroke="currentColor" strokeWidth="1" />
      <path
        d="M12 38c0-8 4-14 12-14s12 6 12 14"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path d="M15 30h18" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

const iconsBySlug: Record<string, (props: ConcernIconProps) => React.ReactElement> = {
  face: FaceIcon,
  nose: NoseIcon,
  eyes: EyesIcon,
  breast: BreastIcon,
  body: BodyIcon,
  men: MenIcon,
};

export function ConcernIcon({
  slug,
  className,
}: {
  slug: string;
  className?: string;
}): React.ReactElement | null {
  const Icon = iconsBySlug[slug];
  if (!Icon) return null;
  return <Icon className={className} />;
}
