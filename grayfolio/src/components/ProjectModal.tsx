import React, { useState } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Code, Layers, Zap, Copy, Check, Eye } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'html' | 'css' | 'js'>('overview');
  const [copied, setCopied] = useState(false);

  if (!project) return null;

  const handleCopySummary = () => {
    const summary = `${project.title}\n${project.tagline}\n\nTech Stack: ${project.tags.join(', ')}\n\nHTML: ${project.htmlHighlights.join('; ')}\nCSS: ${project.cssHighlights.join('; ')}\nJavaScript: ${project.jsHighlights.join('; ')}`;
    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      id="project-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="project-modal-container"
        className="relative w-full max-w-4xl bg-zinc-900 border border-zinc-700 rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="bg-zinc-850 px-6 py-4 border-b border-zinc-750 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xs px-2.5 py-1 rounded-md bg-zinc-800 border border-zinc-700 text-zinc-300 font-mono">
              {project.categoryLabel}
            </span>
            {project.metrics && (
              <span className="text-xs px-2.5 py-1 rounded-md bg-zinc-800 border border-zinc-700 text-emerald-400 font-mono font-medium">
                {project.metrics.label}: {project.metrics.value}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              id="btn-modal-copy-summary"
              onClick={handleCopySummary}
              className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-750 text-zinc-300 border border-zinc-700 text-xs flex items-center gap-1.5 transition-colors"
              title="Copy architectural summary"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy Specs'}</span>
            </button>

            <button
              type="button"
              id="btn-modal-close"
              onClick={onClose}
              className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-750 text-zinc-400 hover:text-white border border-zinc-700 transition-colors"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Header Body */}
        <div className="p-6 sm:p-8 border-b border-zinc-800 text-left">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-100 tracking-tight">
            {project.title}
          </h3>
          <p className="text-base sm:text-lg text-zinc-400 mt-2 leading-relaxed">
            {project.tagline}
          </p>

          <div className="flex flex-wrap gap-2 mt-4">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-md bg-zinc-800 text-xs font-mono text-zinc-300 border border-zinc-700/80"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Technical Deep Dive Tabs */}
        <div className="bg-zinc-850/70 px-6 pt-3 border-b border-zinc-800 flex items-center gap-2 overflow-x-auto">
          <button
            type="button"
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 rounded-t-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
              activeTab === 'overview'
                ? 'bg-zinc-900 text-zinc-100 border-t-2 border-zinc-300 border-x border-zinc-750'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Architecture Overview</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('html')}
            className={`px-4 py-2 rounded-t-lg text-xs font-semibold font-mono transition-all flex items-center gap-1.5 ${
              activeTab === 'html'
                ? 'bg-zinc-900 text-zinc-100 border-t-2 border-zinc-300 border-x border-zinc-750'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Code className="w-3.5 h-3.5 text-orange-400" />
            <span>HTML5 Structure</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('css')}
            className={`px-4 py-2 rounded-t-lg text-xs font-semibold font-mono transition-all flex items-center gap-1.5 ${
              activeTab === 'css'
                ? 'bg-zinc-900 text-zinc-100 border-t-2 border-zinc-300 border-x border-zinc-750'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-blue-400" />
            <span>CSS3 &amp; Grid</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('js')}
            className={`px-4 py-2 rounded-t-lg text-xs font-semibold font-mono transition-all flex items-center gap-1.5 ${
              activeTab === 'js'
                ? 'bg-zinc-900 text-zinc-100 border-t-2 border-zinc-300 border-x border-zinc-750'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Zap className="w-3.5 h-3.5 text-yellow-400" />
            <span>JavaScript Logic</span>
          </button>
        </div>

        {/* Tab Content Panels */}
        <div className="p-6 sm:p-8 max-h-[440px] overflow-y-auto text-left">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-bold text-zinc-300 uppercase tracking-wider mb-2 font-mono">
                  Project Purpose &amp; Impact
                </h4>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Three Column Summary Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-zinc-850 border border-zinc-750 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-orange-400 font-mono">
                    <Code className="w-4 h-4" /> HTML5 Pillars
                  </div>
                  <ul className="text-xs text-zinc-400 space-y-1.5">
                    {project.htmlHighlights.slice(0, 2).map((h, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-zinc-600 mt-0.5">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-zinc-850 border border-zinc-750 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-blue-400 font-mono">
                    <Layers className="w-4 h-4" /> CSS3 Architecture
                  </div>
                  <ul className="text-xs text-zinc-400 space-y-1.5">
                    {project.cssHighlights.slice(0, 2).map((h, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-zinc-600 mt-0.5">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-zinc-850 border border-zinc-750 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-yellow-400 font-mono">
                    <Zap className="w-4 h-4" /> JavaScript Logic
                  </div>
                  <ul className="text-xs text-zinc-400 space-y-1.5">
                    {project.jsHighlights.slice(0, 2).map((h, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-zinc-600 mt-0.5">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'html' && (
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-zinc-200 flex items-center gap-2 font-mono">
                <Code className="w-4 h-4 text-orange-400" />
                Semantic HTML5 Implementation Details
              </h4>
              <ul className="space-y-3">
                {project.htmlHighlights.map((highlight, idx) => (
                  <li key={idx} className="p-3.5 rounded-xl bg-zinc-850 border border-zinc-750 flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-zinc-300 leading-snug">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === 'css' && (
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-zinc-200 flex items-center gap-2 font-mono">
                <Layers className="w-4 h-4 text-blue-400" />
                CSS3 Layout, Variables &amp; Animations
              </h4>
              <ul className="space-y-3">
                {project.cssHighlights.map((highlight, idx) => (
                  <li key={idx} className="p-3.5 rounded-xl bg-zinc-850 border border-zinc-750 flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-zinc-300 leading-snug">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === 'js' && (
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-zinc-200 flex items-center gap-2 font-mono">
                <Zap className="w-4 h-4 text-yellow-400" />
                Vanilla &amp; Modern JavaScript Architecture
              </h4>
              <ul className="space-y-3">
                {project.jsHighlights.map((highlight, idx) => (
                  <li key={idx} className="p-3.5 rounded-xl bg-zinc-850 border border-zinc-750 flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-zinc-300 leading-snug">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Modal Bottom Actions */}
        <div className="bg-zinc-850 px-6 py-4 border-t border-zinc-800 flex items-center justify-between flex-wrap gap-3">
          <div className="text-xs text-zinc-400">
            Engineered with zero third-party dependencies.
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-zinc-100 hover:bg-white text-zinc-900 text-xs font-bold transition-all shadow-sm"
            >
              Discuss Similar Project
            </a>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-750 text-zinc-300 text-xs font-semibold border border-zinc-700"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
