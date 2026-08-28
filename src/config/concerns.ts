export interface Concern {
  slug: string;
  label: string;
  descriptor: string;
  overview: string;
  considerations: string[];
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
    considerations: [
      "Facial proportion and how individual features relate to one another",
      "Skin quality, elasticity and the effect of ageing on facial structure",
      "Whether a surgical or non-surgical approach is more appropriate for the goal",
      "Realistic expectations for how subtle or noticeable a change should be",
    ],
  },
  {
    slug: "nose",
    label: "Nose",
    descriptor: "Form, proportion and function",
    overview:
      "Rhinoplasty addresses both the appearance and function of the nose — its shape, size and proportion to the rest of the face, alongside how it affects breathing. Revision rhinoplasty, for noses previously operated on, is assessed differently from a first procedure.",
    considerations: [
      "Whether the primary concern is cosmetic, functional (breathing), or both",
      "The nose's relationship to other facial features, not just its shape in isolation",
      "Cartilage and skin thickness, which affect what changes are realistic",
      "Healing timelines, which are typically longer than other facial procedures",
    ],
  },
  {
    slug: "eyes",
    label: "Eyes",
    descriptor: "Refinement around the eyes",
    overview:
      "Procedures around the eyes typically address upper or lower eyelid skin and fat (blepharoplasty), brow position, or under-eye hollowing, all of which affect how rested or refreshed the eye area appears.",
    considerations: [
      "Whether upper eyelid skin is affecting vision, not only appearance",
      "Brow position, which is often assessed alongside the eyelids themselves",
      "Under-eye volume loss versus excess skin, which require different approaches",
      "A conservative, natural-looking outcome rather than an overly altered one",
    ],
  },
  {
    slug: "breast",
    label: "Breast",
    descriptor: "Shape, proportion and restoration",
    overview:
      "Breast procedures range from augmentation and lift to reduction and reconstruction. Each is assessed individually against body proportion, tissue characteristics and the specific goal — increasing size, restoring shape, or reducing volume for comfort.",
    considerations: [
      "Proportion to the rest of the body, not a fixed target size",
      "Existing breast tissue, skin elasticity and any asymmetry",
      "Whether the goal is augmentation, lift, reduction or a combination",
      "Long-term factors such as future changes from ageing, weight change or pregnancy",
    ],
  },
  {
    slug: "body",
    label: "Body",
    descriptor: "Contour and body confidence",
    overview:
      "Body contouring — including liposuction and procedures following significant weight loss — addresses localised fat and excess skin that don't typically respond to diet and exercise alone.",
    considerations: [
      "Skin elasticity, which determines whether contouring alone is sufficient or skin removal is also needed",
      "Realistic goals — contouring refines shape rather than serving as a weight-loss method",
      "Overall health and stability of weight before considering a procedure",
      "Recovery time, which varies significantly by the extent of the procedure",
    ],
  },
  {
    slug: "men",
    label: "Men",
    descriptor: "Procedures designed around male anatomy",
    overview:
      "Aesthetic procedures for men are planned around male-specific anatomy and proportion — from gynecomastia (enlarged male breast tissue) correction to facial and jawline contouring — rather than adapting techniques designed for female patients.",
    considerations: [
      "Anatomical differences that affect technique, scar placement and expected outcome",
      "Whether a concern (such as gynecomastia) has an underlying hormonal or medical cause worth investigating first",
      "A natural, proportionate result consistent with male facial and body structure",
      "Discretion, which is often a priority for male patients considering surgery",
    ],
  },
];
