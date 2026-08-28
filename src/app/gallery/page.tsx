import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { TextLink } from "@/components/ui/TextLink";
import { BeforeAfterSlider } from "@/components/interactive/BeforeAfterSlider";
import { consultationHref } from "@/config/navigation";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Before & After Gallery",
  description: "A gallery of patient outcomes, shared with informed consent.",
  alternates: { canonical: "/gallery" },
};

/**
 * Demo/placeholder pairings only — these are stock photos of different
 * people, standing in for layout purposes until real, consented patient
 * cases are added. Deliberately not two photos of the same person, so
 * this can never be mistaken for a real before/after result.
 */
const placeholderCases = [
  {
    label: "Sample 01",
    beforeSrc: "/images/procedures/face-explorer.jpg",
    afterSrc: "/images/procedures/men-explorer.jpg",
  },
  {
    label: "Sample 02",
    beforeSrc: "/images/procedures/eyes-explorer.jpg",
    afterSrc: "/images/procedures/face-explorer.jpg",
  },
  {
    label: "Sample 03",
    beforeSrc: "/images/procedures/body-explorer.jpg",
    afterSrc: "/images/procedures/breast-explorer.jpg",
  },
  {
    label: "Sample 04",
    beforeSrc: "/images/procedures/men-explorer.jpg",
    afterSrc: "/images/procedures/body-explorer.jpg",
  },
];

export default function GalleryPage(): React.ReactElement {
  return (
    <main id="main-content" className="flex-1">
      <Section spacing="xl">
        <Container>
          <PageHeader
            eyebrow="Before &amp; After"
            title="Results, shared with consent."
            description="This gallery will be populated with real patient cases, shown only with informed consent. The samples below are stock photography, standing in to preview the comparison layout — drag the slider to compare."
          />

          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {placeholderCases.map((item) => (
              <BeforeAfterSlider
                key={item.label}
                label={item.label}
                aspect="portrait"
                beforeSrc={item.beforeSrc}
                afterSrc={item.afterSrc}
                beforeAlt={`Placeholder photo standing in for a "before" case, sample layout only`}
                afterAlt={`Placeholder photo standing in for an "after" case, sample layout only`}
              />
            ))}
          </div>

          <p className="text-body mt-14 max-w-2xl text-(--color-ink-faint)">
            Interested in what a result might look like for your specific
            concern?{" "}
            <TextLink href={consultationHref}>Book a consultation</TextLink> to
            discuss comparable cases directly.
          </p>
        </Container>
      </Section>
    </main>
  );
}
