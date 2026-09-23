export interface ClinicPhoto {
  src: string;
  alt: string;
}

/**
 * Real clinic/behind-the-scenes photography of Dr. Dinesh Kumar, supplied
 * directly by the practice — distinct from the before/after patient-result
 * gallery, which requires per-case informed consent.
 */
export const clinicPhotos: ClinicPhoto[] = [
  { src: "/gallery/clinic-03.jpg", alt: "Dr. Dinesh Kumar, studio portrait" },
  { src: "/gallery/clinic-07.jpg", alt: "Dr. Dinesh Kumar with a stethoscope, studio portrait" },
  { src: "/gallery/clinic-01.jpg", alt: "Dr. Dinesh Kumar at the clinic" },
  { src: "/gallery/clinic-02.jpg", alt: "Dr. Dinesh Kumar at the clinic, with awards and certifications in the background" },
  { src: "/gallery/clinic-04.jpg", alt: "Dr. Dinesh Kumar with fellow surgeons" },
  { src: "/gallery/clinic-05.jpg", alt: "Dr. Dinesh Kumar with a colleague at the hospital" },
  { src: "/gallery/clinic-06.jpg", alt: "Dr. Dinesh Kumar with fellow surgeons at the hospital" },
];
