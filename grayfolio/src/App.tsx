/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { CodePlayground } from './components/CodePlayground';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [grayTone, setGrayTone] = useState<string>('slate');

  // Map gray tone to background color hex
  const grayThemeStyles: Record<string, { bg: string; canvasClass: string }> = {
    slate: { bg: '#181a20', canvasClass: 'bg-[#181a20]' },
    zinc: { bg: '#18181b', canvasClass: 'bg-[#18181b]' },
    neutral: { bg: '#202226', canvasClass: 'bg-[#202226]' },
    titanium: { bg: '#262a33', canvasClass: 'bg-[#262a33]' },
  };

  const currentTheme = grayThemeStyles[grayTone] || grayThemeStyles.slate;

  // Active section scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'projects', 'sandbox', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      id="app-root-container"
      className={`min-h-screen text-zinc-100 selection:bg-zinc-700 selection:text-white transition-colors duration-500 ${currentTheme.canvasClass}`}
      style={{ backgroundColor: currentTheme.bg }}
    >
      {/* Sticky Top Navbar */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        activeSection={activeSection}
        grayTone={grayTone}
        onChangeGrayTone={setGrayTone}
      />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <Skills />
        <Projects />
        <CodePlayground />
        <Experience />
        <Contact />
      </main>

      {/* Site Footer */}
      <Footer />

      {/* Full Developer Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
