# Dish Reel — CollabTable Prototype

A closed two-sided marketplace prototype for restaurant × influencer collaborations:
discovery, negotiation, contracts, escrow payments and performance — with contact
details always kept off-platform.

## What's in this repo

| Path | Description |
| --- | --- |
| `*.html` | Original static HTML design prototypes (one per screen) |
| `remix-app/` | The same screens ported to a [Remix](https://remix.run) app |
| `next-app/` | The same screens ported to a [Next.js](https://nextjs.org) (App Router) app |

## next-app (Next.js)

```bash
cd next-app
npm install
npm run dev    # http://localhost:3000
```

Production build:

```bash
npm run build
npm start
```

### Routes

| Route | Screen |
| --- | --- |
| `/` | Screen index / launcher |
| `/landing` | Marketing landing page |
| `/influencer-onboarding` | Influencer onboarding flow |
| `/restaurant-onboarding` | Restaurant onboarding flow |
| `/restaurant-dashboard` | Restaurant dashboard |
| `/influencer-dashboard` | Influencer dashboard |
| `/discover-creators` | Restaurant → creator discovery |
| `/discover-restaurants` | Influencer → campaign discovery |
| `/campaign-detail` | Campaign detail & application |
| `/deal-room` | Negotiation, contract, escrow, moderated chat |

All pages are static (prerendered). The colour theme (light/dark) is applied before
first paint via an inline script in `app/layout.tsx` and persisted to
`localStorage` under `ct-theme`.

## remix-app (Remix)

```bash
cd remix-app
npm install
npm run dev    # http://localhost:5173
```
