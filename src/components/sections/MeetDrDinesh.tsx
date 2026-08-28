import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { TextLink } from "@/components/ui/TextLink";
import { doctorIntro } from "@/config/about";

/**
 * A personal profile anchored by the oversized name itself — the portrait
 * sits beside it as a small inset, not a dedicated image column.
 * Biography fragments and metadata are distributed across the grid below.
 */
export function MeetDrDinesh(): React.ReactElement {
  return (
    <section className="bg-(--color-surface)">
      <Container width="wide" className="py-20 md:py-32">
        <span className="text-eyebrow">02 &mdash; {doctorIntro.eyebrow}</span>

        <h2 aria-label="Dinesh Kumar" className="mt-6 text-(--color-ink)">
          <span aria-hidden="true" className="text-hero block">
            Dinesh
          </span>
          <span aria-hidden="true" className="mt-1 flex flex-wrap items-center gap-5 md:gap-8">
            <span className="text-hero">Kumar</span>
            <span
              data-cursor="View"
              className="relative block h-16 w-14 shrink-0 overflow-hidden bg-(--color-bg-secondary) md:h-24 md:w-20"
            >
              <Image
                src="/images/doctor/dr-dinesh-consultation.png"
                alt=""
                fill
                sizes="6rem"
                className="object-cover object-top"
              />
            </span>
          </span>
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-10 md:mt-20 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-7">
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

          <div className="md:col-start-9 md:col-end-13">
            <dl className="flex flex-col gap-6 border-t border-(--color-border) pt-6">
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
    </section>
  );
}
