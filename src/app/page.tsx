import { ConsultationBand } from "@/components/sections/ConsultationBand";
import { CredentialsTrust } from "@/components/sections/CredentialsTrust";
import { ExploreConcerns } from "@/components/sections/ExploreConcerns";
import { Hero } from "@/components/sections/Hero";
import { FinalConsultationCTA } from "@/components/sections/FinalConsultationCTA";
import { MeetDrDinesh } from "@/components/sections/MeetDrDinesh";
import { PatientEducation } from "@/components/sections/PatientEducation";
import { PatientJourney } from "@/components/sections/PatientJourney";
import { Philosophy } from "@/components/sections/Philosophy";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home(): React.ReactElement {
  return (
    <main id="main-content" className="flex-1">
      <Hero />
      <ConsultationBand />
      <MeetDrDinesh />
      <ExploreConcerns />
      <Philosophy />
      <CredentialsTrust />
      <Testimonials />
      <PatientJourney />
      <PatientEducation />
      <FinalConsultationCTA />
    </main>
  );
}
