import { TermsHero } from "@/components/legal/terms-hero";
import { TermsContent } from "@/components/legal/terms-content";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Zharnyx',
  description: 'Zharnyx Cybersecurity Academy Terms & Conditions.',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#000000] text-foreground flex flex-col">
      <div className="flex flex-col">
        <TermsHero />
        <TermsContent />
      </div>
    </main>
  );
}
