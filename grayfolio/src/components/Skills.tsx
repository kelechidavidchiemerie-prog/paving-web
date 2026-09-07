import React, { useState } from 'react';
import { Code, Palette, Terminal, CheckCircle2, Award, ShieldCheck, Gauge, Smartphone, Sparkles } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return <Code className="w-5 h-5 text-orange-400" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-blue-400" />;
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-yellow-400" />;
      default:
        return <Code className="w-5 h-5 text-zinc-400" />;
    }
  };

  const engineeringPrinciples = [
    {
      title: 'Semantic DOM Hierarchy',
      desc: 'Clean <header>, <main>, <nav>, and <article> nodes providing effortless screen-reader accessibility and top search rankings.',
      icon: <Award className="w-5 h-5 text-zinc-300" />,
    },
    {
      title: 'Silky 60 FPS CSS Motion',
      desc: 'Hardware-accelerated CSS transform and opacity properties eliminating repaint bottlenecks on mobile devices.',
      icon: <Gauge className="w-5 h-5 text-zinc-300" />,
    },
    {
      title: 'Vanilla JS State & Events',
      desc: 'Lean event-driven architecture using event delegation and observer patterns without bloated runtimes.',
      icon: <ShieldCheck className="w-5 h-5 text-zinc-300" />,
    },
    {
      title: 'Fluid Responsive Scaling',
      desc: 'Mobile-first layouts leveraging modern CSS clamp(), container queries, and subgrid for seamless viewports.',
      icon: <Smartphone className="w-5 h-5 text-zinc-300" />,
    },
  ];

  return (
    <section id="skills" className="py-24 border-b border-zinc-800/60 bg-zinc-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-800 border border-zinc-700 text-xs font-mono text-zinc-300 mb-3">
            <Award className="w-3.5 h-3.5 text-zinc-400" />
            <span>Technical Mastery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-100">
            HTML5, CSS3 &amp; JavaScript Proficiency
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 mt-2 font-normal leading-relaxed">
            Specialized deep competence in web standards. I write code that is clean, accessible, 
            resilient across all browser engines, and easy for teams to maintain.
          </p>
        </div>

        {/* 3 Pillar Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 items-stretch">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              id={`skill-card-${idx}`}
              onClick={() => setActiveCategoryIndex(idx)}
              className={`rounded-2xl p-6 sm:p-7 border cursor-pointer transition-all duration-300 text-left flex flex-col justify-between ${
                activeCategoryIndex === idx
                  ? 'bg-zinc-850 border-zinc-600 shadow-xl shadow-black/30 ring-1 ring-zinc-500/40'
                  : 'bg-zinc-900 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-850/60'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center shadow-sm">
                    {getIcon(cat.iconName)}
                  </div>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-300">
                    {cat.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-zinc-100 mb-2">
                  {cat.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {cat.description}
                </p>
              </div>

              {/* Skills Progress Preview */}
              <div className="pt-6 space-y-3 border-t border-zinc-750/70 mt-6">
                {cat.skills.slice(0, 3).map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-zinc-300">{skill.name}</span>
                      <span className="text-zinc-500 font-mono">{skill.level}%</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-zinc-800 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-zinc-400 transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Deep Breakdown of Active Skill Category */}
        <div className="rounded-2xl bg-zinc-900 border border-zinc-750 p-6 sm:p-8 text-left shadow-xl">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-zinc-800 flex-wrap gap-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center">
                {getIcon(SKILL_CATEGORIES[activeCategoryIndex].iconName)}
              </div>
              <div>
                <h4 className="text-lg font-bold text-zinc-100">
                  {SKILL_CATEGORIES[activeCategoryIndex].title} — In-Depth Core Competencies
                </h4>
                <p className="text-xs text-zinc-400">
                  Detailed capabilities and practical patterns used in production codebases.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1 bg-zinc-800 p-1 rounded-lg border border-zinc-700">
              {SKILL_CATEGORIES.map((cat, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveCategoryIndex(idx)}
                  className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                    activeCategoryIndex === idx
                      ? 'bg-zinc-700 text-white shadow-sm'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  {cat.title.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SKILL_CATEGORIES[activeCategoryIndex].skills.map((skill, sIdx) => (
              <div
                key={sIdx}
                className="p-4 rounded-xl bg-zinc-850/80 border border-zinc-750 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h5 className="text-sm font-bold text-zinc-200">{skill.name}</h5>
                    <span className="text-[11px] text-zinc-400 font-mono">
                      Experience: {skill.experience}
                    </span>
                  </div>
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700">
                    {skill.level}% Mastery
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {skill.keyConcepts.map((concept, cIdx) => (
                    <span
                      key={cIdx}
                      className="text-[11px] px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 font-mono border border-zinc-700/60"
                    >
                      {concept}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Engineering Principles 4-Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {engineeringPrinciples.map((principle, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-zinc-850/60 border border-zinc-800 text-left space-y-2"
            >
              <div className="w-8 h-8 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center mb-3">
                {principle.icon}
              </div>
              <h5 className="text-sm font-bold text-zinc-200">{principle.title}</h5>
              <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                {principle.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
