export const siteName = "Dr. Dinesh Kumar";

export interface NavItem {
  label: string;
  href: string;
}

export const primaryNavigation: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Procedures", href: "/procedures" },
  { label: "Patient Guide", href: "/education" },
];

export const consultationHref = "/consultation";
export const proceduresHref = "/procedures";
