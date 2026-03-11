import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";
import { BlogHero } from "@/components/blog/blog-hero";
import { BlogGrid } from "@/components/blog/blog-grid";
import { NewsletterSection } from "@/components/blog/newsletter-section";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Zharnyx',
  description: 'Cybersecurity insights, career guides, and tutorials.',
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#000000] text-foreground flex flex-col">
      {/* <Navbar /> */}
      <div className="flex-1">
        <BlogHero />
        <BlogGrid />
        <NewsletterSection />
      </div>
      {/* <Footer /> */}
    </main>
  );
}
