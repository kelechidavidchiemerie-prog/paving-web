import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { EXPERIENCE_ITEMS, TESTIMONIALS } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);

  const nextTestimonial = () => {
    setActiveTestimonialIdx((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonialIdx((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section id="experience" className="py-24 border-b border-zinc-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-800 border border-zinc-700 text-xs font-mono text-zinc-300 mb-3">
            <Briefcase className="w-3.5 h-3.5 text-zinc-400" />
            <span>Career History &amp; Impact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-100">
            Work Experience &amp; Milestones
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 mt-2 font-normal leading-relaxed">
            Delivering production-grade frontend solutions, transforming complex designs into 
            maintainable code, and driving measurable performance improvements.
          </p>
        </div>

        {/* Timeline List */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 md:before:left-8 before:w-0.5 before:bg-zinc-800 mb-20 text-left">
          {EXPERIENCE_ITEMS.map((item, idx) => (
            <div
              key={item.id}
              className="relative pl-10 md:pl-16 group"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute left-2.5 md:left-6.5 top-1.5 -translate-x-1/2 w-4 h-4 rounded-full bg-zinc-800 border-2 border-zinc-500 group-hover:border-zinc-300 group-hover:bg-zinc-200 transition-colors shadow-sm" />

              <div className="rounded-2xl bg-zinc-900 border border-zinc-800 group-hover:border-zinc-700 p-6 sm:p-7 transition-all shadow-md">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-zinc-100">
                      {item.role}
                    </h3>
                    <div className="text-sm font-semibold text-zinc-300">
                      {item.company}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-400">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                      {item.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                      {item.location}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-zinc-400 mb-4 leading-relaxed">
                  {item.description}
                </p>

                {/* Achievements List */}
                <div className="space-y-2 mb-5">
                  {item.achievements.map((ach, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{ach}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 pt-3 border-t border-zinc-800">
                  {item.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md bg-zinc-850 border border-zinc-750 text-xs font-mono text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Client Testimonials Section */}
        <div className="rounded-2xl bg-zinc-900 border border-zinc-750 p-6 sm:p-10 text-left shadow-xl relative overflow-hidden">
          <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-800 border border-zinc-700 text-xs font-mono text-zinc-300 mb-2">
                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                <span>Client &amp; Team Endorsements</span>
              </div>
              <h3 className="text-2xl font-bold text-zinc-100">
                What Collaborators Say
              </h3>
            </div>

            {/* Slider Navigation Controls */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prevTestimonial}
                id="btn-testimonial-prev"
                className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-750 text-zinc-300 border border-zinc-700 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs font-mono text-zinc-400 px-2">
                {activeTestimonialIdx + 1} / {TESTIMONIALS.length}
              </span>
              <button
                type="button"
                onClick={nextTestimonial}
                id="btn-testimonial-next"
                className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-750 text-zinc-300 border border-zinc-700 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Testimonial Card */}
          <div className="relative p-6 sm:p-8 rounded-xl bg-zinc-850/80 border border-zinc-750">
            <Quote className="w-8 h-8 text-zinc-600 mb-4 opacity-70" />
            
            <p className="text-base sm:text-lg text-zinc-200 italic leading-relaxed mb-6 font-normal">
              "{TESTIMONIALS[activeTestimonialIdx].content}"
            </p>

            <div className="flex items-center justify-between flex-wrap gap-4 pt-4 border-t border-zinc-750">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-zinc-750 border border-zinc-600 flex items-center justify-center font-bold text-sm text-zinc-200 uppercase font-mono">
                  {TESTIMONIALS[activeTestimonialIdx].name.substring(0, 2)}
                </div>
                <div>
                  <div className="font-bold text-sm text-zinc-100">
                    {TESTIMONIALS[activeTestimonialIdx].name}
                  </div>
                  <div className="text-xs text-zinc-400">
                    {TESTIMONIALS[activeTestimonialIdx].role} • {TESTIMONIALS[activeTestimonialIdx].company}
                  </div>
                </div>
              </div>

              {/* 5-star rating */}
              <div className="flex items-center gap-1">
                {[...Array(TESTIMONIALS[activeTestimonialIdx].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
