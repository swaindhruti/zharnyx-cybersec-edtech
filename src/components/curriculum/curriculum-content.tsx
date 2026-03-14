"use client";

import { useState } from "react";
import { motion, Variants } from "motion/react";
import { Wrench } from "lucide-react";
import { cn } from "@/lib/utils";

const CATEGORIES = [
  "All",
  "Foundation",
  "SOC",
  "VAPT",
  "Cloud",
  "DFIR",
  "Career",
];

const categoryColors: Record<string, string> = {
  Foundation: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  SOC: "text-purple-400 bg-purple-500/10 border-purple-500/20",
  VAPT: "text-red-400 bg-red-500/10 border-red-500/20",
  Cloud: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
  DFIR: "text-orange-400 bg-orange-500/10 border-orange-500/20",
  Career: "text-green-400 bg-green-500/10 border-green-500/20",
};

const curriculumData = [
  // Foundation
  {
    week: 1,
    category: "Foundation",
    title: "Linux Fundamentals & CLI Mastery",
    tools: "Ubuntu, VirtualBox",
  },
  {
    week: 2,
    category: "Foundation",
    title: "Windows Administration & AD Basics",
    tools: "Windows Server, PowerShell",
  },
  {
    week: 3,
    category: "Foundation",
    title: "Virtualization & Lab Environment",
    tools: "VirtualBox, VMware",
  },
  {
    week: 4,
    category: "Foundation",
    title: "OS Hardening & Security Baselines",
    tools: "PFSense, iptables",
  },
  {
    week: 5,
    category: "Foundation",
    title: "Networking Fundamentals & OSI Model",
    tools: "Packet Tracer",
  },
  {
    week: 6,
    category: "Foundation",
    title: "Wireshark & Packet Capture Analysis",
    tools: "Wireshark, tcpdump",
  },
  {
    week: 7,
    category: "Foundation",
    title: "Python for Cybersecurity (Scripting)",
    tools: "Python, VS Code",
  },
  {
    week: 8,
    category: "Foundation",
    title: "Cryptography & PKI Basics",
    tools: "OpenSSL, GPG",
  },
  {
    week: 9,
    category: "Foundation",
    title: "Web Technologies & REST APIs",
    tools: "Burp proxy, Postman",
  },
  {
    week: 10,
    category: "Foundation",
    title: "Database Concepts & Basic SQL",
    tools: "MySQL, SQLite",
  },
  {
    week: 11,
    category: "Foundation",
    title: "Cloud Fundamentals (AWS/Azure)",
    tools: "AWS Console, Azure Portal",
  },
  {
    week: 12,
    category: "Foundation",
    title: "Foundation Capstone Project",
    tools: "Integrated Labs",
  },
  // SOC
  {
    week: 13,
    category: "SOC",
    title: "Splunk & Microsoft Sentinel",
    tools: "Splunk, Sentinel, SPL, KQL",
  },
  {
    week: 14,
    category: "SOC",
    title: "Dashboard Design & Alert Triage",
    tools: "Splunk Dashboards",
  },
  {
    week: 15,
    category: "SOC",
    title: "Alert Triage — 50 Alerts Exercise",
    tools: "SIEM platforms",
  },
  {
    week: 16,
    category: "SOC",
    title: "SLA Tracking & SOC Metrics",
    tools: "SIEM, ticketing",
  },
  {
    week: 17,
    category: "SOC",
    title: "MITRE ATT&CK & Sigma Rules",
    tools: "MITRE Navigator, Sigma",
  },
  {
    week: 18,
    category: "SOC",
    title: "Zeek, Suricata & NSM",
    tools: "Zeek, Suricata",
  },
  // VAPT
  {
    week: 19,
    category: "VAPT",
    title: "OSINT & Reconnaissance",
    tools: "Maltego, Shodan, Nmap",
  },
  {
    week: 20,
    category: "VAPT",
    title: "Active Scanning & Enumeration",
    tools: "Nessus, OpenVAS",
  },
  {
    week: 21,
    category: "VAPT",
    title: "Web Application Pentesting",
    tools: "Burp Suite Pro, OWASP ZAP",
  },
  {
    week: 22,
    category: "VAPT",
    title: "Network Exploitation",
    tools: "Metasploit, CrackMapExec",
  },
  // Cloud
  {
    week: 23,
    category: "Cloud",
    title: "AWS Security & IAM Policies",
    tools: "AWS CLI, CloudTrail",
  },
  {
    week: 24,
    category: "Cloud",
    title: "Azure Security Center & Misconfigs",
    tools: "Azure AD, Defender",
  },
  // DFIR
  {
    week: 25,
    category: "DFIR",
    title: "Memory Forensics & Malware Triage",
    tools: "Volatility, FTK Imager",
  },
  {
    week: 26,
    category: "DFIR",
    title: "Incident Response Playbooks",
    tools: "TheHive, Cortex XSOAR",
  },
  // Career
  {
    week: 27,
    category: "Career",
    title: "Resume Building & ATS Optimization",
    tools: "LinkedIn, GitHub",
  },
  {
    week: 28,
    category: "Career",
    title: "Demo Day & Placement Support",
    tools: "Mock Interviews, Portfolios",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2, ease: "easeOut" } },
};

export function CurriculumContent() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredData = curriculumData.filter(
    (item) => activeTab === "All" || item.category === activeTab,
  );

  return (
    <section className="relative w-full bg-black font-sans py-20 px-4 min-h-[600px] border-t border-white/5">
      <div className="container mx-auto max-w-7xl">
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={cn(
                "px-5 py-2 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] border transition-all duration-300",
                activeTab === cat
                  ? "bg-red-600 border-red-500 text-white shadow-[0_0_20px_rgba(239,68,68,0.4)]"
                  : "bg-white/5 border-white/10 text-gray-400 hover:text-white hover:border-white/20 hover:bg-white/10 backdrop-blur-sm",
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Curriculum Grid — keyed on activeTab so it re-mounts and fades in cleanly */}
        <motion.div
          key={activeTab}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {filteredData.map((item) => {
            const colorClass =
              categoryColors[item.category] ??
              "text-gray-400 bg-white/5 border-white/10";
            return (
              <motion.div
                key={item.week}
                whileHover={{ y: -4 }}
                className="group flex flex-col gap-4 p-6 rounded-2xl bg-linear-to-b from-white/5 to-transparent border border-white/5 backdrop-blur-md transition-all duration-300 hover:border-white/10 hover:shadow-lg"
              >
                {/* Top row */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-red-500 uppercase tracking-[0.2em]">
                    Week {item.week}
                  </span>
                  <span
                    className={cn(
                      "text-xs font-bold uppercase tracking-[0.15em] px-2.5 py-1 rounded-full border",
                      colorClass,
                    )}
                  >
                    {item.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-white text-sm sm:text-base font-bold leading-snug tracking-wide grow">
                  {item.title}
                </h3>

                {/* Tools */}
                <div className="flex items-start gap-2 pt-2 border-t border-white/5">
                  <Wrench size={13} className="text-gray-600 mt-0.5 shrink-0" />
                  <p className="text-gray-500 text-xs leading-relaxed tracking-wide">
                    {item.tools}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {filteredData.length === 0 && (
          <div className="text-center text-gray-600 mt-20 text-base tracking-wide">
            No curriculum items found for this track.
          </div>
        )}
      </div>
    </section>
  );
}
