import type { Project } from "./types";

export const projects: Project[] = [
  {
    title: "BookNest",
    slug: "booknest",
    summary:
      "Fullstack online bookstore with a storefront, an admin panel, and a complete Stripe payment lifecycle, covered by automated tests and a CI/CD pipeline.",
    description:
      "BookNest is a production-like online bookstore built on Next.js, with a storefront and an admin panel and user/admin roles via Auth.js. It is built around a complete Stripe payment lifecycle in test mode: Checkout, payment retry, admin refunds, and signature-verified idempotent webhooks. Data lives in Supabase PostgreSQL and Storage, and the light/dark UI is built on design tokens with a reusable component kit. Claude Code was part of the development workflow for scaffolding and refactoring.",
    problem:
      "In an online store the payment flow has to survive real-world edge cases: failed payments that need a retry, admin refunds, and webhook events that can arrive more than once or race with the checkout flow.",
    solution:
      "Stripe webhooks are signature-verified and idempotent, with race-condition protection, alongside Checkout, payment retry, and admin refunds. 24 unit and component tests (Vitest, React Testing Library) run in a GitHub Actions pipeline, and Vercel Deployment Checks block production releases until the tests pass.",
    techStack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Prisma 7",
      "PostgreSQL",
      "Supabase",
      "Auth.js",
      "Stripe",
      "TanStack Query",
      "Redux Toolkit",
      "React Hook Form",
      "Zod",
      "Radix UI",
      "CSS Modules",
      "Vitest",
      "React Testing Library",
      "GitHub Actions",
      "Vercel",
      "Docker Compose",
    ],
    liveUrl: "https://murad-booknest.vercel.app/",
    githubUrl: "https://github.com/murad-proger/booknest",
    coverImage: "/images/booknest/booknest-main.jpg",
    images: [
      "/images/booknest/booknest-catalog.jpg",
      "/images/booknest/booknest-cart.png",
    ],
    featured: true,
    order: 0,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
