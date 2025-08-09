import Image from "next/image";

const AboutHero = () => {
  return (
    <>
      <section
        id="about"
        className="dark:bg-gray-dark relative overflow-hidden pt-[120px] md:pt-[150px] xl:pt-[180px] 2xl:pt-[200px] h-screen flex flex-col-reverse pb-16"
      >
        <div className="relative container flex justify-between z-10">
          <div className="w-full xl:w-6/12">
            <h3 className="text-4xl lg:text-7xl leading-tight font-bold mt-5">
              <span className="text-primary">AI-Powered</span>&nbsp; Solutions for Smarter Industry
            </h3>
          </div>
          <div className="w-full xl:w-5/12 flex flex-col-reverse">
            <p className="text-2xl leading-relaxed text-white">
              Developed by experts from the University of Cambridge and Imperial College London, driving efficient, sustainable and resilient organisations.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 z-0">
          <Image src="/images/about/bg.jpg" alt="about background" fill />
        </div>
      </section>
    </>
  );
};

export default AboutHero;
