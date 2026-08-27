import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { educationEntries } from "@/config/education";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Patient Education",
  description:
    "Clear, considered information about procedures, preparation, recovery and the questions worth asking.",
  alternates: { canonical: "/education" },
};

export default function EducationPage(): React.ReactElement {
  return (
    <main id="main-content" className="flex-1">
      <Section spacing="xl">
        <Container width="wide">
          <PageHeader
            eyebrow="Patient Education"
            title="Understand before you decide."
            description="Choosing to undergo aesthetic surgery involves more than selecting a procedure. Explore clear, considered information here."
          />

          <ol className="mt-16 flex flex-col gap-14 md:mt-24 md:gap-20">
            {educationEntries.map((entry) => (
              <li key={entry.slug}>
                <Link href={entry.href} data-cursor="Read" className="group block">
                  <span aria-hidden="true" className="text-eyebrow text-(--color-ink-faint)">
                    {entry.number}
                  </span>
                  <h2 className="text-display mt-3 flex flex-wrap items-center gap-4 text-(--color-ink) transition-transform duration-(--duration-base) ease-(--ease-editorial) group-hover:translate-x-4">
                    {entry.title}
                    <span
                      aria-hidden="true"
                      className="text-h2 -translate-x-2 opacity-0 transition-all duration-(--duration-base) ease-(--ease-editorial) group-hover:translate-x-0 group-hover:opacity-100"
                    >
                      &#8594;
                    </span>
                  </h2>
                  <span className="text-body mt-3 block max-w-md text-(--color-ink-muted)">
                    {entry.description}
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </Container>
      </Section>
    </main>
  );
}
