import Image from "next/image";

const CareerHero = () => {
  return (
    <>
      <section
        id="about"
        className="relative flex h-screen overflow-hidden pb-16 pt-[120px] dark:bg-gray-dark md:pt-[150px] lg:flex-col-reverse xl:pt-[180px] 2xl:pt-[200px]"
      >
        <div className="container relative z-10 flex flex-col justify-between lg:flex-row">
          <div className="w-full xl:w-6/12">
            <h1 className="mt-5 text-4xl font-bold leading-tight lg:text-7xl">
              <span className="text-primary">Careers</span>&nbsp; at EntroMetrix
            </h1>
          </div>
          <div className="flex w-full flex-col-reverse xl:w-5/12">
            <p className="text-2xl leading-relaxed text-white">
              Grow with us in a creative, inspiring workplace where your ideas
              make an impact.
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

export default CareerHero;
