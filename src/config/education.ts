export interface EducationEntry {
  number: string;
  title: string;
  description: string;
  slug: string;
  href: string;
  body: string[];
}

/**
 * General patient-education guides. Content is deliberately generic
 * (standard pre/post-operative guidance applicable across aesthetic
 * surgery) rather than claims specific to Dr. Dinesh's own protocols,
 * which are not documented for public use.
 */
export const educationEntries: EducationEntry[] = [
  {
    number: "01",
    title: "Understanding Procedures",
    description:
      "Explore what different procedures are designed to address and the factors involved in considering them.",
    slug: "understanding-procedures",
    href: "/education/understanding-procedures",
    body: [
      "Choosing to explore aesthetic surgery usually starts with a specific concern — a feature, proportion or change over time — rather than a procedure name. Understanding which procedures actually address that concern, and which don't, is the first useful step.",
      "Most procedures fall into a few broad categories: reshaping (rhinoplasty, breast surgery), rejuvenating (facelifts, eyelid surgery), and contouring (liposuction, body procedures). Some concerns can be addressed surgically or non-surgically, with different trade-offs in result, downtime and permanence.",
      "A consultation is where a specific concern is matched to realistic options — including the possibility that a particular procedure isn't the right fit, or that a non-surgical approach should be tried first.",
    ],
  },
  {
    number: "02",
    title: "Preparing for Surgery",
    description: "Learn about consultations, planning and preparing for a procedure.",
    slug: "preparing-for-surgery",
    href: "/education/preparing-for-surgery",
    body: [
      "Preparation for surgery typically begins well before the procedure date, with one or more consultations to confirm suitability, discuss the planned approach, and review medical history in detail.",
      "Common preparation steps include pre-operative blood tests or imaging where relevant, a review of current medications and supplements (some of which increase bleeding risk and need to be paused), and guidance on smoking and alcohol, both of which affect healing.",
      "Practical planning matters too — arranging time off work, help at home during early recovery, and transport to and from the procedure, since driving yourself home is usually not possible.",
      "Every plan is individual: the right preparation depends on the specific procedure, the patient's health, and the anaesthesia involved, all of which are confirmed directly during consultation.",
    ],
  },
  {
    number: "03",
    title: "Recovery & Aftercare",
    description: "Understand the role of healing, follow-up and recovery after surgery.",
    slug: "recovery-and-aftercare",
    href: "/education/recovery-and-aftercare",
    body: [
      "Recovery is a process, not a single milestone — swelling and bruising typically settle over weeks, while the final result of many procedures continues to refine over months.",
      "Aftercare usually includes follow-up visits to monitor healing, guidance on caring for incisions, and a staged return to normal activity — starting with rest, then light movement, before resuming exercise or strenuous activity once cleared.",
      "Recovery experiences vary by procedure and by individual, which is why follow-up appointments matter: they're the opportunity to raise concerns, confirm healing is on track, and adjust guidance as needed.",
      "Contacting the surgical team promptly about anything unexpected — unusual pain, signs of infection, or concerns that don't match what was discussed beforehand — is a normal and encouraged part of aftercare, not an inconvenience.",
    ],
  },
];
