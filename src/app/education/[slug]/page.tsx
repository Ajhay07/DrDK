import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { TextLink } from "@/components/ui/TextLink";
import { educationEntries } from "@/config/education";
import { consultationHref } from "@/config/navigation";

interface EducationDetailPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams(): { slug: string }[] {
  return educationEntries.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({
  params,
}: EducationDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = educationEntries.find((item) => item.slug === slug);
  if (!entry) return {};

  return {
    title: entry.title,
    description: entry.description,
    alternates: { canonical: `/education/${entry.slug}` },
  };
}

export default async function EducationDetailPage({
  params,
}: EducationDetailPageProps): Promise<React.ReactElement> {
  const { slug } = await params;
  const entry = educationEntries.find((item) => item.slug === slug);

  if (!entry) notFound();

  return (
    <main id="main-content" className="flex-1">
      <Section spacing="xl">
        <Container>
          <PageHeader eyebrow="Patient Education" title={entry.title} description={entry.description} />

          <div className="mt-10 max-w-2xl">
            {entry.body.map((paragraph, index) => (
              <p
                key={paragraph}
                className={`text-body-lg text-(--color-ink-muted) ${index > 0 ? "mt-6" : ""}`}
              >
                {paragraph}
              </p>
            ))}
          </div>

          <p className="text-body mt-14 max-w-2xl text-(--color-ink-faint)">
            This is general information, not medical advice specific to any
            individual. <TextLink href={consultationHref}>Book a consultation</TextLink>{" "}
            if you have questions about your own situation.
          </p>
        </Container>
      </Section>
    </main>
  );
}
