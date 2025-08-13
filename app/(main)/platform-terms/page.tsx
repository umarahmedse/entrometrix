import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Entro Metrix - Platform T&Cs",
  description: "This is Platform T&Cs Page for Entro Metrix",
  keywords: [
    "Entro Metrix platform terms",
    "Entro Metrix T&Cs",
    "Entro Metrix terms and conditions",
    "industrial AI terms",
    "platform usage policy",
  ],
  authors: [
    { name: "Entro Metrix", url: "https://entrometrix.ai/platform-terms" },
  ],
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
    title: "Entro Metrix - Platform T&Cs",
    description:
      "Read the terms and conditions for using Entro Metrix's AI-powered industrial intelligence platform.",
    url: "https://entrometrix.ai/platform-terms",
    siteName: "Entro Metrix",
    images: [
      {
        url: "/og-image.jpg", // optionally use a T&Cs-specific image
        width: 1200,
        height: 630,
        alt: "EntroMetrix Platform Terms and Conditions",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Entro Metrix - Platform T&Cs",
    description:
      "Read the official terms and conditions for the Entro Metrix platform.",
    images: ["/og-image.jpg"],
    creator: "@EntroMetrix",
  },

  alternates: {
    canonical: "https://entrometrix.ai/platform-terms",
  },

  category: "technology",
};

const PolicyPage = () => {
  return (
    <>
      <div className="container pt-28 lg:pt-[150px]">
        <h1 className="mb-8 text-2xl font-bold lg:text-4xl">
          PLATFORM AGREEMENT TERMS AND CONDITIONS
        </h1>
        <p className="mb-3 text-lg">
          These Terms together with the Quotation form the Agreement between
          EntroMetrix Limited and the Customer for access to and use of the
          EntroMetrix AI and Digital Twin platform and related services.
        </p>
        <br />
        <br />

        <p className="mb-3 text-lg">1. INTERPRETATION</p>
        <p className="mb-3 text-lg">
          Key definitions Agreement means these Terms and the Quotation.
          Authorised Users means individuals whom the Customer permits to use
          the Services. Business Day means a day other than Saturday, Sunday or
          public holiday in England when banks in London are open. Business
          Hours means 9.00 am to 5.00 pm UK time on a Business Day. Change of
          Control means a change in ownership or control of more than 50 percent
          of voting securities or the ability to direct management. Confidential
          Information means information marked or reasonably understood as
          confidential, including Customer Data, Customer Output, the Services,
          the Models and non-public business information. Consultancy Services
          means professional services described in the Quotation, which may
          include onboarding, data onboarding, modelling workshops,
          configuration, integration and advisory support. Customer Data means
          data provided by or on behalf of the Customer to the Services,
          including operational telemetry from plant equipment and enterprise
          systems and any personal data included therein. Customer Output means
          results, reports, recommendations, simulations and other outputs
          generated using Customer Data. Data Protection Legislation means UK
          GDPR and the Data Protection Act 2018 and, if applicable, EU GDPR and
          related laws. Effective Date means the start date in the Quotation.
          Fees means fees in the Quotation, including Subscription Fees, Pilot
          Fees and fees for Consultancy Services. Initial Subscription Term
          means 12 months from the Effective Date unless stated otherwise in the
          Quotation. Integrations means connectors or interfaces used to ingest
          or export data, for example ERP, MES, SCADA, historians, IoT gateways
          and cloud storage. Maximum Usage means usage caps in the Quotation
          such as compute time, API calls, storage, message volume or user
          seats. Models means EntroMetrix proprietary analytical, simulation and
          AI models used to provide the Services, excluding Customer Data and
          Customer Output. Pilot Period means the pilot term in the Quotation.
          Pilot Services means time limited access to evaluate the Platform
          during the Pilot Period. Platform means the hosted EntroMetrix
          software and environment made available or as otherwise notified.
          Privacy Policy means the privacy policy published at entrometrix.ai.
          Quotation means the ordering document accepted by both parties.
          Renewal Period means a 12 month renewal under clause 13. Services
          means the Platform, Subscription Services, Pilot Services, Consultancy
          Services and Integrations as identified in the Quotation. Subscription
          Fees means recurring fees for Subscription Services and User
          Subscriptions. Subscription Services means production access to the
          Platform for internal business use. Subscription Term means the
          Initial Subscription Term together with any Renewal Periods. User
          Subscriptions means the number of user licences purchased. Virus means
          code or device intended to disrupt or harm systems or data.
        </p>
        <p className="mb-3 text-lg">2. FORMATION</p>
        <p className="mb-3 text-lg">
          The Agreement is formed when both parties execute the Quotation, or
          when EntroMetrix confirms in writing its acceptance of a Customer
          purchase order or payment that references the Quotation. Customer
          terms that conflict with this Agreement have no effect unless agreed
          in writing by EntroMetrix.
        </p>
        <p className="mb-3 text-lg">3. ACCESS AND USE</p>
        <p className="mb-3 text-lg">
          EntroMetrix grants a non exclusive, non transferable right for
          Authorised Users to access and use the Services for the Customer’s
          internal business purposes during the applicable term, subject to
          payment of Fees and compliance with the Agreement. The Customer shall
          not exceed purchased User Subscriptions. Credentials are for single
          named users and must be kept confidential.
        </p>
        <p className="mb-3 text-lg">4. ACCEPTABLE USE</p>
        <p className="mb-3 text-lg">
          The Customer shall not copy, modify, adapt, translate, reverse
          engineer or create derivative works from the Services except to the
          extent permitted by law. The Customer shall not access the Services to
          build a competing service, resell or provide them to third parties,
          introduce Viruses, attempt unauthorised access, bypass technical
          controls, or use the Services to process unlawful, infringing or
          offensive content. Text or data mining, scraping or harvesting is not
          permitted unless required by law and notified to EntroMetrix in
          advance. The Customer shall use reasonable measures to prevent
          unauthorised access and shall notify EntroMetrix promptly of suspected
          misuse.
        </p>
        <p className="mb-3 text-lg">5. AI, SIMULATION AND SAFETY</p>
        <p className="mb-3 text-lg">
          The Services may generate insights, forecasts, simulations and
          optimisation recommendations using the Models. Outputs are decision
          support only. The Customer is responsible for verifying outputs and
          for all decisions and actions taken in reliance on them, including
          safety, regulatory and quality matters. The Customer must not use the
          Services to make unattended safety critical changes to industrial
          equipment without appropriate human review, interlocks and change
          control.
        </p>
        <p className="mb-3 text-lg">6. INTEGRATIONS AND CUSTOMER SYSTEMS</p>
        <p className="mb-3 text-lg">
          EntroMetrix may provide Integrations to ingest or export data. The
          Customer is responsible for its own network, connectivity, data
          mappings, permissions and any third party terms governing integrated
          systems. EntroMetrix may provide reasonable guidance but is not
          responsible for third party systems.
        </p>
        <p className="mb-3 text-lg">7. ADDITIONAL USERS AND USAGE</p>
        <p className="mb-3 text-lg">
          The Customer may request additional User Subscriptions or increases to
          Maximum Usage. If approved, EntroMetrix will invoice pro rata for the
          remainder of the current period. If Maximum Usage is regularly
          exceeded, EntroMetrix may require a fee increase or may rate limit or
          suspend the relevant features until a revised Quotation is agreed.
        </p>
        <p className="mb-3 text-lg">8. SERVICE DELIVERY AND SUPPORT</p>
        <p className="mb-3 text-lg">
          EntroMetrix will use commercially reasonable efforts to make the
          Platform available continuously except for planned and emergency
          maintenance. Support is available during Business Hours by email at
          info@entrometrix.ai unless a different plan is stated in the
          Quotation. Consultancy Services will be delivered as described in the
          Quotation and expire at the end of the Consultancy Period.
        </p>
        <p className="mb-3 text-lg">9. DATA PROTECTION AND SECURITY</p>
        <p className="mb-3 text-lg">
          Each party shall comply with Data Protection Legislation. For Customer
          Data that includes personal data processed in the Platform, the
          Customer acts as controller and EntroMetrix acts as processor unless
          otherwise agreed in a data processing agreement. For account
          administration, billing and service analytics, EntroMetrix acts as
          controller. The parties shall execute a data processing agreement
          where required. EntroMetrix will implement appropriate technical and
          organisational measures designed to protect Customer Data against
          unauthorised or unlawful processing and accidental loss, destruction
          or damage.
        </p>
        <p className="mb-3 text-lg">10. CUSTOMER OBLIGATIONS</p>
        <p className="mb-3 text-lg">
          The Customer shall provide timely access to information and systems
          required to deliver the Services, ensure its systems meet notified
          specifications, and remain responsible for configuration choices and
          change control. The Customer is responsible for the accuracy, quality
          and legality of Customer Data and for ensuring that it has the
          necessary rights to provide Customer Data to the Services.
        </p>
        <p className="mb-3 text-lg">11. FEES AND PAYMENT</p>
        <p className="mb-3 text-lg">
          Fees are as set out in the Quotation. Subscription Fees are payable in
          advance unless stated otherwise. Consultancy Services are payable as
          stated in the Quotation. Invoices are due within 30 days. Late amounts
          may be suspended after 5 Business Days written notice and accrue
          interest at 3 percent per annum over the Bank of England base rate.
          Fees are exclusive of VAT and taxes and are payable in pounds sterling
          without set off or deduction except as required by law. EntroMetrix
          may adjust Subscription Fees for a Renewal Period with at least 60
          days prior written notice.
        </p>
        <p className="mb-3 text-lg">12. INTELLECTUAL PROPERTY</p>
        <p className="mb-3 text-lg">
          EntroMetrix and its licensors retain all intellectual property rights
          in the Services, Platform, Models, documentation and related
          technology. No rights are granted other than as expressly set out. The
          Customer owns Customer Data and Customer Output. The Customer grants
          EntroMetrix a non exclusive, royalty free licence to process Customer
          Data and Customer Output to deliver the Services, maintain security,
          improve performance and quality and develop features for the Customer.
          EntroMetrix does not use Customer Data to train general models for
          other customers without explicit written agreement. The Customer
          grants EntroMetrix a right to use the Customer’s name and logo in
          customer lists and marketing materials with the Customer’s prior
          written consent, which shall not be unreasonably withheld or delayed.
          Feedback may be used by EntroMetrix without restriction and without
          obligation.
        </p>
        <p className="mb-3 text-lg">13. WARRANTIES AND DISCLAIMERS</p>
        <p className="mb-3 text-lg">
          EntroMetrix warrants that it will provide the Services with reasonable
          skill and care. Except as set out in this Agreement, the Services are
          provided as is and without warranty that they will be uninterrupted or
          error free or that outputs will be accurate or fit for a particular
          purpose.
        </p>
        <p className="mb-3 text-lg">14. LIABILITY</p>
        <p className="mb-3 text-lg">
          Nothing limits liability for death or personal injury caused by
          negligence or for fraud. Subject to the foregoing, neither party is
          liable for loss of profits, revenue, goodwill, data or other indirect
          or consequential loss. Subject to the foregoing, each party’s total
          aggregate liability in any 12 month period beginning on the Effective
          Date or an anniversary shall not exceed the Fees paid or payable by
          the Customer in that period. The Customer shall indemnify EntroMetrix
          against claims that Customer Data or the Customer’s use of the
          Services in breach of this Agreement infringes the rights of a third
          party or violates law, provided EntroMetrix gives prompt notice and
          reasonable assistance.
        </p>
        <p className="mb-3 text-lg">
          15. TERM, RENEWAL, SUSPENSION AND TERMINATION
        </p>
        <p className="mb-3 text-lg">
          Subscription Services commence on the Effective Date and continue for
          the Initial Subscription Term. They renew automatically for successive
          Renewal Periods of 12 months unless either party gives at least 30
          days written notice before the end of the then current term. Either
          party may terminate for material breach not remedied within 30 days
          after notice, for non payment after 30 days, insolvency or cessation
          of business. EntroMetrix may suspend the Services for non payment,
          security reasons, suspected misuse or to comply with law. On
          termination, access ceases. On written request within 30 days after
          termination, EntroMetrix will make available a machine readable export
          of Customer Data then stored. Thereafter Customer Data may be deleted
          subject to legal retention and backup cycles. Clauses that should
          survive will do so.
        </p>
        <p className="mb-3 text-lg">16. PUBLICITY</p>
        <p className="mb-3 text-lg">
          EntroMetrix may reference the Customer’s name and logo in customer
          lists and case studies with the Customer’s prior written consent.
        </p>
        <p className="mb-3 text-lg">17. FORCE MAJEURE</p>
        <p className="mb-3 text-lg">
          Neither party is liable for delay or failure due to events beyond its
          reasonable control. The affected party shall notify the other and use
          reasonable efforts to mitigate impact.
        </p>
        <p className="mb-3 text-lg">18. ASSIGNMENT AND SUBCONTRACTING</p>
        <p className="mb-3 text-lg">
          The Customer shall not assign or transfer this Agreement without
          EntroMetrix prior written consent. EntroMetrix may assign or
          subcontract on notice, provided this does not materially reduce the
          level of service.
        </p>
        <p className="mb-3 text-lg">
          19. ENTIRE AGREEMENT AND ORDER OF PRECEDENCE
        </p>
        <p className="mb-3 text-lg">
          This Agreement constitutes the entire agreement for the Services and
          supersedes prior proposals and understandings. If there is a conflict,
          the order of precedence is the Quotation, any data processing
          agreement, then these Terms.
        </p>
        <p className="mb-3 text-lg">20. VARIATION AND WAIVER</p>
        <p className="mb-3 text-lg">
          Any variation must be in writing and signed by both parties. No
          failure or delay to exercise a right operates as a waiver.
        </p>
        <p className="mb-3 text-lg">21. SEVERANCE</p>
        <p className="mb-3 text-lg">
          If any provision is held invalid or unenforceable, it shall be
          modified to the minimum extent necessary or deemed deleted. The
          remainder remains in force.
        </p>
        <p className="mb-3 text-lg">22. NOTICES</p>
        <p className="mb-3 text-lg">
          Notices must be in writing and delivered by hand, by pre paid first
          class post or by email to the address or email stated in the
          Quotation. Email notices are deemed received when sent, provided no
          delivery failure notification is received, or if outside Business
          Hours, when Business Hours resume.
        </p>
        <p className="mb-3 text-lg">23. GOVERNING LAW AND JURISDICTION</p>
        <p className="mb-3 text-lg">
          This Agreement is governed by English law. The courts of England and
          Wales have exclusive jurisdiction.
        </p>
        <br />

        <p className="mb-3 text-lg">
          Contact for contractual notices and queries:&nbsp;
          <Link href="mailto:info@entrometrix.ai" className="text-primary">
            info@entrometrix.ai
          </Link>
          <br />
          Registered office: EntroMetrix Limited, 124 City Road, London EC1V
          2NX, United Kingdom
        </p>
      </div>
    </>
  );
};

export default PolicyPage;
