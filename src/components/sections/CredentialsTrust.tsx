import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { credentials } from "@/config/credentials";

/**
 * Editorial credentials/trust section, presented as a structured
 * professional record — indexed rows with a label/value alignment — rather
 * than a badge wall or feature-card grid. Deliberately avoids any claim
 * (years, institutions, case counts) not yet verified.
 */
export function CredentialsTrust(): React.ReactElement {
  return (
    <Section background="bg" spacing="lg">
      <Container width="wide">
        <div className="max-w-2xl">
          <Eyebrow>Professional Foundation</Eyebrow>
          <h2 className="text-h1 mt-6 text-(--color-ink)">
            Experience shaped by surgery. Guided by aesthetics.
          </h2>
          <p className="text-body-lg mt-6 text-(--color-ink-muted)">
            Ten years in the surgical field, brought together with specialised
            aesthetic surgery training — applied with the same precision and
            individual attention to every consultation.
          </p>
        </div>

        <dl className="mt-14 border-t border-(--color-border) md:mt-20">
          {credentials.map((credential, index) => (
            <div
              key={credential.label}
              className="grid grid-cols-1 gap-2 border-b border-(--color-border) py-6 md:grid-cols-12 md:items-baseline md:gap-8 md:py-8"
            >
              <span aria-hidden="true" className="text-small hidden tabular-nums text-(--color-ink-faint) md:col-span-1 md:block">
                0{index + 1}
              </span>
              <dt className="text-h3 text-(--color-ink) md:col-span-4">{credential.label}</dt>
              <dd className="text-body text-(--color-ink-muted) md:col-span-7">
                {credential.description}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </Section>
  );
}
