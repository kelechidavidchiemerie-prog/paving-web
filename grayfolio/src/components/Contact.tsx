import React, { useState } from 'react';
import { Mail, Send, Copy, Check, MapPin, Clock, Github, Linkedin, Twitter, Sparkles, CheckCircle2, MessageSquare } from 'lucide-react';
import { DEVELOPER_PROFILE } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'New Custom Website',
    budget: '$3,000 - $6,000',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(DEVELOPER_PROFILE.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 900);
  };

  return (
    <section id="contact" className="py-24 border-b border-zinc-800/60 bg-zinc-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-800 border border-zinc-700 text-xs font-mono text-zinc-300 mb-3">
            <Mail className="w-3.5 h-3.5 text-zinc-400" />
            <span>Initiate Collaboration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-100">
            Let's Build Something Exceptional
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 mt-2 font-normal leading-relaxed">
            Have a project in mind, need an experienced HTML/CSS/JavaScript developer, or want to audit your website's performance? 
            Drop a message or reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Info, Socials & Timezone */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-750 shadow-lg space-y-4">
              <div className="text-xs font-bold text-zinc-400 uppercase tracking-wider font-mono">
                Direct Contact
              </div>
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="font-mono text-sm sm:text-base text-zinc-100 font-semibold break-all">
                  {DEVELOPER_PROFILE.email}
                </div>
                <button
                  type="button"
                  id="btn-copy-contact-email"
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-750 text-zinc-300 text-xs font-medium border border-zinc-700 flex items-center gap-1.5 transition-colors"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-zinc-400" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Feel free to email directly regarding contract roles, project estimates, or technical advisory.
              </p>
            </div>

            {/* Availability & Location Card */}
            <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-750 shadow-lg space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-zinc-300" />
                </div>
                <div>
                  <div className="text-sm font-bold text-zinc-200">Location &amp; Remote</div>
                  <div className="text-xs text-zinc-400">{DEVELOPER_PROFILE.location}</div>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-zinc-800">
                <div className="w-9 h-9 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center">
                  <Clock className="w-4 h-4 text-zinc-300" />
                </div>
                <div>
                  <div className="text-sm font-bold text-zinc-200">Typical Turnaround</div>
                  <div className="text-xs text-zinc-400">Responses within 2 to 4 business hours</div>
                </div>
              </div>
            </div>

            {/* Social Channels */}
            <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-750 shadow-lg">
              <div className="text-xs font-bold text-zinc-400 uppercase tracking-wider font-mono mb-4">
                Code &amp; Professional Profiles
              </div>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={DEVELOPER_PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-zinc-850 hover:bg-zinc-800 border border-zinc-750 text-zinc-300 hover:text-white flex items-center gap-2.5 text-xs font-medium transition-colors"
                >
                  <Github className="w-4 h-4 text-zinc-400" />
                  <span>GitHub</span>
                </a>
                <a
                  href={DEVELOPER_PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-zinc-850 hover:bg-zinc-800 border border-zinc-750 text-zinc-300 hover:text-white flex items-center gap-2.5 text-xs font-medium transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-zinc-400" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={DEVELOPER_PROFILE.codepen}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-zinc-850 hover:bg-zinc-800 border border-zinc-750 text-zinc-300 hover:text-white flex items-center gap-2.5 text-xs font-medium transition-colors"
                >
                  <Sparkles className="w-4 h-4 text-zinc-400" />
                  <span>CodePen</span>
                </a>
                <a
                  href={DEVELOPER_PROFILE.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-zinc-850 hover:bg-zinc-800 border border-zinc-750 text-zinc-300 hover:text-white flex items-center gap-2.5 text-xs font-medium transition-colors"
                >
                  <Twitter className="w-4 h-4 text-zinc-400" />
                  <span>Twitter / X</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-zinc-900 border border-zinc-750 p-6 sm:p-8 shadow-xl text-left">
              {!formSubmitted ? (
                <form id="portfolio-contact-form" onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
                    <h3 className="text-xl font-bold text-zinc-100 flex items-center gap-2">
                      <MessageSquare className="w-5 h-5 text-zinc-400" />
                      Send a Message
                    </h3>
                    <span className="text-xs text-zinc-400 font-mono">Status: Ready</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className="block text-xs font-semibold text-zinc-300">
                        Your Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Jordan Miller"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-850 border border-zinc-750 text-zinc-100 placeholder-zinc-500 text-sm focus:outline-none focus:border-zinc-400 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="block text-xs font-semibold text-zinc-300">
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="jordan@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-850 border border-zinc-750 text-zinc-100 placeholder-zinc-500 text-sm focus:outline-none focus:border-zinc-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-project-type" className="block text-xs font-semibold text-zinc-300">
                        Project Scope
                      </label>
                      <select
                        id="contact-project-type"
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-850 border border-zinc-750 text-zinc-100 text-sm focus:outline-none focus:border-zinc-400 transition-colors"
                      >
                        <option value="New Custom Website">New Custom Website</option>
                        <option value="Landing Page & Micro-Interactions">Landing Page &amp; Motion</option>
                        <option value="Vanilla JS Web Tool / App">Vanilla JS Web Tool</option>
                        <option value="Performance & a11y Audit">Performance &amp; a11y Audit</option>
                        <option value="Full-Time / Contract Role">Full-Time / Contract Role</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-budget" className="block text-xs font-semibold text-zinc-300">
                        Estimated Budget
                      </label>
                      <select
                        id="contact-budget"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-850 border border-zinc-750 text-zinc-100 text-sm focus:outline-none focus:border-zinc-400 transition-colors"
                      >
                        <option value="< $3,000">&lt; $3,000</option>
                        <option value="$3,000 - $6,000">$3,000 - $6,000</option>
                        <option value="$6,000 - $12,000">$6,000 - $12,000</option>
                        <option value="$12,000+">$12,000+</option>
                        <option value="Salaried Position">Salaried Position</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="block text-xs font-semibold text-zinc-300">
                      Project Details or Objectives <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your site goals, timeline, and design references..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-850 border border-zinc-750 text-zinc-100 placeholder-zinc-500 text-sm focus:outline-none focus:border-zinc-400 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    id="btn-submit-contact"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-zinc-100 hover:bg-white text-zinc-900 font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-70 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-zinc-900 border-t-transparent rounded-full animate-spin" />
                        <span>Sending Transmission...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div className="py-12 px-4 text-center space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-100">
                    Message Dispatched Successfully!
                  </h3>
                  <p className="text-sm text-zinc-400 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-zinc-200">{formData.name}</strong>. I've received your note regarding "{formData.projectType}" and will follow up at <strong className="text-zinc-200">{formData.email}</strong> shortly.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          projectType: 'New Custom Website',
                          budget: '$3,000 - $6,000',
                          message: '',
                        });
                      }}
                      className="px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-750 text-zinc-300 text-xs font-semibold border border-zinc-700 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
