import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { educationEntries } from "@/config/education";

/**
 * Editorial reading index for future patient-education content — large,
 * stacked titles rather than a card grid, so it reads as a table of
 * contents. Descriptions stay visible by default; hover/focus only adds a
 * directional cue and accent color, via pure CSS.
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

        <ol className="mt-16 border-t border-(--color-border) md:mt-20">
          {educationEntries.map((entry) => (
            <li key={entry.slug} className="border-b border-(--color-border)">
              <Link
                href={entry.href}
                data-cursor="Read"
                className="group flex flex-col gap-4 py-8 transition-colors duration-(--duration-base) ease-(--ease-editorial) md:flex-row md:items-baseline md:gap-10"
              >
                <span aria-hidden="true" className="text-small w-8 shrink-0 tabular-nums text-(--color-ink-faint)">
                  {entry.number}
                </span>
                <span className="flex-1">
                  <span className="text-h2 block text-(--color-ink) transition-colors duration-(--duration-base) ease-(--ease-editorial) group-hover:text-(--color-accent) group-focus-visible:text-(--color-accent)">
                    {entry.title}
                  </span>
                  <span className="text-body mt-2 block max-w-lg text-(--color-ink-muted)">
                    {entry.description}
                  </span>
                </span>
                <span
                  aria-hidden="true"
                  className="text-h3 shrink-0 text-(--color-ink-faint) transition-all duration-(--duration-base) ease-(--ease-editorial) group-hover:translate-x-1 group-hover:text-(--color-accent) group-focus-visible:translate-x-1 group-focus-visible:text-(--color-accent)"
                >
                  &#8594;
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
