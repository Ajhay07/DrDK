import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ConcernIcon } from "@/components/ui/ConcernIcons";
import { concerns } from "@/config/concerns";

/**
 * Compact grid index of procedure areas. Previously one giant full-width
 * heading per area (clamp up to 7.5rem) stacked vertically — six screens
 * of scroll to show six words. A 2/3-column grid keeps the editorial
 * typographic feel at a size that reads as considered rather than sprawling.
 */
export function ExploreConcerns(): React.ReactElement {
  return (
    <section className="bg-(--color-bg)">
      <Container width="wide" className="py-20 md:py-32">
        <div className="flex items-baseline justify-between border-b border-(--color-border) pb-6">
          <span className="text-eyebrow">03 &mdash; Explore</span>
          <span className="text-eyebrow hidden sm:inline">Where would you like to begin?</span>
        </div>

        <ul className="mt-px grid grid-cols-1 gap-px bg-(--color-border) sm:grid-cols-2 lg:grid-cols-3">
          {concerns.map((concern, index) => (
            <li key={concern.slug} className="group bg-(--color-bg)">
              <Link
                href={`/procedures/${concern.slug}`}
                data-cursor="Explore"
                className="flex h-full flex-col gap-6 p-8"
              >
                <div className="flex items-start justify-between">
                  <span className="text-index text-2xl text-(--color-ink-faint)">0{index + 1}</span>
                  <ConcernIcon
                    slug={concern.slug}
                    className="h-9 w-9 shrink-0 text-(--color-ink-faint) transition-colors duration-(--duration-base) ease-(--ease-editorial) group-hover:text-(--color-accent)"
                  />
                </div>

                <div>
                  <span className="font-(--font-display) text-3xl text-(--color-ink) transition-colors duration-(--duration-base) ease-(--ease-editorial) group-hover:text-(--color-accent)">
                    {concern.label}
                  </span>
                  <p className="text-body mt-2 text-(--color-ink-muted)">{concern.descriptor}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
