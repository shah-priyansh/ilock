# iLock Website

A modern React website for iLock with scroll-based animations using GSAP and ScrollTrigger.

## Features

- Scroll-linked animations with GSAP ScrollTrigger
- Full-screen hero image that shrinks into a mobile card
- Smooth fade transitions between background and card
- Side cards that slide in during scroll
- UI overlays with balance and notification elements
- **Responsive design** - cards stack vertically on mobile

## Tech Stack

- React 18
- Vite
- GSAP (GreenSock Animation Platform)
- @gsap/react

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Animation Sequence

1. Hero headline fades up and out
2. Description text fades left and out
3. Background image fades to white
4. Expanding box fades in (opacity 0 → 1)
5. Box shrinks from fullscreen to card size (100vw/100vh → 380x560px)
6. Inner image zooms out (scale 2.2 → 1.0)
7. Side cards slide in from left/right
8. Feature headline fades in

## Project Structure

```
src/
├── HeroSection.jsx    # Main hero component with GSAP animations
├── HeroSection.css    # Styles for the hero section
├── App.jsx            # App entry point
└── main.jsx           # React DOM render
```
