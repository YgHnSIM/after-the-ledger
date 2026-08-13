# DESIGN.md — Ancient Epics & Comparative Atlas Design System Contract

## 0. Research Log
- **Embedded References:** Shortlisted `references/design/soft-skill.md` (Luxury / Premium / Glassmorphism) and `references/design/minimalist-skill.md` (Editorial / High-Craft Typography). Picked `soft-skill.md` paired with `stripe` & `supabase` material layering for dark/light high-craft editorial aesthetic.
- **Atmosphere & Signature Material:** Classic Ancient Papyrus & Bronze in light mode; Deep Obsidian Velvet & Golden Hexameter Glow in dark mode. Glassmorphism with `backdrop-filter: blur(12px)` and multi-stop gradient borders.
- **Signature Moment:** Hero Hexameter Badge with pulsing golden aura and tactile 3D depth cards.

---

## 1. Aesthetic Direction & Signature Material
- **Light Theme ("Ancient Scroll & Museum Gallery"):** Warm papyrus background (`#f8f6f0`), deep ink typography (`#161513`), warm gold borders (`#d4af37`), and subtle parchment shadows.
- **Dark Theme ("Obsidian Library & Golden Constellation"):** Deep obsidian velvet background (`#0b0c10`), crisp warm ivory typography (`#f5f3ef`), glowing imperial gold (`#ffd700`), and glassmorphic card overlays (`rgba(255, 255, 255, 0.03)` with `backdrop-filter: blur(16px)`).
- **Signature Material:** Multi-layer glassmorphism (`background: rgba(255, 255, 255, 0.04)`, `border: 1px solid rgba(212, 175, 55, 0.25)`, `box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37)`).

---

## 2. Color Palette & Dark/Light System

### Primary & Background Tokens
- `--bg-primary-light`: `#f8f6f0` | `--bg-primary-dark`: `#0b0c10`
- `--bg-surface-light`: `#ffffff` | `--bg-surface-dark`: `#13151f`
- `--bg-surface-elevated-light`: `#f0ece1` | `--bg-surface-elevated-dark`: `#1a1d2c`
- `--border-gold-light`: `rgba(184, 134, 11, 0.25)` | `--border-gold-dark`: `rgba(255, 215, 0, 0.25)`

### Civilization Accent Ramps
- **Mesopotamia (Bronze & Rust):** `#c85a24` (Light) / `#f97316` (Dark)
- **Egypt (Nile Turquoise):** `#0f766e` (Light) / `#14b8a6` (Dark)
- **Greece (Aegean Blue & Imperial Gold):** `#1e40af` (Light) / `#3b82f6` (Dark)
- **Israel & Judah (Royal Purple):** `#6b21a8` (Light) / `#a855f7` (Dark)
- **Ugarit & Phoenicia (Amber & Gold):** `#b45309` (Light) / `#f59e0b` (Dark)

---

## 3. Typography & Hierarchy
- **Primary Serif Display:** `'Cinzel', 'Cormorant Garamond', 'Playfair Display', serif`
  - Hero Header: `font-size: 2.5rem`, `line-height: 1.15`, `font-weight: 700`, `letter-spacing: -0.02em`
  - Section Title: `font-size: 1.75rem`, `line-height: 1.25`, `font-weight: 700`
- **Body & Interface Sans:** `'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif`
  - Body Regular: `font-size: 0.95rem`, `line-height: 1.65`, `color: var(--text-primary)`
  - Subtext & Captions: `font-size: 0.85rem`, `line-height: 1.5`, `color: var(--text-secondary)`
- **Monospace & Citations:** `'Fira Code', 'JetBrains Mono', monospace`
  - Line Citations & Linear B: `font-size: 0.8rem`, `font-weight: 600`

---

## 4. Spacing & Grid System
- **Base Unit:** 4px / 8px grid scale (`0.25rem`, `0.5rem`, `0.75rem`, `1rem`, `1.5rem`, `2rem`, `3rem`, `4rem`).
- **Responsive Layout Grids:**
  - Mobile (375px - 767px): Single column, `padding: 1rem`, compact touch targets (`min-height: 44px`).
  - Tablet (768px - 1023px): Two-column grid, `gap: 1.25rem`, sticky top navigation.
  - Desktop (1024px+): Three/Four-column auto-fit grid (`minmax(340px, 1fr)`), `max-width: 1400px`, `padding: 2.5rem`.

---

## 5. Component Primitives & Motion Specifications
- **Button Primitive:**
  - Default: `padding: 0.6rem 1.2rem`, `border-radius: 8px`, `font-weight: 600`, `transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1)`
  - Hover State: `transform: translateY(-2px)`, `box-shadow: 0 6px 20px rgba(184, 134, 11, 0.25)`
  - Active State: `transform: translateY(0)`, `scale: 0.98`
- **Card Primitive:**
  - Multi-layered card with `border-left: 4px solid [Accent Color]`, glassmorphism backdrop, and hover elevation (`transform: translateY(-3px)`).

---

## 6. Micro-Interactions & GPU-Composited Animations
- **GPU Rules:** Only animate `transform`, `opacity`, and `filter`. Never animate `width`, `height`, or `margin`.
- **Keyframe Motion:**
  - `gold-pulse`: Pulsing border aura for key citations and Aristeia highlights.
  - `card-enter`: Smooth staggered entrance (`opacity: 0, transform: translateY(12px) -> opacity: 1, transform: translateY(0)`).
  - `tab-slide`: Smooth indicator sliding for segmented controls.

---

## 7. Mobile-First & Responsive Layout Rules
- All interactive controls (buttons, tabs, inputs) must satisfy Apple Human Interface Guidelines 44x44px min tap area.
- Sticky bottom mobile bar for quick section switching (`개요`, `타임라인`, `유물DB`, `일리아스`, `전체 메뉴`).
- Zero horizontal overflow (`overflow-x: hidden`).

---

## 8. Accessibility Constraints & Quality Gates
- **WCAG 2.1 AA Contrast Ratio:** Text vs background contrast >= 4.5:1 (Normal) / 3:1 (Large).
- **Reduced Motion:** `@media (prefers-reduced-motion: reduce)` disables non-essential animations.
- **Focus Rings:** Visible custom focus outline (`outline: 2px solid var(--accent-primary)`, `outline-offset: 2px`) for keyboard navigation.
