"use client";

import { motion } from "motion/react";
import { GraduationCap, Briefcase, Users } from "lucide-react";

const audiences = [
  {
    icon: <GraduationCap size={28} />,
    title: "College Students",
    description: "CS / IT / ECE / Cyber Security — Anna University affiliated.",
  },
  {
    icon: <Briefcase size={28} />,
    title: "IT Professionals",
    description:
      "Pivoting from IT support, dev, or networking to cybersecurity.",
  },
  {
    icon: <Users size={28} />,
    title: "Career Returners",
    description:
      "Returning after a gap — structured path to re-enter the industry.",
  },
];

export function WhoIsThisForSection() {
  return (
    <section className="py-24 bg-black border-t border-white/10">
      <div className="container mx-auto px-6 lg:px-8 max-w-[1440px]">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-red-500 text-sm font-semibold uppercase tracking-widest mb-3"
          >
            For You
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white"
          >
            Who Is This <span className="text-red-500">For?</span>
          </motion.h2>
        </div>

        {/* Audience Cards */}
        <div className="grid sm:grid-cols-3 gap-6">
          {audiences.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.1 }}
              className="flex flex-col items-center text-center gap-4 p-8 border border-white/10 rounded-xl bg-white/3 hover:bg-white/5 transition-colors"
            >
              <div className="p-4 rounded-full bg-red-500/10 text-red-400">
                {a.icon}
              </div>
              <h3 className="text-white font-semibold text-xl">{a.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{a.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
