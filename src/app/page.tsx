import { Hero } from "../components/sections/hero";
import { TechMarquee } from "../components/sections/tech-marquee";
import { ProjectsSection } from "../components/sections/projects";
import {
  ExperienceSection,
  EducationSection,
} from "../components/sections/experience-education";
import { SkillsSection } from "../components/sections/skills";
import { ContactSection } from "../components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <SkillsSection />
      <ContactSection />
    </>
  );
}
