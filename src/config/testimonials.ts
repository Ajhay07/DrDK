export interface Testimonial {
  quote: string;
  name: string;
  context: string;
}

/**
 * DEMO / PLACEHOLDER testimonials for pitch purposes only. Names and
 * quotes are illustrative, not real patients — replace with genuine,
 * consented patient testimonials before this site goes live.
 */
export const testimonials: Testimonial[] = [
  {
    quote:
      "From the first consultation, everything was explained clearly — no pressure, just an honest conversation about what would actually suit me.",
    name: "A. Priya",
    context: "Facial procedure, 2024",
  },
  {
    quote:
      "What stood out was how much time was spent understanding my goals before anything was discussed about the procedure itself.",
    name: "R. Karthik",
    context: "Body contouring, 2023",
  },
  {
    quote:
      "The recovery guidance was thorough and I always felt I could ask questions during follow-up visits.",
    name: "S. Meenakshi",
    context: "Reconstructive procedure, 2024",
  },
];
