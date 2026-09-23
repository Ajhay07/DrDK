export interface Faq {
  question: string;
  answer: string;
}

export interface FaqCategory {
  title: string;
  faqs: Faq[];
}

/**
 * FAQ content, as supplied directly by Dr. Dinesh Kumar. Grouped into
 * general questions and questions specific to men's cosmetic surgery.
 */
export const faqCategories: FaqCategory[] = [
  {
    title: "General",
    faqs: [
      {
        question: "How do I know which cosmetic procedure is right for me?",
        answer:
          "Every patient is different. During your consultation, I assess your concerns, anatomy, skin and overall goals before discussing the options that may be suitable for you. I also explain when a procedure may not be necessary or appropriate.",
      },
      {
        question: "Will my results look natural?",
        answer:
          "My approach is focused on achieving results that are balanced and appropriate for your individual features. The goal is enhancement rather than making you look like someone else.",
      },
      {
        question: "Are cosmetic procedures safe?",
        answer:
          "All surgical and non-surgical procedures have potential risks. Patient selection, appropriate planning, a safe medical environment and proper postoperative care are important factors in minimising these risks. The specific risks and benefits will be discussed during your consultation.",
      },
      {
        question: "How long will I need to take off work?",
        answer:
          "Recovery depends on the procedure, your occupation and your individual healing. Some treatments involve little or no downtime, while surgical procedures may require a longer recovery period. You will receive specific guidance based on your treatment.",
      },
      {
        question: "Can I combine multiple procedures?",
        answer:
          "In selected patients, combining procedures may be possible. This depends on your health, the procedures being considered and the overall duration and safety of the surgery.",
      },
    ],
  },
  {
    title: "Men's Cosmetic Surgery",
    faqs: [
      {
        question: "Do men undergo cosmetic surgery?",
        answer:
          "Absolutely. An increasing number of men are seeking both surgical and non-surgical treatments to address concerns about their face, body, hair and skin. The approach is different from that used for women because male facial and body proportions have their own characteristics.",
      },
      {
        question: "What are the most common cosmetic procedures for men?",
        answer:
          "Depending on individual concerns, men may consider treatments such as gynecomastia surgery, liposuction and body contouring, rhinoplasty, eyelid surgery, facelift and neck procedures, hair restoration, scar revision and non-surgical facial rejuvenation.",
      },
      {
        question: "What is gynecomastia surgery?",
        answer:
          "Gynecomastia refers to enlargement of male breast tissue. Depending on the cause and the amount of glandular tissue and fat present, treatment may involve liposuction, surgical removal of glandular tissue, or a combination of techniques.",
      },
      {
        question: "Can men have liposuction or body contouring?",
        answer:
          "Yes. Liposuction can be used to address localised areas of fat that may be resistant to diet and exercise. It is a body-contouring procedure rather than a weight-loss treatment, and suitability depends on individual factors.",
      },
      {
        question: "Can cosmetic surgery give men a more defined jawline?",
        answer:
          "A more defined jawline can sometimes be achieved through a combination of approaches depending on the underlying anatomy. Options may include non-surgical treatments or surgical procedures. The appropriate approach depends on whether the concern is related to skin laxity, fat, muscle or the underlying facial structure.",
      },
      {
        question: "Can men undergo rhinoplasty?",
        answer:
          "Yes. Male rhinoplasty can address concerns such as the shape, size or profile of the nose while maintaining facial harmony and characteristics that are appropriate for a male face.",
      },
      {
        question: "Can men undergo eyelid surgery?",
        answer:
          "Yes. Blepharoplasty can address excess skin and, in selected patients, excess fat around the upper or lower eyelids. The aim is to create a more refreshed appearance while preserving the natural character of the eyes.",
      },
      {
        question: "Is facelift surgery only for women?",
        answer:
          "No. Men can also undergo facial rejuvenation procedures. Male facial anatomy, beard-bearing skin and hairlines require specific consideration when planning surgery, with the aim of achieving a refreshed rather than an over-operated appearance.",
      },
      {
        question: "Can men have treatments for a double chin?",
        answer:
          "Yes. Treatment depends on the amount of fat, skin quality and underlying anatomy. Options may include non-surgical treatments or surgical approaches such as liposuction in appropriately selected patients.",
      },
    ],
  },
];
