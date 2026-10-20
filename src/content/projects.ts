import type { Project } from "./types";

export const projects: Project[] = [
  {
    title: "BookNest",
    slug: "booknest",
    summary:
      "Fullstack online bookstore with a storefront, an admin panel, and a complete Stripe payment lifecycle in test mode, covered by automated tests and a CI/CD pipeline.",
    description:
      "BookNest is a production-like online bookstore built on Next.js, with a storefront, an admin panel, and user/admin roles via Auth.js. It is built around a complete Stripe payment lifecycle in test mode: Checkout, payment retry, admin refunds, and signature-verified idempotent webhooks. Customers can see their orders and retry a failed payment, while admins manage books and orders and issue refunds. Data lives in Supabase PostgreSQL and Storage, and the light/dark UI is built on design tokens with a reusable component kit. Claude Code was part of the development workflow for scaffolding and refactoring.",
    problem:
      "BookNest was built as a personal project to implement a production-like payment flow end to end, not just the happy path: failed payments that need a retry, admin refunds, and webhook events that can arrive more than once or race with the checkout flow.",
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
    githubUrl: "https://github.com/murad-proger/booknest",
    liveUrl: "https://murad-booknest.vercel.app/",
    coverImage: "/images/booknest/booknest-main.avif",
    images: [
      "/images/booknest/booknest-catalog.avif",
      "/images/booknest/booknest-cart.avif",
    ],
    featured: true,
    order: 0,
  },
  {
    title: "Evera",
    slug: "evera",
    summary:
      "Frontend migration of an online store from a custom PHP 5.6 engine to React, Vite, and Redux, integrated with a separate backend API documented in Swagger.",
    description:
      "I moved the frontend of an existing website from a custom engine to a React application, keeping all existing frontend functionality. I was responsible for the frontend only, while another developer handled the backend. The migration was done section by section, starting with the header and footer, then the homepage banner slider and the remaining parts.",
    problem:
      "The site ran on a custom PHP 5.6 engine with an unknown CRM, so every change or new feature required finding a developer who could understand someone else's system, and maintenance depended on such people.",
    solution:
      "I designed the frontend architecture on React with Vite for the build and Redux for global state, including the catalog and the cart. I implemented routing and navigation and integrated the app, together with the backend developer, with an API documented in Swagger/OpenAPI, including catalog data and product images. React components were written from scratch, and only HTML and CSS were carried over from the old code with small edits.",
    techStack: [
      "React",
      "Vite",
      "Redux",
      "REST API",
      "Swagger / OpenAPI",
    ],
    githubUrl: "",
    liveUrl: "https://www.evera.az/",
    coverImage: "/images/evera/evera-main.avif",
    images: [],
    featured: true,
    order: 1,
  },
  {
    title: "Used Cars Marketplace",
    slug: "used-cars-marketplace",
    summary:
      "Fullstack car marketplace on the Next.js App Router with role-based server-side authorization, an admin CRUD panel, a server-side cart, and a shareable URL-driven catalog.",
    description:
      "A fullstack used-car marketplace built on the Next.js App Router. It includes authentication with role-based server-side authorization, admin CRUD for the catalog, favorites, and a server-side cart with quantity management, checkout, and order confirmation. Catalog filtering and sorting live in the URL, so any filtered view can be shared as a link.",
    problem:
      "A catalog-driven marketplace needs filter and cart state that survives navigation and reloads, can be shared as a link, and keeps admin actions protected on the server rather than only hidden in the UI.",
    solution:
      "Filters and sorting are stored in the URL, so state persists across navigation and reload and every view is shareable. The cart is kept on the server with quantity management, and access to admin features is enforced by role-based authorization on the server side.",
    techStack: [
      "Next.js (App Router)",
      "React",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "NextAuth.js",
      "Tailwind CSS",
      "Radix UI",
      "Swiper",
      "Docker",
      "Vercel",
    ],
    githubUrl: "https://github.com/murad-proger/car-marketplace-fullstack",
    liveUrl: "https://used-cars-next.vercel.app",
    coverImage: "/images/used-cars-marketplace/used-cars-marketplace-main.avif",
    images: [
      "/images/used-cars-marketplace/used-cars-marketplace-1.avif",
      "/images/used-cars-marketplace/used-cars-marketplace-2.avif",
      "/images/used-cars-marketplace/used-cars-marketplace-3.avif",
      "/images/used-cars-marketplace/used-cars-marketplace-4.avif",
    ],
    featured: true,
    order: 2,
  },
  {
    title: "Rozetki.su",
    slug: "rozetki",
    summary:
      "Performance and technical SEO work on a retail e-commerce site: Google PageSpeed from 57 to 92 on desktop, a move from the second search results page to the top 5 in Moscow, and a React outlet configurator.",
    description:
      "Commercial e-commerce project at Oweb Solutions, built together with a project manager and backend developers. My work covered three areas: performance optimization based on the Google PageSpeed report, technical SEO, and rebuilding the outlet configurator in React as a trial step toward a gradual migration of the site. The team worked in weekly sprints with feature branches, pull requests, and a local Docker setup.",
    problem:
      "The client demanded a faster site, and a PageSpeed audit showed several layers of problems at once: scripts loaded on every page, heavy images, about 4,000 redundant lines of CSS, and excess HTML nesting. Separately, marketing reported that the site was poorly readable for search crawlers and sat on the second results page in Moscow.",
    solution:
      "Scripts are now loaded only on pages that need them, heavy images are compressed and lazy-loaded, about 4,000 lines of redundant CSS were removed or rewritten, and the HTML was flattened with proper semantic tags and alt text. For SEO, I restructured the semantic HTML, added Schema.org structured data and metadata, and implemented breadcrumbs. The outlet configurator was rebuilt in React with dynamic product variants driven by the selected parameters, using plain props instead of Context or Redux because the component tree is shallow. Google PageSpeed on desktop went from 57 to 92, and the site moved from the second results page into the top 5 for Moscow.",
    techStack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Schema.org",
      "Google PageSpeed",
      "Git",
      "Docker",
    ],
    githubUrl: "",
    liveUrl: "https://rozetki.su/",
    coverImage: "/images/rozetki/rozetki-main.avif",
    images: [],
    featured: true,
    order: 3,
  },
  {
    title: "Car Marketplace UI System",
    slug: "car-marketplace-ui-system",
    summary:
      "React and TypeScript storefront with reusable UI components and modular Redux Toolkit state for the catalog, filters, cart, favorites, and orders.",
    description:
      "A frontend-only car marketplace built with React and TypeScript around a set of reusable UI components. State is split into Redux Toolkit modules for the catalog, filters, cart, favorites, and orders. The cart, favorites, checkout, and order history are persisted in LocalStorage. Catalog filtering and sorting by price, year, engine displacement, brand, and body type is done through Mokky API parameters.",
    problem:
      "A catalog with many filters, a cart, favorites, and order history needs predictable client-side state, and the filtering itself should be handled by the API instead of in the browser.",
    solution:
      "State is organized into modular Redux Toolkit slices with async data fetching through Axios and createAsyncThunk. Filters and sorting are passed to the Mokky API as request parameters, and the cart, favorites, checkout, and order history are persisted in LocalStorage.",
    techStack: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "React Router",
      "REST API",
      "Axios",
      "Vite",
    ],
    githubUrl: "https://github.com/murad-proger/car-marketplace-frontend",
    liveUrl: "https://murad-proger.github.io/car-marketplace-frontend",
    coverImage: "/images/car-marketplace-ui-system/used-cars-frontend-main.avif",
    images: [
      "/images/car-marketplace-ui-system/used-cars-frontend-1.avif",
      "/images/car-marketplace-ui-system/used-cars-frontend-2.avif",
    ],
    featured: true,
    order: 4,
  },
  {
    title: "AltoCar",
    slug: "altocar",
    summary:
      "React interface for a taxi marketplace covering subscriptions, discount days, and loyalty points, built cross-browser and mobile-first; related support requests dropped by about 32%.",
    description:
      "React components for a taxi marketplace's subscriptions, discount-day management, and points tracking and redemption, built from a ready design and logic. The interface was designed for screens up to 768px from the start so it could later be ported to React Native, and it was tested in Blink, WebKit, and Gecko browsers.",
    problem:
      "The interface had to behave identically across browsers, otherwise the team risked losing revenue. The design targeted screens up to 768px, and the code had to be ready for a future move to React Native.",
    solution:
      "I used modern standards, checked property support on Can I use, normalized styles by hand instead of pulling in normalize.css to keep the CSS small, and added -webkit- and -moz- prefixes for older engines. According to the support team, the new points and discount UI cut related support requests by about 32%.",
    techStack: [
      "React",
      "JavaScript",
      "CSS3",
      "Cross-browser testing",
    ],
    githubUrl: "",
    liveUrl: "https://altocar-vse-taksi-v-odnom.softonic.ru/android",
    coverImage: "/images/altocar/altocar-main.avif",
    images: [
      "/images/altocar/altocar-1.avif",
      "/images/altocar/altocar-2.avif",
      "/images/altocar/altocar-3.avif",
      "/images/altocar/altocar-4.avif",
    ],
    featured: true,
    order: 5,
  },
  {
    title: "KrymKing",
    slug: "krymking",
    summary:
      "Redesign of a vacation rental platform: a faster booking form, an interactive Yandex Maps search with 50+ listings, and a fullscreen photo gallery, with the frontend migrated from WordPress to a custom engine.",
    description:
      "Commercial redesign of an existing rental platform at Oweb Solutions. I was the only frontend developer, working with a designer, a backend developer, and a project manager. The site was moved from WordPress to a custom engine while keeping all existing frontend functionality, and the interface was rebuilt from the designer's Figma mockups and made responsive down to 320px. Each task went through a feature branch, a local Docker check, and a pull request reviewed by the team.",
    problem:
      "The old booking form had an outdated design, inconsistent element behavior, and poor UX, and the company was losing bookings. Users also could not see property data directly on the map, which took two clicks to a list page plus extra filtering, and the property photos could not be opened full screen.",
    solution:
      "I rebuilt the booking form from the Figma mockup with a date picker and defined behavior for the focus, empty, and filled states. I added Yandex Maps balloons with property data to the existing map, so users can zoom into an area and pick from 50+ listings without going through the list page, which stays as a secondary search path. Property photos now open in a Fancybox gallery. Booking completion time dropped by about 30% and bookings grew by about 12% on average.",
    techStack: [
      "JavaScript",
      "HTML5",
      "CSS3",
      "SCSS",
      "Yandex Maps API",
      "Fancybox",
      "Git",
      "Docker",
    ],
    githubUrl: "https://github.com/dk-comp/krymking",
    liveUrl: "https://krymking.ru/",
    coverImage: "/images/krymking/krymking-main.avif",
    images: [
      "/images/krymking/krymking-1.avif",
      "/images/krymking/krymking-2.avif",
    ],
    featured: true,
    order: 6,
  },
  {
    title: "Cryomont",
    slug: "cryomont",
    summary:
      "Flagship corporate website of 14 pages built from Figma in vanilla HTML, CSS, and JavaScript, with a custom fullscreen scroll engine, 8 Swiper sliders, a megamenu, and an interactive SVG map of Russia.",
    description:
      "A multi-page corporate website for a company working across Russia, built from complex Figma mockups without frameworks. It has 14 pages, 15 responsive breakpoints, 8 Swiper sliders, a megamenu, counters, a preloader, and an interactive SVG map of Russia with region and city tooltips. The markup was prepared for integration into the company's internal CMS and handed over to the backend team. Roughly 5,000 lines of HTML, 5,000 lines of CSS, and 800 lines of JavaScript, all written by me.",
    problem:
      "The site had to be delivered together with the backend within the agreed 2 to 3 months, or the company's reputation with the client would suffer. A paid fullscreen-scroll plugin had not been budgeted, so the standard solution was unavailable, and the markup still had to plug easily into the CMS and handle any amount of content.",
    solution:
      "I wrote a fullscreen scroll engine from scratch in about 300 lines of JavaScript. It handles wheel, keyboard, and swipe input, works with sliders and blocks with inner overflow, switches off below 1280px, and does not depend on a specific slider library. Repeating entities were built as reusable templates with a single class structure, so the backend team needed two templates instead of about ten separate pages, and the frontend was finished in roughly a month. The SVG map highlights regions by intersecting each city marker with the map paths, and new cities can be added through the admin. Custom slideUp, slideDown, and slideToggle helpers replaced jQuery and saved an estimated 70 to 80 KB.",
    techStack: [
      "HTML5",
      "CSS3",
      "JavaScript (vanilla)",
      "Swiper",
      "SVG",
      "Yandex Maps API",
      "Figma",
    ],
    githubUrl: "",
    liveUrl: "https://cryomont.com/",
    coverImage: "/images/cryomont/cryomont-main.avif",
    images: [
      "/images/cryomont/cryomont-1.avif",
      "/images/cryomont/cryomont-2.avif",
    ],
    featured: true,
    order: 7,
  },
  {
    title: "AKmarket40",
    slug: "akmarket40",
    summary:
      "E-commerce site rebuilt from scratch in 4 months, with an interactive product comparison block featuring a slider and drag-and-drop reordering; traffic and time on site grew by about 20%.",
    description:
      "A full redesign of an online store, from the storefront to the admin panel, built from ready UI/UX mockups at Oweb Solutions. I handled the whole frontend and worked with a project manager, backend developers, and a designer, helping the designer keep the logic of the old site. Work was done in weekly sprints with feature branches, pull requests, code review, and a local Docker environment.",
    problem:
      "The old store had an outdated, inconvenient interface and its customer base was not growing. The site had to be rebuilt within 4 months with new logic while preserving the features of the old one. The comparison block needed specs to line up row by row even though cells held different amounts of text.",
    solution:
      "The comparison block has a static column of specs on the left and one slider column per product, with navigation arrows appearing when there are more than three products. I proposed and built drag-and-drop reordering with jQuery UI Draggable, and the column order is preserved. Uneven row heights were solved in pure CSS based on the largest cell content, with no extra scripts. After launch, traffic and average time on site grew by about 20% according to Yandex Metrica, and the project was delivered on time.",
    techStack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "jQuery",
      "jQuery UI",
      "Git",
      "Docker",
    ],
    githubUrl: "https://github.com/murad-proger/murad-proger.github.io/tree/master/AK-market",
    liveUrl: "https://www.akmarket40.ru/",
    coverImage: "/images/akmarket40/akmarket40-main.avif",
    images: [
      "/images/akmarket40/akmarket40-1.avif",
      "/images/akmarket40/akmarket40-2.avif",
    ],
    featured: true,
    order: 8,
  },
  {
    title: "Oweb Solutions Website",
    slug: "oweb-solutions",
    summary:
      "Frontend of the company's own redesigned website in native JavaScript, featuring a menu that collapses into a vertical burger strip on scroll and a video banner with custom Swiper-based transitions.",
    description:
      "I built the frontend of the Oweb Solutions redesign from the layout, with two non-trivial elements: a desktop menu that stays reachable without covering content, and a fullscreen video banner modeled on a competitor's React slider. Everything is written in native HTML, CSS, and JavaScript without a build step.",
    problem:
      "The desktop menu in the mockup was two-tiered and 130px tall, covering section titles on an animated site. The director wanted the menu always at hand and the info panel kept, which ruled out a thin sticky header. The director also asked for a banner on the level of a competitor's custom React slider, on a site that had no build tooling.",
    solution:
      "On scroll past a 150px threshold, the horizontal menu folds to the left and unfolds into a vertical strip with a burger that opens the mobile menu, with separate logic for widths up to 1270px. For the banner, I reproduced the competitor's timings and animation sequence from measurements. Swiper only holds the slides and handles the fade, while custom logic ties slide duration to video.duration, splits each transition into exit and entry phases, and cancels timers when a tab is clicked mid-animation.",
    techStack: [
      "HTML5",
      "CSS3",
      "JavaScript (vanilla)",
      "Swiper API",
    ],
    githubUrl: "",
    liveUrl: "https://www.oweb-solutions.ru/",
    coverImage: "/images/oweb-solutions/oweb-solutions-main.avif",
    images: [
      "/images/oweb-solutions/oweb-solutions-1.avif",
      "/images/oweb-solutions/oweb-solutions-2.avif",
    ],
    featured: true,
    order: 9,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}