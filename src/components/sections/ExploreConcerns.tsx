import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ConcernIcon } from "@/components/ui/ConcernIcons";
import { concerns } from "@/config/concerns";

/**
 * Existing procedure-area photography, reused here as each card's image.
 * No standalone "nose" photograph exists in the asset library, so that
 * card falls back to the face photo (the nose sits within that same
 * frame) rather than sourcing a new, unlicensed stock image.
 */
const concernImages: Record<string, string> = {
  face: "/images/procedures/face-explorer.jpg",
  nose: "/images/procedures/face-explorer.jpg",
  eyes: "/images/procedures/eyes-explorer.jpg",
  breast: "/images/procedures/breast-explorer.jpg",
  body: "/images/procedures/body-explorer.jpg",
  men: "/images/procedures/men-explorer.jpg",
};

/**
 * Compact grid index of procedure areas. Previously one giant full-width
 * heading per area (clamp up to 7.5rem) stacked vertically — six screens
 * of scroll to show six words. A 2/3-column grid keeps the editorial
 * typographic feel at a size that reads as considered rather than sprawling.
 */
export function ExploreConcerns(): React.ReactElement {
  return (
    <section className="bg-(--color-bg)">
      <Container width="wide" className="py-16 md:py-24">
        <div className="flex items-baseline justify-between border-b border-(--color-border) pb-6">
          <span className="text-eyebrow">03 &mdash; Explore</span>
          <span className="text-eyebrow hidden sm:inline">Where would you like to begin?</span>
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {concerns.map((concern, index) => (
            <li key={concern.slug} className="group">
              <Link
                href={`/procedures/${concern.slug}`}
                data-cursor="Explore"
                className="flex h-full flex-col overflow-hidden rounded-(--radius-lg) border border-(--color-border) bg-(--color-bg) transition-colors duration-(--duration-base) ease-(--ease-editorial) hover:border-(--color-accent)"
              >
                <div className="relative h-44 w-full overflow-hidden">
                  <Image
                    src={concernImages[concern.slug]}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover grayscale-[10%] transition-transform duration-(--duration-slow) ease-(--ease-editorial) group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-(--color-bg) via-transparent to-(--color-bg)/10" />
                </div>

                <div className="flex flex-1 flex-col gap-6 p-8 pt-6">
                  <div className="flex items-start justify-between">
                    <span className="text-index text-2xl text-(--color-ink-faint)">0{index + 1}</span>
                    <ConcernIcon
                      slug={concern.slug}
                      className="h-9 w-9 shrink-0 text-(--color-ink-faint) transition-colors duration-(--duration-base) ease-(--ease-editorial) group-hover:text-(--color-accent)"
                    />
                  </div>

                  <div>
                    <span className="font-(family-name:--font-display) text-3xl text-(--color-ink) transition-colors duration-(--duration-base) ease-(--ease-editorial) group-hover:text-(--color-accent)">
                      {concern.label}
                    </span>
                    <p className="text-body mt-2 text-(--color-ink-muted)">{concern.descriptor}</p>
                  </div>

                  <span
                    aria-hidden="true"
                    className="mt-auto flex h-9 w-9 items-center justify-center rounded-full border border-(--color-border-strong) text-(--color-accent) transition-all duration-(--duration-base) ease-(--ease-editorial) group-hover:translate-x-1 group-hover:border-(--color-accent)"
                  >
                    &rarr;
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
