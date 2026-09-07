import React from 'react';
import { X, Printer, Download, Mail, MapPin, Globe, ExternalLink, Award, CheckCircle2 } from 'lucide-react';
import { DEVELOPER_PROFILE, EXPERIENCE_ITEMS, SKILL_CATEGORIES } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      id="resume-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="resume-modal-sheet"
        className="relative w-full max-w-3xl bg-zinc-900 border border-zinc-700 rounded-2xl shadow-2xl overflow-hidden my-6 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Controls */}
        <div className="bg-zinc-850 px-6 py-3.5 border-b border-zinc-750 flex items-center justify-between print:hidden">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-zinc-300">
              Curriculum Vitae • {DEVELOPER_PROFILE.name}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              id="btn-print-resume"
              onClick={handlePrint}
              className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-750 text-zinc-300 border border-zinc-700 text-xs flex items-center gap-1.5 transition-colors"
            >
              <Printer className="w-4 h-4 text-zinc-400" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            <button
              type="button"
              id="btn-close-resume"
              onClick={onClose}
              className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-750 text-zinc-400 hover:text-white border border-zinc-700 transition-colors"
              aria-label="Close resume dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Canvas */}
        <div className="p-6 sm:p-10 max-h-[80vh] overflow-y-auto space-y-8 bg-zinc-900 text-zinc-200">
          
          {/* Header */}
          <div className="border-b border-zinc-800 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <div>
                <h2 className="text-3xl font-extrabold text-zinc-100 tracking-tight">
                  {DEVELOPER_PROFILE.name}
                </h2>
                <div className="text-base text-zinc-400 font-medium mt-1">
                  {DEVELOPER_PROFILE.role} — {DEVELOPER_PROFILE.specialty}
                </div>
              </div>
              <div className="text-xs text-zinc-400 font-mono space-y-1 sm:text-right">
                <div>{DEVELOPER_PROFILE.email}</div>
                <div>{DEVELOPER_PROFILE.location}</div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-400 mt-4 leading-relaxed font-normal">
              {DEVELOPER_PROFILE.bio}
            </p>
          </div>

          {/* Core Technical Strengths */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider">
              Technical Competencies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl bg-zinc-850 border border-zinc-750 text-xs">
                <div className="font-bold text-orange-400 mb-1 font-mono">Semantic HTML5</div>
                <div className="text-zinc-400 leading-snug">
                  Document hierarchy, WAI-ARIA compliance, SEO tags, SVG, HTML5 Canvas, forms.
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-zinc-850 border border-zinc-750 text-xs">
                <div className="font-bold text-blue-400 mb-1 font-mono">CSS3 Architecture</div>
                <div className="text-zinc-400 leading-snug">
                  CSS Grid &amp; Subgrid, Flexbox, Keyframes, Custom Variables, Mobile-First responsive.
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-zinc-850 border border-zinc-750 text-xs">
                <div className="font-bold text-yellow-400 mb-1 font-mono">JavaScript (ES6+)</div>
                <div className="text-zinc-400 leading-snug">
                  DOM engine, Event listeners, Fetch API &amp; Async, LocalStorage, zero-bloat state.
                </div>
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider">
              Work Experience
            </h3>
            
            <div className="space-y-6">
              {EXPERIENCE_ITEMS.map((item) => (
                <div key={item.id} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                    <div className="font-bold text-sm text-zinc-100">
                      {item.role} <span className="text-zinc-400 font-normal">@ {item.company}</span>
                    </div>
                    <div className="text-xs text-zinc-400 font-mono">
                      {item.period} | {item.location}
                    </div>
                  </div>

                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>

                  <ul className="space-y-1 pt-1">
                    {item.achievements.map((ach, i) => (
                      <li key={i} className="text-xs text-zinc-300 flex items-start gap-2">
                        <span className="text-zinc-500 font-mono mt-0.5">•</span>
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="space-y-3 pt-2 border-t border-zinc-800">
            <h3 className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider">
              Education &amp; Credentials
            </h3>
            <div className="flex flex-col sm:flex-row justify-between gap-1 text-xs">
              <div className="text-zinc-200 font-medium">
                B.S. in Computer Science &amp; Interactive Media
              </div>
              <div className="text-zinc-400 font-mono">University of California • 2020</div>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="text-[11px] px-2 py-0.5 rounded bg-zinc-800 border border-zinc-700 text-zinc-300 font-mono">
                W3C Web Accessibility Certified
              </span>
              <span className="text-[11px] px-2 py-0.5 rounded bg-zinc-800 border border-zinc-700 text-zinc-300 font-mono">
                Google Web Vitals Master
              </span>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="bg-zinc-850 px-6 py-3 border-t border-zinc-750 flex items-center justify-between text-xs text-zinc-400">
          <span>References &amp; Code Samples Available on Request</span>
          <button
            type="button"
            onClick={onClose}
            className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-750 text-zinc-200 font-semibold border border-zinc-700"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
