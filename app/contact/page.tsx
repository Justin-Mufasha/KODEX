"use client";

import { useState, type FormEvent } from "react";
import { getMessages, type Locale } from "../lib/i18n";

export default function ContactPage({ locale = "en" }: { locale?: Locale }) {
  const copy = getMessages(locale).contact;
  const [submissionStatus, setSubmissionStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmissionStatus("submitting");
    const form = event.currentTarget;

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        setSubmissionStatus("error");
        return;
      }

      form.reset();
      setSubmissionStatus("success");
    } catch {
      setSubmissionStatus("error");
    }
  }

  return (
    <main className="min-h-[calc(100svh-5rem)] bg-kodex-bg px-6 py-20 text-kodex-text sm:px-10 sm:py-24 lg:px-16">
      <section className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div className="flex flex-col items-start">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.32em] text-slate-400">
            {copy.eyebrow}
          </p>
          <h1 className="max-w-2xl text-5xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-6xl md:text-7xl">
            {copy.title}
          </h1>
          <p className="mt-7 max-w-lg text-base leading-7 text-slate-300/70 sm:text-lg sm:leading-8">
            {copy.description}
          </p>
        </div>

        <div>
          <form
            action="https://formspree.io/f/your-id"
            className="rounded-3xl border border-white/[0.09] bg-gradient-to-br from-white/[0.045] to-white/[0.015] p-6 sm:p-9 lg:p-10"
            method="POST"
            onSubmit={handleSubmit}
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label
                  className="text-sm font-medium text-slate-200"
                  htmlFor="name"
                >
                  {copy.name}
                </label>
                <input
                  autoComplete="name"
                  className="w-full rounded-xl border border-white/10 bg-[#111111] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-400 focus:border-white/30 focus:ring-2 focus:ring-white/10"
                  id="name"
                  name="name"
                  placeholder={copy.yourName}
                  required
                  type="text"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  className="text-sm font-medium text-slate-200"
                  htmlFor="email"
                >
                  {copy.email}
                </label>
                <input
                  autoComplete="email"
                  className="w-full rounded-xl border border-white/10 bg-[#111111] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-400 focus:border-white/30 focus:ring-2 focus:ring-white/10"
                  id="email"
                  name="email"
                  placeholder="you@company.com"
                  required
                  type="email"
                />
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-2">
              <label
                className="text-sm font-medium text-slate-200"
                htmlFor="message"
              >
                {copy.message}
              </label>
              <textarea
                className="min-h-40 w-full resize-y rounded-xl border border-white/10 bg-[#111111] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-400 focus:border-white/30 focus:ring-2 focus:ring-white/10"
                id="message"
                name="message"
                placeholder={copy.messagePlaceholder}
                required
                rows={5}
              />
            </div>

            <button
              className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#080A0F] transition hover:-translate-y-0.5 hover:bg-slate-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              disabled={submissionStatus === "submitting"}
              type="submit"
            >
              {submissionStatus === "submitting" ? copy.sending : copy.send}
            </button>
            <p aria-live="polite" className="mt-5 text-sm text-slate-300">
              {submissionStatus === "success" &&
                copy.success}
              {submissionStatus === "error" &&
                copy.error}
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}
