import Link from "next/link";
import { redirect } from "next/navigation";
import { getCurrentSession } from "@/lib/auth/role-guard";
import {
  Shield,
  GraduationCap,
  Users,
  Briefcase,
  ArrowRight,
  Mail,
  UserCircle2,
  Handshake,
} from "lucide-react";
import { HubUserControls } from "@/components/dashboard/hub/user-controls";

const roleColor: Record<string, string> = {
  admin: "text-red-500   bg-red-500/10   border-red-500/25",
  mentor: "text-purple-400 bg-purple-500/10 border-purple-500/25",
  student: "text-blue-400   bg-blue-500/10   border-blue-500/25",
  recruiter: "text-yellow-400 bg-yellow-500/10 border-yellow-500/25",
  partner_agency: "text-green-400  bg-green-500/10  border-green-500/25",
};

const roleLabel: Record<string, string> = {
  admin: "Admin",
  mentor: "Mentor",
  student: "Student",
  recruiter: "Recruiter",
  partner_agency: "Partner Agency",
};

export default async function DashboardPage() {
  const session = await getCurrentSession();

  if (!session) {
    redirect("/auth");
  }

  const userRole = session.user.role;
  const userName = session.user.name;
  const userEmail = session.user.email;
  const rolePill =
    roleColor[userRole] ?? "text-gray-400 bg-white/5 border-white/10";

  return (
    <div className="flex min-h-screen w-full bg-black font-sans">
      {/* Ambient glow behind content */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-red-600/5 blur-[140px] rounded-full" />
      </div>

      <div className="relative z-10 flex flex-col flex-1 w-full px-4 sm:px-6 lg:px-10 pb-8 pt-4 md:pt-5 max-w-7xl mx-auto">
        {/* ── Header ── */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-5 border-b border-white/5">
          {/* Left: title + user info */}
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-wide leading-none">
              Command Center
            </h1>

            {/* User info row */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Role badge */}
              <span
                className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-[0.15em] border ${rolePill}`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current mr-1.5 opacity-80 animate-pulse" />
                {roleLabel[userRole] ?? userRole}
              </span>

              {/* Name */}
              <div className="flex items-center gap-1.5 text-gray-400 text-sm">
                <UserCircle2 size={13} className="shrink-0" />
                <span className="tracking-wide">{userName}</span>
              </div>

              {/* Email */}
              <div className="flex items-center gap-1.5 text-gray-500 text-xs">
                <Mail size={11} className="shrink-0" />
                <span className="tracking-wide">{userEmail}</span>
              </div>

              {/* Session active dot */}
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-green-500 text-xs font-semibold uppercase tracking-[0.15em]">
                  Live
                </span>
              </div>
            </div>
          </div>

          {/* Right: controls */}
          <HubUserControls />
        </header>

        {/* ── Portal Cards ── */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {/* Admin — admin only */}
            {userRole === "admin" && (
              <PortalCard
                href="/dashboard/admin"
                icon={Shield}
                iconColor="text-red-500"
                glowColor="bg-red-500/5"
                borderHover="hover:border-red-500/25"
                badge="Admin"
                badgeClass="text-red-500 bg-red-500/10 border-red-500/20"
                title="Admin Console"
                description="Manage users, courses, mentors, and platform settings. Complete system control."
              />
            )}

            {/* Mentor — admin + mentor */}
            {(userRole === "admin" || userRole === "mentor") && (
              <PortalCard
                href="/dashboard/mentor"
                icon={Users}
                iconColor="text-purple-400"
                glowColor="bg-purple-500/5"
                borderHover="hover:border-purple-500/25"
                badge="Mentor"
                badgeClass="text-purple-400 bg-purple-500/10 border-purple-500/20"
                title="Mentor Portal"
                description="Track student progress, grade assignments, and clear doubts."
              />
            )}

            {/* Student — everyone */}
            <PortalCard
              href="/dashboard/student"
              icon={GraduationCap}
              iconColor="text-blue-400"
              glowColor="bg-blue-500/5"
              borderHover="hover:border-blue-500/25"
              badge="Student"
              badgeClass="text-blue-400 bg-blue-500/10 border-blue-500/20"
              title="Student Portal"
              description="Access course materials, submit work, and view your learning progress."
            />

            {/* Recruiter — admin + recruiter */}
            {(userRole === "admin" || userRole === "recruiter") && (
              <PortalCard
                href="/dashboard/recruiter"
                icon={Briefcase}
                iconColor="text-yellow-400"
                glowColor="bg-yellow-500/5"
                borderHover="hover:border-yellow-500/25"
                badge="Recruiter"
                badgeClass="text-yellow-400 bg-yellow-500/10 border-yellow-500/20"
                title="Recruiter Portal"
                description="Search for candidates and manage job postings."
              />
            )}

            {/* Partner — admin + partner_agency */}
            {(userRole === "admin" || userRole === "partner_agency") && (
              <PortalCard
                href="/dashboard/partner"
                icon={Handshake}
                iconColor="text-green-400"
                glowColor="bg-green-500/5"
                borderHover="hover:border-green-500/25"
                badge="Partner"
                badgeClass="text-green-400 bg-green-500/10 border-green-500/20"
                title="Partner Portal"
                description="Track coupon usage and revenue share for your agency."
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── PortalCard Component ── */
function PortalCard({
  href,
  icon: Icon,
  iconColor,
  glowColor,
  borderHover,
  badge,
  badgeClass,
  title,
  description,
}: {
  href: string;
  icon: React.ElementType;
  iconColor: string;
  glowColor: string;
  borderHover: string;
  badge: string;
  badgeClass: string;
  title: string;
  description: string;
}) {
  return (
    <Link href={href} className="block group">
      <div
        className={`relative flex flex-col gap-4 p-5 rounded-2xl bg-linear-to-b from-white/5 to-transparent border border-white/5 backdrop-blur-md overflow-hidden transition-all duration-500 ${borderHover} hover:shadow-2xl hover:-translate-y-1`}
      >
        {/* Hover ambient glow */}
        <div
          className={`absolute -inset-4 blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 ${glowColor} -z-10`}
        />

        {/* Top row: icon + badge */}
        <div className="flex items-center justify-between">
          <div
            className={`p-3 rounded-xl border border-white/5 bg-white/5 ${iconColor}`}
          >
            <Icon size={20} strokeWidth={1.8} />
          </div>
          <span
            className={`text-xs font-bold uppercase tracking-[0.15em] px-2.5 py-1 rounded-full border ${badgeClass}`}
          >
            {badge}
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-2">
          <h2
            className={`text-white text-sm sm:text-base font-bold tracking-wide group-hover:${iconColor} transition-colors duration-300`}
          >
            {title}
          </h2>
          <p className="text-gray-500 text-xs leading-relaxed tracking-wide">
            {description}
          </p>
        </div>

        {/* CTA row */}
        <div
          className={`flex items-center gap-2 text-sm font-semibold tracking-wide mt-auto pt-3 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${iconColor}`}
        >
          Open Portal
          <ArrowRight
            size={14}
            className="group-hover:translate-x-1 transition-transform"
          />
        </div>
      </div>
    </Link>
  );
}
