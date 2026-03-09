"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function AboutCTASection() {
  return (
    <section className="py-24 bg-black border-t border-white/10">
      <div className="container mx-auto px-6 lg:px-8 max-w-[1440px] text-center">
        {/* Badge */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-red-500 text-sm font-semibold uppercase tracking-widest mb-4"
        >
          Limited Seats Per Cohort
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4"
        >
          Ready to Start Your{" "}
          <span className="text-red-500">Cybersecurity Career?</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-base md:text-lg mb-10"
        >
          Enrollment slots are limited. Apply now to secure your spot in the
          next batch.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/apply"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-red-600 text-white font-semibold text-base rounded-md hover:bg-red-700 transition-colors shadow-[0_0_20px_rgba(239,68,68,0.4)] hover:shadow-[0_0_28px_rgba(239,68,68,0.55)]"
          >
            Apply Now <ArrowRight size={18} />
          </Link>
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white font-semibold text-base border border-white/30 rounded-md hover:bg-white/5 transition-colors"
          >
            View Pricing
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
