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
│   │   ├── Faq/
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

## Deployment

### Production Server (capitalcustodia-web)
- **OS**: Amazon Linux 2023
- **Instance Type**: t3.micro (916 MB RAM + 1 GB swap)
- **Region**: ap-southeast-1 (Singapore)
- **Web Server**: Nginx 1.28.2 (static + reverse-proxy to Express)
- **Static Web Root**: `/usr/share/nginx/html/`  (owned by `nginx:nginx`)
- **Backend App Dir**: `/opt/capitalcustodia/`  (owned by `ec2-user`)
  - `source/`            — Express code (`server/server.js`, `package.json`, deps)
  - `source/.env`        — production secrets (chmod 600, server-only)
  - `ecosystem.config.cjs` — PM2 config
  - `logs/`              — PM2 stdout/stderr
- **Backend Process**: PM2 service `capitalcustodia-api` (fork mode, port 3001, bound to 127.0.0.1)
  - Auto-restart on reboot via systemd unit `pm2-ec2-user.service`
  - `max_memory_restart: 300M` circuit breaker
- **Nginx Config Snippets** (loaded inside the HTTPS server block via `include /etc/nginx/default.d/*.conf`):
  - `/etc/nginx/conf.d/zz-rate-limit.conf`    — `limit_req_zone` definitions (http scope)
  - `/etc/nginx/default.d/api-proxy.conf`     — `/api/*` → `http://127.0.0.1:3001` with per-endpoint rate limits (contact 5/min, valuation 2/min)
  - `/etc/nginx/default.d/spa-fallback.conf`  — `try_files $uri $uri/ /index.html` for React Router
- **Domain**: capitalcustodia.com / www.capitalcustodia.com
- **SSL**: Let's Encrypt (Certbot managed; certs at `/etc/letsencrypt/live/capitalcustodia.com/`)
- **Ports**: 80 (HTTP→HTTPS redirect), 443 (HTTPS), 22 (SSH)

### SSH Access
- **Key**: `C:\GitHub\KEYS\vice-platform.pem` (kept outside any project repo)
- **Host**: `52.74.167.253` (Elastic IP `eipalloc-0cfcff80f5853cdc2`, stable across stop/start)
- **User**: `ec2-user`
- **Command**: `ssh -i "C:/GitHub/KEYS/vice-platform.pem" ec2-user@52.74.167.253`

### AWS Access (local dev)
- Credentials in `.env.local`: `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_REGION`
- To run AWS commands: `set -a && source .env.local && set +a && aws <command>`

### Email / SMTP (production)
- Contact + valuation form emails go via Amazon SES SMTP (region: `us-east-1`).
- Verified sending domain: `capitalcustodia.com` (verified in `us-east-1`).
- SMTP credentials are an IAM user managed via the SES "Create SMTP credentials" wizard
  (find existing user via `aws iam list-users` filtered to `ses-smtp-user.*`). Secret
  access keys are shown only at creation time and cannot be recovered — record them in
  a vault before leaving the wizard.
- Production env vars (`SMTP_HOST`, `SMTP_PORT`, `SMTP_USERNAME`, `SMTP_PASSWORD`,
  `SENDER_EMAIL`, `RECIPIENT_EMAIL`) live in `/opt/capitalcustodia/source/.env` on the
  server only. Never commit them to the repo or paste in chat.
- Local dev derives the SMTP password from a fresh IAM access key via
  `scripts/derive-smtp-and-write-env.mjs` (writes to `.env.local`, gitignored).

### Deploy Process

Two deploy paths depending on what changed.

#### Frontend-only changes (most deploys)
1. Build locally: `npm run build` → `dist/`
2. Stage: `ssh ... "rm -rf /tmp/deploy && mkdir -p /tmp/deploy"` then `scp -r dist/* ...:/tmp/deploy/`
3. Backup + atomic swap (one-line on server):
   ```
   TS=$(date +%Y%m%d-%H%M%S) && \
     sudo cp -r /usr/share/nginx/html /tmp/html-backup-$TS && \
     sudo rm -rf /usr/share/nginx/html/* && \
     sudo cp -r /tmp/deploy/* /usr/share/nginx/html/ && \
     sudo chown -R nginx:nginx /usr/share/nginx/html
   ```
4. Verify from server (Windows curl has cert-revocation issues with this site):
   `ssh ... "curl -sI https://capitalcustodia.com/ | head -3"` — expect HTTP 200 + fresh `Last-Modified`.

Rollback: `sudo cp -r /tmp/html-backup-<ts>/* /usr/share/nginx/html/ && sudo chown -R nginx:nginx /usr/share/nginx/html`.

#### Backend changes (`server/`, `package.json`)
1. Tar locally: `tar --exclude=node_modules --exclude=dist --exclude=.git --exclude=src -czf /tmp/cc-backend.tar.gz server/ package.json package-lock.json`
2. Upload + extract: `scp /tmp/cc-backend.tar.gz ...:/tmp/` then `ssh ... "cd /opt/capitalcustodia/source && tar -xzf /tmp/cc-backend.tar.gz && npm ci --omit=dev"`
3. Reload zero-downtime: `ssh ... "pm2 reload capitalcustodia-api"`
4. Verify: `ssh ... "curl -s http://127.0.0.1:3001/api/health"` — expect `{"status":"OK"}`.

#### Nginx snippet changes
1. Edit/replace files in `/etc/nginx/default.d/` (root permission required).
2. `sudo nginx -t` (syntax-check; never reload before this passes).
3. `sudo systemctl reload nginx` (zero-downtime).

### Operations Hardening (added 2026-04-29)

- **EBS daily snapshots** — DLM policy `policy-0254f87652decb06f` runs daily at 02:00 UTC against any volume tagged `Backup=daily`, retains 7 most recent. To list snapshots: `aws ec2 describe-snapshots --owner-ids self --filters "Name=tag:BackupType,Values=daily-automated"`. To restore: create new volume from snapshot, detach old, attach new.
- **PM2 log rotation** — `pm2-logrotate` module installed; 10 MB rotation threshold, retain 7 gzipped, daily check at midnight. Config: `pm2 conf pm2-logrotate`.
- **Nginx rate limiting** — `/api/submit-contact` capped at 5 r/min/IP (burst 3), `/api/submit-valuation` at 2 r/min/IP (burst 2). Triggered limits return HTTP 429. Tune values in `/etc/nginx/conf.d/zz-rate-limit.conf`. Other `/api/*` endpoints (e.g. `/api/health`) are unrestricted.
- **Honeypot field** — Frontend forms include a hidden `website` input; server silently returns success when it's non-empty (no email sent). When refactoring forms: do NOT remove the `website` field from formData state, the hidden `<input>`, or the server-side `if (website && ...)` check in `server/server.js`. Caught attempts are logged with prefix `[honeypot]` in `pm2 logs capitalcustodia-api`.

### Operations Cheatsheet
```
# Service status
ssh ... "pm2 list"

# Tail backend logs
ssh ... "pm2 logs capitalcustodia-api --lines 50 --nostream"

# Restart backend
ssh ... "pm2 restart capitalcustodia-api"

# Free disk on /tmp
ssh ... "ls -lh /tmp/html-backup-*"   # decide what's safe to remove

# Memory & swap state
ssh ... "free -h"
```

## Notes

- Hero text animations use `animate` instead of `whileInView` for Safari compatibility
- Uses GSAP ScrollTrigger for scroll-based animations
- Framer Motion for component-level animations (zoom, fade effects)
- Footer links use Inter font weight 200 for a lighter appearance
- All video assets are optimized MP4 files with autoplay, muted, and loop attributes
