import { HeroSection } from "@/components/home/hero-section";
import { WhyZharnyxSection } from "@/components/home/why-zharnyx-section";
import { ChooseYourTrackSection } from "@/components/home/choose-your-track-section";
import { ArchitectureSection } from "@/components/home/architecture-section";
import { MasterPlanSection } from "@/components/home/master-plan-section";
import { WhoIsThisForSection } from "@/components/home/who-is-this-for-section";
import { FoundersSection } from "@/components/home/founders-section";
import { FaqSection } from "@/components/home/faq-section";
import { AboutCTASection } from "@/components/home/about-cta-section";

export const dynamic = "force-dynamic";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <WhyZharnyxSection />
      <ChooseYourTrackSection />
      <ArchitectureSection />
      <MasterPlanSection />
      <WhoIsThisForSection />
      <FoundersSection />
      <FaqSection />
      <AboutCTASection />
    </>
  );
}
