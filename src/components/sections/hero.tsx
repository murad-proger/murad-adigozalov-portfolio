import Image from "next/image";
import { profile } from "../../content/profile";

export function Hero() {
  return (
    <section className="hero-in mx-auto grid w-full max-w-5xl gap-10 px-5 pt-12 pb-16 sm:px-8 sm:pt-20 sm:pb-24 md:grid-cols-[1fr_17rem] md:gap-16">
      <div>
        <h1 className="text-[clamp(2.75rem,7vw,4.5rem)] leading-[1.02] tracking-[-0.025em]">
          {profile.name}
        </h1>
        <p className="text-muted-foreground mt-3 text-xl">{profile.badge}</p>

        <p className="mt-8 max-w-[34rem]">
          Senior Frontend Engineer with 7+ years of experience architecting, 
          optimizing, and delivering high-performance web applications and 
          scalable platforms across E-commerce, Mobility, Real Estate, and Digital Media. 
          Proven track record driving business outcomes through engineering excellence: 
          lifted booking conversions by ~12%, cut customer support inquiries by ~32%, 
          accelerated corporate delivery cycles by 2.5x, and boosted Google PageSpeed scores from 57 to 92. 
          Expert in modern React/Next.js architectures (App Router, Server Actions, SSR), 
          resilient state machines, full-lifecycle payment systems (Stripe webhooks/idempotency), 
          automated testing (Vitest, RTL), and high-efficiency CSS/JS performance optimization
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="btn btn-solid">
            View projects
          </a>
          <a href={profile.cvPath} download className="btn btn-line">
            Download CV
          </a>
        </div>

        <p className="text-muted-foreground mt-6 flex flex-wrap gap-x-5 gap-y-1 text-[0.9375rem]">
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            GitHub
          </a>
          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            LinkedIn
          </a>
        </p>
      </div>

      <div className="profile-photo bg-surface relative order-first aspect-square w-28 overflow-hidden rounded-full md:order-last md:aspect-4/5 md:w-full md:rounded-sm">
        <Image
          src="/images/profile-desctop.avif"
          alt="Murad Adigozalov"
          fill
          priority
          sizes="(max-width: 768px) 112px, 272px"
          className="object-cover object-top"
        />
      </div>
    </section>
  );
}
