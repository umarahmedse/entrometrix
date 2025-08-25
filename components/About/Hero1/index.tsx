import Divider from "@/components/Common/divider";
import Image from "next/image";

const AboutHero = () => {
  return (
    <>
      <section
        id="about"
        className="relative flex h-screen overflow-hidden pb-16 pt-[120px] dark:bg-gray-dark md:pt-[150px] lg:flex-col-reverse xl:pt-[180px] 2xl:pt-[200px]"
      >
        <div className="container relative z-10 flex flex-col justify-between lg:flex-row">
          <div className="w-full xl:w-6/12">
            <h1 className=" text-4xl font-bold leading-tight lg:text-6xl">
              <span className="text-primary">AI-Powered</span>&nbsp; Solutions
              for Smarter Industry
            </h1>
          </div>
          <div className="flex w-full flex-col-reverse xl:w-5/12">
            <p className="text-lg leading-relaxed text-white">
              Built by experts from the University of Cambridge and Imperial College London, helping organizations become more efficient, sustainable, and resilient.
            </p>
          </div>
        </div>
        {/* <div className="absolute inset-0 z-0 hidden lg:block">
          <Image src="/images/about/bg.jpg" alt="about background" fill />
        </div> */}
      </section>
      {/* <div className="container block lg:hidden">
        <hr className="border-primary" />
      </div> */}
      <Divider/>
    </>
  );
};

export default AboutHero;
