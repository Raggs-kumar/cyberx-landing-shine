CYBERX — Cybersecurity Landing Page
A modern, fully responsive landing page for CYBERX, a fictional cybersecurity startup. Originally designed with a futuristic dark theme, then refined into a calm, minimal, human-centered aesthetic using warm neutrals and muted sage/terracotta accents.
---
✨ Features
Fully responsive — mobile, tablet, and desktop layouts
Sticky header with mobile hamburger menu
Hero section with headline, dual CTAs, stats, and lifestyle imagery
Services section — Threat Monitoring, Data Encryption, Cloud Security, Incident Response
Clients page — scrolling logo carousel, testimonials, compliance badges (SOC 2, ISO 27001, GDPR, HIPAA)
About page — mission, vision, expertise pillars
Help page — full service catalog with iconography
Contact page — interactive form with state management + company contact info
Footer — quick links, social icons, newsletter subscription
SEO-optimized — per-route `<title>`, meta description, and Open Graph tags
Accessibility-friendly — semantic HTML, strong contrast, readable typography
Smooth animations — fade-up entrances, scrolling marquee, micro-interactions
---
🎨 Design System
The design uses a warm, minimal palette defined in `src/styles.css` via OKLCH color tokens:
Token	Color	Purpose
`background`	Warm off-white	Page background
`foreground`	Soft charcoal	Body text
`primary`	Muted sage green	CTAs, accents
`accent`	Warm terracotta	Secondary highlights
`muted`	Light warm grey	Subtle surfaces
`border`	Soft warm grey	Dividers & card edges
Typography: Inter (display) + JetBrains Mono (technical accents)
All colors are semantic tokens — no hard-coded color classes in components.
---
🛠 Tech Stack
Framework: TanStack Start v1 (React 19 + SSR)
Build tool: Vite 7
Routing: TanStack Router (file-based, type-safe)
Styling: Tailwind CSS v4 (native CSS `@theme` config)
UI primitives: shadcn/ui + Radix UI
Icons: lucide-react
Language: TypeScript (strict mode)
Deployment target: Cloudflare Workers (edge)
---
📁 Project Structure
```
src/
├── assets/
│   └── cyber-hero.jpg              # Hero lifestyle image
├── components/
│   ├── site/
│   │   ├── Header.tsx              # Sticky responsive nav
│   │   ├── Footer.tsx              # Footer + newsletter
│   │   └── SiteLayout.tsx          # Shared page shell
│   └── ui/                         # shadcn/ui components
├── routes/
│   ├── __root.tsx                  # Root layout
│   ├── index.tsx                   # Home / landing page
│   ├── about.tsx                   # About
│   ├── help.tsx                    # Services
│   ├── clients.tsx                 # Clients & testimonials
│   └── contact.tsx                 # Contact form
├── styles.css                      # Design tokens & utilities
└── router.tsx                      # Router bootstrap
```
---
🚀 Getting Started
```bash
# Install dependencies
bun install

# Start dev server
bun run dev

# Build for production
bun run build

# Preview production build
bun run preview
```
The dev server runs at `http://localhost:5173` by default.
---
🧭 Routes
Path	Description
`/`	Landing page — hero, services, trust strip, CTA
`/about`	Company overview, mission, vision
`/help`	Full service catalog
`/clients`	Logos, testimonials, certifications
`/contact`	Contact form + company info
Each route has its own SEO metadata (`title`, `description`, OG tags).
---
♿ Accessibility & Performance
Semantic HTML5 landmarks (`<header>`, `<main>`, `<footer>`, `<section>`)
Keyboard-navigable nav and forms
Sufficient color contrast (WCAG AA)
Lazy-loaded images with explicit `width`/`height`
Minimal JS — no heavy animation libraries
---
📝 Notes on Design Direction
The project was iterated from a neon-futuristic dark theme to a calm, human-centric minimal aesthetic based on user feedback. The current design emphasizes:
Trust over spectacle — warm neutrals instead of neon
Clarity over density — generous spacing, focused content
Real photography instead of synthetic 3D renders
Subtle motion instead of glow/pulse effects
---
📄 License
This is an assignment / demonstration project. All brand names ("CYBERX", client names) are fictional.
