export interface DoctorIntroContent {
  eyebrow: string;
  headline: string;
  paragraphs: string[];
  signature: string;
  ctaLabel: string;
  ctaHref: string;
}

/**
 * Homepage/About "Meet Dr. Dinesh" content. Facts here (qualifications,
 * location, years of experience, fellowship, hospital association) are
 * verified against Dr. Dinesh Kumar's publicly listed Instagram bio
 * (@dr_dinesh_aestheticsurgeon) and LinkedIn profile approved for this
 * project. Do not add institution names, registration numbers, additional
 * fellowships, or memberships beyond what is listed here until confirmed.
 */
export const doctorIntro: DoctorIntroContent = {
  eyebrow: "Meet Dr. Dinesh",
  headline: "A considered approach to aesthetic and reconstructive surgery.",
  paragraphs: [
    "Dr. Dinesh Kumar is a consultant plastic, cosmetic and reconstructive surgeon (MBBS, MS, MCh — Plastic Surgery) based in Chennai.",
    "His approach centres on understanding the individual — considering proportion, anatomy and personal goals before discussing a surgical path.",
    "With ten years of experience in the surgical field and a Fellowship in Aesthetic Surgery accredited by IAAPS, completed in 2023, his work brings together technical precision with a considered approach to aesthetic decision-making.",
    "He believes an informed conversation is the foundation of every surgical journey.",
  ],
  signature: "Dr. Dinesh Kumar",
  ctaLabel: "Read the full story",
  ctaHref: "/about",
};
