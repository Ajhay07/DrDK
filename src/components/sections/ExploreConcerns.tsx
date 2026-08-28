import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ConcernIcon } from "@/components/ui/ConcernIcons";
import { concerns } from "@/config/concerns";

/**
 * A huge numbered typographic index rather than rows/cards. On hover/focus,
 * desktop reveals a small line-mark graphic alongside the descriptor;
 * mobile shows both by default since there is no hover to depend on.
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
                className="flex flex-col gap-2 py-4 md:flex-row md:items-center md:gap-6 md:py-6"
              >
                <span
                  aria-hidden="true"
                  className="text-index w-16 shrink-0 self-start md:w-24 md:self-auto"
                >
                  0{index + 1}
                </span>
                <span className="text-giant flex-1 text-(--color-ink) transition-colors duration-(--duration-base) ease-(--ease-editorial) group-hover:text-(--color-accent)">
                  {concern.label}
                </span>

                <span className="flex items-center gap-4 pl-16 md:hidden">
                  <ConcernIcon slug={concern.slug} className="h-10 w-10 shrink-0 text-(--color-ink-faint)" />
                  <span className="text-body text-(--color-ink-muted)">{concern.descriptor}</span>
                </span>

                <span className="hidden shrink-0 items-center gap-4 -translate-x-4 opacity-0 transition-all duration-(--duration-base) ease-(--ease-editorial) group-hover:translate-x-0 group-hover:opacity-100 md:flex">
                  <ConcernIcon slug={concern.slug} className="h-12 w-12 shrink-0 text-(--color-accent)" />
                  <span className="text-body max-w-xs text-(--color-ink-muted)">{concern.descriptor}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
