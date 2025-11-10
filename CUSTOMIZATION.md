# Customization Guide

This guide walks you through customizing the Movement/Foundation Website Template step by step.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Changing Basic Information](#changing-basic-information)
3. [Customizing Sections](#customizing-sections)
4. [Styling and Colors](#styling-and-colors)
5. [Images and Logo](#images-and-logo)
6. [Common Use Cases](#common-use-cases)
7. [Advanced Customization](#advanced-customization)

---

## Getting Started

All content customization happens in one file:

**`config/content.config.ts`**

Open this file in your code editor to begin customization.

---

## Changing Basic Information

### 1. Site Name and Tagline

```typescript
export const siteConfig: SiteConfig = {
  name: "Your Organization Name",           // 👈 Change this
  tagline: "Your mission statement here",   // 👈 And this
  description: "SEO description for search engines",
  // ...
};
```

**Example for an environmental cause:**
```typescript
name: "Ocean Guardians",
tagline: "Protecting our oceans for future generations",
description: "Join us in our mission to preserve marine ecosystems and combat ocean pollution",
```

### 2. Website URL

```typescript
url: "https://yourwebsite.com",  // 👈 Your actual domain
```

This is used for SEO and Open Graph tags.

---

## Customizing Sections

### Hero Section

The hero section is the first thing visitors see.

```typescript
hero: {
  headline: "Your **bold statement** here",  // Use **text** for bold
  subheadline: "Optional supporting text",   // Can be empty ""
  cta: "Submit now",                       // Button text
  ctaLink: "#join-movement",                 // Where button links to
},
```

**Tips:**
- Use `**double asterisks**` to make text bold
- Keep headline concise but impactful (max ~15 words)
- CTA should be action-oriented ("Join Now", "Learn More", "Take Action")

**Example:**
```typescript
hero: {
  headline: "Together we can **end plastic pollution** in our lifetime",
  subheadline: "Join thousands fighting for cleaner oceans",
  cta: "Join the Movement",
  ctaLink: "#join-movement",
},
```

### Problem Section

Describe the challenge your organization addresses.

```typescript
problem: {
  title: "The Challenge",                    // Section heading
  intro: "Brief introduction to the problem",
  examples: [
    { text: "Example problem 1" },
    { text: "Example problem 2" },
    { text: "Example problem 3" },
  ],
  closingText: "Why this matters...",
},
```

**Tips:**
- Use 3-5 examples for best visual balance
- Make examples specific and relatable
- Closing text should create urgency

**Example for education:**
```typescript
problem: {
  title: "The Literacy Crisis",
  intro: "Millions of children lack access to quality reading education.",
  examples: [
    { text: "1 in 5 children finish primary school unable to read a simple sentence." },
    { text: "Low-income families have 25% fewer books than affluent homes." },
    { text: "Schools in underserved areas lack trained literacy specialists." },
  ],
  closingText: "Without intervention, this gap widens each year, limiting opportunities and potential.",
},
```

### Mission Section (Pillars)

Showcase your organization's approach with 3-6 key pillars.

```typescript
mission: {
  title: "Our Approach",
  intro: "How we're solving the problem",
  pillars: [
    {
      title: "Pillar Name",
      description: "What this pillar does",
      icon: "IconName",  // See icon list below
    },
    // Add 2-5 more pillars
  ],
},
```

**Available Icons** (from Lucide React):

Common icons:
- `Target` - Goals/Focus
- `Heart` - Community/Care
- `Users` - Collaboration/People
- `BookOpen` - Education/Learning
- `Scale` - Justice/Balance
- `Shield` - Protection/Security
- `Lightbulb` - Innovation/Ideas
- `Megaphone` - Advocacy/Voice
- `Search` - Research/Investigation
- `Globe` - Global/Environment
- `Leaf` - Nature/Sustainability
- `Code` - Technology
- `Award` - Excellence/Achievement
- `Key` - Access/Rights

[View all icons](https://lucide.dev/icons/)

**Example for tech advocacy:**
```typescript
mission: {
  title: "How We Fight",
  intro: "We're protecting digital rights through action, not just words.",
  pillars: [
    {
      title: "Research",
      description: "We investigate privacy violations and publish detailed reports exposing corporate overreach.",
      icon: "Search",
    },
    {
      title: "Advocate",
      description: "We lobby lawmakers and testify at hearings to push for stronger digital protections.",
      icon: "Megaphone",
    },
    {
      title: "Educate",
      description: "We create guides, tools, and resources to help people protect their online privacy.",
      icon: "BookOpen",
    },
    {
      title: "Support",
      description: "We provide legal support for individuals fighting against unjust tech practices.",
      icon: "Scale",
    },
  ],
},
```

### Newsletter Section

Collect email signups from supporters.

```typescript
newsletter: {
  title: "Stay Informed",
  description: "Get updates on our campaigns and how you can help",
  buttonText: "Subscribe",
  successMessage: "Thank you! Check your email to confirm.",
  errorMessage: "Oops! Please try again.",
},
```

### Navigation Links

Customize the header navigation.

```typescript
navigation: [
  { label: "About", href: "#about" },
  { label: "Mission", href: "#mission" },
  { label: "Contact", href: "#contact" },
  // Add more links as needed
],
```

**Tips:**
- Keep to 4-6 links for clean design
- Use `#section-id` for smooth scroll to sections
- Use full URLs for external links

### Footer Links

Organize footer links into columns.

```typescript
footer: {
  sections: [
    {
      title: "About",
      links: [
        { label: "Our Story", href: "#" },
        { label: "Team", href: "#" },
      ],
    },
    {
      title: "Get Involved",
      links: [
        { label: "Volunteer", href: "#" },
        { label: "Donate", href: "#" },
      ],
    },
    // Add 2-4 sections total
  ],
  copyright: "Copyright ©2025 - Your Organization",
},
```

---

## Styling and Colors

### Theme Colors

Change your brand colors in `config/content.config.ts`:

```typescript
theme: {
  primary: "slate",    // Main color (navbar, footer)
  accent: "blue",      // Accent color (buttons, highlights)
},
```

**Tailwind Color Options:**
- `slate`, `gray`, `zinc`, `neutral`, `stone` - Grays
- `red`, `orange`, `amber`, `yellow` - Warm colors
- `lime`, `green`, `emerald`, `teal` - Greens
- `cyan`, `sky`, `blue`, `indigo` - Blues
- `violet`, `purple`, `fuchsia`, `pink`, `rose` - Purples/Pinks

### Custom Colors (Advanced)

For precise brand colors, edit `app/globals.css`:

```css
:root {
  --primary: #your-hex-color;
  --accent: #your-hex-color;
}
```

---

## Images and Logo

### Replacing the Logo

1. **Prepare your logo:**
   - Recommended size: 120x40 pixels
   - Format: SVG (best) or PNG
   - Should work on light backgrounds

2. **Replace the file:**
   - Save as `/public/images/logo.svg`
   - Or update the path in config:
   ```typescript
   logo: {
     main: "/images/your-logo.svg",
   },
   ```

### Adding Background Images

To add background images to sections, edit the section component files in `components/sections/`.

---

## Common Use Cases

### Example 1: Environmental Organization

```typescript
export const siteConfig: SiteConfig = {
  name: "Clean Earth Initiative",
  tagline: "Fighting climate change through direct action",
  theme: {
    primary: "emerald",
    accent: "teal",
  },
  hero: {
    headline: "The planet needs **action, not promises**",
    cta: "Join the Fight",
    ctaLink: "#join-movement",
  },
  mission: {
    pillars: [
      { title: "Reforest", icon: "Leaf", description: "..." },
      { title: "Advocate", icon: "Megaphone", description: "..." },
      { title: "Educate", icon: "GraduationCap", description: "..." },
      { title: "Sustain", icon: "Recycle", description: "..." },
    ],
  },
};
```

### Example 2: Educational Foundation

```typescript
export const siteConfig: SiteConfig = {
  name: "Literacy for All",
  tagline: "Every child deserves to read",
  theme: {
    primary: "blue",
    accent: "amber",
  },
  hero: {
    headline: "**Reading opens doors.** We're handing out keys.",
    cta: "Support Our Mission",
    ctaLink: "#join-movement",
  },
  mission: {
    pillars: [
      { title: "Donate Books", icon: "Book", description: "..." },
      { title: "Train Teachers", icon: "GraduationCap", description: "..." },
      { title: "Build Libraries", icon: "Library", description: "..." },
      { title: "Track Progress", icon: "LineChart", description: "..." },
    ],
  },
};
```

### Example 3: Social Justice Movement

```typescript
export const siteConfig: SiteConfig = {
  name: "Equal Access Now",
  tagline: "Justice delayed is justice denied",
  theme: {
    primary: "purple",
    accent: "pink",
  },
  hero: {
    headline: "**Equal rights** aren't a privilege. They're a promise.",
    cta: "Stand With Us",
    ctaLink: "#join-movement",
  },
  mission: {
    pillars: [
      { title: "Organize", icon: "Users", description: "..." },
      { title: "Advocate", icon: "Megaphone", description: "..." },
      { title: "Litigate", icon: "Scale", description: "..." },
      { title: "Educate", icon: "BookOpen", description: "..." },
    ],
  },
};
```

---

## Advanced Customization

### Adding a New Section

1. **Create a new component** in `components/sections/YourSection.tsx`
2. **Import it** in `app/page.tsx`
3. **Add it to the page:**
   ```typescript
   <YourSection {...props} />
   ```

### Removing a Section

In `app/page.tsx`, simply comment out or delete the section:

```typescript
{/* <ProblemSection {...} /> */}
```

### Changing Layouts

Modify the component files in `components/sections/` to adjust layouts, spacing, and styles using Tailwind classes.

### Adding Animations

Install Framer Motion:
```bash
npm install framer-motion
```

Then add animations to your components:
```typescript
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  {/* Your content */}
</motion.div>
```

---

## Checklist

Use this checklist when customizing your site:

- [ ] Update site name and tagline
- [ ] Replace placeholder logo
- [ ] Customize hero headline and CTA
- [ ] Update problem/challenge examples
- [ ] Customize mission pillars (title, description, icons)
- [ ] Update newsletter section text
- [ ] Customize navigation links
- [ ] Update footer links and copyright
- [ ] Choose theme colors
- [ ] Test on mobile devices
- [ ] Test newsletter form
- [ ] Update metadata in `app/layout.tsx`
- [ ] Deploy to production

---

## Need Help?

- Check the main [README.md](./README.md)
- Review code comments in `config/content.config.ts`
- Refer to [Next.js documentation](https://nextjs.org/docs)
- Check [Tailwind CSS documentation](https://tailwindcss.com/docs)
- Browse [Lucide icons](https://lucide.dev/icons/)

---

**Happy customizing! 🎨**

