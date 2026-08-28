import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { TextLink } from "@/components/ui/TextLink";
import { AreaExplorer } from "@/components/interactive/AreaExplorer";
import { concerns } from "@/config/concerns";
import { areaExplorers } from "@/config/area-explorer";
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

  const explorer = areaExplorers[concern.slug];

  return (
    <main id="main-content" className="flex-1">
      <Section spacing="xl">
        <Container width="wide">
          <PageHeader eyebrow="Procedures" title={concern.label} description={concern.descriptor} />

          <div className="mt-14 max-w-2xl md:mt-20">
            <span className="text-eyebrow">Overview</span>
            <p className="text-body-lg mt-4 text-(--color-ink-muted)">{concern.overview}</p>

            <p className="text-body mt-10 text-(--color-ink-faint)">
              This is general information, not medical advice specific to any
              individual.{" "}
              <TextLink href={consultationHref}>Book a consultation</TextLink> to
              discuss suitability and options directly with Dr. Dinesh Kumar.
            </p>
          </div>
        </Container>
      </Section>

      {explorer ? (
        <Section spacing="xl" background="bg-secondary">
          <Container width="wide">
            <div className="mb-14 max-w-2xl md:mb-20">
              <span className="text-eyebrow">Explore</span>
              <h2 className="text-h2 mt-4 text-(--color-ink)">
                An interactive guide to {concern.label.toLowerCase()} anatomy.
              </h2>
              <p className="text-body-lg mt-5 text-(--color-ink-muted)">
                Every consultation begins with understanding how individual regions relate
                to one another. Explore the photograph below to see what is typically
                considered in each area.
              </p>
            </div>
            <AreaExplorer config={explorer} />
          </Container>
        </Section>
      ) : null}
    </main>
  );
}
