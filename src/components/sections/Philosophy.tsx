import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { philosophy } from "@/config/about";

/**
 * A visual manifesto in a soft-stone light environment, built around
 * Dr. Dinesh's own philosophy quote rather than an abstract theme.
 */
export function Philosophy(): React.ReactElement {
  return (
    <section className="bg-(--color-surface)">
      <Container width="wide" className="py-24 md:py-40">
        <Eyebrow>04 &mdash; Philosophy</Eyebrow>

        <blockquote className="mt-16 md:mt-20">
          <p className="text-hero max-w-4xl text-(--color-ink)">
            &ldquo;{philosophy.quote}&rdquo;
          </p>
        </blockquote>

        <div className="mt-20 grid grid-cols-1 gap-8 border-t border-(--color-border) pt-10 md:mt-28 md:grid-cols-4">
          {philosophy.supporting.map((point) => (
            <p key={point} className="text-body text-(--color-ink-muted)">
              {point}
            </p>
          ))}
        </div>
      </Container>
    </section>
  );
}
