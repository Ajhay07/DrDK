import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Magnetic } from "@/components/interactive/Magnetic";
import { consultationHref } from "@/config/navigation";

interface HighlightIconProps {
  className?: string;
}

function TechniqueIcon({ className }: HighlightIconProps): React.ReactElement {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path d="M24 8v18" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <path
        d="M24 8c-6 0-10 4-10 9 0 4 3 6 6 6"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M24 14c5 0 8 3 8 7 0 3-2 5-5 5"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path d="M17 40c2-4 4-6 7-6s5 2 7 6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

function CareIcon({ className }: HighlightIconProps): React.ReactElement {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <circle cx="19" cy="16" r="6" stroke="currentColor" strokeWidth="1" />
      <path
        d="M8 39c0-7 5-12 11-12s11 5 11 12"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M33 16c1.6-2 4-3 6-1.6 2 1.4 2 4-.2 6.2L33 26l-5.5-5.4c-2.2-2.2-2.2-4.8-.2-6.2 2-1.4 4.4-.4 6 1.6Z"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SafetyIcon({ className }: HighlightIconProps): React.ReactElement {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path
        d="M24 7l14 5v10c0 9-6 15-14 19-8-4-14-10-14-19V12l14-5Z"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinejoin="round"
      />
      <path d="M18 24l4.5 4.5L31 19" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ResultsIcon({ className }: HighlightIconProps): React.ReactElement {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <circle cx="24" cy="15" r="6" stroke="currentColor" strokeWidth="1" />
      <path
        d="M12 39c0-7.5 5.4-13 12-13s12 5.5 12 13"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
}

const highlights: { icon: (p: HighlightIconProps) => React.ReactElement; label: string }[] = [
  { icon: TechniqueIcon, label: "Advanced Techniques" },
  { icon: CareIcon, label: "Personalised Care" },
  { icon: SafetyIcon, label: "Safety & Precision" },
  { icon: ResultsIcon, label: "Natural & Aesthetic Results" },
];

/**
 * Homepage hero — split composition with an arched, full-bleed portrait
 * panel and a floating credentials card overlapping its lower edge, plus
 * a four-point trust strip beneath. Deliberately warmer/rounder than the
 * base design system on client request; see PROJECT_RULES.md §12 for the
 * restrained default this departs from.
 */
export function Hero(): React.ReactElement {
  return (
    <section className="relative overflow-hidden bg-(--color-bg) lg:flex lg:min-h-[calc(100vh-var(--nav-height))] lg:flex-col lg:justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center px-(--gutter) py-14 lg:py-8">
          <span className="text-eyebrow text-(--color-ink-muted) motion-fade-in">
            Consultant Plastic &amp; Cosmetic Surgeon
          </span>

          <h1 className="text-display mt-4 text-(--color-ink) motion-fade-in">
            Refined results.
            <br />
            <span className="italic">Natural</span> confidence.
          </h1>

          <div
            className="mt-6 h-px w-16 bg-(--color-accent) motion-fade-in"
            style={{ animationDelay: "80ms" }}
          />

          <p
            className="text-body-lg mt-5 max-w-lg text-(--color-ink-muted) motion-fade-in"
            style={{ animationDelay: "120ms" }}
          >
            Personalised plastic and cosmetic surgery focused on natural-looking
            results, precision and patient safety.
          </p>

          <div
            className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center motion-fade-in"
            style={{ animationDelay: "200ms" }}
          >
            <Magnetic data-cursor="Open">
              <a
                href={consultationHref}
                className="inline-flex items-center gap-3 rounded-full bg-(--color-accent) px-7 py-4 text-button text-(--color-accent-ink) transition-colors duration-(--duration-fast) ease-(--ease-editorial) hover:bg-(--color-accent-strong)"
              >
                Book a Consultation
                <span aria-hidden="true">&rarr;</span>
              </a>
            </Magnetic>
          </div>

          <div
            className="mt-6 max-w-[550px] motion-fade-in"
            style={{ animationDelay: "240ms" }}
          >
            <p
              className="sm:whitespace-nowrap uppercase text-[#8B806F]"
              style={{ fontSize: "11px", letterSpacing: "0.06em", lineHeight: 1.5 }}
            >
              MBBS &middot; MS (General Surgery) &middot; MCh (Plastic Surgery)
            </p>
            <p
              className="mt-1 text-[#8B806F]/80"
              style={{ fontSize: "11px", letterSpacing: "0.04em", lineHeight: 1.5 }}
            >
              Advanced Fellowship Training in Cosmetic Surgery &middot; Akademikliniken,
              Stockholm
            </p>
          </div>
        </div>

        <div
          className="relative min-h-[22rem] motion-fade-in sm:min-h-[26rem] lg:min-h-0"
          style={{ animationDelay: "160ms" }}
        >
          {/* Soft translucent champagne forms — architectural, not a boxed
              panel. The portrait sits directly on the page background. */}
          <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
            <div className="absolute right-[6%] top-[6%] h-[65%] w-[65%] rounded-full bg-(--color-clay)/20 blur-3xl" />
            <div className="absolute left-[8%] bottom-[8%] h-[40%] w-[40%] rounded-full bg-(--color-bg-secondary)/70 blur-3xl" />
            <div
              className="absolute inset-0 opacity-70"
              style={{
                background:
                  "repeating-conic-gradient(from -18deg at 20% -15%, transparent 0deg 6deg, rgba(216,200,168,0.4) 6deg 8deg, transparent 8deg 18deg)",
                filter: "blur(2px)",
              }}
            />
          </div>

          <div className="absolute inset-x-[8%] top-[12%] bottom-0">
            <Image
              src="/images/doctor/dr-dinesh-cutout.png"
              alt="Dr. Dinesh Kumar, consultant plastic and cosmetic surgeon"
              fill
              priority
              sizes="(min-width: 1024px) 46vw, 84vw"
              className="object-contain object-bottom drop-shadow-[0_30px_50px_rgba(80,65,45,0.18)]"
            />
          </div>

          <div className="absolute bottom-4 right-4 max-w-[13rem] rounded-(--radius-lg) border border-(--color-border-strong) bg-(--color-bg)/95 px-5 py-4 backdrop-blur-sm sm:bottom-6 sm:right-6">
            <p className="font-(family-name:--font-display) text-base italic text-(--color-ink)">
              Consultant
            </p>
            <p className="text-eyebrow mt-1 text-(--color-ink-muted)">Plastic &amp; Cosmetic Surgeon</p>
            <div className="mt-2 border-t border-(--color-border) pt-2">
              <p className="text-xs text-(--color-ink-muted)">MBBS, MS, MCh (Plastic Surgery)</p>
            </div>
          </div>
        </div>
      </div>

      <Container width="wide">
        <div className="grid grid-cols-2 gap-6 border-t border-(--color-border) py-5 sm:grid-cols-4 lg:py-4">
          {highlights.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-(--color-border-strong) text-(--color-accent)">
                <Icon className="h-4 w-4" />
              </span>
              <span className="text-sm leading-snug text-(--color-ink)">{label}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
