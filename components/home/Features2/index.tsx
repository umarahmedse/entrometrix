"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";

const Features2 = () => {
  return (
    <>
      <section
        id="features2"
        className="dark:bg-gray-dark relative z-10 bg-white py-[80px] md:py-[80px] xl:py-[180px] 2xl:py-[160px]"
      >
        <div className="container flex gap-8 flex-col xl:flex-row relative">
          <div className="w-full 2xl:w-4/12">
            <h3 className="text-3xl lg:text-[52px] leading-tight font-bold mt-2">
              <span className="text-primary">Advanced industrial modelling,</span> all in one platform.
            </h3>
            <p className="text-2xl leading-relaxed py-8 dark:text-gray-400">
              EntroMetrix takes complex factory data and applies AI to deliver faster, smarter, and more efficient operations, driving measurable impact from the shop floor to the supply chain.
            </p>
            <div className="w-full flex gap-2">
              <a href="/platform" className="shadow-submit dark:shadow-submit-dark inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-white duration-300 hover:bg-primary/80">
                Request Demo
                <Icon icon="pajamas:arrow-right" className="w-[18px] h-[18px]" />
              </a>
              <a href="/platform" className="shadow-submit dark:shadow-submit-dark inline-flex items-center gap-2 rounded-full bg-blue-100 px-5 py-3 text-sm font-medium text-primary duration-300 hover:bg-blue-200">
                Learn More
              </a>
            </div>
          </div>
          <div className="w-full 2xl:w-8/12 mt-8 2xl:mt-0 h-[32rem] 2xl:h-[41rem] flex gap-8">
            <div className="w-1/2 flex flex-col items-center 2xl:items-start gap-[5rem] 2xl:gap-[9rem] relative">
              <div className="relative flex">
                <div className="z-10 w-[15rem] md:w-[20rem] lg:w-[28rem] h-44 px-6 rounded-2xl border border-primary bg-[#0e2a42] flex justify-center items-center text-center text-lg text-gray-400">
                  <Image src="/images/features/1.svg" alt="Lower operating costs" width={100} height={100} />
                  <span><span className="text-primary">Lower operating costs</span>&nbsp;by improving how energy and resources are used across your production lines.</span>
                </div>
              </div>
              <div className="z-10 w-[15rem] md:w-[20rem] lg:w-[28rem] h-44 px-6 rounded-2xl border border-primary bg-[#0e2a42] flex justify-center items-center text-center text-lg text-gray-400">
                <Image src="/images/features/2.svg" alt="Shorten lead times" width={100} height={100} />
                <span><span className="text-primary">Shorten lead times</span>&nbsp;with better planning, streamlined execution, and greater operational control.</span>
              </div>

              {/* bg-line 5 */}
              <div className="absolute line-5 border-l border-b rounded-bl-2xl border-primary hidden 2xl:block" />
            </div>
            <div className="relative w-1/2 flex flex-col-reverse items-center 2xl:items-end gap-[5rem] 2xl:gap-[9rem]">
              <div className="relative flex">
                <div className="z-10 w-[15rem] md:w-[20rem] lg:w-[28rem] h-44 px-6 rounded-2xl border border-primary bg-[#0e2a42] flex justify-center items-center text-center text-lg text-gray-400">
                  <Image src="/images/features/4.svg" alt="Limit disruption" width={100} height={100} />
                  <span><span className="text-primary">Limit disruption</span>&nbsp;through smarter supply chain coordination and real-time responsiveness.</span>
                </div>

                {/* bg-line 3 */}
                <div className="w-0 h-full relative hidden 2xl:block">
                  <div className="absolute h-[620px] top-1/2 w-20">
                    <div className="border-t border-r border-b rounded-tr-2xl rounded-br-2xl h-full border-primary line-3" />
                  </div>
                </div>
              </div>
              
              <div className="z-10 w-[15rem] md:w-[20rem] lg:w-[28rem] h-44 px-6 rounded-2xl border border-primary bg-[#0e2a42] flex justify-center items-center text-center text-lg text-gray-400">
                <Image src="/images/features/3.svg" alt="Improve sustainability" width={100} height={100} />
                <span><span className="text-primary">Improve sustainability</span>&nbsp;by reducing emissions across scope 1, 2, and 3 through smarter, cleaner operations.</span>
              </div>

              {/* bg-line 6 */}
              <div className="absolute line-6 border-r border-t rounded-tr-2xl border-primary hidden 2xl:block" />
            </div>
          </div>

          {/* bg-line 4 */}
          <div className="absolute -top-[100px] -left-[48px] border-t border-r border-l rounded-t-2xl border-primary line-4 hidden 2xl:block" />
          {/* bg-line 7 */}
          <div className="absolute top-0 -left-[48px] border-l border-primary line-7 hidden 2xl:block" />
        </div>
      </section>
    </>
  );
};

export default Features2;
