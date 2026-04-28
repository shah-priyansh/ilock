# Hero Section Animation Design

**Date:** 2026-04-13  
**File:** `src/components/HeroSection/NewHeroSection.jsx`  
**Status:** Approved

## Overview

Animate the hero section headline text on page load. The background image stays static. All animation is handled with Framer Motion (already in the dependency tree).

## Animation Sequence

| # | Element | Technique | Timing |
|---|---|---|---|
| 1 | Line 1: "A structured platform to **sell luxury watches**" | Word-by-word blur reveal | Words stagger at 0.12s intervals, first word at 0.1s |
| 2 | Line 2: "with an **optional repurchase**" | Word-by-word blur reveal | Continues stagger from line 1 |
| 3 | "Transparent. Secure. Confidential." | Slide-up from `y: 100%` behind `overflow: hidden` wrapper | ~0.3s after last word lands |
| 4 | CTA button "Request Private Consultation" | Fade in + subtle `y` rise | ~0.5s after tagline lands |

## Implementation Details

### Blur Word Reveal (Lines 1 & 2)

Split each headline line into individual `<motion.span>` words. Wrap them in a `motion.div` container using `staggerChildren`.

**Word variant:**
```js
hidden:  { opacity: 0, filter: 'blur(10px)', y: 6 }
visible: { opacity: 1, filter: 'blur(0px)',  y: 0,
           transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
```

**Container variant:**
```js
hidden:  { }
visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
```

### Slide-Up Tagline

Wrap the tagline span in a `div` with `overflow: hidden`. The inner `motion.span` animates from `y: "100%"` to `y: 0`.

```js
hidden:  { y: '100%', opacity: 0 }
visible: { y: 0, opacity: 1,
           transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: <calculated> } }
```

Delay = `0.1 + (totalWordCount * 0.12) + 0.3`

### CTA Button

Simple fade + rise, delayed after tagline.

```js
initial:    { opacity: 0, y: 8 }
animate:    { opacity: 1, y: 0 }
transition: { duration: 0.5, ease: 'easeOut', delay: <tagline_delay + 0.7 + 0.5> }
```

### Remove Existing Wrapper Animation

The current `motion.div.hero-text-content` has `initial={{ opacity: 0, y: 40 }}` → `animate={{ opacity: 1, y: 0 }}`. This wrapper animation must be removed — individual element animations replace it entirely.

## Scope

**Only touches:** the `hero-text-overlay` JSX block inside `NewHeroSection.jsx`.

**Does not change:**
- Background image or CSS
- Layout or class names
- SEO / StructuredData components
- Header, LuxryFrame, Footer, or any other section
- `HeroSection.jsx` (legacy file, unused)

## Word Count Reference

Line 1: "A structured platform to sell luxury watches" = 7 words  
Line 2: "with an optional repurchase" = 4 words  
Total = 11 words → last word lands at `0.1 + (10 * 0.12) = 1.3s`  
Tagline delay = `1.3 + 0.3 = 1.6s`  
Button delay = `1.6 + 0.7 + 0.5 = 2.8s`
