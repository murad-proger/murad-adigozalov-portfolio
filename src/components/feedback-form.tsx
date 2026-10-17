"use client";

import { useState, type FormEvent } from "react";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { sendProjectFeedback } from "../app/actions/send-email";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export function FeedbackForm({ projectTitle }: { projectTitle: string }) {
  const [sending, setSending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setSending(true);
    const result = await sendProjectFeedback(new FormData(form));
    setSending(false);
    if (result.ok) {
      toast.success("Thanks for your feedback!");
      form.reset();
    } else {
      toast.error(result.error ?? "Something went wrong. Please try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-5 grid max-w-xl gap-4">
      <input type="hidden" name="projectTitle" value={projectTitle} />
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />
      <Input
        type="text"
        name="name"
        required
        maxLength={100}
        placeholder="Your name"
        aria-label="Your name"
      />
      <Textarea
        name="comment"
        required
        maxLength={1000}
        rows={4}
        placeholder="Share your thoughts on this project…"
        aria-label="Your feedback"
        className="min-h-28"
      />
      <button type="submit" disabled={sending} className="btn btn-solid w-fit">
        {sending && (
          <Loader2 className="size-4 animate-spin" aria-hidden="true" />
        )}
        {sending ? "Sending…" : "Send feedback"}
      </button>
    </form>
  );
}
