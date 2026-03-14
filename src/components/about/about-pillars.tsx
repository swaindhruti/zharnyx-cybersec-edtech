"use client";

import { motion, Variants } from "motion/react";
import {
  Laptop,
  MapPin,
  Users,
  Banknote,
  GraduationCap,
  Award,
} from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 50, damping: 15 },
  },
};

const pillars = [
  {
    icon: Laptop,
    title: "Real Lab-First Learning",
    description:
      "Every week has a hands-on lab deliverable. Students build, not just read.",
  },
  {
    icon: MapPin,
    title: "Tamil Nadu Focused Placements",
    description:
      "Targeted at Coimbatore, Chennai & TN-based companies and GCCs.",
  },
  {
    icon: Users,
    title: "Buddy System Learning",
    description:
      "Paired with a peer for accountability, collaboration, and support.",
  },
  {
    icon: Banknote,
    title: "Affordable by Design",
    description: "Student discount on Foundation. EMI available on request.",
  },
  {
    icon: GraduationCap,
    title: "Structured End-to-End Journey",
    description: "28-week curriculum — Foundation → Track → Career Launch.",
  },
  {
    icon: Award,
    title: "4 Specialized Tracks",
    description: "SOC, VAPT, Cloud Security, DFIR — choose your career path.",
  },
];

export function AboutPillars() {
  return (
    <section
      id="core-pillars"
      className="relative w-full flex flex-col items-center py-24 bg-black overflow-hidden font-sans border-t border-white/5"
    >
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
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            className="text-red-500 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] mb-4"
          >
            CORE PILLARS
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-[1.15] tracking-wide"
          >
            What Makes Us <span className="text-red-500">Different</span>
          </motion.h2>
        </div>

        {/* 6-card grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                className="group relative flex flex-col gap-5 p-8 rounded-2xl bg-linear-to-b from-white/5 to-transparent border border-white/5 backdrop-blur-md overflow-hidden transition-all duration-500 hover:border-red-500/25 hover:shadow-xl"
              >
                <div className="absolute -inset-4 blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 bg-red-500/5 -z-10" />
                <div className="p-3 w-fit rounded-full bg-red-500/10 text-red-500">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-base sm:text-lg tracking-wide mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed tracking-wide">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
