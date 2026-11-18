import { getMessages, type Locale } from "../lib/i18n";

export default function AboutPage({ locale = "en" }: { locale?: Locale }) {
  const messages = getMessages(locale);
  const copy = messages.about;

  return (
    <main className="min-h-[calc(100svh-5rem)] bg-kodex-bg px-6 py-20 text-kodex-text sm:px-10 sm:py-24 lg:px-16">
      <div className="mx-auto w-full max-w-6xl">
        <header className="max-w-4xl">
          <div
            aria-hidden="true"
            className="mb-10 flex size-16 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-2xl font-semibold tracking-[-0.06em] text-kodex-text shadow-[0_0_40px_rgba(190,205,225,0.08)]"
          >
            K
          </div>
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.32em] text-kodex-muted">
            {messages.brandLine}
          </p>
          <h1 className="text-5xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-6xl md:text-7xl">
            {copy.title}
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-kodex-muted sm:text-xl sm:leading-9">
            {copy.description}
          </p>
        </header>

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:mt-24 md:grid-cols-2">
          <section className="bg-kodex-bg p-7 sm:p-10 lg:p-12">
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-kodex-muted">
              {copy.direction}
            </p>
            <h2 className="mt-10 text-2xl font-medium tracking-[-0.035em] sm:text-3xl">
              {copy.vision}
            </h2>
            <p className="mt-5 max-w-lg text-base leading-7 text-kodex-muted sm:text-lg sm:leading-8">
              {copy.visionText}
            </p>
          </section>

          <section className="bg-kodex-bg p-7 sm:p-10 lg:p-12">
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-kodex-muted">
              {copy.principles}
            </p>
            <h2 className="mt-10 text-2xl font-medium tracking-[-0.035em] sm:text-3xl">
              {copy.approach}
            </h2>
            <p className="mt-5 max-w-lg text-base leading-7 text-kodex-muted sm:text-lg sm:leading-8">
              {copy.approachText}
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
