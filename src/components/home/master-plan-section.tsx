"use client";

import { motion } from "motion/react";
import { CheckCircle, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const phases = [
  {
    phase: "Phase 1",
    label: "Foundation",
    period: "Months 1–3 • Weeks 1–12",
    color: "red",
    milestones: [
      "Systems & OS",
      "Networking & TCP/IP",
      "Security Frameworks & Python",
      "Foundation Capstone",
    ],
  },
  {
    phase: "Phase 2",
    label: "Specialization",
    period: "Months 4–6 • Weeks 13–24",
    color: "orange",
    milestones: [
      "SOC / VAPT / Cloud / DFIR",
      "Track-specific deep dive",
      "Advanced tools & labs",
      "Specialization Capstone",
    ],
  },
  {
    phase: "Phase 3",
    label: "Career Launch",
    period: "Month 7 • Weeks 25–28",
    color: "red",
    milestones: [
      "72-hr Live-Fire Capstone",
      "Resume & LinkedIn Optimization",
      "Mock Interviews & Demo Day",
      "Placement Support",
    ],
  },
];

const colorMap: Record<string, { text: string; check: string }> = {
  red: {
    text: "text-red-600",
    check: "text-red-600",
  },
  orange: {
    text: "text-orange-500",
    check: "text-orange-500",
  },
};

export function MasterPlanSection() {
  return (
    <section id="master-plan" className="py-24 bg-black border-t border-white/10">
      <div className="container mx-auto px-6 lg:px-8 max-w-[1440px]">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-red-500 text-sm font-semibold uppercase tracking-widest mb-3"
          >
            Program Structure
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white"
          >
            7 Months •{" "}
            <span className="text-red-500">28 Weeks</span>
          </motion.h2>
        </div>

        {/* Phase Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {phases.map((phase, i) => {
            const theme = colorMap[phase.color];
            return (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.1 }}
                className="p-8 md:p-10 border border-white/10 rounded-2xl bg-[#0a0a0a] hover:bg-[#111] transition-colors"
              >
                <div className="flex flex-col mb-8">
                  <span className={cn("text-base font-mono mb-3", theme.text)}>
                    {phase.phase}
                  </span>
                  <h3 className="text-3xl md:text-3xl font-bold text-white mb-3 tracking-wide">
                    {phase.label}
                  </h3>
                  <p className="text-[#a1a1aa] text-base">{phase.period}</p>
                </div>
                <ul className="flex flex-col gap-5">
                  {phase.milestones.map((m) => (
                    <li key={m} className="flex items-center gap-4 text-[17px] text-[#a1a1aa] tracking-wide">
                      <CheckCircle size={22} strokeWidth={1.5} className={cn("shrink-0", theme.check)} />
                      {m}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* View Curriculum Link */}
        <div className="text-center">
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            href="/curriculum"
            className="inline-flex items-center gap-2 text-white font-semibold hover:text-red-400 transition-colors group border border-white/20 px-6 py-3 rounded-md hover:border-red-500/40"
          >
            View Full Curriculum{" "}
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
