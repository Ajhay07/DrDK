import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { TextLink } from "@/components/ui/TextLink";
import { consultationHref } from "@/config/navigation";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Before & After Gallery",
  description: "A gallery of patient outcomes, shared with informed consent.",
  alternates: { canonical: "/gallery" },
};

const placeholderCases = ["Case 01", "Case 02", "Case 03", "Case 04"];

export default function GalleryPage(): React.ReactElement {
  return (
    <main id="main-content" className="flex-1">
      <Section spacing="xl">
        <Container>
          <PageHeader
            eyebrow="Before &amp; After"
            title="Results, shared with consent."
            description="Every case shown here is included only with the patient's informed consent. This gallery is being prepared and will be populated with real cases."
          />

          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {placeholderCases.map((label) => (
              <MediaPlaceholder key={label} aspect="portrait" label={label} alt={`${label} — coming soon`} />
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
