export interface FaceRegion {
  id: string;
  name: string;
  shortDescription: string;
  extendedDescription: string;
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
    shortDescription: "Sets the upper third of facial balance.",
    extendedDescription:
      "Its height, slope and the depth of expression lines shape how the face reads at rest and in motion. Approaches range from non-surgical softening to changes in brow position, depending on the underlying cause.",
  },
  {
    id: "brows",
    name: "Brows",
    shortDescription: "Frame the eyes and set the upper face's expression.",
    extendedDescription:
      "Brow angle, arch and height affect whether the upper face appears alert, rested or heavy, and are usually assessed together with the eyelids rather than on their own.",
  },
  {
    id: "eyes",
    name: "Eyes / Eyelids",
    shortDescription: "Often the first area where ageing and fatigue show.",
    extendedDescription:
      "Upper and lower eyelid skin, fat and the surrounding hollows are considered individually, since each responds to a different approach and not every concern requires surgery.",
  },
  {
    id: "nose",
    name: "Nose",
    shortDescription: "Anchors the centre of the face.",
    extendedDescription:
      "Size, profile and tip shape are assessed in proportion to the forehead and chin rather than in isolation, alongside how the nose affects breathing.",
  },
  {
    id: "cheeks",
    name: "Cheeks",
    shortDescription: "Shape the mid-face and how light falls across it.",
    extendedDescription:
      "Volume loss or asymmetry in the cheeks changes the face's contour over time. Fat grafting and similar approaches aim to restore proportion rather than add exaggerated volume.",
  },
  {
    id: "jawline",
    name: "Jawline",
    shortDescription: "Defines the structure of the lower face.",
    extendedDescription:
      "Width, angle and definition are assessed against the rest of the face. Options range from contouring to skin tightening, depending on whether the change is from bone, fat or skin laxity.",
  },
  {
    id: "chin",
    name: "Chin",
    shortDescription: "Balances the facial profile.",
    extendedDescription:
      "A chin that is under- or over-projected relative to the nose and jaw can be adjusted to restore proportion — the goal is balance with the rest of the face, not a fixed shape.",
  },
  {
    id: "neck",
    name: "Neck",
    shortDescription: "Often assessed alongside the face, not separately.",
    extendedDescription:
      "Skin laxity and muscle banding in the neck are frequently addressed together with facial procedures, since the two areas visually relate to one another.",
  },
];
