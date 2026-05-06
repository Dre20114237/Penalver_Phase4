# Sacred Vision Studios — Handoff Document

**Project:** Sacred Vision Studios Portfolio Website
**Author:** Andre Penalver
**Year:** 2026
**Stack:** HTML5 · CSS3 · Vanilla JavaScript

---

## 1. Design Tokens — CSS Variables

All tokens are declared in `style.css` under `:root` and `[data-theme]`. The site defaults to **dark mode**.

### Color Tokens

| Token | Dark Mode | Light Mode | Usage |
|-------|-----------|------------|-------|
| `--bg` | `#0f0f0f` | `#ffffff` | Main page background |
| `--bg-2` | `#1a1a1a` | `#f9fafb` | Secondary background, confirm panels |
| `--bg-3` | `#222222` | `#f3f4f6` | Tertiary background, stat bars |
| `--border` | `rgba(255,255,255,0.08)` | `#e5e7eb` | All borders and dividers |
| `--text` | `#f0f0f0` | `#111111` | Primary body text |
| `--text-muted` | `#9ca3af` | `#6b7280` | Secondary / supporting text |
| `--text-subtle` | `#6b7280` | `#9ca3af` | Placeholder, fine print |
| `--card-bg` | `#1a1a1a` | `#ffffff` | Cards, modals, form panels |
| `--card-border` | `rgba(255,255,255,0.08)` | `#e5e7eb` | Card border color |
| `--input-bg` | `#222222` | `#fafafa` | Form input backgrounds |
| `--input-border` | `#333333` | `#e5e7eb` | Form input borders |
| `--nav-bg` | `#111111` | `#111111` | Navbar background (always dark) |
| `--section-bg` | `#0f0f0f` | `#ffffff` | Primary section backgrounds |
| `--section-alt` | `#141414` | `#f9fafb` | Alternating section backgrounds |
| `--wheel-fade` | `#0f0f0f` | `#f9fafb` | Review wheel top/bottom fade |
| `--divider-bg` | `#141414` | `#f9fafb` | Section divider background |

### Accent Colors (static — not tokenized)

| Name | Value | Usage |
|------|-------|-------|
| Brand Blue | `#2563eb` | Buttons, active states, highlights |
| Brand Blue Hover | `#1d4ed8` | Button hover states |
| Blue Tint | `#eff6ff` | Back link background, pill badges |
| Blue Border Light | `#bfdbfe` | Back link border |
| Amber | `#f59e0b` | Star ratings, negotiable badges |
| Red / Unavailable | `#ef4444` | Unavailable time slots |

### Typography

| Property | Value |
|----------|-------|
| Font Family | `Inter` (Google Fonts) |
| Weights used | `400, 500, 600, 700, 800` |
| Base size | `1rem` (16px) |
| Nav link size | `1.05rem` |
| Hero title | `clamp` / responsive |

---

## 2. Accessibility Statement

**Lighthouse Accessibility Score: 100 / 100**

![Lighthouse Accessibility Score 100](lighthouse-screenshot.png)

> Screenshot taken via Chrome DevTools Lighthouse audit on `http://127.0.0.1:5500/index.html` — Mobile device mode, Navigation (Default).

### What was implemented to achieve this:

- All `<img>` elements include descriptive `alt` attributes
- All form inputs have associated `<label>` elements
- Buttons include `aria-label` attributes where icon-only (e.g. theme toggle, modal close)
- Gallery modal uses `aria-hidden="true/false"` toggled on open/close
- Keyboard navigation supported — `Escape` closes modal, `ArrowUp/Down` navigates reviews
- Color contrast maintained across both dark and light themes
- Semantic HTML used throughout (`<header>`, `<nav>`, `<section>`, `<article>`, `<footer>`)
- Mobile nav closes automatically when a link is clicked

---

## 3. BEM Index — Major Components

BEM format: `block__element--modifier`

Below is how the major components of this site map to BEM structure. Class names follow this convention even where not strictly hyphenated, for clarity.

---

### `navbar` — Site Header

```
navbar
├── navbar__container         (.nav-container)
│   ├── navbar__brand         (.brand)
│   │   ├── navbar__logo      (.nav-logo)
│   │   └── navbar__title     (.logo)
│   ├── navbar__links         (.nav-links)
│   │   └── navbar__link      (.nav-link)
│   │       └── --active      (.nav-link.active)
│   ├── navbar__theme-toggle  (.theme-toggle)
│   └── navbar__burger        (.mobile-menu-btn)
└── navbar__mobile            (.mobile-nav)
    └── navbar__mobile-link   (.mobile-nav-link)
        └── --active          (.mobile-nav-link.active)
```

---

### `gallery` — Photo Grid

```
gallery-section
├── gallery__grid             (.gallery-grid)
│   └── gallery__rope-item    (.rope-item)
│       ├── gallery__rope     (.rope)
│       └── gallery__item     (.gallery-item)
│           ├── gallery__img  (img)
│           ├── gallery__overlay (.gallery-overlay)
│           └── gallery__info (.gallery-info)
│               ├── gallery__title (h3)
│               └── gallery__hint  (p)
└── gallery__add-frame        (.gallery-add-frame)
    └── gallery__add-inner    (.add-frame-inner)
        ├── gallery__add-plus (.add-plus)
        └── gallery__add-label(.add-label)
```

---

### `gallery-modal` — Lightbox

```
gallery-modal
├── gallery-modal__backdrop   (.gallery-modal-backdrop)
└── gallery-modal__content    (.gallery-modal-content)
    ├── gallery-modal__close  (.gallery-modal-close)
    └── gallery-modal__body   (.gallery-modal-body)
        ├── gallery-modal__img-wrap (.gallery-modal-img-wrap)
        └── gallery-modal__info     (.gallery-modal-info)
            ├── gallery-modal__title (#modalTitle)
            ├── gallery-modal__desc  (#modalDesc)
            └── gallery-modal__date  (#modalDate)
```

---

### `package-card` — Packages Grid

```
package-card
├── package-card__icon        (.package-icon)
├── package-card__name        (.package-name)
├── package-card__tagline     (.package-tagline)
├── package-card__price-block (.package-price-block)
│   ├── package-card__price   (.package-price)
│   └── package-card__note    (.price-note)
│       ├── --fixed           (.price-note.fixed)
│       └── --negotiable      (.price-note.negotiable)
├── package-card__features    (.package-features)
├── package-card__custom      (.custom-price-block)  [negotiable only]
└── package-card__btn         (.package-btn)
    ├── --primary             (.btn-blue)
    ├── --outline             (.btn-outline-blue)
    └── --negotiable          (.btn-amber)
```

---

### `review-card` — Reviews Wheel

```
reviews-layout
├── reviews__wheel            (.wheel-outer)
│   └── reviews__track        (.wheel-track)
│       └── review-card
│           ├── review-card__stars  (.review-stars)
│           ├── review-card__text   (.review-text)
│           └── review-card__author (.review-author)
│               ├── review-card__avatar (.review-avatar)
│               ├── review-card__name   (.review-name)
│               ├── review-card__role   (.review-role)
│               └── review-card__date   (.review-date)
├── reviews__controls         (.wheel-controls)
│   ├── reviews__btn          (.wheel-btn)
│   ├── reviews__dots         (.wheel-dots)
│   │   └── reviews__dot      (.wheel-dot) --active
│   └── reviews__counter      (.wheel-counter)
└── reviews__stats            (.reviews-stats)
    ├── reviews__score        (.stats-score)
    └── reviews__bars         (.stats-bars)
```

---

### `booking-form` — Booking Pages

```
booking-form-card
├── booking__steps            (.steps-bar)
│   ├── booking__step         (.step) --active --done
│   └── booking__step-line    (.step-line)
├── booking__time-slots       (.time-slots)
│   └── booking__slot         (.time-slot)
│       └── --unavailable     (.time-slot.unavailable)
├── booking__duration         (.duration-options)
│   └── booking__duration-btn (.duration-btn) --selected
└── booking__confirm          (.confirmation) --show
    ├── booking__confirm-icon (.confirm-icon)
    └── booking__confirm-details (.confirm-details)
```

---

*This document was generated as part of the final handoff for Sacred Vision Studios.*
*© 2026 Andre Penalver*
