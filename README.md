# Sacred Vision Studios
**A photography portfolio website by Andre Penalver — Baguio City, PH**

---

## What This Is

A personal photography portfolio and booking website for Sacred Vision Studios. Built with plain HTML, CSS, and JavaScript — no frameworks, no dependencies, just drop it in a folder and open it.

---

## Pages

| File | Purpose |
|------|---------|
| `index.html` | Home — full-screen slideshow hero with swinging rope gallery preview |
| `gallery.html` | Photo gallery with modal viewer and an add-photo frame |
| `packages.html` | Photography packages — fixed and negotiable pricing |
| `reviews.html` | Client reviews with a scrolling wheel carousel |
| `contact.html` | Contact form and studio booking banner |
| `booking.html` | One-on-one studio session booking (time slots, duration, pricing) |
| `package-booking.html` | Book a specific package with session details |
| `leave-review.html` | Dedicated page for clients to leave a star-rated review |

---

## Files

```
project/
├── index.html
├── gallery.html
├── packages.html
├── reviews.html
├── contact.html
├── booking.html
├── package-booking.html
├── leave-review.html
├── style.css          — all styles
├── javascript.js      — main scripts (nav, forms, booking, reviews wheel)
├── modal.js           — gallery lightbox modal
├── theme.js           — dark/light mode toggle and persistence
├── Logo.png           — studio logo (circle)
├── Me.jpeg            — photographer profile photo
├── Gallery1.jpg       — gallery images (Gallery1–5)
├── Gallery2.jpg
├── Gallery3.jpg
├── Gallery4.jpg
└── Gallery5.jpg
```

---

## Features

- **Dark / Light mode** — subtle toggle in the navbar, remembers preference across pages
- **Swinging gallery frames** — rope-hang animation that reacts to scroll speed
- **Add photo frame** — click the `+` frame in the gallery to upload and add your own photo locally
- **Package booking** — select a package, pick a date, time slot, location and theme, submits via email
- **Studio booking** — separate 1-on-1 session booking with hourly rate calculator
- **Price negotiation** — Horizon, Legacy, and Bespoke packages have a propose-your-budget flow
- **Reviews wheel** — auto-rotating review carousel with dot navigation and keyboard support
- **Leave a review** — star picker form that emails the review directly to Andre
- **Mobile responsive** — all pages adapt to phone screen sizes with a hamburger nav

---

## How Forms Work

All forms (contact, booking, package booking, leave a review) use `mailto:` links — when submitted they open the user's default email client pre-filled with the details. No backend or server required.

> Email: `20114237@s.ubaguio.edu`

---

## How to Run

Just open `index.html` in a browser. No build step, no installs, no server needed.

For best results use a local server (e.g. VS Code Live Server) so images and scripts load correctly.

---

## Credits

Built and designed by **Andre Penalver**
© 2026 Sacred Vision Studios
