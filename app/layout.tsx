import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const _spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EntroMetrix - AI-Powered Industrial Intelligence & Metrics",
  description:
    "EntroMetrix takes complex data and applies AI to deliver faster, smarter, and more efficient operations, driving impact from the shop floor to the supply chain.",
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${_spaceGrotesk.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
