interface DiagramProps {
  className?: string;
}

/**
 * Continuous-line editorial illustrations (single flowing outline, in the
 * style of fashion/beauty technical sketches) — replacing the earlier
 * geometric-shape icons, which read as clip art rather than a considered
 * graphic. Used inside InteractiveDiagram's blueprint frame.
 */
function FaceDiagram({ className }: DiagramProps): React.ReactElement {
  return (
    <svg viewBox="0 0 200 240" fill="none" className={className} aria-hidden="true">
      <path
        d="M100,16 C147,16 172,58 172,104 C172,150 158,198 100,224 C42,198 28,150 28,104 C28,58 53,16 100,16 Z"
        stroke="currentColor"
        strokeWidth="0.75"
      />
      <path d="M64,92 C71,86 83,86 90,92" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" />
      <path d="M110,92 C117,86 129,86 136,92" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" />
      <path
        d="M100,108 C96,120 90,132 90,140 C90,146 95,149 100,149"
        stroke="currentColor"
        strokeWidth="0.75"
        strokeLinecap="round"
      />
      <path d="M78,172 C88,180 112,180 122,172" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" />
    </svg>
  );
}

function NoseDiagram({ className }: DiagramProps): React.ReactElement {
  return (
    <svg viewBox="0 0 200 240" fill="none" className={className} aria-hidden="true">
      <path
        d="M96,40 C90,80 62,96 60,132 C58,158 76,178 100,178 C124,178 142,158 140,132"
        stroke="currentColor"
        strokeWidth="0.75"
        strokeLinecap="round"
      />
      <path d="M78,150 C84,158 92,161 100,161" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" />
    </svg>
  );
}

function EyesDiagram({ className }: DiagramProps): React.ReactElement {
  return (
    <svg viewBox="0 0 200 240" fill="none" className={className} aria-hidden="true">
      <path
        d="M18,120 C46,84 78,66 100,66 C122,66 154,84 182,120 C154,156 122,174 100,174 C78,174 46,156 18,120 Z"
        stroke="currentColor"
        strokeWidth="0.75"
      />
      <path
        d="M76,120 C82,108 92,102 100,102 C108,102 118,108 124,120 C118,132 108,138 100,138 C92,138 82,132 76,120 Z"
        stroke="currentColor"
        strokeWidth="0.75"
      />
      <circle cx="100" cy="120" r="4" fill="currentColor" />
      <path d="M40,86 C58,72 78,66 96,64" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" />
    </svg>
  );
}

function BreastDiagram({ className }: DiagramProps): React.ReactElement {
  return (
    <svg viewBox="0 0 200 240" fill="none" className={className} aria-hidden="true">
      <path
        d="M24,150 C22,96 54,58 100,58 C146,58 178,96 176,150"
        stroke="currentColor"
        strokeWidth="0.75"
        strokeLinecap="round"
      />
      <path
        d="M24,150 C30,182 54,200 100,200 C146,200 170,182 176,150"
        stroke="currentColor"
        strokeWidth="0.75"
        strokeLinecap="round"
      />
      <path d="M100,58 L100,200" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 6" strokeLinecap="round" />
      <circle cx="70" cy="128" r="2" fill="currentColor" />
      <circle cx="130" cy="128" r="2" fill="currentColor" />
    </svg>
  );
}

function BodyDiagram({ className }: DiagramProps): React.ReactElement {
  return (
    <svg viewBox="0 0 200 240" fill="none" className={className} aria-hidden="true">
      <ellipse cx="100" cy="34" rx="20" ry="24" stroke="currentColor" strokeWidth="0.75" />
      <path
        d="M64,220 C58,168 62,132 78,110 C86,100 96,96 100,96 C104,96 114,100 122,110 C138,132 142,168 136,220"
        stroke="currentColor"
        strokeWidth="0.75"
        strokeLinecap="round"
      />
      <path d="M66,150 C82,158 118,158 134,150" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" />
    </svg>
  );
}

function MenDiagram({ className }: DiagramProps): React.ReactElement {
  return (
    <svg viewBox="0 0 200 240" fill="none" className={className} aria-hidden="true">
      <ellipse cx="100" cy="30" rx="19" ry="23" stroke="currentColor" strokeWidth="0.75" />
      <path
        d="M52,220 C48,176 54,140 68,116 C78,98 92,90 100,90 C108,90 122,98 132,116 C146,140 152,176 148,220"
        stroke="currentColor"
        strokeWidth="0.75"
        strokeLinecap="round"
      />
      <path d="M68,116 C80,124 120,124 132,116" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" />
      <path d="M84,150 L84,192 M116,150 L116,192" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" />
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
