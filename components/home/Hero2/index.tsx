"use client";

import { DotLottiePlayer } from "@dotlottie/react-player";
import "@dotlottie/react-player/dist/index.css";

const Hero2 = () => {
  return (
    <>
      <section
        id="home2"
        className="dark:bg-gray-dark relative z-10 overflow-hidden bg-white pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container flex gap-8 flex-col lg:flex-row">
          <div className="w-full lg:w-2/5">
            <p className="text-4xl lg:text-5xl xl:text-6xl leading-tight mb-12">The industrial <strong className="text-blue-500">decarbonization</strong> platform</p>
            <div className="w-full block lg:hidden mb-12">
              <DotLottiePlayer
                src="https://lottie.host/f3c0e444-5550-4bed-9850-03ac1ab70e57/Qd7HIrZZvZ.json"
                background="transparent"
                speed={1}
                autoplay
                loop
              >
              </DotLottiePlayer>
            </div>
            <p className="text-blue-500 uppercase text-sm mb-2">Build and simulate the most complex projects in minutes.</p>
            <p className="text-sm">Sesame accelerates and enables teams to model, derisk, and verify energy transition investments with confidence.</p>
            <button className="text-blue-500 bg-white border border-blue-500 focus:outline-none hover:bg-gray-100 cursor-pointer focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-blue-500 dark:hover:bg-gray-700 dark:hover:border-blue-600 dark:focus:ring-gray-700 w-36 uppercase mt-7">
              Learn More
            </button>
          </div>
          <div className="flex-1 hidden lg:block">
            <DotLottiePlayer
              src="https://lottie.host/f3c0e444-5550-4bed-9850-03ac1ab70e57/Qd7HIrZZvZ.json"
              background="transparent"
              speed={1}
              autoplay
              loop
              style={{ flex: 1, maxWidth: "100%", height: "auto" }}
            >
            </DotLottiePlayer>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero2;
