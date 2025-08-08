"use client";

import { useState } from "react";
import * as motion from "motion/react-client";
import FeatureButton from "./FeatureButton";

const figureList = [
  {
    src: "/images/anims/illustration-1.webm",
    title: "Make confident decisions under pressure",
    desc: "Use real-time and historical data to stay efficient and adaptive in dynamic conditions."
  },
  {
    src: "/images/anims/illustration-2.webm",
    title: "React quicker, waste less",
    desc: "We help ops teams boost performance by streamlining insights and improvements. Faster lead times, better collaboration, and focus on what really matters."
  },
  {
    src: "/images/anims/illustration-3.webm",
    title: "Predict problems before they happen",
    desc: "It adapts as conditions change, helping teams find new opportunities and improve performance."
  },
  {
    src: "/images/anims/illustration-4.webm",
    title: "Optimise your supply chain with intelligent coordination",
    desc: "Tailored insights and scenario testing help teams move faster and smarter—from suppliers to delivery."
  }
];

const Features = () => {
  const [activeFeature, setActiveFeature] = useState<number>(0);

  return (
    <>
      <section id="features" className="py-16 lg:py-20 dark:bg-gray-dark">
        <div className="w-full">
          <h3 className="text-4xl lg:text-6xl leading-tight font-bold text-center">
            <span className="text-primary">Optimize Operations</span>&nbsp;with Real-time AI Simulation
          </h3>
          <p className="text-2xl leading-relaxed mt-8 dark:text-gray-400 text-center">
            EntroMetrix optimizes your plant in real time, providing engineers with clear, cost-aware insights every shift.
          </p>
        </div>
        <div className="container flex-row hidden lg:flex mt-14">
          <motion.div
            className="w-7/12 flex flex-col gap-4 justify-center"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0 }}
          >
            {figureList.map((figure, index) =>
              <FeatureButton key={index.toString()} title={figure.title} active={activeFeature == index} handleClick={() => setActiveFeature(index)}>
                {figure.desc}
              </FeatureButton>
            )}
          </motion.div>
          <div className="w-5/12">
            <div className="rounded-2xl border border-primary w-full aspect-[1/1] min-h-0 overflow-hidden">
              <video key={figureList[activeFeature].src} width="100%" autoPlay loop muted playsInline>
                <source src={figureList[activeFeature].src} type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* bg-line 2 */}
            {/* <div className="h-0 w-full relative hidden 2xl:block">
              <div className="absolute w-full h-[270px]">
                <div className="border-r border-b rounded-br-2xl line-2-t border-primary" />
                <div className="border-l border-t rounded-tl-2xl line-2-b border-primary" />
              </div>
            </div> */}
          </div>
        </div>
        <div className="container flex-col px-0 flex lg:hidden">
          {figureList.map((figure, index) =>
            <div className="w-full py-4" key={index.toString()}>
              <FeatureButton title={figure.title} active={activeFeature == index} handleClick={() => setActiveFeature(index)}>
                {figure.desc}
              </FeatureButton>
              {activeFeature == index &&
                <div className="w-full mt-4 rounded-2xl border border-primary overflow-hidden">
                  <video width="100%" autoPlay loop muted playsInline>
                    <source src={figureList[activeFeature].src} type="video/webm" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              }
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Features;
