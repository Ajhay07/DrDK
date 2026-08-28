import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

const principles: { title: string; italic?: boolean; accent?: boolean; body: string }[] = [
  {
    title: "Proportion.",
    body: "Every decision begins with balance — facial or bodily proportion — rather than a fixed idea of beauty.",
  },
  {
    title: "Individuality.",
    italic: true,
    body: "Outcomes are designed around your own features and goals, not a template result repeated across patients.",
  },
  {
    title: "Informed decisions.",
    accent: true,
    body: "Every consultation prioritises clear, honest explanation, so you can decide with confidence and time.",
  },
];

/**
 * A visual manifesto — three principles side by side rather than three
 * sequential full-screen "scenes" (which needed 3x viewport height to
 * read). Same restrained, uncarded compositional feel, sized to fit
 * one screen.
 */
export function Philosophy(): React.ReactElement {
  return (
    <section className="bg-(--color-surface) lg:flex lg:min-h-[calc(100vh-var(--nav-height))] lg:flex-col lg:justify-center">
      <Container width="wide" className="py-16 md:py-24 lg:py-8">
        <Eyebrow>04 &mdash; Philosophy</Eyebrow>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:mt-10 lg:grid-cols-3 lg:gap-12">
          {principles.map(({ title, italic, accent, body }) => (
            <div key={title} className="border-t border-(--color-border) pt-6">
              <h2
                className={`font-(family-name:--font-display) ${italic ? "italic" : ""} ${accent ? "text-(--color-accent)" : "text-(--color-ink)"}`}
                style={{ fontSize: "clamp(2rem, 1.4rem + 2vw, 3rem)", lineHeight: 1.02, letterSpacing: "-0.01em" }}
              >
                {title}
              </h2>
              <p className="text-body mt-4 text-(--color-ink-muted)">{body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
