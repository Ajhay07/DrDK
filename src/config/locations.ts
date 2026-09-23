export interface ConsultationLocation {
  name: string;
  area: string;
  address: string;
}

/**
 * Consultation locations, as supplied directly. No timings are listed —
 * none were provided, and none should be invented.
 */
export const locations: ConsultationLocation[] = [
  {
    name: "Supreme Hospitals",
    area: "Padur, OMR",
    address: "Padur, OMR, Chennai - 603103",
  },
  {
    name: "Vijaya Hospitals",
    area: "Pannaiyur",
    address: "Pannaiyur, Chennai",
  },
  {
    name: "Igen Clinics",
    area: "Srinagar Colony, Saidapet",
    address: "13, North Avenue, Srinagar Colony, Saidapet, Chennai",
  },
  {
    name: "JS Global Hospitals",
    area: "Semmanchery, OMR",
    address: "Semmanchery, OMR, Chennai",
  },
];
