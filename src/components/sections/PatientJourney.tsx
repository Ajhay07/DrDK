import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { JourneyExplorer } from "@/components/interactive/JourneyExplorer";
import { journeyStages } from "@/config/journey";

/**
 * The Patient Journey section. Static copy is server-rendered; only the
 * stage exploration itself (JourneyExplorer) is a Client Component.
 */
export function PatientJourney(): React.ReactElement {
  return (
    <Section background="bg-secondary" spacing="lg">
      <Container width="wide">
        <div className="max-w-2xl">
          <Eyebrow>The Journey</Eyebrow>
          <h2 className="text-h1 mt-6 text-(--color-ink)">
            From the first conversation to recovery.
          </h2>
          <p className="text-body-lg mt-6 text-(--color-ink-muted)">
            Aesthetic surgery is a process, not a single moment. Every journey
            begins with understanding your goals, discussing appropriate options
            and making informed decisions.
          </p>
        </div>

        <div className="mt-16 md:mt-20">
          <JourneyExplorer stages={journeyStages} />
        </div>
      </Container>
    </Section>
  );
}
