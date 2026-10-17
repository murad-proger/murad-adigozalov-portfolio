import { Hero } from "../components/sections/hero";
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
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <SkillsSection />
      <ContactSection />
    </>
  );
}
