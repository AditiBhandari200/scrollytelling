# Coherence Scrollytelling

A modern Next.js project featuring an interactive scrollytelling experience with animated SVG visualizations.

## Features

- 🎨 **Interactive Scrollytelling**: Smooth scroll-based animations using Framer Motion
- 📱 **Responsive Design**: Mobile-first approach with Tailwind CSS
- ⚡ **Next.js 14**: Built with the latest App Router architecture
- 🎭 **SVG Animations**: Dynamic visualizations that respond to scroll position
- 🔍 **Intersection Observer**: Efficient scroll detection using react-intersection-observer

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm, yarn, or pnpm

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
scrolly/
├── app/
│   ├── globals.css          # Global styles with Tailwind
│   ├── layout.tsx            # Root layout component
│   └── page.tsx              # Home page
├── components/
│   └── CoherenceScrolly.tsx  # Main scrollytelling component
├── public/                   # Static assets
├── next.config.js            # Next.js configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Project dependencies
```

## How It Works

The scrollytelling component uses:

1. **Intersection Observer** to detect when each section is in view
2. **State Management** to track the active step (0-3)
3. **SVG Animation** to visualize different states:
   - **Step 0 (Hero)**: Clustered dots with soft glow
   - **Step 1 (Drift)**: Dots move outward and flicker
   - **Step 2 (Code)**: Some dots pulse brighter (individual recovery)
   - **Step 3 (Bridge)**: Lines connect dots with unified glow

## Customization

### Colors

Edit the Tailwind config or component colors:
- Primary: `fuchsia-500` 
- Background: `neutral-900`
- Accents: `purple` and `cyan` in SVG gradients

### Content

Modify the content in `components/CoherenceScrolly.tsx`:
- Update section titles and descriptions
- Adjust animation timing in the `transition` props
- Change SVG dot positions in the `base` array

### Animation Timing

Adjust animation parameters:
- `threshold: 0.6` in `useInView` hooks (higher = more of section must be visible)
- `duration` values in Framer Motion transitions
- `delay` values for staggered animations

## Build for Production

```bash
npm run build
npm start
```

## Technologies Used

- [Next.js 14](https://nextjs.org/) - React framework
- [React 18](https://react.dev/) - UI library
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [react-intersection-observer](https://github.com/thebuilder/react-intersection-observer) - Scroll detection
- [TypeScript](https://www.typescriptlang.org/) - Type safety

## License

MIT

