export interface Credential {
  label: string;
  description: string;
}

/**
 * Trust markers shown in the "Credentials & Trust" homepage section.
 * Facts verified against Dr. Dinesh Kumar's publicly listed Instagram bio
 * (@dr_dinesh_aestheticsurgeon) and the LinkedIn profile approved for this
 * project. Do not add institutions/memberships/case counts beyond what is
 * listed here without further verification — see src/config/about.ts.
 */
export const credentials: Credential[] = [
  {
    label: "MBBS, MS, MCh",
    description: "Plastic Surgery — consultant plastic, cosmetic and reconstructive surgeon.",
  },
  {
    label: "10 Years",
    description: "Experience in the surgical field.",
  },
  {
    label: "IAAPS",
    description: "Fellowship in Aesthetic Surgery, completed 2023.",
  },
  {
    label: "Chennai",
    description: "Based in Chennai, associated with Vijaya Hospitals.",
  },
];
