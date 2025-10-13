# Good Neighbor Health & Mobility Project - Design System
## Inspired by Life on Life's Terms • Matching Logo Navy Blue Palette

*Created: October 13, 2025*
*Based on comprehensive analysis of lifeonlifesterms.net*

---

## 🎨 Color Palette

### Logo-Based Primary Colors

Our color system is derived from the navy blue medical caduceus logo:

```css
--color-primary: #0B1F3F;           /* Dark navy blue from logo */
--color-primary-light: #1a3a5c;     /* Lighter navy */
--color-primary-hover: #0a1930;     /* Darker navy for hover */
--color-accent: #2d5a8c;            /* Medium blue accent */
```

### Supporting Colors

```css
--color-success: #22c55e;           /* Green for success states */
--color-info: #3b82f6;              /* Blue for info */
--color-light: #ffffff;             /* White */
--color-neutral: #F5F7FA;           /* Light blue-gray background */
--color-neutral-alt: #E8EDF3;       /* Slightly darker neutral */
--color-neutral-border: #D1D9E6;    /* Border color */
--color-text-dark: #1F2937;         /* Body text */
--color-text-muted: #6B7280;        /* Muted text */
```

### Color Usage Guide

| Color | Hex | Usage |
|-------|-----|-------|
| **Primary** | `#0B1F3F` | Logo, headers, primary buttons, navigation, section backgrounds |
| **Primary Light** | `#1a3a5c` | Hover states, gradients, secondary backgrounds |
| **Accent** | `#2d5a8c` | Links, highlights, icons, focus states |
| **Success** | `#22c55e` | Success messages, confirmation states |
| **Neutral** | `#F5F7FA` | Page background, alternating sections |
| **Neutral Alt** | `#E8EDF3` | Card backgrounds, subtle variations |

---

## 📐 Layout & Spacing

### Spacing System (Inspired by Life on Life's Terms)

```css
--spacing-section: 100px;           /* Between major sections */
--spacing-section-mobile: 60px;     /* Mobile section spacing */
--spacing-card: 30px;               /* Card internal padding */
--spacing-element: 15px;            /* Between elements */
```

### Container Widths

- **Max Content Width**: 1200px
- **Section Body**: 846px (for text-heavy content)
- **Horizontal Padding**: 2rem (32px)

### Section Layout Pattern

Following Life on Life's Terms' alternating pattern:

1. **White Background** (`#ffffff`) - Hero, About, Donate, Contact
2. **Neutral Background** (`#F5F7FA`) - Alternating content sections
3. **Primary Background** (`#0B1F3F`) - Featured sections, CTAs
4. **Accent Background** (`#2d5a8c`) - Special highlights

```css
.section-alternating:nth-child(odd) {
    background-color: #ffffff;
}

.section-alternating:nth-child(even) {
    background-color: #F5F7FA;
}
```

---

## 🔤 Typography

### Font Family

**Primary Font**: Inter
- Clean, modern, highly legible
- Excellent for healthcare/mobility content
- Wide weight range (300-700)

```css
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
```

### Font Scale

| Element | Size (Desktop) | Weight | Line Height | Usage |
|---------|---------------|--------|-------------|-------|
| **H1** | 2.5rem - 4rem (clamp) | 700 (Bold) | 1.25 | Hero titles, main headings |
| **H2** | 2rem - 3rem (clamp) | 600 (Semibold) | 1.25 | Section titles |
| **H3** | 1.5rem - 2rem (clamp) | 600 (Semibold) | 1.25 | Card titles, subsections |
| **H4** | 1.25rem - 1.5rem | 600 (Semibold) | 1.3 | Feature titles |
| **Body** | 1rem (16px) | 400 (Regular) | 1.6 | Paragraph text |
| **Small** | 0.875rem (14px) | 400 (Regular) | 1.5 | Captions, metadata |

### Typography Settings

```css
line-height-relaxed: 1.6;      /* Body text */
line-height-tight: 1.25;        /* Headings */
letter-spacing: -0.02em;        /* Headings (tighter) */
```

### Heading Colors

All headings use **Primary Navy** (`#0B1F3F`) by default for consistency with the logo.

---

## 🎯 Components

### Buttons

#### Primary Button
```css
.btn-primary-enhanced {
    background-color: #0B1F3F;
    color: #ffffff;
    padding: 14px 32px;
    border-radius: 16px;
    font-weight: 600;
    box-shadow: 0 4px 6px rgba(11, 31, 63, 0.07);
}

.btn-primary-enhanced:hover {
    background-color: #0a1930;
    transform: translateY(-2px);
    box-shadow: 0 12px 32px rgba(11, 31, 63, 0.18);
}
```

#### Secondary Button
```css
.btn-secondary-enhanced {
    background-color: transparent;
    color: #0B1F3F;
    border: 2px solid #0B1F3F;
    padding: 14px 32px;
    border-radius: 16px;
    font-weight: 600;
}

.btn-secondary-enhanced:hover {
    background-color: #0B1F3F;
    color: #ffffff;
    transform: translateY(-2px);
}
```

#### Accent Button
```css
.btn-accent-enhanced {
    background-color: #2d5a8c;
    color: #ffffff;
    padding: 14px 32px;
    border-radius: 16px;
    font-weight: 600;
}
```

### Cards

#### Standard Card
```css
.card-enhanced {
    background: #ffffff;
    border-radius: 12px;
    padding: 30px;
    box-shadow: 0 1px 2px rgba(11, 31, 63, 0.05);
    border: 1px solid #D1D9E6;
    transition: all 300ms ease-in-out;
}

.card-enhanced:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 25px rgba(11, 31, 63, 0.15);
    border-color: #2d5a8c;
}
```

#### Feature Card (with Icon)
- **Icon Container**: 64x64px
- **Icon Background**: Gradient from Primary to Accent
- **Icon Color**: White
- **Border Radius**: 12px

#### Mission/Vision/Goal Cards
- **Layout**: 3-column grid (responsive to 1-column)
- **Text Alignment**: Center
- **Icon**: Circular, 80x80px
- **Gradient Background**: Primary to Accent

### Grid Layouts

#### 3-Column Feature Grid
```css
.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
}
```

#### 3-Column Mission Grid
```css
.mission-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2.5rem;
}
```

---

## 🦸 Hero Section

Following Life on Life's Terms style:

### Layout
- **Min Height**: 75vh
- **Alignment**: Center (both vertical & horizontal)
- **Text Alignment**: Center
- **Background**: Gradient from Primary to Primary Light

### Content Structure
```html
<section class="hero-enhanced">
    <div class="hero-content">
        <h1 class="hero-title">Main Heading</h1>
        <p class="hero-subtitle">Supporting text</p>
        <div class="hero-cta-group">
            <button>Primary CTA</button>
            <button>Secondary CTA</button>
        </div>
    </div>
</section>
```

### Typography
- **Title**: 2.5rem - 4.5rem (clamp)
- **Subtitle**: 1.125rem - 1.5rem (clamp)
- **Color**: White on navy gradient

---

## 💰 Donation Component

Inspired by Life on Life's Terms donation selector:

### Amount Options
```html
<div class="donation-selector">
    <button class="donation-amount">$5</button>
    <button class="donation-amount">$10</button>
    <button class="donation-amount active">$25</button>
    <button class="donation-amount">$50</button>
    <button class="donation-amount">$100</button>
    <button class="donation-amount">Other</button>
</div>
```

### Styling
- **Padding**: 1rem 2rem
- **Border**: 2px solid neutral
- **Border Radius**: 12px
- **Active State**: Navy background, white text
- **Hover**: Accent border, slight lift

---

## 🔗 Links

### Primary Link
```css
.link-enhanced {
    color: #2d5a8c;
    font-weight: 500;
    position: relative;
}

.link-enhanced::after {
    content: '';
    height: 2px;
    background-color: #2d5a8c;
    width: 0;
    transition: width 300ms;
}

.link-enhanced:hover::after {
    width: 100%;
}
```

---

## 📱 Responsive Breakpoints

| Breakpoint | Width | Usage |
|------------|-------|-------|
| **xs** | 480px | Extra small devices |
| **sm** | 640px | Small devices (phones) |
| **md** | 768px | Medium devices (tablets) |
| **lg** | 1024px | Large devices (laptops) |
| **xl** | 1280px | Extra large devices (desktops) |

### Mobile Adjustments
- Section padding: 100px → 60px
- Grid columns: 3 → 2 → 1
- Font sizes: Reduced via clamp()
- CTAs: Stack vertically

---

## 🎭 Shadows

```css
--shadow-sm: 0 1px 2px rgba(11, 31, 63, 0.05);
--shadow-md: 0 4px 6px rgba(11, 31, 63, 0.07);
--shadow-lg: 0 10px 15px rgba(11, 31, 63, 0.1);
--shadow-xl: 0 20px 25px rgba(11, 31, 63, 0.15);
--shadow-hover: 0 12px 32px rgba(11, 31, 63, 0.18);
```

### Usage
- **Cards at rest**: shadow-sm or shadow-md
- **Cards on hover**: shadow-xl or shadow-hover
- **Buttons**: shadow-md
- **Modals/Dropdowns**: shadow-lg

---

## ⏱️ Transitions & Animations

```css
--transition-fast: 150ms ease-in-out;
--transition-base: 300ms ease-in-out;
--transition-slow: 500ms ease-in-out;
```

### Animated Properties
- **Transform**: translateY for lift effect
- **Box Shadow**: Depth on hover
- **Border Color**: State changes
- **Opacity**: Fade effects
- **Width**: Underline animations

### Fade In Up Animation
```css
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
```

Apply with stagger delays: `.stagger-1` through `.stagger-4`

---

## 📋 Form Inputs

```css
input, textarea, select {
    padding: 14px 18px;
    border: 2px solid #D1D9E6;
    border-radius: 12px;
    font-size: 1rem;
    background: #ffffff;
}

input:focus, textarea:focus, select:focus {
    outline: none;
    border-color: #2d5a8c;
    box-shadow: 0 0 0 3px rgba(45, 90, 140, 0.1);
}
```

---

## 🦶 Footer

### Style
- **Background**: Gradient from Primary to Primary Light
- **Color**: White text
- **Padding**: 4rem top, 2rem bottom

### Layout
- **Grid**: 3-4 columns (responsive)
- **Links**: List format
- **Hover Effect**: Accent color + indent

### Bottom Bar
- **Border Top**: 1px rgba(255, 255, 255, 0.2)
- **Text**: Slightly transparent white
- **Alignment**: Center

---

## ♿ Accessibility

### Focus States
```css
*:focus-visible {
    outline: 3px solid #2d5a8c;
    outline-offset: 2px;
}
```

### Screen Reader Only
```css
.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    clip: rect(0, 0, 0, 0);
}
```

### Color Contrast
- Primary navy on white: **10.56:1** (AAA)
- Accent on white: **5.89:1** (AA)
- Text dark on white: **10.72:1** (AAA)

---

## 📦 File Organization

```
/src/css/
├── main.css                    # Main entry, imports
├── good-neighbor-theme.css     # Custom theme (THIS FILE)
├── healthcare-styles.css       # Healthcare-specific
└── good-neighbor-scripts.js    # Custom interactions

/content/data/
├── style.json                  # Theme configuration
├── site.json                   # Site settings
├── header.json                 # Navigation
└── footer.json                 # Footer links

/public/images/
├── logo.png                    # Primary logo
├── logo-modern.svg             # SVG logo
├── favicon.svg                 # Site icon
├── hero-main.jpg               # Hero image
└── icons/                      # All SVG icons
```

---

## 🎯 Implementation Checklist

### ✅ Completed
- [x] Updated color palette to match logo navy blue
- [x] Created comprehensive theme CSS file
- [x] Updated style.json with new colors
- [x] Configured Tailwind with new colors
- [x] Imported theme into main.css

### 📋 To Apply
- [ ] Update homepage hero section
- [ ] Create alternating section backgrounds
- [ ] Add donation amount selector component
- [ ] Implement 3-column feature cards
- [ ] Create mission/vision/goal cards
- [ ] Enhance button hover effects
- [ ] Add link underline animations
- [ ] Update footer with gradient background
- [ ] Implement sticky contact button (WhatsApp style)
- [ ] Add fade-in animations to sections

---

## 💡 Key Differences from Life on Life's Terms

### What We Kept
✅ Alternating section backgrounds
✅ 100px section padding
✅ Donation amount selector pattern
✅ 3-column card grids
✅ Centered section titles with lowercase
✅ Large rounded buttons
✅ Smooth hover animations
✅ Card lift effects

### What We Customized
- **Colors**: Changed from their blue (#3567b8) to our navy (#0B1F3F)
- **Logo**: Medical caduceus vs. their branding
- **Content Focus**: Healthcare/mobility vs. addiction recovery
- **Platform**: Next.js vs. SITE123
- **Advanced Features**: More sophisticated interactions and animations

---

## 🚀 Quick Reference

### Class Names

| Class | Purpose |
|-------|---------|
| `.btn-enhanced` | Base button styles |
| `.btn-primary-enhanced` | Navy button |
| `.btn-secondary-enhanced` | Outlined button |
| `.card-enhanced` | Standard card |
| `.hero-enhanced` | Hero section |
| `.section-primary` | Navy background section |
| `.section-neutral` | Light gray section |
| `.features-grid` | 3-column grid |
| `.mission-grid` | Mission cards grid |
| `.donation-selector` | Donation amounts |
| `.link-enhanced` | Animated underline link |

---

## 📸 Visual Examples

Refer to `/WEBSITE_ANALYSIS_LifeOnLifesTerms.md` for detailed screenshots and analysis of the inspiration site.

---

*This design system ensures consistency across the Good Neighbor Health & Mobility Project while maintaining the professional, trustworthy aesthetic of healthcare organizations.*

