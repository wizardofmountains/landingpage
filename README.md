# Movement/Foundation Website Template

A modern, customizable single-page website template built with Next.js, TypeScript, and Tailwind CSS. Perfect for foundations, movements, advocacy groups, and causes that want to make an impact.

![Template Preview](public/images/logo.svg)

## 🌟 Features

- **Fully Customizable**: All content editable through a single configuration file
- **Modern Stack**: Built with Next.js 15, TypeScript, and Tailwind CSS
- **Responsive Design**: Mobile-first approach that looks great on all devices
- **Newsletter Integration**: Email signup with validation and Klaviyo API support
- **SEO Optimized**: Built-in metadata and Open Graph tags
- **Accessible**: ARIA labels, semantic HTML, keyboard navigation
- **Type Safe**: Full TypeScript support for robust development
- **Easy to Deploy**: One-click deployment to Vercel

## 📋 Sections Included

1. **Hero Section**: Bold headline with call-to-action
2. **Problem Section**: Describe the challenge you're addressing
3. **Mission Section**: Showcase your approach with 4 customizable pillars
4. **Newsletter Section**: Collect email signups with validation
5. **Header**: Responsive navigation with mobile menu
6. **Footer**: Multi-column footer with links

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone or download this template**
   ```bash
   cd landingpage
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Quick Links

- **[DESIGN-GUIDE.md](./DESIGN-GUIDE.md)** - 🎨 **Complete visual customization guide** (colors, fonts, spacing, styles)
- **[CUSTOMIZATION.md](./CUSTOMIZATION.md)** - 📝 Content customization guide
- **[config/content.config.ts](./config/content.config.ts)** - Main content configuration file

### Easy Customization (No Code Required)

All content is managed through a single configuration file:

**`config/content.config.ts`**

Edit this file to customize:
- Site name and tagline
- Navigation links
- Hero headline and CTA
- Problem examples
- Mission pillars (with icons)
- Newsletter text
- Footer links
- Theme colors

### Design Customization

Want to change colors, fonts, button shapes, or spacing? Check out **[DESIGN-GUIDE.md](./DESIGN-GUIDE.md)** for:

- Complete color reference with exact line numbers
- Typography system (fonts, sizes, weights)
- Spacing and layout controls
- Quick-change recipes for common customizations
- Visual element finder ("I see X, where do I change it?")
- Troubleshooting guide

### Example: Changing the Site Name

```typescript
// config/content.config.ts
export const siteConfig: SiteConfig = {
  name: "Your Foundation Name", // Change this
  tagline: "Your mission statement",
  // ... rest of config
};
```

### Changing Colors

Update the theme colors in `config/content.config.ts`:

```typescript
theme: {
  primary: "blue",    // or "slate", "purple", "emerald", etc.
  accent: "indigo",
},
```

For advanced color customization, edit CSS variables in `app/globals.css`:

```css
:root {
  --primary: #0f172a;
  --accent: #3b82f6;
  /* ... other colors */
}
```

### Replacing Images

1. Replace `/public/images/logo.svg` with your logo
2. Ensure your logo is properly sized (recommended: 120x40px)
3. Supported formats: SVG, PNG, JPG

## 📂 Project Structure

```
landingpage/
├── app/                          # Next.js app directory
│   ├── api/subscribe/           # Newsletter API endpoint
│   ├── globals.css              # Global styles & CSS variables
│   ├── layout.tsx               # Root layout with metadata
│   └── page.tsx                 # Main landing page
├── components/
│   ├── layout/                  # Header & Footer
│   ├── sections/                # Page sections (Hero, Problem, etc.)
│   └── ui/                      # Reusable UI components
├── config/
│   └── content.config.ts        # 📝 Main content configuration
├── lib/
│   ├── types.ts                 # TypeScript type definitions
│   ├── utils.ts                 # Utility functions
│   ├── validations.ts           # Form validation schemas
│   └── klaviyo.ts               # Newsletter API helper
└── public/
    └── images/                  # Static images
```

## 🔧 Advanced Customization

### Adding/Removing Sections

Edit `app/page.tsx` to add or remove sections:

```typescript
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header {...} />
      <main className="flex-1">
        <HeroSection {...} />
        <ProblemSection {...} />
        <MissionSection {...} />
        {/* Add more sections here */}
        <NewsletterSection {...} />
      </main>
      <Footer {...} />
    </div>
  );
}
```

### Changing Icons

Icons are from [Lucide React](https://lucide.dev/). Change them in `config/content.config.ts`:

```typescript
pillars: [
  {
    title: "Research",
    icon: "Microscope",  // Change to any Lucide icon name
    description: "..."
  }
]
```

### Adding More Pillars

The mission section automatically adapts to any number of pillars:

```typescript
mission: {
  pillars: [
    { title: "Pillar 1", icon: "Target", description: "..." },
    { title: "Pillar 2", icon: "Heart", description: "..." },
    { title: "Pillar 3", icon: "Users", description: "..." },
    { title: "Pillar 4", icon: "Scale", description: "..." },
    // Add more pillars here - layout auto-adjusts!
  ]
}
```

## 📧 Newsletter Integration

### Using the Placeholder (Default)

By default, the newsletter form uses a placeholder implementation that logs submissions to the console. Perfect for testing!

### Connecting to Klaviyo

1. **Sign up for Klaviyo** at https://www.klaviyo.com
2. **Get your API keys** from Account > Settings > API Keys
3. **Create `.env.local`** in the project root:
   ```env
   KLAVIYO_API_KEY=your_private_api_key
   NEXT_PUBLIC_KLAVIYO_LIST_ID=your_list_id
   ```
4. **Update `lib/klaviyo.ts`** with the real implementation (see comments in file)

### Alternative Newsletter Services

You can easily adapt the form to work with:
- Mailchimp
- ConvertKit
- SendGrid
- Any email service with an API

Just update the API call in `app/api/subscribe/route.ts`.

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push your code to GitHub**
2. **Visit [vercel.com](https://vercel.com)**
3. **Import your repository**
4. **Configure environment variables** (if using Klaviyo)
5. **Deploy!**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Other Hosting Options

- **Netlify**: Build command: `npm run build`, Publish directory: `.next`
- **Railway**: Automatically detects Next.js
- **Self-hosted**: Run `npm run build` then `npm start`

## 🎯 Use Cases

This template is perfect for:

- ✅ Environmental causes (ocean conservation, climate action)
- ✅ Social movements (education access, healthcare reform)
- ✅ Tech advocacy groups (digital rights, privacy)
- ✅ Educational foundations (literacy, STEM education)
- ✅ Open source projects (software freedom)
- ✅ Community organizations
- ✅ Non-profit initiatives
- ✅ Campaign landing pages

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Forms**: [React Hook Form](https://react-hook-form.com/)
- **Validation**: [Zod](https://zod.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Vercel](https://vercel.com/)

## 📚 Documentation

- **[DESIGN-GUIDE.md](./DESIGN-GUIDE.md)**: Complete visual customization reference (colors, fonts, spacing, styles)
- **[CUSTOMIZATION.md](./CUSTOMIZATION.md)**: Step-by-step content customization guide
- **[content.config.ts](./config/content.config.ts)**: Configuration examples

## 🐛 Troubleshooting

### Issue: Logo not showing
- Ensure `/public/images/logo.svg` exists
- Check the file path in `config/content.config.ts`
- Try clearing the browser cache

### Issue: Newsletter form not working
- Check the browser console for errors
- Ensure API route exists at `/app/api/subscribe/route.ts`
- Verify validation schema in `lib/validations.ts`

### Issue: Styles not updating
- Restart the development server
- Clear `.next` cache: `rm -rf .next`
- Check Tailwind class names are correct

### Issue: TypeScript errors
- Run `npm run build` to see full error messages
- Check imports match file locations
- Ensure all types are properly defined

## 📝 License

This template is free to use for any purpose. No attribution required.

## 🤝 Contributing

Found a bug or have a suggestion? Feel free to customize and improve this template for your needs!

## 📞 Support

For questions about customization, refer to:
1. This README
2. [CUSTOMIZATION.md](./CUSTOMIZATION.md)
3. Code comments in `config/content.config.ts`
4. Next.js documentation: https://nextjs.org/docs

---

**Built with ❤️ for movements that matter.**
