import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { ConsultationForm } from "@/components/interactive/ConsultationForm";
import { contactInfo } from "@/config/contact";

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

          <div className="mt-14 grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-4">
              <span className="text-eyebrow">Direct Contact</span>
              <dl className="mt-6 flex flex-col gap-6">
                <div>
                  <dt className="text-eyebrow text-(--color-ink-faint)">Phone</dt>
                  <dd className="text-body mt-1">
                    <a href={contactInfo.phoneHref} className="text-(--color-ink) hover:text-(--color-accent)">
                      {contactInfo.phoneDisplay}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-eyebrow text-(--color-ink-faint)">WhatsApp</dt>
                  <dd className="text-body mt-1">
                    <a
                      href={contactInfo.whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-(--color-ink) hover:text-(--color-accent)"
                    >
                      {contactInfo.whatsappDisplay}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-eyebrow text-(--color-ink-faint)">Email</dt>
                  <dd className="text-body mt-1">
                    <a href={contactInfo.emailHref} className="text-(--color-ink) hover:text-(--color-accent)">
                      {contactInfo.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-eyebrow text-(--color-ink-faint)">Location</dt>
                  <dd className="text-body mt-1 text-(--color-ink)">
                    {contactInfo.addressLines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </dd>
                </div>
                <div>
                  <dt className="text-eyebrow text-(--color-ink-faint)">Hours</dt>
                  <dd className="text-body mt-1 text-(--color-ink)">{contactInfo.hours}</dd>
                </div>
              </dl>
            </div>

            <div className="md:col-span-7 md:col-start-6">
              <span className="text-eyebrow">Request a Consultation</span>
              <ConsultationForm />
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
