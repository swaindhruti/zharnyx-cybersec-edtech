"use client";

import { motion, Variants } from "motion/react";
import { ArrowDown } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 50, damping: 15 },
  },
};

export function ProgramsHero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center text-center overflow-hidden bg-black font-sans px-4">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-red-600/10 blur-[140px] rounded-full" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto flex flex-col items-center mt-20"
      >
        <motion.p
          variants={itemVariants}
          className="text-red-500 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] mb-6"
        >
          PROGRAMS
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.15] tracking-wide mb-6"
        >
          7 Months. 4 Tracks.{" "}
          <span className="text-red-500">100% Hands-On.</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-gray-400 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed tracking-wide mb-16"
        >
          Our program is structured in 3 phases — Foundation, Specialization,
          and Career Launch. Every student builds a portfolio of real
          deliverables.
        </motion.p>

        {/* Stats row */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full max-w-2xl"
        >
          {[
            { value: "7", label: "Months", suffix: "" },
            { value: "4", label: "Tracks", suffix: "" },
            { value: "28", label: "Weeks", suffix: "" },
            { value: "100", label: "Hands-On", suffix: "%" },
          ].map((stat) => (
            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              key={stat.label}
              className="flex flex-col items-center justify-center relative p-6 rounded-2xl bg-linear-to-b from-white/5 to-transparent border border-white/5 backdrop-blur-md overflow-hidden group cursor-default"
            >
              <div className="absolute -inset-1 rounded-2xl bg-red-500/0 group-hover:bg-red-500/10 blur-xl transition-all duration-500" />
              <span className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-linear-to-b from-white to-gray-500 tracking-tight mb-1 relative z-10 flex items-baseline">
                {stat.value}
                {stat.suffix && (
                  <span className="text-xl text-red-500 ml-0.5">
                    {stat.suffix}
                  </span>
                )}
              </span>
              <span className="text-xs font-semibold text-gray-400 tracking-[0.2em] uppercase text-center relative z-10">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center gap-2"
      >
        <ArrowDown className="w-5 h-5 text-gray-600" />
      </motion.div>
    </section>
  );
}
