"use client";
import Divider from "@/components/Common/divider";
import { Icon } from "@iconify/react";

const Hero1 = () => {
  return (
    <>
      <section
        id="home"
        className="dark:bg-gray-dark relative z-10 overflow-hidden bg-white pt-[120px] md:pt-[150px] xl:pt-[180px] 2xl:pt-[200px]"
      >
        <div className="container flex gap-8 flex-col lg:flex-row">
          {/* Left Content */}
          <div className="w-full lg-1/2 xl:w-5/12">
            {/* Button */}
            <button
              type="button"
              className="py-3 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Process Mining and Intelligence
            </button>

            {/* Heading */}
            <h1 className="text-3xl lg:text-5xl leading-tight font-bold mt-5">
              <span className="text-primary">Unlock</span> the Full Power of
              Your Operations
            </h1>

            {/* Paragraph */}
            <p className="text-lg leading-relaxed py-9 dark:text-gray-400">
              Entrometrix understands the deep physics of your process and the
              practical realities of your system. We transform your complex
              operational data into performance excellence through AI.
            </p>

            {/* CTA and Green Box */}
            <div className="flex flex-col items-start md:flex-row md:items-center gap-4">
              <a
                href="#features2"
                className="shadow-submit dark:shadow-submit-dark inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-white duration-300 hover:bg-primary/80"
              >
                Discover More
                <Icon icon="pajamas:arrow-right" className="w-[18px] h-[18px]" />
              </a>

              {/* Green Glass Box */}
              <div className="px-5 py-3 text-sm font-medium rounded-full bg-green-500/20 backdrop-blur-md border border-green-800 text-green-500">
                Up to 25% Efficiency Gains
              </div>
            </div>

            {/* New Italic Text */}
<div className="mt-8 inline-flex items-center justify-center rounded-full bg-orange-500/25 backdrop-blur-md 
  px-6 py-2 sm:px-8 sm:py-3 md:px-10 md:py-3 lg:px-11 lg:py-4 
  border border-orange-300/40 shadow-lg text-center">
  <p className="text-base sm:text-lg md:text-xl lg:text-xl font-bold text-white leading-snug">
    Efficiency. Sustainability. Profit.
  </p>
</div>


            
          </div>

          {/* Right Video */}
          <div className="w-full lg-1/2 xl:w-7/12 flex justify-center">
            <video
              width="100%"
              autoPlay
              loop
              muted
              playsInline
              className="main-video"
            >
              <source src="/images/anims/main.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
      
      {/* Divider */}
      <Divider />
    </>
  );
};

export default Hero1;
