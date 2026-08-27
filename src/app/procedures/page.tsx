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

          <ul className="mt-16 md:mt-24">
            {concerns.map((concern, index) => (
              <li key={concern.slug} className="border-b border-(--color-border)">
                <Link
                  href={`/procedures/${concern.slug}`}
                  data-cursor="Explore"
                  className="group flex flex-col gap-2 py-4 md:flex-row md:items-baseline md:gap-6 md:py-6"
                >
                  <span aria-hidden="true" className="text-index w-16 shrink-0 md:w-24">
                    0{index + 1}
                  </span>
                  <span className="text-giant flex-1 text-(--color-ink) transition-colors duration-(--duration-base) ease-(--ease-editorial) group-hover:text-(--color-accent)">
                    {concern.label}
                  </span>
                  <span className="text-body pl-16 text-(--color-ink-muted) md:hidden">
                    {concern.descriptor}
                  </span>
                  <span className="text-body hidden max-w-xs -translate-x-4 text-(--color-ink-muted) opacity-0 transition-all duration-(--duration-base) ease-(--ease-editorial) group-hover:translate-x-0 group-hover:opacity-100 md:block">
                    {concern.descriptor}
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
