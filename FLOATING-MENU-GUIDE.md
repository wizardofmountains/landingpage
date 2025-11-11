# 🎯 Floating Menu Design Guide

## What Is This?

Your website now features a **premium floating menu design** where the logo and navigation are separate, free-floating elements that sit over your content with glass-morphism effects.

This is the same design pattern used by high-end brands like Apple, Stripe, and modern SaaS products.

---

## ✨ Design Features

### 1. **Floating Logo (Left)**
- 🎨 Free-floating pill-shaped container
- 📍 Fixed position: top-left corner
- 🔍 Rounded corners with backdrop blur
- ⚡ Hover effects and smooth transitions
- 🌟 Glass-morphism aesthetic

### 2. **Floating Navigation (Right)**
- 🎨 Pill-shaped menu container
- 📍 Fixed position: top-right corner
- 🔘 Rounded navigation links inside
- ⚡ Smooth hover states
- 🌟 Consistent glass-morphism styling

### 3. **Mobile Menu**
- 📱 Floating hamburger button (top-right)
- 📋 Dropdown menu with rounded corners
- 🎭 Smooth animations
- 💫 Dark overlay with backdrop blur

---

## 🎨 Visual Layout

```
Desktop View:
┌──────────────────────────────────────────┐
│  [🏠 Logo]                    [Nav Menu] │  ← Both floating
│   floating                      floating  │
│   left                            right   │
│                                           │
│        FULL-SCREEN HERO CONTENT          │
│                                           │
└──────────────────────────────────────────┘

Mobile View:
┌──────────────────────────────────────────┐
│  [🏠 Logo]                           [☰] │  ← Logo left, Menu right
│                                           │
│        FULL-SCREEN HERO CONTENT          │
│                                           │
└──────────────────────────────────────────┘
     When tapped → Dropdown menu appears
```

---

## 📂 Technical Implementation

### Floating Logo (Lines 35-50)

```typescript
<div className="fixed top-6 left-6 md:left-8 z-50">
  <Link 
    href="/" 
    className="flex items-center px-4 py-3 bg-black/40 backdrop-blur-md rounded-full border border-white/10 hover:bg-black/50 transition-all duration-300 shadow-lg hover:shadow-xl"
  >
    <Image src={logo} alt={siteName} />
  </Link>
</div>
```

**Key Classes:**
- `fixed` - Stays in place when scrolling
- `top-6 left-6` - Position from edges (24px on mobile, 32px on desktop)
- `bg-black/40` - Semi-transparent dark background
- `backdrop-blur-md` - Glass-morphism blur effect
- `rounded-full` - Pill shape
- `border border-white/10` - Subtle border
- `shadow-lg` - Floating shadow

---

### Floating Navigation (Lines 52-66)

```typescript
<nav className="fixed top-6 right-6 md:right-8 z-50 hidden md:block">
  <div className="flex items-center gap-1 px-3 py-2 bg-black/40 backdrop-blur-md rounded-full border border-white/10 shadow-lg">
    {navigation.map((link, index) => (
      <Link
        key={`nav-${index}-${link.label}`}
        href={link.href}
        className="px-4 py-2 text-sm font-medium text-white/90 hover:text-white hover:bg-white/20 rounded-full"
      >
        {link.label}
      </Link>
    ))}
  </div>
</nav>
```

**Key Classes:**
- `fixed top-6 right-6` - Position at top-right
- `hidden md:block` - Only visible on desktop
- `gap-1` - Small spacing between links
- `rounded-full` - Each link is pill-shaped
- `hover:bg-white/20` - Highlight on hover

---

### Mobile Menu Button (Lines 68-79)

```typescript
<div className="fixed top-6 right-6 z-50 md:hidden">
  <Button className="px-4 py-3 bg-black/40 backdrop-blur-md rounded-full border border-white/10 text-white hover:bg-black/50">
    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
  </Button>
</div>
```

---

### Mobile Dropdown (Lines 81-100)

```typescript
<div className="fixed top-20 right-6 z-50 md:hidden">
  <div className="flex flex-col gap-2 p-3 bg-black/90 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl min-w-[200px]">
    {/* Links here */}
  </div>
</div>
```

**Key Features:**
- `top-20` - Below the menu button
- `rounded-2xl` - More rounded for dropdowns
- `bg-black/90` - Darker for better readability
- `min-w-[200px]` - Minimum width

---

## 🎨 Customization Recipes

### Recipe 1: Change Floating Positions

**File:** `components/layout/Header.tsx`

**Move logo to center-left:**
```typescript
// Line 36: Change left-6 to left-1/4
<div className="fixed top-6 left-1/4 md:left-8 z-50">
```

**Move navigation to center:**
```typescript
// Line 53: Center the navigation
<nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:block">
```

**Increase spacing from edges:**
```typescript
// Change top-6 to top-8 (32px to 40px)
<div className="fixed top-8 left-8 md:left-12 z-50">
<nav className="fixed top-8 right-8 md:right-12 z-50">
```

---

### Recipe 2: Adjust Glass-Morphism Effect

**File:** `components/layout/Header.tsx`

**More blur (stronger glass effect):**
```typescript
// Change backdrop-blur-md to backdrop-blur-lg
backdrop-blur-lg
```

**Less blur (more transparent):**
```typescript
// Change backdrop-blur-md to backdrop-blur-sm
backdrop-blur-sm
```

**Change background opacity:**
```typescript
// Current: bg-black/40 (40% opacity)
// Darker: bg-black/60
// Lighter: bg-black/30
// Colored: bg-blue-900/40
```

---

### Recipe 3: Change Border Style

**File:** `components/layout/Header.tsx`

**Remove border:**
```typescript
// Remove: border border-white/10
```

**Thicker border:**
```typescript
// Change to: border-2 border-white/20
```

**Colored border:**
```typescript
// Change to: border border-primary/50
```

---

### Recipe 4: Change Shape

**Square with rounded corners:**
```typescript
// Change rounded-full to rounded-2xl
className="... rounded-2xl ..."
```

**More rounded:**
```typescript
// Change rounded-full to rounded-3xl
className="... rounded-3xl ..."
```

**Sharp corners:**
```typescript
// Change rounded-full to rounded-lg
className="... rounded-lg ..."
```

---

### Recipe 5: Change Shadow Intensity

**File:** `components/layout/Header.tsx`

**Stronger shadow (more elevation):**
```typescript
// Change shadow-lg to shadow-2xl
shadow-2xl hover:shadow-3xl
```

**Subtle shadow:**
```typescript
// Change shadow-lg to shadow-md
shadow-md hover:shadow-lg
```

**Colored shadow (glow effect):**
```typescript
// Add shadow color
shadow-lg shadow-primary/20
```

---

### Recipe 6: Adjust Link Spacing

**File:** `components/layout/Header.tsx` (Line 54)

**More spacing between links:**
```typescript
// Change gap-1 to gap-2 or gap-3
<div className="flex items-center gap-3 px-3 py-2 ...">
```

**Tighter spacing:**
```typescript
// Change gap-1 to gap-0
<div className="flex items-center gap-0 px-3 py-2 ...">
```

---

### Recipe 7: Change Text Color

**File:** `components/layout/Header.tsx` (Line 60)

**Brighter white:**
```typescript
// Change text-white/90 to text-white
className="... text-white hover:text-white ..."
```

**Add color on hover:**
```typescript
// Change hover:text-white to hover:text-primary
className="... text-white/90 hover:text-primary ..."
```

**Different default color:**
```typescript
// Change to any color
className="... text-blue-200 hover:text-white ..."
```

---

### Recipe 8: Change Hover Effects

**File:** `components/layout/Header.tsx` (Line 60)

**Stronger hover background:**
```typescript
// Change hover:bg-white/20 to hover:bg-white/30
className="... hover:bg-white/30 ..."
```

**Colored hover:**
```typescript
// Change to accent color
className="... hover:bg-primary/20 ..."
```

**Scale on hover:**
```typescript
// Add scale effect
className="... hover:scale-105 transition-transform ..."
```

---

## 🎨 Advanced Customizations

### Add Scrolled State (Logo & Menu become solid)

**File:** `components/layout/Header.tsx`

Add state and scroll listener:

```typescript
const [isScrolled, setIsScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 100);
  };
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

// Update className with conditional styling:
className={`fixed top-6 left-6 z-50 transition-all duration-300 ${
  isScrolled ? 'bg-black/80' : 'bg-black/40'
}`}
```

---

### Center Both Logo and Navigation

For a centered layout (both elements in the middle):

```typescript
{/* Logo - Center Left */}
<div className="fixed top-6 left-1/2 -translate-x-[250px] z-50">
  {/* Logo here */}
</div>

{/* Navigation - Center Right */}
<nav className="fixed top-6 left-1/2 translate-x-[50px] z-50">
  {/* Nav here */}
</nav>
```

---

### Combine Logo and Nav on Scroll

Make them merge into one bar when scrolling:

```typescript
const [isScrolled, setIsScrolled] = useState(false);

return (
  <header className={`fixed top-6 left-6 right-6 z-50 transition-all duration-500 ${
    isScrolled ? 'top-4' : ''
  }`}>
    <div className={`flex items-center ${
      isScrolled ? 'justify-between bg-black/60 backdrop-blur-lg rounded-full p-4' : 'justify-between'
    }`}>
      {/* Logo and nav side by side when scrolled */}
    </div>
  </header>
);
```

---

## 📱 Mobile-Specific Adjustments

### Change Mobile Button Size

**File:** `components/layout/Header.tsx` (Line 70-73)

```typescript
// Larger button
className="px-5 py-4 ..."

// Smaller button
className="px-3 py-2 ..."
```

---

### Change Mobile Menu Position

**File:** `components/layout/Header.tsx` (Line 83)

```typescript
// Further from top
<div className="fixed top-24 right-6 ...">

// Closer to top
<div className="fixed top-16 right-6 ...">

// Full-width menu
<div className="fixed top-20 left-6 right-6 ...">
```

---

## 🎭 Animation Enhancements

### Add Entrance Animation

Add to your `globals.css`:

```css
@keyframes float-in {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.floating-element {
  animation: float-in 0.5s ease-out;
}
```

Then add the class:
```typescript
<div className="fixed top-6 left-6 z-50 floating-element">
```

---

### Add Subtle Hover Scale

**File:** `components/layout/Header.tsx`

```typescript
// Add to logo and nav containers
className="... hover:scale-105 transition-all duration-300 ..."
```

---

## 🎨 Color Schemes

### Light Mode Alternative

For light backgrounds (if not using background image):

```typescript
// Logo container
className="bg-white/80 backdrop-blur-md border border-gray-200/50 shadow-xl"

// Navigation
className="bg-white/80 backdrop-blur-md border border-gray-200/50"

// Links
className="text-gray-900 hover:text-gray-900 hover:bg-gray-100"
```

---

### Accent Color Theme

For branded floating menus:

```typescript
// Logo with primary color
className="bg-primary/20 backdrop-blur-md border border-primary/30"

// Navigation with accent
className="bg-accent/20 backdrop-blur-md border border-accent/30"

// Links
className="text-white hover:bg-primary/30"
```

---

## ✅ Browser Compatibility

- ✅ Chrome, Safari, Firefox, Edge (all modern versions)
- ✅ iOS Safari, Android Chrome
- ✅ Backdrop blur supported in all major browsers
- ✅ Graceful degradation without blur support

---

## 🔍 Troubleshooting

### Issue 1: Elements Not Floating
**Solution:** Ensure `fixed` positioning and `z-50` are present

### Issue 2: Blur Not Working
**Solution:** Check if `backdrop-blur-md` is applied and browser supports it

### Issue 3: Logo Too Large/Small
**Solution:** Adjust image dimensions in Line 46: `className="h-8 w-auto"` (change `h-8` to `h-10`, `h-12`, etc.)

### Issue 4: Links Too Close Together
**Solution:** Increase `gap-1` to `gap-2` or `gap-3` in navigation container (Line 54)

### Issue 5: Mobile Menu Behind Content
**Solution:** Ensure `z-50` is on all floating elements

---

## 📊 Spacing Reference

| Value | Pixels | Use Case |
|-------|--------|----------|
| `top-4` | 16px | Tight spacing |
| `top-6` | 24px | Current default |
| `top-8` | 32px | More breathing room |
| `top-10` | 40px | Spacious |
| `top-12` | 48px | Very spacious |

---

## 🎯 Design Principles

1. **Minimal** - No full-width bars, only essential elements
2. **Floating** - Elements hover above content with shadows
3. **Glass-morphism** - Backdrop blur for premium feel
4. **Responsive** - Adapts gracefully to mobile
5. **Accessible** - Maintains keyboard navigation and ARIA labels

---

## 📚 Related Files

- `components/layout/Header.tsx` - Main header component
- `components/sections/HeroSection.tsx` - Hero section (full-screen)
- `app/globals.css` - Global styles and animations
- `DESIGN-GUIDE.md` - Complete design reference

---

**Your site now has a premium floating menu design! 🎉**

This creates a modern, high-end aesthetic that lets your hero content shine while keeping navigation accessible and elegant.

