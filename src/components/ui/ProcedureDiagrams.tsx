interface DiagramProps {
  className?: string;
}

/**
 * Larger companion graphics to ConcernIcons.tsx, sized for the interactive
 * hotspot diagram on each procedure page. Same restrained single-stroke
 * line-art language — abstract, not clinical illustration.
 */
function FaceDiagram({ className }: DiagramProps): React.ReactElement {
  return (
    <svg viewBox="0 0 200 200" fill="none" className={className} aria-hidden="true">
      <circle cx="100" cy="105" r="70" stroke="currentColor" strokeWidth="1" />
      <circle cx="78" cy="90" r="4" fill="currentColor" />
      <circle cx="122" cy="90" r="4" fill="currentColor" />
      <path d="M96 100c0 10-6 18-6 24 0 4 4 6 10 6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <path d="M78 145c8 6 36 6 44 0" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

function NoseDiagram({ className }: DiagramProps): React.ReactElement {
  return (
    <svg viewBox="0 0 200 200" fill="none" className={className} aria-hidden="true">
      <path
        d="M85 40c0 30-22 46-22 72a37 37 0 0 0 74 0"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
}

function EyesDiagram({ className }: DiagramProps): React.ReactElement {
  return (
    <svg viewBox="0 0 200 200" fill="none" className={className} aria-hidden="true">
      <path
        d="M20 100c18-28 46-42 80-42s62 14 80 42c-18 28-46 42-80 42S38 128 20 100Z"
        stroke="currentColor"
        strokeWidth="1"
      />
      <circle cx="100" cy="100" r="18" stroke="currentColor" strokeWidth="1" />
      <path d="M40 66c14-8 26-10 30-10" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

function BreastDiagram({ className }: DiagramProps): React.ReactElement {
  return (
    <svg viewBox="0 0 200 200" fill="none" className={className} aria-hidden="true">
      <path
        d="M30 120c0-42 26-68 70-68s70 26 70 68"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M30 120c8 26 26 38 70 38s62-12 70-38"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path d="M100 52v106" stroke="currentColor" strokeWidth="1" strokeDasharray="2 5" />
    </svg>
  );
}

function BodyDiagram({ className }: DiagramProps): React.ReactElement {
  return (
    <svg viewBox="0 0 200 200" fill="none" className={className} aria-hidden="true">
      <circle cx="100" cy="34" r="18" stroke="currentColor" strokeWidth="1" />
      <path
        d="M62 165c0-38 12-68 38-68s38 30 38 68"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path d="M70 118h60" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

function MenDiagram({ className }: DiagramProps): React.ReactElement {
  return (
    <svg viewBox="0 0 200 200" fill="none" className={className} aria-hidden="true">
      <circle cx="100" cy="32" r="18" stroke="currentColor" strokeWidth="1" />
      <path
        d="M52 168c0-34 16-58 48-58s48 24 48 58"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path d="M62 118h76" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <path d="M78 92h44" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

const diagramsBySlug: Record<string, (props: DiagramProps) => React.ReactElement> = {
  face: FaceDiagram,
  nose: NoseDiagram,
  eyes: EyesDiagram,
  breast: BreastDiagram,
  body: BodyDiagram,
  men: MenDiagram,
};

export function ProcedureDiagram({
  slug,
  className,
}: {
  slug: string;
  className?: string;
}): React.ReactElement | null {
  const Diagram = diagramsBySlug[slug];
  if (!Diagram) return null;
  return <Diagram className={className} />;
}
