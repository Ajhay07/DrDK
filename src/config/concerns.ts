export interface Concern {
  slug: string;
  label: string;
  descriptor: string;
}

export const concerns: Concern[] = [
  { slug: "face", label: "Face", descriptor: "Facial harmony and rejuvenation" },
  { slug: "nose", label: "Nose", descriptor: "Form, proportion and function" },
  { slug: "eyes", label: "Eyes", descriptor: "Refinement around the eyes" },
  { slug: "breast", label: "Breast", descriptor: "Shape, proportion and restoration" },
  { slug: "body", label: "Body", descriptor: "Contour and body confidence" },
  { slug: "men", label: "Men", descriptor: "Procedures designed around male anatomy" },
];
