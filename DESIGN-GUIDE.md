# 🎨 Manual Design Customization Guide

> A concise playbook for tweaking colors, fonts, spacing, and key components without touching complex tooling. All changes are safe to make in your favorite editor and take effect on refresh.

---

## 🚀 Quick Start

| Change | File | Lines to check | Time |
|--------|------|----------------|------|
| Brand colors | `app/globals.css` | `--primary`, `--accent` | 2 min |
| Section backgrounds | `components/sections/*Section.tsx` | `bg-*` classes | 2 min |
| Font family | `app/layout.tsx` | Montserrat import | 3 min |
| Section copy | `config/content.config.ts` | Relevant section object | 3 min |

**Workflow**
1. Open the listed file.
2. Adjust the value(s) described.
3. Save and refresh the browser (`npm run dev` must be running).

---

## 🎯 Brand & Color System

### Global Palette (`app/globals.css`)

```css
:root {
  --primary: #2ec4b6;
  --accent: #2ec4b6;
  --background: #0f1517;
  --foreground: #ededed;
  --muted: #1e293b;
}
```

- `--primary`: Buttons and key calls-to-action.
- `--accent`: Highlights and decorative elements.
- `--background` / `--foreground`: Page body and default text.
- `--muted`: Soft section backgrounds.

**Update Tip:** Change both `--primary` and `--accent` together for a consistent rebrand.

### Section-Specific Overrides

| Section | File | Class to edit | Purpose |
|---------|------|---------------|---------|
| Hero | `components/sections/HeroSection.tsx` | `bg-gradient-to-br ...` | Background gradient |
| Problem | `components/sections/ProblemSection.tsx` | `bg-slate-900` | Dark panel color |
| Mission | `components/sections/MissionSection.tsx` | `border-*`, `bg-*` | Card surfaces |
| Newsletter | `components/sections/NewsletterSection.tsx` | `style={{ backgroundColor: ... }}` | Container color |

Tailwind classes follow `bg-{color}` patterns (e.g., `bg-slate-900`, `bg-blue-950`). Swap to any Tailwind palette value.

---

## 🔤 Typography

### Primary Font (`app/layout.tsx`)

```tsx
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});
```

The layout attaches the Montserrat CSS variable to `<body>`. To use a different Google Font:
1. Import it from `next/font/google`.
2. Replace the `montserrat` definition.
3. Update `--font-sans` in `app/globals.css` if needed.

### Sizes (Tailwind classes in components)

| Element | Class | Actual size |
|---------|-------|-------------|
| Hero title | `text-5xl md:text-6xl lg:text-7xl` | 48 → 60 → 72 px |
| Section headings | `text-3xl md:text-4xl lg:text-5xl` | 30 → 36 → 48 px |
| Body text | default (`text-base`) | 16 px |
| Buttons (`size="lg"`) | `text-lg` | 18 px |

**Adjustments**
- Smaller headings: reduce each step (`text-4xl md:text-5xl ...`).
- Larger paragraph text: wrap copy in `text-lg` or bump global `body { font-size: ... }`.

---

## 📐 Layout & Spacing

### Section Padding
All major sections use `py-20 md:py-28` (80 px / 112 px). Change this in each section file or set a global override in `app/globals.css`:

```css
section {
  padding-top: 6rem !important;
  padding-bottom: 6rem !important;
}
```

### Container Widths (`components/ui/Container.tsx`)

`maxWidth` defaults to `'xl'` (1280 px). Pass a prop in any section:

```tsx
<Container maxWidth="2xl">
```

Valid values: `sm`, `md`, `lg`, `xl`, `2xl`, `full`.

---

## 🧩 Component Tweaks

### Buttons (`components/ui/Button.tsx`)

Key props:
- `variant`: `primary`, `secondary`, `outline`, `ghost`.
- `size`: `sm`, `md`, `lg`.

Edit the maps to change colors or shapes:

```tsx
const variants = {
  primary: 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm',
  // ...
};

const sizes = {
  lg: 'h-14 px-8 text-lg rounded-full',
};
```

Swap `rounded-full` for `rounded-lg` etc. to adjust curvature.

### Cards (`components/ui/Card.tsx` & Mission Section)
- Borders and shadows are controlled via Tailwind classes (`border-border`, `shadow-lg`).
- Modify mission cards in `MissionSection.tsx` for hover effects (`hover:shadow-2xl`, `hover:scale-105`).

### Header & Footer

| Component | File | Edits |
|-----------|------|-------|
| Header | `components/layout/Header.tsx` | Background transparency, nav link styles, mobile menu |
| Footer | `components/layout/Footer.tsx` | Background, column layout, link colors |

Change background classes (`bg-background/95`, `bg-muted/30`) or `border-*` as needed.

---

## ✉️ Newsletter Form (Klaviyo)

The newsletter markup in `NewsletterSection.tsx` loads `klaviyo-form-{ID}`. Styling and fields are controlled exclusively in the **Klaviyo Dashboard**.

**Customize**
1. Log into Klaviyo → Sign-up Forms.
2. Find form `WRssM3`.
3. Edit styles, fields, and copy, then publish.
4. Changes go live instantly—no redeploy.

**Optional CSS overrides:** add styles to `app/globals.css` targeting `.klaviyo-form-WRssM3`.

---

## 📊 Analytics Snippet

Google Analytics (gtag.js) is injected in `app/layout.tsx` using `next/script`.

```tsx
<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-XTFY1KDWXG"
  strategy="afterInteractive"
/>
<Script id="gtag-init" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XTFY1KDWXG');
  `}
</Script>
```

Change the `id` parameter and `gtag('config', ...)` value to point at a different GA property.

---

## 🗂 File Reference Cheat Sheet

| Area | File | What to edit |
|------|------|--------------|
| Global colors | `app/globals.css` | CSS variables |
| Fonts | `app/layout.tsx` | Google font import |
| Body font stack | `app/globals.css` | `font-family` rule |
| Hero content | `config/content.config.ts` (`hero`) | Text and CTAs |
| Problem section | `ProblemSection.tsx` | Cards, background |
| Mission section | `MissionSection.tsx` | Card styles, icons |
| Newsletter copy | `content.config.ts` (`newsletter`) | Title + description |
| Header links | `content.config.ts` (`navigation`) | Link labels & URLs |

Use search (Cmd/Ctrl + F) with keywords like `bg-slate-900`, `text-5xl`, or `hover:shadow-lg` to jump to styles fast.

---

## 🛠 Troubleshooting Quick Wins

- **Color didn’t change?** Make sure both the CSS variable and any Tailwind `bg-*` class are updated. Hard refresh the browser (Cmd/Ctrl + Shift + R).
- **Font still looks the same?** Restart the dev server so Next.js bundles the new font.
- **Newsletter layout looks off?** Adjust inside Klaviyo; the embed overwrites inline markup during runtime.
- **Hover effects missing?** Add `transition-all duration-200` alongside your hover classes.
- **Spacing feels tight?** Increase values in `py-*`, `space-y-*`, or global section padding.

---

## 📝 Changelog

- **2025-11-11** — Created simplified manual design guide, documented Montserrat as primary font, and captured Google Analytics integration details.

---

Need help or want deeper customization examples? Check `README.md`, `CUSTOMIZATION.md`, or inspect elements in DevTools for live-class hints. Happy styling! 🎉


