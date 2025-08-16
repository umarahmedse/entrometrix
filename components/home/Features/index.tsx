"use client";

import { useState } from "react";
import * as motion from "motion/react-client";
import FeatureButton from "./FeatureButton";

const figureList = [
  {
    src: "/images/anims/illustration-1.webm",
    title: "Real-Time AI Insights",
    desc: "Analyse live and historical data to detect inefficiencies, optimise control parameters, and improve overall performance."
  },
  {
    src: "/images/anims/illustration-2.webm",
    title: "Predictive Waste Control",
    desc: "Model and forecast energy, material, and process losses, enabling targeted interventions before costs escalate."
  },
  {
    src: "/images/anims/illustration-3.webm",
    title: "Downtime Prevention",
    desc: "Identify early warning signs of faults to reduce unplanned stoppages and minimise maintenance delays."
  },
  {
    src: "/images/anims/illustration-4.webm",
    title: "Lead Time Optimisation",
    desc: "Synchronise procurement, production, and logistics to shorten lead times and stabilise throughput."
  }
];

const Features = () => {
  const [activeFeature, setActiveFeature] = useState<number>(0);

  return (
    <>
      <section id="features" className="py-16 lg:py-20 dark:bg-gray-dark">
        <div className="container">
          <h3 className="text-4xl lg:text-6xl leading-tight font-bold text-center">
            <span className="text-primary">Optimise Operations</span>&nbsp;with Real-time AI Simulation
          </h3>
          <p className="text-2xl leading-relaxed mt-8 dark:text-gray-400 text-center">
            EntroMetrix provides continuous, real-time insights to optimise efficiency and reduce costs at every cycle.
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
        <div className="container flex-col flex lg:hidden">
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
