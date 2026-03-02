"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatedHeading } from "@/components/animated-heading";
import { AnimatedParagraph } from "@/components/animated-paragraph";
import GridSmallBackground from "@/components/grid-small-background";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1d2430] text-white">
      {/* Header */}
      <header className="flex items-center justify-between px-6 sm:px-12 lg:px-32 py-6">
        <Image
          src="/logo.webp"
          width={150}
          height={80}
          alt="Entrometrix AI Logo"
        />
        <nav>
          <a
            href="#contact"
            className="text-xs font-semibold tracking-widest text-gray-400 hover:text-white transition"
          >
            CONTACT
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="px-6 sm:px-12 lg:px-32 py-10 lg:py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
        <div>
          <AnimatedHeading className="text-[32px] sm:text-[40px] lg:text-[50px] font-light leading-tight mb-4 md:block hidden">
            An Intelligence Layer <br />
            for Industrial Operations,
            <br />
            <span className="bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
              Built on Physics and AI
            </span>
          </AnimatedHeading>
          <AnimatedHeading className="text-[32px] sm:text-[40px] lg:text-[50px] font-light leading-tight mb-4 md:hidden block">
            An Intelligence Layer <br />
            for Industrial Operations 
            <span className="bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
              Built on Physics and AI
            </span>
          </AnimatedHeading>
        </div>

        <div className="space-y-8">
          <div className="w-full rounded-lg overflow-hidden relative">
            <video
              className="w-full max-w-[500px] max-h-[500px] object-contain"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/main2.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="flex flex-col-reverse sm:flex-row-reverse items-start gap-4 sm:gap-8">
            <div className="text-md font-normal tracking-widest text-gray-400 whitespace-nowrap pt-1">
              ABOUT US
            </div>
            <div className="space-y-4 text-sm leading-relaxed text-gray-400">
              <AnimatedParagraph delay={0.2} className="text-[16px]">
                Industrial systems are more complex than ever before. A single
                manufacturing site operates across interconnected production
                assets, energy infrastructure, material flows and operational
                constraints. Small disruptions in process stability, equipment
                performance or demand do not remain isolated. They cascade
                across throughput, cost, efficiency and emissions.
              </AnimatedParagraph>
              <AnimatedParagraph delay={0.4} className="text-[16px]">
                Engineers and operators spend significant time responding to
                instability, unplanned downtime, rising energy intensity and
                avoidable resource loss. A late-stage change in one process step
                can propagate across the entire operation, reducing performance
                at scale.
              </AnimatedParagraph>
              <AnimatedParagraph delay={0.6} className="text-[16px]">
                EntroMetrix builds a physics-informed intelligence layer to
                fundamentally reduce that complexity, enabling continuous
                optimisation across production, energy and materials, and
                unlocking a new standard of industrial performance.
              </AnimatedParagraph>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="px-6 sm:px-12 lg:px-32 py-12 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7">
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-8">
              <div className="text-md font-normal tracking-widest text-gray-400 whitespace-nowrap pt-1">
                OUR APPROACH
              </div>
              <div className="text-sm leading-relaxed text-gray-400">
                <AnimatedParagraph delay={0.2} className="mb-4 text-[16px]">
                  Industrial performance emerges from thousands of linked
                  variables across process conditions, equipment response,
                  energy transfer, and material limits. These interactions are
                  not captured by isolated analytics or static rule logic.
                  Effective optimisation depends on a system-level model of how
                  operations behave under real constraints.
                </AnimatedParagraph>
                <AnimatedParagraph delay={0.4} className="mb-4 text-[16px]">
                  Across most sites, decisions are split between planners,
                  engineers, and control layers, each optimising local targets.
                  The key trade-offs between supply chains, throughput,
                  stability, efficiency, and cost are therefore coordinated
                  manually, or handled reactively when performance deviates.
                </AnimatedParagraph>
                <AnimatedParagraph delay={0.6} className="mb-4 text-[16px]">
                  EntroMetrix is derived from entropy, the physical measure of
                  disorder, and metrics, the quantification of performance
                  across industrial systems, reflecting how real operations
                  behave as interconnected systems. EntroMetrix develops AI that
                  pairs data-driven modelling with physics-informed structure.
                  By encoding thermodynamic relationships, material flow,
                  queueing effects, and operating constraints, the platform
                  aligns optimisation across the system, enabling decisions to
                  be coordinated automatically and improved continuously.
                </AnimatedParagraph>
              </div>
            </div>
          </div>
          <div className="hidden lg:block lg:col-span-4 relative max-w-[600px] rounded-lg overflow-hidden" />
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="px-6 sm:px-12 lg:px-32 py-12 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="hidden lg:block lg:col-span-4 relative max-w-[600px] rounded-lg overflow-hidden" />
          <div className="lg:col-span-8">
            <div className="flex flex-col sm:flex-row-reverse items-start gap-4 sm:gap-8">
              <div className="text-md font-normal tracking-widest text-gray-400 whitespace-nowrap pt-1">
                OUR MISSION
              </div>
              <div className="text-sm leading-relaxed text-gray-400">
                <AnimatedParagraph delay={0.2} className="mb-4 text-[16px]">
                  Industrial progress now defines economic strength, energy
                  security and climate stability. The systems that manufacture
                  goods, refine materials and power infrastructure determine how
                  efficiently society converts resources into prosperity.
                </AnimatedParagraph>
                <AnimatedParagraph delay={0.4} className="mb-4 text-[16px]">
                  Yet these systems were not designed for the demands they now
                  face. They operate under rising volatility, tighter
                  environmental constraints and increasing performance
                  expectations. Incremental improvement is no longer sufficient.
                  Industry requires structural advances in how complex
                  operations are analysed, coordinated and improved.
                </AnimatedParagraph>
                <AnimatedParagraph delay={0.6} className="mb-4 text-[16px]">
                  AI represents a turning point, but only when grounded in
                  engineering reality. Models must respect physical constraints,
                  operational limits and dynamic interactions across equipment,
                  materials and energy systems. When intelligence is embedded
                  directly into industrial decision-making, optimisation shifts
                  from reactive management to continuous, system-level
                  performance improvement.
                </AnimatedParagraph>
                <AnimatedParagraph delay={0.8} className="mb-4 text-[16px]">
                  EntroMetrix's mission is to establish a new class of
                  ManufacturingOS that enables industrial organisations to
                  autonomously surface inefficiencies, prioritise high-impact
                  interventions and execute optimisation in real time. By
                  aligning operational profitability with resource productivity
                  and emissions reduction, we aim to accelerate the transition
                  toward more competitive, resilient and sustainable industrial
                  systems.
                </AnimatedParagraph>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="px-6 sm:px-12 lg:px-32 py-12 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-8">
              <div className="text-md font-normal tracking-widest text-gray-400 whitespace-nowrap pt-1">
                JOIN US
              </div>
              <div className="text-sm leading-relaxed text-gray-400">
                <AnimatedParagraph delay={0.2} className="mb-4 text-[16px]">
                  EntroMetrix has been developed by researchers from the
                  University of Cambridge and Imperial College London to tackle
                  some of the biggest challenges in industries face. Our focus
                  is industrial performance at scale, where rigorous modelling,
                  optimisation and real-world deployment matter, at speed.
                </AnimatedParagraph>
                <AnimatedParagraph delay={0.4} className="mb-4 text-[16px]">
                  EntroMetrix's mission is to establish a new class of
                  ManufacturingOS that enables industrial organisations to
                  autonomously surface inefficiencies, prioritise high-impact
                  interventions and execute optimisation in real time. By
                  aligning operational profitability with resource productivity
                  and emissions reduction, we aim to accelerate the transition
                  toward more competitive, resilient and sustainable industrial
                  systems.
                </AnimatedParagraph>
                <AnimatedParagraph delay={0.6} className="mb-4 text-[16px]">
                  If you are motivated by applying advanced AI to manufacturing,
                  energy and infrastructure, and want to work on systems that
                  directly impact efficiency, profitability and sustainability,
                  explore our open roles or send your CV to info@entrometrix.ai
                </AnimatedParagraph>
              </div>
            </div>
          </div>
          <div className="hidden lg:block lg:col-span-4 relative max-w-[600px] rounded-lg overflow-hidden" />
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="px-6 sm:px-10 lg:px-24 xl:px-32 py-12 lg:py-24"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 lg:col-start-5">
            <div className="flex flex-col sm:flex-row-reverse items-start gap-4 sm:gap-6 lg:gap-8">
              <div className="text-md font-normal tracking-widest text-gray-400 whitespace-nowrap pt-1">
                CONTACT
              </div>
              <div className="text-gray-400 text-[16px] leading-relaxed max-w-none lg:max-w-[720px] xl:max-w-[820px]">
                <p>
                  EntroMetrix is already delivering up to{" "}
                  <span className="text-white">
                    25% efficiency improvements
                  </span>{" "}
                  across industrial operations.
                </p>
                <p className="mt-4">
                  To discuss your operations with our engineering team or to
                  request a demo, contact{" "}
                  <a
                    href="mailto:info@entrometrix.ai"
                    className="text-white hover:text-gray-300 transition"
                  >
                    info@entrometrix.ai
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 px-6 sm:px-12 lg:px-32 py-8 mt-8 lg:mt-16">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 max-w-6xl">
          <div className="space-y-2">
            <Image
              src="/logo.webp"
              width={150}
              height={80}
              alt="Entrometrix AI Logo"
              className="mb-4 text-[16px]"
            />
            <p className="text-xs text-gray-600">
              © 2026 Entrometrix AI. All rights reserved.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
            <a
              href="mailto:hello@entrometrix.ai"
              className="text-xs text-gray-600 hover:text-gray-400 transition"
            >
              hello@entrometrix.ai
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs text-gray-600 hover:text-gray-400 transition"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
