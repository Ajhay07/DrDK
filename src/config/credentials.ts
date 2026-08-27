export interface Credential {
  label: string;
  description: string;
}

/**
 * Trust markers shown in the "Credentials & Trust" homepage section.
 * Facts verified against the publicly listed LinkedIn profile approved for
 * this project. Do not add years/institutions/memberships beyond what is
 * listed here without further verification — see src/config/about.ts.
 */
export const credentials: Credential[] = [
  {
    label: "Plastic Surgery",
    description: "Professional focus, spanning aesthetic and reconstructive surgery.",
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
