"use client";

import { motion, Variants } from "motion/react";
import { BookOpen, Shield, Briefcase, Check, ArrowRight } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 50, damping: 15 },
  },
};

const phases = [
  {
    icon: <BookOpen className="w-7 h-7" />,
    phase: "Phase 1",
    duration: "3 Months",
    weeks: "Weeks 1-12",
    title: "Foundation",
    description:
      "All students start here. Master systems, networking, security fundamentals, and Python scripting. Build your first lab environment.",
    features: [
      "Linux & Windows Administration",
      "TCP/IP Networking & Traffic Analysis",
      "Security Frameworks & Python",
      "Foundation Capstone Project",
    ],
  },
  {
    icon: <Shield className="w-7 h-7" />,
    phase: "Phase 2",
    duration: "3 Months",
    weeks: "Weeks 13-24",
    title: "Specialization",
    description:
      "Choose your track — SOC, VAPT, Cloud Security, or DFIR. Deep dive into real tools and industry scenarios.",
    features: [
      "Track-specific advanced training",
      "Industry-standard tool mastery",
      "Weekly lab deliverables",
      "Specialization Capstone",
    ],
  },
  {
    icon: <Briefcase className="w-7 h-7" />,
    phase: "Phase 3",
    duration: "1 Month",
    weeks: "Weeks 25-28",
    title: "Career Launch",
    description:
      "72-hour live-fire capstone, resume optimization, mock interviews, Demo Day with hiring partners, and placement support.",
    features: [
      "72-hr Cross-Track Capstone",
      "ATS Resume & LinkedIn Optimization",
      "3 Mock Interview Rounds",
      "Demo Day & Placement Support",
    ],
  },
];

export function ProgramsPhases() {
  return (
    <section className="relative w-full flex flex-col items-center py-24 bg-black overflow-hidden font-sans border-t border-white/5">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <motion.p
            variants={itemVariants}
            className="text-red-500 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] mb-4"
          >
            PROGRAM STRUCTURE
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-[1.15] tracking-wide"
          >
            3 Phases. <span className="text-red-500">One Residency.</span>
          </motion.h2>
        </div>

        {/* Phase Cards */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {phases.map((phase) => (
            <motion.div
              key={phase.title}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col p-8 rounded-2xl bg-linear-to-b from-white/5 to-transparent border border-white/5 backdrop-blur-md overflow-hidden transition-all duration-500 hover:border-red-500/30 hover:shadow-2xl"
            >
              {/* Hover glow */}
              <div className="absolute -inset-4 blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 bg-red-500/5 -z-10" />

              <div className="flex items-start justify-between mb-6">
                <div className="p-3 rounded-full bg-red-500/10 text-red-500">
                  {phase.icon}
                </div>
                <span className="text-xs font-semibold text-red-500 uppercase tracking-widest px-3 py-1 bg-red-500/10 rounded-full border border-red-500/20">
                  {phase.duration}
                </span>
              </div>

              <p className="text-xs font-semibold text-gray-500 uppercase tracking-[0.2em] mb-2">
                {phase.phase} · {phase.weeks}
              </p>
              <h3 className="text-2xl font-bold text-white tracking-wide mb-3">
                {phase.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8 grow">
                {phase.description}
              </p>

              <ul className="flex flex-col gap-3 mb-8">
                {phase.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <span className="shrink-0 p-1 rounded-full bg-red-500/10 text-red-500">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    <span className="text-gray-400 text-sm tracking-wide">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button className="group/btn inline-flex items-center gap-2 text-sm font-semibold text-gray-300 hover:text-white transition-colors mt-auto">
                Learn More
                <ArrowRight
                  size={16}
                  className="group-hover/btn:translate-x-1 transition-transform"
                />
              </button>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
