import Divider from "@/components/Common/divider";
import Image from "next/image";

const CareerHero = () => {
  return (
    <>
      <section
        id="about"
        className="relative flex h-[530px] overflow-hidden pb-16 pt-[120px] dark:bg-gray-dark md:pt-[70px] lg:flex-col-reverse xl:pt-[150px] 2xl:pt-[150px] my-auto"
      >
        <div className="container relative z-10 flex flex-col justify-between lg:flex-row">
          <div className="w-full xl:w-6/12">
            <h1 className="mt-5 text-4xl font-bold leading-tight lg:text-6xl">
              <span className="text-primary">Careers</span>&nbsp; at EntroMetrix
            </h1>
          </div>
          <div className="flex w-full flex-col-reverse xl:w-5/12">
  <p className="text-xl leading-relaxed text-white">
    Grow with us in a workplace that sparks creativity and innovation.  
    Your ideas matter here, and together we turn vision into impact.  
    Join a team that values growth, collaboration, and real results.
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

export default CareerHero;
