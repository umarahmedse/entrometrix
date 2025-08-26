import Divider from "@/components/Common/divider";
import Image from "next/image";

const SubHero1 = () => {
  return (
    <>
      <section
        id="SubHero1"
        className="dark:bg-gray-dark relative bg-white pb-6 pt-6 md:pt-[130px] xl:pt-[150px] 2xl:pt-[140px]"
      >
        <div className="container flex flex-col lg:flex-row lg:gap-24">
          {/* Left Content */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-3xl lg:text-5xl leading-tight font-bold mt-4">
              <span className="text-primary">Optimize</span>&nbsp;energy and resource use
            </h3>
             <p className="text-base leading-relaxed py-7 dark:text-gray-400">
              <strong className="text-white">EntroMetrix uses AI to analyze operational data </strong> 
              in real time, identifying excess energy use, material waste, and costly processes. 
              EntroMetrix maps energy and resource flows to pinpoint inefficiencies and enable targeted 
              optimization to cut costs and boost efficiency.
            </p>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <div className="border border-primary rounded-2xl w-full relative flex flex-wrap">
              <Image
                src="/images/platforms/1.svg"
                alt="Optimize"
                fill
                className="relative"
              />

              {/* bg-line 14 */}
              <div className="h-full w-0 relative hidden 2xl:block">
                <span className="absolute line-14 border-b border-r border-t rounded-br-2xl rounded-tr-2xl border-primary" />
              </div>

              {/* bg-line 15 */}
              <div className="h-0 w-full relative hidden 2xl:block">
                <span className="absolute line-15 border-b border-r rounded-br-2xl border-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Divider />
    </>
  );
};

export default SubHero1;
