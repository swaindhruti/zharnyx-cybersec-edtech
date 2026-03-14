"use client";

import { motion, Variants } from "motion/react";
import { ArrowRight, Clock, BookOpen } from "lucide-react";

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

const tagColors: Record<string, string> = {
  "Career Guide": "text-green-400 bg-green-500/10 border-green-500/20",
  Tutorial: "text-blue-400  bg-blue-500/10  border-blue-500/20",
  Industry: "text-purple-400 bg-purple-500/10 border-purple-500/20",
};

const subTagColor: Record<string, string> = {
  SOC: "text-purple-400",
  VAPT: "text-red-400",
  Cloud: "text-cyan-400",
  DFIR: "text-orange-400",
  Career: "text-green-400",
};

const posts = [
  {
    id: 1,
    tag: "Career Guide",
    subTag: "SOC",
    readTime: "7 min",
    title: "SOC Analyst Roadmap 2026 — Tamil Nadu Edition",
    description:
      "Everything you need to know about becoming a SOC Analyst in Chennai & Coimbatore. Career path, skills, salary, and hiring companies.",
  },
  {
    id: 2,
    tag: "Tutorial",
    subTag: "VAPT",
    readTime: "5 min",
    title: "OWASP Top 10 Explained for Beginners",
    description:
      "A beginner-friendly breakdown of the most critical web application security risks — with examples and mitigation strategies.",
  },
  {
    id: 3,
    tag: "Tutorial",
    subTag: "Cloud",
    readTime: "6 min",
    title: "AWS IAM Best Practices for Security Engineers",
    description:
      "How to implement least-privilege IAM policies in production AWS environments. Common misconfigurations and how to fix them.",
  },
  {
    id: 4,
    tag: "Career Guide",
    subTag: "DFIR",
    readTime: "8 min",
    title: "Introduction to Digital Forensics — Where to Start",
    description:
      "A complete beginner's guide to digital forensics: tools, methodology, and career opportunities in India.",
  },
  {
    id: 5,
    tag: "Tutorial",
    subTag: "SOC",
    readTime: "9 min",
    title: "MITRE ATT&CK Framework — A Practical Guide",
    description:
      "How to use MITRE ATT&CK for detection engineering, threat hunting, and security operations.",
  },
  {
    id: 6,
    tag: "Industry",
    subTag: "Career",
    readTime: "4 min",
    title: "Tamil Nadu Cybersecurity Job Market 2026",
    description:
      "An analysis of cybersecurity hiring trends in Coimbatore, Chennai, and across Tamil Nadu. Salary data, top employers, and in-demand skills.",
  },
];

export function BlogGrid() {
  return (
    <section className="relative w-full bg-black font-sans py-24 px-4 sm:px-6 border-t border-white/5">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="container mx-auto max-w-7xl"
      >
        {/* Section label */}
        <motion.p
          variants={itemVariants}
          className="text-red-500 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] mb-4 flex items-center gap-2"
        >
          <BookOpen size={13} />
          Latest Articles
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <motion.article
              key={post.id}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col gap-5 p-8 rounded-2xl bg-linear-to-b from-white/5 to-transparent border border-white/5 backdrop-blur-md overflow-hidden transition-all duration-500 hover:border-red-500/25 hover:shadow-2xl cursor-pointer"
            >
              {/* Hover glow */}
              <div className="absolute -inset-4 blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 bg-red-500/5 -z-10" />

              {/* Tag row */}
              <div className="flex items-center justify-between">
                <span
                  className={`text-xs font-bold uppercase tracking-[0.15em] px-2.5 py-1 rounded-full border ${tagColors[post.tag] ?? "text-gray-400 bg-white/5 border-white/10"}`}
                >
                  {post.tag}
                </span>
                <div className="flex items-center gap-1.5 text-gray-600">
                  <Clock size={11} />
                  <span className="text-xs tracking-wide">
                    {post.readTime} read
                  </span>
                </div>
              </div>

              {/* Track */}
              <p
                className={`text-xs font-bold uppercase tracking-[0.2em] ${subTagColor[post.subTag] ?? "text-gray-500"}`}
              >
                {post.subTag}
              </p>

              {/* Title */}
              <h2 className="text-white text-base sm:text-[17px] font-bold leading-snug tracking-wide group-hover:text-red-400 transition-colors duration-300 grow">
                {post.title}
              </h2>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed tracking-wide">
                {post.description}
              </p>

              {/* CTA */}
              <div className="flex items-center gap-2 text-red-500 text-sm font-semibold tracking-wide mt-auto pt-2 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Read Article
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
