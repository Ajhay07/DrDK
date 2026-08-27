import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { TextLink } from "@/components/ui/TextLink";
import { doctorIntro } from "@/config/about";

/**
 * Personal introduction to Dr. Dinesh: a large statement, a small
 * contained portrait (kept near its native resolution rather than
 * stretched), editorial biography fragments, and a compact personal
 * metadata column — three distinct columns rather than a generic
 * two-column About layout.
 */
export function MeetDrDinesh(): React.ReactElement {
  return (
    <Section background="bg" spacing="lg">
      <Container width="wide">
        <div className="max-w-3xl">
          <Eyebrow>{doctorIntro.eyebrow}</Eyebrow>
          <h2 className="text-h1 mt-6 text-(--color-ink)">{doctorIntro.headline}</h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:mt-20 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-3">
            <div
              data-cursor="View"
              className="relative h-40 w-32 overflow-hidden bg-(--color-bg-secondary) sm:h-48 sm:w-40"
            >
              <Image
                src="/images/doctor/dr-dinesh-consultation.png"
                alt="Dr. Dinesh Kumar during a patient consultation"
                fill
                sizes="(min-width: 640px) 10rem, 8rem"
                className="object-cover object-top"
              />
            </div>
            <p className="font-(--font-display) mt-6 text-lg italic text-(--color-ink)">
              {doctorIntro.signature}
            </p>
          </div>

          <div className="lg:col-span-6">
            {doctorIntro.paragraphs.map((paragraph, index) => (
              <p
                key={paragraph}
                className={`text-body-lg text-(--color-ink-muted) ${index > 0 ? "mt-6" : ""}`}
              >
                {paragraph}
              </p>
            ))}

            <div className="mt-8">
              <TextLink href={doctorIntro.ctaHref}>{doctorIntro.ctaLabel}</TextLink>
            </div>
          </div>

          <div className="lg:col-span-3">
            <dl className="flex flex-col gap-6 border-t border-(--color-border) pt-6 lg:border-t-0 lg:border-l lg:pl-8 lg:pt-0">
              <div>
                <dt className="text-eyebrow">Experience</dt>
                <dd className="text-body mt-1 text-(--color-ink)">10 Years</dd>
              </div>
              <div>
                <dt className="text-eyebrow">Fellowship</dt>
                <dd className="text-body mt-1 text-(--color-ink)">IAAPS, 2023</dd>
              </div>
              <div>
                <dt className="text-eyebrow">Location</dt>
                <dd className="text-body mt-1 text-(--color-ink)">Chennai, India</dd>
              </div>
            </dl>
          </div>
        </div>
      </Container>
    </Section>
  );
}
