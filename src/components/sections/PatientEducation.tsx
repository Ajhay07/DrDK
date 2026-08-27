import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { educationEntries } from "@/config/education";

/**
 * An editorial publication index — generous whitespace between entries
 * rather than divider rows, title shifts right and an arrow reveals on
 * hover/focus. No cards, no equal-height grid.
 */
export function PatientEducation(): React.ReactElement {
  return (
    <section className="bg-(--color-bg)">
      <Container width="wide" className="py-20 md:py-32">
        <span className="text-eyebrow">Reading &amp; Guides</span>
        <h2 className="text-display mt-6 max-w-2xl text-(--color-ink)">
          Understand before you decide.
        </h2>
        <p className="text-body-lg mt-6 max-w-xl text-(--color-ink-muted)">
          Choosing to undergo aesthetic surgery involves more than selecting a
          procedure. Explore clear, considered information about procedures,
          preparation, recovery and the questions worth asking.
        </p>

        <ol className="mt-16 flex flex-col gap-14 md:mt-24 md:gap-20">
          {educationEntries.map((entry) => (
            <li key={entry.slug}>
              <Link href={entry.href} data-cursor="Read" className="group block">
                <span aria-hidden="true" className="text-eyebrow text-(--color-ink-faint)">
                  {entry.number}
                </span>
                <h3 className="text-display mt-3 flex flex-wrap items-center gap-4 text-(--color-ink) transition-transform duration-(--duration-base) ease-(--ease-editorial) group-hover:translate-x-4">
                  {entry.title}
                  <span
                    aria-hidden="true"
                    className="text-h2 -translate-x-2 opacity-0 transition-all duration-(--duration-base) ease-(--ease-editorial) group-hover:translate-x-0 group-hover:opacity-100"
                  >
                    &#8594;
                  </span>
                </h3>
                <span className="text-body mt-3 block max-w-md text-(--color-ink-muted)">
                  {entry.description}
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
