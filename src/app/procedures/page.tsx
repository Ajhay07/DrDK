import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ConcernIcon } from "@/components/ui/ConcernIcons";
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

          <ul className="mt-16 grid grid-cols-1 gap-px bg-(--color-border) sm:grid-cols-2 lg:grid-cols-3 md:mt-24">
            {concerns.map((concern, index) => (
              <li key={concern.slug} className="group bg-(--color-bg)">
                <Link
                  href={`/procedures/${concern.slug}`}
                  data-cursor="Explore"
                  className="flex h-full flex-col gap-6 p-8"
                >
                  <div className="flex items-start justify-between">
                    <span className="text-index text-2xl text-(--color-ink-faint)">0{index + 1}</span>
                    <ConcernIcon
                      slug={concern.slug}
                      className="h-9 w-9 shrink-0 text-(--color-ink-faint) transition-colors duration-(--duration-base) ease-(--ease-editorial) group-hover:text-(--color-accent)"
                    />
                  </div>

                  <div>
                    <span className="font-(--font-display) text-3xl text-(--color-ink) transition-colors duration-(--duration-base) ease-(--ease-editorial) group-hover:text-(--color-accent)">
                      {concern.label}
                    </span>
                    <p className="text-body mt-2 text-(--color-ink-muted)">{concern.descriptor}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    </main>
  );
}
