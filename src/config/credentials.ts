export interface Credential {
  label: string;
  description: string;
}

/**
 * Trust markers shown in the "Credentials & Trust" homepage section.
 * Source of truth: doctor-supplied qualifications brief. Do not add
 * institutions, memberships, case counts or years of experience beyond
 * what is listed here without further verification.
 */
export const credentials: Credential[] = [
  {
    label: "MBBS, MS, MCh",
    description: "Consultant Plastic & Cosmetic Surgeon — MS (General Surgery), MCh (Plastic Surgery).",
  },
  {
    label: "Fellowship",
    description: "Advanced Fellowship Training in Cosmetic Surgery.",
  },
  {
    label: "Akademikliniken",
    description: "Training completed at Akademikliniken, Stockholm.",
  },
  {
    label: "Chennai",
    description: "Consulting across multiple hospitals and clinics in Chennai.",
  },
];
