import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { locations } from "@/config/locations";
import { consultationHref } from "@/config/navigation";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Locations",
  description: "Consultation locations for Dr. Dinesh Kumar across Chennai.",
  alternates: { canonical: "/locations" },
};

export default function LocationsPage(): React.ReactElement {
  return (
    <main id="main-content" className="flex-1">
      <Section spacing="xl">
        <Container>
          <PageHeader
            eyebrow="Locations"
            title="Consultation locations."
            description="Dr. Dinesh Kumar consults across the following hospitals and clinics in Chennai. Book a consultation to confirm the location and next available appointment."
          />

          <ul className="mt-14 max-w-2xl border-t border-(--color-border)">
            {locations.map((location, index) => (
              <li key={location.name} className="border-b border-(--color-border) py-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <span aria-hidden="true" className="text-small tabular-nums text-(--color-ink-faint)">
                      0{index + 1}
                    </span>
                    <h2 className="text-h3 mt-1 text-(--color-ink)">{location.name}</h2>
                    <p className="text-body mt-1 text-(--color-ink-muted)">{location.area}</p>
                    <p className="text-body mt-1 text-(--color-ink-faint)">{location.address}</p>
                  </div>
                  <Button href={consultationHref} variant="secondary" className="shrink-0">
                    Book a Consultation
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    </main>
  );
}
