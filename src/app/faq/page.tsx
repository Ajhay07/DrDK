import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { faqs } from "@/config/faqs";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to common questions about consultations, procedures and recovery.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage(): React.ReactElement {
  return (
    <main id="main-content" className="flex-1">
      <Section spacing="xl">
        <Container>
          <PageHeader
            eyebrow="Frequently Asked Questions"
            title="Questions worth asking."
            description="General answers to common questions. For anything specific to your own situation, a consultation is the right next step."
          />

          <div className="mt-14 max-w-2xl border-t border-(--color-border)">
            {faqs.map((faq) => (
              <details key={faq.question} className="group border-b border-(--color-border) py-6">
                <summary className="text-h3 flex cursor-pointer list-none items-center justify-between gap-6 text-(--color-ink) marker:content-none">
                  {faq.question}
                  <span
                    aria-hidden="true"
                    className="text-h3 shrink-0 text-(--color-ink-faint) transition-transform duration-(--duration-fast) ease-(--ease-editorial) group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="text-body mt-4 max-w-xl text-(--color-ink-muted)">{faq.answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
