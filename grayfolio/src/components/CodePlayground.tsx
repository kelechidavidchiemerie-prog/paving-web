import React, { useState, useEffect } from 'react';
import { Terminal, Play, RotateCcw, Copy, Check, Sparkles, Layers, Code2, MonitorPlay } from 'lucide-react';
import { CODE_DEMOS } from '../data/portfolioData';
import { CodeDemo } from '../types';

export const CodePlayground: React.FC = () => {
  const [selectedDemoId, setSelectedDemoId] = useState<string>(CODE_DEMOS[0].id);
  const [activeTab, setActiveTab] = useState<'html' | 'css' | 'js'>('html');
  const [copied, setCopied] = useState(false);
  
  // Editable code buffers
  const [htmlCode, setHtmlCode] = useState(CODE_DEMOS[0].html);
  const [cssCode, setCssCode] = useState(CODE_DEMOS[0].css);
  const [jsCode, setJsCode] = useState(CODE_DEMOS[0].js);
  const [renderedSrcDoc, setRenderedSrcDoc] = useState('');

  const currentDemo = CODE_DEMOS.find((d) => d.id === selectedDemoId) || CODE_DEMOS[0];

  // Update buffers when selecting a preset
  const handleSelectDemo = (demo: CodeDemo) => {
    setSelectedDemoId(demo.id);
    setHtmlCode(demo.html);
    setCssCode(demo.css);
    setJsCode(demo.js);
  };

  // Reset to current demo defaults
  const handleReset = () => {
    setHtmlCode(currentDemo.html);
    setCssCode(currentDemo.css);
    setJsCode(currentDemo.js);
  };

  // Generate sandboxed iframe document
  useEffect(() => {
    const doc = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body {
            background-color: #121417;
            color: #e4e4e7;
            font-family: system-ui, -apple-system, sans-serif;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            padding: 24px;
            overflow: hidden;
          }
          ${cssCode}
        </style>
      </head>
      <body>
        ${htmlCode}
        <script>
          try {
            ${jsCode}
          } catch(err) {
            console.error('Runtime script error:', err);
          }
        </script>
      </body>
      </html>
    `;
    setRenderedSrcDoc(doc);
  }, [htmlCode, cssCode, jsCode]);

  const handleCopyCode = () => {
    let textToCopy = '';
    if (activeTab === 'html') textToCopy = htmlCode;
    else if (activeTab === 'css') textToCopy = cssCode;
    else textToCopy = jsCode;

    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="sandbox" className="py-24 border-b border-zinc-800/60 bg-zinc-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-800 border border-zinc-700 text-xs font-mono text-zinc-300 mb-3">
            <MonitorPlay className="w-3.5 h-3.5 text-zinc-400" />
            <span>Interactive Code Sandbox</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-100">
            Live HTML, CSS &amp; JavaScript Playground
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 mt-2 font-normal leading-relaxed">
            Test the interactive fundamentals in action. Switch presets, inspect the semantic markup, 
            style definitions, and vanilla JavaScript logic, or tweak the code directly to see the live preview update.
          </p>
        </div>

        {/* Preset Selector Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {CODE_DEMOS.map((demo) => (
            <button
              key={demo.id}
              type="button"
              onClick={() => handleSelectDemo(demo)}
              id={`btn-preset-${demo.id}`}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center gap-2 ${
                selectedDemoId === demo.id
                  ? 'bg-zinc-800 text-zinc-100 border border-zinc-650 shadow-sm'
                  : 'bg-zinc-850/60 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 border border-zinc-800'
              }`}
            >
              <Code2 className="w-4 h-4 text-zinc-400" />
              <span>{demo.title}</span>
            </button>
          ))}
        </div>

        {/* Main Sandbox Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column: Code Editor */}
          <div className="lg:col-span-7 flex flex-col rounded-2xl bg-zinc-900 border border-zinc-750 shadow-xl overflow-hidden">
            {/* Editor Top Bar */}
            <div className="bg-zinc-850 px-4 py-3 border-b border-zinc-750 flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="text-xs text-zinc-300 font-mono font-medium ml-2">
                  {currentDemo.title}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleReset}
                  id="btn-sandbox-reset"
                  className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-750 text-zinc-300 text-xs font-medium border border-zinc-700 transition-colors"
                  title="Reset code to original demo"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Reset</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopyCode}
                  id="btn-sandbox-copy"
                  className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-750 text-zinc-300 text-xs font-medium border border-zinc-700 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-zinc-400" />
                      <span>Copy {activeTab.toUpperCase()}</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Language Sub-Tabs */}
            <div className="bg-zinc-900/90 px-4 pt-2 border-b border-zinc-800 flex items-center gap-2">
              {(['html', 'css', 'js'] as const).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  id={`tab-sandbox-${tab}`}
                  className={`px-4 py-2 rounded-t-lg text-xs font-mono font-semibold transition-all ${
                    activeTab === tab
                      ? 'bg-zinc-950 text-zinc-100 border-t-2 border-zinc-400 border-x border-zinc-750'
                      : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-850'
                  }`}
                >
                  {tab === 'html' ? 'index.html' : tab === 'css' ? 'styles.css' : 'script.js'}
                </button>
              ))}
            </div>

            {/* Textarea Editor Area */}
            <div className="relative flex-1 bg-zinc-950 min-h-[380px] p-4 font-mono text-xs">
              {activeTab === 'html' && (
                <textarea
                  id="sandbox-textarea-html"
                  value={htmlCode}
                  onChange={(e) => setHtmlCode(e.target.value)}
                  className="w-full h-full min-h-[360px] bg-transparent text-zinc-200 outline-none resize-none font-mono leading-relaxed"
                  spellCheck={false}
                />
              )}
              {activeTab === 'css' && (
                <textarea
                  id="sandbox-textarea-css"
                  value={cssCode}
                  onChange={(e) => setCssCode(e.target.value)}
                  className="w-full h-full min-h-[360px] bg-transparent text-zinc-200 outline-none resize-none font-mono leading-relaxed"
                  spellCheck={false}
                />
              )}
              {activeTab === 'js' && (
                <textarea
                  id="sandbox-textarea-js"
                  value={jsCode}
                  onChange={(e) => setJsCode(e.target.value)}
                  className="w-full h-full min-h-[360px] bg-transparent text-zinc-200 outline-none resize-none font-mono leading-relaxed"
                  spellCheck={false}
                />
              )}
            </div>

            {/* Editor Helper Note */}
            <div className="bg-zinc-900 px-4 py-2 border-t border-zinc-800 text-[11px] text-zinc-400 flex items-center justify-between font-mono">
              <span>💡 You can edit code in real-time</span>
              <span>Sandboxed Execution</span>
            </div>
          </div>

          {/* Right Column: Live Rendered Output */}
          <div className="lg:col-span-5 flex flex-col rounded-2xl bg-zinc-900 border border-zinc-750 shadow-xl overflow-hidden">
            {/* Preview Header */}
            <div className="bg-zinc-850 px-4 py-3 border-b border-zinc-750 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs text-zinc-200 font-semibold">Live Sandbox Output</span>
              </div>
              <span className="text-xs text-zinc-400 font-mono">100% Client-Side</span>
            </div>

            {/* Iframe Safe Preview */}
            <div className="flex-1 bg-[#121417] min-h-[380px] relative overflow-hidden flex items-center justify-center p-2">
              <iframe
                id="sandbox-live-iframe"
                title="Sandbox Preview"
                srcDoc={renderedSrcDoc}
                sandbox="allow-scripts"
                className="w-full h-full min-h-[380px] border-0 rounded-lg bg-transparent"
              />
            </div>

            {/* Preview Description Bar */}
            <div className="bg-zinc-900 p-4 border-t border-zinc-800 text-left">
              <div className="text-xs font-bold text-zinc-300 mb-1">
                {currentDemo.title}
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                {currentDemo.description}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
