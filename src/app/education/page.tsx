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
        <Container>
          <PageHeader
            eyebrow="Patient Education"
            title="Understand before you decide."
            description="Choosing to undergo aesthetic surgery involves more than selecting a procedure. Explore clear, considered information here."
          />

          <ol className="mt-14 grid grid-cols-1 gap-10 border-t border-(--color-border) pt-10 md:mt-20 md:grid-cols-3 md:gap-12">
            {educationEntries.map((entry) => (
              <li key={entry.slug}>
                <Link
                  href={entry.href}
                  className="group block border-l-2 border-transparent pl-6 transition-colors duration-(--duration-base) ease-(--ease-editorial) hover:border-(--color-accent) focus-visible:border-(--color-accent)"
                >
                  <span aria-hidden="true" className="text-small text-(--color-ink-faint)">
                    {entry.number}
                  </span>
                  <h2 className="text-h3 mt-3 text-(--color-ink) transition-colors duration-(--duration-base) ease-(--ease-editorial) group-hover:text-(--color-accent) group-focus-visible:text-(--color-accent)">
                    {entry.title}
                  </h2>
                  <p className="text-body mt-3 text-(--color-ink-muted)">{entry.description}</p>
                </Link>
              </li>
            ))}
          </ol>
        </Container>
      </Section>
    </main>
  );
}
