import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Magnetic } from "@/components/interactive/Magnetic";
import { consultationHref, proceduresHref } from "@/config/navigation";

/**
 * Closing homepage section. Echoes the hero's top masthead row (eyebrow +
 * location) as a deliberate bookend, but inverted onto the accent color and
 * left-aligned rather than centered — a flowing editorial closing
 * statement rather than a boxed dark CTA banner.
 */
export function FinalConsultationCTA(): React.ReactElement {
  return (
    <section className="bg-(--color-accent) text-(--color-accent-ink)">
      <Container width="wide" className="py-24 md:py-40">
        <div className="flex items-baseline justify-between">
          <Eyebrow className="text-(--color-accent-ink) opacity-70">
            Begin with a Conversation
          </Eyebrow>
          <span className="text-eyebrow text-(--color-accent-ink) opacity-70">Chennai, India</span>
        </div>

        <h2 className="text-display mt-10 max-w-4xl">
          Every decision begins with understanding.
        </h2>

        <p className="text-body-lg mt-6 max-w-xl opacity-80">
          There is no obligation in a first conversation — only the space to
          discuss your goals and concerns, and to understand what is
          realistically possible before any decision is made.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Magnetic data-cursor="Open">
            <a
              href={consultationHref}
              className="text-button inline-flex w-full items-center justify-center rounded-(--radius-sm) bg-(--color-accent-ink) px-6 py-3 text-(--color-accent) transition-colors duration-(--duration-fast) ease-(--ease-editorial) hover:bg-white sm:w-auto"
            >
              Book a Consultation
            </a>
          </Magnetic>
          <Magnetic data-cursor="Explore">
            <a
              href={proceduresHref}
              className="text-button inline-flex w-full items-center justify-center rounded-(--radius-sm) border border-(--color-accent-ink) px-6 py-3 text-(--color-accent-ink) opacity-80 transition-opacity duration-(--duration-fast) ease-(--ease-editorial) hover:opacity-100 sm:w-auto"
            >
              Explore Procedures
            </a>
          </Magnetic>
        </div>
      </Container>
    </section>
  );
}
