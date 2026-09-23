import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { TextLink } from "@/components/ui/TextLink";
import { aboutPillars, aboutStory, doctorIntro, philosophy } from "@/config/about";
import { consultationHref } from "@/config/navigation";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "About",
  description: doctorIntro.headline,
  alternates: { canonical: "/about" },
};

export default function AboutPage(): React.ReactElement {
  return (
    <main id="main-content" className="flex-1">
      <Section spacing="xl">
        <Container width="wide">
          <PageHeader eyebrow={doctorIntro.eyebrow} title={doctorIntro.headline} />

          <div className="mt-14 grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-7">
              {aboutStory.map((paragraph, index) => (
                <p
                  key={paragraph}
                  className={`text-body-lg text-(--color-ink-muted) ${index > 0 ? "mt-6" : ""}`}
                >
                  {paragraph}
                </p>
              ))}

              <p className="font-(family-name:--font-display) mt-10 text-lg italic text-(--color-ink)">
                {doctorIntro.signature}
              </p>

              <p className="text-body mt-12 text-(--color-ink-faint)">
                To discuss your own goals and concerns directly,{" "}
                <TextLink href={consultationHref}>book a consultation</TextLink>.
              </p>
            </div>

            <div className="md:col-start-9 md:col-end-13">
              <div className="relative aspect-square w-full overflow-hidden bg-(--color-bg-secondary)">
                <Image
                  src="/images/doctor/dr2.jpg"
                  alt="Dr. Dinesh Kumar at his consultation desk"
                  fill
                  sizes="(min-width: 768px) 20rem, 60vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section spacing="xl" background="bg-secondary">
        <Container width="wide">
          <span className="text-eyebrow">The Approach</span>
          <h2 className="text-h2 mt-4 max-w-2xl text-(--color-ink)">
            Science, precision, artistry and listening.
          </h2>

          <dl className="mt-14 grid grid-cols-1 gap-10 border-t border-(--color-border) pt-10 sm:grid-cols-2 md:mt-20 md:grid-cols-4">
            {aboutPillars.map((pillar, index) => (
              <div key={pillar.title}>
                <dt className="flex items-baseline gap-3">
                  <span aria-hidden="true" className="text-small tabular-nums text-(--color-ink-faint)">
                    0{index + 1}
                  </span>
                  <span className="text-h3 text-(--color-ink)">{pillar.title}</span>
                </dt>
                <dd className="text-body mt-3 text-(--color-ink-muted)">{pillar.description}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>

      <Section spacing="xl">
        <Container width="wide">
          <span className="text-eyebrow">Philosophy</span>
          <blockquote className="mt-6">
            <p className="text-h1 max-w-3xl text-(--color-ink)">&ldquo;{philosophy.quote}&rdquo;</p>
          </blockquote>

          <ul className="mt-14 grid grid-cols-1 gap-6 border-t border-(--color-border) pt-10 sm:grid-cols-2">
            {philosophy.supporting.map((point) => (
              <li key={point} className="text-body text-(--color-ink-muted)">
                {point}
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    </main>
  );
}
