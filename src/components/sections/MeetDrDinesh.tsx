import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { Section } from "@/components/ui/Section";
import { TextLink } from "@/components/ui/TextLink";
import { doctorIntro } from "@/config/about";

/**
 * Editorial introduction to Dr. Dinesh. Mirrors the hero's asymmetric split
 * but reversed (media left, bleeding to the left edge) and with a more
 * intimate, personal tone than the structured sections above it.
 */
export function MeetDrDinesh(): React.ReactElement {
  return (
    <Section background="bg" spacing="lg">
      <Container width="wide">
        <div className="max-w-2xl">
          <Eyebrow>{doctorIntro.eyebrow}</Eyebrow>
          <h2 className="text-h1 mt-6 text-(--color-ink)">{doctorIntro.headline}</h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:mt-20 lg:grid-cols-12 lg:items-start lg:gap-8">
          <div className="order-1 lg:col-span-5 lg:[margin-left:calc(var(--gutter)*-1)]">
            <MediaPlaceholder
              aspect="portrait"
              label="Dr. Dinesh Kumar — editorial portrait forthcoming"
              className="w-full"
            />
          </div>

          <div className="order-2 lg:col-span-6 lg:col-start-7 lg:pt-6">
            {doctorIntro.paragraphs.map((paragraph, index) => (
              <p
                key={paragraph}
                className={`text-body-lg text-(--color-ink-muted) ${index > 0 ? "mt-6" : ""}`}
              >
                {paragraph}
              </p>
            ))}

            <p className="font-(--font-display) mt-10 text-lg italic text-(--color-ink)">
              {doctorIntro.signature}
            </p>

            <div className="mt-10">
              <TextLink href={doctorIntro.ctaHref}>{doctorIntro.ctaLabel}</TextLink>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
