"use client";

import { useState } from "react";
import { contactInfo } from "@/config/contact";

/**
 * DEMO consultation form. There is no backend — submitting composes a
 * pre-filled email (or WhatsApp message) to the placeholder contact
 * details in src/config/contact.ts, so the flow feels complete for a
 * pitch. Replace with a real submission endpoint once Dr. Dinesh's
 * actual contact/booking method is confirmed.
 */
export function ConsultationForm(): React.ReactElement {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [concern, setConcern] = useState("");
  const [message, setMessage] = useState("");

  function buildMessage(): string {
    return [
      `Name: ${name}`,
      `Phone: ${phone}`,
      concern ? `Area of interest: ${concern}` : null,
      message ? `Message: ${message}` : null,
    ]
      .filter(Boolean)
      .join("\n");
  }

  function handleEmailSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const subject = encodeURIComponent("Consultation request");
    const body = encodeURIComponent(buildMessage());
    window.open(`${contactInfo.emailHref}?subject=${subject}&body=${body}`, "_self");
  }

  function handleWhatsApp(): void {
    const text = encodeURIComponent(buildMessage());
    window.open(`${contactInfo.whatsappHref}?text=${text}`, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleEmailSubmit} className="mt-14 max-w-xl border-t border-(--color-border) pt-10">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="text-eyebrow">Name</span>
          <input
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="text-body border-b border-(--color-border-strong) bg-transparent py-2 text-(--color-ink) outline-none transition-colors duration-(--duration-fast) ease-(--ease-editorial) focus:border-(--color-accent)"
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-eyebrow">Phone</span>
          <input
            required
            type="tel"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            className="text-body border-b border-(--color-border-strong) bg-transparent py-2 text-(--color-ink) outline-none transition-colors duration-(--duration-fast) ease-(--ease-editorial) focus:border-(--color-accent)"
          />
        </label>

        <label className="flex flex-col gap-2 sm:col-span-2">
          <span className="text-eyebrow">Area of Interest (optional)</span>
          <input
            value={concern}
            onChange={(event) => setConcern(event.target.value)}
            placeholder="e.g. Face, Nose, Body"
            className="text-body border-b border-(--color-border-strong) bg-transparent py-2 text-(--color-ink) outline-none transition-colors duration-(--duration-fast) ease-(--ease-editorial) placeholder:text-(--color-ink-faint) focus:border-(--color-accent)"
          />
        </label>

        <label className="flex flex-col gap-2 sm:col-span-2">
          <span className="text-eyebrow">Message (optional)</span>
          <textarea
            rows={4}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className="text-body resize-none border-b border-(--color-border-strong) bg-transparent py-2 text-(--color-ink) outline-none transition-colors duration-(--duration-fast) ease-(--ease-editorial) focus:border-(--color-accent)"
          />
        </label>
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
        <button
          type="submit"
          className="text-button inline-flex w-full items-center justify-center rounded-(--radius-sm) bg-(--color-accent) px-6 py-3 text-(--color-accent-ink) transition-colors duration-(--duration-fast) ease-(--ease-editorial) hover:bg-(--color-accent-strong) sm:w-auto"
        >
          Send Request
        </button>
        <button
          type="button"
          onClick={handleWhatsApp}
          className="text-button inline-flex w-full items-center justify-center rounded-(--radius-sm) border border-(--color-border-strong) px-6 py-3 text-(--color-ink) transition-colors duration-(--duration-fast) ease-(--ease-editorial) hover:border-(--color-accent) hover:text-(--color-accent) sm:w-auto"
        >
          Send via WhatsApp
        </button>
      </div>
    </form>
  );
}
