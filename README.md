# Logie Science

A colourful, animated science website for kids around 10 years old. Teaches kid-friendly experiments and explains how each one works in plain language.

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

## Build for Production

```bash
npm run build
npm run preview
```

## Pages

- **Home** — Hero, featured experiments, how it works steps, science fact of the day, safety reminder
- **Experiments** — Grid of experiment cards with difficulty, time, and adult-help indicators
- **Experiment Detail** — Full instructions: materials, steps, what to notice, how it works, safety note
- **How It Works** — Kid-friendly explanations of reactions, forces, gravity, air pressure, density, light
- **Facts** — Fun science facts grouped by Space, Animals, Weather, Chemistry, Forces, Human Body
- **About** — What Logie Science is and a safety reminder

## Deployment

Hosted on **Vercel** at https://logie-science.skunkylabs.com

DNS managed via Cloudflare (zone: `skunkylabs.com`):
- CNAME `logie-science` → `cname.vercel-dns.com` (DNS only, grey cloud)

### Commit and publish

```bash
# Stage and commit your changes
git add .
git commit -m "description of changes"

# Push to GitHub
git push

# Deploy to production on Vercel
npx vercel --prod
```

### First-time setup (already done)

The project is linked to Vercel. If you ever need to re-link:

```bash
npx vercel link --project logie-science --yes
```

---

## Tech Stack

- Vite
- React 18
- TypeScript
- React Router
- Plain CSS with design tokens

## Brand

- Dark-blue atom logo with colourful orbit paths
- Palette: Atom Navy, Deep Blue, Electric Blue, Lab Teal, Spark Yellow, Reaction Orange, Plasma Pink
- Fonts: Nunito (headings), Inter (body)
- Animations respect `prefers-reduced-motion`
