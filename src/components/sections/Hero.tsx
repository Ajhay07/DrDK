import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { consultationHref, proceduresHref } from "@/config/navigation";

/**
 * Homepage hero. Server-rendered; the only motion is CSS entrance reveals
 * (see .motion-fade-in in globals.css), which need no client JavaScript.
 *
 * Composition is grid-first, not image-first: a hairline masthead row
 * anchors the top and bottom of the hero (echoing the section eyebrow rows
 * used throughout the homepage), the headline carries the visual weight,
 * and the portrait — a 150×150 source — sits as a small, deliberately
 * placed element beside it rather than stretched into a large frame.
 */
export function Hero(): React.ReactElement {
  return (
    <section className="bg-(--color-bg)">
      <Container width="wide">
        <div className="flex items-baseline justify-between border-t border-b border-(--color-border) py-5">
          <Eyebrow>Aesthetic &amp; Plastic Surgery</Eyebrow>
          <span className="text-eyebrow">Chennai, India</span>
        </div>

        <div className="grid grid-cols-1 gap-10 pt-14 pb-10 lg:grid-cols-12 lg:gap-8 lg:pt-20">
          <div className="lg:col-span-8">
            <h1 className="text-display text-(--color-ink) motion-fade-in">
              Precision in surgery.
              <br />
              <span className="italic">Individuality</span> in aesthetics.
            </h1>
          </div>

          <div
            className="flex justify-start motion-fade-in lg:col-span-4 lg:justify-end lg:pt-2"
            style={{ animationDelay: "80ms" }}
          >
            <div className="relative h-44 w-36 overflow-hidden bg-(--color-bg-secondary) sm:h-48 sm:w-40">
              <Image
                src="/images/doctor/dr-dinesh-portrait.png"
                alt="Portrait of Dr. Dinesh Kumar, plastic surgeon"
                fill
                priority
                sizes="(min-width: 640px) 10rem, 9rem"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 pb-16 lg:grid-cols-12 lg:gap-8 lg:pb-24">
          <div className="lg:col-span-6">
            <p
              className="text-body-lg text-(--color-ink-muted) motion-fade-in"
              style={{ animationDelay: "160ms" }}
            >
              A refined approach to aesthetic and reconstructive surgery, centred
              around proportion, individuality and informed decisions.
            </p>

            <div
              className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center motion-fade-in"
              style={{ animationDelay: "240ms" }}
            >
              <Button href={consultationHref} variant="primary" className="w-full sm:w-auto">
                Book a Consultation
              </Button>
              <Button href={proceduresHref} variant="secondary" className="w-full sm:w-auto">
                Explore Procedures
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
