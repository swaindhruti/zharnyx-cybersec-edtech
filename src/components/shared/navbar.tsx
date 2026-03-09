"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "motion/react";
import { useState } from "react";
import { useSession, signOut } from "@/lib/auth/auth-client";
import { Menu, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import { TransitionLink } from "@/components/shared/transition-link";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import Image from "next/image";

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const { data: session } = useSession();
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  if (pathname?.startsWith("/dashboard") || pathname?.startsWith("/profile")) {
    return null;
  }

  return (
    <div
      className={cn(
        "fixed top-0 inset-x-0 w-full z-[100] transition-all duration-300",
        className
      )}
    >
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={cn(
          "relative flex items-center justify-between px-6 lg:px-16 py-4 transition-all duration-300",
          scrolled
            ? "bg-black/95 backdrop-blur-md border-b border-white/10"
            : "bg-black/80 backdrop-blur-sm border-b border-white/5"
        )}
      >
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <Image src="https://ik.imagekit.io/bkt3emitco/ChatGPT%20Image%20Mar%209,%202026,%2005_24_01%20AM.png" alt="Logo" width={44} height={44} />
          <span className="-translate-x-2 text-lg font-bold text-white tracking-tight">
            ZHARNY<span className="text-red-500">X</span>
          </span>
        </Link>

        {/* Center: Nav Links - Desktop */}
        <div className="hidden md:flex items-center gap-1">
          <NavLink href="/" label="Home" active={pathname === "/"} />
          {/* Programs Dropdown */}
          <div className="relative group">
            <NavLink href="/programs" label="Programs" hasDropdown active={pathname === "/programs"} />
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-52 pt-3 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200">
              <div className="bg-[#111] border border-white/10 rounded-lg shadow-xl flex flex-col py-2">
                <DropdownItem href="/programs" label="All Programs" />
                <DropdownItem href="/programs#soc" label="SOC Analyst" />
                <DropdownItem href="/programs#vapt" label="VAPT" />
                <DropdownItem href="/programs#cloud" label="Cloud Security" />
                <DropdownItem href="/programs#dfir" label="DFIR" />
              </div>
            </div>
          </div>
          {/* About Dropdown */}
          <div className="relative group">
            <NavLink href="/about" label="About" hasDropdown active={pathname === "/about"} />
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-52 pt-3 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200">
              <div className="bg-[#111] border border-white/10 rounded-lg shadow-xl flex flex-col py-2">
                <DropdownItem href="/about#mission" label="Mission" />
                <DropdownItem href="/about#core-pillars" label="Core Pillars" />
                <DropdownItem href="/about#leadership" label="Leadership" />
                <DropdownItem href="/about#journey" label="Our Journey" />
              </div>
            </div>
          </div>
          <NavLink href="/pricing" label="Pricing" active={pathname === "/pricing"} />
          <NavLink href="/blog" label="Blog" active={pathname === "/blog"} />
          <NavLink href="/contact" label="Contact" active={pathname === "/contact"} />
        </div>

        {/* Right: CTA - Desktop */}
        <div className="hidden md:flex items-center gap-5">
          {session ? (
            <>
              <Link
                href="/dashboard"
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                Dashboard
              </Link>
              <button
                onClick={() => signOut()}
                className="px-5 py-2 bg-red-600 text-white text-sm font-semibold rounded-full hover:bg-red-700 transition-colors"
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link
                href="/auth?mode=signin"
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                Student Login
              </Link>
              <Link
                href="/auth?mode=signup"
                className="px-5 py-2 bg-red-600 text-white text-sm font-semibold rounded-sm hover:bg-red-700 transition-colors"
              >
                Enroll Now
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors">
                <Menu size={22} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#0a0a0a] border-l border-white/10 p-0 w-[300px]">
              <div className="flex flex-col h-full">
                <div className="p-5 border-b border-white/10 flex items-center justify-between">
                  <span className="text-lg font-bold text-white tracking-tight">
                    ZHARNYX<span className="text-red-500">X</span>
                  </span>
                </div>
                <div className="flex-1 overflow-y-auto py-4 px-3 flex flex-col gap-1">
                  <MobileNavLink href="/" label="Home" />

                  {/* Programs Mobile Dropdown */}
                  <MobileNavDropdown label="Programs">
                    <MobileNavLink href="/programs" label="All Programs" />
                    <MobileNavLink href="/programs#soc" label="SOC Analyst" isChild />
                    <MobileNavLink href="/programs#vapt" label="VAPT" isChild />
                    <MobileNavLink href="/programs#cloud" label="Cloud Security" isChild />
                    <MobileNavLink href="/programs#dfir" label="DFIR" isChild />
                  </MobileNavDropdown>

                  {/* About Mobile Dropdown */}
                  <MobileNavDropdown label="About">
                    <MobileNavLink href="/about" label="Overview" />
                    <MobileNavLink href="/about#mission" label="Mission" isChild />
                    <MobileNavLink href="/about#core-pillars" label="Core Pillars" isChild />
                    <MobileNavLink href="/about#leadership" label="Leadership" isChild />
                    <MobileNavLink href="/about#journey" label="Our Journey" isChild />
                  </MobileNavDropdown>

                  <MobileNavLink href="/pricing" label="Pricing" />
                  <MobileNavLink href="/blog" label="Blog" />
                  <MobileNavLink href="/contact" label="Contact" />
                </div>
                <div className="p-5 border-t border-white/10 flex flex-col gap-3">
                  {session ? (
                    <>
                      <Link
                        href="/dashboard"
                        className="w-full text-center px-5 py-2.5 text-white text-sm font-semibold border border-white/20 rounded-lg hover:bg-white/5 transition-colors"
                      >
                        Dashboard
                      </Link>
                      <button
                        onClick={() => signOut()}
                        className="w-full px-5 py-2.5 bg-red-600 text-white text-sm font-semibold rounded-lg hover:bg-red-700 transition-colors"
                      >
                        Sign Out
                      </button>
                    </>
                  ) : (
                    <>
                      <Link
                        href="/auth?mode=signin"
                        className="w-full text-center px-5 py-2.5 text-white text-sm font-semibold border border-white/20 rounded-lg hover:bg-white/5 transition-colors"
                      >
                        Student Login
                      </Link>
                      <Link
                        href="/auth?mode=signup"
                        className="w-full text-center px-5 py-2.5 bg-red-600 text-white text-sm font-semibold rounded-lg hover:bg-red-700 transition-colors"
                      >
                        Enroll Now
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </motion.nav>
    </div>
  );
}

function NavLink({ href, label, hasDropdown, active }: { href: string; label: string; hasDropdown?: boolean; active?: boolean }) {
  return (
    <TransitionLink
      href={href}
      className={cn(
        "px-4 py-2 text-sm font-medium transition-colors flex items-center gap-1",
        active ? "text-red-500" : "text-gray-400 hover:text-white"
      )}
    >
      {label}
      {hasDropdown && (
        <ChevronDown
          size={13}
          className="transition-transform duration-200 group-hover:-rotate-180"
        />
      )}
    </TransitionLink>
  );
}

function DropdownItem({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
    >
      {label}
    </Link>
  );
}

function MobileNavLink({ href, label, isChild }: { href: string; label: string; isChild?: boolean }) {
  return (
    <SheetClose asChild>
      <Link
        href={href}
        className={cn(
          "block py-2.5 rounded-lg hover:text-white hover:bg-white/5 transition-all",
          isChild ? "px-8 text-sm text-gray-500" : "px-4 text-sm font-medium text-gray-300"
        )}
      >
        {label}
      </Link>
    </SheetClose>
  )
}

function MobileNavDropdown({ label, children }: { label: string; children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-2.5 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all"
      >
        {label}
        <ChevronDown size={16} className={cn("transition-transform duration-200", isOpen && "rotate-180")} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
