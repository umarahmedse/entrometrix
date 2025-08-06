import Image from "next/image";

const CareerHero = () => {
  return (
    <>
      <section
        id="about"
        className="dark:bg-gray-dark relative overflow-hidden pt-[120px] md:pt-[150px] xl:pt-[180px] 2xl:pt-[200px] h-screen flex flex-col-reverse pb-16"
      >
        <div className="relative container flex justify-between z-10">
          <div className="w-full xl:w-6/12">
            <h3 className="text-4xl lg:text-7xl leading-tight font-bold mt-5">
              <span className="text-primary">Careers</span>&nbsp; at EntroMetrix
            </h3>
          </div>
          <div className="w-full xl:w-5/12 flex flex-col-reverse">
            <p className="text-2xl leading-relaxed text-white">
              Grow with us in a creative, inspiring workplace where your ideas make an impact.
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
