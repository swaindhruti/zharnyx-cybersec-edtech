import Link from "next/link";
import { ArrowLeft, GraduationCap } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { requireStudent } from "@/lib/auth/role-guard";
import { StudentDashboardShell } from "@/components/dashboard/student/student-dashboard-shell";

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function StudentPage(props: PageProps) {
  const session = await requireStudent();
  const studentName = session.user.name;

  const searchParams = await props.searchParams;
  const section =
    typeof searchParams.section === "string" ? searchParams.section : undefined;
  const courseId =
    typeof searchParams.courseId === "string"
      ? searchParams.courseId
      : undefined;

  return (
    <div className="flex min-h-screen w-full bg-black font-sans">
      {/* Ambient glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative flex flex-col flex-1 z-10 w-full px-4 sm:px-6 lg:px-10 pb-10 pt-4">
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-5 border-b border-white/5">
          <div className="flex items-start gap-3">
            <SidebarTrigger className="text-white hover:bg-white/10 md:hidden border border-white/10 rounded-xl h-10 w-10 shrink-0" />
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-3">
                <div className="p-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20">
                  <GraduationCap size={14} className="text-blue-400" />
                </div>
                <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-wide leading-none">
                  Student Portal
                </h1>
              </div>
              <div className="flex items-center gap-2 ml-1">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-[0.15em]">
                  Welcome, {studentName}
                </span>
              </div>
            </div>
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors px-4 py-2 rounded-full border border-white/10 hover:border-white/20 hover:bg-white/5 font-medium tracking-wide w-fit"
          >
            <ArrowLeft size={14} />
            Back to Home
          </Link>
        </header>

        <StudentDashboardShell
          section={section}
          courseId={courseId}
          studentId={session.user.id}
        />
      </div>
    </div>
  );
}
