import Image from "next/image";
import Link from "next/link";
import type { Project } from "../content/types";

export function ProjectCard({ project }: { project: Project }) {
  const href = `/projects/${project.slug}`;

  return (
    <article>
      <Link
        href={href}
        aria-hidden="true"
        tabIndex={-1}
        className="border-border bg-surface block overflow-hidden rounded-sm border"
      >
        <div className="relative aspect-video">
          {project.coverImage ? (
            <Image
              src={project.coverImage}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-cover"
            />
          ) : (
            <div className="bg-surface-2 text-foreground/20 font-heading flex h-full items-center justify-center text-7xl">
              {project.title.charAt(0)}
            </div>
          )}
        </div>
      </Link>

      <div className="mt-5 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
        <h3 className="text-2xl">
          <Link href={href} className="hover:underline">
            {project.title}
          </Link>
        </h3>
        <p className="flex gap-5 text-[0.9375rem]">
          <Link href={href} className="link">
            Details
          </Link>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              Live site
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              GitHub
            </a>
          )}
        </p>
      </div>

      <p className="text-muted-foreground mt-2 max-w-[40rem]">
        {project.summary}
      </p>
      <p className="text-muted-foreground mt-3 text-[0.9375rem]">
        {project.techStack.join(", ")}
      </p>
    </article>
  );
}
