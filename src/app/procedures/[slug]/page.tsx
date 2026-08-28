import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { TextLink } from "@/components/ui/TextLink";
import { concerns } from "@/config/concerns";
import { consultationHref } from "@/config/navigation";

interface ProcedurePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams(): { slug: string }[] {
  return concerns.map((concern) => ({ slug: concern.slug }));
}

export async function generateMetadata({ params }: ProcedurePageProps): Promise<Metadata> {
  const { slug } = await params;
  const concern = concerns.find((item) => item.slug === slug);
  if (!concern) return {};

  return {
    title: concern.label,
    description: concern.overview,
    alternates: { canonical: `/procedures/${concern.slug}` },
  };
}

export default async function ProcedurePage({ params }: ProcedurePageProps): Promise<React.ReactElement> {
  const { slug } = await params;
  const concern = concerns.find((item) => item.slug === slug);

  if (!concern) notFound();

  return (
    <main id="main-content" className="flex-1">
      <Section spacing="xl">
        <Container>
          <PageHeader eyebrow="Procedures" title={concern.label} description={concern.descriptor} />

          <p className="text-body-lg mt-10 max-w-2xl text-(--color-ink-muted)">{concern.overview}</p>

          <div className="mt-14 max-w-2xl">
            <span className="text-eyebrow">What a consultation considers</span>
            <ul className="mt-6 flex flex-col gap-4 border-t border-(--color-border) pt-6">
              {concern.considerations.map((point) => (
                <li key={point} className="text-body border-b border-(--color-border) pb-4 text-(--color-ink)">
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <p className="text-body mt-14 max-w-2xl text-(--color-ink-faint)">
            This is general information, not medical advice specific to any
            individual.{" "}
            <TextLink href={consultationHref}>Book a consultation</TextLink> to
            discuss suitability and options directly with Dr. Dinesh Kumar.
          </p>
        </Container>
      </Section>
    </main>
  );
}
