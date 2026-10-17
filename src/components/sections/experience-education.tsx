import { Section } from "./section";
import { experiences } from "../../content/experience";
import { educationList } from "../../content/education";

const row = "grid gap-x-8 gap-y-1 lg:grid-cols-[8rem_1fr]";

export function ExperienceSection() {
  return (
    <Section id="experience" title="Experience">
      <ol className="flex flex-col gap-12">
        {experiences.map((experience) => (
          <li
            key={`${experience.company}-${experience.startDate}`}
            className={row}
          >
            <p className="text-muted-foreground text-[0.73rem] lg:pt-1">
              {experience.startDate} – {experience.endDate}
            </p>
            <div>
              <h3 className="text-xl">{experience.role}</h3>
              <p className="mt-1">
                {experience.companyUrl ? (
                  <a
                    href={experience.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                  >
                    {experience.company}
                  </a>
                ) : (
                  experience.company
                )}
              </p>
              <p className="text-muted-foreground text-[0.9375rem]">
                {[experience.engagement, experience.location].filter(Boolean).join(", ")}
              </p>

              <ul className="marker:text-muted-foreground mt-4 list-disc space-y-2 pl-5">
                {experience.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>

              <p className="text-muted-foreground mt-4 text-[0.9375rem]">
                {experience.techStack.join(", ")}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function EducationSection() {
  return (
    <Section id="education" title="Education">
      <ol className="flex flex-col gap-10">
        {educationList.map((education) => (
          <li key={education.institution} className={row}>
            <p className="text-muted-foreground text-[0.9375rem] lg:pt-1">
              {education.startDate} – {education.endDate}
            </p>
            <div>
              <h3 className="text-xl">{education.institution}</h3>
              <p className="mt-1">{education.degree}</p>
              <p className="text-muted-foreground text-[0.9375rem]">
                {education.location}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
