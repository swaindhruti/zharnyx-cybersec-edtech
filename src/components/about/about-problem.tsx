"use client";

import { motion, Variants } from "motion/react";
import { AlertTriangle } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 50, damping: 15 },
  },
};

const problems = [
  {
    num: "01",
    text: "Graduates have zero SIEM experience — never used Splunk or Sentinel",
  },
  {
    num: "02",
    text: "No penetration testing skills — can't run Nmap or use Metasploit",
  },
  { num: "03", text: "Digital forensics is completely absent from curricula" },
  { num: "04", text: "Cloud security (AWS/Azure) is never taught practically" },
  {
    num: "05",
    text: "Incident Response remains theory-only — no real playbooks or SOAR tools",
  },
];

export function AboutProblem() {
  return (
    <section
      id="journey"
      className="relative w-full flex flex-col items-center py-24 bg-black overflow-hidden font-sans border-t border-white/5"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <motion.p
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            className="text-red-500 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] mb-4"
          >
            WHY WE EXIST
          </motion.p>
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { type: "spring", stiffness: 50, damping: 15 },
              },
            }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-[1.15] tracking-wide"
          >
            The Problem <span className="text-red-500">We Solve</span>
          </motion.h2>
        </div>

        {/* Numbered problem list */}
        <motion.div
          variants={containerVariants}
          className="flex flex-col gap-4 mb-16"
        >
          {problems.map((problem) => (
            <motion.div
              key={problem.num}
              variants={itemVariants}
              whileHover={{ x: 6 }}
              className="group flex items-center gap-6 p-6 sm:p-8 rounded-2xl bg-linear-to-b from-white/5 to-transparent border border-white/5 backdrop-blur-md transition-all duration-300 hover:border-red-500/20 hover:bg-red-500/5"
            >
              <div className="shrink-0 w-10 h-10 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                <span className="text-red-500 text-xs font-extrabold tracking-wider">
                  {problem.num}
                </span>
              </div>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed tracking-wide group-hover:text-white transition-colors">
                {problem.text}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Quote */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { type: "spring", stiffness: 50, damping: 15 },
            },
          }}
          className="flex items-start gap-4 p-8 rounded-2xl bg-linear-to-r from-red-600/10 to-transparent border-l-2 border-red-500 backdrop-blur-md"
        >
          <AlertTriangle size={20} className="text-red-500 shrink-0 mt-1" />
          <p className="text-gray-300 text-base sm:text-lg italic leading-relaxed tracking-wide">
            &ldquo;A certificate tells an employer you studied. A portfolio
            tells them you can do the job.&rdquo;
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
