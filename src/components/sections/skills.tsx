import { Section } from "./section";
import { skillGroups } from "../../content/skills";

export function SkillsSection() {
  return (
    <Section id="skills" title="Skills">
      <dl className="flex flex-col gap-5">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="grid gap-1 sm:grid-cols-[9rem_1fr] sm:gap-8"
          >
            <dt className="text-muted-foreground">{group.title}</dt>
            <dd>{group.skills.join(", ")}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
