# 🖼️ How to Add Hero Background Image

> **Note:** The hero section is now a full viewport "above the fold" design that fills the entire screen height for maximum impact.

## Quick Setup (3 Steps)

### 1. **Add Your Image File**

Place your background image in the `public/images/` directory:

```
public/
└── images/
    └── hero-bg.jpg  ← Your image here
```

**Supported formats:**
- `.jpg` / `.jpeg` (recommended for photos)
- `.png` (for transparency, but larger file size)
- `.webp` (best compression, modern browsers)

**Recommended image specs:**
- **Width:** 1920px minimum (for large screens)
- **Height:** 1080px or more (full viewport height)
- **File size:** < 500 KB (optimized for web)
- **Aspect ratio:** 16:9 or taller (works with portrait-oriented images)
- **Composition:** Keep important elements centered (text overlays in center)

---

### 2. **Update the Configuration**

The image path is already configured in `config/content.config.ts`:

```typescript
hero: {
  headline: "...",
  subheadline: "...",
  cta: "Get Involved",
  ctaLink: "#join-movement",
  backgroundImage: "/images/hero-bg.jpg", // ← Your image path
},
```

**To change the image:**
- Replace `hero-bg.jpg` with your image filename
- Or update the entire path if you organize images differently

**To remove the background image:**
```typescript
backgroundImage: "", // Empty string = gradient background
// OR
// backgroundImage: undefined, // No background image property
```

---

### 3. **Test It**

```bash
npm run dev
# Visit http://localhost:3000
```

Your background image should now appear in the hero section!

---

## 🎨 Customization Options

### Adjust the Dark Overlay

The dark overlay helps text remain readable. To adjust it:

**File:** `components/sections/HeroSection.tsx` (line ~44)

```tsx
// Current: 50% opacity black overlay
<div className="absolute inset-0 -z-10 bg-black/50" />

// Lighter overlay (30%)
<div className="absolute inset-0 -z-10 bg-black/30" />

// Darker overlay (70%)
<div className="absolute inset-0 -z-10 bg-black/70" />

// No overlay (text might be hard to read)
<div className="absolute inset-0 -z-10 bg-black/0" />

// Colored overlay (e.g., blue tint)
<div className="absolute inset-0 -z-10 bg-blue-900/40" />
```

---

### Change Background Position

**File:** `components/sections/HeroSection.tsx` (line ~40)

```tsx
// Current: centered
className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"

// Top-aligned (show top of image)
className="absolute inset-0 -z-10 bg-cover bg-top bg-no-repeat"

// Bottom-aligned
className="absolute inset-0 -z-10 bg-cover bg-bottom bg-no-repeat"

// Left-aligned
className="absolute inset-0 -z-10 bg-cover bg-left bg-no-repeat"

// Right-aligned
className="absolute inset-0 -z-10 bg-cover bg-right bg-no-repeat"
```

---

### Change Background Size

```tsx
// Current: cover (fills entire area, may crop)
className="... bg-cover ..."

// Contain (shows entire image, may have empty space)
className="... bg-contain ..."

// Auto (original size)
className="... bg-auto ..."
```

---

### Add Blur Effect

For a modern, subtle look:

```tsx
<div 
  className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat blur-sm"
  style={{ backgroundImage: `url(${backgroundImage})` }}
/>
```

---

### Parallax Effect (Advanced)

For a parallax scrolling effect, you would need a library like `react-parallax` or custom scroll event listeners. This is more advanced and not included by default.

---

## 🖼️ Image Optimization Tips

### 1. **Compress Your Image**

Use online tools:
- [TinyPNG](https://tinypng.com/) - For PNG/JPG
- [Squoosh](https://squoosh.app/) - Google's image optimizer
- [ImageOptim](https://imageoptim.com/) - Mac app

**Goal:** Reduce file size to < 500 KB without visible quality loss

---

### 2. **Use Modern Formats**

**WebP format** offers better compression:

```typescript
// In content.config.ts
backgroundImage: "/images/hero-bg.webp", // 30-50% smaller than JPG
```

Convert images at [Squoosh.app](https://squoosh.app/)

---

### 3. **Responsive Images (Advanced)**

For different screen sizes:

**File:** `components/sections/HeroSection.tsx`

```tsx
{backgroundImage && (
  <>
    <picture className="absolute inset-0 -z-10">
      <source 
        media="(min-width: 1200px)" 
        srcSet="/images/hero-bg-large.jpg" 
      />
      <source 
        media="(min-width: 768px)" 
        srcSet="/images/hero-bg-medium.jpg" 
      />
      <img 
        src="/images/hero-bg-small.jpg"
        alt=""
        className="w-full h-full object-cover"
      />
    </picture>
    <div className="absolute inset-0 -z-10 bg-black/50" />
  </>
)}
```

---

## 🎭 Example Configurations

### High-Impact Photo Background

```typescript
hero: {
  headline: "Transform Your **Digital Experience**",
  subheadline: "Join thousands of users taking control",
  cta: "Get Started",
  ctaLink: "#signup",
  backgroundImage: "/images/hero-tech.jpg",
},
```

**In HeroSection.tsx:**
```tsx
// Strong dark overlay for readability
<div className="absolute inset-0 -z-10 bg-black/60" />
```

---

### Subtle Background Pattern

```typescript
hero: {
  headline: "Welcome to Element",
  subheadline: "Building better digital experiences",
  cta: "Learn More",
  ctaLink: "#about",
  backgroundImage: "/images/pattern-light.png",
},
```

**In HeroSection.tsx:**
```tsx
// No overlay or very light
<div className="absolute inset-0 -z-10 bg-white/10" />
```

---

### No Background (Gradient Only)

```typescript
hero: {
  headline: "Simple and Clean",
  subheadline: "Focus on the message",
  cta: "Get Started",
  ctaLink: "#cta",
  backgroundImage: "", // Empty = uses gradient
},
```

---

## 🐛 Troubleshooting

### Image Not Showing?

**1. Check the file path:**
```typescript
backgroundImage: "/images/hero-bg.jpg", // Correct
backgroundImage: "images/hero-bg.jpg",  // ❌ Missing leading slash
backgroundImage: "/public/images/hero-bg.jpg", // ❌ Don't include 'public'
```

**2. Verify file exists:**
```bash
ls public/images/
# Should show: hero-bg.jpg
```

**3. Check file name case:**
- `hero-bg.jpg` ≠ `Hero-Bg.JPG`
- File names are case-sensitive on some systems

**4. Clear browser cache:**
- Hard refresh: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)

**5. Restart dev server:**
```bash
# Stop server (Ctrl+C)
npm run dev
```

---

### Text Hard to Read?

**Increase overlay darkness:**
```tsx
<div className="absolute inset-0 -z-10 bg-black/70" />
// Change from /50 to /70 or /80
```

**Add text shadow:**
```tsx
<h1 className="... drop-shadow-2xl">
// Change from drop-shadow-lg to drop-shadow-2xl
```

**Use gradient overlay:**
```tsx
<div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/80 to-black/30" />
// Darker at bottom, lighter at top
```

---

### Image Looks Stretched or Cropped?

**Change background size:**
```tsx
// From:
className="bg-cover"

// To:
className="bg-contain" // Shows entire image
```

**Adjust position:**
```tsx
className="bg-center" // Try: bg-top, bg-bottom, bg-left, bg-right
```

---

### Performance Issues (Slow Loading)?

**1. Compress the image:**
- Use [TinyPNG](https://tinypng.com/)
- Target: < 500 KB file size

**2. Use WebP format:**
- Better compression than JPG
- Supported by all modern browsers

**3. Add loading optimization:**
```tsx
<div 
  className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
  style={{ 
    backgroundImage: `url(${backgroundImage})`,
    imageRendering: 'crisp-edges', // Faster rendering
  }}
/>
```

---

## 📝 Complete Example

**File: `config/content.config.ts`**
```typescript
hero: {
  headline: "At Element, we believe that **people should control** the tech they bought and own.",
  subheadline: "Reclaiming ownership in the digital age",
  cta: "Join the Movement",
  ctaLink: "#join-movement",
  backgroundImage: "/images/hero-bg.jpg",
},
```

**File structure:**
```
public/
└── images/
    ├── hero-bg.jpg      ← Your main image
    ├── logo.svg         ← Existing logo
    └── ...              ← Other images
```

**Result:** Hero section with full-width background image, dark overlay, and white text with shadow.

---

## 🎨 Free Stock Photo Resources

If you need background images:

- [Unsplash](https://unsplash.com/) - High-quality, free photos
- [Pexels](https://pexels.com/) - Free stock photos
- [Pixabay](https://pixabay.com/) - Free images & videos
- [Burst](https://burst.shopify.com/) - Free business photos

**Search terms for hero backgrounds:**
- "technology abstract"
- "digital network"
- "modern office"
- "workspace minimal"
- "tech background"

---

## ✅ Checklist

Before going live:

- [ ] Image optimized (< 500 KB)
- [ ] Image dimensions appropriate (1920x1080+ px)
- [ ] Text is readable with overlay
- [ ] Tested on mobile devices
- [ ] Tested on different screen sizes
- [ ] Image loads quickly
- [ ] No copyright issues (use free stock or own images)

---

**Need help?** Check the troubleshooting section above or refer to:
- [DESIGN-GUIDE.md](./DESIGN-GUIDE.md) for styling
- [CUSTOMIZATION.md](./CUSTOMIZATION.md) for content changes

---

**Last Updated:** November 10, 2025  
**Feature:** Hero Background Image Support

