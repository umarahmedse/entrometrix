import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/home/Features";
import Hero1 from "@/components/home/Hero1";
import Features2 from "@/components/home/Features2";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "EntroMetrix - Industrial Decarbonization Platform | Net Zero SaaS Solutions",
  description:
    "Transform your industrial operations with EntroMetrix's AI-powered decarbonization platform. Reduce carbon emissions, optimize energy efficiency, and achieve net-zero goals with real-time sustainability intelligence and compliance tracking.",
  keywords: [
    "industrial decarbonization",
    "carbon emissions reduction",
    "net zero platform",
    "sustainability SaaS",
    "industrial carbon management",
    "energy efficiency optimization",
    "ESG compliance software",
    "carbon footprint tracking",
    "industrial sustainability",
    "decarbonization technology",
    "green manufacturing",
    "carbon accounting platform",
    "industrial AI sustainability",
    "emissions monitoring software",
    "EntroMetrix",
  ],
  authors: [{ name: "EntroMetrix", url: "https://entrometrix.ai" }],
  creator: "EntroMetrix",
  publisher: "EntroMetrix",
  metadataBase: new URL("https://entrometrix.ai"),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
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
    title: "EntroMetrix - Industrial Decarbonization Platform | Achieve Net Zero Goals",
    description:
      "Leading industrial decarbonization SaaS platform helping manufacturers reduce carbon emissions, optimize energy efficiency, and achieve sustainability compliance with AI-driven insights.",
    url: "https://entrometrix.ai",
    siteName: "EntroMetrix",
    images: [
      {
        url: "/og-image.jpg", // place this file in public/
        width: 1200,
        height: 630,
        alt: "EntroMetrix Industrial Decarbonization Platform - Net Zero Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "EntroMetrix - Industrial Decarbonization Platform | Net Zero SaaS",
    description:
      "Transform industrial operations with AI-powered decarbonization. Reduce emissions, optimize energy, and achieve net-zero goals with EntroMetrix's sustainability platform.",
    images: ["/og-image.jpg"],
    creator: "@EntroMetrix", // replace with your Twitter handle
  },

  alternates: {
    canonical: "https://entrometrix.ai",
  },

  category: "industrial-technology",
  
  // Additional structured data for better SEO
  other: {
    "application-name": "EntroMetrix",
    "msapplication-TileColor": "#2563eb",
    "theme-color": "#ffffff",
  },
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
