# Audiophile E-commerce — Frontend

The Angular frontend for the Audiophile e-commerce site: a multi-page audio-gear
store with product catalog, cart, and checkout. It's a [Frontend Mentor](https://www.frontendmentor.io/)
challenge built against a custom Express + MongoDB API.

**Live site:** https://ornate-starlight-d9b99d.netlify.app

## Tech stack

- **Angular 17.3** (module-based, `@angular-devkit/build-angular:browser`)
- **TypeScript** + **SCSS**
- **RxJS** for data flow
- Product images served from **Cloudinary**
- Hosted on **Netlify**, talks to a Node/Express API (see [`../server`](../server))

## Features

- Responsive layout (mobile / tablet / desktop) matching the Figma design
- Home page, category pages, product detail pages, and a checkout flow
- Cart with quantity controls, persisted to `localStorage`
- Checkout form with validation and an order-confirmation modal

## Prerequisites

- **Node.js 18+** and npm

## Getting started

```bash
npm install
npm start        # dev server at http://localhost:4200
```

> `npm start` runs `ng serve`. The dev build reads `src/environments/environment.ts`,
> which points the API at `http://localhost:5000/api` — so start the [backend](../server)
> first (or change the URL) to see product data.

## Build

```bash
npm run build    # production build -> dist/audiophile-e-commerce-website
```

The production build swaps in `src/environments/environment.prod.ts`, whose `apiUrl`
points at the deployed Render API.

## Configuration

API base URL is set per environment:

| File | Used for | `apiUrl` |
|------|----------|----------|
| `src/environments/environment.ts` | `ng serve` (dev) | `http://localhost:5000/api` |
| `src/environments/environment.prod.ts` | `ng build` (prod) | the deployed Render URL |

## Project structure

```
src/app/
├── components/        UI building blocks (header, hero, cart-modal,
│                      featured-products, footer, order-confirmation, …)
├── pages/             Routed views (home, category, product-detail, checkout)
├── services/
│   ├── product.service.ts   fetches products from the API (cached via shareReplay)
│   └── cart.service.ts      cart state, persisted to localStorage
├── models/            Product / CartItem interfaces
├── app-routing.module.ts
└── app.module.ts
```

**Routes:** `/` (home) · `/category/:category` · `/product/:slug` · `/checkout`

## Deployment (Netlify)

`netlify.toml` configures everything:

- **Build command:** `npm run build`
- **Publish directory:** `dist/audiophile-e-commerce-website`
- A SPA redirect (`/* -> /index.html`) so deep links like `/checkout` resolve on refresh

Pushing to the `main` branch triggers an automatic deploy. After deploying the
backend, make sure `environment.prod.ts` points at the live API URL.

## Tests

```bash
npm test         # unit tests via Karma/Jasmine
```
