"use client";

import { useEffect, useState } from 'react';
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="dark:bg-gray-dark relative z-10 overflow-hidden bg-white pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container flex gap-4">
          <div className="w-[45rem] relative">
            <div className="absolute inset-0 h-full w-full">
              <Image
                src="/images/hero/city-off.png"
                alt="City off"
                width={720}
                height={563}
                className="w-full"
              />
            </div>
            <Image
              src="/images/hero/city-on.png"
              alt="City off"
              width={720}
              height={563}
              className="w-full relative"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-7xl mt-5">Empower Your Plant with AI-Driven Energy Insights</h3>
            <p className="text-lg mt-9">Transform how you manage energy flows with real-time simulations and interactive dashboards.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
