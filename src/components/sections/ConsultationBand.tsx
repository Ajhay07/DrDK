import { Container } from "@/components/ui/Container";
import { Magnetic } from "@/components/interactive/Magnetic";
import { consultationHref } from "@/config/navigation";

/**
 * A slim, repeated consultation prompt directly beneath the hero — echoing
 * the reference site's early, prominent call-to-action rather than saving
 * the only CTA for the very end of the page.
 */
export function ConsultationBand(): React.ReactElement {
  return (
    <section className="bg-(--color-bg)">
      <Container width="wide">
        <Magnetic className="block border-t border-b border-(--color-border)" data-cursor="Open">
          <a
            href={consultationHref}
            className="text-nav group flex items-center justify-between py-6 text-(--color-ink) transition-colors duration-(--duration-fast) ease-(--ease-editorial) hover:text-(--color-accent)"
          >
            <span className="text-h3">Book a Consultation</span>
            <span
              aria-hidden="true"
              className="text-h3 transition-transform duration-(--duration-base) ease-(--ease-editorial) group-hover:translate-x-2"
            >
              &#8594;
            </span>
          </a>
        </Magnetic>
      </Container>
    </section>
  );
}
