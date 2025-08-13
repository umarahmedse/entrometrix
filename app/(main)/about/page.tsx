import AboutHero from "@/components/About/Hero1";
import TeamMembers from "@/components/About/team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Entro Metrix - About",
  description:
    "Learn more about Entro Metrix, our mission, vision, and the team behind our AI-powered industrial intelligence platform.",
  keywords: [
    "Entro Metrix about",
    "industrial intelligence company",
    "AI in manufacturing",
    "sustainability mission",
    "industrial AI team",
  ],
  authors: [{ name: "Entro Metrix", url: "https://entrometrix.ai/about" }],
  creator: "Entro Metrix",
  publisher: "Entro Metrix",
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
    title: "Entro Metrix - About",
    description:
      "Discover the mission and vision behind Entro Metrix, delivering AI-driven industrial intelligence solutions worldwide.",
    url: "https://entrometrix.ai/about",
    siteName: "Entro Metrix",
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
    title: "Entro Metrix - About",
    description:
      "Learn more about Entro Metrix and how we use AI to transform industrial operations.",
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
