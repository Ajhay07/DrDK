import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Book a Consultation",
  description: "Begin with a conversation about your goals and concerns.",
  alternates: { canonical: "/consultation" },
};

export default function ConsultationPage(): React.ReactElement {
  return (
    <main id="main-content" className="flex-1">
      <Section spacing="xl">
        <Container>
          <PageHeader
            eyebrow="Begin with a Conversation"
            title="Book a Consultation"
            description="A consultation is the starting point for understanding your goals, concerns and medical suitability before any decision is made."
          />

          <p className="text-body mt-10 max-w-2xl text-(--color-ink-faint)">
            Details for scheduling a consultation will be published here soon.
          </p>
        </Container>
      </Section>
    </main>
  );
}
