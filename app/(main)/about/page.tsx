import AboutHero from "@/components/About/Hero1";
import TeamMembers from "@/components/About/team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "EntroMetrix - About",
  description:
    "Learn more about EntroMetrix, our mission, vision, and the team behind our AI-powered industrial intelligence platform.",
  keywords: [
    "EntroMetrix about",
    "industrial intelligence company",
    "AI in manufacturing",
    "sustainability mission",
    "industrial AI team",
  ],
  authors: [{ name: "EntroMetrix", url: "https://entrometrix.ai/about" }],
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
    title: "EntroMetrix - About",
    description:
      "Discover the mission and vision behind EntroMetrix, delivering AI-driven industrial intelligence solutions worldwide.",
    url: "https://entrometrix.ai/about",
    siteName: "EntroMetrix",
    images: [
      {
        url: "/og-image.jpg", // you can use a dedicated about page OG image if you want
        width: 1200,
        height: 630,
        alt: "EntroMetrix About Page",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "EntroMetrix - About",
    description:
      "Learn more about EntroMetrix and how we use AI to transform industrial operations.",
    images: ["/og-image.jpg"],
    creator: "@EntroMetrix",
  },

  alternates: {
    canonical: "https://entrometrix.ai/about",
  },

  category: "technology",
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
