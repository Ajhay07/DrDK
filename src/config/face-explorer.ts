export interface FaceRegion {
  id: string;
  name: string;
  description: string;
  commonProcedures: string[];
  keyConsiderations: string[];
}

/**
 * Content for the interactive face explorer on /procedures/face. Kept
 * deliberately general and educational — no outcome claims, no
 * superlatives ("perfect", "guaranteed", "best") — per the project's
 * verified-content rule for anything not sourced from Dr. Dinesh directly.
 */
export const faceRegions: FaceRegion[] = [
  {
    id: "forehead",
    name: "Forehead",
    description:
      "The forehead sets the upper third of facial balance. Its height, slope and the depth of expression lines shape how the face reads at rest and in motion.",
    commonProcedures: ["Anti-wrinkle injections", "Brow lift", "Fat grafting"],
    keyConsiderations: [
      "Skin thickness and muscle activity vary by individual",
      "Often assessed together with brow position, not on its own",
    ],
  },
  {
    id: "eyes",
    name: "Eyes",
    description:
      "The eye area is often the first place ageing and fatigue show. Upper and lower eyelid skin, fat and the surrounding hollows each respond to a different approach.",
    commonProcedures: ["Upper/lower blepharoplasty", "Brow repositioning", "Under-eye fat repositioning"],
    keyConsiderations: [
      "Vision impact from upper eyelid skin is assessed where relevant",
      "A conservative, natural-looking result is generally preferred",
    ],
  },
  {
    id: "nose",
    name: "Nose",
    description:
      "The nose anchors the centre of the face. Its size, profile and tip shape are assessed in proportion to the forehead and chin, alongside how it affects breathing.",
    commonProcedures: ["Rhinoplasty", "Revision rhinoplasty", "Non-surgical contouring"],
    keyConsiderations: [
      "Cartilage and skin thickness affect what changes are realistic",
      "Functional (breathing) concerns are evaluated alongside appearance",
    ],
  },
  {
    id: "cheeks",
    name: "Cheeks",
    description:
      "Cheek volume shapes the mid-face and how light and shadow fall across it. Loss or asymmetry of volume changes contour over time.",
    commonProcedures: ["Fat grafting", "Dermal filler", "Cheek implants"],
    keyConsiderations: [
      "The goal is restoring proportion, not adding exaggerated volume",
      "Assessed in relation to the rest of the face, not in isolation",
    ],
  },
  {
    id: "jawline",
    name: "Jawline",
    description:
      "The jawline defines the structure of the lower face. Its width, angle and definition are assessed against overall facial proportion.",
    commonProcedures: ["Jawline contouring", "Skin tightening", "Chin and jaw implants"],
    keyConsiderations: [
      "Approach depends on whether change is from bone, fat or skin laxity",
      "Often considered alongside the neck for a consistent result",
    ],
  },
  {
    id: "lips",
    name: "Lips / Perioral",
    description:
      "The lips and surrounding perioral area affect both facial expression and lower-face proportion, including the balance between upper and lower lip.",
    commonProcedures: ["Lip filler", "Perioral resurfacing", "Lip lift"],
    keyConsiderations: [
      "Proportion with the rest of the face matters more than lip size alone",
      "Skin quality around the mouth is assessed alongside lip volume",
    ],
  },
];
