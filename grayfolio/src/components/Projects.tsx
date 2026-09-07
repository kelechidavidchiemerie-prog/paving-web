import React, { useState } from 'react';
import { Layers, Code, Zap, ExternalLink, ArrowUpRight, CheckCircle2, Sparkles, Filter } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects', count: PROJECTS.length },
    { id: 'full-ui', label: 'Full Web Apps', count: PROJECTS.filter((p) => p.category === 'full-ui').length },
    { id: 'javascript', label: 'JavaScript Apps', count: PROJECTS.filter((p) => p.category === 'javascript').length },
    { id: 'html-css', label: 'HTML & CSS', count: PROJECTS.filter((p) => p.category === 'html-css').length },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 border-b border-zinc-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-left">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-800 border border-zinc-700 text-xs font-mono text-zinc-300 mb-3">
              <Layers className="w-3.5 h-3.5 text-zinc-400" />
              <span>Selected Portfolio Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-100">
              Web Applications &amp; Interfaces
            </h2>
            <p className="text-base sm:text-lg text-zinc-400 mt-2 font-normal leading-relaxed">
              Every project below is crafted with pure web fundamentals: semantic HTML5, 
              responsive modern CSS architectures, and vanilla/modern JavaScript with zero framework dependencies.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-zinc-850/80 p-1.5 rounded-xl border border-zinc-750 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                id={`filter-btn-${cat.id}`}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-zinc-750 text-white shadow-sm border border-zinc-650'
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800'
                }`}
              >
                <span>{cat.label}</span>
                <span className="ml-1.5 text-[10px] px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-400 font-mono">
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className="group flex flex-col rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40 overflow-hidden text-left"
            >
              {/* Card Header Visual with Mockup Header */}
              <div className="h-44 bg-zinc-850 p-4 relative overflow-hidden border-b border-zinc-800 flex flex-col justify-between">
                {/* Browser-style Dots */}
                <div className="flex items-center justify-between z-10">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                  </div>
                  {project.metrics && (
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-800/90 border border-zinc-700 text-emerald-400 font-medium">
                      {project.metrics.label}: {project.metrics.value}
                    </span>
                  )}
                </div>

                {/* Abstract Geometric Wireframe Graphics */}
                <div className="space-y-2 opacity-80 group-hover:opacity-100 transition-opacity">
                  <div className="h-2 w-1/3 bg-zinc-700 rounded" />
                  <div className="h-2 w-2/3 bg-zinc-750 rounded" />
                  <div className="grid grid-cols-3 gap-2 pt-2">
                    <div className="h-14 rounded-lg bg-zinc-800 border border-zinc-750/70 p-2 flex flex-col justify-end">
                      <div className="text-[9px] font-mono text-zinc-500">&lt;div/&gt;</div>
                    </div>
                    <div className="h-14 rounded-lg bg-zinc-800 border border-zinc-750/70 p-2 flex flex-col justify-end">
                      <div className="text-[9px] font-mono text-zinc-500">.grid</div>
                    </div>
                    <div className="h-14 rounded-lg bg-zinc-800 border border-zinc-750/70 p-2 flex flex-col justify-end">
                      <div className="text-[9px] font-mono text-zinc-500">() =&gt;</div>
                    </div>
                  </div>
                </div>

                {/* Category Pill */}
                <div className="absolute bottom-3 left-4">
                  <span className="text-[10px] font-mono font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-zinc-800 border border-zinc-700 text-zinc-300">
                    {project.categoryLabel}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-zinc-100 group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-zinc-400 mt-2 line-clamp-2 leading-relaxed">
                    {project.tagline}
                  </p>
                </div>

                {/* HTML/CSS/JS Key Highlights */}
                <div className="pt-2 space-y-1.5 border-t border-zinc-800/80 text-xs">
                  <div className="flex items-center gap-2 text-zinc-300">
                    <Code className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                    <span className="truncate">{project.htmlHighlights[0]}</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-300">
                    <Layers className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span className="truncate">{project.cssHighlights[0]}</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-300">
                    <Zap className="w-3.5 h-3.5 text-yellow-400 shrink-0" />
                    <span className="truncate">{project.jsHighlights[0]}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.slice(0, 3).map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] px-2 py-0.5 rounded bg-zinc-800/80 border border-zinc-750 text-zinc-400 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Card Actions */}
                <div className="pt-3 border-t border-zinc-800 flex items-center justify-between">
                  <button
                    type="button"
                    id={`btn-inspect-${project.id}`}
                    onClick={() => setActiveModalProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-200 hover:text-white px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-750 border border-zinc-700 transition-colors"
                  >
                    <span>Inspect Architecture</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveModalProject(project)}
                    className="text-xs text-zinc-400 hover:text-zinc-200 underline underline-offset-4"
                  >
                    View Specs
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-zinc-900/80 border border-zinc-750 flex flex-col sm:flex-row sm:items-center justify-between gap-6 text-left">
          <div className="space-y-1">
            <h4 className="text-lg font-bold text-zinc-100">
              Need a bespoke website built with clean, zero-bloat code?
            </h4>
            <p className="text-sm text-zinc-400">
              I can build high-fidelity marketing pages, custom interactive tools, or refactor existing sites to 100/100 Lighthouse performance.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 px-5 py-3 rounded-xl bg-zinc-100 hover:bg-white text-zinc-900 font-bold text-xs sm:text-sm transition-all shadow-md self-start sm:self-auto"
          >
            Start a Conversation
          </a>
        </div>

      </div>

      {/* Project Deep-Dive Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
