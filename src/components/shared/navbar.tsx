"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "motion/react";
import { useState } from "react";
import { useSession, signOut } from "@/lib/auth/auth-client";
import { Menu, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import { TransitionLink } from "@/components/shared/transition-link";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
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
        "fixed top-0 inset-x-0 z-100 flex justify-center pointer-events-none pt-3 px-4",
        className,
      )}
    >
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={cn(
          "pointer-events-auto w-full flex items-center justify-between px-5 lg:px-8 py-4 rounded-2xl transition-all duration-300",
          scrolled
            ? "bg-black/85 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
            : "bg-black/50 backdrop-blur-md border border-white/5 shadow-[0_4px_20px_rgba(0,0,0,0.25)]",
        )}
      >
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
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

        {/* Center: Nav Links - Desktop */}
        <div className="hidden md:flex items-center gap-0.5">
          <NavLink href="/" label="Home" active={pathname === "/"} />

          {/* Programs Dropdown */}
          <div className="relative group">
            <NavLink
              href="/programs"
              label="Programs"
              hasDropdown
              active={pathname === "/programs"}
            />
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-48 pt-3 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200">
              <div className="bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl flex flex-col py-1.5">
                <DropdownItem href="/programs" label="All Programs" />
                <DropdownItem href="/programs#soc" label="SOC Analyst" />
                <DropdownItem href="/programs#vapt" label="VAPT" />
                <DropdownItem href="/programs#cloud" label="Cloud Security" />
                <DropdownItem href="/programs#dfir" label="DFIR" />
              </div>
            </div>
          </div>

          <NavLink
            href="/curriculum"
            label="Curriculum"
            active={pathname === "/curriculum"}
          />

          {/* About Dropdown */}
          <div className="relative group">
            <NavLink
              href="/about"
              label="About"
              hasDropdown
              active={pathname === "/about"}
            />
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-48 pt-3 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200">
              <div className="bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl flex flex-col py-1.5">
                <DropdownItem href="/about#mission" label="Mission" />
                <DropdownItem href="/about#core-pillars" label="Core Pillars" />
                <DropdownItem href="/about#leadership" label="Leadership" />
                <DropdownItem href="/about#journey" label="Our Journey" />
              </div>
            </div>
          </div>

          <NavLink
            href="/pricing"
            label="Pricing"
            active={pathname === "/pricing"}
          />
          <NavLink href="/blog" label="Blog" active={pathname === "/blog"} />
          <NavLink
            href="/contact"
            label="Contact"
            active={pathname === "/contact"}
          />
        </div>

        {/* Right: CTA - Desktop */}
        <div className="hidden md:flex items-center gap-2">
          {session ? (
            <>
              <Link
                href="/dashboard"
                className="px-4 py-1.5 text-xs font-semibold tracking-wide text-gray-300 hover:text-white rounded-full border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all duration-200"
              >
                Dashboard
              </Link>
              <button
                onClick={() => signOut()}
                className="px-4 py-1.5 text-xs font-semibold tracking-wide bg-red-600 text-white rounded-full hover:bg-red-500 transition-all duration-200 shadow-[0_0_12px_rgba(239,68,68,0.25)] hover:shadow-[0_0_20px_rgba(239,68,68,0.4)]"
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link
                href="/auth?mode=signin"
                className="px-4 py-1.5 text-xs font-semibold tracking-wide text-gray-300 hover:text-white rounded-full border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all duration-200"
              >
                Sign In
              </Link>
              <Link
                href="/auth?mode=signup"
                className="px-4 py-1.5 text-xs font-semibold tracking-wide bg-red-600 text-white rounded-full hover:bg-red-500 transition-all duration-200 shadow-[0_0_12px_rgba(239,68,68,0.25)] hover:shadow-[0_0_20px_rgba(239,68,68,0.4)]"
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
              <button className="p-2 text-white hover:bg-white/10 rounded-xl transition-colors">
                <Menu size={20} />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-black/95 backdrop-blur-xl border-l border-white/10 p-0 w-[280px]"
            >
              <div className="flex flex-col h-full">
                <div className="p-5 border-b border-white/5 flex items-center gap-2">
                  <Image
                    src="https://ik.imagekit.io/bkt3emitco/ChatGPT%20Image%20Mar%209,%202026,%2005_24_01%20AM.png"
                    alt="Logo"
                    width={28}
                    height={28}
                    className="rounded-md"
                  />
                  <span className="text-sm font-bold text-white tracking-wide">
                    ZHARNY<span className="text-red-500">X</span>
                  </span>
                </div>

                <div className="flex-1 overflow-y-auto py-3 px-3 flex flex-col gap-0.5">
                  <MobileNavLink href="/" label="Home" />
                  <MobileNavDropdown label="Programs">
                    <MobileNavLink href="/programs" label="All Programs" />
                    <MobileNavLink
                      href="/programs#soc"
                      label="SOC Analyst"
                      isChild
                    />
                    <MobileNavLink href="/programs#vapt" label="VAPT" isChild />
                    <MobileNavLink
                      href="/programs#cloud"
                      label="Cloud Security"
                      isChild
                    />
                    <MobileNavLink href="/programs#dfir" label="DFIR" isChild />
                  </MobileNavDropdown>
                  <MobileNavLink href="/curriculum" label="Curriculum" />
                  <MobileNavDropdown label="About">
                    <MobileNavLink href="/about" label="Overview" />
                    <MobileNavLink
                      href="/about#mission"
                      label="Mission"
                      isChild
                    />
                    <MobileNavLink
                      href="/about#core-pillars"
                      label="Core Pillars"
                      isChild
                    />
                    <MobileNavLink
                      href="/about#leadership"
                      label="Leadership"
                      isChild
                    />
                    <MobileNavLink
                      href="/about#journey"
                      label="Our Journey"
                      isChild
                    />
                  </MobileNavDropdown>
                  <MobileNavLink href="/pricing" label="Pricing" />
                  <MobileNavLink href="/blog" label="Blog" />
                  <MobileNavLink href="/contact" label="Contact" />
                </div>

                <div className="p-4 border-t border-white/5 flex flex-col gap-2">
                  {session ? (
                    <>
                      <Link
                        href="/dashboard"
                        className="w-full text-center px-5 py-2.5 text-white text-xs font-semibold tracking-wide border border-white/10 rounded-full hover:bg-white/5 transition-colors"
                      >
                        Dashboard
                      </Link>
                      <button
                        onClick={() => signOut()}
                        className="w-full px-5 py-2.5 bg-red-600 text-white text-xs font-semibold tracking-wide rounded-full hover:bg-red-500 transition-colors"
                      >
                        Sign Out
                      </button>
                    </>
                  ) : (
                    <>
                      <Link
                        href="/auth?mode=signin"
                        className="w-full text-center px-5 py-2.5 text-white text-xs font-semibold tracking-wide border border-white/10 rounded-full hover:bg-white/5 transition-colors"
                      >
                        Sign In
                      </Link>
                      <Link
                        href="/auth?mode=signup"
                        className="w-full text-center px-5 py-2.5 bg-red-600 text-white text-xs font-semibold tracking-wide rounded-full hover:bg-red-500 transition-colors"
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

function NavLink({
  href,
  label,
  hasDropdown,
  active,
}: {
  href: string;
  label: string;
  hasDropdown?: boolean;
  active?: boolean;
}) {
  return (
    <TransitionLink
      href={href}
      className={cn(
        "px-3 py-1.5 text-xs font-semibold uppercase tracking-wide transition-colors flex items-center gap-1 rounded-lg",
        active
          ? "text-red-400 bg-red-500/8"
          : "text-gray-400 hover:text-white hover:bg-white/5",
      )}
    >
      {label}
      {hasDropdown && (
        <ChevronDown
          size={11}
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
      className="block px-4 py-2 text-xs font-medium tracking-wide text-gray-400 hover:text-white hover:bg-white/5 transition-colors rounded-lg mx-1"
    >
      {label}
    </Link>
  );
}

function MobileNavLink({
  href,
  label,
  isChild,
}: {
  href: string;
  label: string;
  isChild?: boolean;
}) {
  return (
    <SheetClose asChild>
      <Link
        href={href}
        className={cn(
          "block py-2 rounded-xl hover:text-white hover:bg-white/5 transition-all tracking-wide",
          isChild
            ? "px-8 text-xs text-gray-500"
            : "px-4 text-xs font-semibold text-gray-300",
        )}
      >
        {label}
      </Link>
    </SheetClose>
  );
}

function MobileNavDropdown({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-2 text-xs font-semibold text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-all tracking-wide"
      >
        {label}
        <ChevronDown
          size={14}
          className={cn(
            "transition-transform duration-200",
            isOpen && "rotate-180",
          )}
        />
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
  );
}
