import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "EntroMetrix - Policy",
  description: "This is Policy Page for EntroMetrix",
  keywords: [
    "EntroMetrix policy",
    "privacy policy",
    "data protection",
    "industrial AI compliance",
    "user rights",
    "terms and policies",
  ],
  authors: [{ name: "EntroMetrix", url: "https://entrometrix.ai/policy" }],
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
    title: "EntroMetrix - Policy",
    description:
      "Read the EntroMetrix policy outlining data protection, privacy, and compliance for our AI-powered platform.",
    url: "https://entrometrix.ai/policy",
    siteName: "EntroMetrix",
    images: [
      {
        url: "/og-image.jpg", // replace with policy-specific OG image if available
        width: 1200,
        height: 630,
        alt: "EntroMetrix Policy Page",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "EntroMetrix - Policy",
    description:
      "Learn about EntroMetrix's privacy, data, and compliance policies.",
    images: ["/og-image.jpg"],
    creator: "@EntroMetrix",
  },

  alternates: {
    canonical: "https://entrometrix.ai/policy",
  },

  category: "technology",
};

const PolicyPage = () => {
  return (
    <>
      <div className="container pt-28 lg:pt-[150px]">
        <h1 className="mb-8 text-2xl font-bold lg:text-4xl">PRIVACY POLICY</h1>
        <p className="mb-3 text-lg">
          EntroMetrix Limited respects your privacy and is committed to
          protecting personal information processed through our
          software-as-a-service platform for industrial efficiency, our website
          and related services. This Privacy Policy explains what we collect,
          how we use it, with whom we share it, and your rights.
        </p>
        <p className="mb-3 text-lg">
          If you have questions, contact&nbsp;
          <Link href="mailto:info@entrometrix.ai" className="text-primary">
            info@entrometrix.ai
          </Link>
        </p>
        <br />
        <br />

        <p className="mb-3 text-lg">1. WHO WE ARE</p>
        <p className="mb-3 text-lg">
          EntroMetrix Limited is a company registered in England and Wales with
          its registered office at 124 City Road, London EC1V 2NX, United
          Kingdom. We provide an AI and platform that ingests operational data
          from manufacturing environments to generate insights, simulations and
          optimisation recommendations. For the personal information described
          in this Privacy Policy we act as controller, except where we act as
          processor for Customer Data under a separate data processing
          agreement.
        </p>
        <p className="mb-3 text-lg">2. INFORMATION WE COLLECT</p>
        <p className="text-lg">2.1. Information you provide</p>
        <p className="mb-3 text-lg">
          EntroMetrix Limited is a company registered in England and Wales with
          its registered office at 124 City Road, London EC1V 2NX, United
          Kingdom. We provide an AI and platform that ingests operational data
          from manufacturing environments to generate insights, simulations and
          optimisation recommendations. For the personal information described
          in this Privacy Policy we act as controller, except where we act as
          processor for Customer Data under a separate data processing
          agreement.
        </p>
        <p className="text-lg">2.2. Information collected automatically</p>
        <p className="mb-3 text-lg">
          Technical and usage data such as IP address, device and browser type,
          operating system, language, time zone, pages viewed, session
          identifiers, referring pages, feature usage and error logs. This
          supports security, operations and performance.
        </p>
        <p className="text-lg">2.3 Information from third parties</p>
        <p className="mb-3 text-lg">
          Business contact and engagement information from partners, events
          platforms, CRM or marketing tools, and public sources to maintain
          accurate records and conduct business-to-business marketing in
          accordance with law.
        </p>
        <p className="text-lg">2.4 Operational data from integrations</p>
        <p className="mb-3 text-lg">
          Where your organisation connects plant or enterprise systems to the
          platform, we may receive telemetry and metadata such as machine
          states, energy consumption, process variables, production orders,
          equipment identifiers and shift schedules. This data is generally
          non-personal. If personal data is included, we process it as described
          in this Privacy Policy and any applicable data processing agreement.
        </p>
        <p className="mb-3 text-lg">3. HOW WE USE YOUR INFORMATION</p>
        <p className="mb-3 text-lg">
          Operating, securing and improving the platform, including ingestion,
          modelling and simulation functions. Creating and administering
          accounts and user access. Providing support and service
          communications. Billing and contract administration. Monitoring,
          preventing and detecting fraud or misuse. Improving features and
          performance, including testing and quality assurance. Complying with
          legal obligations and enforcing terms. With consent where required,
          sending product updates, technical papers and event information
          relevant to industrial efficiency.
        </p>
        <p className="mb-3 text-lg">4. LEGAL BASES</p>
        <p className="mb-3 text-lg">
          Performance of a contract for users of the platform. Legitimate
          interests such as platform improvement, security and B2B marketing to
          professionals. Compliance with legal obligations. Consent where
          required. Protection of vital interests in rare cases.
        </p>
        <p className="mb-3 text-lg">5. SHARING</p>
        <p className="mb-3 text-lg">
          We do not sell personal information. We share limited personal
          information with service providers for hosting, analytics,
          communications, support and payment processing, each under contract
          and only for the purposes described. We may disclose information to
          comply with law, protect rights and safety, or as part of a corporate
          transaction.
        </p>
        <p className="mb-3 text-lg">6. COOKIES AND SIMILAR TECHNOLOGIES</p>
        <p className="mb-3 text-lg">
          We use cookies and similar technologies to operate, secure and measure
          use of our website and platform and to remember preferences. You can
          control cookies in your browser. For details, see our Cookie Policy on
          entrometrix.ai.
        </p>
        <p className="mb-3 text-lg">7. AI AND DIGITAL TWIN FEATURES</p>
        <p className="mb-3 text-lg">
          Our platform uses artificial intelligence, optimisation and simulation
          to generate insights, forecasts and recommended setpoints. Personal
          data used by these features is processed as described in this Privacy
          Policy and, where we act as processor, under our data processing
          agreement. AI outputs support decision making and are not a substitute
          for professional judgement or safety procedures. We do not use
          Customer Data to train general models that are made available to other
          customers without explicit written agreement.
        </p>
        <p className="mb-3 text-lg">8. INTERNATIONAL TRANSFERS</p>
        <p className="mb-3 text-lg">
          Where personal information is transferred outside the UK or EEA, we
          implement appropriate safeguards, such as the UK International Data
          Transfer Addendum, EU Standard Contractual Clauses and additional
          measures where required.
        </p>
        <p className="mb-3 text-lg">9. RETENTION</p>
        <p className="mb-3 text-lg">
          We retain personal information only as long as necessary for the
          purposes set out in this Privacy Policy and to meet legal, accounting
          and reporting requirements. Account records are typically retained for
          the contract term and up to 12 months after closure, unless a longer
          statutory period applies. Backup copies are deleted on scheduled
          cycles.
        </p>
        <p className="mb-3 text-lg">10. CHILDREN</p>
        <p className="mb-3 text-lg">
          Our services are for business users. We do not knowingly collect data
          from individuals under 18 years of age. If you believe a child has
          provided personal data, contact&nbsp;
          <Link href="mailto:info@entrometrix.ai" className="text-primary">
            info@entrometrix.ai
          </Link>{" "}
          so we can delete it.
        </p>
        <p className="mb-3 text-lg">11. YOUR RIGHTS</p>
        <p className="mb-3 text-lg">
          Depending on your location, you may have rights to access, rectify,
          erase, restrict or object to processing, to data portability, and to
          withdraw consent at any time without affecting prior processing. You
          may lodge a complaint with the UK Information Commissioner’s Office or
          your local supervisory authority. To exercise rights, email&nbsp;
          <Link href="mailto:info@entrometrix.ai" className="text-primary">
            info@entrometrix.ai
          </Link>
          .
        </p>
        <p className="mb-3 text-lg">12. DO NOT TRACK</p>
        <p className="mb-3 text-lg">
          We do not currently respond to browser Do Not Track signals. If
          standards change, we will update this notice.
        </p>
        <p className="mb-3 text-lg">13. UPDATES</p>
        <p className="mb-3 text-lg">
          We may update this Privacy Policy from time to time. Material changes
          will be communicated through our website or directly where
          appropriate. Please review it periodically.
        </p>
        <p className="mb-3 text-lg">14. CONTACT</p>
        <p className="mb-3 text-lg">
          Email:&nbsp;
          <Link href="mailto:info@entrometrix.ai" className="text-primary">
            info@entrometrix.ai
          </Link>
          <br />
          Address: EntroMetrix Limited, 124 City Road, London EC1V 2NX, United
          Kingdom
        </p>
      </div>
    </>
  );
};

export default PolicyPage;
