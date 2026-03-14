// import { AnimatedBackground } from "@/components/shared/animated-background";
import { ProgramsHero } from "@/components/programs/programs-hero";
import { ProgramsPhases } from "@/components/programs/programs-phases";
import { ProgramsTracks } from "@/components/programs/programs-tracks";
import { ProgramsStandalone } from "@/components/programs/programs-standalone";
import { ProgramsCTA } from "@/components/programs/programs-cta";

export const metadata = {
  title: "Programs | Zharnyx Academy",
  description:
    "Explore our comprehensive cybersecurity training programs and tracks.",
};

export default function ProgramsPage() {
  return (
    <>
      <main className="relative z-10 min-h-screen bg-[#050505]">
        <ProgramsHero />
        <ProgramsPhases />
        <ProgramsTracks />
        <ProgramsStandalone />
        <ProgramsCTA />
      </main>
    </>
  );
}
