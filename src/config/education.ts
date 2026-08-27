export interface EducationEntry {
  number: string;
  title: string;
  description: string;
  slug: string;
  href: string;
}

export const educationEntries: EducationEntry[] = [
  {
    number: "01",
    title: "Understanding Procedures",
    description:
      "Explore what different procedures are designed to address and the factors involved in considering them.",
    slug: "understanding-procedures",
    href: "/education/understanding-procedures",
  },
  {
    number: "02",
    title: "Preparing for Surgery",
    description: "Learn about consultations, planning and preparing for a procedure.",
    slug: "preparing-for-surgery",
    href: "/education/preparing-for-surgery",
  },
  {
    number: "03",
    title: "Recovery & Aftercare",
    description: "Understand the role of healing, follow-up and recovery after surgery.",
    slug: "recovery-and-aftercare",
    href: "/education/recovery-and-aftercare",
  },
];
