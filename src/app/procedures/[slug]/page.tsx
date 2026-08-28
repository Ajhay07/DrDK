import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { TextLink } from "@/components/ui/TextLink";
import { InteractiveDiagram } from "@/components/interactive/InteractiveDiagram";
import { FaceExplorer } from "@/components/interactive/FaceExplorer";
import { concerns } from "@/config/concerns";
import { faceRegions } from "@/config/face-explorer";
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
        <Container width="wide">
          <PageHeader eyebrow="Procedures" title={concern.label} description={concern.descriptor} />

          <div className="mt-14 grid grid-cols-1 gap-14 md:mt-20 md:grid-cols-12 md:items-start md:gap-8">
            <div className="md:col-span-6">
              <span className="text-eyebrow">Overview</span>
              <p className="text-body-lg mt-4 text-(--color-ink-muted)">{concern.overview}</p>

              <p className="text-body mt-10 text-(--color-ink-faint)">
                This is general information, not medical advice specific to any
                individual.{" "}
                <TextLink href={consultationHref}>Book a consultation</TextLink> to
                discuss suitability and options directly with Dr. Dinesh Kumar.
              </p>
            </div>

            <div className="md:col-span-5 md:col-start-8">
              <span className="text-eyebrow">What a consultation considers</span>
              <div className="mt-4">
                <InteractiveDiagram considerations={concern.considerations} />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {concern.slug === "face" ? (
        <Section spacing="xl" background="bg-secondary">
          <Container width="wide">
            <div className="mb-14 max-w-2xl md:mb-20">
              <span className="text-eyebrow">Explore</span>
              <h2 className="text-h2 mt-4 text-(--color-ink)">
                An interactive guide to facial anatomy.
              </h2>
              <p className="text-body-lg mt-5 text-(--color-ink-muted)">
                Every consultation begins with understanding how individual regions of the
                face relate to one another. Explore the diagram below to see what is
                typically considered in each area.
              </p>
            </div>
            <FaceExplorer regions={faceRegions} />
          </Container>
        </Section>
      ) : null}
    </main>
  );
}
