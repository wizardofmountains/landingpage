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
  tagline: "At Element, we believe that people should control the materials they use.", // Update tagline
  description: "Element ...", // Update description
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
    { label: "Element Bounties", href: "#" }, // Finalize label and link
  ],  
  
  // ==================== HERO SECTION ====================
  hero: {
    headline: "At Element, we believe that people should control the materials they use.", // Update headline
    subheadline: "", // Optional subheadline
    cta: "Get Involved",
    ctaLink: "#join-movement",
    backgroundImage: "/images/hero-bg.jpg", // Path to your background image (or remove/empty for gradient)
  },
  
  // ==================== PROBLEM/CHALLENGE SECTION ====================
  // Describe the problem your organization addresses
  problem: {
    title: "The Problem", // Update title
    intro: "Kurzes Intro zum generellen Problem das besteht und auf welches sich Element konzentriert.", // Update intro
    examples: [
      { text: "Problem 1" }, // Update examples
      { text: "Problem 2" },
      { text: "Problem 3" },
    ],
    closingText: "This isn't convenience. It's control. And it's creeping into every part of our digital lives, one \"update\" at a time. If we don't act now, we risk locking future generations into a world where everything is leased, nothing is owned, and the power lies in the hands of companies, not consumers.", // Update closing text
  },
  
  // ==================== MISSION/PILLARS SECTION ====================
  // Describe your organization's approach with 3-4 key pillars
  mission: {
    title: "Element's Mission", // Update title
    intro: "Kurzes Intro zur Mission von Element und was wir tun. Vorbild der FULU Seite.", // Update intro
    pillars: [
      {
        title: "Mission 1",
        description: "We research and document companies' anti-ownership practices. Whether it's digital locks, legal threats, or privacy violations, we pull back the curtain and make the truth public.",
        icon: "Search", // Lucide icon name
      },
      {
        title: "Mission 2",
        description: "We translate complex laws, policy concepts, and technical barriers into accessible stories and ideas that people can understand. We empower users with knowledge through YouTube, the Consumer Rights Wiki, and our newsletter.",
        icon: "BookOpen",
      },
      {
        title: "Mission 3",
        description: "We build coalitions. Whether you're a fixer, a farmer, a gamer, an activist—or you just own an internet-connected refrigerator—your ownership rights are under attack. Bringing our voices together is the best way to make sure they're heard.",
        icon: "Users",
      },
      {
        title: "Mission 4",
        description: "We support legal and legislative efforts to replace anti-consumer laws with ones that protect our right to own the devices and media that we bought.",
        icon: "Scale",
      },
    ],
  },
  
  // ==================== NEWSLETTER SIGNUP SECTION ====================
  newsletter: {
    title: "Sign Up for News",
    description: "Want to know when it's time to act? Join the movement to put power back in the hands of consumers. Sign up to get no-spam alerts about campaigns, legislation, and actions you can take to protect ownership rights.",
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

