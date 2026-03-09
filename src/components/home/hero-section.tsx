"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <div className="relative min-h-screen  flex flex-col justify-center overflow-hidden bg-black pt-20 pb-16">
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none opacity-30" />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:px-16">
        {/* Top Badge */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-red-500 text-sm font-semibold uppercase tracking-[0.2em] mb-6"
        >
          Tamil Nadu&apos;s Own Cybersecurity Academy
        </motion.p>

        {/* Hero Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-6 max-w-3xl"
        >
          India&apos;s First Track-Specialised,{" "}
          <span className="text-red-500">Deployment-Ready</span> Cyber Academy
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="text-gray-400 text-base md:text-lg max-w-xl mb-10 leading-relaxed"
        >
          Choose your path. Master real tools. Get hired. 7 months from zero to
          cybersecurity career — in Coimbatore, Chennai, or Remote.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-start gap-4 mb-16"
        >
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-red-600 text-white font-semibold text-sm rounded-lg hover:bg-red-700 transition-colors shadow-[0_0_20px_rgba(239,68,68,0.4)] hover:shadow-[0_0_28px_rgba(239,68,68,0.55)]"
          >
            Explore Programs <ArrowRight size={16} />
          </Link>
          <Link
            href="/curriculum"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-transparent text-white font-semibold text-sm border border-white/30 rounded-lg hover:bg-white/5 transition-colors"
          >
            View Curriculum
          </Link>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-5 max-w-xl"
        >
          {[
            { value: "7", label: "Months" },
            { value: "4", label: "Tracks" },
            { value: "28", label: "Weeks" },
            { value: "100%", label: "Hands-On" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center py-5 px-8 border border-white/10 rounded-lg bg-white/5"
            >
              <span className="text-2xl font-bold text-red-500">{stat.value}</span>
              <span className="text-xs text-gray-500 mt-1">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
