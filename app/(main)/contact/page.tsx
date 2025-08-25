import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Entrometrix AI",
  description:
    "Get in touch with Entrometrix AI. We're here to help with your questions, collaborations, and inquiries.",
  openGraph: {
    title: "Contact Us | Entrometrix AI",
    description:
      "Get in touch with Entrometrix AI. We're here to help with your questions, collaborations, and inquiries.",
    url: "https://www.entrometrix.ai/contact",
    siteName: "Entrometrix AI",
  },
  alternates: {
    canonical: "https://www.entrometrix.ai/contact",
  },
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb pageName="Contact Us" description="Get in touch!" />
      <Contact />
    </>
  );
};

export default ContactPage;
