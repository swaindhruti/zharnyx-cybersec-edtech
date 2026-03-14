"use client";

import { motion, Variants } from "motion/react";
import { Zap } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 50, damping: 15 },
  },
};

const modules = [
  {
    title: "Foundation Phase",
    price: "₹9,899",
    studentPrice: "₹4,949",
    duration: "3 Months",
  },
  {
    title: "Specialization Track",
    price: "₹25,999",
    studentPrice: null,
    duration: "3 Months",
  },
  {
    title: "Career Launch",
    price: "₹8,999",
    studentPrice: null,
    duration: "1 Month",
  },
];

export function StandaloneModules() {
  return (
    <section className="relative w-full flex flex-col items-center py-24 bg-black overflow-hidden font-sans border-t border-white/5">
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
            variants={itemVariants}
            className="text-red-500 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] mb-4"
          >
            FLEXIBLE OPTIONS
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-[1.15] tracking-wide"
          >
            Standalone <span className="text-red-500">Modules</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-base max-w-xl leading-relaxed tracking-wide mt-4"
          >
            Can&apos;t commit to the full 7 months? Take individual phases at
            your own pace.
          </motion.p>
        </div>

        {/* Module rows */}
        <motion.div
          variants={containerVariants}
          className="flex flex-col gap-4 mb-8"
        >
          {modules.map((mod) => (
            <motion.div
              key={mod.title}
              variants={itemVariants}
              whileHover={{ y: -3 }}
              className="group flex flex-col sm:flex-row justify-between items-center gap-4 p-6 sm:p-8 rounded-2xl bg-linear-to-b from-white/5 to-transparent border border-white/5 backdrop-blur-md transition-all duration-300 hover:border-white/10"
            >
              <div>
                <h3 className="text-lg font-bold text-white tracking-wide">
                  {mod.title}
                </h3>
                <p className="text-gray-500 text-xs uppercase tracking-[0.15em] mt-1">
                  {mod.duration} · excl. GST
                </p>
              </div>
              <div className="flex flex-col items-center sm:items-end gap-1 shrink-0">
                <span className="text-2xl font-black text-transparent bg-clip-text bg-linear-to-b from-white to-gray-400 tracking-tight">
                  {mod.price}
                </span>
                {mod.studentPrice && (
                  <span className="text-xs font-semibold text-red-500 tracking-wide">
                    Student: {mod.studentPrice}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* AI Add-On Card */}
        <motion.div
          variants={itemVariants}
          whileHover={{ y: -4 }}
          className="group relative flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-2xl bg-linear-to-b from-red-600/10 to-transparent border border-red-500/20 backdrop-blur-md overflow-hidden transition-all duration-500 hover:border-red-500/40"
        >
          <div className="absolute -inset-4 blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 bg-red-500/10 -z-10" />

          <div className="text-center sm:text-left">
            <div className="flex items-center gap-3 justify-center sm:justify-start mb-2">
              <h3 className="text-lg font-bold text-white tracking-wide">
                AI for Cybersecurity
              </h3>
              <span className="text-red-500 text-xs font-bold px-2.5 py-1 bg-red-500/10 rounded-full border border-red-500/20 uppercase tracking-[0.15em]">
                ADD-ON
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md tracking-wide">
              Standalone module covering AI/ML in cybersecurity. Available to
              all students.
            </p>
          </div>

          <div className="flex flex-col items-center sm:items-end gap-2 shrink-0">
            <div className="flex items-center gap-2 text-gray-400">
              <Zap size={14} className="text-red-500" />
              <span className="text-sm font-semibold text-white tracking-wide">
                Pricing on request
              </span>
            </div>
            <a
              href="/contact"
              className="text-xs font-semibold text-red-500 hover:text-red-400 tracking-widest uppercase transition-colors"
            >
              Enquire →
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
