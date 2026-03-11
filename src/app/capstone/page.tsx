import { CapstoneHero } from "@/components/capstone/capstone-hero";
import { CapstoneTracks } from "@/components/capstone/capstone-tracks";
import { CapstoneDeliverablesCTA } from "@/components/capstone/capstone-deliverables-cta";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Capstone Simulation | Zharnyx',
  description: '72-Hour Live-Fire Exercise. The ultimate test for all four tracks.',
};

export default function CapstonePage() {
  return (
    <main className="min-h-screen bg-[#000000] text-foreground flex flex-col">
      <div className="flex flex-col">
        <CapstoneHero />
        <CapstoneTracks />
        <CapstoneDeliverablesCTA />
      </div>
    </main>
  );
}
