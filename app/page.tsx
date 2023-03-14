'use client';
import AboutSection from '@/components/AboutSection';
import Counter from '@/components/Counter';
import FeaturesSection from '@/components/FeaturesSection ';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <FeaturesSection />
      <Counter />
    </main>
  );
}
