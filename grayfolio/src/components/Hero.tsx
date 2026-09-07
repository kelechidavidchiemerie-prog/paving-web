import React, { useState } from 'react';
import {
  Code,
  ArrowRight,
  Sparkles,
  Terminal,
  CheckCircle2,
  Copy,
  ExternalLink,
  Layers,
  Zap,
  Globe,
  Check,
  Play
} from 'lucide-react';
import { DEVELOPER_PROFILE } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [activeCodeTab, setActiveCodeTab] = useState<'html' | 'css' | 'js'>('html');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [showLivePreview, setShowLivePreview] = useState(false);
  const [interactiveCounter, setInteractiveCounter] = useState(12);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(DEVELOPER_PROFILE.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const codeSnippets = {
    html: `<!-- Modern Semantic HTML5 Architecture -->
<header role="banner" class="site-header">
  <nav aria-label="Primary Navigation">
    <a href="#about" class="brand-link">Alex Vance</a>
    <ul class="nav-cluster">
      <li><a href="#skills">Skills</a></li>
      <li><a href="#projects">Work</a></li>
      <li><a href="#contact" class="btn-cta">Hire Me</a></li>
    </ul>
  </nav>
</header>
<main id="main-content">
  <article class="hero-showcase">
    <h1>Pixel-Perfect Frontend Craft</h1>
    <p>Zero dependencies when clean code does the job.</p>
  </article>
</main>`,
    css: `/* Modern CSS3 Grid & Fluid Variables */
:root {
  --bg-surface: #1e2229;
  --text-primary: #f4f4f5;
  --accent-cyan: #38bdf8;
  --radius-lg: 12px;
}

.hero-showcase {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: clamp(1rem, 3vw, 2.5rem);
  padding: 2.5rem;
  background-color: var(--bg-surface);
  border-radius: var(--radius-lg);
  border: 1px solid #333a46;
  backdrop-filter: blur(12px);
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.hero-showcase:hover {
  transform: translateY(-4px);
}`,
    js: `// Vanilla ES6+ Interactive Architecture
class ModernComponent {
  constructor(rootElement) {
    this.root = rootElement;
    this.state = { score: 98, active: true };
    this.init();
  }

  init() {
    this.render();
    this.bindEvents();
  }

  bindEvents() {
    this.root.addEventListener('click', (e) => {
      const target = e.target.closest('[data-action]');
      if (!target) return;
      this.handleAction(target.dataset.action);
    });
  }

  handleAction(action) {
    console.log(\`[Action Dispatched]: \${action}\`);
  }
}
export default ModernComponent;`
  };

  return (
    <section
      id="about"
      className="relative pt-28 sm:pt-36 pb-20 overflow-hidden border-b border-zinc-800/60"
    >
      {/* Subtle Gray Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-zinc-800/25 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Bio & CTAs */}
          <div className="lg:col-span-7 space-y-7 text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-800/90 border border-zinc-700/80 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-semibold text-zinc-300">
                Available for Frontend Roles & Contract Projects
              </span>
            </div>

            {/* Main Header */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-zinc-100 leading-[1.12]">
                Building fast, responsive websites with{' '}
                <span className="text-zinc-200 underline decoration-zinc-500 underline-offset-8">
                  HTML, CSS
                </span>{' '}
                &amp;{' '}
                <span className="text-white">JavaScript</span>.
              </h1>
              
              <p className="text-lg sm:text-xl text-zinc-400 leading-relaxed max-w-2xl font-normal">
                Hi, I'm <strong className="text-zinc-200 font-semibold">{DEVELOPER_PROFILE.name}</strong>. 
                I specialize in crafting high-speed, accessible, and responsive user interfaces without unnecessary framework bloat. 
                Every line of semantic markup, CSS animation, and vanilla JavaScript is built for peak performance.
              </p>
            </div>

            {/* Core Pillars Pill Row */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-zinc-800/80 border border-zinc-700 text-xs font-medium text-zinc-300">
                <Globe className="w-3.5 h-3.5 text-zinc-400" /> Semantic HTML5
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-zinc-800/80 border border-zinc-700 text-xs font-medium text-zinc-300">
                <Layers className="w-3.5 h-3.5 text-zinc-400" /> Modern CSS3 &amp; Grid
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-zinc-800/80 border border-zinc-700 text-xs font-medium text-zinc-300">
                <Zap className="w-3.5 h-3.5 text-zinc-400" /> Vanilla &amp; Modern JS
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-zinc-800/80 border border-zinc-700 text-xs font-medium text-zinc-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-zinc-400" /> WCAG 2.1 AA a11y
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#projects"
                id="hero-cta-projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-100 hover:bg-white text-zinc-900 font-semibold text-sm transition-all shadow-md hover:shadow-zinc-700/20 active:scale-[0.98]"
              >
                <span>Explore Featured Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#sandbox"
                id="hero-cta-sandbox"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-zinc-800 hover:bg-zinc-750 text-zinc-200 font-medium text-sm border border-zinc-700 hover:border-zinc-600 transition-all active:scale-[0.98]"
              >
                <Terminal className="w-4 h-4 text-zinc-400" />
                <span>Test Live Code Sandbox</span>
              </a>

              <button
                type="button"
                id="hero-copy-email"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl bg-zinc-850 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 font-medium text-sm border border-zinc-750 transition-all"
                title="Copy Alex's email address"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-zinc-800/80">
              {DEVELOPER_PROFILE.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-zinc-850/70 border border-zinc-800/90 text-left"
                >
                  <div className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100">
                    {stat.value}
                  </div>
                  <div className="text-xs text-zinc-400 mt-1 font-medium leading-snug">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Code & Preview Box */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-zinc-900 border border-zinc-750 shadow-2xl overflow-hidden text-left">
              {/* Terminal Window Header */}
              <div className="bg-zinc-850 px-4 py-3 border-b border-zinc-750 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="text-xs text-zinc-400 ml-2 font-mono flex items-center gap-1.5">
                    <Code className="w-3.5 h-3.5 text-zinc-400" />
                    <span>frontend-craft.{activeCodeTab}</span>
                  </span>
                </div>

                {/* Live Preview Toggle Button */}
                <button
                  type="button"
                  onClick={() => setShowLivePreview(!showLivePreview)}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
                    showLivePreview
                      ? 'bg-zinc-200 text-zinc-900'
                      : 'bg-zinc-750 hover:bg-zinc-700 text-zinc-300'
                  }`}
                  id="btn-hero-toggle-preview"
                >
                  <Play className="w-3 h-3" />
                  <span>{showLivePreview ? 'View Source' : 'Run Preview'}</span>
                </button>
              </div>

              {/* Language Switcher Tabs */}
              <div className="bg-zinc-900/90 px-3 pt-2 border-b border-zinc-800 flex items-center gap-1">
                {(['html', 'css', 'js'] as const).map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => {
                      setActiveCodeTab(tab);
                      setShowLivePreview(false);
                    }}
                    id={`btn-code-tab-${tab}`}
                    className={`px-3.5 py-1.5 rounded-t-lg text-xs font-mono font-semibold transition-all ${
                      activeCodeTab === tab && !showLivePreview
                        ? 'bg-zinc-800 text-zinc-100 border-t border-x border-zinc-700'
                        : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-850'
                    }`}
                  >
                    {tab.toUpperCase()}
                  </button>
                ))}
              </div>

              {/* Code Snippet View or Interactive Run Sandbox */}
              {!showLivePreview ? (
                <div className="p-4 bg-zinc-950 font-mono text-xs overflow-x-auto max-h-[360px] text-zinc-300 leading-relaxed selection:bg-zinc-700">
                  <pre>
                    <code>{codeSnippets[activeCodeTab]}</code>
                  </pre>
                </div>
              ) : (
                <div className="p-6 bg-zinc-950 min-h-[360px] flex flex-col justify-center items-center text-center">
                  <div className="w-full max-w-xs bg-zinc-850 border border-zinc-700 rounded-xl p-5 shadow-lg space-y-4">
                    <div className="flex items-center justify-between text-xs text-zinc-400 border-b border-zinc-750 pb-2">
                      <span className="font-semibold text-zinc-200">Interactive Component</span>
                      <span className="text-emerald-400 font-mono">Status: Active</span>
                    </div>

                    <div>
                      <div className="text-3xl font-extrabold text-zinc-100 font-mono">
                        {interactiveCounter}
                      </div>
                      <div className="text-xs text-zinc-400 mt-1">
                        Vanilla DOM State Engine
                      </div>
                    </div>

                    <div className="flex items-center justify-center gap-2">
                      <button
                        type="button"
                        onClick={() => setInteractiveCounter((prev) => Math.max(0, prev - 1))}
                        className="px-3 py-1.5 rounded-lg bg-zinc-750 hover:bg-zinc-700 text-zinc-200 text-xs font-bold border border-zinc-650"
                      >
                        -1
                      </button>
                      <button
                        type="button"
                        onClick={() => setInteractiveCounter(12)}
                        className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-750 text-zinc-400 text-xs font-semibold"
                      >
                        Reset
                      </button>
                      <button
                        type="button"
                        onClick={() => setInteractiveCounter((prev) => prev + 1)}
                        className="px-3 py-1.5 rounded-lg bg-zinc-200 hover:bg-white text-zinc-900 text-xs font-bold"
                      >
                        +1
                      </button>
                    </div>

                    <p className="text-[11px] text-zinc-400 italic">
                      Rendered with semantic markup, scoped CSS variables, and zero heavy dependencies.
                    </p>
                  </div>
                </div>
              )}

              {/* Terminal Footer Bar */}
              <div className="bg-zinc-900 px-4 py-2.5 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-400 font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Zero Bloat • Fast Load • Clean DOM</span>
                </div>
                <span className="text-zinc-500">UTF-8</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
