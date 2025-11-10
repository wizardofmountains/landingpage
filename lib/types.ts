// TypeScript interfaces for content configuration

export interface NavigationLink {
  label: string;
  href: string;
}

export interface HeroConfig {
  headline: string;
  subheadline?: string;
  cta: string;
  ctaLink: string;
  backgroundImage?: string; // Path to background image (e.g., "/images/hero-bg.jpg")
}

export interface ProblemExample {
  text: string;
}

export interface ProblemConfig {
  title: string;
  intro?: string;
  examples: ProblemExample[];
  closingText: string;
}

export interface MissionPillar {
  title: string;
  description: string;
  icon: string; // Lucide icon name
}

export interface MissionConfig {
  title: string;
  intro: string;
  pillars: MissionPillar[];
}

export interface NewsletterConfig {
  title: string;
  description: string;
  klaviyoFormId?: string; // Klaviyo embedded form ID (e.g., "WRssM3")
}

export interface FooterLinkSection {
  title?: string;
  links: NavigationLink[];
}

export interface FooterConfig {
  sections: FooterLinkSection[];
  copyright: string;
}

export interface ThemeConfig {
  primary: string;
  secondary?: string;
  accent?: string;
}

export interface SiteConfig {
  // Brand & Metadata
  name: string;
  tagline: string;
  description: string;
  url?: string;
  
  // Theme Colors (Tailwind class names or hex values)
  theme: ThemeConfig;
  
  // Logo paths
  logo: {
    main: string;
    footer?: string;
  };
  
  // Navigation
  navigation: NavigationLink[];
  
  // Sections
  hero: HeroConfig;
  problem: ProblemConfig;
  mission: MissionConfig;
  newsletter: NewsletterConfig;
  footer: FooterConfig;
}

