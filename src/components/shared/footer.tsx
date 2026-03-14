"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";

const programs = [
  { label: "All Programs", href: "/programs" },
  { label: "Foundation Phase", href: "/programs" },
  { label: "SOC Analyst", href: "/programs#soc" },
  { label: "VAPT", href: "/programs#vapt" },
  { label: "Cloud Security", href: "/programs#cloud" },
  { label: "DFIR", href: "/programs#dfir" },
];

const company = [
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Full Curriculum", href: "/curriculum" },
  { label: "Pricing", href: "/pricing" },
];

const support = [
  { label: "Contact / Enroll", href: "/contact" },
  { label: "FAQ", href: "/#faq" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  if (pathname?.startsWith("/dashboard") || pathname?.startsWith("/profile")) {
    return null;
  }

  return (
    <footer className="relative bg-black font-sans border-t border-white/5 overflow-hidden">
      {/* Subtle ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-red-600/5 blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10 container mx-auto px-6 max-w-7xl pt-20 pb-10">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand column */}
          <div className="flex flex-col gap-5 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 w-fit">
              <Image
                src="https://ik.imagekit.io/bkt3emitco/ChatGPT%20Image%20Mar%209,%202026,%2005_24_01%20AM.png"
                alt="Logo"
                width={36}
                height={36}
                className="rounded-lg"
              />
              <span className="-translate-x-1.5 text-sm font-bold text-white tracking-wide">
                ZHARNY<span className="text-red-500">X</span>
              </span>
            </Link>

            <p className="text-red-500 text-xs font-semibold uppercase tracking-[0.15em]">
              Tamil Nadu&apos;s Own Cybersecurity Academy
            </p>

            <p className="text-gray-500 text-sm leading-relaxed tracking-wide max-w-64">
              Every Week. Every Skill. Every Student — Unregrettable.
            </p>

            <div className="flex items-center gap-1.5 text-gray-600 text-xs tracking-wide">
              <MapPin size={11} className="shrink-0" />
              Coimbatore · Chennai · Remote
            </div>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-red-500 hover:text-red-400 transition-colors w-fit mt-1"
            >
              Apply Now
              <ArrowRight
                size={12}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </Link>
          </div>

          {/* Programs */}
          <FooterColumn title="Programs" links={programs} />

          {/* Company */}
          <FooterColumn title="Company" links={company} />

          {/* Support */}
          <FooterColumn title="Support" links={support} />
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-gray-600 text-xs tracking-wide">
            © {currentYear} Zharnyx Cybersecurity Academy. All rights reserved.
          </p>
          <p className="text-gray-700 text-xs tracking-wide">
            Founded by Sanjai R
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em]">
        {title}
      </h4>
      <ul className="flex flex-col gap-3">
        {links.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="text-gray-500 text-sm tracking-wide hover:text-white transition-colors duration-200"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
