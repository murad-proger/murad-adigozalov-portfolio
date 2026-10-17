"use client";

import { useState, type FormEvent } from "react";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { sendContactMessage } from "../../app/actions/send-email";
import { Section } from "./section";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { profile } from "../../content/profile";

const contactRows = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/[^+\d]/g, "")}`,
  },
  { label: "Location", value: profile.location },
];

export function ContactSection() {
  const [sending, setSending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setSending(true);
    const result = await sendContactMessage(new FormData(form));
    setSending(false);
    if (result.ok) {
      toast.success("Message sent — I'll get back to you soon!");
      form.reset();
    } else {
      toast.error(result.error ?? "Something went wrong. Please try again.");
    }
  }

  return (
    <Section id="contact" title="Contact">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <p className="max-w-[28rem]">
            Open to: Remote, relocation or on-site. Tell me about your 
            project or role, and I&apos;ll get
            back to you quickly.
          </p>

          <dl className="mt-8 flex flex-col gap-4">
            {contactRows.map((row) => (
              <div key={row.label}>
                <dt className="text-muted-foreground text-[0.9375rem]">
                  {row.label}
                </dt>
                <dd>
                  {row.href ? (
                    <a href={row.href} className="link">
                      {row.value}
                    </a>
                  ) : (
                    row.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="hidden"
          />
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label htmlFor="contact-name" className="text-[0.9375rem]">
                Name
              </label>
              <Input
                id="contact-name"
                name="name"
                required
                maxLength={100}
                autoComplete="name"
              />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="contact-email" className="text-[0.9375rem]">
                Email
              </label>
              <Input
                id="contact-email"
                name="email"
                type="email"
                required
                autoComplete="email"
              />
            </div>
          </div>
          <div className="mt-5 space-y-1.5">
            <label htmlFor="contact-message" className="text-[0.9375rem]">
              Message
            </label>
            <Textarea
              id="contact-message"
              name="message"
              required
              maxLength={2000}
              rows={6}
              className="min-h-36"
            />
          </div>
          <button
            type="submit"
            disabled={sending}
            className="btn btn-solid mt-6 w-full sm:w-auto"
          >
            {sending && (
              <Loader2 className="size-4 animate-spin" aria-hidden="true" />
            )}
            {sending ? "Sending…" : "Send message"}
          </button>
        </form>
      </div>
    </Section>
  );
}
