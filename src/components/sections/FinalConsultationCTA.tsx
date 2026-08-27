import { Container } from "@/components/ui/Container";
import { Magnetic } from "@/components/interactive/Magnetic";
import { consultationHref, proceduresHref } from "@/config/navigation";

/**
 * The closing screen — an immersive warm-clay environment (the fourth and
 * final environmental colour) where the consultation action is a word
 * inside the sentence itself, not a boxed button. A conclusion, not a
 * banner.
 */
export function FinalConsultationCTA(): React.ReactElement {
  return (
    <section className="bg-(--color-clay) text-(--color-ink)">
      <Container width="wide" className="py-24 md:py-40">
        <div className="flex items-baseline justify-between">
          <span className="text-eyebrow text-(--color-ink) opacity-70">Begin with a Conversation</span>
          <span className="text-eyebrow text-(--color-ink) opacity-70">Chennai, India</span>
        </div>

        <p className="text-hero mt-10 max-w-5xl text-(--color-ink)">
          Every decision begins with{" "}
          <Magnetic data-cursor="Open" className="inline-block">
            <a
              href={consultationHref}
              className="italic underline decoration-2 underline-offset-8 transition-opacity duration-(--duration-fast) ease-(--ease-editorial) hover:opacity-70"
            >
              understanding
            </a>
          </Magnetic>
          .
        </p>

        <div className="mt-12">
          <Magnetic data-cursor="Explore">
            <a
              href={proceduresHref}
              className="text-eyebrow inline-flex items-center gap-2 border-b border-(--color-ink) pb-0.5 text-(--color-ink) transition-opacity duration-(--duration-fast) ease-(--ease-editorial) hover:opacity-70"
            >
              Explore Procedures
              <span aria-hidden="true">&#8594;</span>
            </a>
          </Magnetic>
        </div>
      </Container>
    </section>
  );
}
