"use client";

import { motion } from "motion/react";
import {
  Terminal,
  MapPin,
  Users,
  Zap,
  LayoutList,
  BarChart3,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: <Terminal size={22} />,
    title: "Real Lab-First Learning",
    description: "Every week has a hands-on lab deliverable — not just lectures.",
  },
  {
    icon: <MapPin size={22} />,
    title: "Tamil Nadu Focused",
    description:
      "Placements targeted at Coimbatore, Chennai & TN-based companies.",
  },
  {
    icon: <Users size={22} />,
    title: "Buddy System",
    description:
      "Paired learning with a peer for accountability and collaboration.",
  },
  {
    icon: <Zap size={22} />,
    title: "Affordable by Design",
    description:
      "Competitive pricing with 50% Foundation discount for students.",
  },
  {
    icon: <LayoutList size={22} />,
    title: "Structured Journey",
    description: "28-week curriculum — Foundation → Track → Career Launch.",
  },
  {
    icon: <BarChart3 size={22} />,
    title: "4 Specialized Tracks",
    description:
      "SOC, VAPT, Cloud Security, DFIR — choose your career path.",
  },
];

export function ArchitectureSection() {
  return (
    <section id="why-us" className="py-24 bg-black border-t border-white/10">
      <div className="container mx-auto px-6 lg:px-8 max-w-[1440px]">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-red-500 text-sm font-semibold uppercase tracking-widest mb-3"
          >
            Why Zharnyx
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white"
          >
            What Makes Us <span className="text-red-500">Different</span>
          </motion.h2>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 + i * 0.07 }}
              className="flex flex-col gap-3 p-6 border border-white/10 rounded-xl bg-white/3 hover:bg-white/5 transition-colors group"
            >
              <div className="text-red-400 group-hover:text-red-300 transition-colors">
                {feat.icon}
              </div>
              <h3 className="text-white font-semibold text-lg">{feat.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feat.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Learn More CTA */}
        <div className="text-center">
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            href="/about"
            className="inline-flex items-center gap-2 text-white font-semibold hover:text-red-400 transition-colors group"
          >
            Learn More About Us{" "}
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
