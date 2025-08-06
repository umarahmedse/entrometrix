import AboutHero from "@/components/About/Hero1";
import TeamMembers from "@/components/About/team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Entro Metrix - About",
  description: "This is About Page for Entro Metrix",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <AboutHero />
      <TeamMembers />
    </>
  );
};

export default AboutPage;
