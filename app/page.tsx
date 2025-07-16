import Blog from "@/components/Blog";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/home/Features";
import DemoSection from "@/components/home/DemoSection";
import Hero1 from "@/components/home/Hero1";
import Hero2 from "@/components/home/Hero2";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Entro Metrix - Home",
  description: "This is Home for Startup Nextjs Template",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero1 />
      <Hero2 />
      <DemoSection />
      <Features />
      <Video />
      <Testimonials />
      <Pricing />
      <Blog />
      <Contact />
    </>
  );
}
