import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/home/Features";
import Hero1 from "@/components/home/Hero1";
import Features2 from "@/components/home/Features2";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Entro Metrix - AI-Powered Industrial Intelligence & Metrics",
  description:
    "Unlock the full power of your operations with EntroMetrix. We transform complex factory data into real-time performance excellence using AI-driven industrial intelligence, simulation, and sustainability insights.",
  keywords: [
    "industrial intelligence",
    "AI factory optimization",
    "real-time plant simulation",
    "manufacturing efficiency",
    "supply chain optimization",
    "sustainability operations",
    "Entro Metrix",
  ],
  authors: [{ name: "Entro Metrix", url: "https://entrometrix.ai" }],
  creator: "Entro Metrix",
  publisher: "Entro Metrix",
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
    title: "Entro Metrix - AI-Powered Industrial Intelligence & Metrics",
    description:
      "EntroMetrix optimizes industrial operations in real time with AI-driven insights, predictive problem-solving, and smarter supply chain coordination.",
    url: "https://entrometrix.ai",
    siteName: "Entro Metrix",
    images: [
      {
        url: "/og-image.jpg", // place this file in public/
        width: 1200,
        height: 630,
        alt: "EntroMetrix AI Industrial Intelligence Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Entro Metrix - AI-Powered Industrial Intelligence & Metrics",
    description:
      "Unlock efficiency, sustainability, and supply chain excellence with EntroMetrix's AI-powered industrial platform.",
    images: ["/og-image.jpg"],
    creator: "@EntroMetrix", // replace with your Twitter handle
  },

  alternates: {
    canonical: "https://entrometrix.ai",
  },

  category: "technology",
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
