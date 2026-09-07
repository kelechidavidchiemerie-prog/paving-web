import { Project, SkillCategory, CodeDemo, ExperienceItem, Testimonial } from '../types';

export const DEVELOPER_PROFILE = {
  name: 'Alex Vance',
  role: 'Frontend Web Developer',
  specialty: 'HTML5 • CSS3 • Modern JavaScript',
  location: 'San Francisco, CA (Open to Remote)',
  email: 'alex.vance.dev@gmail.com',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  codepen: 'https://codepen.io',
  twitter: 'https://twitter.com',
  bio: 'Specializing in clean, semantic HTML5, responsive CSS architectures, and vanilla/modern JavaScript. Passionate about building blazing-fast, accessible, and responsive web experiences without unnecessary framework bloat.',
  stats: [
    { label: 'Years Experience', value: '4+' },
    { label: 'Web Projects Built', value: '35+' },
    { label: 'Lighthouse Score Avg', value: '98%' },
    { label: 'Cross-browser tested', value: '100%' },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: 'omnistore-shop',
    title: 'OmniStore E-Commerce UI',
    category: 'full-ui',
    categoryLabel: 'Full Web App',
    tagline: 'High-performance storefront with pure JS state & fluid CSS grid',
    description: 'A responsive, zero-dependency e-commerce catalog featuring instant client-side product filtering, a sliding modal cart with localStorage persistence, dynamic coupon validation, and accessible keyboard navigation.',
    htmlHighlights: [
      'Semantic structure with <header>, <main>, <section>, <dialog> for cart modal',
      'Full ARIA roles, live regions for cart quantity updates, and accessible form labels',
      'Microdata schema tags for SEO optimization and product indexing'
    ],
    cssHighlights: [
      'CSS Grid layout with auto-fit minmax responsive product cards',
      'Custom CSS properties (variables) supporting instant dark/light themes',
      'CSS smooth transitions, skeleton loading shimmer animations, and hover zoom'
    ],
    jsHighlights: [
      'Modular vanilla JS with state management for cart items and totals',
      'Debounced live search and multi-facet filtering (category, price, rating)',
      'Web Storage API (localStorage) data persistence and custom event dispatching'
    ],
    tags: ['HTML5 Semantic', 'CSS Grid', 'Vanilla JS', 'LocalStorage', 'Responsive'],
    previewGradient: 'from-zinc-800 via-zinc-700 to-zinc-900',
    featured: true,
    metrics: { label: 'Speed Index', value: '0.8s' }
  },
  {
    id: 'typespeed-pro',
    title: 'TypeSpeed Pro - Benchmark App',
    category: 'javascript',
    categoryLabel: 'JavaScript App',
    tagline: 'Interactive typing speed and accuracy engine with real-time analytics',
    description: 'An interactive web-based typing speed tester that analyzes keypress intervals, calculates words-per-minute (WPM), computes real-time accuracy percentage, and generates performance graphs using HTML5 Canvas.',
    htmlHighlights: [
      'Accessible <meter> and <progress> bars for test progression',
      'Dynamically generated character spans for real-time cursor highlighting',
      'Keyboard-accessible controls without mouse dependency'
    ],
    cssHighlights: [
      'Monospace typography hierarchy with optical tracking and active caret blinking',
      'Smooth color interpolation for correct/incorrect keystrokes',
      'Pulsing visual indicators for active typing streaks'
    ],
    jsHighlights: [
      'Precise performance.now() microsecond timer engine',
      'Event delegation for keystrokes, backspace handling, and error rate computing',
      'Dynamic HTML5 Canvas drawing for real-time WPM fluctuation curve'
    ],
    tags: ['JavaScript ES6+', 'HTML5 Canvas', 'Event Loop', 'Audio API', 'CSS Keyframes'],
    previewGradient: 'from-neutral-800 via-stone-800 to-zinc-900',
    featured: true,
    metrics: { label: 'Keystroke Latency', value: '<2ms' }
  },
  {
    id: 'weathersphere-glass',
    title: 'WeatherSphere Forecast App',
    category: 'javascript',
    categoryLabel: 'JavaScript App',
    tagline: 'Interactive weather forecast UI powered by Fetch API & dynamic CSS',
    description: 'An interactive weather dashboard delivering 5-day forecasts, air quality index, hourly temperature scrubbers, and adaptive dynamic background gradients that shift according to current weather conditions and time of day.',
    htmlHighlights: [
      'Structured HTML5 weather cards with <time> elements and SVG vector weather symbols',
      'Accessible search bar with autocomplete suggestions dropdown',
      'Fallback content for offline states and geolocation permission denials'
    ],
    cssHighlights: [
      'Adaptive glassmorphism cards using backdrop-filter and subtle borders',
      'Pure CSS animated weather phenomena (falling raindrops, cloud drifts, sun rays)',
      'Fluid clamp() typography adapting seamlessly from mobile to 4K displays'
    ],
    jsHighlights: [
      'Asynchronous Fetch API with comprehensive try/catch and error fallbacks',
      'Browser Geolocation API integration with automatic reverse-geocoding',
      'Dynamic DOM manipulation updating hourly temperature timeline and humidity gauges'
    ],
    tags: ['Async/Await', 'Fetch API', 'Geolocation', 'CSS Animations', 'Glassmorphism'],
    previewGradient: 'from-zinc-700 via-zinc-800 to-zinc-950',
    featured: true,
    metrics: { label: 'API Response Time', value: '180ms' }
  },
  {
    id: 'zenith-landing-page',
    title: 'Zenith Studio - Creative Agency Site',
    category: 'html-css',
    categoryLabel: 'HTML & CSS',
    tagline: 'Editorial-grade portfolio with scroll-driven animations & micro-interactions',
    description: 'A modern, high-contrast creative studio landing page featuring sticky positioning, scroll-driven image reveals, responsive typography scale, and zero runtime JavaScript dependencies for the core layout.',
    htmlHighlights: [
      'Semantic structure with <header>, <article>, <figure>, <picture> with srcset',
      'Preloaded critical assets and optimal font display swapping for rapid paint',
      'ARIA navigation landmark standards passing all WCAG 2.1 AA audits'
    ],
    cssHighlights: [
      'CSS Subgrid for seamless multi-column alignment across irregular layout cards',
      'CSS @keyframes and scroll-driven animation timeline effects',
      'Custom styled interactive buttons with magnetic hover states and pseudo-elements'
    ],
    jsHighlights: [
      'IntersectionObserver API for performant lazy loading and entering reveals',
      'Accessible mobile menu hamburger toggle with Escape key listener',
      'Smooth scroll polyfill and active navigation section indicator'
    ],
    tags: ['Semantic HTML5', 'CSS Grid', 'CSS Variables', 'A11y Compliant', 'Mobile First'],
    previewGradient: 'from-zinc-850 via-zinc-800 to-neutral-900',
    featured: false,
    metrics: { label: 'Lighthouse Score', value: '100/100' }
  },
  {
    id: 'canvas-particle-sandbox',
    title: 'Neo-Particle Physics Playground',
    category: 'javascript',
    categoryLabel: 'JavaScript App',
    tagline: 'High-performance interactive 2D particle simulation running at 60 FPS',
    description: 'A canvas-based interactive simulation where users spawn particles, manipulate gravitational fields with cursor movements, toggle collision physics, and customize color schemes with real-time sliders.',
    htmlHighlights: [
      'Hardware-accelerated HTML5 <canvas> element responsive to container resizing',
      'Interactive control panel utilizing HTML5 range sliders, checkboxes, and buttons',
      'Semantic dialog element for presets and export options'
    ],
    cssHighlights: [
      'Floating HUD overlay with translucent backdrop blur and crisp border styling',
      'Custom stylized input range sliders with accent-color and webkit track styling',
      'Responsive control panel folding neatly into bottom drawer on mobile'
    ],
    jsHighlights: [
      'requestAnimationFrame game loop with delta-time calculation for silky 60 FPS',
      'Vector math calculations for gravity, friction, bounce elasticity, and mouse repulsion',
      'Object pooling pattern to eliminate garbage collection pauses'
    ],
    tags: ['HTML5 Canvas', 'Physics Engine', '60 FPS', 'ES6 Classes', 'RequestAnimationFrame'],
    previewGradient: 'from-zinc-800 via-neutral-800 to-stone-900',
    featured: false,
    metrics: { label: 'Frame Rate', value: '60 FPS' }
  },
  {
    id: 'formcraft-validator',
    title: 'FormCraft - Multi-Step Dynamic Form',
    category: 'html-css',
    categoryLabel: 'HTML & CSS',
    tagline: 'Accessible multi-step form wizard with real-time input verification',
    description: 'A multi-step onboarding wizard featuring real-time client-side regex validation, password strength meter, step progress indicator, file dropzone, and complete keyboard accessibility.',
    htmlHighlights: [
      'HTML5 constraint validation attributes (pattern, required, minlength, type="email")',
      'Accessible <fieldset> and <legend> groupings per form step',
      'Drag-and-drop file upload zone supporting both drag events and file input triggers'
    ],
    cssHighlights: [
      'Sliding step transitions using CSS transform: translateX() without layout shifts',
      'Dynamic input validation state styles (:valid, :invalid, :user-valid pseudo-classes)',
      'Custom radio and checkbox indicators built with pure CSS and SVG masks'
    ],
    jsHighlights: [
      'Form step state machine managing navigation history and previous/next states',
      'Real-time input sanitizer and debounced regex validation with custom error tooltips',
      'Session storage serialization allowing users to resume form after page refresh'
    ],
    tags: ['HTML5 Validation', 'CSS Transitions', 'Vanilla JS', 'Accessibility', 'UX Design'],
    previewGradient: 'from-zinc-900 via-zinc-800 to-neutral-850',
    featured: false,
    metrics: { label: 'Completion Rate', value: '94%' }
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'HTML5 Semantic Markup',
    badge: 'Structure & Accessibility',
    iconName: 'Code',
    description: 'Writing clean, semantic, and highly accessible document structures tailored for search engines, screen readers, and fast DOM rendering.',
    skills: [
      {
        name: 'Semantic Elements',
        level: 95,
        experience: '4+ years',
        keyConcepts: ['<main>, <article>, <nav>, <section>', 'Schema.org Microdata', 'Meaningful DOM Tree Hierarchy']
      },
      {
        name: 'Web Accessibility (WAI-ARIA)',
        level: 90,
        experience: '3+ years',
        keyConcepts: ['WCAG 2.1 AA Compliance', 'ARIA roles & live regions', 'Keyboard focus management', 'Screen reader testing']
      },
      {
        name: 'HTML5 APIs & Media',
        level: 88,
        experience: '3+ years',
        keyConcepts: ['<canvas> 2D rendering', 'Responsive <picture> & <video>', 'Web Storage & Geolocation', 'Constraint Form Validation']
      },
      {
        name: 'SEO & Performance Markup',
        level: 92,
        experience: '4+ years',
        keyConcepts: ['OpenGraph & Meta tags', 'Asset preloading (preload/prefetch)', 'Core Web Vitals optimization', 'Clean HTML minification']
      }
    ]
  },
  {
    title: 'CSS3 & Modern Styling',
    badge: 'Layout & Motion',
    iconName: 'Palette',
    description: 'Crafting fluid layouts, responsive grid architectures, silky 60fps keyframe transitions, and modular style systems.',
    skills: [
      {
        name: 'CSS Grid & Flexbox',
        level: 96,
        experience: '4+ years',
        keyConcepts: ['Subgrid & auto-fill / auto-fit', 'Complex 2D dashboard grids', 'Flex alignment & wrapping', 'Zero-break layouts']
      },
      {
        name: 'Responsive Design & Fluid Typography',
        level: 94,
        experience: '4+ years',
        keyConcepts: ['Mobile-first media queries', 'CSS clamp(), min(), max() math', 'Container queries (@container)', 'Retina graphics scaling']
      },
      {
        name: 'CSS Animations & Micro-Interactions',
        level: 90,
        experience: '3+ years',
        keyConcepts: ['Hardware-accelerated transforms', 'Custom cubic-bezier timing', 'Keyframe choreographies', 'Interactive hover & active states']
      },
      {
        name: 'Modern CSS Architectures & Tailwind',
        level: 92,
        experience: '3+ years',
        keyConcepts: ['CSS Custom Properties (Variables)', 'BEM & utility-first styling', 'Dark/light theme switches', 'Tailwind CSS utility mastery']
      }
    ]
  },
  {
    title: 'JavaScript (Vanilla & ES6+)',
    badge: 'Logic & Interactivity',
    iconName: 'Terminal',
    description: 'Writing lean, high-performance vanilla JavaScript and modern ES6+ for dynamic DOM manipulation, async data flows, and interactive components.',
    skills: [
      {
        name: 'DOM Manipulation & Events',
        level: 94,
        experience: '4+ years',
        keyConcepts: ['Event delegation & bubbling', 'Mutation & Intersection Observers', 'Dynamic template cloning', 'Custom event dispatches']
      },
      {
        name: 'Asynchronous JS & APIs',
        level: 92,
        experience: '4+ years',
        keyConcepts: ['Promises & Async/Await', 'Fetch API with error guards', 'WebSockets & polling', 'RESTful API integration']
      },
      {
        name: 'Modern ES6+ Features',
        level: 95,
        experience: '4+ years',
        keyConcepts: ['Destructuring & spread syntax', 'ES Modules (import/export)', 'Closures & Scope chains', 'Array higher-order methods']
      },
      {
        name: 'Browser Performance & Debugging',
        level: 89,
        experience: '3+ years',
        keyConcepts: ['Debouncing & throttling', 'Memory leak prevention', 'Chrome DevTools profiling', 'Lighthouse 100 audit scores']
      }
    ]
  }
];

export const CODE_DEMOS: CodeDemo[] = [
  {
    id: 'interactive-counter',
    title: 'Interactive Pill Counter',
    description: 'A clean interactive counter with pulse animations, step multipliers, and keyboard support.',
    html: `<div class="counter-widget">
  <span class="counter-label">Active Count</span>
  <div class="counter-display" id="countDisplay">0</div>
  <div class="counter-controls">
    <button class="btn btn-minus" id="decrementBtn">-1</button>
    <button class="btn btn-reset" id="resetBtn">Reset</button>
    <button class="btn btn-plus" id="incrementBtn">+1</button>
  </div>
</div>`,
    css: `.counter-widget {
  background: #27272a;
  border: 1px solid #3f3f46;
  border-radius: 12px;
  padding: 24px;
  text-align: center;
  max-width: 320px;
  margin: 0 auto;
  box-shadow: 0 10px 25px rgba(0,0,0,0.3);
}
.counter-label {
  font-size: 13px;
  letter-spacing: 0.05em;
  color: #a1a1aa;
  text-transform: uppercase;
  display: block;
  margin-bottom: 8px;
}
.counter-display {
  font-size: 48px;
  font-weight: 700;
  color: #f4f4f5;
  margin-bottom: 16px;
  transition: transform 0.15s ease;
}
.counter-controls {
  display: flex;
  gap: 8px;
  justify-content: center;
}
.btn {
  background: #3f3f46;
  color: #fafafa;
  border: 1px solid #52525b;
  padding: 8px 16px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}
.btn:hover {
  background: #52525b;
  transform: translateY(-1px);
}
.btn-plus { background: #3b82f6; border-color: #60a5fa; }
.btn-plus:hover { background: #2563eb; }`,
    js: `let count = 0;
const display = document.getElementById('countDisplay');
const incBtn = document.getElementById('incrementBtn');
const decBtn = document.getElementById('decrementBtn');
const resetBtn = document.getElementById('resetBtn');

function updateDisplay() {
  display.textContent = count;
  display.style.transform = 'scale(1.15)';
  setTimeout(() => display.style.transform = 'scale(1)', 150);
}

incBtn.onclick = () => { count++; updateDisplay(); };
decBtn.onclick = () => { count--; updateDisplay(); };
resetBtn.onclick = () => { count = 0; updateDisplay(); };`
  },
  {
    id: 'glass-card-tilt',
    title: 'CSS 3D Dynamic Card Tilt',
    description: 'Pure CSS3 and JavaScript mousemove calculation providing a 3D perspective tilt effect.',
    html: `<div class="tilt-card" id="tiltCard">
  <div class="card-inner">
    <div class="badge">CSS3 3D Tilt</div>
    <h3>Alex Vance</h3>
    <p>Frontend Developer crafting pixel-perfect web experiences with zero framework dependencies.</p>
    <div class="tech-tags">
      <span>HTML5</span>
      <span>CSS3</span>
      <span>JavaScript</span>
    </div>
  </div>
</div>`,
    css: `.tilt-card {
  perspective: 1000px;
  max-width: 340px;
  margin: 0 auto;
}
.card-inner {
  background: linear-gradient(135deg, #27272a, #18181b);
  border: 1px solid #52525b;
  border-radius: 16px;
  padding: 28px;
  color: #f4f4f5;
  transition: transform 0.1s ease-out, box-shadow 0.2s ease;
  box-shadow: 0 15px 35px rgba(0,0,0,0.4);
}
.badge {
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  background: #3f3f46;
  color: #e4e4e7;
  padding: 4px 10px;
  border-radius: 9999px;
  margin-bottom: 12px;
}
.card-inner h3 { margin: 0 0 8px; font-size: 20px; }
.card-inner p { color: #a1a1aa; font-size: 14px; line-height: 1.5; margin-bottom: 16px; }
.tech-tags { display: flex; gap: 6px; }
.tech-tags span {
  font-size: 11px;
  background: #27272a;
  border: 1px solid #3f3f46;
  padding: 4px 8px;
  border-radius: 6px;
  color: #d4d4d8;
}`,
    js: `const card = document.getElementById('tiltCard');
const inner = card.querySelector('.card-inner');

card.addEventListener('mousemove', (e) => {
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left - rect.width / 2;
  const y = e.clientY - rect.top - rect.height / 2;
  const rotateX = -(y / 15).toFixed(2);
  const rotateY = (x / 15).toFixed(2);
  inner.style.transform = \`rotateX(\${rotateX}deg) rotateY(\${rotateY}deg)\`;
});

card.addEventListener('mouseleave', () => {
  inner.style.transform = 'rotateX(0deg) rotateY(0deg)';
});`
  },
  {
    id: 'dynamic-color-palette',
    title: 'CSS Variables Live Theme Switcher',
    description: 'Dynamic CSS variables manipulation demonstrating real-time palette morphing in vanilla JS.',
    html: `<div class="theme-preview-box" id="themeBox">
  <div class="theme-header">
    <div class="dot red"></div>
    <div class="dot yellow"></div>
    <div class="dot green"></div>
    <span class="title">Live Theme Preview</span>
  </div>
  <p class="sample-text">CSS Variables --accent-color update in real time with JavaScript.</p>
  <div class="palette-picker">
    <button class="color-btn slate active" data-color="#94a3b8">Slate</button>
    <button class="color-btn emerald" data-color="#10b981">Emerald</button>
    <button class="color-btn amber" data-color="#f59e0b">Amber</button>
    <button class="color-btn cyan" data-color="#06b6d4">Cyan</button>
  </div>
</div>`,
    css: `.theme-preview-box {
  --accent: #94a3b8;
  background: #18181b;
  border: 2px solid var(--accent);
  border-radius: 12px;
  padding: 20px;
  max-width: 350px;
  margin: 0 auto;
  transition: border-color 0.3s ease;
}
.theme-header {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 12px;
}
.dot { width: 10px; height: 10px; border-radius: 50%; }
.dot.red { background: #ef4444; }
.dot.yellow { background: #f59e0b; }
.dot.green { background: #10b981; }
.theme-header .title { margin-left: 8px; font-size: 12px; color: #a1a1aa; }
.sample-text {
  color: #f4f4f5;
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 16px;
}
.palette-picker { display: flex; gap: 8px; justify-content: center; }
.color-btn {
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  color: #09090b;
  transition: transform 0.2s;
}
.color-btn:hover { transform: scale(1.05); }
.color-btn.slate { background: #94a3b8; }
.color-btn.emerald { background: #10b981; }
.color-btn.amber { background: #f59e0b; }
.color-btn.cyan { background: #06b6d4; }`,
    js: `const buttons = document.querySelectorAll('.color-btn');
const box = document.getElementById('themeBox');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const color = btn.getAttribute('data-color');
    box.style.setProperty('--accent', color);
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});`
  }
];

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    id: 'senior-frontend',
    role: 'Senior Frontend Developer',
    company: 'PixelCraft Digital Labs',
    period: '2023 - Present',
    location: 'San Francisco, CA (Remote)',
    description: 'Leading client web solutions specializing in high-speed, accessible web applications built on clean semantic HTML, custom CSS frameworks, and vanilla/modern JavaScript.',
    achievements: [
      'Refactored legacy codebases reducing bundle sizes by 65% and boosting Google Lighthouse scores from 72 to 99',
      'Designed a modular CSS variable system enabling instant multi-brand theming across 14 enterprise landing pages',
      'Architected zero-dependency vanilla JS form and table widgets handling over 100k daily user transactions'
    ],
    techStack: ['HTML5 Semantic', 'CSS3 Grid/Flexbox', 'Modern JavaScript (ES2024)', 'Performance Profiling', 'WCAG AA']
  },
  {
    id: 'web-developer-ui',
    role: 'Web & UI Developer',
    company: 'Apex Media Studio',
    period: '2021 - 2023',
    location: 'Austin, TX',
    description: 'Engineered responsive websites, bespoke landing experiences, and interactive web tools for startup clients and creative agencies.',
    achievements: [
      'Delivered 22+ custom interactive marketing websites with 100% cross-browser compatibility across Chrome, Safari, Firefox, and Edge',
      'Authored custom CSS micro-interactions and scroll-linked animations resulting in a 28% increase in visitor engagement time',
      'Implemented offline-first Progressive Web App caching techniques with service workers and Web Storage API'
    ],
    techStack: ['HTML5', 'CSS Animations', 'Fetch API', 'SVG Manipulation', 'Mobile-First Design']
  },
  {
    id: 'junior-frontend-freelance',
    role: 'Freelance Frontend Developer',
    company: 'Independent Contractor',
    period: '2020 - 2021',
    location: 'Remote',
    description: 'Designed and coded custom websites for local businesses, portfolios for creative professionals, and interactive web calculators.',
    achievements: [
      'Built 15+ custom business websites from initial Figma mockups directly into clean HTML, CSS, and vanilla JS',
      'Assisted clients with SEO metadata setup, mobile responsiveness troubleshooting, and DNS deployment'
    ],
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Web Design', 'Git']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'sarah-jenkins',
    name: 'Sarah Jenkins',
    role: 'Head of Product',
    company: 'Velocity Ventures',
    content: 'Alex is a rare developer who deeply understands the fundamentals of HTML, CSS, and JavaScript. Our website went from sluggish and bloated to near-instantaneous load times, and the code is remarkably clean and easy to maintain.',
    rating: 5,
    avatarSeed: 'sarah'
  },
  {
    id: 'marcus-chen',
    name: 'Marcus Chen',
    role: 'Creative Director',
    company: 'Studio Koto',
    content: 'Working with someone who can turn high-fidelity visual designs into pixel-perfect, responsive HTML and CSS with silky smooth JavaScript interactions without complaining about frameworks was refreshing. Highly recommended!',
    rating: 5,
    avatarSeed: 'marcus'
  },
  {
    id: 'elena-rostova',
    name: 'Elena Rostova',
    role: 'Tech Lead',
    company: 'HyperGrid Media',
    content: 'The custom interactive widgets Alex built using pure vanilla JavaScript were rock-solid, zero-dependency, and scored 100 on Google Lighthouse. True craftsmanship in web fundamentals.',
    rating: 5,
    avatarSeed: 'elena'
  }
];
