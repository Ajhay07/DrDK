import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { concerns } from "@/config/concerns";

/**
 * A huge numbered typographic index rather than rows/cards. Desktop hover
 * reveals the descriptor as a side caption; mobile shows it inline below
 * the label by default since there is no hover to depend on.
 */
export function ExploreConcerns(): React.ReactElement {
  return (
    <section className="bg-(--color-bg)">
      <Container width="wide" className="py-20 md:py-32">
        <div className="flex items-baseline justify-between border-b border-(--color-border) pb-6">
          <span className="text-eyebrow">03 &mdash; Explore</span>
          <span className="text-eyebrow hidden sm:inline">Where would you like to begin?</span>
        </div>

        <ul>
          {concerns.map((concern, index) => (
            <li key={concern.slug} className="group border-b border-(--color-border)">
              <Link
                href={`/procedures/${concern.slug}`}
                data-cursor="Explore"
                className="flex flex-col gap-2 py-4 md:flex-row md:items-baseline md:gap-6 md:py-6"
              >
                <span
                  aria-hidden="true"
                  className="text-index w-16 shrink-0 md:w-24"
                >
                  0{index + 1}
                </span>
                <span className="text-giant flex-1 text-(--color-ink) transition-colors duration-(--duration-base) ease-(--ease-editorial) group-hover:text-(--color-accent)">
                  {concern.label}
                </span>
                <span className="text-body pl-16 text-(--color-ink-muted) md:hidden">
                  {concern.descriptor}
                </span>
                <span className="text-body hidden max-w-xs -translate-x-4 text-(--color-ink-muted) opacity-0 transition-all duration-(--duration-base) ease-(--ease-editorial) group-hover:translate-x-0 group-hover:opacity-100 md:block">
                  {concern.descriptor}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
