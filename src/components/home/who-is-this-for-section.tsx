"use client";

import { motion } from "motion/react";
import { GraduationCap, Briefcase, Users } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.55, ease: "easeOut" as const, delay },
});

const audiences = [
  {
    icon: GraduationCap,
    title: "College Students",
    description:
      "CS / IT / ECE / Cyber Security — Anna University affiliated. Build real skills before your first job.",
  },
  {
    icon: Briefcase,
    title: "IT Professionals",
    description:
      "Pivoting from IT support, dev, or networking to cybersecurity with structured, hands-on training.",
  },
  {
    icon: Users,
    title: "Career Returners",
    description:
      "Returning after a gap — a structured path to re-enter the industry with verified, modern skills.",
  },
];

export function WhoIsThisForSection() {
  return (
    <section className="relative w-full py-24 bg-black border-t border-white/5 overflow-hidden font-sans">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 flex flex-col items-center text-center">
          <motion.p
            {...fadeUp(0)}
            className="text-red-500 text-xs font-semibold uppercase tracking-[0.25em] mb-4"
          >
            For You
          </motion.p>
          <motion.h2
            {...fadeUp(0.08)}
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.1] tracking-wide"
          >
            Who Is This <span className="text-red-500">For?</span>
          </motion.h2>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-3 gap-6">
          {audiences.map((a, i) => {
            const Icon = a.icon;
            return (
              <motion.div
                key={a.title}
                {...fadeUp(0.06 + i * 0.1)}
                className="flex flex-col items-center text-center gap-5 p-8 rounded-2xl border border-white/5 bg-linear-to-b from-white/5 to-transparent backdrop-blur-md hover:border-white/10 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="p-4 rounded-2xl bg-red-500/8 border border-red-500/15 text-red-400">
                  <Icon size={24} strokeWidth={1.8} />
                </div>
                <h3 className="text-white font-bold text-lg tracking-wide">
                  {a.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed tracking-wide">
                  {a.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
