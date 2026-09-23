import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Magnetic } from "@/components/interactive/Magnetic";
import { consultationHref, proceduresHref } from "@/config/navigation";

/**
 * Homepage hero — two-column composition. Now uses a real, properly
 * resolved portrait (~445px source, not the earlier 150px placeholder),
 * sized close to its native resolution so it finally reads as a
 * deliberate photograph rather than a stretched thumbnail.
 */
export function Hero(): React.ReactElement {
  return (
    <section className="bg-(--color-bg)">
      <Container width="wide">
        <div className="flex items-baseline justify-between border-t border-b border-(--color-border) py-5">
          <span className="text-eyebrow">Consultant Plastic &amp; Cosmetic Surgeon</span>
          <span className="text-eyebrow">Chennai, India</span>
        </div>

        <div className="grid grid-cols-1 gap-12 py-16 lg:grid-cols-12 lg:gap-8 lg:py-24">
          <div className="flex flex-col justify-center lg:col-span-7">
            <h1 className="text-display text-(--color-ink) motion-fade-in">
              Refined results.
              <br />
              <span className="italic">Natural</span> confidence.
            </h1>

            <p
              className="text-body-lg mt-8 max-w-lg text-(--color-ink-muted) motion-fade-in"
              style={{ animationDelay: "100ms" }}
            >
              Personalised plastic and cosmetic surgery focused on natural-looking
              results, precision and patient safety.
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
                  Explore Treatments
                </Button>
              </Magnetic>
            </div>

            <p
              className="text-eyebrow mt-14 motion-fade-in"
              style={{ animationDelay: "240ms" }}
            >
              Dr. Dinesh Kumar &middot; MBBS &middot; MS (General Surgery) &middot; MCh
              (Plastic Surgery)
              <br />
              Advanced Fellowship Training in Cosmetic Surgery &middot; Akademikliniken,
              Stockholm
            </p>
          </div>

          <div
            className="flex justify-center motion-fade-in lg:col-span-5 lg:justify-end"
            style={{ animationDelay: "220ms" }}
          >
            <figure className="w-full max-w-sm">
              <div className="relative aspect-square overflow-hidden bg-(--color-bg-secondary)">
                <Image
                  src="/images/doctor/dr4.jpg"
                  alt="Dr. Dinesh Kumar, plastic and aesthetic surgeon"
                  fill
                  priority
                  sizes="(min-width: 1024px) 24rem, 20rem"
                  className="object-cover object-top"
                />
              </div>
              <figcaption className="mt-4 flex items-baseline justify-between border-t border-(--color-border) pt-4">
                <span className="font-(--font-display) text-lg italic text-(--color-ink)">
                  Dr. Dinesh Kumar
                </span>
                <span className="text-eyebrow">Consultant Surgeon</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </Container>
    </section>
  );
}
