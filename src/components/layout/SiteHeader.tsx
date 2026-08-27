"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils/cn";
import { consultationHref, primaryNavigation, siteName } from "@/config/navigation";

/**
 * Global site navigation. A Client Component because it owns two pieces of
 * interaction state — scroll-driven background treatment and the mobile
 * menu — that can't be expressed in a Server Component. Kept as the single
 * client boundary for navigation per PROJECT_RULES.md §3.
 */
export function SiteHeader(): React.ReactElement {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuTriggerRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const menuPanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = (): void => setIsScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-(--duration-base) ease-(--ease-editorial)",
        isScrolled
          ? "bg-(--color-bg)/95 backdrop-blur-sm border-(--color-border)"
          : "bg-transparent border-transparent",
      )}
    >
      <div className="mx-auto flex h-20 w-full max-w-(--container-wide) items-center justify-between px-(--gutter)">
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-(--font-display) text-[1.15rem] tracking-tight text-(--color-ink)">
            {siteName}
          </span>
          <span className="text-eyebrow mt-1.5 text-[0.6875rem]">Aesthetic &amp; Plastic Surgery</span>
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-10">
            {primaryNavigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-nav text-(--color-ink) transition-colors duration-(--duration-fast) ease-(--ease-editorial) hover:text-(--color-accent)"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href={consultationHref}
          className="text-nav hidden items-center gap-2 text-(--color-ink) transition-colors duration-(--duration-fast) ease-(--ease-editorial) hover:text-(--color-accent) md:inline-flex"
        >
          Book a Consultation
          <span aria-hidden="true">&#8594;</span>
        </Link>

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

      {isMenuOpen ? (
        <div
          id="mobile-nav"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          ref={menuPanelRef}
          className="fixed inset-0 z-50 flex flex-col bg-(--color-bg) md:hidden"
        >
          <div className="flex h-20 w-full items-center justify-between px-(--gutter)">
            <span className="font-(--font-display) text-[1.15rem] tracking-tight text-(--color-ink)">
              {siteName}
            </span>
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
            <ul className="flex flex-col gap-2">
              {primaryNavigation.map((item) => (
                <li key={item.href} className="border-b border-(--color-border)">
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-h3 block py-5 text-(--color-ink)"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <Button
                href={consultationHref}
                variant="primary"
                onClick={() => setIsMenuOpen(false)}
                className="w-full"
              >
                Book a Consultation
              </Button>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
