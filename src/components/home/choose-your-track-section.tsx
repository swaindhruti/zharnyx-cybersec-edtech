"use client";

import { motion } from "motion/react";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const tracks = [
  {
    id: "soc",
    label: "SOC Analyst",
    salary: "₹8–14 LPA",
    hires: "TCS, Infosys, Chennai GCCs",
    color: "green",
    features: [
      "Splunk & Sentinel",
      "MITRE ATT&CK Framework",
      "Threat Hunting",
      "Incident Response",
    ],
  },
  {
    id: "vapt",
    label: "Offensive Security (VAPT)",
    salary: "₹9–16 LPA",
    hires: "Big 4, Startups",
    color: "red",
    features: [
      "Web Pentesting",
      "Network Pentesting",
      "Active Directory Attacks",
      "Bug Bounty Methodology",
    ],
  },
  {
    id: "cloud",
    label: "Cloud Security",
    salary: "₹11–20 LPA",
    hires: "MNCs, Cloud Providers",
    color: "blue",
    features: [
      "AWS / Azure Security",
      "Identity & IAM",
      "Container Security",
      "Cloud Governance",
    ],
  },
  {
    id: "dfir",
    label: "Digital Forensics & IR",
    salary: "₹7–15 LPA",
    hires: "Law Enforcement, Banks",
    color: "yellow",
    features: [
      "Memory Forensics",
      "Registry Analysis",
      "Malware Analysis",
      "Evidence Handling",
    ],
  },
];

const colorMap: Record<string, { accent: string; badge: string; check: string; border: string }> = {
  green: {
    accent: "text-green-400",
    badge: "bg-green-500/10 text-green-400 border-green-500/30",
    check: "text-green-400",
    border: "hover:border-green-500/50",
  },
  red: {
    accent: "text-red-400",
    badge: "bg-red-500/10 text-red-400 border-red-500/30",
    check: "text-red-400",
    border: "hover:border-red-500/50",
  },
  blue: {
    accent: "text-blue-400",
    badge: "bg-blue-500/10 text-blue-400 border-blue-500/30",
    check: "text-blue-400",
    border: "hover:border-blue-500/50",
  },
  yellow: {
    accent: "text-yellow-400",
    badge: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30",
    check: "text-yellow-400",
    border: "hover:border-yellow-500/50",
  },
};

export function ChooseYourTrackSection() {
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
            Choose Your Track
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white"
          >
            Find Your Cybersecurity{" "}
            <span className="text-red-500">Specialisation</span>
          </motion.h2>
        </div>

        {/* Track Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tracks.map((track, i) => {
            const theme = colorMap[track.color];
            return (
              <motion.div
                key={track.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.08 }}
                className={cn(
                  "flex flex-col gap-4 p-6 border border-white/10 rounded-xl bg-white/3 transition-all duration-200",
                  theme.border
                )}
              >
                {/* Salary Badge */}
                <div className="flex items-center justify-between">
                  <span
                    className={cn(
                      "text-xs font-semibold px-2.5 py-1 rounded-full border",
                      theme.badge
                    )}
                  >
                    {track.salary}
                  </span>
                </div>

                {/* Track Name */}
                <h3 className={cn("text-xl font-bold", theme.accent)}>
                  {track.label}
                </h3>

                {/* Features */}
                <ul className="space-y-2 flex-1">
                  {track.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-300">
                      <Check size={14} className={theme.check} />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Hires line */}
                <p className="text-xs text-gray-500 pt-2 border-t border-white/10">
                  Hires: {track.hires}
                </p>

                {/* CTA */}
                <a
                  href="/programs"
                  className={cn("flex items-center gap-1 text-sm font-semibold group", theme.accent)}
                >
                  Explore Track{" "}
                  <ArrowRight
                    size={15}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
