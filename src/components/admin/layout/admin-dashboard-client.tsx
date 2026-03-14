"use client";

import { UserTable } from "@/components/admin/user-management/user-table";
import { MentorApplicationTable } from "@/components/admin/mentor-management/mentor-application-table";
import { CourseManager } from "@/components/admin/course-management/course-manager";
import { RecruiterApplicationTable } from "@/components/admin/recruiter-management/recruiter-application-table";
import { ApprovedMentorsTable } from "@/components/admin/mentor-management/approved-mentors-table";
import { ApprovedRecruitersTable } from "@/components/admin/recruiter-management/approved-recruiters-table";
import { RankingTable } from "@/components/admin/ranking/ranking-table";
import { CouponManager } from "@/components/admin/coupon-management/coupon-manager";
import { PartnerApplicationTable } from "@/components/admin/partner-management/partner-application-table";
import { PartnerTable } from "@/components/admin/partner-management/partner-table";
import { useSearchParams } from "next/navigation";
import { SidebarTrigger } from "@/components/ui/sidebar";
import {
  Users,
  BookOpen,
  Briefcase,
  Trophy,
  Ticket,
  Handshake,
  PanelLeft,
  Shield,
} from "lucide-react";

/* ── shared glass card shell ── */
function GlassCard({
  icon: Icon,
  iconColor,
  title,
  description,
  children,
}: {
  icon: React.ElementType;
  iconColor: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-white/5 bg-linear-to-b from-white/5 to-transparent backdrop-blur-md overflow-hidden">
      <div className="flex items-start gap-3 px-6 py-5 border-b border-white/5">
        <div
          className={`p-2 rounded-xl border border-white/5 bg-white/5 shrink-0 ${iconColor}`}
        >
          <Icon size={16} strokeWidth={1.8} />
        </div>
        <div>
          <h2 className="text-white font-bold text-sm sm:text-base uppercase tracking-wide leading-none mb-1">
            {title}
          </h2>
          <p className="text-gray-500 text-xs tracking-wide">{description}</p>
        </div>
      </div>
      <div className="p-4 md:p-6">{children}</div>
    </div>
  );
}

export default function AdminPage() {
  const searchParams = useSearchParams();
  const activeSection = searchParams.get("section") || "user-management";

  const sectionTitle = activeSection
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <div className="flex min-h-screen w-full bg-black font-sans">
      {/* Subtle ambient glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-red-600/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative flex flex-col flex-1 z-10 w-full px-4 sm:px-6 lg:px-10 pb-10 pt-4">
        {/* Header */}
        <header className="flex items-center gap-3 mb-8 pb-5 border-b border-white/5">
          <SidebarTrigger className="text-white hover:bg-white/10 md:hidden border border-white/10 rounded-xl h-10 w-10 shrink-0" />
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-3">
              <div className="p-1.5 rounded-lg bg-red-500/10 border border-red-500/20">
                <Shield size={14} className="text-red-500" />
              </div>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-wide leading-none">
                {sectionTitle}
              </h1>
            </div>
            <div className="flex items-center gap-2 ml-1">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-[0.15em]">
                Admin Console · System Active
              </span>
            </div>
          </div>
        </header>

        <div className="flex-1 w-full space-y-6">
          {activeSection === "user-management" && (
            <GlassCard
              icon={Users}
              iconColor="text-red-500"
              title="User Database"
              description="Manage users, roles, and permissions across the platform."
            >
              <UserTable />
            </GlassCard>
          )}

          {activeSection === "mentor-management" && (
            <GlassCard
              icon={Users}
              iconColor="text-purple-400"
              title="Mentor Management"
              description="View and manage all approved mentors."
            >
              <ApprovedMentorsTable />
            </GlassCard>
          )}

          {activeSection === "recruiter-management" && (
            <GlassCard
              icon={Briefcase}
              iconColor="text-yellow-400"
              title="Recruiter Management"
              description="View and manage all approved recruiters."
            >
              <ApprovedRecruitersTable />
            </GlassCard>
          )}

          {activeSection === "applications" && (
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              <GlassCard
                icon={Users}
                iconColor="text-blue-400"
                title="Mentor Requests"
                description="Review pending mentor applications."
              >
                <MentorApplicationTable />
              </GlassCard>
              <GlassCard
                icon={Briefcase}
                iconColor="text-yellow-400"
                title="Recruiter Requests"
                description="Review pending recruiter applications."
              >
                <RecruiterApplicationTable />
              </GlassCard>
              <div className="xl:col-span-2">
                <GlassCard
                  icon={Handshake}
                  iconColor="text-green-400"
                  title="Partner Agency Requests"
                  description="Review pending partner agency applications."
                >
                  <PartnerApplicationTable />
                </GlassCard>
              </div>
            </div>
          )}

          {activeSection === "course-management" && (
            <GlassCard
              icon={BookOpen}
              iconColor="text-cyan-400"
              title="Course Management"
              description="Create and manage courses, modules, and content."
            >
              <CourseManager />
            </GlassCard>
          )}

          {activeSection === "rankings" && (
            <GlassCard
              icon={Trophy}
              iconColor="text-yellow-400"
              title="Student Rankings"
              description="Global leaderboard of top performing students."
            >
              <RankingTable />
            </GlassCard>
          )}

          {activeSection === "coupon-management" && <CouponManager />}

          {activeSection === "partner-management" && (
            <GlassCard
              icon={Handshake}
              iconColor="text-green-400"
              title="Partner Management"
              description="View and manage all approved partner agencies."
            >
              <PartnerTable />
            </GlassCard>
          )}
        </div>
      </div>
    </div>
  );
}
