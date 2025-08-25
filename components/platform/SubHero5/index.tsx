import Divider from "@/components/Common/divider";
import Image from "next/image";

const SubHero5 = () => {
  return (
    <>
      <section
        id="SubHero5"
        className="dark:bg-gray-dark relative bg-white pb-6 pt-6 md:pt-[130px] xl:pt-[150px] 2xl:pt-[140px]"
      >
        <div className="container flex flex-col lg:flex-row lg:gap-24">
          {/* Left Content */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-3xl lg:text-5xl leading-tight font-bold mt-4">
              <span className="text-primary">Advanced</span>&nbsp;supply chain management
            </h3>
            <p className="text-base leading-relaxed py-7 dark:text-gray-400">
              <strong className="text-white">
                EntroMetrix provides real-time visibility into supply chain performance,
              </strong>{" "}
              from supplier reliability to material flow. It identifies delays, inefficiencies, and 
              cost drivers across sourcing and logistics, helping teams anticipate disruptions, 
              improve procurement, and optimize scheduling.
            </p>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <div className="border border-primary rounded-2xl w-full relative flex flex-wrap">
              {/* bg-line 22 */}
              <div className="h-0 w-full relative hidden 2xl:block">
                <span className="absolute line-22 border-r border-t rounded-tr-2xl border-primary" />
              </div>

              <Image
                src="/images/platforms/5.svg"
                alt="Supply chain management visualization"
                fill
                className="relative"
              />

              {/* bg-line 23 */}
              <div className="h-full w-0 relative hidden 2xl:block">
                <span className="absolute line-23 border-r border-t rounded-tr-2xl border-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Divider />
    </>
  );
};

export default SubHero5;
