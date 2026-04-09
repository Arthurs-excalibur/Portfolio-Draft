'use client';

import { useState } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import CustomCursor from '@/components/CustomCursor';
import SunflowerParticles from '@/components/SunflowerParticles';
import Navbar from '@/components/Navbar';
import MusicPlayer from '@/components/MusicPlayer';
import HeroSection from '@/sections/HeroSection';
import AboutSection from '@/sections/AboutSection';
import SkillsSection from '@/sections/SkillsSection';
import ProjectsSection from '@/sections/ProjectsSection';
import ContactSection from '@/sections/ContactSection';

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {/* Film grain overlay */}
      <div className="grain-overlay" />

      {/* Loading Screen */}
      <LoadingScreen onComplete={() => setLoaded(true)} />

      {/* Main app — rendered underneath loader */}
      <div
        className="min-h-screen"
        style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.5s ease 0.2s' }}
      >
        {/* Custom cursor */}
        <CustomCursor />

        {/* Floating sunflower particles */}
        <SunflowerParticles />

        {/* Navigation */}
        <Navbar />

        {/* BGM Player */}
        <MusicPlayer />

        {/* Page sections */}
        <main>
          <HeroSection />

          {/* Katana slash divider */}
          <div className="slash-divider mx-8 my-0" />

          <AboutSection />

          <div className="slash-divider mx-8 my-0" />

          <SkillsSection />

          <div className="slash-divider mx-8 my-0" />

          <ProjectsSection />

          <div className="slash-divider mx-8 my-0" />

          <ContactSection />
        </main>
      </div>
    </>
  );
}
