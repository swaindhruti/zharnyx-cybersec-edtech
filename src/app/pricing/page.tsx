import { PricingHero } from "@/components/pricing/hero-section";
import { PricingPackages } from "@/components/pricing/pricing-packages";
import { StandaloneModules } from "@/components/pricing/standalone-modules";
import { PricingFaq } from "@/components/pricing/pricing-faq";
import { PricingCTA } from "@/components/pricing/cta-section";

export const metadata = {
  title: "Pricing - Zharnyx",
  description: "Affordable By Design. All prices include 18% GST. No hidden fees.",
};

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-black overflow-hidden selection:bg-red-500/30">
      <div className="relative z-10">
        <PricingHero />
        <PricingPackages />
        <StandaloneModules />
        <PricingFaq />
        <PricingCTA />
      </div>
    </main>
  );
}
