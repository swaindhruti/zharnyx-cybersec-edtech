"use client";

import { motion, Variants } from "motion/react";
import { Target, Eye } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.18 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 50, damping: 15 },
  },
};

export function AboutHero() {
  return (
    <section
      id="mission"
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black font-sans px-4 pt-24 pb-20 border-b border-white/5"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-red-600/8 blur-[150px] rounded-full" />
        <div className="absolute right-1/4 top-1/3 w-[400px] h-[300px] bg-white/2 blur-[120px] rounded-full" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-7xl mx-auto"
      >
        {/* Header text */}
        <div className="mb-20">
          <motion.p
            variants={itemVariants}
            className="text-red-500 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] mb-6"
          >
            ABOUT US
          </motion.p>
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-wide mb-8 max-w-5xl"
          >
            Tamil Nadu&apos;s Own{" "}
            <span className="text-red-500">Cybersecurity Academy.</span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-base sm:text-lg md:text-xl max-w-3xl leading-relaxed tracking-wide"
          >
            Making Tamil Nadu&apos;s students job-ready in cybersecurity — one
            cohort at a time.
          </motion.p>
        </div>

        {/* Mission & Vision Cards */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Mission */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="group relative flex flex-col gap-6 p-10 rounded-2xl bg-linear-to-b from-red-600/8 to-transparent border border-red-500/20 backdrop-blur-md overflow-hidden transition-all duration-500 hover:border-red-500/40"
          >
            <div className="absolute -inset-4 blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 bg-red-500/8 -z-10" />
            <div className="p-3 w-fit rounded-full bg-red-500/10 text-red-500">
              <Target className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-white tracking-wide mb-4">
                Mission
              </h2>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed tracking-wide">
                Make Tamil Nadu&apos;s students job-ready in cybersecurity
                through hands-on, track-specialised training that produces Day-1
                deployable graduates — not just certificate holders.
              </p>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="group relative flex flex-col gap-6 p-10 rounded-2xl bg-linear-to-b from-white/5 to-transparent border border-white/5 backdrop-blur-md overflow-hidden transition-all duration-500 hover:border-white/15"
          >
            <div className="absolute -inset-4 blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 bg-white/3 -z-10" />
            <div className="p-3 w-fit rounded-full bg-white/8 text-white">
              <Eye className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-white tracking-wide mb-4">
                Vision
              </h2>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed tracking-wide">
                Every Zharnyx graduate walks into their first cybersecurity role
                with a portfolio of real deliverables, hands-on lab experience,
                and the confidence to perform from Day 1.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
