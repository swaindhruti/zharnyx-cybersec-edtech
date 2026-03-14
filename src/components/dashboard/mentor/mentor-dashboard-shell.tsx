"use client";

import { ManagedCourses } from "./managed-courses";
import { StudentApplications } from "./student-applications";
import { EngagementStats } from "./engagement-stats";
import { AssignedWeeksSection } from "./assigned-weeks-section";
import { AssignmentScoringSection } from "./assignment-scoring-section";
import { ProjectScoringSection } from "./project-scoring-section";
import { DoubtClearingSection } from "./doubt-clearing-section";
import {
  GraduationCap,
  FileText,
  FolderKanban,
  HelpCircle,
} from "lucide-react";

/* ── Shared glass card wrapper ── */
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

interface MentorDashboardShellProps {
  section?: string;
  mentorId: string;
}

export function MentorDashboardShell({
  section,
  mentorId,
}: MentorDashboardShellProps) {
  const currentSection = section || "student-progress";

  const renderContent = () => {
    switch (currentSection) {
      case "student-progress":
        return (
          <GlassCard
            icon={GraduationCap}
            iconColor="text-purple-400"
            title="Assigned Sessions"
            description="View your assigned course weeks and sessions."
          >
            <AssignedWeeksSection mentorId={mentorId} />
          </GlassCard>
        );
      case "score-assignments":
        return (
          <GlassCard
            icon={FileText}
            iconColor="text-purple-400"
            title="Score Assignments"
            description="Review and grade pending student assignments."
          >
            <AssignmentScoringSection mentorId={mentorId} />
          </GlassCard>
        );
      case "score-projects":
        return (
          <GlassCard
            icon={FolderKanban}
            iconColor="text-purple-400"
            title="Score Projects"
            description="Evaluate capstone and module projects."
          >
            <ProjectScoringSection mentorId={mentorId} />
          </GlassCard>
        );
      case "doubt-sessions":
        return (
          <GlassCard
            icon={HelpCircle}
            iconColor="text-purple-400"
            title="Doubt Sessions"
            description="Manage student doubt clearing requests."
          >
            <DoubtClearingSection mentorId={mentorId} />
          </GlassCard>
        );
      default:
        return (
          <GlassCard
            icon={GraduationCap}
            iconColor="text-purple-400"
            title="Assigned Sessions"
            description="View your assigned course weeks and sessions."
          >
            <AssignedWeeksSection mentorId={mentorId} />
          </GlassCard>
        );
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {renderContent()}
    </div>
  );
}
