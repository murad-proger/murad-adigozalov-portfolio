"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { profile } from "../../content/profile";
import { cn } from "../../lib/utils";
import { scrollToHash } from "../../lib/scroll";

const navLinks = [
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [observedSection, setActiveSection] = useState<string | null>(null);
  const activeSection = pathname === "/" ? observedSection : null;

  useEffect(() => {
    if (pathname !== "/") {
      return;
    }
    const sections = navLinks
      .map((link) => link.href.split("#")[1])
      .filter((id): id is string => Boolean(id))
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <header className="border-border bg-background sticky top-0 z-50 border-b">
      <nav
        className="mx-auto flex h-14 max-w-5xl items-center justify-between px-5 sm:px-8"
        aria-label="Main"
      >
        <Link
          href="/"
          className="font-heading text-xl"
          onClick={() => setMenuOpen(false)}
        >
          Murad Adigozalov
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "text-[0.9375rem] underline-offset-8 transition-colors",
                    activeSection === link.href.split("#")[1]
                      ? "text-foreground underline decoration-1"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                  onClick={(event) => scrollToHash(event, link.href)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={profile.cvPath}
            download
            className="btn btn-line py-1.5 text-sm"
          >
            Resume
          </a>
        </div>

        <button
          type="button"
          className="text-foreground md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="border-border bg-background border-t px-5 pt-2 pb-6 md:hidden"
        >
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "border-border block border-b py-3 transition-colors",
                    activeSection === link.href.split("#")[1]
                      ? "text-foreground"
                      : "text-muted-foreground",
                  )}
                  onClick={(event) => {
                    scrollToHash(event, link.href);
                    setMenuOpen(false);
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={profile.cvPath}
            download
            className="btn btn-line mt-5 w-full"
            onClick={() => setMenuOpen(false)}
          >
            Resume
          </a>
        </div>
      )}
    </header>
  );
}
