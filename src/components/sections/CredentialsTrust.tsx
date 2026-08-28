import { Container } from "@/components/ui/Container";
import { credentials } from "@/config/credentials";

interface CredentialIconProps {
  className?: string;
}

function CertificateIcon({ className }: CredentialIconProps): React.ReactElement {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="2.5" y="4" width="19" height="13" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="12" cy="10.2" r="2.4" stroke="currentColor" strokeWidth="1.4" />
      <path d="M9.5 20.5 10.6 17h2.8l1.1 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ClockIcon({ className }: CredentialIconProps): React.ReactElement {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.4" />
      <path d="M12 7.5V12l3 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GraduationIcon({ className }: CredentialIconProps): React.ReactElement {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M2 8l10-4.5L22 8l-10 4.5L2 8Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M6 10.3V16c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5v-5.7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function PinIcon({ className }: CredentialIconProps): React.ReactElement {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 21s7-6.4 7-11.5A7 7 0 0 0 5 9.5C5 14.6 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9.5" r="2.4" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

const icons: ((p: CredentialIconProps) => React.ReactElement)[] = [
  CertificateIcon,
  ClockIcon,
  GraduationIcon,
  PinIcon,
];

/**
 * Professional record as an elevated card grid — matches the floating-
 * window language established by the hero/testimonials rather than the
 * earlier flat, dense ledger rows.
 */
export function CredentialsTrust(): React.ReactElement {
  return (
    <section className="bg-(--color-bg) lg:flex lg:min-h-[calc(100vh-var(--nav-height))] lg:flex-col lg:justify-center">
      <Container width="wide" className="py-16 md:py-24 lg:py-8">
        <div className="flex flex-col gap-2 border-b border-(--color-border) pb-6 sm:flex-row sm:items-baseline sm:justify-between">
          <span className="text-eyebrow">04 &mdash; Professional Record</span>
          <span className="text-eyebrow">Chennai · Vijaya Hospitals</span>
        </div>

        <h2
          className="font-(family-name:--font-display) mt-8 max-w-2xl text-(--color-ink) lg:mt-6"
          style={{ fontSize: "clamp(2rem, 1.5rem + 2.2vw, 3.25rem)", lineHeight: 1.02, letterSpacing: "-0.01em" }}
        >
          Experience shaped by surgery.
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-8 lg:grid-cols-4">
          {credentials.map((credential, index) => {
            const Icon = icons[index] ?? CertificateIcon;
            return (
              <div
                key={credential.label}
                className="flex flex-col gap-4 rounded-2xl bg-(--color-surface) p-6 shadow-[0_16px_32px_rgba(23,27,19,0.08)] transition-transform duration-(--duration-base) ease-(--ease-editorial) hover:-translate-y-1"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-(--color-bg-secondary) text-(--color-ink)">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-(family-name:--font-display) text-xl text-(--color-ink)">
                    {credential.label}
                  </p>
                  <p className="text-sm mt-2 text-(--color-ink-muted)">{credential.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
