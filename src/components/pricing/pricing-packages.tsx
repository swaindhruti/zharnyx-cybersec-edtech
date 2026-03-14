"use client";

import { motion, Variants } from "motion/react";
import { ArrowRight, Star } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 50, damping: 15 },
  },
};

const breakdownRow = (label: string, value: string) => (
  <div
    key={label}
    className="flex justify-between items-center py-3.5 border-b border-white/5 last:border-none"
  >
    <span className="text-gray-400 text-sm tracking-wide">{label}</span>
    <span className="text-white text-sm font-semibold">{value}</span>
  </div>
);

export function PricingPackages() {
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
            className="text-red-500 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] mb-4"
          >
            FULL PACKAGES
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-[1.15] tracking-wide"
          >
            Choose Your <span className="text-red-500">Package</span>
          </motion.h2>
        </div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Student Package - Featured */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -6 }}
            className="group relative flex flex-col p-10 rounded-2xl bg-linear-to-b from-red-600/10 to-transparent border border-red-500/30 backdrop-blur-md overflow-hidden transition-all duration-500 hover:border-red-500/50 hover:shadow-2xl"
          >
            {/* Glow */}
            <div className="absolute -inset-4 blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 bg-red-500/10 -z-10" />

            <div className="flex items-center justify-between mb-8">
              <span className="text-xs font-bold text-red-500 uppercase tracking-[0.15em] px-3 py-1.5 bg-red-500/10 rounded-full border border-red-500/20">
                Student Package
              </span>
              <span className="flex items-center gap-1.5 text-xs text-red-400 font-semibold">
                <Star size={12} fill="currentColor" />
                50% off Foundation
              </span>
            </div>

            <div className="mb-8">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-5xl font-black text-transparent bg-clip-text bg-linear-to-b from-white to-gray-400 tracking-tight">
                  ₹47,137
                </span>
              </div>
              <p className="text-gray-500 text-xs tracking-wide uppercase">
                Total incl. 18% GST
              </p>
            </div>

            <div className="flex flex-col mb-10 grow rounded-xl overflow-hidden border border-white/5 bg-white/2 px-4">
              {breakdownRow("Foundation (50% off)", "₹4,949")}
              {breakdownRow("Specialization Track", "₹25,999")}
              {breakdownRow("Career Launch", "₹8,999")}
              {breakdownRow("Subtotal", "₹39,947")}
              {breakdownRow("GST (18%)", "₹7,190.46")}
            </div>

            <a
              href="/apply"
              className="group/btn inline-flex items-center justify-center gap-2 w-full px-8 py-4 rounded-full bg-red-600 hover:bg-red-500 text-white font-semibold text-sm tracking-wide transition-all duration-300 shadow-[0_0_25px_rgba(239,68,68,0.35)] hover:shadow-[0_0_40px_rgba(239,68,68,0.55)]"
            >
              Enroll as Student
              <ArrowRight
                size={16}
                className="group-hover/btn:translate-x-1 transition-transform"
              />
            </a>
          </motion.div>

          {/* Regular Package */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -6 }}
            className="group relative flex flex-col p-10 rounded-2xl bg-linear-to-b from-white/5 to-transparent border border-white/5 backdrop-blur-md overflow-hidden transition-all duration-500 hover:border-white/15 hover:shadow-2xl"
          >
            <div className="absolute -inset-4 blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 bg-white/3 -z-10" />

            <div className="flex items-center justify-between mb-8">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-[0.15em] px-3 py-1.5 bg-white/5 rounded-full border border-white/10">
                Regular Package
              </span>
            </div>

            <div className="mb-8">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-5xl font-black text-transparent bg-clip-text bg-linear-to-b from-white to-gray-400 tracking-tight">
                  ₹52,978
                </span>
              </div>
              <p className="text-gray-500 text-xs tracking-wide uppercase">
                Total incl. 18% GST
              </p>
            </div>

            <div className="flex flex-col mb-10 grow rounded-xl overflow-hidden border border-white/5 bg-white/2 px-4">
              {breakdownRow("Foundation", "₹9,899")}
              {breakdownRow("Specialization Track", "₹25,999")}
              {breakdownRow("Career Launch", "₹8,999")}
              {breakdownRow("Subtotal", "₹44,897")}
              {breakdownRow("GST (18%)", "₹8,081.46")}
            </div>

            <a
              href="/apply"
              className="inline-flex items-center justify-center gap-2 w-full px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:border-white/25 hover:bg-white/10 text-white font-semibold text-sm tracking-wide backdrop-blur-sm transition-all duration-300"
            >
              Enroll Now
            </a>
          </motion.div>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-center mt-8 text-xs text-gray-500 tracking-wide"
        >
          EMI options available on request · Institutional / college batch
          pricing on request
        </motion.p>
      </motion.div>
    </section>
  );
}
