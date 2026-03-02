"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatedHeading } from "@/components/animated-heading";
import { AnimatedParagraph } from "@/components/animated-paragraph";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1d2430] text-white">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-6">
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
      <section className="px-8 py-16 grid grid-cols-2 gap-12 items-start">
        {/* Left Side - Heading */}
        <div>
          <AnimatedHeading className="text-6xl font-light leading-tight mb-4">
            An Intelligence Layer for Industrial Operations, Built on Physics
            and AI
          </AnimatedHeading>
        </div>

        {/* Right Side - Content and Image */}
        <div className="space-y-8">
          <div className="w-full max-h-[400px] rounded-lg overflow-hidden relative">
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/main.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
          {/* About Section */}
          <div>
            <div className="text-xs font-semibold tracking-widest text-gray-400 mb-6">
              ABOUT US
            </div>
            <div className="space-y-4 text-sm leading-relaxed text-gray-400">
              <AnimatedParagraph delay={0.2}>
                Industrial systems are more complex than ever before. A single
                manufacturing site operates across interconnected production
                assets, energy infrastructure, material flows and operational
                constraints. Small disruptions in process stability, equipment
                performance or demand do not remain isolated. They cascade
                across throughput, cost, efficiency and emissions.
              </AnimatedParagraph>
              <AnimatedParagraph delay={0.4}>
                Engineers and operators spend significant time responding to
                instability, unplanned downtime, rising energy intensity and
                avoidable resource loss. A late-stage change in one process step
                can propagate across the entire operation, reducing performance
                at scale.
              </AnimatedParagraph>
              <AnimatedParagraph delay={0.6}>
                EntroMetrix builds a physics-informed intelligence layer to
                fundamentally reduce that complexity, enabling continuous
                optimisation across production, energy and materials, and
                unlocking a new standard of industrial performance.
              </AnimatedParagraph>
            </div>
          </div>

          {/* Hero Image Placeholder */}
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="px-8 py-24">
        <div className="grid grid-cols-12 gap-8">
          {/* Left Label and Text */}
          <div className="col-span-7">
            <div className="space-y-6">
              <div className="text-xs font-semibold tracking-widest text-gray-400">
                OUR APPROACH
              </div>
              <div className="text-sm leading-relaxed text-gray-400">
                <AnimatedParagraph delay={0.2}>
                  Industrial performance emerges from thousands of linked
                  variables across process conditions, equipment response,
                  energy transfer, and material limits. These interactions are
                  not captured by isolated analytics or static rule logic.
                  Effective optimisation depends on a system-level model of how
                  operations behave under real constraints.
                </AnimatedParagraph>
                <AnimatedParagraph delay={0.4}>
                  Across most sites, decisions are split between planners,
                  engineers, and control layers, each optimising local targets.
                  The key trade-offs between supply chains, throughput,
                  stability, efficiency, and cost are therefore coordinated
                  manually, or handled reactively when performance deviates.
                  EntroMetrix is derived from entropy, the physical measure of
                  disorder, and metrics, the quantification of performance
                  across industrial systems, reflecting how real operations
                  behave as interconnected systems.
                </AnimatedParagraph>
                <AnimatedParagraph delay={0.6}>
                  EntroMetrix develops AI that pairs data-driven modelling with
                  physics-informed structure. By encoding thermodynamic
                  relationships, material flow, queueing effects, and operating
                  constraints, the platform aligns optimisation across the
                  system, enabling decisions to be coordinated automatically and
                  improved continuously.
                </AnimatedParagraph>
              </div>
            </div>
          </div>

          {/* Right Video */}
          <div className="col-span-4 relative  max-w-[600px] rounded-lg overflow-hidden">
            <video
              className="w-full object-cover rounded-lg"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/main2.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section className="px-8 py-24 max-w-4xl ml-auto">
        <div className="space-y-6">
          <div className="text-xs font-semibold tracking-widest text-gray-400 mb-8">
            OUR MISSION
          </div>
          <div className="space-y-6 text-sm leading-relaxed text-gray-400">
            <AnimatedParagraph delay={0.2}>
              Industrial progress now defines economic strength, energy security
              and climate stability. The systems that manufacture goods, refine
              materials and power infrastructure determine how efficiently
              society converts resources into prosperity.
            </AnimatedParagraph>
            <AnimatedParagraph delay={0.4}>
              Yet these systems were not designed for the demands they now face.
              They operate under rising volatility, tighter environmental
              constraints and increasing performance expectations. Incremental
              improvement is no longer sufficient. Industry requires structural
              advances in how complex operations are analysed, coordinated and
              improved.
            </AnimatedParagraph>
            <AnimatedParagraph delay={0.6}>
              AI represents a turning point, but only when grounded in
              engineering reality. Models must respect physical constraints,
              operational limits and dynamic interactions across equipment,
              materials and energy systems. When intelligence is embedded
              directly into industrial decision-making, optimisation shifts from
              reactive management to continuous, system-level performance
              improvement.
            </AnimatedParagraph>
            {/* <div className="pt-4">
              <a
                href="mailto:hiring@entrometrix.ai"
                className="text-gray-300 hover:text-white transition font-mono text-xs tracking-wide"
              >
                hiring@entrometrix.ai <span className="text-gray-600">—</span>
              </a>
            </div> */}
          </div>
        </div>
      </section>
      <section className="px-8 py-24">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-4 relative  max-w-[600px] rounded-lg overflow-hidden">
            <video
              className="w-full object-cover rounded-lg"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/main2.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="col-span-7">
            <div className="space-y-6">
              <div className="text-xs font-semibold tracking-widest text-gray-400">
                OUR APPROACH
              </div>
              <div className="text-sm leading-relaxed text-gray-400">
                <AnimatedParagraph delay={0.2}>
                  Industrial performance emerges from thousands of linked
                  variables across process conditions, equipment response,
                  energy transfer, and material limits. These interactions are
                  not captured by isolated analytics or static rule logic.
                  Effective optimisation depends on a system-level model of how
                  operations behave under real constraints.
                </AnimatedParagraph>
                <AnimatedParagraph delay={0.4}>
                  Across most sites, decisions are split between planners,
                  engineers, and control layers, each optimising local targets.
                  The key trade-offs between supply chains, throughput,
                  stability, efficiency, and cost are therefore coordinated
                  manually, or handled reactively when performance deviates.
                  EntroMetrix is derived from entropy, the physical measure of
                  disorder, and metrics, the quantification of performance
                  across industrial systems, reflecting how real operations
                  behave as interconnected systems.
                </AnimatedParagraph>
                <AnimatedParagraph delay={0.6}>
                  EntroMetrix develops AI that pairs data-driven modelling with
                  physics-informed structure. By encoding thermodynamic
                  relationships, material flow, queueing effects, and operating
                  constraints, the platform aligns optimisation across the
                  system, enabling decisions to be coordinated automatically and
                  improved continuously.
                </AnimatedParagraph>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="border-t border-gray-800 px-8 py-8 mt-16">
        <div className="flex items-center justify-between max-w-6xl">
          {/* Left Side */}
          <div className="space-y-2">
            <Image
              src="/logo.webp"
              width={150}
              height={80}
              alt="Entrometrix AI Logo"
              className="mb-4"
            />
            <p className="text-xs text-gray-600">
              © 2026 Entrometrix AI. All rights reserved.
            </p>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-8">
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
