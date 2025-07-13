"use client";

import { useState } from "react";
import * as motion from "motion/react-client";
import FeatureButton from "./FeatureButton";
import FeatureFigure from "./FeatureFigure";

const figureList = {
  costs:{
    src: "/images/demo/img-vector-01.svg",
    desc: "Configurable, first-principles cost and emissions models of commercial and emerging technology assets, from electrolyzers to vehicle fleets."
  },
  systems: {
    src: "/images/demo/img-vector-02.svg",
    desc: "Demystify the effects of technology investments and regulations, such as the Inflation Reduction Act, across projects and global supply chains."
  },
  optimize: {
    src: "/images/demo/img-vector-03.svg",
    desc: "Achieve cost and emissions targets across commodities, sites, and global portfolios."
  },
  technologies: {
    src: "/images/demo/img-vector-04.svg",
    desc: "Represent and explore novel, low-carbon technology solutions such as carbon capture systems, energy carriers, and energy storage."
  }
};

const Features = () => {
  const [activeFeature, setActiveFeature] = useState('costs');

  return (
    <>
      <section id="features" className="pb-16 md:pb-20 lg:pb-28">
        <div className="container border-y flex-row px-0 hidden lg:flex">
          <motion.div
            className="w-3/5 border-r py-16 flex flex-col gap-10"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0 }}
          >
            <FeatureButton active={activeFeature == 'costs'} onMouseEnter={() => setActiveFeature('costs')}>
              Costs and Emissions
            </FeatureButton>
            <FeatureButton active={activeFeature == 'systems'} onMouseEnter={() => setActiveFeature('systems')}>
              Systems & Supply Chains
            </FeatureButton>
            <FeatureButton active={activeFeature == 'optimize'} onMouseEnter={() => setActiveFeature('optimize')}>
              Optimize
            </FeatureButton>
            <FeatureButton active={activeFeature == 'technologies'} onMouseEnter={() => setActiveFeature('technologies')}>
              Emerging Technologies
            </FeatureButton>
          </motion.div>
          <div
            className="w-2/5 py-12 pl-11"
          >
            <FeatureFigure key={activeFeature} figure={figureList[activeFeature]} />
          </div>
        </div>
        <div className="container border-y flex-col px-0 flex lg:hidden">
          {Object.keys(figureList).map((key, index) =>
            <div className="w-full py-9 border-b" key={index.toString()}>
              <FeatureButton active={activeFeature == key} onMouseEnter={() => setActiveFeature(key)}>
                Costs and Emissions
              </FeatureButton>
              <div className="w-full mt-9">
                <FeatureFigure figure={figureList[key]} />
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Features;
