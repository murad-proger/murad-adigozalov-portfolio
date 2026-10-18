import { profile } from "../../content/profile";

const REPEAT = 3;

export function TechMarquee() {
  const items = profile.techMarquee;

  return (
    <section>
      <p className="mb-5 text-center text-xs tracking-widest">
        TECHNOLOGIES I WORK WITH
      </p>

    <div
      aria-label="Technologies"
      className="tech-marquee bg-surface border-border text-muted-foreground border-t"
    >
      <div className="tech-marquee-inner">
        {/* Track 1: First track containing the single accessible group for screen readers */}
        <div className="tech-marquee-track">
          {Array.from({ length: REPEAT }).map((_, groupIndex) => (
            <ul
              key={`t0-g${groupIndex}`}
              className="tech-marquee-group"
              aria-hidden={groupIndex > 0 ? "true" : undefined}
            >
              {items.map((tech) => (
                <li
                  key={`t0-g${groupIndex}-${tech}`}
                  className="tech-marquee-item"
                >
                  <span>{tech}</span>
                  <span className="tech-marquee-separator" aria-hidden="true">
                    •
                  </span>
                </li>
              ))}
            </ul>
          ))}
        </div>

        {/* Track 2: Duplicate track for seamless infinite loop */}
        <div className="tech-marquee-track" aria-hidden="true">
          {Array.from({ length: REPEAT }).map((_, groupIndex) => (
            <ul
              key={`t1-g${groupIndex}`}
              className="tech-marquee-group"
              aria-hidden="true"
            >
              {items.map((tech) => (
                <li
                  key={`t1-g${groupIndex}-${tech}`}
                  className="tech-marquee-item"
                >
                  <span>{tech}</span>
                  <span className="tech-marquee-separator" aria-hidden="true">
                    •
                  </span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
}