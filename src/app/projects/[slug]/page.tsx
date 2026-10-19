import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { FeedbackForm } from "../../../components/feedback-form";
import { ScreenshotGallery } from "../../../components/screenshot-gallery";
import { getProjectBySlug, projects } from "../../../content/projects";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) {
    return {};
  }
  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      images: project.coverImage ? [project.coverImage] : undefined,
    },
  };
}

function CaseSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mt-12">
      <h2 className="text-2xl">{title}</h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) {
    notFound();
  }

  const gallery = project.images.filter(
    (image) => image !== project.coverImage,
  );

  return (
    <article className="mx-auto w-full max-w-3xl px-5 pt-12 pb-20 sm:px-8 sm:pt-16">
      <Link
        href="/#projects"
        className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 text-[0.9375rem] transition-colors"
      >
        <ArrowLeft className="size-4" aria-hidden="true" />
        All projects
      </Link>

      <header className="mt-8">
        <h1 className="text-4xl leading-[1.08] tracking-[-0.02em] sm:text-5xl">
          {project.title}
        </h1>
        <p className="text-muted-foreground mt-4 max-w-[38rem] text-lg">
          {project.summary}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-solid"
            >
              Live site
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-line"
            >
              GitHub
            </a>
          )}
        </div>
      </header>

      {project.videoUrl ? (
        <div className="border-border mt-10 aspect-video overflow-hidden rounded-sm border">
          <iframe
            src={project.videoUrl}
            title={`${project.title} — demo video`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="size-full"
          />
        </div>
      ) : (
        project.coverImage && (
          <div className="border-border bg-surface relative mt-10 aspect-video overflow-hidden rounded-sm border">
            <Image
              src={project.coverImage}
              alt={`${project.title} — interface preview`}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-contain"
            />
          </div>
        )
      )}

      <CaseSection title="About the project">
        <p className="max-w-[42rem]">{project.description}</p>
      </CaseSection>

      <CaseSection title="The problem">
        <p className="max-w-[42rem]">{project.problem}</p>
      </CaseSection>

      <CaseSection title="The solution">
        <p className="max-w-[42rem]">{project.solution}</p>
      </CaseSection>

      {project.whyBuilt && (
        <CaseSection title="Why I built it">
          <p className="max-w-[42rem]">{project.whyBuilt}</p>
        </CaseSection>
      )}

      <CaseSection title="Tech stack">
        <ul className="tech-tags mt-3">
          {project.techStack.map((tech) => (
            <li key={tech} className="tech-tag">
              {tech}
            </li>
          ))}
        </ul>
      </CaseSection>

      {gallery.length > 0 && (
        <CaseSection title="Screenshots">
          <ScreenshotGallery images={gallery} projectTitle={project.title} />
        </CaseSection>
      )}

      <CaseSection title="Feedback">
        <p className="text-muted-foreground max-w-[42rem]">
          Tried this project or read the case study? I&apos;d love to hear your
          thoughts.
        </p>
        <FeedbackForm projectTitle={project.title} />
      </CaseSection>
    </article>
  );
}
