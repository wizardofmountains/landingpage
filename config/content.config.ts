import { SiteConfig } from '@/lib/types';

/**
 * CONTENT CONFIGURATION
 * 
 * This is the single source of truth for all site content.
 * Customize this file to adapt the template for your own cause, foundation, or movement.
 * 
 * Example use cases:
 * - Environmental causes (e.g., climate action, ocean conservation)
 * - Social movements (e.g., education access, healthcare reform)
 * - Tech advocacy groups (e.g., digital rights, open source)
 * - Educational foundations (e.g., literacy programs, STEM education)
 * - Open source projects (e.g., software freedom, community-driven development)
 */

export const siteConfig: SiteConfig = {
  // ==================== BRAND & METADATA ====================
  name: "Element",
  tagline: "At Element we believe that the future of building begins with the courage to rethink resources.",
  description: "Element is a platform for future-proof building design that focuses on essential issues relating to resource-efficient construction and future-proof value creation.",
  url: "https://landingpage-lac-zeta.vercel.app", // Update with your domain
  
  // ==================== THEME COLORS ====================
  // Use Tailwind color names (e.g., 'blue', 'green', 'purple')
  // Or customize in tailwind.config.ts for more control
  theme: {
    primary: "#2ec4b6",
    secondary: "#64748b",
    accent: "#2ec4b6",
  },
  
  // ==================== LOGO PATHS ====================
  logo: {
    main: "/images/logo.svg", // Update logo with Element brand logo .svg
    footer: "/images/logo.svg", // Can be different for footer
  },
  
  // ==================== NAVIGATION ====================
  navigation: [
    { label: "About Us", href: "#about" },
    { label: "Get Involved", href: "#join-element" },
    { label: "Products", href: "#products" },
    { label: "Material Wiki", href: "#material-wiki" },
    { label: "Community", href: "#community" },
  ],  
  
  // ==================== HERO SECTION ====================
  hero: {
    headline: "At Element we believe that the future of building begins with the courage to rethink resources.",
    subheadline: "", // Optional subheadline
    cta: "Get Involved",
    ctaLink: "#join-movement",
    backgroundImage: "/images/hero-bg.jpg", // Path to your background image (or remove/empty for gradient)
  },
  
  // ==================== PROBLEM/CHALLENGE SECTION ====================
  // Describe the problem your organization addresses
  problem: {
    title: "The Problem",
    intro: "Every day, valuable materials disappear, digital tools fall short, and decisions are made without clarity. The construction industry is full of potential, yet restricted by systems that no longer match the world we build for.",
    examples: [
      { text: "You want to use secondary materials, but the information is missing. No clear data, no availability, no security." },
      { text: "Every research task takes hours. Material passports are incomplete, databases are chaotic, tools are not connected." },
      { text: "High-quality material ends up in the container at the construction site. You see potential, but the system sees waste." },
    ],
    closingText: "This isn't convenience. It's loss. The problem is not that there are no solutions. It's that you don't have access to them. The world doesn’t lack resources. It lacks systems that let us use them wisely.",
  },
  
  // ==================== MISSION/PILLARS SECTION ====================
  // Describe your organization's approach with 3-4 key pillars
  mission: {
    title: "Element's Mission",
    intro: "Element tackles the areas where the biggest gaps currently exist: we make raw material flows visible, accessible, and intuitively usable. Together with a growing community, we are creating a new building culture: curious, reflective, and future-proof.",
    pillars: [
      {
        title: "Transparency",
        description: "We illuminate material flows, lifecycles and potentials and bring this knowledge directly into the planning environment.",
        icon: "Search",
      },
      {
        title: "Community",
        description: "Our community connects planners, suppliers, researchers and creatives. A space for open exchange, shared learning and collective progress.",
        icon: "Users",
      },
      {
        title: "Ecosystem",
        description: "A living ecosystem of material passports, a marketplace for secondary resources, and a knowledge hub that bridges physical materials and digital workflows.",
        icon: "Leaf",
      },
      {
        title: "Tools",
        description: "A BIM-integrated suite with calculator, simulator, visualizer, AR insights and intelligent assistants. Practical, precise, and designed to make sustainable planning both effortless and inspiring.",
        icon: "PenTool",
      },
    ],
  },
  
  // ==================== NEWSLETTER SIGNUP SECTION ====================
  newsletter: {
    title: "Sign Up for News",
    description: "Join a movement that is rethinking construction. Sign up to get no-spam alerts about insights, concrete examples, experiments, ideas, and early invitations to beta releases. Become part of Element's community.",
    klaviyoFormId: "WRssM3", // Your Klaviyo embedded form ID - customize form in Klaviyo dashboard
  },
  
  // ==================== FOOTER ====================
  footer: {
    sections: [
      {
        title: "About",
        links: [
          { label: "Our Story", href: "#" },
          { label: "Our Team", href: "#" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "Material Wiki", href: "#" },
          { label: "Element Bounties", href: "#" },
        ],
      },
      {
        title: "Connect",
        links: [
          { label: "Contact Us", href: "#" },
          { label: "Community", href: "#" },
        ],
      },
      {
        title: "Legal",
        links: [
          { label: "Privacy Policy", href: "#" },
          { label: "Careers", href: "#" },
        ],
      },
    ],
    copyright: "Copyright ©2025 - Element",
  },
};

// ==================== CUSTOMIZATION EXAMPLES ====================

/**
 * EXAMPLE 1: Environmental Cause
 * 
 * export const siteConfig: SiteConfig = {
 *   name: "Ocean Guardians",
 *   tagline: "We believe our oceans deserve protection, not exploitation.",
 *   hero: {
 *     headline: "Protecting our oceans for **future generations**",
 *     cta: "Take Action",
 *   },
 *   problem: {
 *     title: "The Crisis",
 *     examples: [
 *       { text: "Every minute, one garbage truck of plastic enters our oceans." },
 *       { text: "90% of large fish populations have been depleted." },
 *     ],
 *   },
 *   mission: {
 *     pillars: [
 *       { title: "Research", description: "...", icon: "Microscope" },
 *       { title: "Advocate", description: "...", icon: "Megaphone" },
 *       { title: "Cleanup", description: "...", icon: "Waves" },
 *       { title: "Educate", description: "...", icon: "GraduationCap" },
 *     ],
 *   },
 * };
 */

/**
 * EXAMPLE 2: Tech Advocacy
 * 
 * export const siteConfig: SiteConfig = {
 *   name: "Open Web Alliance",
 *   tagline: "Fighting for a free and open internet for everyone.",
 *   theme: {
 *     primary: "purple",
 *     accent: "indigo",
 *   },
 *   mission: {
 *     pillars: [
 *       { title: "Privacy First", icon: "Shield" },
 *       { title: "Net Neutrality", icon: "Network" },
 *       { title: "Open Standards", icon: "Code" },
 *       { title: "Digital Rights", icon: "Key" },
 *     ],
 *   },
 * };
 */

/**
 * EXAMPLE 3: Educational Foundation
 * 
 * export const siteConfig: SiteConfig = {
 *   name: "Literacy for All",
 *   tagline: "Every child deserves the gift of reading.",
 *   theme: {
 *     primary: "emerald",
 *     accent: "teal",
 *   },
 *   mission: {
 *     pillars: [
 *       { title: "Access", icon: "Book" },
 *       { title: "Training", icon: "Award" },
 *       { title: "Resources", icon: "Library" },
 *       { title: "Community", icon: "Heart" },
 *     ],
 *   },
 * };
 */

