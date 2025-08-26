import Divider from "@/components/Common/divider";
import Image from "next/image";

const SubHero4 = () => {
  return (
    <>
      <section
        id="SubHero4"
        className="dark:bg-gray-dark relative bg-white pb-6 pt-6 md:pt-[130px] xl:pt-[150px] 2xl:pt-[140px]"
      >
        <div className="container flex flex-col-reverse lg:flex-row lg:gap-24">
          {/* Left Image */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <div className="border border-primary rounded-2xl w-full flex flex-wrap relative">
              {/* bg-line 19 */}
              <div className="h-full w-0 relative hidden 2xl:block">
                <span className="absolute line-19 border-t border-l border-b rounded-bl-2xl rounded-tl-2xl border-primary" />
              </div>

              <Image
                src="/images/platforms/4.svg"
                alt="Production optimization visualization"
                fill
                className="relative"
              />

              {/* bg-line 21 */}
              <div className="h-0 w-full relative hidden 2xl:block">
                <span className="absolute line-21 border-l border-b rounded-bl-2xl border-primary" />
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-3xl lg:text-5xl leading-tight font-bold mt-4">
              <span className="text-primary">Reduce</span>&nbsp;lead times through data-driven production
            </h3>
            <p className="text-base leading-relaxed py-7 dark:text-gray-400">
              <strong className="text-white">EntroMetrix uses real-time data to identify delays, </strong> 
              bottlenecks, and inefficiencies in production, such as idling, poor scheduling, and uneven workloads. 
              AI-driven insights help teams synchronize operations and shift from reactive to optimized planning, 
              reducing lead times without increasing capacity.
            </p>
          </div>
        </div>
      </section>
      <Divider />
    </>
  );
};

export default SubHero4;
