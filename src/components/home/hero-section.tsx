"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BackgroundBeams } from "@/components/ui/background-beams";

export function HeroSection() {
  return (
    <div className="relative min-h-screen  flex flex-col justify-center overflow-hidden bg-black pt-20 pb-16">
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-16 flex flex-col items-center justify-center text-center flex-1 h-full min-h-[calc(100vh-8.5rem)]">
        {/* Top Badge */}
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
          Tamil Nadu&apos;s Own Cybersecurity Academy
        </motion.p>

        {/* Hero Headline */}
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
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.15] tracking-wide mb-6 "
        >
          India&apos;s First Track-Specialised,
          <br className="hidden md:block" />{" "}
          <span className="text-red-500 bg-clip-text">Deployment-Ready</span>{" "}
          <br className="hidden md:block" />
          Cyber Academy
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
          className="text-gray-400 text-sm sm:text-base md:text-lg max-w-3xl mb-10 leading-relaxed tracking-wide px-2"
        >
          Choose your path. Master real tools. Get hired. 7 months from zero to
          cybersecurity career — in Coimbatore, Chennai, or Remote.
        </motion.p>

        {/* CTA Buttons */}
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
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-20 w-full max-w-md sm:max-w-none"
        >
          <Link
            href="/programs"
            className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-red-600 text-white font-bold tracking-wide text-sm rounded-full overflow-hidden transition-all hover:bg-red-700 shadow-[0_0_15px_rgba(239,68,68,0.3)] hover:shadow-[0_0_25px_rgba(239,68,68,0.5)] w-full sm:w-auto relative"
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore Programs{" "}
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </span>
            <div className="absolute inset-0 bg-linear-to-r from-red-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
          <Link
            href="/curriculum"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-transparent text-gray-300 font-semibold tracking-wide text-sm border border-gray-600 rounded-full hover:bg-white/5 hover:text-white hover:border-gray-400 transition-all w-full sm:w-auto backdrop-blur-sm"
          >
            View Curriculum
          </Link>
        </motion.div>

        {/* Stats Row */}
      </div>
      <BackgroundBeams />
    </div>
  );
}
