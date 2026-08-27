import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { consultationHref, proceduresHref } from "@/config/navigation";

/**
 * Closing homepage section. Deliberately distinct from every section above
 * it — a centered, full-width, accent-dark composition rather than another
 * asymmetric editorial split — so it reads as the natural conclusion.
 */
export function FinalConsultationCTA(): React.ReactElement {
  return (
    <section className="bg-(--color-accent) text-(--color-accent-ink)">
      <Container className="py-24 text-center md:py-40">
        <div className="mx-auto max-w-2xl">
          <Eyebrow className="text-(--color-accent-ink) opacity-70">
            Begin with a Conversation
          </Eyebrow>

          <h2 className="text-h1 mt-6">Every decision begins with understanding.</h2>

          <p className="text-body-lg mx-auto mt-6 max-w-lg opacity-80">
            There is no obligation in a first conversation — only the space to
            discuss your goals and concerns, and to understand what is
            realistically possible before any decision is made.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={consultationHref}
              className="text-button inline-flex w-full items-center justify-center rounded-(--radius-sm) bg-(--color-accent-ink) px-6 py-3 text-(--color-accent) transition-colors duration-(--duration-fast) ease-(--ease-editorial) hover:bg-white sm:w-auto"
            >
              Book a Consultation
            </a>
            <a
              href={proceduresHref}
              className="text-button inline-flex w-full items-center justify-center rounded-(--radius-sm) border border-(--color-accent-ink) px-6 py-3 text-(--color-accent-ink) opacity-80 transition-opacity duration-(--duration-fast) ease-(--ease-editorial) hover:opacity-100 sm:w-auto"
            >
              Explore Procedures
            </a>
          </div>

          <p className="text-small mt-12 opacity-60">Chennai, India</p>
        </div>
      </Container>
    </section>
  );
}
