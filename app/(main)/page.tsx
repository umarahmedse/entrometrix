import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/home/Features";
import Hero1 from "@/components/home/Hero1";
import Features2 from "@/components/home/Features2";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Entro Metrix - Home",
  description: "This is Home Page for Entro Metrix",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero1 />
      <Features2 />
      <Features />
      <Contact />
    </>
  );
}
