import Image from "next/image";
import Link from "next/link";

const OpenJobs = () => {
  return (
    <section id="TeamMembers" className="overflow-hidden pt-16 md:pt-20 lg:pt-28 relative">
      <div className="container">
        <div className="w-full">
          <div
            className="wow fadeInUp shadow-three dark:bg-gray-dark mb-12 rounded-sm bg-white lg:mb-5 flex flex-col"
            data-wow-delay=".15s"
          >
            <h3 className="text-3xl lg:text-5xl leading-tight font-bold mb-8 z-10">
              We&apos;re <span className="text-primary">Hiring!</span>
            </h3>
            <p className="text-lg leading-normal dark:text-gray-400">
              We&apos;re building something ambitious and always welcome interest from people who want to shape the future of industrial efficiency. If you&apos;re driven by data, impact, and solving real operational challenges, we&apos;d love to hear from you. Whether you&apos;re early in your career or bringing deep expertise, reach out and we&apos;ll keep you in mind for future opportunities. Please send your resume and cover letter to&nbsp;
              <Link href="mailto:info@entrometrix.ai" className="text-primary">info@entrometrix.ai</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenJobs;
