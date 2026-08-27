import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { concerns } from "@/config/concerns";
import { educationEntries } from "@/config/education";
import { consultationHref, proceduresHref } from "@/config/navigation";

interface FooterLink {
  label: string;
  href: string;
}

function FooterGroup({ title, links }: { title: string; links: FooterLink[] }): React.ReactElement {
  return (
    <div>
      <p className="text-eyebrow">{title}</p>
      <ul className="mt-4 flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-small text-(--color-ink-muted) transition-colors duration-(--duration-fast) ease-(--ease-editorial) hover:text-(--color-accent)"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * Global footer. Static and server-rendered; navigation groups reuse the
 * existing concerns/education config so the site's real routes stay the
 * single source of truth instead of a duplicated link list.
 */
export function SiteFooter(): React.ReactElement {
  return (
    <footer className="border-t border-(--color-border) bg-(--color-bg)">
      <Container width="wide" className="py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4">
            <p className="font-(--font-display) text-lg text-(--color-ink)">Dr. Dinesh Kumar</p>
            <p className="text-small mt-2 text-(--color-ink-muted)">
              Aesthetic &amp; Plastic Surgery
            </p>
            <div className="mt-8">
              <Button href={consultationHref} variant="secondary">
                Book a Consultation
              </Button>
            </div>
          </div>

          <nav aria-label="Footer" className="md:col-span-7 md:col-start-6">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              <FooterGroup title="About" links={[{ label: "About Dr. Dinesh", href: "/about" }]} />
              <FooterGroup
                title="Procedures"
                links={[
                  { label: "All Procedures", href: proceduresHref },
                  ...concerns.map((concern) => ({
                    label: concern.label,
                    href: `/procedures/${concern.slug}`,
                  })),
                ]}
              />
              <FooterGroup
                title="Patient Education"
                links={[
                  { label: "Education Hub", href: "/education" },
                  ...educationEntries.map((entry) => ({
                    label: entry.title,
                    href: entry.href,
                  })),
                ]}
              />
            </div>
          </nav>
        </div>

        <div className="mt-16 border-t border-(--color-border) pt-8">
          <p className="text-small text-(--color-ink-faint)">
            &copy; {new Date().getFullYear()} Dr. Dinesh Kumar. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
