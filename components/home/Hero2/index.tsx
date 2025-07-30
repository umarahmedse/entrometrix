"use client";

import { Icon } from "@iconify/react";

const Hero2 = () => {
  return (
    <>
      <section
        id="hero2"
        className="dark:bg-gray-dark relative z-10 overflow-hidden bg-white pb-8 pt-[120px] md:pt-[150px] xl:pt-[180px] 2xl:pt-[160px]"
      >
        <div className="container flex flex-col-reverse lg:flex-row gap-32">
          <div className="w-full lg:w-1/2">
            <video width="100%" autoPlay loop muted playsInline>
              <source src="/images/anims/pid.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="w-full lg:w-1/2">
            <h3 className="text-4xl lg:text-7xl leading-tight font-bold mt-5">
              <span className="text-yellow">Optimisation</span>&nbsp;at<br/>Every Stage of the Process
            </h3>
            <p className="text-3xl leading-relaxed py-9 dark:text-gray-400">
              Entrometrix transforms deep operational know-how intro real-time performance excellence through AI
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero2;
