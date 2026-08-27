import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { concerns } from "@/config/concerns";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Procedures",
  description:
    "Explore aesthetic and reconstructive procedures by the area or concern you would like to understand.",
  alternates: { canonical: "/procedures" },
};

export default function ProceduresPage(): React.ReactElement {
  return (
    <main id="main-content" className="flex-1">
      <Section spacing="xl">
        <Container width="wide">
          <PageHeader
            eyebrow="Procedures"
            title="Explore procedures by area."
            description="Every procedure begins with understanding your goals and concerns. Select an area to learn more."
          />

          <ul className="mt-14 border-t border-(--color-border) md:mt-20">
            {concerns.map((concern) => (
              <li key={concern.slug} className="border-b border-(--color-border)">
                <Link
                  href={`/procedures/${concern.slug}`}
                  data-cursor="Explore"
                  className="group flex items-center justify-between gap-6 py-6 transition-colors duration-(--duration-fast) ease-(--ease-editorial) md:py-8"
                >
                  <span className="flex flex-1 flex-col gap-1 md:flex-row md:items-baseline md:gap-8">
                    <span className="text-h2 text-(--color-ink) transition-colors duration-(--duration-fast) ease-(--ease-editorial) group-hover:text-(--color-accent) group-focus-visible:text-(--color-accent)">
                      {concern.label}
                    </span>
                    <span className="text-body text-(--color-ink-muted)">
                      {concern.descriptor}
                    </span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="text-h3 shrink-0 text-(--color-ink-faint) transition-all duration-(--duration-base) ease-(--ease-editorial) group-hover:translate-x-1 group-hover:text-(--color-accent) group-focus-visible:translate-x-1 group-focus-visible:text-(--color-accent)"
                  >
                    &#8594;
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    </main>
  );
}
