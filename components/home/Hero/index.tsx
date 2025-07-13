"use client";

import * as motion from "motion/react-client";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="dark:bg-gray-dark relative z-10 overflow-hidden bg-white pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container flex gap-8 flex-col md:flex-row">
          <div className="w-[24rem] lg:w-[28rem] xl:w-[42rem] min-h-[480px] relative">
            <div className="absolute inset-0 h-full w-full">
              <Image
                src="/images/hero/city-off.png"
                alt="City off"
                fill
                sizes="580px"
                className="object-contain"
              />
            </div>
            <motion.div
              className="w-full h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 1, 0, 1] }}
              transition={{
                times: [0.67, 0.67, 0.75, 0.75, 1],
                duration: 1.5,
                delay: 1,
                ease: "linear"
              }}
            >
              <Image
                src="/images/hero/city-on.png"
                alt="City off"
                fill
                priority
                sizes="580px"
                className="object-contain relative"
              />
            </motion.div>
          </div>
          <div className="flex-1">
            <h3 className="text-4xl lg:text-6xl font-bold leading-tight mt-5">Empower Your Plant with AI-Driven Energy Insights</h3>
            <p className="text-lg leading-normal py-9">
              Tomorrow Capital is a specialist capital platform building technology-led lending businesses to drive access and affordability of credit in emerging markets.<br /><br />
              We offer specialist expertise, operational support and patient capital capable of being deployed throughout the capital stack.
            </p>
            <button className="shadow-submit dark:shadow-submit-dark rounded-full bg-black px-3 py-1 text-base font-medium text-white duration-300">
              Learn more
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
