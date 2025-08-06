import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Entro Metrix - Policy",
  description: "This is Policy Page for Entro Metrix",
  // other metadata
};

const PolicyPage = () => {
  return (
    <>
      <div className="container pt-28 lg:pt-[150px]">
        <h3 className="text-2xl lg:text-4xl font-bold mb-8">PRIVACY POLICY</h3>
        <p className="text-lg mb-3">EntroMetrix Limited respects your privacy and is committed to protecting personal information processed through our software-as-a-service platform for industrial efficiency, our website and related services. This Privacy Policy explains what we collect, how we use it, with whom we share it, and your rights.</p>
        <p className="text-lg mb-3">If you have questions, contact&nbsp;<Link href="mailto:info@entrometrix.com" className="text-primary">info@entrometrix.com</Link></p>
        <p className="text-lg mb-3">1. WHO WE ARE</p>
        <p className="text-lg mb-3">
          EntroMetrix Limited is a company registered in England and Wales with its registered office at 124 City Road, London EC1V 2NX, United Kingdom. We provide an AI and platform that ingests operational data from manufacturing environments to generate insights, simulations and optimisation recommendations. For the personal information described in this Privacy Policy we act as controller, except where we act as processor for Customer Data under a separate data processing agreement.
        </p>
        <p className="text-lg mb-3">
          2. INFORMATION WE COLLECT
        </p>
        <p className="text-lg">
          2.1. Information you provide
        </p>
        <p className="text-lg mb-3">
          EntroMetrix Limited is a company registered in England and Wales with its registered office at 124 City Road, London EC1V 2NX, United Kingdom. We provide an AI and platform that ingests operational data from manufacturing environments to generate insights, simulations and optimisation recommendations. For the personal information described in this Privacy Policy we act as controller, except where we act as processor for Customer Data under a separate data processing agreement.
        </p>
        <p className="text-lg">
          2.2. Information collected automatically
        </p>
        <p className="text-lg mb-3">
          Technical and usage data such as IP address, device and browser type, operating system, language, time zone, pages viewed, session identifiers, referring pages, feature usage and error logs. This supports security, operations and performance.
        </p>
      </div>
    </>
  );
};

export default PolicyPage;
