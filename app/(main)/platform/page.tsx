import Contact from "@/components/Contact";
import Hero2 from "@/components/home/Hero2";
import SubHero1 from "@/components/platform/SubHero1";
import SubHero2 from "@/components/platform/SubHero2";
import SubHero3 from "@/components/platform/SubHero3";
import SubHero4 from "@/components/platform/SubHero4";
import SubHero5 from "@/components/platform/SubHero5";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "EntroMetrix - Platform",
  description: "This is Platform Page for EntroMetrix",
  keywords: [
    "EntroMetrix platform",
    "industrial AI platform",
    "manufacturing intelligence",
    "AI for industry",
    "sustainable industrial operations",
  ],
  authors: [{ name: "EntroMetrix", url: "https://entrometrix.ai/platform" }],
  creator: "EntroMetrix",
  publisher: "EntroMetrix",
  metadataBase: new URL("https://entrometrix.ai"),
  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: [
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },

  manifest: "/site.webmanifest",

  openGraph: {
    title: "EntroMetrix - Platform",
    description:
      "Explore the EntroMetrix industrial intelligence platform, powered by AI to optimize manufacturing and sustainability.",
    url: "https://entrometrix.ai/platform",
    siteName: "EntroMetrix",
    images: [
      {
        url: "/og-image.jpg", // replace if you have a dedicated platform page OG image
        width: 1200,
        height: 630,
        alt: "EntroMetrix Platform Overview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "EntroMetrix - Platform",
    description:
      "Discover how EntroMetrix's AI platform transforms industrial operations for efficiency and sustainability.",
    images: ["/og-image.jpg"],
    creator: "@EntroMetrix",
  },

  alternates: {
    canonical: "https://entrometrix.ai/platform",
  },

  category: "technology",
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
      <Contact />
    </>
  );
};

export default PlatformPage;
