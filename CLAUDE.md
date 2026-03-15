# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**AgereArt / Kamień Duszy** is a static e-commerce website for handmade natural stone bracelets targeting the Polish market. No build process, no package manager, no framework — just vanilla HTML/CSS/JS.

## Running Locally

Open `index.html` directly in a browser, or use a simple local server:

```bash
python -m http.server 8000
# or
npx http-server
```

## Architecture

Three source files contain all functionality:

- **`index.html`** — Single-page layout with all sections (hero, products, about, testimonials, contact). Products are rendered dynamically via JS.
- **`script.js`** — All interactivity: product data (18 products hardcoded as a JS object), filtering logic, modal quick-view, scroll animations via IntersectionObserver, cart notifications (UI-only, no backend), and form handling (client-side only, no submission).
- **`styles.css`** — 1,800+ line stylesheet using CSS custom properties for the dark luxury/gold theme, responsive at 1024px / 768px / 480px breakpoints.

## Key Patterns

**Product data** is a plain JS object in `script.js` with fields: `name`, `subtitle`, `description`, `price`, `image` (path under `images/`), and `categories` (array of energy tags: Spokój, Siła, Miłość, Intuicja, Transformacja).

**Filtering** iterates the product array and shows/hides `.product-card` elements by matching `data-category` attributes.

**Modals** are built without a library — a single `#quickViewModal` DOM element is reused and populated with JS on each open.

**No backend** — cart, newsletter, and contact form interactions are UI-only with simulated success states.

## Language

Site content is in Polish. Maintain Polish for all user-facing text.
