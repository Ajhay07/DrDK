export interface DoctorIntroContent {
  eyebrow: string;
  headline: string;
  paragraphs: string[];
  signature: string;
  ctaLabel: string;
  ctaHref: string;
}

/**
 * Homepage "Meet Dr. Dinesh" introduction. Deliberately generic and free of
 * unverified specifics (years of practice, qualifications, affiliations) —
 * see the Phase handoff notes for what still needs Dr. Dinesh's own copy
 * before this can be replaced with a verified biography.
 */
export const doctorIntro: DoctorIntroContent = {
  eyebrow: "Meet Dr. Dinesh",
  headline: "A considered approach to aesthetic surgery.",
  paragraphs: [
    "Every consultation begins with listening — understanding what a patient hopes to achieve before any surgical approach is considered.",
    "That same approach, grounded in proportion and individual context rather than a fixed template, carries through planning, the procedure itself, and the care that follows.",
  ],
  signature: "Dr. Dinesh Kumar",
  ctaLabel: "Read the full story",
  ctaHref: "/about",
};
