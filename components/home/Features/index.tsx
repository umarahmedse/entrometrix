"use client";

import { useState } from "react";
import * as motion from "motion/react-client";
import FeatureButton from "./FeatureButton";
import Divider from "@/components/Common/divider";

const figureList = [
  {
    src: "/images/anims/illustration-1.webm", // All use the same source
    title: "AI Co-Pilot for Operational Excellence",
    desc: "The AI Co-Pilot analyzes live plant data to recommend the top three actions with quantified value and risk. Teams align on evidence-based priorities, driving higher throughput, reduced waste, and faster impact with measurable weekly gains."
  },
  {
    src: "/images/anims/illustration-1.webm", // All use the same source
    title: "End-to-End Visibility and Control",
    desc: "Unify energy, emissions, cost, reliability, and lead time in one source of truth. Executives and operators see exactly where performance shifts occur, why they happen, and what to do next. This clarity speeds response and aligns decisions across the plant."
  },
  {
    src: "/images/anims/illustration-1.webm", // All use the same source
    title: "Supply Chain Agility and Lead-Time Reduction",
    desc: "Predict delays before they disrupt production and adjust in real time. Vendors are scored on OTIF, emissions, and risk, while the system recommends order splits, transport shifts, and adaptive safety stocks to cut cycle times and protect commitments."
  },
  {
    src: "/images/anims/illustration-1.webm", // All use the same source
    title: "Energy and Sustainability Performance",
    desc: "Identify and execute the most valuable efficiency opportunities. The platform quantifies cost impact and tCO₂e savings, helping leaders deliver verifiable ESG progress while plants cut utility costs, improve resource efficiency, and operate more sustainably with measurable financial payback."
  },
  {
    src: "/images/anims/illustration-1.webm", // All use the same source
    title: "Reliability and Cost Avoidance",
    desc: "Shift from reactive to predictive maintenance. Early-warning insights on vibration, temperature, and process stability prioritize actions by financial impact, confirm avoided downtime, and stretch maintenance budgets further. Critical assets deliver safer, more consistent output with transparent savings."
  }
];

// Define the single, constant video source to use everywhere
const singleVideoSource = "/images/anims/illustration-1.webm";

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
            {/* REPLACED: The video source is now hardcoded to singleVideoSource */}
            <div className="rounded-2xl border border-primary w-full aspect-[1/1] min-h-0 overflow-hidden">
              <video key={singleVideoSource} width="100%" autoPlay loop muted playsInline>
                <source src={singleVideoSource} type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
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
                  {/* REPLACED: The video source is now hardcoded to singleVideoSource */}
                  <video width="100%" autoPlay loop muted playsInline>
                    <source src={singleVideoSource} type="video/webm" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              }
            </div>
          )}
        </div>
      </section>
      <Divider/>
    </>
  );
};

export default Features;