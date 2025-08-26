"use client";

import Divider from "@/components/Common/divider";
import { Icon } from "@iconify/react";
import Image from "next/image";

const Features2 = () => {
  return (
    <>
      <section
        id="features2"
        className="dark:bg-gray-dark relative z-10 bg-white py-[80px] md:py-[80px] xl:py-[120px] 2xl:py-[160px]"
      >
        <div className="container flex gap-8 flex-col xl:flex-row relative">
          {/* Left Content */}
          <div className="w-full 2xl:w-4/12 lg:mb-6">
            <h3 className="text-3xl lg:text-5xl leading-tight font-bold mt-2">
              <span className="text-primary">
                Advanced industrial modeling,
              </span>{" "}
              all in one platform.
            </h3>
            <p className="text-lg leading-relaxed py-8 dark:text-gray-400">
              EntroMetrix takes complex data and applies AI to deliver faster,
              smarter, and more efficient operations, driving impact from the
              shop floor to the supply chain.
            </p>

            {/* Buttons */}
            <div className="w-full flex gap-2">
              <a
                href="/platform"
                className="shadow-submit dark:shadow-submit-dark inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-white duration-300 hover:bg-primary/80"
              >
                Request Demo
                <Icon
                  icon="pajamas:arrow-right"
                  className="w-[18px] h-[18px]"
                />
              </a>
              <a
                href="/platform"
                className="shadow-submit dark:shadow-submit-dark inline-flex items-center gap-2 rounded-full bg-blue-100 px-5 py-3 text-sm font-medium text-primary duration-300 hover:bg-blue-200"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right Content - Feature Boxes */}
          <div className="w-full 2xl:w-8/12 mt-8 2xl:mt-0 lg:h-[32rem] 2xl:h-[41rem] flex gap-8 flex-col lg:flex-row">
            {/* Left Column */}
            <div className="w-full lg:w-1/2 flex flex-col items-center 2xl:items-start gap-8 lg:gap-[5rem] 2xl:gap-[9rem] relative">
              <div className="relative flex">
                <div className="z-10 w-full md:w-[40rem] lg:w-[28rem] h-44 px-6 rounded-2xl border border-primary bg-[#0e2a42] flex justify-between items-center text-center text-sm md:text-base text-gray-400">
                  <Image
                    src="/images/features/1.svg"
                    alt="Lower operating costs"
                    width={100}
                    height={100}
                  />
                  <span className="flex-1">
                    <span className="text-primary">Lower operating costs</span>
                    &nbsp;by improving how energy and resources are used across
                    your production lines.
                  </span>
                </div>
              </div>
              <div className="z-10 w-full md:w-[40rem] lg:w-[28rem] h-44 px-6 rounded-2xl border border-primary bg-[#0e2a42] flex justify-between items-center text-center text-sm md:text-base text-gray-400">
                <Image
                  src="/images/features/2.svg"
                  alt="Shorten lead times"
                  width={100}
                  height={100}
                />
                <span className="flex-1">
                  <span className="text-primary">Shorten lead times</span>
                  &nbsp;with better planning, streamlined execution, and greater
                  operational control.
                </span>
              </div>
            </div>

            {/* Right Column */}
            <div className="relative w-full lg:w-1/2 flex flex-col-reverse items-center 2xl:items-end gap-8 lg:gap-[5rem] 2xl:gap-[9rem]">
              <div className="relative flex">
                <div className="z-10 w-full md:w-[40rem] lg:w-[28rem] h-44 px-6 rounded-2xl border border-primary bg-[#0e2a42] flex justify-between items-center text-center text-sm md:text-base text-gray-400">
                  <Image
                    src="/images/features/4.svg"
                    alt="Limit disruption"
                    width={100}
                    height={100}
                  />
                  <span className="flex-1">
                    <span className="text-primary">Limit disruption</span>
                    &nbsp;through smarter supply chain coordination and
                    real-time responsiveness.
                  </span>
                </div>
              </div>

              <div className="z-10 w-full md:w-[40rem] lg:w-[28rem] h-44 px-6 rounded-2xl border border-primary bg-[#0e2a42] flex justify-between items-center text-center text-sm md:text-base text-gray-400">
                <Image
                  src="/images/features/3.svg"
                  alt="Improve sustainability"
                  width={100}
                  height={100}
                />
                <span className="flex-1">
                  <span className="text-primary ">Improve sustainability</span>
                  &nbsp;by reducing emissions across scope 1, 2, and 3 through
                  smarter, cleaner operations.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <Divider />
    </>
  );
};

export default Features2;
