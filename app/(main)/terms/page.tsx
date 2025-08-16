import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Entro Metrix - Terms of Use",
  description: "This is Terms Page for Entro Metrix",
  keywords: [
    "Entro Metrix terms of use",
    "terms and conditions",
    "platform terms",
    "industrial AI legal terms",
    "user agreement",
  ],
  authors: [{ name: "Entro Metrix", url: "https://entrometrix.ai/terms" }],
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
    title: "Entro Metrix - Terms of Use",
    description:
      "Read the official Terms of Use for the Entro Metrix AI-powered industrial intelligence platform.",
    url: "https://entrometrix.ai/terms",
    siteName: "Entro Metrix",
    images: [
      {
        url: "/og-image.jpg", // replace with a terms-specific OG image if available
        width: 1200,
        height: 630,
        alt: "EntroMetrix Terms of Use",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Entro Metrix - Terms of Use",
    description:
      "Review Entro Metrix's Terms of Use for our AI-driven industrial solutions platform.",
    images: ["/og-image.jpg"],
    creator: "@EntroMetrix",
  },

  alternates: {
    canonical: "https://entrometrix.ai/terms",
  },

  category: "technology",
};

const PolicyPage = () => {
  return (
    <>
      <div className="container pt-28 lg:pt-[150px]">
        <h1 className="mb-8 text-2xl font-bold lg:text-4xl">TERMS OF USE</h1>
        <p className="mb-3 text-lg">
          These Terms of Use set out the rules for using the EntroMetrix website
          at&nbsp;
          <Link href="mailto:info@entrometrix.ai" className="text-primary">
            info@entrometrix.ai
          </Link>{" "}
          and the EntroMetrix platform at app.
          <Link href="mailto:info@entrometrix.ai" className="text-primary">
            info@entrometrix.ai
          </Link>
          .
        </p>
        <br />
        <br />

        <p className="mb-3 text-lg">1. WHO WE ARE AND CONTACT</p>
        <p className="mb-3 text-lg">
          The website and platform are operated by EntroMetrix Limited with its
          registered office at 124 City Road, London EC1V 2NX, United Kingdom.
          Contact&nbsp;
          <Link href="mailto:info@entrometrix.ai" className="text-primary">
            info@entrometrix.ai
          </Link>
          .
        </p>
        <p className="mb-3 text-lg">2. ACCEPTANCE OF TERMS</p>
        <p className="mb-3 text-lg">
          By using the website or platform, you accept these Terms of Use. If
          you do not agree, do not use the website or platform. If your
          organisation has a Platform Agreement with us, that agreement governs
          your access to and use of the platform and prevails in the event of
          conflict.
        </p>
        <p className="mb-3 text-lg">3. CHANGES</p>
        <p className="mb-3 text-lg">
          We may update these Terms of Use and may change, suspend or withdraw
          parts of the website or platform for operational, legal or business
          reasons.
        </p>
        <p className="mb-3 text-lg">4. ACCOUNT SECURITY</p>
        <p className="mb-3 text-lg">
          Keep credentials confidential and do not share them. Notify us
          promptly at&nbsp;
          <Link href="mailto:info@entrometrix.ai" className="text-primary">
            info@entrometrix.ai
          </Link>{" "}
          if you suspect unauthorised access. We may disable credentials where
          we reasonably believe these terms have been breached.
        </p>
        <p className="mb-3 text-lg">5. INTELLECTUAL PROPERTY</p>
        <p className="mb-3 text-lg">
          We and our licensors own all intellectual property rights in the
          website, platform, digital twin models and content. You may use
          content for internal business use only. Do not reproduce, modify or
          distribute content without written permission.
        </p>
        <p className="mb-3 text-lg">6. ACCEPTABLE USE</p>
        <p className="mb-3 text-lg">
          You must not use the website or platform unlawfully or fraudulently.
          Do not copy, reverse engineer or create derivative works from
          software, attempt unauthorised access, introduce malware, overload or
          interfere with performance, bypass access controls, or upload
          infringing, offensive or illegal content. We may remove content and
          suspend access if these terms are breached.
        </p>
        <p className="mb-3 text-lg">7. TEXT AND DATA MINING</p>
        <p className="mb-3 text-lg">
          You must not conduct text or data mining, scraping or harvesting of
          the website or platform unless required by law and only with our prior
          written consent. We expressly reserve our rights.
        </p>
        <p className="mb-3 text-lg">8. AI AND DIGITAL TWIN FEATURES</p>
        <p className="mb-3 text-lg">
          The platform provides AI outputs, simulations and optimisation
          recommendations to support industrial decision making. Outputs are
          designed to support professional judgement and should not be treated
          as definitive guidance. You remain responsible for decisions made
          using outputs, including safety, quality and compliance. Do not use
          the platform to automate safety critical changes without appropriate
          human review and safeguards.
        </p>
        <p className="mb-3 text-lg">9. INFORMATION DISCLAIMER</p>
        <p className="mb-3 text-lg">
          Content is provided for general information only and is not
          professional advice. We use reasonable efforts to maintain accurate
          and current information but provide no warranty that content is
          complete, accurate or fit for purpose.
        </p>
        <p className="mb-3 text-lg">10. THIRD PARTY LINKS AND INTEGRATIONS</p>
        <p className="mb-3 text-lg">
          Links to third party sites are provided for convenience. We are not
          responsible for their content or policies. Where the platform
          integrates with third party systems such as ERP, MES, SCADA or IoT
          gateways, those systems are governed by the third party terms, and you
          are responsible for your configurations and permissions.
        </p>
        <p className="mb-3 text-lg">11. LIABILITY</p>
        <p className="mb-3 text-lg">
          We do not exclude liability where it would be unlawful to do so,
          including for death, personal injury or fraud. If you are a business
          user, we exclude implied terms and are not liable for loss of profits,
          revenue, goodwill, data or other indirect or consequential loss. The
          platform is provided for business users. We do not offer consumer
          access.
        </p>
        <p className="mb-3 text-lg">12. SECURITY AND MISUSE</p>
        <p className="mb-3 text-lg">
          We do not guarantee that the website or platform is free from bugs or
          viruses. Use your own protective measures. Do not introduce malicious
          code or attempt to gain unauthorised access. We may report misuse to
          authorities.
        </p>
        <p className="mb-3 text-lg">13. GOVERNING LAW AND JURISDICTION</p>
        <p className="mb-3 text-lg">
          These Terms of Use are governed by English law. The courts of England
          and Wales have exclusive jurisdiction.
        </p>
      </div>
    </>
  );
};

export default PolicyPage;
