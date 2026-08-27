import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";

interface Pillar {
  title: string;
  description: string;
}

const pillars: Pillar[] = [
  {
    title: "Proportion",
    description:
      "Every decision begins with balance — facial or bodily proportion — rather than a fixed idea of beauty.",
  },
  {
    title: "Individuality",
    description:
      "Outcomes are designed around your own features and goals, not a template result repeated across patients.",
  },
  {
    title: "Informed Decisions",
    description:
      "Every consultation prioritises clear, honest explanation, so you can decide with confidence and time.",
  },
];

/**
 * Editorial statement section expanding the hero's philosophy line into
 * three considered pillars. Server-rendered, no interaction required.
 */
export function Philosophy(): React.ReactElement {
  return (
    <Section background="bg-secondary" spacing="lg">
      <Container width="wide">
        <Eyebrow>Philosophy</Eyebrow>
        <h2 className="text-h1 mt-6 max-w-3xl text-(--color-ink)">
          Three considerations guide{" "}
          <span className="italic">every</span> surgical decision.
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-12 border-t border-(--color-border) pt-10 md:mt-20 md:grid-cols-3 md:gap-8">
          {pillars.map((pillar, index) => (
            <div key={pillar.title}>
              <span
                aria-hidden="true"
                className="font-(--font-display) block text-3xl italic text-(--color-ink-faint)"
              >
                0{index + 1}
              </span>
              <h3 className="text-h3 mt-4 text-(--color-ink)">{pillar.title}</h3>
              <p className="text-body mt-3 text-(--color-ink-muted)">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
