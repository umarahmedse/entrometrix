import CareerHero from "@/components/Careers/Hero1";
import OpenJobs from "@/components/Careers/Jobs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "EntroMetrix - Careers",
  description:
    "Join the team at EntroMetrix and help shape the future of industrial intelligence.",
  keywords: [
    "EntroMetrix careers",
    "industrial intelligence jobs",
    "AI in manufacturing",
    "sustainability mission",
    "industrial AI team",
  ],
  authors: [{ name: "EntroMetrix", url: "https://entrometrix.ai/careers" }],
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
    url: "https://entrometrix.ai/careers",
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
    canonical: "https://entrometrix.ai/careers",
  },

  category: "technology",
};

const CareersPage = () => {
  return (
    <div className="dark:bg-gray-dark bg-white">
      <CareerHero />
      <OpenJobs />
    </div>
  );
};

export default CareersPage;
