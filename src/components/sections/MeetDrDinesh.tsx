import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { doctorIntro } from "@/config/about";

interface PillarIconProps {
  className?: string;
}

function PersonIcon({ className }: PillarIconProps): React.ReactElement {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M5 20c0-3.9 3.1-7 7-7s7 3.1 7 7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function StarIcon({ className }: PillarIconProps): React.ReactElement {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 3.5l2.3 4.9 5.3.6-3.9 3.7 1 5.3-4.7-2.6-4.7 2.6 1-5.3-3.9-3.7 5.3-.6L12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HeartIcon({ className }: PillarIconProps): React.ReactElement {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 20s-7-4.4-9.5-9C.9 7.7 2.6 4.5 6 4.2c2-.2 3.6.9 6 3 2.4-2.1 4-3.2 6-3 3.4.3 5.1 3.5 3.5 6.8-2.5 4.6-9.5 9-9.5 9Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AwardIcon({ className }: PillarIconProps): React.ReactElement {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="9" r="5.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M8.5 13.5 7 21l5-2.5 5 2.5-1.5-7.5" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  );
}

function GraduationIcon({ className }: PillarIconProps): React.ReactElement {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M2 8l10-4.5L22 8l-10 4.5L2 8Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M6 10.3V16c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5v-5.7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function PinIcon({ className }: PillarIconProps): React.ReactElement {
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

const pillars: { icon: (p: PillarIconProps) => React.ReactElement; title: string; body: string }[] = [
  { icon: PersonIcon, title: "Patient First Approach", body: doctorIntro.paragraphs[1] },
  { icon: StarIcon, title: "Experience that Matters", body: doctorIntro.paragraphs[2] },
  { icon: HeartIcon, title: "Informed. Honest. Personal.", body: doctorIntro.paragraphs[3] },
];

const stats: { icon: (p: PillarIconProps) => React.ReactElement; label: string; value: string; sub: string }[] = [
  { icon: AwardIcon, label: "Experience", value: "10 Years", sub: "In the surgical field" },
  { icon: GraduationIcon, label: "Fellowship", value: "IAAPS, 2023", sub: "Fellowship in Aesthetic Surgery" },
  { icon: PinIcon, label: "Location", value: "Chennai, India", sub: "Vijaya Hospitals" },
];

/**
 * A personal profile: a photo growing out of a watermarked panel on the
 * left, three approach "pillars" and a CTA in the middle, and a connected
 * stat rail with a closing quote on the right.
 */
export function MeetDrDinesh(): React.ReactElement {
  return (
    <section className="bg-(--color-surface)">
      <Container width="wide" className="py-16 md:py-24">
        <span className="text-eyebrow">02 &mdash; {doctorIntro.eyebrow}</span>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:mt-20 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <div className="relative aspect-[4/5] w-full max-w-md">
              <div className="absolute inset-0 overflow-hidden rounded-[2rem] bg-(--color-bg-secondary)">
                <span
                  aria-hidden="true"
                  className="absolute -left-4 -top-10 select-none font-(--font-display) text-[15rem] leading-none text-(--color-ink)/[0.06]"
                >
                  D
                </span>
              </div>
              <div className="absolute inset-x-0 -top-8 bottom-0">
                <Image
                  src="/images/doctor/dr-dinesh-profile-cutout.png"
                  alt="Dr. Dinesh Kumar in consultation attire"
                  fill
                  sizes="(min-width: 1024px) 28rem, 85vw"
                  className="object-contain object-bottom drop-shadow-[0_20px_28px_rgba(23,27,19,0.16)]"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <h2 className="text-hero text-(--color-ink)">
              Dinesh
              <br />
              Kumar
            </h2>
            <div className="mt-4 h-px w-14 bg-(--color-accent)" />
            <span className="text-eyebrow mt-4 block text-(--color-ink-muted)">
              Plastic, Cosmetic &amp; Reconstructive Surgeon
            </span>

            <p className="text-body-lg mt-6 text-(--color-ink-muted)">{doctorIntro.paragraphs[0]}</p>

            <ul className="mt-8 flex flex-col">
              {pillars.map(({ icon: Icon, title, body }) => (
                <li
                  key={title}
                  className="flex gap-4 border-t border-(--color-border) py-5 first:border-t-0 first:pt-0"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-(--color-bg-secondary) text-(--color-ink)">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-body font-medium text-(--color-ink)">{title}</p>
                    <p className="text-body mt-1 text-(--color-ink-muted)">{body}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <a
                href={doctorIntro.ctaHref}
                className="inline-flex items-center gap-2 rounded-xl bg-(--color-bg-secondary) px-6 py-3 text-button text-(--color-ink) transition-colors duration-(--duration-fast) ease-(--ease-editorial) hover:bg-(--color-border-strong)"
              >
                {doctorIntro.ctaLabel}
                <span aria-hidden="true">&#8599;</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="relative flex flex-col gap-5 border-l border-(--color-border) pl-6">
              <span
                aria-hidden="true"
                className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-(--color-ink)"
              />
              {stats.map(({ icon: Icon, label, value, sub }) => (
                <div
                  key={label}
                  className="flex items-start gap-4 rounded-2xl border border-(--color-border) bg-(--color-bg) p-5"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-(--color-bg-secondary) text-(--color-ink)">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-eyebrow text-(--color-ink-muted)">{label}</p>
                    <p className="font-(--font-display) text-xl text-(--color-ink)">{value}</p>
                    <p className="text-sm text-(--color-ink-faint)">{sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-(--color-border) pt-6">
              <span aria-hidden="true" className="font-(--font-display) text-4xl italic text-(--color-ink-faint)">
                &ldquo;
              </span>
              <p className="font-(--font-display) text-xl italic leading-snug text-(--color-ink)">
                Precision is not just in the procedure &mdash; it&rsquo;s in the understanding.
              </p>
              <p className="font-(--font-display) mt-3 text-sm italic text-(--color-ink-muted)">
                {doctorIntro.signature}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
