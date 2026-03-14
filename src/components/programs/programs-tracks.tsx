"use client";

import { motion, Variants } from "motion/react";
import { Monitor, Radio, Cloud, Search, Check, ArrowRight } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
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

const tracks = [
  {
    icon: Monitor,
    id: "soc",
    title: "Foundation + SOC + Placement",
    tag: "SOC",
    duration: "7 Months",
    weeks: "28 Weeks",
    features: ["SIEM Operations", "Threat Hunting", "Incident Response"],
  },
  {
    icon: Radio,
    id: "vapt",
    title: "Foundation + VAPT + Placement",
    tag: "VAPT",
    duration: "7 Months",
    weeks: "28 Weeks",
    features: ["Web App Pentesting", "Network Exploitation", "Mobile VAPT"],
  },
  {
    icon: Cloud,
    id: "cloud",
    title: "Foundation + Cloud + Placement",
    tag: "Cloud",
    duration: "7 Months",
    weeks: "28 Weeks",
    features: ["AWS/Azure Security", "Container Security", "DevSecOps"],
  },
  {
    icon: Search,
    id: "dfir",
    title: "Foundation + DFIR + Placement",
    tag: "DFIR",
    duration: "7 Months",
    weeks: "28 Weeks",
    features: ["Disk Forensics", "Memory Analysis", "Malware Investigation"],
  },
];

export function ProgramsTracks() {
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
            CHOOSE YOUR PATH
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-[1.15] tracking-wide mb-4"
          >
            4 Complete <span className="text-red-500">Packages</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-base sm:text-lg max-w-2xl leading-relaxed tracking-wide"
          >
            All packages include the Foundation phase, a specialization track,
            and full career placement support.
          </motion.p>
        </div>

        {/* Tracks Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {tracks.map((track) => {
            const Icon = track.icon;
            return (
              <motion.div
                key={track.id}
                id={track.id}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                className="group relative flex flex-col p-8 rounded-2xl bg-linear-to-b from-white/5 to-transparent border border-white/5 backdrop-blur-md overflow-hidden transition-all duration-500 hover:border-red-500/30 hover:shadow-2xl scroll-mt-24"
              >
                {/* Hover glow */}
                <div className="absolute -inset-4 blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 bg-red-500/5 -z-10" />

                <div className="flex items-center justify-between mb-8">
                  <div className="p-3 rounded-full bg-red-500/10 text-red-500">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-red-500 uppercase tracking-widest px-3 py-1 bg-red-500/10 rounded-full border border-red-500/20">
                    {track.tag}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white tracking-wide mb-2 leading-snug">
                  {track.title}
                </h3>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-[0.15em] mb-8">
                  {track.duration} · {track.weeks}
                </p>

                <ul className="flex flex-col gap-3 mb-8 grow">
                  {track.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <span className="shrink-0 p-1 rounded-full bg-red-500/10 text-red-500">
                        <Check size={11} strokeWidth={3} />
                      </span>
                      <span className="text-gray-400 text-sm tracking-wide">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/enroll"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-red-500 hover:text-red-400 transition-colors group/link mt-auto"
                >
                  Explore Track
                  <ArrowRight
                    size={15}
                    className="group-hover/link:translate-x-1 transition-transform"
                  />
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
