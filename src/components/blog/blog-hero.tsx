"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Search } from "lucide-react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { useState } from "react";
import { cn } from "@/lib/utils";

const filters = ["All", "SOC", "VAPT", "Cloud", "DFIR", "Career"];

export function BlogHero() {
  const [active, setActive] = useState("All");

  return (
    <div className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-black pt-20 pb-16">
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-16 flex flex-col items-center justify-center text-center flex-1 h-full min-h-[calc(100vh-8.5rem)]">
        {/* Top badge */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            type: "spring",
            stiffness: 50,
            damping: 15,
          }}
          className="text-red-500 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] mb-4 sm:mb-6"
        >
          Blog & Resources
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            type: "spring",
            stiffness: 50,
            damping: 15,
          }}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.15] tracking-wide mb-6"
        >
          Cybersecurity <span className="text-red-500">Insights</span>
          <br className="hidden md:block" />
          for Tamil Nadu
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.35,
            type: "spring",
            stiffness: 50,
            damping: 15,
          }}
          className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mb-10 leading-relaxed tracking-wide px-2"
        >
          Career guides, tool tutorials, and industry insights for Tamil
          Nadu&apos;s cybersecurity community.
        </motion.p>

        {/* Filter pills */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            type: "spring",
            stiffness: 50,
            damping: 15,
          }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActive(filter)}
              className={cn(
                "px-5 py-2 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] border transition-all duration-200",
                active === filter
                  ? "bg-red-600 border-red-500 text-white shadow-[0_0_20px_rgba(239,68,68,0.4)]"
                  : "bg-transparent text-gray-400 border-white/10 hover:bg-white/5 hover:text-white hover:border-white/20 backdrop-blur-sm",
              )}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Search bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.6,
            type: "spring",
            stiffness: 50,
            damping: 15,
          }}
          className="relative w-full max-w-md"
        >
          <Search
            size={16}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
          />
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full pl-11 pr-5 py-3.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-white placeholder:text-gray-600 text-sm tracking-wide focus:outline-none focus:border-red-500/50 transition-all duration-300"
          />
        </motion.div>
      </div>
      <BackgroundBeams />
    </div>
  );
}
