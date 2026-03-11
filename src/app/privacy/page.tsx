import { PrivacyHero } from "@/components/legal/privacy-hero";
import { PrivacyContent } from "@/components/legal/privacy-content";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Zharnyx',
  description: 'Zharnyx Cybersecurity Academy Privacy Policy.',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#000000] text-foreground flex flex-col">
      <div className="flex flex-col">
        <PrivacyHero />
        <PrivacyContent />
      </div>
    </main>
  );
}
