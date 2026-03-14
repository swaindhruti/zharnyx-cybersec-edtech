"use client";

import { motion, Variants, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 50, damping: 15 },
  },
};

const faqs = [
  {
    question: "Is pricing final?",
    answer:
      "Prices are subject to revision. Current pricing is valid for the next cohort. GST (18%) is included in all total figures.",
  },
  {
    question: "Are there EMI options?",
    answer:
      "EMI is available on request with proper approval. Contact our team for details.",
  },
  {
    question: "Can I get a refund?",
    answer:
      "Please refer to our Terms & Conditions page for our cancellation and refund policy.",
  },
  {
    question: "Is there institutional pricing?",
    answer:
      "Yes, we offer special batch pricing for colleges and institutions. Contact us for details.",
  },
  {
    question: "What does the student discount cover?",
    answer:
      "Valid college students get 50% off the Foundation Phase (₹9,899 → ₹4,949). Student ID verification required.",
  },
];

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn(
        "rounded-2xl border backdrop-blur-md transition-all duration-300 overflow-hidden",
        open
          ? "border-red-500/30 bg-linear-to-b from-red-500/5 to-transparent"
          : "border-white/5 bg-white/2 hover:border-white/10",
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
          {question}
        </span>
        <ChevronDown
          size={20}
          className={cn(
            "shrink-0 ml-4 transition-transform duration-300",
            open ? "rotate-180 text-red-500" : "text-gray-500",
          )}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed px-6 pb-6 tracking-wide">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function PricingFaq() {
  return (
    <section className="relative w-full flex flex-col items-center py-24 bg-black overflow-hidden font-sans border-t border-white/5">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
      >
        <motion.p
          variants={itemVariants}
          className="text-red-500 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] mb-4"
        >
          PRICING FAQ
        </motion.p>
        <motion.h2
          variants={itemVariants}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-[1.15] tracking-wide mb-12 text-center"
        >
          Pricing <span className="text-red-500">Questions</span>
        </motion.h2>

        <motion.div
          variants={itemVariants}
          className="w-full flex flex-col gap-4"
        >
          {faqs.map((faq) => (
            <FaqItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
