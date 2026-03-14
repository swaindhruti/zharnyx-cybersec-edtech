"use client";

import { motion } from "motion/react";
import { Shield, Swords, Gavel, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.55, ease: "easeOut" as const, delay },
});

const phases = [
  {
    phase: "Phase 1",
    title: "Foundation",
    period: "Month 1–2",
    description:
      "Core security fundamentals, lab setup, Linux & network mastery.",
    icon: Shield,
    accent: "text-white border-white/15 bg-white/8",
    glow: "group-hover:border-white/30",
  },
  {
    phase: "Phase 2",
    title: "Red vs Blue Combat",
    period: "Month 3–4",
    description:
      "Offensive & defensive operations, live fire war games, team rotations.",
    icon: Swords,
    accent: "text-red-400 border-red-500/20 bg-red-500/8",
    glow: "group-hover:border-red-500/40",
  },
  {
    phase: "Phase 3",
    title: "Tribunal & Red Zone",
    period: "Month 5",
    description:
      "Performance evaluation, remediation, and final gatekeeping exam.",
    icon: Gavel,
    accent: "text-red-600 border-red-700/20 bg-red-700/8",
    glow: "group-hover:border-red-700/40",
  },
  {
    phase: "Phase 4",
    title: "Deployment",
    period: "Month 6",
    description: "3-tier placement, real-world exposure, and career launch.",
    icon: Rocket,
    accent: "text-white border-white/15 bg-white/8",
    glow: "group-hover:border-white/30",
  },
];

export function MasterPlanSection() {
  return (
    <section className="relative w-full py-24 bg-black border-t border-white/5 overflow-hidden font-sans">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-20 flex flex-col items-center text-center">
          <motion.p
            {...fadeUp(0)}
            className="text-red-500 text-xs font-semibold uppercase tracking-[0.25em] mb-4"
          >
            Strategic Framework
          </motion.p>
          <motion.h2
            {...fadeUp(0.08)}
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.1] tracking-wide mb-5"
          >
            The Zharnyx <span className="text-red-500">Master Plan</span>
          </motion.h2>
          <motion.p
            {...fadeUp(0.14)}
            className="text-gray-500 text-base sm:text-lg leading-relaxed tracking-wide max-w-xl"
          >
            Every phase has a filter. No one passes by luck.
          </motion.p>
        </div>

        {/* Phase cards — 2×2 grid on large screens */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {phases.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.phase}
                {...fadeUp(0.06 + i * 0.1)}
                className={cn(
                  "group flex flex-col gap-5 p-7 rounded-2xl border border-white/5 bg-linear-to-b from-white/5 to-transparent backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl",
                  p.glow,
                )}
              >
                {/* Top: icon + phase label */}
                <div className="flex items-center justify-between">
                  <div className={cn("p-2.5 rounded-xl border", p.accent)}>
                    <Icon size={18} strokeWidth={1.8} />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-500 border border-white/5 rounded-full px-2.5 py-1">
                    {p.period}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2">
                  <p className="text-[10px] font-semibold text-gray-600 uppercase tracking-[0.2em]">
                    {p.phase}
                  </p>
                  <h3 className="text-white font-bold text-lg tracking-wide leading-tight">
                    {p.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed tracking-wide">
                    {p.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer badge */}
        <motion.div {...fadeUp(0.5)} className="flex justify-center mt-16">
          <div className="flex items-center gap-3 px-6 py-3 rounded-full border border-white/5 bg-white/2 backdrop-blur-md">
            <div className="flex gap-1.5">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse delay-75" />
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse delay-150" />
            </div>
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-[0.15em]">
              War Rooms · Tribunal Gatekeeping · 3-Tier Deployment
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
