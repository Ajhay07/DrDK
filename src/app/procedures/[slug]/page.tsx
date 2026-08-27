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
    description: concern.descriptor,
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

          <p className="text-body mt-10 max-w-2xl text-(--color-ink-faint)">
            Detailed information on procedures within this area is being prepared
            and will appear here soon.{" "}
            <TextLink href={consultationHref}>Book a consultation</TextLink> to
            discuss suitability and options directly.
          </p>
        </Container>
      </Section>
    </main>
  );
}
