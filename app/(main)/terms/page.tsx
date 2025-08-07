import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Entro Metrix - Terms of Use",
  description: "This is Terms Page for Entro Metrix",
  // other metadata
};

const PolicyPage = () => {
  return (
    <>
      <div className="container pt-28 lg:pt-[150px]">
        <h3 className="text-2xl lg:text-4xl font-bold mb-8">TERMS OF USE</h3>
        <p className="text-lg mb-3">These Terms of Use set out the rules for using the EntroMetrix website at&nbsp;<Link href="mailto:info@entrometrix.ai" className="text-primary">info@entrometrix.ai</Link> and the EntroMetrix platform at app.<Link href="mailto:info@entrometrix.ai" className="text-primary">info@entrometrix.ai</Link>.</p><br/><br/>
        
        <p className="text-lg mb-3">
          1. WHO WE ARE AND CONTACT
        </p>
        <p className="text-lg mb-3">
          The website and platform are operated by EntroMetrix Limited with its registered office at 124 City Road, London EC1V 2NX, United Kingdom. Contact&nbsp;<Link href="mailto:info@entrometrix.ai" className="text-primary">info@entrometrix.ai</Link>.
        </p>
        <p className="text-lg mb-3">
          2. ACCEPTANCE OF TERMS
        </p>
        <p className="text-lg mb-3">
          By using the website or platform, you accept these Terms of Use. If you do not agree, do not use the website or platform. If your organisation has a Platform Agreement with us, that agreement governs your access to and use of the platform and prevails in the event of conflict.
        </p>
        <p className="text-lg mb-3">
          3. CHANGES
        </p>
        <p className="text-lg mb-3">
          We may update these Terms of Use and may change, suspend or withdraw parts of the website or platform for operational, legal or business reasons.
        </p>
        <p className="text-lg mb-3">
          4. ACCOUNT SECURITY
        </p>
        <p className="text-lg mb-3">
          Keep credentials confidential and do not share them. Notify us promptly at&nbsp;<Link href="mailto:info@entrometrix.ai" className="text-primary">info@entrometrix.ai</Link> if you suspect unauthorised access. We may disable credentials where we reasonably believe these terms have been breached.
        </p>
        <p className="text-lg mb-3">
          5. INTELLECTUAL PROPERTY
        </p>
        <p className="text-lg mb-3">
          We and our licensors own all intellectual property rights in the website, platform, digital twin models and content. You may use content for internal business use only. Do not reproduce, modify or distribute content without written permission.
        </p>
        <p className="text-lg mb-3">
          6. ACCEPTABLE USE
        </p>
        <p className="text-lg mb-3">
          You must not use the website or platform unlawfully or fraudulently. Do not copy, reverse engineer or create derivative works from software, attempt unauthorised access, introduce malware, overload or interfere with performance, bypass access controls, or upload infringing, offensive or illegal content. We may remove content and suspend access if these terms are breached.
        </p>
        <p className="text-lg mb-3">
          7. TEXT AND DATA MINING
        </p>
        <p className="text-lg mb-3">
          You must not conduct text or data mining, scraping or harvesting of the website or platform unless required by law and only with our prior written consent. We expressly reserve our rights.
        </p>
        <p className="text-lg mb-3">
          8. AI AND DIGITAL TWIN FEATURES
        </p>
        <p className="text-lg mb-3">
          The platform provides AI outputs, simulations and optimisation recommendations to support industrial decision making. Outputs are designed to support professional judgement and should not be treated as definitive guidance. You remain responsible for decisions made using outputs, including safety, quality and compliance. Do not use the platform to automate safety critical changes without appropriate human review and safeguards.
        </p>
        <p className="text-lg mb-3">
          9. INFORMATION DISCLAIMER
        </p>
        <p className="text-lg mb-3">
          Content is provided for general information only and is not professional advice. We use reasonable efforts to maintain accurate and current information but provide no warranty that content is complete, accurate or fit for purpose.
        </p>
        <p className="text-lg mb-3">
          10. THIRD PARTY LINKS AND INTEGRATIONS
        </p>
        <p className="text-lg mb-3">
          Links to third party sites are provided for convenience. We are not responsible for their content or policies. Where the platform integrates with third party systems such as ERP, MES, SCADA or IoT gateways, those systems are governed by the third party terms, and you are responsible for your configurations and permissions.
        </p>
        <p className="text-lg mb-3">
          11.	LIABILITY
        </p>
        <p className="text-lg mb-3">
          We do not exclude liability where it would be unlawful to do so, including for death, personal injury or fraud. If you are a business user, we exclude implied terms and are not liable for loss of profits, revenue, goodwill, data or other indirect or consequential loss. The platform is provided for business users. We do not offer consumer access.
        </p>
        <p className="text-lg mb-3">
          12.	SECURITY AND MISUSE
        </p>
        <p className="text-lg mb-3">
          We do not guarantee that the website or platform is free from bugs or viruses. Use your own protective measures. Do not introduce malicious code or attempt to gain unauthorised access. We may report misuse to authorities.
        </p>
        <p className="text-lg mb-3">
          13. GOVERNING LAW AND JURISDICTION
        </p>
        <p className="text-lg mb-3">
          These Terms of Use are governed by English law. The courts of England and Wales have exclusive jurisdiction.
        </p>
      </div>
    </>
  );
};

export default PolicyPage;
