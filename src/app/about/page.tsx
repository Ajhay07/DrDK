import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { TextLink } from "@/components/ui/TextLink";
import { doctorIntro } from "@/config/about";
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
              {doctorIntro.paragraphs.map((paragraph, index) => (
                <p
                  key={paragraph}
                  className={`text-body-lg text-(--color-ink-muted) ${index > 0 ? "mt-6" : ""}`}
                >
                  {paragraph}
                </p>
              ))}

              <p className="font-(--font-display) mt-10 text-lg italic text-(--color-ink)">
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
    </main>
  );
}
