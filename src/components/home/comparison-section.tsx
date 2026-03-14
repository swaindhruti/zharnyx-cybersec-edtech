"use client";

import { motion } from "motion/react";
import { X, Check, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.55, ease: "easeOut" as const, delay },
});

const traditional = [
  "Theory-based learning",
  "Certificates as proof",
  "Hope for placement",
  "Self-paced isolation",
  "Generic curriculum",
];

const zharnyx = [
  "Simulation-based operations",
  "Portfolio & verified work",
  "Gatekeeping & deployment tiers",
  "Pressure-tested cohorts",
  "War room missions",
];

export function ComparisonSection() {
  return (
    <section className="relative w-full py-24 bg-black border-t border-white/5 overflow-hidden font-sans">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <motion.p
            {...fadeUp(0)}
            className="text-red-500 text-xs font-semibold uppercase tracking-[0.25em] mb-4 flex items-center gap-2"
          >
            <AlertTriangle size={13} strokeWidth={2.5} />
            The Reality
          </motion.p>
          <motion.h2
            {...fadeUp(0.08)}
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.1] tracking-wide"
          >
            <span className="text-gray-500 line-through decoration-red-600/60 decoration-4">
              Why Courses Fail.
            </span>
            <br className="hidden md:block" />
            <span className="text-red-500"> Why Zharnyx Exists.</span>
          </motion.h2>
        </div>

        {/* Comparison grid */}
        <motion.div {...fadeUp(0.14)} className="grid md:grid-cols-2 gap-8">
          {/* Traditional column */}
          <div className="flex flex-col gap-4">
            <div className="pb-4 border-b border-white/5 text-center">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-[0.2em]">
                Traditional Courses
              </p>
            </div>
            {traditional.map((text) => (
              <CompareItem key={text} isPositive={false} text={text} />
            ))}
          </div>

          {/* Zharnyx column */}
          <div className="flex flex-col gap-4 relative">
            <div className="absolute inset-0 bg-red-600/5 blur-[80px] pointer-events-none rounded-full" />
            <div className="pb-4 border-b border-red-500/30 text-center relative z-10">
              <p className="text-xs font-bold text-red-500 uppercase tracking-[0.2em] drop-shadow-[0_0_8px_rgba(239,68,68,0.4)]">
                Zharnyx Residency
              </p>
            </div>
            {zharnyx.map((text) => (
              <CompareItem key={text} isPositive text={text} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CompareItem({
  isPositive,
  text,
}: {
  isPositive: boolean;
  text: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-4 p-4 rounded-xl border backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 group relative overflow-hidden",
        isPositive
          ? "border-red-500/25 bg-linear-to-r from-red-600/8 to-transparent hover:border-red-500/50"
          : "border-white/5 bg-white/2 hover:bg-white/4",
      )}
    >
      <div
        className={cn(
          "shrink-0 p-1.5 rounded-full flex items-center justify-center",
          isPositive
            ? "bg-red-500/15 text-red-500"
            : "bg-white/5 text-gray-500",
        )}
      >
        {isPositive ? (
          <Check size={14} strokeWidth={3} />
        ) : (
          <X size={14} strokeWidth={3} />
        )}
      </div>
      <span
        className={cn(
          "text-sm tracking-wide",
          isPositive ? "text-gray-200 font-semibold" : "text-gray-400",
        )}
      >
        {text}
      </span>
    </div>
  );
}
