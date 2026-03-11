import { CurriculumHero } from "@/components/curriculum/curriculum-hero";
import { CurriculumContent } from "@/components/curriculum/curriculum-content";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Full Curriculum | Zharnyx',
  description: 'Explore the 28-week curriculum detailing objectives, tools, and deliverables.',
};

export default function CurriculumPage() {
  return (
    <main className="min-h-screen bg-[#000000] text-foreground flex flex-col">
      <div className="flex flex-col">
        <CurriculumHero />
        <CurriculumContent />
      </div>
    </main>
  );
}
