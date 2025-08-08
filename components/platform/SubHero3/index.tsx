import Image from "next/image";

const SubHero3 = () => {
  return (
    <>
      <section
        id="SubHero3"
        className="dark:bg-gray-dark relative bg-white pb-8 pt-[120px] md:pt-[150px] xl:pt-[180px] 2xl:pt-[160px]"
      >
        <div className="container flex flex-col-reverse lg:flex-row gap-32">
          <div className="w-full lg:w-1/2">
            <h3 className="text-4xl lg:text-6xl leading-tight font-bold mt-5">
              <span className="text-primary">Minimise</span>&nbsp;downtime with predictive insight
            </h3>
            <p className="text-2xl leading-relaxed py-9 dark:text-gray-400">
              <strong className="text-white">EntroMetrix analyses real-time machine data</strong> to detect early signs of wear, stress, or failure. Al models predict when equipment may underperform or fail, enabling proactive interventions to minimise downtime, extend asset life, and prevent costly disruption.
            </p>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <div className="border border-primary rounded-2xl w-full">
              <Image src="/images/platforms/3.svg" alt="optimize" fill className="relative" />
            </div>

            {/* bg-line 1 */}
            {/* <div className="h-0 w-full relative hidden 2xl:block">
              <div className="absolute h-[620px] w-full">
                <div className="border-r border-b rounded-br-2xl line-1-t border-primary" />
                <div className="border-l border-b border-t rounded-bl-2xl rounded-tl-2xl line-1-b border-primary" />
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default SubHero3;
