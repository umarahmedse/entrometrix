"use client";

import { useEffect, useRef, useState } from "react";
import * as motion from "motion/react-client";
import FeatureButton from "./FeatureButton";
import FeatureFigure from "./FeatureFigure";

const figureList = [
  {
    src: "/images/anims/illustration-1.webm",
    title: "Stay agile under pressure",
    desc: "Boost plant efficiency with intelligent simulation that combines live and historical data. Get an accurate view of operations and optimize energy use with fast, data-driven decisions."
  },
  {
    src: "/images/anims/illustration-2.webm",
    title: "In fast-moving environments, slow decisions cost more",
    desc: "We help ops teams boost performance by streamlining insights and improvements. Faster lead times, better collaboration, and focus on what really matters."
  },
  {
    src: "/images/anims/illustration-3.webm",
    title: "Build a plant that thinks ahead",
    desc: "It adapts as conditions change, helping teams find new opportunities and improve performance."
  },
  {
    src: "/images/anims/illustration-4.webm",
    title: "Elevate supply chain performance through predictive optimisation",
    desc: "Tailored insights and scenario testing help teams move faster and smarter—from suppliers to delivery."
  }
];

const Features = () => {
  const [activeFeature, setActiveFeature] = useState<number>(0);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [activeFeature]);

  return (
    <>
      <section id="features" className="py-16 lg:py-20 dark:bg-gray-dark">
        <div className="w-full">
          <h3 className="text-4xl lg:text-6xl leading-tight font-bold text-center">
            <span className="text-primary">Optimize Operations</span>&nbsp;with Real-time AI Simulation
          </h3>
          <p className="text-xl leading-relaxed mt-8 dark:text-gray-400 text-center">
            EntroMetrix optimizes your plant in real time, providing engineers with clear, cost-aware insights every shift.
          </p>
        </div>
        <div className="container flex-row px-0 hidden lg:flex mt-14">
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
          <div className="w-5/12 rounded-2xl border border-primary overflow-hidden">
            <video ref={videoRef} width="100%" autoPlay loop muted playsInline>
              <source src={figureList[activeFeature].src} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="container border-y flex-col px-0 flex lg:hidden">
          {figureList.map((figure, index) =>
            <div className="w-full py-9 border-b" key={index.toString()}>
              <FeatureButton title={figure.title} active={activeFeature == index} handleClick={() => setActiveFeature(index)}>
                {figure.desc}
              </FeatureButton>
              {activeFeature == index &&
                <div className="w-full mt-9 rounded-2xl border border-primary overflow-hidden">
                  <video ref={videoRef} width="100%" autoPlay loop muted playsInline>
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
