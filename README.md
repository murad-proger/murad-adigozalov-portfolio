# Murad Adigozalov — Developer Portfolio

A fast, accessible, light-themed portfolio built with **Next.js 16**, **TypeScript (strict)**, and **Tailwind CSS v4** — statically generated, deployed on Vercel, and scoring **100 / 100 / 100 / 100** on desktop Lighthouse (measured locally on a production build).

**Live:** [murad-adigozalov-portfolio.vercel.app](https://murad-adigozalov-portfolio.vercel.app)

---

## Features

- **Single-page home** — hero with CSS entrance animation, tech marquee, featured projects, experience & education, skills, and contact, in one scroll
- **Project case studies** — statically generated `/projects/[slug]` pages covering the problem, solution, and tech stack of each project, with per-page Open Graph metadata
- **Tech marquee** — seamless CSS-animated ticker showcasing core technologies, with smooth edge masking, pause on hover, and full `prefers-reduced-motion` support
- **Working contact & feedback forms** — server actions deliver submissions straight to email via [Resend](https://resend.com), with Zod validation, a honeypot field, per-IP rate limiting, and toast confirmations
- **Scroll-spy navigation** — a single `IntersectionObserver` highlights the active section link while scrolling
- **SEO-complete** — metadata with title templates, Open Graph/Twitter cards, JSON-LD `Person` schema, `sitemap.xml`, and `robots.txt`
- **Accessible by default** — WCAG AA contrast, full keyboard navigation, and `prefers-reduced-motion` support that disables animations
- **Fully responsive** — from 360px phones (circular avatar hero, hamburger menu) to wide desktops

## Tech Stack

| Layer      | Choice                  | Why                                                                  |
| ---------- | ----------------------- | -------------------------------------------------------------------- |
| Framework  | Next.js 16 (App Router) | Server Components, SSG via `generateStaticParams`, server actions    |
| Language   | TypeScript (strict)     | `noUncheckedIndexedAccess` + `noImplicitOverride`; no `any` anywhere |
| Styling    | Tailwind CSS v4         | CSS-first `@theme` tokens; design system as CSS variables            |
| Components | shadcn/ui               | Accessible primitives themed by the same token set                   |
| Animation  | Pure CSS                | Transform/opacity keyframes, transitions, reduced-motion aware       |
| Email      | Resend                  | Contact/feedback delivery from server actions, no database needed    |
| Validation | Zod                     | Input validation at the server boundary                              |
| Hosting    | Vercel                  | Static output at the edge, image optimization, preview deploys       |

## Architecture

### Content as typed data

All site content lives in [`src/content/`](src/content/) as typed constants — projects, experience, education, skills, and profile data share one source of truth with the types in [`types.ts`](src/content/types.ts). Pages and components render from this layer, so a content edit is a one-file change and the compiler catches every missing field.

### Static generation

The home page and every project page are prerendered at build time. Project routes come from `generateStaticParams`, and unknown slugs return a 404 via `notFound()`. There is no runtime data fetching on any public page — the entire site ships as static HTML served from the CDN.

### Forms without a database

Contact and project-feedback submissions flow through a server action ([`src/app/actions/send-email.ts`](src/app/actions/send-email.ts)):

```
client form → server action → zod validation → honeypot check → rate limit → Resend → inbox
```

- **Honeypot** — a hidden field real users never fill; bots that do receive a fake success and nothing sends
- **Rate limiting** — 3 submissions per hour per IP, kept in memory
- **Unique subjects** — each email is titled `Portfolio - CONTACT — <name>` (or `- FEEDBACK — <project> — <name>`) so inbox threads never merge
- The API key exists only in server environment variables; nothing email-related reaches the client bundle

### Design system

The visual language is defined in [`globals.css`](src/app/globals.css): a warm, light palette (`--background: #f1f2ee`, `--foreground: #252a26`, `--surface: #fff`, `--border: #dcdfd9`), neutral graphite `--primary: rgb(60, 60, 63)`, and clean typography powered by **Inter** via `next/font`.

### Performance & accessibility

- Animations touch only `transform` and `opacity`; LCP-critical hero elements are painted from the first frame
- The headshot is the LCP image: `next/image` with `priority` and exact `sizes`
- `prefers-reduced-motion` disables animations and unwraps the tech marquee into a static layout
- Lighthouse scores (measured locally on a production build via `npm run build && npm start`):
  - **Desktop:** **100** Performance · **100** Accessibility · **100** Best Practices · **100** SEO
  - **Mobile:** **88** Performance · **100** Accessibility · **100** Best Practices · **100** SEO

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
│   ├── sections/                 # hero, tech-marquee, projects, experience-education, skills, contact
│   ├── ui/                       # input, textarea, sonner
│   ├── feedback-form.tsx         # feedback form component
│   ├── project-card.tsx          # project card component
│   ├── screenshot-gallery.tsx    # modal screenshot gallery
│   └── whatsapp-button.tsx       # floating quick-contact button
├── content/                      # typed site content (single source of truth)
└── lib/                          # site constants, scroll helper, utils
```

## Getting Started

**Prerequisites:** Node.js 20+

```bash
git clone https://github.com/murad-proger/murad-adigozalov-portfolio.git
cd murad-adigozalov-portfolio
npm install
cp .env.example .env   # then fill in the values below
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

Pushing to `main` triggers an automatic Vercel deployment. The only required production setting is the `RESEND_API_KEY` environment variable in the Vercel dashboard.

## Contact

**Murad Adigozalov** — [murad-adigozalov-portfolio.vercel.app](https://murad-adigozalov-portfolio.vercel.app) · [GitHub](https://github.com/murad-proger) · [LinkedIn](https://www.linkedin.com/in/murad-sabiroglu)
