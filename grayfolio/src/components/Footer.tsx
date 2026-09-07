import React from 'react';
import { Code2, ArrowUp, Github, Linkedin, Twitter, Sparkles, Heart } from 'lucide-react';
import { DEVELOPER_PROFILE } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="site-footer" className="bg-zinc-950 border-t border-zinc-800 text-zinc-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-zinc-850 text-left">
          
          {/* Brand Col */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-zinc-850 border border-zinc-750 flex items-center justify-center text-zinc-200">
                <Code2 className="w-5 h-5" />
              </div>
              <div className="text-base font-bold text-zinc-100 tracking-tight">
                {DEVELOPER_PROFILE.name}
              </div>
            </div>

            <p className="text-sm text-zinc-400 max-w-md leading-relaxed font-normal">
              Specialized frontend web developer crafting accessible, responsive, and blazing-fast user interfaces with pure HTML, modern CSS, and clean JavaScript.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-xs text-zinc-400 font-mono">
                Currently open to select freelance projects and full-time opportunities.
              </span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono font-bold text-zinc-200 uppercase tracking-wider">
              Navigation
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-zinc-200 transition-colors">
                  About &amp; Overview
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-zinc-200 transition-colors">
                  HTML/CSS/JS Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-zinc-200 transition-colors">
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="#sandbox" className="hover:text-zinc-200 transition-colors">
                  Interactive Sandbox
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-zinc-200 transition-colors">
                  Career Experience
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-zinc-200 transition-colors">
                  Get in Touch
                </a>
              </li>
            </ul>
          </div>

          {/* Tech Principles & Gray Aesthetic */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono font-bold text-zinc-200 uppercase tracking-wider">
              Core Principles
            </div>
            <ul className="space-y-2 text-xs text-zinc-400 font-mono">
              <li>✓ 100% Semantic HTML5</li>
              <li>✓ Subgrid &amp; Container Queries</li>
              <li>✓ Hardware-accelerated CSS</li>
              <li>✓ Zero Framework Bloat</li>
              <li>✓ WCAG 2.1 AA Compliance</li>
            </ul>

            <div className="pt-2">
              <button
                type="button"
                id="btn-footer-back-to-top"
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-xs px-3.5 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-850 text-zinc-300 border border-zinc-800 transition-colors"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Back to Top</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            &copy; {new Date().getFullYear()} {DEVELOPER_PROFILE.name}. Built with HTML, CSS, JavaScript &amp; modern web standards.
          </div>

          <div className="flex items-center gap-4">
            <a
              href={DEVELOPER_PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-300 transition-colors"
            >
              GitHub
            </a>
            <a
              href={DEVELOPER_PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-300 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={DEVELOPER_PROFILE.codepen}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-300 transition-colors"
            >
              CodePen
            </a>
            <a
              href={DEVELOPER_PROFILE.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-300 transition-colors"
            >
              Twitter
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
