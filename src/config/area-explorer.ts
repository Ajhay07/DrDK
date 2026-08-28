export interface ExplorerEllipse {
  cx: number;
  cy: number;
  rx: number;
  ry: number;
}

export interface AreaRegion {
  id: string;
  name: string;
  description: string;
  commonProcedures: string[];
  keyConsiderations: string[];
  /** One ellipse, or two for bilateral regions (e.g. both cheeks) — native pixel space. */
  hotspots: ExplorerEllipse[];
}

export interface AreaExplorerConfig {
  slug: string;
  image: {
    src: string;
    alt: string;
    credit: string;
    nativeWidth: number;
    nativeHeight: number;
    objectPosition: string;
  };
  regions: AreaRegion[];
}

/**
 * One photographic explorer per procedure area. Content is deliberately
 * general and educational — no outcome claims, no superlatives ("perfect",
 * "guaranteed", "best") — per the project's verified-content rule for
 * anything not sourced from Dr. Dinesh directly.
 *
 * Hotspot ellipses are approximate, hand-placed against each source photo
 * in native pixel space (see image.nativeWidth/nativeHeight). The overlay
 * SVG uses the same viewBox with preserveAspectRatio="xMidYMid slice",
 * which reproduces next/image's object-fit: cover cropping exactly, so
 * these coordinates stay aligned with the photo at any container size.
 */
export const areaExplorers: Record<string, AreaExplorerConfig> = {
  face: {
    slug: "face",
    image: {
      src: "/images/procedures/face-explorer.jpg",
      alt: "Close-up portrait of a face, used to illustrate areas commonly discussed during a facial consultation",
      credit: "Fleur Kaan via Unsplash",
      nativeWidth: 2400,
      nativeHeight: 1600,
      objectPosition: "50% 20%",
    },
    regions: [
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
        hotspots: [{ cx: 1290, cy: 350, rx: 340, ry: 150 }],
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
        hotspots: [{ cx: 1290, cy: 580, rx: 320, ry: 90 }],
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
        hotspots: [{ cx: 1290, cy: 680, rx: 110, ry: 170 }],
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
        hotspots: [
          { cx: 910, cy: 720, rx: 170, ry: 170 },
          { cx: 1670, cy: 720, rx: 170, ry: 170 },
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
        hotspots: [{ cx: 1290, cy: 1050, rx: 430, ry: 130 }],
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
        hotspots: [{ cx: 1290, cy: 960, rx: 170, ry: 65 }],
      },
    ],
  },

  nose: {
    slug: "nose",
    image: {
      src: "/images/procedures/face-explorer.jpg",
      alt: "Close-up portrait of a face, used to illustrate the areas a rhinoplasty consultation typically considers",
      credit: "Fleur Kaan via Unsplash",
      nativeWidth: 2400,
      nativeHeight: 1600,
      objectPosition: "50% 25%",
    },
    regions: [
      {
        id: "bridge",
        name: "Bridge",
        description:
          "The bridge sets the nose's profile line. Its height and straightness are read in relation to the forehead above and the tip below.",
        commonProcedures: ["Rhinoplasty (dorsal reduction/augmentation)", "Non-surgical contouring"],
        keyConsiderations: [
          "A visible bump or dip is often the starting point for a consultation",
          "Bone and cartilage each respond differently to change",
        ],
        hotspots: [{ cx: 1290, cy: 600, rx: 90, ry: 130 }],
      },
      {
        id: "tip",
        name: "Tip",
        description:
          "The tip's shape, angle and projection have an outsized effect on how the whole nose reads, even with small changes.",
        commonProcedures: ["Tip refinement", "Rhinoplasty", "Revision rhinoplasty"],
        keyConsiderations: [
          "Cartilage strength and skin thickness limit how refined a tip can look",
          "Small changes here are often more noticeable than elsewhere on the nose",
        ],
        hotspots: [{ cx: 1290, cy: 770, rx: 95, ry: 85 }],
      },
      {
        id: "nostrils",
        name: "Nostrils & base",
        description:
          "Nostril width and shape, and the angle of the nose relative to the upper lip, affect both appearance and airflow.",
        commonProcedures: ["Alar base reduction", "Functional septorhinoplasty"],
        keyConsiderations: [
          "Breathing function is assessed alongside cosmetic appearance",
          "Changes here are considered in proportion to the rest of the face",
        ],
        hotspots: [{ cx: 1290, cy: 850, rx: 125, ry: 55 }],
      },
      {
        id: "profile",
        name: "Overall profile",
        description:
          "The nose is ultimately judged as a whole silhouette against the forehead and chin, not as isolated parts.",
        commonProcedures: ["Rhinoplasty", "Combined chin and nose assessment"],
        keyConsiderations: [
          "Facial balance is assessed before any single feature is changed",
          "A first consultation typically maps the whole profile, not just the nose",
        ],
        hotspots: [{ cx: 1290, cy: 680, rx: 190, ry: 270 }],
      },
    ],
  },

  eyes: {
    slug: "eyes",
    image: {
      src: "/images/procedures/eyes-explorer.jpg",
      alt: "Close-up of the eye area, used to illustrate what a blepharoplasty consultation typically considers",
      credit: "",
      nativeWidth: 2000,
      nativeHeight: 1333,
      objectPosition: "50% 55%",
    },
    regions: [
      {
        id: "brows",
        name: "Brows",
        description:
          "Brow height and arch frame the eyes and affect how alert or rested the whole upper face appears.",
        commonProcedures: ["Brow lift", "Anti-wrinkle injections"],
        keyConsiderations: [
          "A lowered brow can mimic the appearance of excess eyelid skin",
          "Usually assessed together with the eyelids, not in isolation",
        ],
        hotspots: [
          { cx: 330, cy: 545, rx: 260, ry: 90 },
          { cx: 1035, cy: 540, rx: 260, ry: 90 },
        ],
      },
      {
        id: "upper-lid",
        name: "Upper eyelid",
        description:
          "Excess upper eyelid skin can make the eyes look heavier or more tired than the rest of the face, and in some cases affects vision.",
        commonProcedures: ["Upper blepharoplasty", "Brow repositioning"],
        keyConsiderations: [
          "Whether skin is affecting vision is assessed, not only appearance",
          "Brow position is often assessed together with the eyelid itself",
        ],
        hotspots: [
          { cx: 330, cy: 775, rx: 230, ry: 130 },
          { cx: 1035, cy: 775, rx: 230, ry: 130 },
        ],
      },
      {
        id: "under-eye",
        name: "Under-eye",
        description:
          "Hollowing or puffiness under the eye can come from volume loss or fat, which respond to different approaches.",
        commonProcedures: ["Lower blepharoplasty", "Under-eye fat repositioning", "Dermal filler"],
        keyConsiderations: [
          "Volume loss and excess fat are assessed separately",
          "Skin quality affects which approach suits best",
        ],
        hotspots: [
          { cx: 330, cy: 900, rx: 220, ry: 80 },
          { cx: 1035, cy: 900, rx: 220, ry: 80 },
        ],
      },
    ],
  },

  breast: {
    slug: "breast",
    image: {
      src: "/images/procedures/breast-explorer.jpg",
      alt: "Editorial neckline and collarbone portrait, used to illustrate proportion considerations discussed in a breast consultation",
      credit: "",
      nativeWidth: 2000,
      nativeHeight: 3000,
      objectPosition: "50% 20%",
    },
    regions: [
      {
        id: "neckline",
        name: "Neckline & décolletage",
        description:
          "The neckline area frames how the chest reads in clothing and is considered alongside the procedure's overall goal, not on its own.",
        commonProcedures: ["Lift (mastopexy)", "Combined augmentation and lift"],
        keyConsiderations: [
          "Scar placement is planned around the neckline and natural creases",
          "Discussed as part of the overall silhouette, not in isolation",
        ],
        hotspots: [{ cx: 1000, cy: 1300, rx: 650, ry: 280 }],
      },
      {
        id: "shoulder-line",
        name: "Shoulder & frame",
        description:
          "Shoulder width and overall body frame are part of how proportion is assessed — breast size and shape are read against the frame, not a fixed target.",
        commonProcedures: ["Augmentation", "Reduction"],
        keyConsiderations: [
          "Proportion to the rest of the body matters more than size alone",
          "Assessed alongside posture and shoulder width",
        ],
        hotspots: [{ cx: 1650, cy: 2150, rx: 350, ry: 650 }],
      },
      {
        id: "skin-quality",
        name: "Skin quality",
        description:
          "Skin elasticity affects how a result settles over time and is assessed alongside any natural asymmetry, which is normal and factored into planning.",
        commonProcedures: ["Augmentation with fat grafting", "Asymmetry correction"],
        keyConsiderations: [
          "Some natural asymmetry is expected and part of planning",
          "Skin quality is one of several factors, not the only one",
        ],
        hotspots: [{ cx: 800, cy: 2250, rx: 650, ry: 650 }],
      },
    ],
  },

  body: {
    slug: "body",
    image: {
      src: "/images/procedures/body-explorer.jpg",
      alt: "Editorial waist and midriff portrait, used to illustrate areas commonly discussed in a body contouring consultation",
      credit: "",
      nativeWidth: 2000,
      nativeHeight: 2997,
      objectPosition: "50% 35%",
    },
    regions: [
      {
        id: "skin-quality",
        name: "Skin quality",
        description:
          "Skin elasticity — often affected by prior weight change — determines whether contouring alone is sufficient or skin removal is also needed.",
        commonProcedures: ["Skin tightening", "Combined contouring and excision"],
        keyConsiderations: [
          "A history of significant weight change is relevant to planning",
          "Contouring refines shape rather than serving as a weight-loss method",
        ],
        hotspots: [{ cx: 1000, cy: 1150, rx: 550, ry: 200 }],
      },
      {
        id: "waist",
        name: "Waist & abdomen",
        description:
          "Localised fat around the waist and abdomen that doesn't typically respond to diet and exercise is the most common starting point for a consultation.",
        commonProcedures: ["Liposuction", "Abdominoplasty"],
        keyConsiderations: [
          "Skin elasticity determines whether contouring alone is enough",
          "Overall weight stability is assessed before any procedure",
        ],
        hotspots: [{ cx: 1000, cy: 1700, rx: 320, ry: 320 }],
      },
      {
        id: "flanks",
        name: "Flanks & hips",
        description:
          "The flanks and hips are often assessed together with the waist for a consistent contour from the front and side.",
        commonProcedures: ["Liposuction", "Body contouring"],
        keyConsiderations: [
          "Considered as part of the overall silhouette, not in isolation",
          "Recovery time varies with the extent of the area treated",
        ],
        hotspots: [
          { cx: 500, cy: 2000, rx: 260, ry: 500 },
          { cx: 1500, cy: 2000, rx: 260, ry: 500 },
        ],
      },
    ],
  },

  men: {
    slug: "men",
    image: {
      src: "/images/procedures/men-explorer.jpg",
      alt: "Close-up portrait of a man, used to illustrate areas commonly discussed in a consultation planned around male anatomy",
      credit: "",
      nativeWidth: 2000,
      nativeHeight: 3000,
      objectPosition: "50% 18%",
    },
    regions: [
      {
        id: "brow-forehead",
        name: "Brow & forehead",
        description:
          "Male brow position sits lower and flatter than typical female patterns, which changes how procedures in this area are planned.",
        commonProcedures: ["Anti-wrinkle injections", "Brow contouring"],
        keyConsiderations: [
          "Technique differs from approaches designed for female patients",
          "Discretion is often a priority in planning and recovery",
        ],
        hotspots: [{ cx: 940, cy: 460, rx: 480, ry: 230 }],
      },
      {
        id: "jawline",
        name: "Jawline & chin",
        description:
          "Jawline and chin definition are assessed against male facial proportion, which typically differs from techniques planned for female patients.",
        commonProcedures: ["Jawline contouring", "Chin implants"],
        keyConsiderations: [
          "Male facial proportion guides technique and expected outcome",
          "A natural, proportionate result is generally the goal",
        ],
        hotspots: [{ cx: 940, cy: 1450, rx: 410, ry: 170 }],
      },
      {
        id: "chest",
        name: "Chest (gynecomastia)",
        description:
          "Enlarged male breast tissue is assessed for an underlying hormonal or medical cause before any procedure is considered.",
        commonProcedures: ["Gynecomastia correction", "Liposuction"],
        keyConsiderations: [
          "A medical cause is investigated first where relevant",
          "Scar placement and technique are planned around male chest anatomy",
        ],
        hotspots: [{ cx: 1000, cy: 2400, rx: 700, ry: 400 }],
      },
    ],
  },
};
