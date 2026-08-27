/**
 * Site identity for SEO/metadata. `url` is a placeholder until the final
 * domain is confirmed — set NEXT_PUBLIC_SITE_URL to override without
 * touching code once a real domain is assigned.
 */
export const siteConfig = {
  name: "Dr. Dinesh Kumar",
  title: "Dr. Dinesh Kumar | Aesthetic & Plastic Surgeon, Chennai",
  description:
    "Dr. Dinesh Kumar is an aesthetic and plastic surgeon based in Chennai, India, providing patient education and consultation for aesthetic and reconstructive procedures.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.drdineshkumar.example.com",
  locale: "en_IN",
};
