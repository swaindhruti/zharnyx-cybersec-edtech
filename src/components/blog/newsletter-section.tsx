"use client";

import { motion, Variants } from "motion/react";
import { useState } from "react";
import { ArrowRight, Send } from "lucide-react";
import Link from "next/link";

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

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="relative w-full flex flex-col items-center py-32 bg-black overflow-hidden font-sans border-t border-white/5">
      {/* Ambient background glow — same as AboutCTASection */}
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
        {/* Badge */}
        <motion.p
          variants={itemVariants}
          className="text-red-500 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] mb-6"
        >
          Stay in the Loop
        </motion.p>

        {/* Heading */}
        <motion.h2
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.15] tracking-wide mb-6 max-w-3xl"
        >
          Weekly Tamil Nadu <span className="text-red-500">Cyber Insights</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          variants={itemVariants}
          className="text-gray-400 text-base sm:text-lg md:text-xl max-w-xl leading-relaxed tracking-wide mb-12"
        >
          Get career guides, tool tutorials, and job market updates delivered to
          your inbox every week.
        </motion.p>

        {/* Form / Success */}
        <motion.div variants={itemVariants} className="w-full max-w-lg">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 60, damping: 15 }}
              className="flex flex-col items-center gap-4 px-10 py-8 rounded-2xl border border-red-500/20 bg-red-500/5"
            >
              <span className="text-4xl">🎉</span>
              <p className="text-white font-bold text-lg tracking-wide">
                You&apos;re in!
              </p>
              <p className="text-gray-400 text-sm tracking-wide">
                First issue lands in your inbox next week.
              </p>
              <Link
                href="/blog"
                className="group inline-flex items-center gap-2 text-red-500 text-sm font-semibold tracking-wide hover:text-red-400 transition-colors"
              >
                Browse articles
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </motion.div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (email) setSubmitted(true);
              }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="grow px-6 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-white placeholder:text-gray-600 text-sm tracking-wide focus:outline-none focus:border-red-500/50 focus:bg-red-500/5 transition-all duration-300"
              />
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-red-600 hover:bg-red-500 text-white font-semibold text-sm tracking-wide transition-all duration-300 shadow-[0_0_30px_rgba(239,68,68,0.35)] hover:shadow-[0_0_45px_rgba(239,68,68,0.55)] shrink-0"
              >
                Subscribe
                <Send
                  size={15}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </button>
            </form>
          )}
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="mt-6 text-xs text-gray-600 tracking-wide"
        >
          No spam. Unsubscribe anytime.
        </motion.p>
      </motion.div>
    </section>
  );
}
