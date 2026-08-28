import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Magnetic } from "@/components/interactive/Magnetic";
import { consultationHref, proceduresHref } from "@/config/navigation";

/**
 * Homepage hero — a clear, safe two-column composition: headline and
 * supporting content on the left, the portrait given proper size and a
 * clean frame on the right (not squeezed into the typography). Simpler
 * and more conventional on purpose after the previous typography-woven
 * treatment repeatedly read as unpolished/broken rather than premium.
 */
export function Hero(): React.ReactElement {
  return (
    <section className="bg-(--color-bg)">
      <Container width="wide">
        <div className="flex items-baseline justify-between border-t border-b border-(--color-border) py-5">
          <span className="text-eyebrow">Plastic Surgeon</span>
          <span className="text-eyebrow">Chennai, India</span>
        </div>

        <div className="grid grid-cols-1 gap-12 py-16 lg:grid-cols-12 lg:gap-8 lg:py-24">
          <div className="flex flex-col justify-center lg:col-span-7">
            <h1 className="text-display text-(--color-ink) motion-fade-in">
              Precision in surgery.
              <br />
              <span className="italic">Individuality</span> in aesthetics.
            </h1>

            <p
              className="text-body-lg mt-8 max-w-lg text-(--color-ink-muted) motion-fade-in"
              style={{ animationDelay: "100ms" }}
            >
              A refined approach to aesthetic and reconstructive surgery, centred
              around proportion, individuality and informed decisions.
            </p>

            <div
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center motion-fade-in"
              style={{ animationDelay: "180ms" }}
            >
              <Magnetic data-cursor="Open">
                <Button href={consultationHref} variant="primary" className="w-full sm:w-auto">
                  Book a Consultation
                </Button>
              </Magnetic>
              <Magnetic data-cursor="Explore">
                <Button href={proceduresHref} variant="secondary" className="w-full sm:w-auto">
                  Explore Procedures
                </Button>
              </Magnetic>
            </div>
          </div>

          <div className="flex justify-center motion-fade-in lg:col-span-5 lg:justify-end" style={{ animationDelay: "220ms" }}>
            <figure className="w-full max-w-60">
              <div className="relative aspect-square overflow-hidden border border-(--color-border) bg-(--color-bg-secondary)">
                <Image
                  src="/images/doctor/dr-dinesh-portrait.png"
                  alt="Portrait of Dr. Dinesh Kumar, plastic surgeon"
                  fill
                  priority
                  sizes="15rem"
                  className="object-cover object-center"
                />
              </div>
              <figcaption className="mt-4 flex items-baseline justify-between border-t border-(--color-border) pt-4">
                <span className="font-(--font-display) text-lg italic text-(--color-ink)">
                  Dr. Dinesh Kumar
                </span>
                <span className="text-eyebrow">MBBS, MS, MCh</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </Container>
    </section>
  );
}
