"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.55, ease: "easeOut" as const, delay },
});

export function AboutCTASection() {
  return (
    <section className="relative w-full py-32 bg-black border-t border-white/5 overflow-hidden font-sans">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-red-600/8 blur-[130px] rounded-full" />
      </div>

      <div className="relative z-10 container mx-auto max-w-7xl px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Badge */}
        <motion.p
          {...fadeUp(0)}
          className="text-red-500 text-xs font-semibold uppercase tracking-[0.25em] mb-6"
        >
          Limited Seats Per Cohort
        </motion.p>

        {/* Heading */}
        <motion.h2
          {...fadeUp(0.08)}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-wide mb-6 max-w-4xl"
        >
          Ready to Start Your{" "}
          <span className="text-red-500">Cybersecurity Career?</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          {...fadeUp(0.14)}
          className="text-gray-500 text-base sm:text-lg md:text-xl leading-relaxed tracking-wide mb-12 max-w-2xl"
        >
          Enrollment slots are limited. Apply now to secure your spot in the
          next batch.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          {...fadeUp(0.2)}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-red-600 text-white font-semibold text-sm tracking-wide hover:bg-red-500 transition-all duration-300 shadow-[0_0_30px_rgba(239,68,68,0.3)] hover:shadow-[0_0_50px_rgba(239,68,68,0.5)]"
          >
            Apply Now
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-white/5 text-white font-semibold text-sm tracking-wide border border-white/10 hover:border-white/20 hover:bg-white/8 backdrop-blur-sm transition-all duration-300"
          >
            View Pricing
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
