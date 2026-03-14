"use client";

import { motion, Variants } from "motion/react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Delay between each child animation
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 15,
      duration: 0.8,
    },
  },
};

export function WhyZharnyxSection() {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center py-24 bg-black overflow-hidden font-sans">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 w-full max-w-screen mx-auto px-4 sm:px-6 lg:px-16 flex flex-col items-center text-center"
      >
        {/* Top Badge */}
        <motion.p
          variants={itemVariants}
          className="text-red-500 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] mb-6"
        >
          THE PROBLEM
        </motion.p>

        {/* Headline */}
        <motion.h2
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.15] tracking-wide mb-8 max-w-screen"
        >
          Colleges Teach the Syllabus. <br className="hidden md:block" />
          <span className="text-red-500">We Teach the Skill.</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          variants={itemVariants}
          className="text-gray-400 text-base sm:text-lg md:text-xl max-w-7xl mb-12 leading-relaxed tracking-wide px-4"
        >
          95% of cybersecurity graduates can&apos;t handle a real SOC alert,
          write a pentest report, or analyze a memory dump. The industry needs
          Day-1 deployable talent — not certificate holders.
        </motion.p>

        {/* Quote Block */}
        <motion.div
          variants={itemVariants}
          className="relative border-l-2 sm:border-l-4 border-red-500 px-6 sm:px-10 py-6 sm:py-8 text-left max-w-7xl mx-auto bg-white/5 backdrop-blur-sm rounded-r-2xl shadow-xl"
        >
          <p className="text-gray-400 italic text-base sm:text-xl leading-relaxed tracking-wide">
            &quot;A certificate tells an employer you studied.{" "}
            {/* <br className="hidden sm:block" /> */}
            <span className="text-white font-semibold">
              A portfolio tells them you can do the job.
            </span>
            &quot;
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10 w-full max-w-6xl pt-16 mt-16"
        >
          {[
            { value: "7", label: "Months", suffix: "" },
            { value: "4", label: "Tracks", suffix: "" },
            { value: "28", label: "Weeks", suffix: "" },
            { value: "100", label: "Hands-On", suffix: "%" },
          ].map((stat) => (
            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              key={stat.label}
              className="flex flex-col items-center justify-center relative p-8 rounded-2xl bg-linear-to-b from-white/5 to-transparent border border-white/5 backdrop-blur-md overflow-hidden group"
            >
              {/* Subtle animated glowing dot effect on hover */}
              <div className="absolute -inset-1 rounded-2xl bg-red-500/0 group-hover:bg-red-500/10 blur-xl transition-all duration-500"></div>

              <span className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-linear-to-b from-white to-gray-500 tracking-tight mb-2 relative z-10 flex items-baseline">
                {stat.value}
                {stat.suffix && (
                  <span className="text-2xl text-red-500 ml-1">
                    {stat.suffix}
                  </span>
                )}
              </span>
              <span className="text-xs sm:text-sm font-semibold text-gray-400 tracking-[0.2em] uppercase text-center relative z-10">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
