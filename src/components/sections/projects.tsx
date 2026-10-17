import { ProjectCard } from "../project-card";
import { Section } from "./section";
import { projects } from "../../content/projects";

export function ProjectsSection() {
  const featured = projects
    .filter((project) => project.featured)
    .sort((a, b) => a.order - b.order);

  return (
    <Section id="projects" title="Projects">
      <div className="flex flex-col gap-14 sm:gap-16">
        {featured.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  );
}
