import { getCurrentSession } from "@/lib/auth/role-guard";
import { redirect } from "next/navigation";
import { SidebarTrigger } from "@/components/ui/sidebar";
import Link from "next/link";
import { ArrowLeft, Handshake } from "lucide-react";
import { db } from "@/lib/db";
import { coupon } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { PartnerOverview } from "@/components/partner/partner-overview";
import { PartnerCoupons } from "@/components/partner/partner-coupons";
import { PartnerSettings } from "@/components/partner/partner-settings";
import { PartnerCoupon } from "@/components/partner/columns";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function PartnerDashboardPage(props: {
  searchParams: SearchParams;
}) {
  const searchParams = await props.searchParams;
  const session = await getCurrentSession();

  if (
    !session ||
    (session.user.role !== "partner_agency" && session.user.role !== "admin")
  ) {
    redirect("/dashboard");
  }

  const partnerCoupons = await db.query.coupon.findMany({
    where: eq(coupon.partnerId, session.user.id),
  });

  const totalUses = partnerCoupons.reduce(
    (sum, c) => sum + (c.usedCount || 0),
    0,
  );
  const totalRevenue = partnerCoupons.reduce(
    (sum, c) => sum + (c.usedCount || 0) * (c.partnerRevenue || 0),
    0,
  );
  const section =
    typeof searchParams.section === "string"
      ? searchParams.section
      : "overview";

  const formattedCoupons: PartnerCoupon[] = partnerCoupons.map((c) => ({
    id: c.id,
    code: c.code,
    discountPercent: c.discountPercent,
    partnerRevenue: c.partnerRevenue || 0,
    usedCount: c.usedCount || 0,
    isActive: c.isActive !== false,
  }));

  return (
    <div className="flex min-h-screen w-full bg-black font-sans">
      {/* Ambient glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-green-600/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative flex flex-col flex-1 z-10 w-full px-4 sm:px-6 lg:px-10 pb-10 pt-4">
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-5 border-b border-white/5">
          <div className="flex items-start gap-3">
            <SidebarTrigger className="text-white hover:bg-white/10 md:hidden border border-white/10 rounded-xl h-10 w-10 shrink-0" />
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-3">
                <div className="p-1.5 rounded-lg bg-green-500/10 border border-green-500/20">
                  <Handshake size={14} className="text-green-400" />
                </div>
                <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-wide leading-none">
                  Partner Portal
                </h1>
              </div>
              <div className="flex items-center gap-2 ml-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-[0.15em]">
                  Agency: {session.user.name}
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

        {section === "overview" && (
          <PartnerOverview
            totalRevenue={totalRevenue}
            totalUses={totalUses}
            activeCouponsCount={partnerCoupons.length}
          />
        )}

        {section === "coupons" && (
          <PartnerCoupons initialCoupons={formattedCoupons} />
        )}

        {section === "settings" && (
          <PartnerSettings
            userName={session.user.name}
            userEmail={session.user.email}
          />
        )}
      </div>
    </div>
  );
}
