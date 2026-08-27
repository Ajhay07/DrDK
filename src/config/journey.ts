export interface JourneyStage {
  number: string;
  title: string;
  description: string;
}

export const journeyStages: JourneyStage[] = [
  {
    number: "01",
    title: "Consultation",
    description: "Understanding your goals, concerns and medical suitability.",
  },
  {
    number: "02",
    title: "Planning",
    description: "Discussing possible approaches, expectations and the treatment plan.",
  },
  {
    number: "03",
    title: "Preparation",
    description: "Guidance on preparing for the procedure and what to expect.",
  },
  {
    number: "04",
    title: "Procedure",
    description:
      "The agreed surgical approach is carried out with appropriate care and planning.",
  },
  {
    number: "05",
    title: "Recovery",
    description: "Post-procedure guidance, follow-up and time for healing.",
  },
  {
    number: "06",
    title: "Ongoing Care",
    description: "Continued assessment and support where appropriate.",
  },
];
