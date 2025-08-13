export default function Head() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Entro Metrix",
            url: "https://entrometrix.ai",
            logo: "https://entrometrix.ai/favicon-96x96.png",
            contactPoint: {
              "@type": "ContactPoint",
              email: "info@entrometrix.ai",
              contactType: "Customer Service",
            },
            sameAs: [
              "https://linkedin.com/company/entrometrix",
              "https://twitter.com/EntroMetrix",
            ],
          }),
        }}
      />
    </>
  );
}
