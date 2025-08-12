import Image from "next/image";
import Link from "next/link";

const OpenJobs = () => {
  return (
    <section id="TeamMembers" className="overflow-hidden pt-16 md:pt-20 lg:pt-28 relative">
      <div className="container">
        <div className="w-full">
          <div
            className="wow fadeInUp shadow-three dark:bg-gray-dark mb-12 rounded-sm bg-white lg:mb-5 flex flex-col"
            data-wow-delay=".15s
            "
          >
            <h3 className="text-4xl lg:text-6xl leading-tight font-bold mb-8 z-10">
              We are <span className="text-primary">Hiring!</span>
            </h3>
            <p className="text-2xl leading-normal dark:text-gray-400">
              We&apos;re building something ambitious and always welcome interest from those who want to shape the future of industrial efficiency. If you&apos;re driven by data, impact, and solving real operational challenges, we&apos;d love to hear from you. Whether you&apos;re early in your career or bringing deep expertise, get in touch and we&apos;ll keep you in mind for future opportunities. Please send your CV and cover message to
              &nbsp;<Link href="mailto:info@entrometrix.ai" className="text-primary">info@entrometrix.ai</Link>
            </p>
          </div>
        </div>
        {/* <div className="w-full block md:flex gap-10 text-center mt-8 px-12">
          <table className="w-full text-2xl text-left">
            <thead>
              <tr className="text-gray-400">
                <th className="w-1/2 p-2">Job Title</th>
                <th className="w-1/2 p-2">Job Location</th>
              </tr>
            </thead>
            <tbody className="text-white">
              <tr className="border-t border-primary">
                <td className="p-2">Senior Software Engineer</td>
                <td className="p-2">London, UK</td>
              </tr>
              <tr className="border-t border-primary">
                <td className="p-2">Senior Software Engineer</td>
                <td className="p-2">London, UK</td>
              </tr>
              <tr className="border-t border-primary">
                <td className="p-2">Senior Software Engineer</td>
                <td className="p-2">London, UK</td>
              </tr>
              <tr className="border-t border-primary">
                <td className="p-2">Senior Software Engineer</td>
                <td className="p-2">London, UK</td>
              </tr>
            </tbody>
          </table>
        </div> */}
      </div>
    </section>
  );
};

export default OpenJobs;
