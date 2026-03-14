"use client";

import { motion, Variants } from "motion/react";

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

const founders = [
  {
    initial: "S",
    name: "Sanjai R",
    role: "Founder & CEO",
    bio: "Visionary behind Zharnyx. Building Tamil Nadu's cybersecurity talent pipeline from the ground up.",
  },
  {
    initial: "H",
    name: "Harish",
    role: "Co-Founder — Curriculum",
    bio: "Designed the 28-week, 4-track curriculum with real-world tool integration and weekly deliverables.",
  },
  {
    initial: "A",
    name: "Antony",
    role: "Co-Founder — Placements",
    bio: "Connects students to hiring partners across Coimbatore, Chennai, and remote opportunities.",
  },
];

export function AboutFounders() {
  return (
    <section
      id="leadership"
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
            LEADERSHIP
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-[1.15] tracking-wide"
          >
            Meet the <span className="text-red-500">Founders</span>
          </motion.h2>
        </div>

        {/* 3-card grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {founders.map((founder) => (
            <motion.div
              key={founder.name}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col items-center text-center gap-5 p-10 rounded-2xl bg-linear-to-b from-white/5 to-transparent border border-white/5 backdrop-blur-md overflow-hidden transition-all duration-500 hover:border-red-500/25 hover:shadow-xl"
            >
              <div className="absolute -inset-4 blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 bg-red-500/5 -z-10" />

              {/* Avatar */}
              <div className="w-20 h-20 rounded-full border border-red-500/20 bg-red-500/10 flex items-center justify-center">
                <span className="text-red-500 text-2xl font-black">
                  {founder.initial}
                </span>
              </div>

              <div>
                <h3 className="text-white text-lg font-bold tracking-wide mb-1">
                  {founder.name}
                </h3>
                <p className="text-red-500 text-xs font-semibold uppercase tracking-[0.15em] mb-4">
                  {founder.role}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed tracking-wide">
                  {founder.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
