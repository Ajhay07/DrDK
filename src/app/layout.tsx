import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { CustomCursor } from "@/components/interactive/CustomCursor";
import { siteConfig } from "@/config/site";
import { contactInfo } from "@/config/contact";
import { locations } from "@/config/locations";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary",
    title: siteConfig.title,
    description: siteConfig.description,
  },
};

/**
 * Local-business/physician structured data — only facts already shown
 * elsewhere on the site (qualifications, contact details, consultation
 * locations). No ratings, review counts or other unverified fields.
 */
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "Dr. Dinesh Kumar",
  medicalSpecialty: "PlasticSurgery",
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: contactInfo.phoneHref.replace("tel:", ""),
  email: contactInfo.email,
  areaServed: "Chennai, India",
  availableService: {
    "@type": "MedicalProcedure",
    name: "Consultant Plastic & Cosmetic Surgery",
  },
  location: locations.map((location) => ({
    "@type": "MedicalClinic",
    name: location.name,
    address: location.address,
  })),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[60] -translate-y-20 bg-(--color-accent) px-4 py-2 text-button text-(--color-accent-ink) transition-transform duration-(--duration-fast) ease-(--ease-editorial) focus:translate-y-0"
        >
          Skip to content
        </a>
        <CustomCursor />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
