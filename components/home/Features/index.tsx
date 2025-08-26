"use client";

import { useState } from "react";
import * as motion from "motion/react-client";
import FeatureButton from "./FeatureButton";
import Divider from "@/components/Common/divider";

const figureList = [
  {
    src: "/images/anims/illustration-1.webm", // All use the same source
    title: "AI Co-Pilot for Operational Excellence",
    desc: "The AI Co-Pilot analyzes live plant data to recommend the series of actions with quantified value and risk. Teams align on evidence-based priorities, driving higher throughput, reduced waste, and faster impact with measurable weekly gains."
  },
  {
    src: "/images/anims/illustration-1.webm", // All use the same source
    title: "End-to-End Visibility and Control",
    desc: "We combine energy, emissions, cost, reliability, and supply chain data in a unified optimisation model. This allows executives and operators to see where performance shifts occur, understand the underlying causes, and identify the most effective next steps. By treating the plant as an integrated system, we enable faster responses and better-aligned decisions that maximise overall efficiency and value."
  },
  {
    src: "/images/anims/illustration-1.webm", // All use the same source
    title: "Supply Chain Agility and Lead-Time Reduction",
    desc: "Predict delays before they affect production and adjust in real time. Vendors are evaluated on OTIF, emissions, and risk, while the system dynamically optimises order splits, transport modes, and safety stocks to minimise cycle times and maintain delivery commitments."
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
          <h3 className="text-4xl lg:text-5xl leading-tight font-bold text-center">
            <span className="text-primary">Optimize Operations</span>&nbsp;with Real-time AI-driven Simulations
          </h3>
          <p className="text-lg leading-relaxed mt-8 dark:text-gray-400 text-center">
            EntroMetrix provides continuous, real-time insights to optimize efficiency and reduce costs at every step.
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="container flex-row hidden lg:flex mt-14">
          <motion.div
            className="w-7/12 flex flex-col gap-4 justify-center"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0 }}
          >
            {figureList.map((figure, index) => (
              <FeatureButton
                key={index.toString()}
                title={figure.title}
                active={activeFeature == index}
                handleClick={() => setActiveFeature(index)}
              >
                {figure.desc}
              </FeatureButton>
            ))}
          </motion.div>

          <div className="w-5/12">
            <div className="rounded-2xl border border-primary w-full aspect-[1/1] min-h-0 overflow-hidden">
              <video
                key={singleVideoSource}
                width="100%"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={singleVideoSource} type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="container flex-col flex lg:hidden">
          {figureList.map((figure, index) => (
            <div className="w-full text-base py-4" key={index.toString()}>
              <FeatureButton
                title={figure.title}
                active={activeFeature == index}
                handleClick={() => setActiveFeature(index)}
              >
                {figure.desc}
              </FeatureButton>

              {activeFeature == index && (
                <div className="w-full mt-4 rounded-2xl border border-primary overflow-hidden">
                  <video width="100%" autoPlay loop muted playsInline>
                    <source src={singleVideoSource} type="video/webm" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <Divider />
    </>
  );
};

export default Features;
