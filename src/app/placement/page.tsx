import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";
import { PlacementHero } from "@/components/placement/placement-hero";
import { PlacementSupport } from "@/components/placement/placement-support";
import { PlacementCertsCTA } from "@/components/placement/placement-certs-cta";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Placement & Careers | Zharnyx',
  description: 'Structured placement support, mock interviews, and career launch.',
};

export default function PlacementPage() {
  return (
    <main className="min-h-screen bg-[#000000] text-foreground flex flex-col">
      {/* <Navbar /> */}
      <div className="flex flex-col">
        <PlacementHero />
        <PlacementSupport />
        <PlacementCertsCTA />
      </div>
    </main>
  );
}
