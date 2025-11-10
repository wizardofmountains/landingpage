# 🎨 Complete Design Customization Guide

> **Your visual roadmap to customizing every element of this website**

This guide maps every visual element to its exact location in the code, making it easy to customize colors, fonts, spacing, and styles manually.

---

## 📋 Table of Contents

1. [Quick Start](#quick-start)
2. [Complete Color Reference](#complete-color-reference)
3. [Typography System](#typography-system)
4. [Spacing & Layout](#spacing--layout)
5. [Border & Shape System](#border--shape-system)
6. [Component Style Reference](#component-style-reference)
7. [Effects & Animations](#effects--animations)
8. [Quick Change Recipes](#quick-change-recipes)
9. [File Reference Map](#file-reference-map)
10. [Visual Element Finder](#visual-element-finder)
11. [Troubleshooting](#troubleshooting)

---

## 🚀 Quick Start

### Most Common Changes

| What You Want | Where to Go | Time |
|---------------|-------------|------|
| Change button color | [Recipe 1](#recipe-1-change-brand-color) | 2 min |
| Change button shape | [Recipe 2](#recipe-2-change-button-shape) | 1 min |
| Change section background | [Recipe 3](#recipe-3-change-section-background) | 1 min |
| Change fonts | [Typography System](#typography-system) | 5 min |
| Change spacing | [Spacing & Layout](#spacing--layout) | 3 min |

### 5-Minute Color Change

Want to quickly rebrand the entire site?

1. Open `app/globals.css`
2. Change lines 9 and 54 (button color)
3. Change line 21 in `components/sections/ProblemSection.tsx` (dark section)
4. Done! ✅

---

## 🎨 Complete Color Reference

### Global Colors (app/globals.css)

All CSS variables that control site-wide colors:

| Variable | Line | Default Value | What It Controls |
|----------|------|---------------|------------------|
| `--background` | 5 | `#101619` | Page background color |
| `--foreground` | 6 | `#0f172a` | Main text color |
| `--primary` | 9 | `#2ec4b6` | **Buttons, main brand color** |
| `--primary-foreground` | 10 | `#ffffff` | Text on primary color |
| `--secondary` | 11 | `#64748b` | Secondary elements |
| `--secondary-foreground` | 12 | `#ffffff` | Text on secondary |
| `--accent` | 13 | `#3b82f6` | Accent highlights |
| `--accent-foreground` | 14 | `#ffffff` | Text on accent |
| `--muted` | 17 | `#f1f5f9` | Muted backgrounds |
| `--muted-foreground` | 18 | `#64748b` | Muted text |
| `--border` | 19 | `#e2e8f0` | Border colors |
| `--input` | 20 | `#e2e8f0` | Input field borders |
| `--ring` | 21 | `#3b82f6` | Focus ring color |

#### Dark Mode Colors (app/globals.css)

**Important:** If you change colors above, also update dark mode (lines 50-60):

| Variable | Line | Default | Purpose |
|----------|------|---------|---------|
| `--background` | 52 | `#0a0a0a` | Dark mode page bg |
| `--foreground` | 53 | `#ededed` | Dark mode text |
| `--primary` | 54 | `#2ec4b6` | **Dark mode button color** |
| `--primary-foreground` | 55 | `#ffffff` | Dark mode button text |

### Component-Specific Colors

Colors hardcoded in components (not using CSS variables):

#### Problem Section
**File:** `components/sections/ProblemSection.tsx`

| Element | Line | Class | Color | Change To |
|---------|------|-------|-------|-----------|
| Section background | 21 | `bg-slate-900` | Dark gray | Any Tailwind color |
| Card backgrounds | 39 | `bg-white/10` | Translucent white | Change opacity |
| Card borders | 39 | `border-white/20` | Light border | Change opacity |
| Hover border | 39 | `hover:border-white/40` | Brighter on hover | Change opacity |
| Closing box bg | 50 | `bg-white/5` | Very translucent | Change opacity |
| Closing box border | 50 | `border-white/20` | Light border | Change opacity |

**Example change:**
```tsx
// From:
className="relative py-20 md:py-28 bg-slate-900 text-white"

// To dark blue:
className="relative py-20 md:py-28 bg-blue-900 text-white"

// To pure black:
className="relative py-20 md:py-28 bg-black text-white"
```

#### Hero Section
**File:** `components/sections/HeroSection.tsx`

| Element | Line | Class | Purpose |
|---------|------|-------|---------|
| Background gradient | 24 | `bg-gradient-to-br from-accent/5 via-background to-background` | Subtle gradient |

#### Mission Section
**File:** `components/sections/MissionSection.tsx`

| Element | Line | Class | Purpose |
|---------|------|-------|---------|
| Icon background | 47 | `bg-accent/10` | Icon container |
| Icon hover | 47 | `group-hover:bg-accent/20` | Hover state |
| Icon color | 51 | `text-accent` | Icon color |
| Card border hover | 43 | `hover:border-accent/50` | Hover effect |

#### Newsletter Section
**File:** `components/sections/NewsletterSection.tsx`

| Element | Line | Class | Purpose |
|---------|------|-------|---------|
| Section background | 73 | `bg-muted/50` | Light background |
| Input border | 91 | `border-input` | Uses CSS variable |
| Success message bg | 111 | `bg-green-50` | Success state |
| Error message bg | 117 | `bg-red-50` | Error state |

#### Header
**File:** `components/layout/Header.tsx`

| Element | Line | Class | Purpose |
|---------|------|-------|---------|
| Background | 34 | `bg-background/95` | Semi-transparent |
| Border | 34 | `border-border/40` | Bottom border |
| Link hover | 56 | `hover:bg-accent/10` | Hover background |

#### Footer
**File:** `components/layout/Footer.tsx`

| Element | Line | Class | Purpose |
|---------|------|-------|---------|
| Background | 22 | `bg-muted/30` | Light background |
| Border | 22 | `border-border` | Top border |
| Link color | 52 | `text-muted-foreground` | Default links |
| Link hover | 52 | `hover:text-foreground` | Hover state |

---

## 🔤 Typography System

### Font Families

#### Primary Font (Geist Sans)
**File:** `app/layout.tsx`

```typescript
// Lines 5-8
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
```

**To change:**
1. Import a different Google Font
2. Update the variable name
3. Update `globals.css` line 45 if needed

#### Monospace Font (Geist Mono)
**File:** `app/layout.tsx`

```typescript
// Lines 10-13
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
```

### Font Sizes

**File:** Each component controls its own text sizes via Tailwind classes

| Element | Location | Classes | Actual Size |
|---------|----------|---------|-------------|
| **Hero H1** | `HeroSection.tsx:28` | `text-4xl md:text-5xl lg:text-6xl` | 36px → 48px → 60px |
| **Section H2** | Various `*Section.tsx` | `text-3xl md:text-4xl lg:text-5xl` | 30px → 36px → 48px |
| **Mission H3** | `MissionSection.tsx:56` | `text-xl md:text-2xl` | 20px → 24px |
| **Body Text** | `globals.css:67` | Default | 16px (1rem) |
| **Button Text** | `Button.tsx:30-32` | `text-sm/base/lg` | 14px/16px/18px |
| **Navigation** | `Header.tsx:56` | `text-sm` | 14px |

### Font Weights

**File:** `app/globals.css`

```css
/* Line 76-79 */
h1, h2, h3, h4, h5, h6 {
  font-weight: 600;  /* Semi-bold for headings */
  line-height: 1.2;
}
```

| Weight | Class | Where Used |
|--------|-------|------------|
| 400 (normal) | `font-normal` | Body text (default) |
| 500 (medium) | `font-medium` | Buttons, links |
| 600 (semi-bold) | `font-semibold` | Headings, emphasis |
| 700 (bold) | `font-bold` | Hero headlines |

---

## 📏 Spacing & Layout

### Section Padding

All sections use responsive vertical padding:

| Section | File | Line | Classes | Mobile | Desktop |
|---------|------|------|---------|--------|---------|
| Hero | `HeroSection.tsx` | 22 | `py-20 md:py-32` | 80px | 128px |
| Problem | `ProblemSection.tsx` | 21 | `py-20 md:py-28` | 80px | 112px |
| Mission | `MissionSection.tsx` | 22 | `py-20 md:py-28` | 80px | 112px |
| Newsletter | `NewsletterSection.tsx` | 73 | `py-20 md:py-28` | 80px | 112px |

**To change all sections at once:**
Add to `globals.css`:
```css
section {
  padding-top: 5rem;    /* 80px */
  padding-bottom: 5rem;
}

@media (min-width: 768px) {
  section {
    padding-top: 7rem;   /* 112px */
    padding-bottom: 7rem;
  }
}
```

### Container Max Widths

**File:** `components/ui/Container.tsx` (Lines 28-34)

| Size | Class | Max Width | When To Use |
|------|-------|-----------|-------------|
| `sm` | `max-w-screen-sm` | 640px | Narrow content |
| `md` | `max-w-screen-md` | 768px | Forms, simple content |
| `lg` | `max-w-screen-lg` | 1024px | Balanced width |
| `xl` | `max-w-screen-xl` | 1280px | **Default, most sections** |
| `2xl` | `max-w-screen-2xl` | 1536px | Header, Footer |
| `full` | `max-w-full` | 100% | Full width |

**Current usage:**
- Header/Footer: `2xl` (1536px)
- Most sections: `xl` (1280px)
- Newsletter form: `lg` (1024px)

### Element Spacing

#### Card Gaps
**File:** `MissionSection.tsx` (Line 37)
```tsx
className="grid grid-cols-1 md:grid-cols-2 gap-8"
// gap-8 = 32px between cards
```

**Options:** `gap-4` (16px), `gap-6` (24px), `gap-8` (32px), `gap-12` (48px)

#### Button Padding
**File:** `components/ui/Button.tsx` (Lines 30-32)

| Size | Height | Horizontal Padding |
|------|--------|--------------------|
| `sm` | 36px | 16px (`px-4`) |
| `md` | 44px | 24px (`px-6`) |
| `lg` | 56px | 32px (`px-8`) |

#### Text Margins
Problem examples: `space-y-6` (24px vertical gap)
Mission cards: `space-y-3` (12px gap)

---

## 🔲 Border & Shape System

### Border Radius

#### Buttons
**File:** `components/ui/Button.tsx` (Lines 30-32)

```typescript
sm: 'h-9 px-4 text-sm rounded-full',   // Pill shape
md: 'h-11 px-6 text-base rounded-full', // Pill shape
lg: 'h-14 px-8 text-lg rounded-full',   // Pill shape
```

**Change to:**
- `rounded-md` → Small rounded (6px)
- `rounded-lg` → Medium rounded (8px)
- `rounded-xl` → Large rounded (12px)
- `rounded-2xl` → Extra large (16px)
- `rounded-3xl` → Super rounded (24px)
- `rounded-full` → Pill/pillow shape

#### Cards
**File:** `components/ui/Card.tsx` (Line 33)

```typescript
'rounded-xl transition-all duration-200'  // 12px corners
```

**File:** `MissionSection.tsx` (Line 39)
```tsx
className="bg-white/10 backdrop-blur-sm rounded-lg..."  // 8px corners
```

#### Input Fields
**File:** `NewsletterSection.tsx` (Line 91)

```tsx
className="...rounded-lg..."  // 8px corners
```

### Border Styles

#### Border Widths

| Class | Width | Where Used |
|-------|-------|------------|
| `border` | 1px | Default borders |
| `border-2` | 2px | Outline buttons |
| `border-t` | 1px top | Footer top border |
| `border-b` | 1px bottom | Header bottom |

#### Border Colors

From CSS variables:
- `border-border` → Uses `--border` (#e2e8f0)
- `border-border/40` → 40% opacity
- Custom: `border-white/20` → White at 20% opacity

---

## 🧩 Component Style Reference

### Buttons

**File:** `components/ui/Button.tsx`

| Property | Lines | Current Value | How To Change |
|----------|-------|---------------|---------------|
| **Colors** | 22-27 | 4 variants defined | Edit variant object |
| **Shapes** | 30-32 | `rounded-full` | Change to `rounded-lg`, etc. |
| **Sizes** | 30-32 | sm/md/lg | Edit height & padding |
| **Hover** | 23, 25 | `hover:bg-primary/90` | Change opacity or color |
| **Shadow** | 23 | `shadow-sm` | Change to `shadow-lg`, etc. |

**Variant details:**
```typescript
// Line 22-27
const variants = {
  primary: 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm',
  secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
  outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground',
  ghost: 'hover:bg-accent/10 text-foreground',
};
```

### Cards

**File:** `components/ui/Card.tsx`

| Property | Lines | Options |
|----------|-------|---------|
| **Variants** | 25-29 | default, bordered, elevated |
| **Padding** | 31-35 | none, sm, md, lg |
| **Corners** | 33 | `rounded-xl` |

```typescript
// Line 25-29
const variants = {
  default: 'bg-background',
  bordered: 'bg-background border border-border',
  elevated: 'bg-background shadow-lg border border-border/50',
};
```

### Header

**File:** `components/layout/Header.tsx`

| Element | Line | Style | Purpose |
|---------|------|-------|---------|
| Container | 34 | `sticky top-0 z-50` | Stays at top |
| Background | 34 | `bg-background/95 backdrop-blur` | Semi-transparent |
| Height | 36 | `h-16` (64px) | Header height |
| Logo size | 44 | `h-8 w-auto` | 32px tall |
| Link padding | 56 | `px-4 py-2` | 16px/8px |
| Link text | 56 | `text-sm` | 14px |
| Mobile menu | 77-94 | Hidden on md+ | Hamburger menu |

### Hero Section

**File:** `components/sections/HeroSection.tsx`

| Element | Line | Style |
|---------|------|-------|
| Section padding | 22 | `py-20 md:py-32` |
| Background | 24 | `bg-gradient-to-br from-accent/5` |
| Headline size | 28 | `text-4xl md:text-5xl lg:text-6xl` |
| Max width | 28 | `max-w-4xl` (896px) |
| Button size | 41 | `size="lg"` |

### Problem Section

**File:** `components/sections/ProblemSection.tsx`

| Element | Line | Style | Change To |
|---------|------|-------|-----------|
| **Background** | 21 | `bg-slate-900` | Any color |
| Text color | 21 | `text-white` | Match background |
| Heading | 24 | `text-3xl md:text-4xl lg:text-5xl` | Text sizes |
| Card spacing | 35 | `space-y-6` | Vertical gap |
| Card bg | 39 | `bg-white/10` | Translucent |
| Card border | 39 | `border-white/20` | Border color |
| Card hover | 39 | `hover:border-white/40` | Hover effect |
| Card padding | 39 | `p-6 md:p-8` | Inside spacing |
| Closing box | 50 | `bg-white/5 border-white/20` | Bottom callout |

### Mission Section

**File:** `components/sections/MissionSection.tsx`

| Element | Line | Style |
|---------|------|-------|
| Grid layout | 37 | `grid-cols-1 md:grid-cols-2` |
| Card gap | 37 | `gap-8` (32px) |
| Card variant | 40 | `bordered` |
| Card padding | 41 | `lg` (32px) |
| Card hover | 42 | `hover:shadow-lg hover:border-accent/50` |
| Icon container | 47 | `bg-accent/10 rounded-lg` |
| Icon size | 49 | `size={32}` (32px) |
| Icon color | 51 | `text-accent` |

### Newsletter Section

**File:** `components/sections/NewsletterSection.tsx`

| Element | Line | Style |
|---------|------|-------|
| Background | 73 | `bg-muted/50` |
| Max width | 74 | `max-w-2xl` (672px) |
| Form layout | 86 | `flex-col sm:flex-row` |
| Input height | 91 | `h-12` (48px) |
| Input border | 91 | `border-input` |
| Button height | 98 | `h-12` (48px) |
| Success bg | 111 | `bg-green-50` |
| Error bg | 117 | `bg-red-50` |

### Footer

**File:** `components/layout/Footer.tsx`

| Element | Line | Style |
|---------|------|-------|
| Background | 22 | `bg-muted/30` |
| Border | 22 | `border-t border-border` |
| Padding | 24 | `py-12 md:py-16` |
| Grid | 25 | `grid-cols-2 md:grid-cols-5` |
| Logo size | 34 | `h-8 w-auto` |
| Link size | 52 | `text-sm` |
| Link color | 52 | `text-muted-foreground` |
| Link hover | 52 | `hover:text-foreground` |

---

## ✨ Effects & Animations

### Shadows

**Tailwind shadow classes used:**

| Class | Box Shadow | Where Used |
|-------|------------|------------|
| `shadow-sm` | Small shadow | Primary buttons |
| `shadow-lg` | Large shadow | Card hover, elevated cards |
| `shadow-xl` | Extra large | Hero button hover |
| `shadow-2xl` | Huge shadow | Optional |

**File locations:**
- Button shadow: `Button.tsx` line 23
- Card hover shadow: `MissionSection.tsx` line 42
- Hero button: `HeroSection.tsx` line 41

**To modify globally in `globals.css`:**
```css
.shadow-custom {
  box-shadow: 0 10px 50px rgba(0, 0, 0, 0.2);
}
```

### Hover Effects

| Component | File | Line | Effect |
|-----------|------|------|--------|
| Buttons | `Button.tsx` | 23, 25 | Opacity change |
| Mission cards | `MissionSection.tsx` | 42 | Shadow + border color |
| Problem cards | `ProblemSection.tsx` | 39 | Border brightness |
| Navigation links | `Header.tsx` | 56 | Background color |
| Footer links | `Footer.tsx` | 52 | Text color |

### Transitions

**Global transition:** `globals.css` line 20

```typescript
// Button.tsx line 20
'transition-all duration-200'
```

**Durations:**
- `duration-200` → 200ms (default)
- `duration-300` → 300ms (smoother)
- `duration-500` → 500ms (slow)

**To change globally in `globals.css`:**
```css
* {
  transition-duration: 300ms;
}
```

---

## 📖 Quick Change Recipes

### Recipe 1: Change Brand Color

**Time: 2 minutes**

1. Open `app/globals.css`
2. **Line 9:** Change `--primary: #2ec4b6` to your color
   ```css
   --primary: #8b5cf6;  /* Purple */
   ```
3. **Line 54:** Update dark mode too
   ```css
   --primary: #8b5cf6;  /* Same color */
   ```
4. **Optional - Line 13:** Match accent color
   ```css
   --accent: #8b5cf6;
   ```
5. Save and refresh browser

**Result:** All buttons and primary elements now use your color!

### Recipe 2: Change Button Shape

**Time: 1 minute**

1. Open `components/ui/Button.tsx`
2. **Lines 30-32:** Change `rounded-full` to your preference
   ```typescript
   sm: 'h-9 px-4 text-sm rounded-lg',   // Medium rounded
   md: 'h-11 px-6 text-base rounded-xl', // Large rounded
   lg: 'h-14 px-8 text-lg rounded-2xl',  // Extra large
   ```
3. Save and refresh

**Options:**
- `rounded-md` → Subtle (6px)
- `rounded-lg` → Medium (8px)
- `rounded-xl` → Large (12px)
- `rounded-2xl` → Extra (16px)
- `rounded-full` → Pill shape

### Recipe 3: Change Section Background

**Time: 1 minute**

1. Open `components/sections/ProblemSection.tsx`
2. **Line 21:** Change `bg-slate-900`
   ```tsx
   // Dark purple:
   className="relative py-20 md:py-28 bg-purple-900 text-white"
   
   // Pure black:
   className="relative py-20 md:py-28 bg-black text-white"
   
   // Dark blue:
   className="relative py-20 md:py-28 bg-blue-950 text-white"
   ```
3. Save and refresh

### Recipe 4: Change All Font Sizes

**Time: 3 minutes**

1. Open `app/globals.css`
2. Add at the bottom (after line 85):
   ```css
   /* Custom font sizes */
   body {
     font-size: 18px;  /* Larger body text */
   }
   
   h1 {
     font-size: 4rem;   /* 64px */
   }
   
   h2 {
     font-size: 3rem;   /* 48px */
   }
   
   h3 {
     font-size: 2rem;   /* 32px */
   }
   ```
3. Save and refresh

### Recipe 5: Change Card Hover Effect

**Time: 2 minutes**

1. Open `components/sections/MissionSection.tsx`
2. **Line 42:** Modify hover classes
   ```tsx
   // Current:
   className="hover:shadow-lg hover:border-accent/50 transition-all duration-300 group"
   
   // Stronger effect:
   className="hover:shadow-2xl hover:border-accent hover:scale-105 transition-all duration-300 group"
   
   // Subtle effect:
   className="hover:shadow-md hover:border-accent/30 transition-all duration-300 group"
   ```
3. Save and refresh

### Recipe 6: Make Everything Wider

**Time: 2 minutes**

1. Open `components/ui/Container.tsx`
2. **Line 32:** Change default from `'xl'` to `'2xl'`
   ```typescript
   maxWidth = '2xl',  // Changed from 'xl'
   ```
3. Save and refresh

**Result:** All sections now use 1536px max-width instead of 1280px

### Recipe 7: Change All Section Spacing

**Time: 2 minutes**

1. Open `app/globals.css`
2. Add at bottom:
   ```css
   /* Tighter spacing */
   section {
     padding-top: 3rem !important;
     padding-bottom: 3rem !important;
   }
   
   /* Or more spacious */
   section {
     padding-top: 8rem !important;
     padding-bottom: 8rem !important;
   }
   ```
3. Save and refresh

### Recipe 8: Change Newsletter Button Color

**Time: 1 minute**

If you want the newsletter button to be a different color than other buttons:

1. Open `components/sections/NewsletterSection.tsx`
2. **Line 96:** Change `variant="primary"` to:
   ```tsx
   <Button variant="secondary">  {/* Gray button */}
   {/* or */}
   <Button variant="outline">    {/* Outlined button */}
   ```
3. Save and refresh

---

## 🗺️ File Reference Map

Quick lookup table for common changes:

| What to Change | File | Line(s) | Search For |
|----------------|------|---------|------------|
| **Colors** |
| Button color | `app/globals.css` | 9, 54 | `--primary:` |
| Page background | `app/globals.css` | 5 | `--background:` |
| Accent color | `app/globals.css` | 13 | `--accent:` |
| Problem section bg | `ProblemSection.tsx` | 21 | `bg-slate-900` |
| **Typography** |
| Font family | `app/layout.tsx` | 5-13 | `Geist` |
| Body font size | `app/globals.css` | 67 | `font-family` |
| Heading weights | `app/globals.css` | 76-79 | `h1, h2` |
| **Buttons** |
| Button shape | `Button.tsx` | 30-32 | `rounded-full` |
| Button sizes | `Button.tsx` | 30-32 | `h-9`, `h-11`, `h-14` |
| Button variants | `Button.tsx` | 22-27 | `const variants` |
| **Layout** |
| Page width | `Container.tsx` | 40 | `maxWidth = 'xl'` |
| Section padding | Various `*Section.tsx` | - | `py-20 md:py-28` |
| **Effects** |
| Card hover | `MissionSection.tsx` | 42 | `hover:shadow-lg` |
| Transition speed | `Button.tsx` | 20 | `duration-200` |
| Border radius | `Card.tsx` | 33 | `rounded-xl` |
| **Content** |
| Hero text | `content.config.ts` | 50-54 | `hero:` |
| Mission pillars | `content.config.ts` | 75-98 | `pillars:` |
| Footer links | `content.config.ts` | 109-133 | `footer:` |

---

## 🔍 Visual Element Finder

**"I see [X] on the page, where do I change it?"**

### Header / Navigation

| What You See | What It Is | File | Line |
|--------------|------------|------|------|
| Logo at top left | Site logo | `Header.tsx` | 38-46 |
| Navigation links | Nav menu | `Header.tsx` | 50-60 |
| Hamburger menu icon | Mobile menu button | `Header.tsx` | 64-72 |
| Sticky bar at top | Header container | `Header.tsx` | 34 |

### Hero Section

| What You See | What It Is | File | Line |
|--------------|------------|------|------|
| Big bold headline | Hero H1 | `HeroSection.tsx` | 27-30 |
| Main CTA button | Primary button | `HeroSection.tsx` | 38-41 |
| Gradient background | Background decoration | `HeroSection.tsx` | 24 |

### Dark Section (The Problem)

| What You See | What It Is | File | Line |
|--------------|------------|------|------|
| Dark background | Section bg color | `ProblemSection.tsx` | 21 |
| "The Problem" heading | Section title | `ProblemSection.tsx` | 24-26 |
| Transparent cards | Example cards | `ProblemSection.tsx` | 36-45 |
| Bottom text box | Closing statement | `ProblemSection.tsx` | 49-55 |

### Mission/Pillars Section

| What You See | What It Is | File | Line |
|--------------|------------|------|------|
| Cards with icons | Mission pillars | `MissionSection.tsx` | 38-66 |
| Colored icons | Icon components | `MissionSection.tsx` | 48-52 |
| Icon background circle | Icon container | `MissionSection.tsx` | 47 |
| Card borders | Card styling | `MissionSection.tsx` | 40-42 |

### Newsletter Section

| What You See | What It Is | File | Line |
|--------------|------------|------|------|
| Email input box | Form input | `NewsletterSection.tsx` | 87-95 |
| Subscribe button | Submit button | `NewsletterSection.tsx` | 97-106 |
| Success message | Success state | `NewsletterSection.tsx` | 110-114 |
| Light background | Section bg | `NewsletterSection.tsx` | 73 |

### Footer

| What You See | What It Is | File | Line |
|--------------|------------|------|------|
| Footer background | Footer container | `Footer.tsx` | 22 |
| Logo bottom left | Footer logo | `Footer.tsx` | 27-36 |
| Link columns | Footer sections | `Footer.tsx` | 40-58 |
| Copyright text | Copyright notice | `Footer.tsx` | 62-65 |

---

## 🔧 Troubleshooting

### Color didn't change

**Problem:** Changed `--primary` but buttons still old color

**Solutions:**
1. **Check dark mode:** Did you update line 54 too?
2. **Clear cache:** Hard refresh (Cmd+Shift+R / Ctrl+Shift+R)
3. **Check both places:** Some components have hardcoded colors
4. **Restart dev server:** Stop and run `npm run dev` again

### Button still same shape

**Problem:** Changed `rounded-full` but buttons still pill-shaped

**Solutions:**
1. **Save the file:** Make sure you saved `Button.tsx`
2. **Check all 3 sizes:** Lines 30, 31, and 32 all need updating
3. **Clear cache:** Hard refresh browser
4. **Check component:** Some buttons might override the class

### Text too small on mobile

**Problem:** Text is readable on desktop but tiny on mobile

**Solutions:**
1. **Check responsive classes:** Look for `text-sm md:text-base lg:text-lg`
2. **Increase base size:** Change first value (e.g., `text-base md:text-lg`)
3. **Global change:** Add to `globals.css`:
   ```css
   @media (max-width: 768px) {
     body { font-size: 18px; }
   }
   ```

### Hover effect not working

**Problem:** Hover styles don't appear

**Solutions:**
1. **Check transition:** Add `transition-all duration-200` to className
2. **Check opacity:** Some effects use opacity (e.g., `hover:bg-accent/10`)
3. **Check specificity:** Your CSS might be overridden by other styles
4. **Mobile testing:** Hover doesn't work on touch devices

### Section background changed but cards look wrong

**Problem:** Changed Problem section bg, now cards are invisible

**Solutions:**
1. **Adjust card opacity:** Change `bg-white/10` to higher value (e.g., `/20`, `/30`)
2. **Change card border:** Make border more visible (e.g., `border-white/40`)
3. **Match contrast:** Dark bg needs light cards, light bg needs dark cards

### Layout is too narrow / too wide

**Problem:** Content doesn't use full width or is too wide

**Solutions:**
1. **Container width:** Check `Container` component's `maxWidth` prop
2. **Change default:** Edit `Container.tsx` line 40 (change `'xl'` to `'2xl'` or `'lg'`)
3. **Per-section:** Each section can override with its own maxWidth prop

### Fonts didn't change

**Problem:** Changed font in `layout.tsx` but site looks the same

**Solutions:**
1. **Import the font:** Make sure you imported from `next/font/google`
2. **Apply variable:** Check line 28 in `layout.tsx` includes your font variable
3. **Clear cache:** Next.js caches fonts, restart dev server
4. **Check fallback:** Browser might use fallback, check font loaded in DevTools

### Spacing too tight/loose

**Problem:** Elements are too close together or too far apart

**Solutions:**
1. **Section padding:** Look for `py-20 md:py-28` in section files
2. **Change globally:** Add CSS rule in `globals.css` (see Recipe 7)
3. **Element margins:** Check for `space-y-*` or `gap-*` classes
4. **Card padding:** Look for `p-6 md:p-8` in card components

### Colors look different than expected

**Problem:** Hex color looks different on screen

**Solutions:**
1. **Check opacity:** Many colors use `/10`, `/20` opacity
2. **Check dark mode:** Your system might be in dark mode
3. **Check inheritance:** Element might inherit color from parent
4. **Use DevTools:** Inspect element to see actual computed color

---

## 🎓 Understanding the System

### How Colors Work

This template uses **two color systems**:

1. **CSS Variables** (`app/globals.css`)
   - Global colors used across multiple components
   - Easy to change in one place
   - Supports light/dark mode

2. **Tailwind Classes** (in components)
   - Component-specific colors
   - More granular control
   - Requires individual changes

**When to use which:**
- Global brand colors → CSS variables
- Section-specific colors → Tailwind classes

### File Organization

```
app/
├── globals.css          ← Global styles & CSS variables
└── layout.tsx           ← Fonts & metadata

components/
├── ui/                  ← Reusable components (Button, Card)
├── layout/              ← Header, Footer
└── sections/            ← Page sections (Hero, Problem, etc.)

config/
└── content.config.ts    ← All text content
```

### The Tailwind Class Pattern

Most elements use this pattern:
```tsx
className="base-styles responsive-md responsive-lg hover-state"
```

Example:
```tsx
className="text-base md:text-lg lg:text-xl hover:text-accent"
//         ↑ mobile   ↑ tablet   ↑ desktop  ↑ on hover
```

---

## 📚 Additional Resources

### Related Documentation

- **[README.md](./README.md)** - Project overview and setup
- **[CUSTOMIZATION.md](./CUSTOMIZATION.md)** - Content customization guide
- **[config/content.config.ts](./config/content.config.ts)** - Content examples

### External Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Lucide Icons](https://lucide.dev/icons/) - All available icons
- [Google Fonts](https://fonts.google.com/) - Font options

### Quick Links

- **Change content:** Edit `config/content.config.ts`
- **Change design:** Use this guide
- **Change structure:** Edit component files

---

## 💡 Pro Tips

1. **Always test mobile:** Use browser DevTools (F12) to test responsive design
2. **Use DevTools Inspector:** Right-click → Inspect to see actual CSS
3. **Make small changes:** Change one thing at a time to see the effect
4. **Keep backups:** Commit to git before major changes
5. **Use search:** Press Cmd+F / Ctrl+F to find values in this guide
6. **Start simple:** Use the Quick Recipes before diving into advanced changes
7. **Check both modes:** Test in light and dark mode (system preferences)
8. **Document changes:** Keep notes of what you've customized

---

**Questions or need help?** 
- Check the Troubleshooting section above
- Search this guide for keywords
- Review the Visual Element Finder
- Use browser DevTools to inspect elements

---

**Last Updated:** November 2025  
**Version:** 1.0

