"use client";

import { OverviewSection } from "./overview-section";
import { LearningMaterialSection } from "./learning-material-section";
import { SubmissionsHistorySection } from "./submissions-history-section";
import { ProfileSection } from "./profile-section";
import { DoubtSessionsView } from "./doubt/doubt-sessions-view";
import {
  LayoutDashboard,
  GraduationCap,
  History,
  Settings,
} from "lucide-react";

/* ── Shared glass card wrapper ── */
function GlassCard({
  icon: Icon,
  iconColor,
  title,
  description,
  noPadding,
  children,
}: {
  icon: React.ElementType;
  iconColor: string;
  title: string;
  description: string;
  noPadding?: boolean;
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
      <div className={noPadding ? "" : "p-4 md:p-6"}>{children}</div>
    </div>
  );
}

interface StudentDashboardShellProps {
  section?: string;
  courseId?: string;
  studentId: string;
}

export function StudentDashboardShell({
  section,
  courseId,
  studentId,
}: StudentDashboardShellProps) {
  const currentSection = section || "learning";

  const renderContent = () => {
    switch (currentSection) {
      case "overview":
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <LayoutDashboard size={18} className="text-blue-400" />
              <h2 className="text-white font-bold text-base uppercase tracking-wide">
                Overview
              </h2>
            </div>
            <OverviewSection studentId={studentId} />
          </div>
        );
      case "learning":
        return (
          <GlassCard
            icon={GraduationCap}
            iconColor="text-blue-400"
            title="Learning Material"
            description="Access your course content and submit assignments."
            noPadding
          >
            <LearningMaterialSection
              studentId={studentId}
              courseId={courseId}
            />
          </GlassCard>
        );
      case "submissions":
        return (
          <GlassCard
            icon={History}
            iconColor="text-blue-400"
            title="Submissions History"
            description="View status of all your assessments and projects."
          >
            <SubmissionsHistorySection studentId={studentId} />
          </GlassCard>
        );
      case "profile":
        return (
          <GlassCard
            icon={Settings}
            iconColor="text-blue-400"
            title="Public Profile"
            description="Update your public information and links."
          >
            <ProfileSection studentId={studentId} />
          </GlassCard>
        );
      case "doubts":
        return <DoubtSessionsView studentId={studentId} />;
      default:
        return (
          <div className="space-y-6">
            <OverviewSection studentId={studentId} />
          </div>
        );
    }
  };

  return (
    <div className="space-y-4 md:space-y-6 animate-in fade-in duration-500 w-full">
      {renderContent()}
    </div>
  );
}
