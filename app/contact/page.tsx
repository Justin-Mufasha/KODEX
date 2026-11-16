"use client";

export default function ContactPage() {
  return (
    <main className="min-h-[calc(100svh-5rem)] bg-[#1B2028] px-6 py-20 text-white sm:px-10 sm:py-24 lg:px-16">
      <section className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div className="flex flex-col items-start">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.32em] text-slate-400">
            Let&apos;s work together
          </p>
          <h1 className="max-w-2xl text-5xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-6xl md:text-7xl">
            Start a Project
          </h1>
          <p className="mt-7 max-w-lg text-base leading-7 text-slate-300/70 sm:text-lg sm:leading-8">
            Tell us about your idea. We&apos;ll get back to you within 24 hours.
          </p>
        </div>

        <div>
          <form
            className="rounded-3xl border border-white/[0.09] bg-gradient-to-br from-white/[0.045] to-white/[0.015] p-6 sm:p-9 lg:p-10"
            onSubmit={(event) => {
              event.preventDefault();

              const formData = new FormData(event.currentTarget);
              const name = String(formData.get("name") ?? "");
              const email = String(formData.get("email") ?? "");
              const message = String(formData.get("message") ?? "");
              const subject = encodeURIComponent("New Project Inquiry");
              const body = encodeURIComponent(
                `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
              );

              window.location.href = `mailto:mufashajustin@gmail.com?subject=${subject}&body=${body}`;
            }}
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label
                  className="text-sm font-medium text-slate-200"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  autoComplete="name"
                  className="w-full rounded-xl border border-white/10 bg-[#252A32] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-400 focus:border-white/30 focus:ring-2 focus:ring-white/10"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                  type="text"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  className="text-sm font-medium text-slate-200"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  autoComplete="email"
                  className="w-full rounded-xl border border-white/10 bg-[#252A32] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-400 focus:border-white/30 focus:ring-2 focus:ring-white/10"
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
                Message
              </label>
              <textarea
                className="min-h-40 w-full resize-y rounded-xl border border-white/10 bg-[#252A32] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-400 focus:border-white/30 focus:ring-2 focus:ring-white/10"
                id="message"
                name="message"
                placeholder="Tell us a little about your project..."
                required
                rows={5}
              />
            </div>

            <button
              className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#080A0F] transition hover:-translate-y-0.5 hover:bg-slate-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto"
              type="submit"
            >
              Send Message
            </button>
          </form>

          <div className="mt-8 border-t border-white/[0.09] pt-6">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
              Prefer email?
            </p>
            <a
              className="mt-3 inline-block text-base text-slate-200 transition-colors hover:text-white sm:text-lg"
              href="mailto:mufashajustin@gmail.com"
            >
              mufashajustin@gmail.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
