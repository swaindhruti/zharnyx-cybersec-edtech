"use client";

import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  BookOpen,
  Briefcase,
  LogOut,
  Home,
  GraduationCap,
  Users,
  Shield,
  PanelLeft,
  FileText,
  FolderKanban,
  HelpCircle,
  Trophy,
  Ticket,
  Handshake,
  Settings,
  LayoutDashboard,
} from "lucide-react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { authClient } from "@/lib/auth/auth-client";
import { cn } from "@/lib/utils";

const STUDENT_ITEMS = [
  { title: "My Learning", id: "learning", icon: GraduationCap },
  { title: "Submissions", id: "submissions", icon: FileText },
  { title: "Profile", id: "profile", icon: Settings },
  { title: "Doubt Sessions", id: "doubts", icon: HelpCircle },
];

const ADMIN_ITEMS = [
  { title: "User Management", id: "user-management", icon: Users },
  { title: "Mentor Management", id: "mentor-management", icon: Users },
  {
    title: "Recruiter Management",
    id: "recruiter-management",
    icon: Briefcase,
  },
  { title: "Applications", id: "applications", icon: LayoutDashboard },
  { title: "Course Management", id: "course-management", icon: BookOpen },
  { title: "Student Rankings", id: "rankings", icon: Trophy },
  { title: "Coupon Management", id: "coupon-management", icon: Ticket },
  { title: "Partner Management", id: "partner-management", icon: Handshake },
];

const MENTOR_ITEMS = [
  { title: "Student Progress", id: "student-progress", icon: GraduationCap },
  { title: "Score Assignments", id: "score-assignments", icon: FileText },
  { title: "Score Projects", id: "score-projects", icon: FolderKanban },
  { title: "Doubt Sessions", id: "doubt-sessions", icon: HelpCircle },
];

const PARTNER_ITEMS = [
  { title: "Overview", id: "overview", icon: LayoutDashboard },
  { title: "My Coupons", id: "coupons", icon: Ticket },
  { title: "Settings", id: "settings", icon: Settings },
];

/* accent colours + icons per role */
const ROLE_CONFIG: Record<
  string,
  { color: string; glow: string; icon: React.ElementType; label: string }
> = {
  admin: {
    color: "bg-red-600",
    glow: "text-red-500",
    icon: Shield,
    label: "Admin Console",
  },
  mentor: {
    color: "bg-purple-600",
    glow: "text-purple-400",
    icon: Users,
    label: "Mentor Zone",
  },
  student: {
    color: "bg-blue-600",
    glow: "text-blue-400",
    icon: BookOpen,
    label: "Student Portal",
  },
  recruiter: {
    color: "bg-yellow-600",
    glow: "text-yellow-400",
    icon: Briefcase,
    label: "Recruiter Hub",
  },
  partner_agency: {
    color: "bg-green-600",
    glow: "text-green-400",
    icon: Handshake,
    label: "Agency Portal",
  },
};

/* active styles per role */
const ACTIVE_STYLE: Record<string, string> = {
  admin:
    "bg-red-600/10    border-red-600/50    text-red-400    hover:bg-red-600/20",
  mentor:
    "bg-purple-600/10 border-purple-600/50 text-purple-400 hover:bg-purple-600/20",
  student:
    "bg-blue-600/10   border-blue-600/50   text-blue-400   hover:bg-blue-600/20",
  recruiter:
    "bg-yellow-600/10 border-yellow-600/50 text-yellow-400 hover:bg-yellow-600/20",
  partner_agency:
    "bg-green-600/10  border-green-600/50  text-green-400  hover:bg-green-600/20",
};

interface DashboardSidebarProps {
  userRole?: string;
}

export function DashboardSidebar({
  userRole = "student",
}: DashboardSidebarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { toggleSidebar, state } = useSidebar();

  const effectiveRole = pathname?.startsWith("/dashboard/student")
    ? "student"
    : userRole === "admin"
      ? pathname?.startsWith("/dashboard/mentor")
        ? "mentor"
        : pathname?.startsWith("/dashboard/partner")
          ? "partner_agency"
          : "admin"
      : userRole;

  const currentSection =
    searchParams.get("section") ||
    (effectiveRole === "mentor"
      ? "student-progress"
      : effectiveRole === "student"
        ? "learning"
        : "user-management");

  const cfg = ROLE_CONFIG[effectiveRole] ?? ROLE_CONFIG.student;
  const activeStyle = ACTIVE_STYLE[effectiveRole] ?? ACTIVE_STYLE.student;
  const RoleIcon = cfg.icon;

  const handleLogout = async () => {
    await authClient.signOut();
    router.push("/auth");
  };

  const navigate = (base: string, id: string) =>
    router.push(`${base}?section=${id}`);

  /* renders a single sidebar menu item */
  const MenuItem = ({
    item,
    isActive,
    onClick,
  }: {
    item: { title: string; id: string; icon: React.ElementType };
    isActive: boolean;
    onClick: () => void;
  }) => {
    const Icon = item.icon;
    return (
      <SidebarMenuItem>
        <SidebarMenuButton
          asChild
          isActive={isActive}
          onClick={onClick}
          className={cn(
            "font-sans font-semibold text-sm border transition-all duration-200 p-2.5 h-auto rounded-xl tracking-wide",
            "bg-transparent border-transparent text-gray-500 hover:bg-white/5 hover:text-white hover:border-white/5",
            isActive && activeStyle,
            "group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:p-2",
          )}
        >
          <button className="flex items-center gap-2.5 w-full group-data-[collapsible=icon]:justify-center">
            <Icon
              className={cn(
                "h-4 w-4 stroke-[1.5px] shrink-0",
                isActive ? cfg.glow : "text-gray-500",
              )}
            />
            <span className="text-xs uppercase tracking-wide group-data-[collapsible=icon]:hidden">
              {item.title}
            </span>
          </button>
        </SidebarMenuButton>
      </SidebarMenuItem>
    );
  };

  return (
    <Sidebar
      className="border-r border-white/5 bg-black text-white"
      collapsible="icon"
    >
      {/* ── Header ── */}
      <SidebarHeader className="border-b border-white/5 p-4 h-[72px] flex items-center bg-black group-data-[collapsible=icon]:p-2">
        <div className="flex items-center gap-3 overflow-hidden w-full">
          <div
            className={cn(
              "flex items-center justify-center shrink-0 w-9 h-9 rounded-xl transition-all",
              "group-data-[collapsible=icon]:w-8 group-data-[collapsible=icon]:h-8",
              cfg.color,
            )}
          >
            <RoleIcon size={16} className="text-white" strokeWidth={2} />
          </div>

          <div
            className={cn(
              "flex flex-col transition-opacity duration-200",
              state === "collapsed" ? "opacity-0 w-0 hidden" : "opacity-100",
            )}
          >
            <span className="font-extrabold text-white text-sm tracking-wide uppercase leading-none">
              ZHARNYX
            </span>
            <span
              className={cn(
                "text-[10px] font-semibold uppercase tracking-[0.15em] leading-none mt-1",
                cfg.glow,
              )}
            >
              {cfg.label}
            </span>
          </div>
        </div>
      </SidebarHeader>

      {/* ── Content ── */}
      <SidebarContent className="bg-black py-4 gap-0">
        {/* Admin menu */}
        {effectiveRole === "admin" && (
          <SidebarGroup className="px-2">
            <SidebarGroupLabel className="text-gray-600 font-semibold uppercase tracking-[0.15em] text-[10px] mb-2 px-2 group-data-[collapsible=icon]:hidden">
              Management
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu className="gap-0.5">
                {ADMIN_ITEMS.map((item) => (
                  <MenuItem
                    key={item.id}
                    item={item}
                    isActive={
                      pathname === "/dashboard/admin" &&
                      currentSection === item.id
                    }
                    onClick={() => navigate("/dashboard/admin", item.id)}
                  />
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}

        {/* Mentor menu */}
        {effectiveRole === "mentor" && (
          <SidebarGroup className="px-2">
            <SidebarGroupLabel className="text-gray-600 font-semibold uppercase tracking-[0.15em] text-[10px] mb-2 px-2 group-data-[collapsible=icon]:hidden">
              Grading & Sessions
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu className="gap-0.5">
                {MENTOR_ITEMS.map((item) => (
                  <MenuItem
                    key={item.id}
                    item={item}
                    isActive={
                      pathname === "/dashboard/mentor" &&
                      currentSection === item.id
                    }
                    onClick={() => navigate("/dashboard/mentor", item.id)}
                  />
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}

        {/* Partner menu */}
        {effectiveRole === "partner_agency" && (
          <SidebarGroup className="px-2">
            <SidebarGroupLabel className="text-gray-600 font-semibold uppercase tracking-[0.15em] text-[10px] mb-2 px-2 group-data-[collapsible=icon]:hidden">
              Agency Controls
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu className="gap-0.5">
                {PARTNER_ITEMS.map((item) => {
                  const isActive =
                    pathname === "/dashboard/partner" &&
                    (currentSection === item.id ||
                      (item.id === "overview" && !currentSection));
                  return (
                    <MenuItem
                      key={item.id}
                      item={item}
                      isActive={isActive}
                      onClick={() => navigate("/dashboard/partner", item.id)}
                    />
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}

        {/* Student menu */}
        {effectiveRole === "student" && (
          <SidebarGroup className="px-2">
            <SidebarGroupLabel className="text-gray-600 font-semibold uppercase tracking-[0.15em] text-[10px] mb-2 px-2 group-data-[collapsible=icon]:hidden">
              Learning Space
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu className="gap-0.5">
                {STUDENT_ITEMS.map((item) => (
                  <MenuItem
                    key={item.id}
                    item={item}
                    isActive={
                      pathname === "/dashboard/student" &&
                      currentSection === item.id
                    }
                    onClick={() => navigate("/dashboard/student", item.id)}
                  />
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}
      </SidebarContent>

      {/* ── Footer ── */}
      <SidebarFooter className="border-t border-white/5 p-3 bg-black group-data-[collapsible=icon]:p-2">
        <SidebarMenu className="gap-0.5">
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={toggleSidebar}
              className="text-gray-500 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/5 h-auto p-2.5 rounded-xl tracking-wide group-data-[collapsible=icon]:justify-center"
            >
              <PanelLeft
                className={cn(
                  "h-4 w-4 shrink-0 transition-transform",
                  state === "collapsed" && "rotate-180",
                )}
              />
              <span className="uppercase tracking-wide text-xs group-data-[collapsible=icon]:hidden ml-2.5">
                {state === "expanded" ? "Collapse" : ""}
              </span>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={() => router.push("/")}
              className="text-gray-500 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/5 h-auto p-2.5 rounded-xl tracking-wide group-data-[collapsible=icon]:justify-center"
            >
              <Home className="h-4 w-4 shrink-0" />
              <span className="uppercase tracking-wide text-xs group-data-[collapsible=icon]:hidden ml-2.5">
                Home
              </span>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={handleLogout}
              className="text-red-500/60 hover:text-red-400 hover:bg-red-500/5 border border-transparent hover:border-red-500/15 h-auto p-2.5 rounded-xl tracking-wide group-data-[collapsible=icon]:justify-center"
            >
              <LogOut className="h-4 w-4 shrink-0" />
              <span className="uppercase tracking-wide text-xs group-data-[collapsible=icon]:hidden ml-2.5">
                Sign Out
              </span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
