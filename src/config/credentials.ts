export interface Credential {
  label: string;
  description: string;
}

/**
 * Trust markers shown in the "Credentials & Trust" homepage section.
 * Deliberately limited to information that doesn't require an unverified
 * specific (years of experience, institution names, registration/affiliation
 * bodies, case counts) — see PROJECT_RULES.md and the Phase 3 handoff notes
 * for what still needs confirmation from Dr. Dinesh before it can be added.
 */
export const credentials: Credential[] = [
  {
    label: "Surgical Foundation",
    description:
      "A practice grounded in both reconstructive and aesthetic surgery, not aesthetics alone.",
  },
  {
    label: "Aesthetic Focus",
    description:
      "Ongoing focus on facial and body aesthetic procedures, approached with a surgical foundation.",
  },
  {
    label: "Consultation-Led Care",
    description:
      "Treatment plans are developed through individual consultation, not standardised protocols.",
  },
  {
    label: "Chennai-Based Practice",
    description:
      "Based in Chennai, India, seeing patients for consultation and surgical care.",
  },
];
