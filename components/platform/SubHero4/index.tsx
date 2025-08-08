import Image from "next/image";

const SubHero4 = () => {
  return (
    <>
      <section
        id="SubHero4"
        className="dark:bg-gray-dark relative bg-white pb-8 pt-[120px] md:pt-[150px] xl:pt-[180px] 2xl:pt-[160px]"
      >
        <div className="container flex flex-col-reverse lg:flex-row gap-32">
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <div className="border border-primary rounded-2xl w-full">
              <Image src="/images/platforms/4.svg" alt="optimize" fill className="relative" />
            </div>

            {/* bg-line 1 */}
            {/* <div className="h-0 w-full relative hidden 2xl:block">
              <div className="absolute h-[620px] w-full">
                <div className="border-r border-b rounded-br-2xl line-1-t border-primary" />
                <div className="border-l border-b border-t rounded-bl-2xl rounded-tl-2xl line-1-b border-primary" />
              </div>
            </div> */}
          </div>
          <div className="w-full lg:w-1/2">
            <h3 className="text-4xl lg:text-6xl leading-tight font-bold mt-5">
              <span className="text-primary">Reduce</span>&nbsp;lead times through data-driven production
            </h3>
            <p className="text-2xl leading-relaxed py-9 dark:text-gray-400">
              <strong className="text-white">EntroMetrix uses real-time data to identify delays,</strong> bottlenecks, and inefficiencies in production, such as idling, poor scheduling, and uneven workloads. Al-driven insights help teams synchronise operations and shift from reactive to optimised planning, reducing lead times without increasing capacity.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SubHero4;
