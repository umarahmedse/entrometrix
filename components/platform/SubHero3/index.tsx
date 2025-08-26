import Divider from "@/components/Common/divider";
import Image from "next/image";

const SubHero3 = () => {
  return (
    <>
      <section
        id="SubHero3"
        className="dark:bg-gray-dark relative bg-white pb-6 pt-6 md:pt-[130px] xl:pt-[150px] 2xl:pt-[140px]"
      >
        <div className="container flex flex-col lg:flex-row lg:gap-24">
          {/* Left Content */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-3xl lg:text-5xl leading-tight font-bold mt-4">
              <span className="text-primary">Minimize</span>&nbsp;downtime with predictive insight
            </h3>
            <p className="text-base leading-relaxed py-7 dark:text-gray-400">
              <strong className="text-white">EntroMetrix analyzes real-time machine data </strong> 
              to detect early signs of wear, stress, or failure. AI models predict when equipment may 
              underperform or fail, enabling proactive interventions to minimize downtime, extend 
              asset life, and prevent costly disruption.
            </p>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <div className="border border-primary rounded-2xl w-full relative flex flex-wrap">
              <Image
                src="/images/platforms/3.svg"
                alt="Predictive maintenance visualization"
                fill
                className="relative"
              />

              {/* bg-line 18 */}
              <div className="h-full w-0 relative hidden 2xl:block">
                <span className="absolute line-18 border-b border-r border-t rounded-br-2xl rounded-tr-2xl border-primary" />
              </div>
              
              {/* bg-line 20 */}
              <div className="h-0 w-full relative hidden 2xl:block">
                <span className="absolute line-20 border-b border-r rounded-br-2xl border-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Divider />
    </>
  );
};

export default SubHero3;
