import type { Metadata } from "next";
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
        <Container>
          <PageHeader eyebrow={doctorIntro.eyebrow} title={doctorIntro.headline} />

          <div className="mt-10 max-w-2xl">
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
        </Container>
      </Section>
    </main>
  );
}
