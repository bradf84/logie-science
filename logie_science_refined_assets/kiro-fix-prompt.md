# Kiro Fix Prompt: Replace the bad hero layout for Logie Science

The current hero section is bad because the atom illustration overlaps the text and buttons. Rebuild the layout so it looks polished and readable.

## Required fix

Use a clean two-column hero layout:

- Left column: text and buttons
- Right column: atom illustration
- No overlapping text, buttons, or images
- No large background blob should sit on top of content
- The atom graphic must never cover the headline, subtitle, or buttons
- On mobile, stack the content: text first, image second

## Use these replacement assets

Copy these into the project assets folder:

- `logo-full-refined.svg`
- `icon-atom-refined.svg`
- `animated-atom-refined.svg`
- `hero-atom-illustration-refined.svg`
- `layout-safe-tokens.css`
- `brand.json`

## Hero copy

Headline:

`Ask. Try. Notice. Explain.`

Subtitle:

`Kid-friendly science experiments with clear steps and simple explanations of how they work.`

Buttons:

- `Start exploring`
- `See experiments`

## CSS structure

Use this structure:

```html
<section className="site-hero">
  <div className="site-hero__copy">
    <h1 className="site-hero__title">Ask. Try. Notice. Explain.</h1>
    <p className="site-hero__subtitle">
      Kid-friendly science experiments with clear steps and simple explanations of how they work.
    </p>
    <div className="site-hero__actions">
      <a className="button button--primary" href="/experiments">Start exploring</a>
      <a className="button button--secondary" href="/experiments">See experiments</a>
    </div>
  </div>

  <div className="site-hero__art">
    <img src="/src/assets/hero-atom-illustration-refined.svg" alt="Colourful atom illustration" />
  </div>
</section>
```

## Important design rules

- Do not absolutely position the main atom over the hero copy.
- Avoid huge decorative background blobs unless they are behind everything and very subtle.
- Keep all text high contrast.
- Keep buttons fully visible.
- Hero max width should be around `1180px`.
- Use `overflow: hidden` only on the section, not on text containers.
- Use `z-index` only to keep text above subtle background decoration, not to stack the atom over the text.
- Font size should be responsive using `clamp`.
- The design should feel energetic but controlled.

## Visual direction

Make it feel like:
- A modern kids science site
- Clear and structured
- Bright but not chaotic
- Suitable for a 10-year-old
- Parent-friendly

## Animation

Use only subtle animation:
- Cards may lift slightly on hover
- Atom may spin slowly only if it does not distract
- Respect `prefers-reduced-motion`

## Deliverable

Update the website so the first screen is clean, readable and visually balanced. Then run the build and fix any errors.
