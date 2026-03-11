import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";
import { FoundationHero } from "@/components/foundation/foundation-hero";
import { FoundationCurriculum } from "@/components/foundation/foundation-curriculum";
import { FoundationCTA } from "@/components/foundation/foundation-cta";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Foundation Phase | Zharnyx',
  description: 'Master systems, networking, and Python scripting from the ground up.',
};

export default function FoundationPage() {
  return (
    <main className="min-h-screen bg-[#000000] text-foreground flex flex-col">
      {/* <Navbar /> */}
      <div className="flex flex-col">
        <FoundationHero />
        <FoundationCurriculum />
        <FoundationCTA />
      </div>
    </main>
  );
}
