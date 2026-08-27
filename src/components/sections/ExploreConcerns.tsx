import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { concerns } from "@/config/concerns";

/**
 * Editorial procedure-entry list. Server-rendered; the hover/focus reveal
 * is pure CSS (group-hover/group-focus-visible), and on touch/mobile the
 * descriptor is shown by default since there is no hover state to depend on.
 */
export function ExploreConcerns(): React.ReactElement {
  return (
    <section className="bg-(--color-bg)">
      <Container className="py-20 md:py-32">
        <div className="max-w-2xl">
          <Eyebrow>Explore</Eyebrow>
          <h2 className="text-h2 mt-4 text-(--color-ink)">Where would you like to begin?</h2>
          <p className="text-body-lg mt-4 text-(--color-ink-muted)">
            Explore aesthetic and reconstructive procedures by the area or concern
            you would like to understand.
          </p>
        </div>

        <ul className="mt-14 border-t border-(--color-border) md:mt-20">
          {concerns.map((concern) => (
            <li key={concern.slug} className="border-b border-(--color-border)">
              <Link
                href={`/procedures/${concern.slug}`}
                className="group flex items-center justify-between gap-6 py-6 md:py-8 transition-colors duration-(--duration-fast) ease-(--ease-editorial)"
              >
                <span className="flex flex-1 flex-col gap-1 md:flex-row md:items-baseline md:gap-8">
                  <span className="text-h2 text-(--color-ink) transition-colors duration-(--duration-fast) ease-(--ease-editorial) group-hover:text-(--color-accent) group-focus-visible:text-(--color-accent)">
                    {concern.label}
                  </span>
                  <span
                    className="text-body text-(--color-ink-muted) opacity-100 transition-all duration-(--duration-base) ease-(--ease-editorial) md:-translate-x-2 md:opacity-0 md:group-hover:translate-x-0 md:group-hover:opacity-100 md:group-focus-visible:translate-x-0 md:group-focus-visible:opacity-100"
                  >
                    {concern.descriptor}
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
        </ul>
      </Container>
    </section>
  );
}
