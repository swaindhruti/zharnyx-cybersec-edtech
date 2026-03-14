"use client";

import { motion, Variants } from "motion/react";
import { ArrowDown } from "lucide-react";

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

export function PricingHero() {
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
        className="relative z-10 max-w-4xl mx-auto flex flex-col items-center"
      >
        <motion.p
          variants={itemVariants}
          className="text-red-500 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] mb-6"
        >
          PRICING
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.15] tracking-wide mb-6"
        >
          Affordable <span className="text-red-500">By Design.</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-gray-400 text-base sm:text-lg md:text-xl max-w-xl leading-relaxed tracking-wide mb-8"
        >
          All prices include 18% GST. No hidden fees.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-6 px-8 py-4 bg-linear-to-b from-white/5 to-transparent border border-white/5 rounded-full backdrop-blur-md"
        >
          <span className="text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-[0.15em]">
            EMI Available
          </span>
          <span className="w-px h-4 bg-white/10" />
          <span className="text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-[0.15em]">
            18% GST Included
          </span>
          <span className="w-px h-4 bg-white/10" />
          <span className="text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-[0.15em]">
            No Hidden Fees
          </span>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="w-5 h-5 text-gray-600" />
      </motion.div>
    </section>
  );
}
