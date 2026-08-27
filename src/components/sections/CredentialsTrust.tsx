import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { credentials } from "@/config/credentials";

/**
 * Editorial credentials/trust section. A fact-sheet aside beside the
 * statement copy, not a badge grid or stat counters — deliberately avoids
 * any claim (years, institutions, case counts) not yet verified.
 */
export function CredentialsTrust(): React.ReactElement {
  return (
    <Section background="bg" spacing="lg">
      <Container width="wide">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <Eyebrow>Professional Foundation</Eyebrow>
            <h2 className="text-h1 mt-6 text-(--color-ink)">
              Experience shaped by surgery. Guided by aesthetics.
            </h2>
            <p className="text-body-lg mt-6 max-w-xl text-(--color-ink-muted)">
              Ten years in the surgical field, brought together with specialised
              aesthetic surgery training — applied with the same precision and
              individual attention to every consultation.
            </p>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <dl className="flex flex-col border-t border-(--color-border)">
              {credentials.map((credential) => (
                <div key={credential.label} className="border-b border-(--color-border) py-6">
                  <dt className="text-eyebrow">{credential.label}</dt>
                  <dd className="text-body mt-2 text-(--color-ink)">
                    {credential.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </Section>
  );
}
