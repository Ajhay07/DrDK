export interface Faq {
  question: string;
  answer: string;
}

/**
 * General aesthetic-surgery FAQs. Deliberately generic guidance, not
 * claims specific to Dr. Dinesh's own outcomes or protocols.
 */
export const faqs: Faq[] = [
  {
    question: "How do I know if I'm a good candidate for a procedure?",
    answer:
      "Candidacy depends on your specific goals, medical history and the procedure itself. A consultation is where this is properly assessed — it's the right first step rather than trying to determine suitability on your own.",
  },
  {
    question: "Is the first consultation obligation-free?",
    answer:
      "Yes. A first consultation is a conversation to understand your goals and concerns and discuss realistic options — it does not commit you to any procedure.",
  },
  {
    question: "How long is the recovery period?",
    answer:
      "Recovery varies significantly by procedure and by individual. General timelines are covered in the Patient Guide, but your specific recovery plan is confirmed during consultation.",
  },
  {
    question: "Are results permanent?",
    answer:
      "Some procedures produce long-lasting change, while others are affected by natural ageing, weight change, or lifestyle over time. This is discussed procedure-by-procedure during consultation so expectations are realistic from the start.",
  },
  {
    question: "Do you offer both surgical and non-surgical options?",
    answer:
      "Many concerns can be approached surgically or non-surgically, each with different trade-offs. Consultation is where the right approach for your specific goal is discussed.",
  },
  {
    question: "How do I schedule a consultation?",
    answer:
      "You can book a consultation directly through this website, or reach out by phone, WhatsApp or email — details are on the Consultation page.",
  },
];
