"use client";

import Divider from "@/components/Common/divider";

const Hero2 = () => {
  return (
    <>
      <section
        id="hero2"
        className="relative bg-white pb-6 pt-[100px] dark:bg-gray-dark md:pt-[160px] xl:pt-[180px] 2xl:pt-[250px]"
      >
        <div className="container flex flex-col-reverse lg:flex-row lg:gap-24">
          {/* Left Video */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <div className="w-full">
              {/* bg-line 12 */}
              <div className="relative hidden h-0 w-full 2xl:block">
                <span className="line-12 absolute rounded-tr-2xl border-r border-t border-primary" />
              </div>

              <video
                width="100%"
                autoPlay
                loop
                muted
                playsInline
                className="border border-primary rounded-2xl"
              >
                <source src="/images/anims/pid.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>

              {/* bg-line 13 */}
              <div className="relative hidden h-0 w-full 2xl:block">
                <span className="line-13 absolute rounded-bl-2xl border-b border-l border-primary" />
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-1/2">
            <h1 className="mt-4 text-3xl font-bold leading-tight lg:text-5xl">
              <span className="text-primary">Optimization</span>&nbsp;at
              <br />
              Every Stage of the Process
            </h1>
            <p className="py-7 text-base leading-relaxed dark:text-gray-400">
              Our platform applies AI across the full production cycle,
              translating operational expertise into continuous, real-time
              optimization at every stage of the process.
            </p>
          </div>
        </div>
      </section>
      <Divider />
    </>
  );
};

export default Hero2;
