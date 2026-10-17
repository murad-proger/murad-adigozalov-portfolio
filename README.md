# Murad Adigozalov — Developer Portfolio

A fast, light-themed portfolio built with **Next.js 16**, **TypeScript (strict)**, and **Tailwind CSS v4** — statically generated, deployed on Vercel, and scoring **100 / 100 / 100 / 100** on Lighthouse (PageSpeed Insights) for both mobile and desktop.

**Live:** [murad-adigozalov-portfolio.vercel.app](https://murad-adigozalov-portfolio.vercel.app)

---

## Features

- **Single-page home** — hero with a short CSS entrance animation, tech marquee, featured projects, experience & education, skills, and contact, in one scroll
- **Project case studies** — statically generated `/projects/[slug]` pages covering the problem, solution, and tech stack of each project, with per-page Open Graph metadata
- **Tech marquee** — seamless CSS-animated ticker showcasing core technologies, with soft edge fades, pause on hover, and a static layout under `prefers-reduced-motion`
- **Working contact & feedback forms** — server actions deliver submissions straight to email via [Resend](https://resend.com), with Zod validation, a honeypot field, per-IP rate limiting, and toast confirmations
- **Scroll-spy navigation** — a single `IntersectionObserver` highlights the active section link while scrolling
- **SEO-complete** — metadata with title templates, Open Graph/Twitter cards, JSON-LD `Person` schema, `sitemap.xml`, and `robots.txt`
- **Accessibility-minded** — semantic landmarks, labelled form controls, visible focus styles, WCAG AA contrast targets, an Escape-closable screenshot modal, and `prefers-reduced-motion` support for the hero entrance and the tech marquee
- **Fully responsive** — from 360px phones (circular avatar hero, hamburger menu) to wide desktops

## Tech Stack

| Layer      | Choice                  | Why                                                                          |
| ---------- | ----------------------- | ---------------------------------------------------------------------------- |
| Framework  | Next.js 16 (App Router) | Server Components, SSG via `generateStaticParams`, server actions            |
| Language   | TypeScript (strict)     | `noUncheckedIndexedAccess` + `noImplicitOverride`; no `any` anywhere         |
| Styling    | Tailwind CSS v4         | CSS-first `@theme` tokens; design system as CSS variables                    |
| Components | shadcn/ui + Base UI     | Input/textarea built on Base UI primitives, toasts via Sonner, same tokens   |
| Animation  | Pure CSS                | Keyframes and short transitions; hero entrance and marquee are reduced-motion aware |
| Email      | Resend                  | Contact/feedback delivery from server actions, no database needed            |
| Validation | Zod                     | Input validation at the server boundary                                      |
| Hosting    | Vercel                  | Static output at the edge, image optimization, preview deploys               |

## Architecture

### Content as typed data

Projects, experience, education, skills, and profile data live in [`src/content/`](src/content/) as typed constants that share the types in [`types.ts`](src/content/types.ts). Pages and components render from this layer, so most content edits are a one-file change and the compiler catches every missing field. A few short copy blocks (the hero bio, the SEO description in [`lib/site.ts`](src/lib/site.ts), the contact blurb) still live next to the components that use them.

### Static generation

The home page and every project page are prerendered at build time. Project routes come from `generateStaticParams`, and unknown slugs return a 404 via `notFound()`. There is no runtime data fetching on any public page — the pages ship as static HTML served from the CDN. The only server-side runtime code is the form server action.

### Forms without a database

Contact and project-feedback submissions flow through a server action ([`src/app/actions/send-email.ts`](src/app/actions/send-email.ts)):

```
client form → server action → honeypot check → zod validation → rate limit → Resend → inbox
```

- **Honeypot** — a hidden field real users never fill; bots that do receive a fake success and nothing sends
- **Rate limiting** — 3 submissions per hour per IP, kept in memory (a lightweight, best-effort guard on serverless)
- **Unique subjects** — each email is titled `Portfolio - CONTACT — <name>` (or `Portfolio - FEEDBACK — <project> — <name>`) so inbox threads never merge
- The API key exists only in server environment variables; nothing email-related reaches the client bundle

### Design system

The visual language is defined in [`globals.css`](src/app/globals.css): a warm, light palette (`--background: #f1f2ee`, `--foreground: #252a26`, `--surface: #fff`, `--border: #dcdfd9`), neutral graphite `--primary: rgb(60, 60, 63)`, and clean typography powered by **Inter** via `next/font`.

### Performance & accessibility

- The hero fades in with a short (0.6s) opacity/translate CSS entrance; the tech marquee animates `transform` only. Hover effects (links, buttons, avatar) use brief CSS transitions
- The headshot uses `next/image` with `priority` and exact `sizes`
- `prefers-reduced-motion` disables the hero entrance and unwraps the tech marquee into a static layout
- Lighthouse scores on the live deployment (PageSpeed Insights, October 2026; lab values vary between runs):

| Device  | Perf | A11y | Best Practices | SEO | Agentic browsing | FCP   | LCP   | TBT   | CLS | SI    |
| ------- | ---- | ---- | -------------- | --- | ---------------- | ----- | ----- | ----- | --- | ----- |
| Mobile  | 100  | 100  | 100            | 100 | 2/2              | 0.9 s | 1.8 s | 20 ms | 0   | 1.7 s |
| Desktop | 100  | 100  | 100            | 100 | 2/2              | 0.3 s | 0.5 s | 70 ms | 0   | 0.7 s |

## Project Structure

```
src/
├── app/
│   ├── actions/send-email.ts     # server actions: contact + feedback email
│   ├── projects/[slug]/page.tsx  # SSG case-study pages
│   ├── layout.tsx                # fonts, metadata, JSON-LD, shell
│   ├── page.tsx                  # home — section composition
│   ├── sitemap.ts / robots.ts    # generated SEO routes
│   └── globals.css               # design tokens + keyframes
├── components/
│   ├── layout/                   # navbar (scroll-spy, mobile menu), footer
│   ├── sections/                 # section wrapper, hero, tech-marquee, projects, experience-education, skills, contact
│   ├── ui/                       # input, textarea, sonner
│   ├── feedback-form.tsx         # feedback form component
│   ├── icons.tsx                 # custom icons (WhatsApp)
│   ├── project-card.tsx          # project card component
│   ├── screenshot-gallery.tsx    # modal screenshot gallery
│   └── whatsapp-button.tsx       # floating quick-contact button
├── content/                      # typed site content
└── lib/                          # site constants, scroll helper, utils
public/
├── images/                       # headshot and project screenshots
└── cv/                           # downloadable CV (PDF)
```

## Getting Started

**Prerequisites:** Node.js 20+

```bash
git clone https://github.com/murad-proger/murad-adigozalov-portfolio.git
cd murad-adigozalov-portfolio
npm install
cp .env.example .env   # then fill in the value below
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment variables

| Variable         | Purpose                                            |
| ---------------- | -------------------------------------------------- |
| `RESEND_API_KEY` | Sends contact/feedback form submissions via Resend |

Without the key the site runs fully — form submissions surface a graceful error instead of sending.

### Scripts

| Command          | Action                                 |
| ---------------- | -------------------------------------- |
| `npm run dev`    | Development server                     |
| `npm run build`  | Production build (type-checks + SSG)   |
| `npm run start`  | Serve the production build             |
| `npm run lint`   | ESLint                                 |
| `npm run format` | Prettier (with Tailwind class sorting) |

## Deployment

Pushing to `main` triggers an automatic Vercel deployment. The only required production setting is the `RESEND_API_KEY` environment variable in the Vercel dashboard (redeploy after adding or changing it).

Emails are sent from Resend's shared test sender (`onboarding@resend.dev`), which delivers only to the address of the Resend account owner. To send from your own address, verify a domain in Resend and update the `from` field in [`send-email.ts`](src/app/actions/send-email.ts).

## Contact

**Murad Adigozalov** — [murad-adigozalov-portfolio.vercel.app](https://murad-adigozalov-portfolio.vercel.app) · [GitHub](https://github.com/murad-proger) · [LinkedIn](https://www.linkedin.com/in/murad-sabiroglu)