# iLock Website

A modern React website for iLock - a luxury watch trading platform with end-to-end global trading capabilities.

## Project Overview

This project is a recreation of a hero section design with animations, built with React, Vite, and GSAP for smooth animations.

## Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite
- **Animations**: GSAP (GreenSock Animation Platform), Framer Motion
- **Styling**: CSS (custom styles)
- **Routing**: React Router DOM
- **UI Components**: React Bootstrap
- **Fonts**: Inter (variable font, weights 100-900)

## Project Structure

```
ilockwebsite/
├── public/
│   └── images/          # Image and video assets
│       ├── logo-icon.svg
│       ├── logo-text.svg
│       ├── shield-logo.svg
│       ├── shield.mp4
│       ├── brandscoin.mp4
│       └── coin.mp4
├── src/
│   ├── components/
│   │   ├── AboutUs/
│   │   ├── Footer/      # Footer with styled links
│   │   ├── Header/      # Navigation header
│   │   ├── LandingPage/
│   │   ├── Logo/        # Logo component (Figma design)
│   │   ├── LuxryFrame/  # Main content sections
│   │   └── HeroSection/ # Hero section with animations
│   ├── pages/
│   │   ├── About.jsx
│   │   └── ContactUs.jsx
│   ├── styles/
│   │   └── global.css
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── vite.config.js
```

## Routes

- `/` - Landing page
- `/home` - Main hero section with HeroSection component
- `/about` - About Us page
- `/contact` - Contact & Support page

## Development

### Setup
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

The dev server will start at `http://localhost:5173/`

### Stop Development Server
```bash
pkill -f "npm run dev" || true
pkill -f "vite" || true
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Features

### Hero Section (`/home`)
- Scroll-triggered GSAP animations
- Responsive design (mobile & desktop)
- Card animations with image zoom effects
- Custom logo component from Figma design
- Safari-compatible animations (uses `animate` instead of `whileInView` for hero text)

### Content Sections (LuxryFrame)
- `highest-prices-section` - Background: rgb(250, 250, 250)
- `our-globle-section` - Background: rgb(149, 220, 247)
- `join-network-section` - Background: rgb(157, 193, 185)
- Shield logo with Framer Motion zoom-in animation

### Footer
- Inter font, weight 200, size 14px
- Responsive styling across all breakpoints
- Social media links with hover effects

### Logo Component
- Created from Figma design
- Proper SVG aspect ratios
- Drop shadow styling
- Responsive sizing

## Design System

### Logo Assets
- `logo-icon.svg` - Hexagonal iLock icon
- `logo-text.svg` - iLock text with "SECURE" tagline
- `shield-logo.svg` - Shield logo for authentication section

### Video Assets
- `shield.mp4` - Shield animation for join-network section
- `brandscoin.mp4` - Brands coin animation
- `coin.mp4` - Coin animation

### Typography & Colors
- **Font**: Inter (variable font)
- **Primary**: Teal/Cyan (#6AC5D6, #8ACFDC)
- **Accent**: Green (#41B6A2, #36B083)
- **Secondary**: Blue (#0098CA, #0181B6, #0290C4)
- **Section Backgrounds**:
  - Light gray: rgb(250, 250, 250)
  - Light blue: rgb(149, 220, 247)
  - Sage green: rgb(157, 193, 185)

## Browser Support

Modern browsers with ES6+ support (Chrome, Firefox, Safari, Edge)

## Notes

- Hero text animations use `animate` instead of `whileInView` for Safari compatibility
- Uses GSAP ScrollTrigger for scroll-based animations
- Framer Motion for component-level animations (zoom, fade effects)
- Footer links use Inter font weight 200 for a lighter appearance
- All video assets are optimized MP4 files with autoplay, muted, and loop attributes
