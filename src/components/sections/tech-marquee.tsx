import { profile } from "../../content/profile";

export function TechMarquee() {
  const items = profile.techMarquee;

  return (
    <div
      aria-label="Technologies"
      className="tech-marquee border-border text-muted-foreground border-y"
    >
      <div className="tech-marquee-inner">
        <ul className="tech-marquee-track">
          {items.map((tech) => (
            <li key={tech} className="tech-marquee-item">
              <span>{tech}</span>
              <span className="tech-marquee-separator" aria-hidden="true">
                •
              </span>
            </li>
          ))}
        </ul>
        <ul className="tech-marquee-track" aria-hidden="true">
          {items.map((tech, idx) => (
            <li key={`${tech}-dup-${idx}`} className="tech-marquee-item">
              <span>{tech}</span>
              <span className="tech-marquee-separator" aria-hidden="true">
                •
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
