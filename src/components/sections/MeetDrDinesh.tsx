import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { TextLink } from "@/components/ui/TextLink";
import { doctorIntro } from "@/config/about";

/**
 * A personal profile anchored by the oversized name, with a real portrait
 * given its own column — the earlier tiny inline chip was a compromise
 * forced by a 150px source image; with a ~335×597 source there's enough
 * resolution to give the photo real presence.
 */
export function MeetDrDinesh(): React.ReactElement {
  return (
    <section className="bg-(--color-surface)">
      <Container width="wide" className="py-20 md:py-32">
        <span className="text-eyebrow">02 &mdash; {doctorIntro.eyebrow}</span>

        <h2 className="text-hero mt-6 text-(--color-ink)">
          Dinesh
          <br />
          Kumar
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-12 md:mt-20 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4">
            <div className="relative aspect-[3/5] w-full max-w-64 overflow-hidden bg-(--color-bg-secondary)">
              <Image
                src="/images/doctor/dr-dinesh-profile.png"
                alt="Dr. Dinesh Kumar in consultation attire"
                fill
                sizes="(min-width: 768px) 16rem, 60vw"
                className="object-cover object-top"
              />
            </div>
          </div>

          <div className="md:col-span-5">
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

          <div className="md:col-start-10 md:col-end-13">
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
