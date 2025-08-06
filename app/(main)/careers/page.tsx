import CareerHero from "@/components/Careers/Hero1";
import OpenJobs from "@/components/Careers/Jobs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Entro Metrix - About",
  description: "This is About Page for Entro Metrix",
  // other metadata
};

const CareersPage = () => {
  return (
    <>
      <CareerHero />
      <OpenJobs />
    </>
  );
};

export default CareersPage;
