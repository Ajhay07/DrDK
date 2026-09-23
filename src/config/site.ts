/**
 * Site identity for SEO/metadata. `url` is a placeholder until the final
 * domain is confirmed — set NEXT_PUBLIC_SITE_URL to override without
 * touching code once a real domain is assigned.
 */
export const siteConfig = {
  name: "Dr. Dinesh Kumar",
  title: "Dr. Dinesh Kumar | Consultant Plastic & Cosmetic Surgeon | Chennai",
  description:
    "Dr. Dinesh Kumar is a Consultant Plastic & Cosmetic Surgeon in Chennai, with MBBS, MS (General Surgery), MCh (Plastic Surgery) and advanced cosmetic surgery fellowship training including Akademikliniken, Stockholm.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.drdineshkumar.example.com",
  locale: "en_IN",
};
