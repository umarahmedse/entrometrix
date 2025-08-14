"use client";

import { useState, useEffect } from "react";
import * as motion from "motion/react-client";
import FeatureButton from "./FeatureButton";

const figureList = [
  {
    src: "/images/anims/illustration-1.webm",
    title: "Make net-zero decisions with confidence",
    desc: "Leverage real-time carbon intelligence and historical emissions data to make informed decarbonization choices that balance sustainability goals with operational efficiency.",
    metrics: "Real-time CO₂ tracking",
    category: "Carbon Intelligence",
  },
  {
    src: "/images/anims/illustration-2.webm",
    title: "Reduce emissions faster, waste nothing",
    desc: "In volatile energy markets and changing regulations, intelligent carbon management systems help you stay compliant while minimizing costs and environmental impact.",
    metrics: "40% faster emission cuts",
    category: "Smart Reduction",
  },
  {
    src: "/images/anims/illustration-3.webm",
    title: "Predict carbon hotspots before they impact",
    desc: "AI-powered predictive modeling identifies emission spikes and energy inefficiencies before they occur, enabling proactive sustainability management and cost prevention.",
    metrics: "85% issue prevention",
    category: "Predictive Analytics",
  },
  {
    src: "/images/anims/illustration-4.webm",
    title: "Optimize green supply chains with intelligent coordination",
    desc: "Transform your entire value chain with carbon-aware logistics, supplier sustainability scoring, and collaborative decarbonization strategies from procurement to delivery.",
    metrics: "30% scope 3 reduction",
    category: "Supply Chain",
  },
];

const Features = () => {
  const [activeFeature, setActiveFeature] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  // Auto-rotate features every 5 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % figureList.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleFeatureClick = (index: number) => {
    setActiveFeature(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <>
      <section
        id="features"
        className="bg-gradient-to-b from-gray-50/50 to-white py-16 dark:bg-gray-dark dark:from-gray-900/50 dark:to-gray-dark lg:py-20"
        aria-labelledby="features-main-heading"
      >
        <div className="container">
          {/* Section Header */}
          <div className="mb-6 text-center">
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              AI-Powered Carbon Management
            </span>
            <h2
              id="features-main-heading"
              className="text-4xl font-bold leading-tight lg:text-6xl"
            >
              <span className="text-primary">Accelerate Decarbonization</span>
              &nbsp;with Intelligent Automation
            </h2>
            <p className="mx-auto mt-8 max-w-4xl text-xl leading-relaxed dark:text-gray-400 lg:text-2xl">
              EntroMetrix's AI-driven platform transforms industrial operations
              with predictive carbon management, automated sustainability
              controls, and real-time emission optimization across your entire
              enterprise.
            </p>
          </div>

          {/* Progress Indicator */}
          <div className="mb-12 flex justify-center">
            <div className="flex gap-2">
              {figureList.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleFeatureClick(index)}
                  className={`h-2 w-2 rounded-full transition-all duration-300 ${
                    activeFeature === index
                      ? "w-8 bg-primary"
                      : "bg-gray-300 hover:bg-primary/50 dark:bg-gray-600"
                  }`}
                  aria-label={`Go to feature ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="container mt-14 hidden flex-row gap-12 lg:flex">
          <motion.div
            className="flex w-7/12 flex-col justify-center gap-6"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0 }}
          >
            {figureList.map((figure, index) => (
              <div key={index.toString()} className="relative">
                <div className="mb-2 flex items-start gap-4">
                  <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {figure.category}
                  </span>
                  <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-600 dark:bg-green-900/30 dark:text-green-400">
                    {figure.metrics}
                  </span>
                </div>
                <FeatureButton
                  title={figure.title}
                  active={activeFeature === index}
                  handleClick={() => handleFeatureClick(index)}
                >
                  {figure.desc}
                </FeatureButton>
              </div>
            ))}
          </motion.div>

          <motion.div
            className="w-5/12"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative">
              <div className="aspect-[1/1] min-h-0 w-full overflow-hidden rounded-2xl border border-primary bg-gradient-to-br from-primary/5 to-primary/10 shadow-2xl">
                <video
                  key={figureList[activeFeature].src}
                  width="100%"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-full w-full object-cover"
                  aria-label={`Demonstration of ${figureList[activeFeature].title}`}
                >
                  <source
                    src={figureList[activeFeature].src}
                    type="video/webm"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Feature indicator overlay */}
              <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-black/80 p-4 backdrop-blur-sm">
                <h3 className="mb-1 text-lg font-semibold text-white">
                  {figureList[activeFeature].title}
                </h3>
                <p className="text-sm text-gray-300">
                  {figureList[activeFeature].category} •{" "}
                  {figureList[activeFeature].metrics}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mobile Layout */}
        <div className="container flex flex-col space-y-6 lg:hidden">
          {figureList.map((figure, index) => (
            <motion.div
              className="w-full"
              key={index.toString()}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-3 flex items-start gap-2">
                <span className="inline-block rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                  {figure.category}
                </span>
                <span className="inline-block rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-600 dark:bg-green-900/30 dark:text-green-400">
                  {figure.metrics}
                </span>
              </div>

              <FeatureButton
                title={figure.title}
                active={activeFeature === index}
                handleClick={() => handleFeatureClick(index)}
              >
                {figure.desc}
              </FeatureButton>

              {activeFeature === index && (
                <motion.div
                  className="mt-6 w-full overflow-hidden rounded-2xl border border-primary bg-gradient-to-br from-primary/5 to-primary/10 shadow-xl"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                >
                  <video
                    width="100%"
                    autoPlay
                    loop
                    muted
                    playsInline
                    aria-label={`Mobile demonstration of ${figure.title}`}
                  >
                    <source src={figure.src} type="video/webm" />
                    Your browser does not support the video tag.
                  </video>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Call-to-Action Section */}
        <motion.div
          className="container mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="mx-auto max-w-2xl rounded-2xl bg-gradient-to-r from-primary/10 to-blue-500/10 p-8">
            <h3 className="mb-4 text-2xl font-bold lg:text-3xl">
              Ready to Transform Your{" "}
              <span className="text-primary">Carbon Strategy</span>?
            </h3>
            <p className="mb-6 text-gray-600 dark:text-gray-400">
              See how leading manufacturers are achieving 40% emission
              reductions with EntroMetrix's intelligent decarbonization
              platform.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/demo"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-white shadow-lg transition-all hover:scale-105 hover:bg-primary/90"
              >
                Schedule Demo
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
              <a
                href="/case-studies"
                className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-6 py-3 font-medium text-gray-900 transition-all hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
              >
                View Case Studies
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Features;
