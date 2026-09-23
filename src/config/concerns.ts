export interface Concern {
  slug: string;
  label: string;
  descriptor: string;
  overview: string;
  /** Optional named procedures list, shown under the overview when present. */
  proceduresList?: string[];
}

/**
 * General patient-education content per procedure area. Deliberately
 * generic (typical procedure types and consultation factors) rather than
 * claims about Dr. Dinesh's specific techniques, results, or case volume —
 * none of that is verified. See src/config/credentials.ts for what is.
 */
export const concerns: Concern[] = [
  {
    slug: "face",
    label: "Face",
    descriptor: "Facial harmony and rejuvenation",
    overview:
      "Facial procedures address changes in volume, contour and skin quality over time, or a desire for better balance between individual features. This area typically covers facelift and neck lift surgery, fat grafting, and jawline or cheek contouring.",
  },
  {
    slug: "nose",
    label: "Nose",
    descriptor: "Form, proportion and function",
    overview:
      "Rhinoplasty addresses both the appearance and function of the nose — its shape, size and proportion to the rest of the face, alongside how it affects breathing. Revision rhinoplasty, for noses previously operated on, is assessed differently from a first procedure.",
  },
  {
    slug: "eyes",
    label: "Eyes",
    descriptor: "Refinement around the eyes",
    overview:
      "Procedures around the eyes typically address upper or lower eyelid skin and fat (blepharoplasty), brow position, or under-eye hollowing, all of which affect how rested or refreshed the eye area appears.",
  },
  {
    slug: "breast",
    label: "Breast",
    descriptor: "Shape, proportion and restoration",
    overview:
      "Breast procedures range from augmentation and lift to reduction and reconstruction. Each is assessed individually against body proportion, tissue characteristics and the specific goal — increasing size, restoring shape, or reducing volume for comfort.",
  },
  {
    slug: "body",
    label: "Body",
    descriptor: "Contour and body confidence",
    overview:
      "Body contouring — including liposuction and procedures following significant weight loss — addresses localised fat and excess skin that don't typically respond to diet and exercise alone.",
  },
  {
    slug: "men",
    label: "Men",
    descriptor: "Cosmetic surgery designed for men",
    overview:
      "Men's facial and body proportions have their own characteristics. Treatment planning respects those differences while maintaining a natural, balanced appearance — from gynecomastia (enlarged male breast tissue) correction to facial and jawline contouring, rather than adapting techniques designed for female patients.",
    proceduresList: [
      "Gynecomastia surgery",
      "Liposuction",
      "Body contouring",
      "Rhinoplasty",
      "Eyelid surgery",
      "Facelift",
      "Neck procedures",
      "Double chin treatment",
      "Jawline definition",
      "Abdominal definition",
    ],
  },
];
