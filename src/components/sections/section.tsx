import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  children: ReactNode;
};

export function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="border-border scroll-mt-14 border-t">
      <div className="mx-auto grid w-full max-w-5xl gap-6 px-5 py-14 sm:px-8 sm:py-20 md:grid-cols-[10rem_1fr] md:gap-12">
        <h2 className="text-2xl md:sticky md:top-24 md:self-start">{title}</h2>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
}
