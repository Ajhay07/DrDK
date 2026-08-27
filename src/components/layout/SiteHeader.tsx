"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Magnetic } from "@/components/interactive/Magnetic";
import { cn } from "@/lib/utils/cn";
import { consultationHref, primaryNavigation, siteName } from "@/config/navigation";

/**
 * Global masthead. A static, opaque editorial strip (no scroll-driven glass
 * pill) so it reads as a fixed page furniture line rather than a floating
 * SaaS navbar, and stays legible against every section environment behind
 * it. A Client Component only for the mobile menu and route-aware
 * active-link styling — see PROJECT_RULES.md §3.
 */
export function SiteHeader(): React.ReactElement {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuTriggerRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const menuPanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isMenuOpen) return;

    closeButtonRef.current?.focus();
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        return;
      }

      if (event.key !== "Tab") return;

      const focusable = menuPanelRef.current?.querySelectorAll<HTMLElement>(
        "a[href], button:not([disabled])",
      );
      if (!focusable || focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) menuTriggerRef.current?.focus();
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-(--color-border) bg-(--color-bg)">
      <div className="mx-auto grid w-full max-w-(--container-wide) grid-cols-2 items-center gap-4 px-(--gutter) py-4 md:grid-cols-12">
        <Link href="/" className="md:col-span-5">
          <span className="text-nav block text-(--color-ink)">{siteName.toUpperCase()}</span>
          <span className="text-eyebrow mt-1 block">Plastic &amp; Aesthetic Surgery</span>
        </Link>

        <nav aria-label="Primary" className="hidden md:col-span-4 md:block">
          <ul className="flex items-center gap-8">
            {primaryNavigation.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "text-eyebrow transition-colors duration-(--duration-fast) ease-(--ease-editorial) hover:text-(--color-ink)",
                      isActive && "text-(--color-ink)",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex justify-end md:col-span-3">
          <Magnetic className="hidden md:inline-block" data-cursor="Open">
            <Link
              href={consultationHref}
              className="text-eyebrow inline-flex items-center gap-2 border-b border-(--color-ink) pb-0.5 text-(--color-ink) transition-colors duration-(--duration-fast) ease-(--ease-editorial) hover:text-(--color-accent) hover:border-(--color-accent)"
            >
              Consultation
              <span aria-hidden="true">&#8599;</span>
            </Link>
          </Magnetic>

          <button
            ref={menuTriggerRef}
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            aria-label="Open menu"
            onClick={() => setIsMenuOpen(true)}
            className="flex h-11 w-11 items-center justify-center md:hidden"
          >
            <span className="relative block h-3.5 w-5" aria-hidden="true">
              <span className="absolute inset-x-0 top-0 h-px bg-(--color-ink)" />
              <span className="absolute inset-x-0 bottom-0 h-px bg-(--color-ink)" />
            </span>
          </button>
        </div>
      </div>

      {isMenuOpen ? (
        <div
          id="mobile-nav"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          ref={menuPanelRef}
          className="fixed inset-0 z-50 flex flex-col bg-(--color-bg) md:hidden"
        >
          <div className="flex items-center justify-between border-b border-(--color-border) px-(--gutter) py-4">
            <span className="text-nav text-(--color-ink)">{siteName.toUpperCase()}</span>
            <button
              ref={closeButtonRef}
              type="button"
              aria-label="Close menu"
              onClick={() => setIsMenuOpen(false)}
              className="flex h-11 w-11 items-center justify-center"
            >
              <span className="relative block h-4 w-4" aria-hidden="true">
                <span className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 rotate-45 bg-(--color-ink)" />
                <span className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 -rotate-45 bg-(--color-ink)" />
              </span>
            </button>
          </div>

          <nav aria-label="Primary" className="flex flex-1 flex-col justify-center px-(--gutter)">
            <ul className="flex flex-col">
              {primaryNavigation.map((item, index) => (
                <li
                  key={item.href}
                  className="motion-fade-in overflow-hidden border-b border-(--color-border)"
                  style={{ animationDelay: `${index * 60}ms` }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-giant block py-3 text-(--color-ink)"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="motion-fade-in mt-10" style={{ animationDelay: "180ms" }}>
              <Button
                href={consultationHref}
                variant="primary"
                onClick={() => setIsMenuOpen(false)}
                className="w-full"
              >
                Book a Consultation
              </Button>
              <p className="text-small mt-6 text-(--color-ink-faint)">Chennai, India</p>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
