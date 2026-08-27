import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { educationEntries } from "@/config/education";

/**
 * Editorial gateway into future patient-education content. Deliberately a
 * three-column entry-point layout (not ExploreConcerns' full-width rows):
 * description is always visible, hover/focus only reveals a directional
 * "Explore" cue and an accent left-border, via pure CSS.
 */
export function PatientEducation(): React.ReactElement {
  return (
    <Section background="bg-secondary" spacing="lg">
      <Container width="wide">
        <div className="max-w-2xl">
          <Eyebrow>Patient Education</Eyebrow>
          <h2 className="text-h1 mt-6 text-(--color-ink)">Understand before you decide.</h2>
          <p className="text-body-lg mt-6 text-(--color-ink-muted)">
            Choosing to undergo aesthetic surgery involves more than selecting a
            procedure. Explore clear, considered information about procedures,
            preparation, recovery and the questions worth asking.
          </p>
        </div>

        <ol className="mt-16 grid grid-cols-1 gap-10 border-t border-(--color-border) pt-10 md:mt-20 md:grid-cols-3 md:gap-12">
          {educationEntries.map((entry) => (
            <li key={entry.number}>
              <Link
                href={entry.href}
                className="group block border-l-2 border-transparent pl-6 transition-colors duration-(--duration-base) ease-(--ease-editorial) hover:border-(--color-accent) focus-visible:border-(--color-accent)"
              >
                <span aria-hidden="true" className="text-small text-(--color-ink-faint)">
                  {entry.number}
                </span>
                <h3 className="text-h3 mt-3 text-(--color-ink) transition-colors duration-(--duration-base) ease-(--ease-editorial) group-hover:text-(--color-accent) group-focus-visible:text-(--color-accent)">
                  {entry.title}
                </h3>
                <p className="text-body mt-3 text-(--color-ink-muted)">{entry.description}</p>
                <span className="mt-6 inline-flex -translate-x-1 items-center gap-2 text-small text-(--color-ink-faint) opacity-0 transition-all duration-(--duration-base) ease-(--ease-editorial) group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100">
                  Explore
                  <span aria-hidden="true">&#8594;</span>
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
