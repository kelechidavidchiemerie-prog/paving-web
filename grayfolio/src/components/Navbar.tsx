import React, { useState, useEffect } from 'react';
import { Code2, Menu, X, FileText, Send, Sparkles, Check, Copy } from 'lucide-react';
import { DEVELOPER_PROFILE } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
  activeSection: string;
  grayTone: string;
  onChangeGrayTone: (tone: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenResume,
  activeSection,
  grayTone,
  onChangeGrayTone,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Live Sandbox', href: '#sandbox' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  const grayOptions = [
    { id: 'slate', name: 'Slate Gray', hex: '#181a20' },
    { id: 'zinc', name: 'Deep Zinc', hex: '#18181b' },
    { id: 'neutral', name: 'Charcoal', hex: '#202226' },
    { id: 'titanium', name: 'Titanium', hex: '#262a33' },
  ];

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(DEVELOPER_PROFILE.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-zinc-900/90 backdrop-blur-md border-b border-zinc-800/80 shadow-lg shadow-black/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#about"
          id="nav-logo"
          className="group flex items-center gap-3 text-zinc-100 hover:text-white transition-colors"
        >
          <div className="w-10 h-10 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-300 group-hover:border-zinc-500 group-hover:bg-zinc-750 transition-all shadow-sm">
            <Code2 className="w-5 h-5 text-zinc-200" />
          </div>
          <div>
            <div className="font-bold tracking-tight text-base flex items-center gap-1.5 text-zinc-100">
              <span>{DEVELOPER_PROFILE.name}</span>
              <span className="text-xs px-1.5 py-0.5 rounded bg-zinc-800 border border-zinc-700 text-zinc-400 font-mono">
                HTML • CSS • JS
              </span>
            </div>
            <div className="text-xs text-zinc-400 font-medium">Frontend Developer</div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav id="desktop-nav" className="hidden lg:flex items-center gap-1 bg-zinc-900/60 p-1.5 rounded-full border border-zinc-800/80">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.href}
                href={link.href}
                id={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-zinc-800 text-white shadow-sm border border-zinc-700'
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-850/60'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Action Controls & Gray Tone Switcher */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Gray Tone Palette Selector */}
          <div className="flex items-center gap-1.5 bg-zinc-900/70 border border-zinc-800 px-2.5 py-1.5 rounded-lg text-xs text-zinc-400">
            <span className="hidden xl:inline text-zinc-500 font-medium">Theme:</span>
            {grayOptions.map((opt) => (
              <button
                key={opt.id}
                id={`btn-gray-tone-${opt.id}`}
                onClick={() => onChangeGrayTone(opt.id)}
                title={`Switch to ${opt.name}`}
                className={`w-4 h-4 rounded-full border transition-all ${
                  grayTone === opt.id
                    ? 'ring-2 ring-zinc-400 border-white scale-110'
                    : 'border-zinc-600 hover:scale-105 opacity-80 hover:opacity-100'
                }`}
                style={{ backgroundColor: opt.hex }}
              />
            ))}
          </div>

          {/* View Resume Button */}
          <button
            type="button"
            id="btn-nav-resume"
            onClick={onOpenResume}
            className="flex items-center gap-1.5 text-xs sm:text-sm font-medium px-3.5 py-2 rounded-lg bg-zinc-800/80 hover:bg-zinc-800 text-zinc-200 border border-zinc-700 hover:border-zinc-600 transition-all"
          >
            <FileText className="w-4 h-4 text-zinc-400" />
            <span>Resume</span>
          </button>

          {/* Hire Me CTA Button */}
          <a
            href="#contact"
            id="btn-nav-hire"
            className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold px-4 py-2 rounded-lg bg-zinc-100 hover:bg-white text-zinc-900 shadow-sm hover:shadow-zinc-700/30 transition-all"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Hire Me</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            type="button"
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-zinc-800 border border-zinc-700 text-zinc-300 hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="lg:hidden bg-zinc-900 border-b border-zinc-800 px-4 pt-3 pb-6 mt-2 shadow-2xl space-y-3"
        >
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-base font-medium text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-zinc-800 flex flex-col gap-2.5">
            {/* Gray Tone Selector on Mobile */}
            <div className="flex items-center justify-between px-3 py-1 text-xs text-zinc-400">
              <span>Gray Tone Aesthetic</span>
              <div className="flex items-center gap-2">
                {grayOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => onChangeGrayTone(opt.id)}
                    className={`w-5 h-5 rounded-full border ${
                      grayTone === opt.id ? 'ring-2 ring-zinc-300 border-white' : 'border-zinc-600'
                    }`}
                    style={{ backgroundColor: opt.hex }}
                  />
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-zinc-800 text-zinc-200 border border-zinc-700 font-medium text-sm"
            >
              <FileText className="w-4 h-4 text-zinc-400" />
              <span>View Full Resume</span>
            </button>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-zinc-100 text-zinc-900 font-semibold text-sm"
            >
              <Send className="w-4 h-4" />
              <span>Get In Touch</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
