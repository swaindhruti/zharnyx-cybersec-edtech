"use client";

import { motion, Variants } from "motion/react";
import { Check, ArrowRight, Zap } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 50, damping: 15 },
  },
};

export function ProgramsStandalone() {
  return (
    <section className="relative w-full flex flex-col items-center py-24 bg-black overflow-hidden font-sans border-t border-white/5">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <motion.p
            variants={itemVariants}
            className="text-red-500 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] mb-4"
          >
            FLEXIBLE OPTIONS
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-[1.15] tracking-wide"
          >
            Your Pace. <span className="text-red-500">Your Path.</span>
          </motion.h2>
        </div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Standalone Modules Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -6 }}
            className="group relative flex flex-col p-10 rounded-2xl bg-linear-to-b from-white/5 to-transparent border border-white/5 backdrop-blur-md overflow-hidden transition-all duration-500 hover:border-white/15 hover:shadow-2xl"
          >
            <div className="absolute -inset-4 blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 bg-white/3 -z-10" />

            <h3 className="text-2xl font-bold text-white tracking-wide mb-3">
              Standalone Modules
            </h3>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8">
              Can&apos;t commit to the full 7 months? Take individual phases:
            </p>

            <ul className="flex flex-col gap-4 mb-10 grow">
              {[
                "Foundation Phase — 3 months",
                "Any Specialization Track — 3 months",
                "Career Launch — 1 month",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="shrink-0 p-1.5 rounded-full bg-white/10 text-white">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  <span className="text-gray-300 text-sm sm:text-base tracking-wide">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="/pricing"
              className="group/btn inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white/5 border border-white/10 hover:border-white/25 hover:bg-white/10 text-white font-semibold text-sm tracking-wide backdrop-blur-sm transition-all duration-300 w-fit"
            >
              View Standalone Pricing
              <ArrowRight
                size={16}
                className="group-hover/btn:translate-x-1 transition-transform"
              />
            </a>
          </motion.div>

          {/* AI for Cybersecurity Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -6 }}
            className="group relative flex flex-col p-10 rounded-2xl bg-linear-to-b from-red-600/10 to-transparent border border-red-500/20 backdrop-blur-md overflow-hidden transition-all duration-500 hover:border-red-500/40 hover:shadow-2xl"
          >
            <div className="absolute -inset-4 blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 bg-red-500/10 -z-10" />

            <div className="flex items-center gap-3 mb-3">
              <h3 className="text-2xl font-bold text-white tracking-wide">
                AI for Cybersecurity
              </h3>
              <span className="text-red-500 text-xs font-bold px-2.5 py-1 bg-red-500/10 rounded-full border border-red-500/20 uppercase tracking-[0.15em] shrink-0">
                ADD-ON
              </span>
            </div>

            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4 grow">
              Optional standalone course covering AI/ML applications in
              cybersecurity — threat detection, anomaly analysis, and automated
              response.
            </p>

            <div className="flex items-center gap-2 mb-10">
              <Zap size={14} className="text-red-500" />
              <p className="text-gray-500 text-sm tracking-wide">
                Pricing on request · Available to all students
              </p>
            </div>

            <a
              href="/contact"
              className="group/btn inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-red-600 hover:bg-red-500 text-white font-semibold text-sm tracking-wide transition-all duration-300 shadow-[0_0_25px_rgba(239,68,68,0.35)] hover:shadow-[0_0_40px_rgba(239,68,68,0.55)] w-fit"
            >
              Enquire Now
              <ArrowRight
                size={16}
                className="group-hover/btn:translate-x-1 transition-transform"
              />
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
