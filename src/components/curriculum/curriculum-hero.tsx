"use client";

import { motion, Variants } from "motion/react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 50, damping: 15 },
  },
};

export function CurriculumHero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center text-center overflow-hidden bg-black font-sans px-4 pt-24 pb-20 border-b border-white/5">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-red-600/10 blur-[140px] rounded-full" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto flex flex-col items-center"
      >
        <motion.p
          variants={itemVariants}
          className="text-red-500 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] mb-6"
        >
          FULL CURRICULUM
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.15] tracking-wide mb-6"
        >
          28 Weeks. <span className="text-red-500">Every Detail.</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed tracking-wide"
        >
          Filter by phase or track. Every week shows objectives, tools, and
          deliverables.
        </motion.p>
      </motion.div>
    </section>
  );
}
