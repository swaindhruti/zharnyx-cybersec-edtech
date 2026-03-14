"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.55, ease: "easeOut" as const, delay },
});

const faqs = [
  {
    q: "Who can enroll?",
    a: "Anyone with a passion for cybersecurity — college students, IT professionals, fresh graduates, or career returners. No prior security experience needed for the Foundation phase.",
  },
  {
    q: "Do I need a laptop?",
    a: "Yes, a basic laptop with at least 8GB RAM is recommended. We provide guided setup for all required tools and labs.",
  },
  {
    q: "Is it live or recorded?",
    a: "Classes are primarily live sessions with recordings available for review. All labs are done hands-on in real time.",
  },
  {
    q: "Can I take only the Foundation?",
    a: "Yes. The Foundation phase is available separately and gives you a strong base in networking, OS, and security fundamentals.",
  },
  {
    q: "Do you guarantee placement?",
    a: "We provide active placement support, mock interviews, and connect you with hiring partners — but final selection depends on your performance.",
  },
  {
    q: "Where are classes held?",
    a: "We operate in Coimbatore, Chennai, and fully remote. You can choose the mode that suits you.",
  },
  {
    q: "What certifications align with the tracks?",
    a: "Our curriculum maps to CompTIA Security+, CEH, AWS Security Specialty, and Digital Forensics certifications depending on your chosen track.",
  },
];

function FaqItem({ q, a, delay }: { q: string; a: string; delay: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div {...fadeUp(delay)}>
      <div
        className={cn(
          "rounded-2xl border backdrop-blur-md transition-all duration-300 overflow-hidden",
          open
            ? "border-red-500/25 bg-linear-to-b from-red-500/5 to-transparent"
            : "border-white/5 bg-white/2 hover:border-white/8",
        )}
      >
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between p-6 text-left group"
        >
          <span
            className={cn(
              "font-semibold text-sm sm:text-base tracking-wide transition-colors",
              open ? "text-white" : "text-gray-300 group-hover:text-white",
            )}
          >
            {q}
          </span>
          <ChevronDown
            size={18}
            className={cn(
              "shrink-0 ml-4 transition-transform duration-300",
              open ? "rotate-180 text-red-500" : "text-gray-600",
            )}
          />
        </button>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed px-6 pb-6 tracking-wide">
                {a}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export function FaqSection() {
  return (
    <section className="relative w-full py-24 bg-black border-t border-white/5 overflow-hidden font-sans">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 flex flex-col items-center text-center">
          <motion.p
            {...fadeUp(0)}
            className="text-red-500 text-xs font-semibold uppercase tracking-[0.25em] mb-4"
          >
            FAQ
          </motion.p>
          <motion.h2
            {...fadeUp(0.08)}
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.1] tracking-wide mb-4"
          >
            Frequently Asked <span className="text-red-500">Questions</span>
          </motion.h2>
          <motion.p
            {...fadeUp(0.14)}
            className="text-gray-500 text-base sm:text-lg leading-relaxed tracking-wide max-w-xl"
          >
            Everything you need to know before you apply.
          </motion.p>
        </div>

        {/* Two-column FAQ grid on large screens */}
        <div className="grid lg:grid-cols-2 gap-4 mb-10">
          {faqs.map((faq, i) => (
            <FaqItem key={faq.q} q={faq.q} a={faq.a} delay={0.04 * i} />
          ))}
        </div>

        <motion.div {...fadeUp(0.4)} className="flex justify-center">
          <a
            href="/faq"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors text-sm font-semibold tracking-wide group"
          >
            View All FAQs
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
