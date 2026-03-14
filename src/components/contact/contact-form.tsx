"use client";

import { motion, Variants } from "motion/react";
import { useState } from "react";
import {
  Send,
  MapPin,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Globe,
} from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 50, damping: 15 },
  },
};

function SocialIcon({
  icon: Icon,
  href,
}: {
  icon: React.ElementType;
  href: string;
}) {
  return (
    <a
      href={href}
      className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:border-red-500/40 hover:bg-red-500/10 transition-all duration-300"
    >
      <Icon className="w-4 h-4" />
    </a>
  );
}

const inputClass =
  "w-full px-4 py-3.5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm text-white placeholder:text-gray-600 text-sm tracking-wide focus:outline-none focus:border-red-500/50 focus:bg-red-500/5 transition-all duration-300";

export function ContactForm() {
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => setSending(false), 2000);
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center py-24 bg-black overflow-hidden font-sans px-4">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/8 blur-[140px] rounded-full" />
        <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-white/2 blur-[120px] rounded-full" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12"
      >
        {/* Left Panel */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-2 flex flex-col gap-10"
        >
          {/* Header */}
          <div>
            <motion.p
              variants={itemVariants}
              className="text-red-500 text-xs font-semibold uppercase tracking-[0.2em] mb-4 flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              Live Support
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl font-extrabold text-white leading-[1.15] tracking-wide mb-4"
            >
              Get In <span className="text-red-500">Touch.</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-gray-400 text-sm sm:text-base leading-relaxed tracking-wide border-l-2 border-red-500/50 pl-4"
            >
              Reach us for deployment inquiries, partnership proposals, or
              general questions. We respond within 24 hours.
            </motion.p>
          </div>

          {/* Contact details */}
          <motion.div variants={itemVariants} className="flex flex-col gap-6">
            <div className="flex items-start gap-4 group">
              <div className="p-2.5 rounded-xl border border-white/10 bg-white/5 text-red-500 group-hover:border-red-500/30 group-hover:bg-red-500/10 transition-all duration-300">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-[0.2em] mb-1">
                  Base of Operations
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Zharnyx HQ, Cyber City
                  <br />
                  Bengaluru, KA 560001
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="p-2.5 rounded-xl border border-white/10 bg-white/5 text-red-500 group-hover:border-red-500/30 group-hover:bg-red-500/10 transition-all duration-300">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-[0.2em] mb-1">
                  Direct Uplink
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  ops@zharnyx.com
                  <br />
                  support@zharnyx.com
                </p>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-[0.2em] mb-4">
              Follow Us
            </h4>
            <div className="flex gap-3">
              <SocialIcon icon={Github} href="#" />
              <SocialIcon icon={Linkedin} href="#" />
              <SocialIcon icon={Twitter} href="#" />
              <SocialIcon icon={Globe} href="#" />
            </div>
          </motion.div>
        </motion.div>

        {/* Right Panel - Form */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-3 relative p-8 sm:p-10 rounded-2xl bg-linear-to-b from-white/5 to-transparent border border-white/5 backdrop-blur-md"
        >
          {/* Subtle hover glow */}
          <div className="absolute -inset-4 blur-3xl bg-red-500/3 -z-10 rounded-3xl" />

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-[0.15em]">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className={inputClass}
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-[0.15em]">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className={inputClass}
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-gray-400 uppercase tracking-[0.15em]">
                Subject
              </label>
              <input
                type="text"
                placeholder="How can we help?"
                className={inputClass}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-gray-400 uppercase tracking-[0.15em]">
                Message
              </label>
              <textarea
                placeholder="Tell us more..."
                rows={6}
                className={`${inputClass} resize-none leading-relaxed`}
                required
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="group inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full bg-red-600 hover:bg-red-500 text-white font-semibold text-base tracking-wide transition-all duration-300 shadow-[0_0_30px_rgba(239,68,68,0.35)] hover:shadow-[0_0_45px_rgba(239,68,68,0.55)] disabled:opacity-60 disabled:cursor-not-allowed w-full"
            >
              {sending ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Sending...
                </span>
              ) : (
                <>
                  Send Message
                  <Send
                    size={17}
                    className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform"
                  />
                </>
              )}
            </button>

            <p className="text-center text-xs text-gray-600 tracking-wide">
              We typically respond within 24 hours. No spam, ever.
            </p>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}
