"use client";

import { Icon } from "@iconify/react";

const Features2 = () => {
  return (
    <>
      <section
        id="features2"
        className="dark:bg-gray-dark relative z-10 bg-white py-[120px] md:py-[150px] xl:py-[180px] 2xl:py-[160px]"
      >
        <div className="container flex gap-8 flex-col xl:flex-row relative">
          <div className="w-full 2xl:w-4/12">
            <h3 className="text-4xl lg:text-6xl leading-tight font-bold mt-8">
              <span className="text-primary">Smarter <br/>Operations</span> for a Greener Future
            </h3>
            <p className="text-xl leading-relaxed py-11 dark:text-gray-400">
              Entrometrix transforms deep operational know-how intro real-time performance excellence through AI
            </p>
            <div className="w-full flex gap-2">
              <button className="shadow-submit dark:shadow-submit-dark inline-flex items-center gap-2 rounded-full bg-primary px-6 py-4 text-sm font-medium text-white duration-300 hover:bg-primary/80">
                Request Demo
                <Icon icon="pajamas:arrow-right" className="w-[18px] h-[18px]" />
              </button>
              <button className="shadow-submit dark:shadow-submit-dark inline-flex items-center gap-2 rounded-full bg-blue-100 px-6 py-4 text-sm font-medium text-primary duration-300 hover:bg-blue-200">
                Learn More
              </button>
            </div>
          </div>
          <div className="w-full 2xl:w-8/12 mt-8 2xl:mt-0 h-[32rem] 2xl:h-[41rem] flex gap-8">
            <div className="w-1/2 flex flex-col items-center 2xl:items-start gap-[5rem] 2xl:gap-[9rem] relative">
              <div className="relative flex">
                <div className="z-10 w-[15rem] md:w-[20rem] lg:w-[28rem] h-44 px-6 rounded-2xl border border-primary bg-[#0e2a42] flex justify-center items-center text-center text-xl text-gray-400">
                  <span><span className="text-primary">Reduce</span>&nbsp;Costs through<br/>Resource and Energy Efficiency</span>
                </div>
              </div>
              <div className="z-10 w-[15rem] md:w-[20rem] lg:w-[28rem] h-44 px-6 rounded-2xl border border-primary bg-[#0e2a42] flex justify-center items-center text-center text-xl text-gray-400">
                <span><span className="text-primary">Reducelead</span>&nbsp;time through<br/>improved planning and<br/>execution</span>
              </div>

              {/* bg-line 5 */}
              <div className="absolute line-5 border-l border-b rounded-bl-2xl border-primary hidden 2xl:block" />
            </div>
            <div className="relative w-1/2 flex flex-col-reverse items-center 2xl:items-end gap-[5rem] 2xl:gap-[9rem]">
              <div className="relative flex">
                <div className="z-10 w-[15rem] md:w-[20rem] lg:w-[28rem] h-44 px-6 rounded-2xl border border-primary bg-[#0e2a42] flex justify-center items-center text-center text-xl text-gray-400">
                  <span><span className="text-primary">Minimise</span>&nbsp;disruption with<br/>proactive supply chain<br/>management</span>
                </div>

                {/* bg-line 3 */}
                <div className="w-0 h-full relative hidden 2xl:block">
                  <div className="absolute h-[620px] top-1/2 w-20">
                    <div className="border-t border-r border-b rounded-tr-2xl rounded-br-2xl h-full border-primary line-3" />
                  </div>
                </div>
              </div>
              
              <div className="z-10 w-[15rem] md:w-[20rem] lg:w-[28rem] h-44 px-6 rounded-2xl border border-primary bg-[#0e2a42] flex justify-center items-center text-center text-xl text-gray-400">
                <span><span className="text-primary">Improve</span>&nbsp;sustaiability through<br/>reduced scope 1, 2 and 3<br/>emmisions</span>
              </div>

              {/* bg-line 6 */}
              <div className="absolute line-6 border-r border-t rounded-tr-2xl border-primary hidden 2xl:block" />
            </div>
          </div>

          {/* bg-line 4 */}
          <div className="absolute -top-[100px] -left-[48px] border-t border-r border-l rounded-t-2xl border-primary line-4 hidden 2xl:block" />
          {/* bg-line 7 */}
          <div className="absolute top-0 -left-[48px] border-l border-b rounded-bl-2xl border-primary line-7 hidden 2xl:block" />
        </div>
      </section>
    </>
  );
};

export default Features2;
