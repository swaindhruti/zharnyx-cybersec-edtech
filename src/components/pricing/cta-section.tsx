"use client";

import { motion, Variants } from "motion/react";
import { ArrowRight } from "lucide-react";

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

export function PricingCTA() {
  return (
    <section className="relative w-full flex flex-col items-center py-32 bg-black overflow-hidden font-sans border-t border-white/5">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-red-600/10 blur-[120px] rounded-full" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center"
      >
        <motion.p
          variants={itemVariants}
          className="text-red-500 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] mb-6"
        >
          LIMITED SEATS
        </motion.p>

        <motion.h2
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.15] tracking-wide mb-6 max-w-3xl"
        >
          Ready to <span className="text-red-500">Invest in Your Future?</span>
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-gray-400 text-base sm:text-lg md:text-xl max-w-xl leading-relaxed tracking-wide mb-12"
        >
          Limited seats per cohort. Secure your spot today.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="/apply"
            className="group inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-red-600 text-white font-semibold text-base tracking-wide hover:bg-red-500 transition-all duration-300 shadow-[0_0_30px_rgba(239,68,68,0.35)] hover:shadow-[0_0_45px_rgba(239,68,68,0.55)]"
          >
            Enroll Now
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-white/5 text-white font-semibold text-base tracking-wide border border-white/10 hover:border-white/25 hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
          >
            Talk to Admissions
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
