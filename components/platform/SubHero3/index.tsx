import Image from "next/image";

const SubHero3 = () => {
  return (
    <>
      <section
        id="SubHero3"
        className="dark:bg-gray-dark relative bg-white pb-8 pt-6 md:pt-[150px] xl:pt-[180px] 2xl:pt-[160px]"
      >
        <div className="container flex flex-col lg:flex-row lg:gap-32">
          <div className="w-full lg:w-1/2">
            <h3 className="text-4xl lg:text-6xl leading-tight font-bold mt-5">
              <span className="text-primary">Minimise</span>&nbsp;downtime with predictive insight
            </h3>
            <p className="text-2xl leading-relaxed py-9 dark:text-gray-400">
              <strong className="text-white">EntroMetrix analyses real-time machine data</strong> to detect early signs of wear, stress, or failure. Al models predict when equipment may underperform or fail, enabling proactive interventions to minimise downtime, extend asset life, and prevent costly disruption.
            </p>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <div className="border border-primary rounded-2xl w-full relative flex flex-wrap">
              <Image src="/images/platforms/3.svg" alt="Optimise" fill className="relative" />

              {/* bg-line 14 */}
              <div className="h-full w-0 relative hidden 2xl:block">
                <span className="absolute line-18 border-b border-r border-t rounded-br-2xl rounded-tr-2xl border-primary" />
              </div>
              
              {/* bg-line 15 */}
              <div className="h-0 w-full relative hidden 2xl:block">
                <span className="absolute line-20 border-b border-r rounded-br-2xl border-primary" />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default SubHero3;
