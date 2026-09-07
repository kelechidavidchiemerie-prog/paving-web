export interface Project {
  id: string;
  title: string;
  category: 'html-css' | 'javascript' | 'full-ui';
  categoryLabel: string;
  tagline: string;
  description: string;
  htmlHighlights: string[];
  cssHighlights: string[];
  jsHighlights: string[];
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  previewGradient: string;
  featured?: boolean;
  metrics?: {
    label: string;
    value: string;
  };
}

export interface SkillCategory {
  title: string;
  badge: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    level: number; // 0 to 100
    experience: string;
    keyConcepts: string[];
  }[];
}

export interface CodeDemo {
  id: string;
  title: string;
  description: string;
  html: string;
  css: string;
  js: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  techStack: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatarSeed: string;
}
