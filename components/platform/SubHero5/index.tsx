import Image from "next/image";

const SubHero5 = () => {
  return (
    <>
      <section
        id="SubHero5"
        className="dark:bg-gray-dark relative bg-white pb-8 pt-[120px] md:pt-[150px] xl:pt-[180px] 2xl:pt-[160px]"
      >
        <div className="container flex flex-col-reverse lg:flex-row gap-32">
          <div className="w-full lg:w-1/2">
            <h3 className="text-4xl lg:text-6xl leading-tight font-bold mt-5">
              <span className="text-primary">Advanced</span>&nbsp;supply chain management
            </h3>
            <p className="text-2xl leading-relaxed py-9 dark:text-gray-400">
              <strong className="text-white">EntroMetrix provides real-time visibility into supply chain performance,</strong> from supplier reliability to material flow. It identifies delays, inefficiencies, and cost drivers across sourcing and logistics, helping teams anticipate disruptions, improve procurement and scheduling.
            </p>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <div className="border border-primary rounded-2xl w-full flex flex-wrap flex-col">
              {/* bg-line 22 */}
              <div className="h-0 w-full relative hidden 2xl:block">
                <span className="absolute line-22 border-r border-t rounded-tr-2xl border-primary" />
              </div>

              <Image src="/images/platforms/5.svg" alt="optimize" fill className="relative" />
              
              {/* bg-line 23 */}
              <div className="h-full w-0 relative hidden 2xl:block">
                <span className="absolute line-23 border-r border-t rounded-tr-2xl border-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SubHero5;
