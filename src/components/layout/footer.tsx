import { profile } from "../../content/profile";

export function Footer() {
  return (
    <footer className="border-border border-t">
      <div className="text-muted-foreground mx-auto flex max-w-5xl flex-col gap-3 px-5 py-8 text-[0.9375rem] sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>© {new Date().getFullYear()} Murad Adigozalov</p>
        <p className="flex gap-5">
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
    </footer>
  );
}
