import KigaliClock from "./components/KigaliClock";
import Ring3D from "./components/Ring3D";
import { getMessages, type Locale } from "./lib/i18n";

const sectionLabel =
  "text-xs font-medium uppercase tracking-[0.16em] text-[#A1A1AA]";
const headingStyle =
  "font-semibold leading-[1.05] tracking-[-0.035em] text-kodex-text";

export default function Home({ locale = "en" }: { locale?: Locale }) {
  const copy = getMessages(locale).home;

  return (
    <main className="bg-kodex-bg text-kodex-text">
      <section
        aria-labelledby="home-heading"
        className="relative flex min-h-[calc(100svh-5rem)] items-center justify-center overflow-hidden px-6 py-20 text-center sm:px-10 sm:py-24 lg:px-16"
        id="home"
      >
        <KigaliClock locale={locale} />
        <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center">
          <p className={`${sectionLabel} mt-8`}>{copy.eyebrow}</p>
          <h1
            className="home-display mx-auto mt-8 max-w-6xl sm:mt-10"
            id="home-heading"
          >
            <span className="block">{copy.headingFirst}</span>
            <span className="block bg-gradient-to-r from-[#f5f5f5] via-[#d4d4d4] to-[#737373] bg-clip-text text-transparent">
              {copy.headingSecond}
            </span>
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-[#A1A1AA] sm:text-lg sm:leading-8">
            {copy.description}
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-kodex-text px-6 text-sm font-semibold text-kodex-bg transition-colors hover:bg-neutral-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              href={locale === "en" ? "/work" : `/${locale}/work`}
            >
              {copy.explore}
            </a>
            <a
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/25 px-6 text-sm font-medium text-white transition-colors hover:border-white/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              href={locale === "en" ? "/contact" : `/${locale}/contact`}
            >
              {copy.start}
            </a>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden"
        >
          <div className="w-full max-w-[23rem] scale-[1.15] opacity-[0.55]">
            <Ring3D />
          </div>
        </div>
      </section>

      <section
        aria-labelledby="services-heading"
        className="border-t border-white/10 px-6 py-32 sm:px-10 sm:py-48 lg:px-16"
        id="services"
      >
        <div className="mx-auto max-w-7xl">
          <p className={sectionLabel}>{copy.servicesEyebrow}</p>
          <h2
            className={`${headingStyle} mt-5 max-w-3xl text-4xl sm:text-5xl lg:text-6xl`}
            id="services-heading"
          >
            {copy.servicesHeading}
          </h2>

          <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-3 lg:gap-x-12">
            {copy.services.map(([title, description], index) => (
              <article
                className="border-t border-white/15 pt-6"
                key={title}
              >
                <p className="text-sm tracking-[0.16em] text-[#A1A1AA]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-6 text-xl font-medium tracking-tight text-kodex-text sm:text-2xl">
                  {title}
                </h3>
                <p className="mt-3 max-w-sm leading-7 text-[#A1A1AA]">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="work-heading"
        className="border-t border-white/10 px-6 py-32 sm:px-10 sm:py-48 lg:px-16"
        id="work"
      >
        <div className="mx-auto max-w-5xl">
          <p className={sectionLabel}>{copy.workEyebrow}</p>
          <h2
            className={`${headingStyle} mt-5 text-4xl sm:text-5xl lg:text-6xl`}
            id="work-heading"
          >
            {copy.workHeading}
          </h2>

          <div className="mt-12 border-t border-white/15">
            {copy.projects.map(([title, category], index) => (
              <article
                className="flex flex-col gap-3 border-b border-white/15 py-8 sm:flex-row sm:items-baseline sm:justify-between sm:py-10"
                key={title}
              >
                <h3 className="text-2xl font-medium tracking-tight text-kodex-text sm:text-3xl">
                  {title}
                </h3>
                <p className="text-sm text-[#A1A1AA]">
                  0{index + 1} <span aria-hidden="true">/</span>{" "}
                  {category}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
