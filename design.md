# Lakhdatar Green Energy — Master Design System Specification

> **Purpose**: This document is the single source of truth for all visual design decisions across the entire Lakhdatar Green Energy website. Every page — whether root-level or inside the `/resources` ecosystem — must conform to these specifications.

---

## 1. Color Palette

### Brand Colors
| Token                    | Hex         | Usage                                                |
|--------------------------|-------------|------------------------------------------------------|
| `--primary-color`        | `#b6e400`   | Primary CTA buttons, accent highlights, badges       |
| `--primary-color-hover`  | `#c4f500`   | Button hover state                                   |
| `--title-color`          | `#1f1f1f`   | Headings, button text on lime backgrounds             |
| `--dark`                 | `#1e1e1e`   | Footer/CTA dark background panels                    |
| `--gray-color`           | `#494949`   | Body/paragraph text                                  |
| `--body-color`           | `#f4f3ea`   | Default page body background                         |
| `--background-color`     | `#f3f1dd`   | Cream/beige section backgrounds (FAQ, About, cards)  |
| `--white`                | `#ffffff`   | Surface cards, input fields, icon badges              |
| `--black`                | `#000000`   | Reserved (avoid for text — use `--title-color`)      |

### Accent / Semantic Colors
| Purpose              | Value                         |
|----------------------|-------------------------------|
| Green accent (links) | `#659d00`                     |
| Light green badge bg | `#f2f8ec`                     |
| Border soft          | `rgba(0, 0, 0, 0.04)`        |
| Border glass         | `rgba(0, 0, 0, 0.05)`        |
| Shadow soft          | `0 4px 20px rgba(0,0,0,0.03)`|
| Shadow medium        | `0 8px 30px rgba(0,0,0,0.03)`|
| Footer border        | `rgba(255,255,255,0.1)`       |

---

## 2. Typography

### Font Families
| Token                                 | Value                              | Usage                              |
|---------------------------------------|------------------------------------|------------------------------------|
| `--_fonts-family---inter-tight`       | `"Inter Tight", sans-serif`        | All body text, UI elements         |
| `--_fonts-family---playfair-display`  | `"Playfair Display", sans-serif`   | Italic accent in headings          |

### Type Scale
| Element     | Size Variable                    | Size   | Line Height | Letter Spacing | Weight  |
|-------------|----------------------------------|--------|-------------|----------------|---------|
| H1          | `--_typograyphy---h1`            | 96px   | 96px        | -1.92px        | 400     |
| H2          | `--_typograyphy---h2`            | 60px   | 70px        | -1.2px         | 700     |
| H3          | `--_typograyphy---h3`            | 36px   | 46px        | -0.72px        | 700     |
| H4          | `--_typograyphy---h4`            | 24px   | 34px        | -0.48px        | 700     |
| H5          | `--_typograyphy---h5`            | 20px   | 30px        | 0px            | 600     |
| H6          | `--_typograyphy---h6`            | 18px   | 28px        | 0px            | 600     |
| Paragraph   | `--_typograyphy---paragraph`     | 16px   | 26px        | —              | 400     |
| Sub-para    | `--_typograyphy---sub-paragraph` | 14px   | 24px        | —              | 400     |

### Font Weight Tokens
| Token                          | Value |
|--------------------------------|-------|
| `--_font-weight---normal`      | 400   |
| `--_font-weight---medium`      | 500   |
| `--_font-weight---semi-bold`   | 600   |
| `--_font-weight---bold`        | 700   |

### Heading Accent Pattern
Headings frequently use a split pattern where a keyword is wrapped in `<span class="section-title-span">` to render in Playfair Display italic:
```html
<h2 class="section-title">
  Frequently Asked <span class="section-title-span">Questions</span>
</h2>
```

---

## 3. Layout & Grid System

### Containers
| Context                | Max Width  | Padding       | Notes                                |
|------------------------|------------|---------------|--------------------------------------|
| Outer (Navbar/Footer)  | 1750px     | 15px L/R      | `.container` from Webflow            |
| Navbar variant         | 1730px     | 15px L/R      | `.container.w-variant-...`           |
| Content sections       | 1200px     | 32px L/R      | Scoped `.contact-us .container`      |
| Footer inner           | 1590px     | 15px L/R      | `.footer-container`                  |
| CTA inner              | 1242px     | auto margins  | `.cta-wrapper`                       |

### Section Spacing
| Section Type        | Padding Top | Padding Bottom |
|---------------------|-------------|----------------|
| Default `.section`  | 150px       | 150px          |
| Inner Banner        | 180px       | 70px           |
| Footer CTA          | 150px       | 0              |
| FAQ / Testimonial   | 150px       | 150px          |

### Responsive Breakpoints (from Webflow)
| Breakpoint  | Max Width |
|-------------|-----------|
| Desktop     | No max    |
| Tablet      | 991px     |
| Mobile L    | 767px     |
| Mobile S    | 479px     |

---

## 4. Component Library

### 4.1 Primary Button
```css
.primary-button {
  background-color: var(--primary-color);     /* #b6e400 */
  color: var(--title-color);                  /* #1f1f1f */
  font-size: 16px;
  font-weight: 600;
  text-transform: capitalize;
  border-radius: 100px;
  padding: 15px 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
}
```
- Hover state: background `#c4f500`, `translateY(-2px)`
- Contains two inner `<div>` layers for hover-in/hover-out text animation

### 4.2 Section Subtitle (Eyebrow)
```html
<div class="subtitle-wrapper">
  <div class="subtitle-single">
    <div class="subtitle-circle"></div>      <!-- 4px circle, --title-color -->
    <div class="section-subtitle">LABEL</div>
  </div>
</div>
```

### 4.3 Section Title
```html
<h2 class="section-title">
  Keyword Text <span class="section-title-span">Italic Accent</span>
</h2>
```
- `.section-title`: `font-size: 36px` (mobile) → `60px` (desktop), `color: var(--title-color)`
- `.section-title-span`: `font-family: Playfair Display`, `font-style: italic`

### 4.4 Inner Banner (Sub-page Hero)
```html
<section class="section inner-banner">
  <div class="container">
    <div class="inner-banner-typography">
      <div class="inner-banner-subtitle-wrapper">
        <div class="inner-banner-subtitle-circle"></div>
        <div class="inner-banner-subtitle">PAGE LABEL</div>
      </div>
      <h1 class="inner-banner-title">Page Headline</h1>
      <p class="inner-banner-description">Supporting description text.</p>
    </div>
  </div>
</section>
```
- Padding: `180px top`, `70px bottom`
- Typography centered, max-width constrained
- Title: H2 size on desktop (60px), H3 on smaller

### 4.5 Cards
| Property        | Standard Card                    | Form Card                        |
|-----------------|----------------------------------|----------------------------------|
| Background      | `var(--background-color)` cream  | `var(--background-color)` cream  |
| Border Radius   | `20px`                           | `24px`                           |
| Border          | `1px solid rgba(0,0,0,0.04)`     | none                             |
| Shadow          | `0 4px 20px rgba(0,0,0,0.03)`   | none                             |
| Padding         | `36px 32px`                      | `44px 48px`                      |

### 4.6 FAQ Accordion
- Container: `.faq-single-accordion-wrap` (uses Webflow `w-dropdown`)
- Title wrapper with icon flex layout
- Accordion icon: SVG arrow image
- Answer wrapper: `.faq-accordion-ans-wrap`
- Background: `var(--background-color)` cream section

### 4.7 Footer CTA
- Dark background panel (`var(--title-color)`, `#1f1f1f`)
- Border radius: `20px`
- Inner centered typography with CTA title + primary button
- Footer menu grid with 4 columns (Company, Products, Quality, Contact)
- Background image: `Footer Bg.jpg`
- Footer border radius: `30px`

---

## 5. Interaction & Animation Patterns

### Micro-animations
- **Button hover**: `translateY(-2px)` lift with background color shift
- **Card hover**: `translateY(-5px)` lift with increased shadow
- **Image hover**: `transform: scale(1.05)` zoom
- **Link arrows**: gap animation on hover (`gap: 4px` → `gap: 8px`)
- **Fade-in-up**: Elements enter with `opacity: 0` → `1`, `translateY(30px)` → `0`

### Webflow Interactions
- Navbar hamburger uses Lottie animation
- Section elements use `data-w-id` for scroll-triggered opacity animations
- Inner banner typography uses staggered fade-in

---

## 6. Navigation Structure

### Top Navigation Bar
```
Home | About | Services & Products | Resources | Contact | [Get A Quote]
```
- Fixed position, cream glass background: `rgba(243, 241, 221, 0.92)` with `backdrop-filter: blur(12px)`
- Logo: max-height `40px`, object-fit contain
- Nav links: `16px`, weight `500`, capitalize
- CTA button: Primary lime pill button

### Footer Structure
- 4-column link grid (Company, Products & Solutions, Quality & Trust, Contact Us)
- Dark background with background image
- Copyright bar with subtle top border

---

## 7. Resource Page Specific Patterns

All resource pages must inherit the patterns above. Additionally:

### Breadcrumb
```
Home > Resources > [Section] > [Page Title]
```
- Font-size: `14px`, color: `var(--gray-color)`
- Active/current item: `var(--title-color)`, font-weight `600`
- Separator: `›` character

### Reading Progress Bar
- Fixed to top of viewport, below navbar
- Height: `3px`
- Color: `var(--primary-color)` (`#b6e400`)
- Z-index: `999`

### Sticky Table of Contents
- Position: `sticky`, top: `120px`
- Background: `var(--background-color)` cream
- Border-radius: `16px`
- Active item indicator: `2px` left border, `var(--primary-color)`

### Calculator Input Fields
- Inherit contact form input styling:
  - Background: `#ffffff`
  - Border: `1px solid rgba(0,0,0,0.05)`
  - Border-radius: `12px`
  - Min-height: `52px`
  - Focus: border `#659d00`, box-shadow `0 0 0 3px rgba(101,157,0,0.12)`

### Result Cards
- Background: `var(--background-color)`
- Border-radius: `20px`
- Animated number counters
- Icon badges with green accent circles

---

## 8. Responsive Rules

All new pages must implement:
1. **≥992px**: Full desktop layout, multi-column grids
2. **≤991px**: Stack to single column, reduce section padding to `100px`
3. **≤767px**: Compact card padding, smaller headings
4. **≤479px**: Full-width cards, reduced font sizes, single-column form grids
