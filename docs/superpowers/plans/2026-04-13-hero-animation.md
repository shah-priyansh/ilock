# Hero Animation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the hero section's single fade-in wrapper with a staggered word-blur reveal on the headline, a slide-up reveal on the tagline, and a delayed fade-in on the CTA button.

**Architecture:** All changes are isolated to the `hero-text-overlay` JSX block inside `NewHeroSection.jsx`. Animation variants are defined as module-level constants above the component. No new files. No CSS changes.

**Tech Stack:** React 19, Framer Motion (already imported as `motion` and `useScroll`/`useTransform`)

---

## Files

| Action | File | What changes |
|---|---|---|
| Modify | `src/components/HeroSection/NewHeroSection.jsx` | Add variant constants; replace `hero-text-overlay` JSX block |

---

### Task 1: Add animation variant constants

**Files:**
- Modify: `src/components/HeroSection/NewHeroSection.jsx` — add constants after imports, before `featureCards`

- [ ] **Step 1: Add variant objects above `featureCards`**

Open `src/components/HeroSection/NewHeroSection.jsx`. After the import block (line ~10), before the `const featureCards = [` line, insert:

```js
// Hero animation variants
const heroContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, filter: "blur(10px)", y: 6 },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const taglineVariants = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 1.6 },
  },
};
```

- [ ] **Step 2: Verify the file still compiles**

```bash
npm run build 2>&1 | tail -5
```

Expected: no errors (or just the usual vulnerability warnings — no syntax errors).

- [ ] **Step 3: Commit**

```bash
git add src/components/HeroSection/NewHeroSection.jsx
git commit -m "feat: add hero animation variant constants"
```

---

### Task 2: Replace the headline h1 with word-by-word animated spans

**Files:**
- Modify: `src/components/HeroSection/NewHeroSection.jsx:99-125` — the `hero-text-overlay` div

- [ ] **Step 1: Replace the `motion.div.hero-text-content` and `h1` block**

Find this block (lines ~99–125):

```jsx
<div className="hero-text-overlay">
  <motion.div
      className="hero-text-content"
      initial={{opacity: 0, y: 40}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.8}}
  >
    <div className={'text-end security-logo'}>
      <img src={'/images/secured-logo.png'} alt={'img'} className={'img-fluid'}/>
    </div>
    <h1 className="hero-main-text">
      A structured platform to <b>sell luxury watches</b><br/>
      with an <b>optional repurchase</b><br/>
      <span className="hero-text-md">Transparent. Secure. Confidential.</span>
    </h1>
    <motion.button
      className="cta-button"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      onClick={() => {
        trackEvent("click", "get_an_offer", "hero_section");
        navigate("/contact");
      }}
    >
      Request Private Consultation
    </motion.button>
  </motion.div>
</div>
```

Replace it with:

```jsx
<div className="hero-text-overlay">
  <div className="hero-text-content">
    <div className={'text-end security-logo'}>
      <img src={'/images/secured-logo.png'} alt={'img'} className={'img-fluid'}/>
    </div>
    <h1 className="hero-main-text">
      <motion.span
        className="hero-words-line"
        style={{ display: "block" }}
        variants={heroContainerVariants}
        initial="hidden"
        animate="visible"
      >
        {["A", "structured", "platform", "to"].map((word) => (
          <motion.span key={word} variants={wordVariants} style={{ display: "inline-block", marginRight: "0.25em" }}>
            {word}
          </motion.span>
        ))}
        {["sell", "luxury", "watches"].map((word) => (
          <motion.span key={word} variants={wordVariants} style={{ display: "inline-block", marginRight: "0.25em" }}>
            <b>{word}</b>
          </motion.span>
        ))}
      </motion.span>
      <motion.span
        className="hero-words-line"
        style={{ display: "block" }}
        variants={heroContainerVariants}
        initial="hidden"
        animate="visible"
      >
        {["with", "an"].map((word) => (
          <motion.span key={word} variants={wordVariants} style={{ display: "inline-block", marginRight: "0.25em" }}>
            {word}
          </motion.span>
        ))}
        {["optional", "repurchase"].map((word) => (
          <motion.span key={word} variants={wordVariants} style={{ display: "inline-block", marginRight: "0.25em" }}>
            <b>{word}</b>
          </motion.span>
        ))}
      </motion.span>
      <span style={{ display: "block", overflow: "hidden" }}>
        <motion.span
          className="hero-text-md"
          style={{ display: "block" }}
          variants={taglineVariants}
          initial="hidden"
          animate="visible"
        >
          Transparent. Secure. Confidential.
        </motion.span>
      </span>
    </h1>
    <motion.button
      className="cta-button"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 2.8 }}
      onClick={() => {
        trackEvent("click", "get_an_offer", "hero_section");
        navigate("/contact");
      }}
    >
      Request Private Consultation
    </motion.button>
  </div>
</div>
```

**Key changes:**
- `motion.div.hero-text-content` → plain `div` (no more wrapper animation)
- `h1` now contains three animated line blocks
- Line 1 & 2: `motion.span` containers with `heroContainerVariants` stagger each word
- Tagline: `overflow: hidden` outer span clips the slide-up; inner `motion.span` uses `taglineVariants`
- Button: delay updated from `0.4` → `2.8`

- [ ] **Step 2: Verify build compiles**

```bash
npm run build 2>&1 | tail -5
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/HeroSection/NewHeroSection.jsx
git commit -m "feat: animate hero headline with word blur reveal and tagline slide-up"
```

---

### Task 3: Visual verification in browser

**Files:** none — read-only verification step

- [ ] **Step 1: Open the app and navigate to the hero**

The dev server should already be running at `http://localhost:5173`. Open it and go to `/` (root route loads `NewHeroSection`).

- [ ] **Step 2: Verify the animation sequence**

On hard-reload (`Ctrl+Shift+R`), confirm:

1. Words "A structured platform to **sell luxury watches**" appear one by one, each fading in from blur
2. Words "with an **optional repurchase**" continue the stagger
3. "Transparent. Secure. Confidential." slides up ~1.6s in
4. "Request Private Consultation" button fades in ~2.8s in
5. Background image does not move
6. No layout shift or flicker on any line
7. The security logo image above the headline is visible immediately (it is outside the animation)

- [ ] **Step 3: Check mobile (≤768px)**

Resize browser to mobile width. Confirm the animation still plays correctly and no words overflow or break awkwardly.

- [ ] **Step 4: Final commit if any tweaks were needed**

If you adjusted timing values during visual verification:

```bash
git add src/components/HeroSection/NewHeroSection.jsx
git commit -m "feat: fine-tune hero animation timing"
```

---

## Timing Reference

| Event | Time |
|---|---|
| Word 1 ("A") starts | 0.10s |
| Word 11 ("repurchase") starts | 1.30s |
| Word 11 fully visible | ~1.90s |
| Tagline starts sliding up | 1.60s |
| Tagline fully visible | ~2.30s |
| Button starts fading in | 2.80s |
| Button fully visible | ~3.30s |
