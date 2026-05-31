# Kiro CLI Build Prompt: Logie Science

Build a colourful, animated website called **Logie Science**.

## Website concept

Logie Science is a science website for kids around 10 years old. It teaches kid-friendly science experiments and explains how each experiment works in plain language.

The brand should feel:
- Curious
- Fun
- Smart but not too grown-up
- Colourful
- Safe and parent-friendly
- Energetic, with small animations where useful

The logo concept is a dark-blue atom with colourful orbit paths.

## Assets provided

Use these files:
- `logo-full-atom.svg`
- `icon-atom.svg`
- `animated-atom-logo.svg`
- `hero-atom-science.svg`
- `experiment-instructions-graphic.svg`
- `how-it-works-card.svg`
- `brand.json`
- `tokens-and-animations.css`

## Brand colours

Primary:
- Atom Navy: `#0B1F3A`
- Deep Blue: `#123C69`

Accent colours:
- Electric Blue: `#2F80ED`
- Lab Teal: `#21D4B4`
- Spark Yellow: `#FFD84D`
- Reaction Orange: `#FF8A3D`
- Plasma Pink: `#FF4FA3`

Neutrals:
- Paper: `#F7FAFC`
- Ink: `#172033`
- Muted: `#64748B`
- White: `#FFFFFF`

## Animation requirements

Use animation sparingly and respectfully:
- Atom icon can slowly rotate.
- Experiment cards can gently lift on hover.
- Small bubbles or sparks can float.
- Respect `prefers-reduced-motion`.

Do not create distracting constant movement across the whole page.

## Technical stack

Create a simple modern frontend project:
- Vite
- React
- TypeScript
- Plain CSS or CSS modules
- No backend initially

Keep the project easy for a parent and child to edit.

## Pages

### Home

Hero section:
- Use `logo-full-atom.svg`
- Use `hero-atom-science.svg`
- Headline: `Ask. Try. Notice. Explain.`
- Subheading: `Kid-friendly science experiments with clear steps and simple explanations of how they work.`
- Buttons:
  - `Explore Experiments`
  - `Learn How It Works`

Homepage sections:
1. Featured experiments
2. How Logie Science works
3. Science fact of the day
4. Safety reminder

### Experiments

Create a grid of experiment cards.

Each experiment should include:
- Title
- Short description
- Difficulty: Easy / Medium
- Time needed
- Adult help needed
- Materials
- Steps
- What to notice
- How it works
- Safety note

Starter experiments:
1. Balloon Rocket
2. Volcano Fizz
3. Floating Egg
4. Paper Bridge Challenge
5. Shadow Tracker
6. Dancing Raisins

### How It Works

A page that explains scientific ideas in kid-friendly language:
- Reactions
- Forces
- Gravity
- Air pressure
- Density
- Light and shadows

Each topic should have:
- Simple definition
- Everyday example
- Link to a matching experiment

### Facts

A simple, fun science facts page grouped by:
- Space
- Animals
- Weather
- Chemistry
- Forces
- Human Body

### About

Copy:
`Logie Science is a place for curious kids to ask questions, try experiments, notice what happens and explain what they learned.`

Include a note:
`Some experiments need adult help. Always read the safety note before starting.`

## Data model

Create `src/data/experiments.ts`:

```ts
export type Experiment = {
  id: string;
  title: string;
  description: string;
  difficulty: "Easy" | "Medium";
  time: string;
  adultHelp: boolean;
  materials: string[];
  steps: string[];
  notice: string[];
  howItWorks: string;
  safetyNote: string;
};
```

Create `src/data/facts.ts`:

```ts
export type ScienceFact = {
  id: string;
  category: "Space" | "Animals" | "Weather" | "Chemistry" | "Forces" | "Human Body";
  title: string;
  fact: string;
};
```

## Components

Create:
- `Header`
- `Footer`
- `Hero`
- `ExperimentCard`
- `ExperimentDetail`
- `FactCard`
- `SafetyNote`
- `AnimatedAtom`
- `HowItWorksCard`
- `PageLayout`

## Design details

Use:
- Rounded cards
- Large readable text
- Dark blue headings
- Bright accent chips
- Simple icons
- Clear spacing
- Responsive layout

Experiment card hover:
- Slight lift
- Soft shadow increase
- No aggressive movement

## Accessibility

- Use semantic HTML
- Good colour contrast
- Keyboard accessible links and buttons
- Alt text for images
- Respect reduced motion

## Deliverables

Generate a complete working project with:
- `package.json`
- Vite React TypeScript setup
- all components
- all pages
- data files
- CSS
- assets copied into `src/assets`
- README with run instructions

After implementation:
- Run install/build/typecheck where applicable
- Fix any errors
