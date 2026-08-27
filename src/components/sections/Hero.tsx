import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { consultationHref, proceduresHref } from "@/config/navigation";

/**
 * Homepage hero. Server-rendered; the only motion is CSS entrance reveals
 * (see .motion-fade-in in globals.css), which need no client JavaScript.
 */
export function Hero(): React.ReactElement {
  return (
    <section className="relative overflow-hidden bg-(--color-bg)">
      <Container width="wide" className="pt-14 pb-20 md:pt-20 md:pb-28 lg:pt-24 lg:pb-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="order-1 flex flex-col justify-center lg:order-1 lg:col-span-7">
            <Eyebrow className="motion-fade-in">Aesthetic &amp; Plastic Surgery</Eyebrow>

            <h1
              className="text-display mt-6 text-(--color-ink) motion-fade-in"
              style={{ animationDelay: "80ms" }}
            >
              Precision in Surgery.
              <br />
              <span className="italic">Individuality</span> in Aesthetics.
            </h1>

            <p
              className="text-body-lg mt-8 max-w-[34rem] text-(--color-ink-muted) motion-fade-in"
              style={{ animationDelay: "160ms" }}
            >
              A refined approach to aesthetic and reconstructive surgery, centred
              around proportion, individuality and informed decisions.
            </p>

            <div
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center motion-fade-in"
              style={{ animationDelay: "240ms" }}
            >
              <Button href={consultationHref} variant="primary" className="w-full sm:w-auto">
                Book a Consultation
              </Button>
              <Button href={proceduresHref} variant="secondary" className="w-full sm:w-auto">
                Explore Procedures
              </Button>
            </div>

            <p
              className="text-small mt-12 text-(--color-ink-faint) motion-fade-in"
              style={{ animationDelay: "320ms" }}
            >
              Chennai, India
            </p>
          </div>

          <div className="order-2 lg:order-2 lg:col-span-5 lg:pt-20 lg:[margin-right:calc(var(--gutter)*-1)]">
            <MediaPlaceholder
              aspect="portrait"
              label="Dr. Dinesh Kumar — portrait forthcoming"
              className="w-full max-w-sm mx-auto lg:mx-0 lg:ml-auto lg:max-w-none"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
