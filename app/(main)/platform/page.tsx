import Hero2 from "@/components/home/Hero2";
import SubHero1 from "@/components/platform/SubHero1";
import SubHero2 from "@/components/platform/SubHero2";
import SubHero3 from "@/components/platform/SubHero3";
import SubHero4 from "@/components/platform/SubHero4";
import SubHero5 from "@/components/platform/SubHero5";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Entro Metrix - Platform",
  description: "This is Platform Page for Entro Metrix",
  // other metadata
};

const PlatformPage = () => {
  return (
    <>
      <Hero2 />
      <SubHero1 />
      <SubHero2 />
      <SubHero3 />
      <SubHero4 />
      <SubHero5 />
    </>
  );
};

export default PlatformPage;
