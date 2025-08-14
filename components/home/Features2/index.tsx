"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";

const Features2 = () => {
  return (
    <>
      <section
        id="features2"
        className="relative z-10 bg-white py-[80px] dark:bg-gray-dark md:py-[80px] xl:py-[180px] 2xl:py-[160px]"
        aria-labelledby="features-heading"
      >
        <div className="container relative flex flex-col gap-8 xl:flex-row">
          <div className="w-full 2xl:w-4/12">
            <div className="mb-4">
              <span className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                AI-Powered Decarbonization
              </span>
            </div>
            <h2
              id="features-heading"
              className="mt-2 text-3xl font-bold leading-tight lg:text-[52px]"
            >
              <span className="text-primary">
                Transform your industrial footprint
              </span>{" "}
              with intelligent decarbonization.
            </h2>
            <p className="py-8 text-xl leading-relaxed dark:text-gray-400 lg:text-2xl">
              EntroMetrix's comprehensive decarbonization platform combines
              real-time carbon intelligence, predictive emissions modeling, and
              automated sustainability controls to accelerate your net-zero
              journey while maintaining operational excellence.
            </p>

            {/* Key Stats */}
            <div className="mb-8 grid grid-cols-2 gap-6">
              <div className="rounded-xl bg-gray-50 p-4 text-center dark:bg-gray-800">
                <div className="text-2xl font-bold text-primary lg:text-3xl">
                  40%
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Average Carbon Reduction
                </div>
              </div>
              <div className="rounded-xl bg-gray-50 p-4 text-center dark:bg-gray-800">
                <div className="text-2xl font-bold text-primary lg:text-3xl">
                  90%
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Faster ESG Reporting
                </div>
              </div>
            </div>

            <div className="flex w-full gap-2">
              <a
                href="/demo"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-white shadow-submit transition-all duration-300 hover:scale-105 hover:bg-primary/80 dark:shadow-submit-dark"
                aria-label="Request demo for EntroMetrix decarbonization platform"
              >
                Request Demo
                <Icon
                  icon="pajamas:arrow-right"
                  className="h-[18px] w-[18px]"
                />
              </a>
              <a
                href="/solutions"
                className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-6 py-3 text-sm font-medium text-primary shadow-submit duration-300 hover:bg-blue-200 dark:bg-blue-900/20 dark:shadow-submit-dark dark:hover:bg-blue-900/30"
                aria-label="Explore decarbonization solutions and case studies"
              >
                View Solutions
              </a>
            </div>
          </div>

          <div className="mt-8 flex w-full flex-col gap-8 lg:h-[32rem] lg:flex-row 2xl:mt-0 2xl:h-[41rem] 2xl:w-8/12">
            <div className="relative flex w-full flex-col items-center gap-8 lg:w-1/2 lg:gap-[5rem] 2xl:items-start 2xl:gap-[9rem]">
              <div className="group relative flex">
                <div className="z-10 flex h-48 w-full items-center justify-between rounded-2xl border border-primary bg-gradient-to-br from-[#0e2a42] to-[#1a3a5c] px-6 text-lg text-gray-300 transition-all duration-300 hover:shadow-xl group-hover:scale-105 md:w-[40rem] lg:w-[28rem]">
                  <div className="flex-shrink-0 rounded-xl bg-primary/20 p-3">
                    <Image
                      src="/images/features/1.svg"
                      alt="Carbon emissions reduction dashboard"
                      width={80}
                      height={80}
                      className="brightness-125 filter"
                    />
                  </div>
                  <div className="ml-4 flex-1 text-left">
                    <h3 className="mb-2 text-xl font-semibold text-primary">
                      Reduce Carbon Emissions
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-400">
                      Cut Scope 1, 2 & 3 emissions by up to 40% through
                      AI-optimized energy management, process efficiency, and
                      smart resource allocation across your entire operation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group relative flex">
                <div className="z-10 flex h-48 w-full items-center justify-between rounded-2xl border border-primary bg-gradient-to-br from-[#0e2a42] to-[#1a3a5c] px-6 text-lg text-gray-300 transition-all duration-300 hover:shadow-xl group-hover:scale-105 md:w-[40rem] lg:w-[28rem]">
                  <div className="flex-shrink-0 rounded-xl bg-primary/20 p-3">
                    <Image
                      src="/images/features/2.svg"
                      alt="Energy efficiency optimization metrics"
                      width={80}
                      height={80}
                      className="brightness-125 filter"
                    />
                  </div>
                  <div className="ml-4 flex-1 text-left">
                    <h3 className="mb-2 text-xl font-semibold text-primary">
                      Optimize Energy Systems
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-400">
                      Maximize energy efficiency with predictive analytics,
                      real-time monitoring, and intelligent automation that
                      adapts to production demands while minimizing waste.
                    </p>
                  </div>
                </div>
              </div>

              {/* bg-line 5 */}
              <div className="line-5 absolute hidden rounded-bl-2xl border-b border-l border-primary/40 2xl:block" />
            </div>

            <div className="relative flex w-full flex-col-reverse items-center gap-8 lg:w-1/2 lg:gap-[5rem] 2xl:items-end 2xl:gap-[9rem]">
              <div className="group relative flex">
                <div className="z-10 flex h-48 w-full items-center justify-between rounded-2xl border border-primary bg-gradient-to-br from-[#0e2a42] to-[#1a3a5c] px-6 text-lg text-gray-300 transition-all duration-300 hover:shadow-xl group-hover:scale-105 md:w-[40rem] lg:w-[28rem]">
                  <div className="flex-shrink-0 rounded-xl bg-primary/20 p-3">
                    <Image
                      src="/images/features/4.svg"
                      alt="Supply chain carbon tracking interface"
                      width={80}
                      height={80}
                      className="brightness-125 filter"
                    />
                  </div>
                  <div className="ml-4 flex-1 text-left">
                    <h3 className="mb-2 text-xl font-semibold text-primary">
                      Decarbonize Supply Chains
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-400">
                      Track and reduce Scope 3 emissions through intelligent
                      supplier assessment, green logistics optimization, and
                      collaborative sustainability initiatives across your value
                      network.
                    </p>
                  </div>
                </div>

                {/* bg-line 3 */}
                <div className="relative hidden h-full w-0 2xl:block">
                  <div className="absolute top-1/2 h-[620px] w-20">
                    <div className="line-3 h-full rounded-br-2xl rounded-tr-2xl border-b border-r border-t border-primary/40" />
                  </div>
                </div>
              </div>

              <div className="group relative flex">
                <div className="z-10 flex h-48 w-full items-center justify-between rounded-2xl border border-primary bg-gradient-to-br from-[#0e2a42] to-[#1a3a5c] px-6 text-lg text-gray-300 transition-all duration-300 hover:shadow-xl group-hover:scale-105 md:w-[40rem] lg:w-[28rem]">
                  <div className="flex-shrink-0 rounded-xl bg-primary/20 p-3">
                    <Image
                      src="/images/features/3.svg"
                      alt="ESG compliance and reporting dashboard"
                      width={80}
                      height={80}
                      className="brightness-125 filter"
                    />
                  </div>
                  <div className="ml-4 flex-1 text-left">
                    <h3 className="mb-2 text-xl font-semibold text-primary">
                      Achieve ESG Excellence
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-400">
                      Streamline compliance with automated carbon accounting,
                      real-time emissions tracking, and comprehensive
                      sustainability reporting for all major ESG frameworks.
                    </p>
                  </div>
                </div>
              </div>

              {/* bg-line 6 */}
              <div className="line-6 absolute hidden rounded-tr-2xl border-r border-t border-primary/40 2xl:block" />
            </div>
          </div>

          {/* Enhanced connecting lines with better opacity */}
          <div className="line-4 absolute -left-[48px] -top-[100px] hidden rounded-t-2xl border-l border-r border-t border-primary/40 2xl:block" />
          <div className="line-7 absolute -left-[48px] top-0 hidden border-l border-primary/40 2xl:block" />

          {/* Floating elements for visual enhancement */}
          <div className="absolute right-10 top-10 hidden h-20 w-20 animate-pulse rounded-full bg-primary/5 blur-xl xl:block" />
          <div className="absolute bottom-20 left-20 hidden h-16 w-16 animate-pulse rounded-full bg-primary/10 blur-lg delay-1000 xl:block" />
        </div>
      </section>
    </>
  );
};

export default Features2;
