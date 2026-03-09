"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  if (pathname?.startsWith("/dashboard") || pathname?.startsWith("/profile")) {
    return null;
  }

  return (
    <footer className="bg-[#050505] font-sans border-t border-[#1a1a1a] pt-[80px] pb-[40px]">
      <div className="container mx-auto px-6 max-w-[1440px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-[80px]">
          {/* COLUMN 1: BRAND & INFO */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2.5 w-fit mb-[16px]">
              <Image src="https://ik.imagekit.io/bkt3emitco/ChatGPT%20Image%20Mar%209,%202026,%2005_24_01%20AM.png" alt="Logo" width={44} height={44} />
              <span className="-translate-x-2 text-lg font-bold text-[#f2f2f2] tracking-tight">
                ZHARNY<span className="text-[#ea384c]">X</span>
              </span>
            </Link>

            <div className="space-y-5">
              <p className="text-[#ea384c] text-[14px] font-semibold font-sans">
                Tamil Nadu's Own Cybersecurity Academy
              </p>
              
              <p className="text-[#a3a3a3] text-[14px] leading-relaxed max-w-[280px]">
                Every Week. Every Skill. Every Student — Unregrettable.
              </p>

              <p className="text-[#737373] text-[12px] pt-4">
                Serving Coimbatore & Chennai, Tamil Nadu
              </p>
            </div>
          </div>

          {/* COLUMN 2: PROGRAMS */}
          <div>
            <h4 className="text-[#f2f2f2] font-semibold text-[15px] mb-6">Programs</h4>
            <ul className="space-y-4 text-[14px]">
              {['Overview', 'Foundation Phase', 'SOC Analyst', 'VAPT', 'Cloud Security', 'DFIR'].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-[#a3a3a3] hover:text-[#f2f2f2] transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: COMPANY */}
          <div>
            <h4 className="text-[#f2f2f2] font-semibold text-[15px] mb-6">Company</h4>
            <ul className="space-y-4 text-[14px]">
              {['About Us', 'Placements', 'Blog', 'Full Curriculum', 'Capstone'].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-[#a3a3a3] hover:text-[#f2f2f2] transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: SUPPORT */}
          <div>
            <h4 className="text-[#f2f2f2] font-semibold text-[15px] mb-6">Support</h4>
            <ul className="space-y-4 text-[14px]">
              {['Contact / Enroll', 'FAQ', 'Pricing', 'Privacy Policy', 'Terms & Conditions'].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-[#a3a3a3] hover:text-[#f2f2f2] transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-[#1a1a1a] pt-[32px] flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] text-[#737373]">
          <div>
            © 2026 Zharnyx Cybersecurity Academy. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            Founded by Sanjai R
          </div>
        </div>
      </div>
    </footer>
  );
}
