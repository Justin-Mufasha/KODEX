import Ring3D from "./components/Ring3D";
import Starfield from "./components/Starfield";
import Logo from "./components/Logo";
import Innovation3D from "./components/Innovation3D";

const projects = [
  {
    title: "The Eternal Arc",
    description:
      "An interactive 3D web experience built for KODEX's premium brand identity.",
    technologies: ["Next.js", "Three.js", "React Three Fiber"],
    artwork: "arc",
  },
  {
    title: "Business Stock Tracker",
    description:
      "A web application for local businesses to track inventory and sales.",
    technologies: ["Python", "FastAPI", "PostgreSQL"],
    artwork: "dashboard",
  },
] as const;

export default function Home() {
  return (
    <>
      <main
        className="relative isolate flex min-h-[calc(100svh-5rem)] overflow-hidden bg-kodex-bg text-kodex-text"
        id="home"
      >
        <Starfield />
        <Logo />

        <section className="relative z-10 mx-auto grid w-full max-w-7xl flex-1 items-center gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:px-16">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.32em] text-kodex-muted sm:text-xs">
              KODEX — TECHNOLOGY &amp; INNOVATION
            </p>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-[-0.055em] text-kodex-text sm:text-6xl md:text-7xl">
              Technology that moves business forward.
            </h1>

            <p className="mt-7 max-w-lg text-base leading-7 text-slate-300/65 sm:text-lg sm:leading-8">
              We design and build digital experiences, software and intelligent
              systems that help businesses solve problems and grow.
            </p>

            <div className="mt-10 flex w-full flex-col justify-center gap-4 sm:w-auto sm:flex-row lg:justify-start">
              <a
                className="rounded-full bg-kodex-text px-7 py-3.5 text-sm font-medium text-kodex-bg transition hover:-translate-y-0.5 hover:bg-slate-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                href="/work"
              >
                Explore Our Work
              </a>
              <a
                className="rounded-full border border-white/20 bg-white/[0.03] px-7 py-3.5 text-sm font-medium text-kodex-text transition hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/[0.07] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                href="/contact"
              >
                Start a Project
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.32em] text-kodex-muted sm:text-xs">
              The Eternal Arc
            </p>
            <Ring3D />
          </div>
        </section>
      </main>

      <section
        aria-labelledby="services-heading"
        className="bg-[#15191F] px-6 py-24 text-kodex-text sm:px-10 sm:py-32 lg:px-16"
        id="services"
      >
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid gap-8 border-b border-kodex-border pb-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.32em] text-kodex-muted sm:text-xs">
                What we do
              </p>
              <h2
                className="text-4xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-5xl md:text-6xl"
                id="services-heading"
              >
                Built for what&apos;s next.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-slate-300/65 sm:text-lg sm:leading-8 lg:justify-self-end">
              From a first idea to systems operating at scale, we bring
              thoughtful design and deep engineering together to move your
              business forward.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                number: "01",
                title: "AI & intelligent systems",
                description:
                  "Practical AI products and agentic systems shaped around real business needs.",
              },
              {
                number: "02",
                title: "Software engineering",
                description:
                  "Reliable digital platforms and custom software, engineered to grow with you.",
              },
              {
                number: "03",
                title: "Digital product design",
                description:
                  "Clear, human-centered experiences that turn complex ideas into useful products.",
              },
              {
                number: "04",
                title: "Data & automation",
                description:
                  "Connected data and intelligent workflows that help teams work with confidence.",
              },
              {
                number: "05",
                title: "Cloud & infrastructure",
                description:
                  "Secure, resilient foundations for modern applications and critical workloads.",
              },
              {
                number: "06",
                title: "Robotics & emerging tech",
                description:
                  "Exploration and development at the frontier of software and the physical world.",
              },
            ].map((service) => (
              <article
                className="border-b border-kodex-border py-8 sm:px-6 sm:py-10 lg:px-8"
                key={service.number}
              >
                <p className="mb-8 text-xs tracking-[0.2em] text-slate-500">
                  {service.number}
                </p>
                <h3 className="text-xl font-medium tracking-tight sm:text-2xl">
                  {service.title}
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-6 text-slate-300/60 sm:text-base sm:leading-7">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="innovation-heading"
        className="overflow-hidden bg-[#1B2028] px-6 py-24 text-kodex-text sm:px-10 sm:py-32 lg:px-16"
        id="innovation"
      >
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.32em] text-kodex-muted sm:text-xs">
              Beyond the expected
            </p>
            <h2
              className="max-w-xl text-4xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-5xl md:text-6xl"
              id="innovation-heading"
            >
              Ideas, in motion.
            </h2>
            <p className="mt-7 max-w-lg text-base leading-7 text-slate-300/65 sm:text-lg sm:leading-8">
              The KODEX Innovation Lab explores emerging technologies and
              prototypes new ways to solve the challenges ahead.
            </p>
            <a
              className="mt-9 inline-flex items-center gap-3 text-sm font-medium text-kodex-text transition-colors hover:text-slate-300"
              href="/innovation"
            >
              Discover the Innovation Lab
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-kodex-border bg-[#11151B]">
            <Innovation3D />
            <p className="absolute inset-x-0 bottom-8 z-10 text-center text-[10px] font-medium uppercase tracking-[0.3em] text-slate-500">
              New dimensions are taking shape
            </p>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="about-heading"
        className="bg-[#090B10] px-6 py-24 text-kodex-text sm:px-10 sm:py-32 lg:px-16"
        id="about"
      >
        <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.32em] text-kodex-muted sm:text-xs">
              A little about us
            </p>
            <h2
              className="text-4xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-5xl md:text-6xl"
              id="about-heading"
            >
              Technology, on your terms.
            </h2>
          </div>
          <div className="max-w-2xl lg:justify-self-end">
            <p className="text-lg leading-8 text-slate-300/70 sm:text-xl sm:leading-9">
              KODEX is an independent technology partner helping ambitious
              organizations turn complex challenges into lasting progress.
              We build with care, work in close partnership, and believe the
              most powerful technology is technology you can understand and
              control.
            </p>
            <a
              className="mt-8 inline-flex items-center gap-3 text-sm font-medium text-kodex-text transition-colors hover:text-slate-300"
              href="/about"
            >
              More about KODEX
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="work-heading"
        className="work-section px-6 py-24 text-kodex-text sm:px-10 sm:py-32 lg:px-16"
        id="work"
      >
        <div className="mx-auto w-full max-w-7xl">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.32em] text-kodex-muted">
            Selected projects
          </p>
          <h2
            className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-5xl md:text-6xl"
            id="work-heading"
          >
            Our Work
          </h2>
          <p className="mt-7 max-w-2xl text-base leading-7 text-slate-300/70 sm:text-lg sm:leading-8">
            A selection of digital experiences and systems designed to move
            businesses forward.
          </p>

          <div className="mt-14 grid gap-6 lg:mt-16 lg:grid-cols-2 lg:gap-8">
            {projects.map((project, index) => (
              <article
                className="group rounded-3xl border border-kodex-border bg-gradient-to-b from-white/[0.035] to-white/[0.01] p-3 transition-colors hover:border-white/20 sm:p-4"
                key={project.title}
              >
                <div
                  aria-label={`${project.title} project preview placeholder`}
                  className="relative flex aspect-[16/10] items-center justify-center overflow-hidden rounded-2xl border border-white/[0.08] bg-[#050609]"
                  role="img"
                >
                  {project.artwork === "arc" ? (
                    <>
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(148,163,184,0.12),transparent_58%)]" />
                      <div className="relative flex aspect-square w-[42%] items-center justify-center rounded-full border border-slate-200/20 shadow-[0_0_70px_rgba(148,163,184,0.1)] transition-transform duration-700 group-hover:scale-105">
                        <div className="aspect-square w-[76%] rounded-full border border-slate-100/40" />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(148,163,184,0.1),transparent_55%)]" />
                      <div className="relative w-[68%] rounded-xl border border-kodex-border bg-[#0A0C11]/90 p-4 shadow-2xl sm:p-6">
                        <div className="mb-6 flex items-center justify-between border-b border-white/[0.08] pb-4">
                          <div className="h-2 w-20 rounded-full bg-white/20" />
                          <div className="size-2 rounded-full bg-slate-300/50" />
                        </div>
                        <div className="grid grid-cols-3 gap-3">
                          <div className="h-14 rounded-lg border border-white/[0.07] bg-white/[0.025]" />
                          <div className="h-14 rounded-lg border border-white/[0.07] bg-white/[0.025]" />
                          <div className="h-14 rounded-lg border border-white/[0.07] bg-white/[0.025]" />
                        </div>
                        <div className="mt-4 flex h-16 items-end gap-2 rounded-lg border border-white/[0.07] bg-white/[0.025] px-4 pt-3">
                          <div className="h-1/3 flex-1 rounded-t-sm bg-slate-200/20" />
                          <div className="h-2/3 flex-1 rounded-t-sm bg-slate-200/30" />
                          <div className="h-1/2 flex-1 rounded-t-sm bg-slate-200/20" />
                          <div className="h-full flex-1 rounded-t-sm bg-slate-200/40" />
                          <div className="h-3/4 flex-1 rounded-t-sm bg-slate-200/25" />
                        </div>
                      </div>
                    </>
                  )}
                  <span className="absolute left-5 top-5 text-[10px] font-medium uppercase tracking-[0.24em] text-slate-500">
                    Project {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="px-3 pb-4 pt-6 sm:px-4 sm:pb-5">
                  <h3 className="text-2xl font-semibold tracking-[-0.035em] text-kodex-text sm:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300/65 sm:text-base sm:leading-7">
                    {project.description}
                  </p>
                  <ul
                    aria-label="Technologies used"
                    className="mt-6 flex flex-wrap gap-2"
                  >
                    {project.technologies.map((technology) => (
                      <li
                        className="rounded-full border border-kodex-border bg-white/[0.025] px-3 py-1.5 text-xs text-slate-300/80"
                        key={technology}
                      >
                        {technology}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="contact-heading"
        className="contact-section px-6 py-24 text-kodex-text sm:px-10 sm:py-32 lg:px-16"
        id="contact"
      >
        <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="flex flex-col items-start">
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.32em] text-kodex-muted">
              Let&apos;s work together
            </p>
            <h2
              className="max-w-2xl text-4xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-5xl md:text-6xl"
              id="contact-heading"
            >
              Start a Project
            </h2>
            <p className="mt-7 max-w-lg text-base leading-7 text-slate-300/70 sm:text-lg sm:leading-8">
              Tell us about your idea. We&apos;ll get back to you within 24
              hours.
            </p>
          </div>

          <div>
            <form className="rounded-3xl border border-white/[0.09] bg-gradient-to-br from-white/[0.045] to-white/[0.015] p-6 sm:p-9 lg:p-10">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label
                    className="text-sm font-medium text-slate-200"
                    htmlFor="homepage-contact-name"
                  >
                    Name
                  </label>
                  <input
                    autoComplete="name"
                    className="w-full rounded-xl border border-kodex-border bg-black/30 px-4 py-3.5 text-sm text-kodex-text outline-none transition placeholder:text-slate-600 focus:border-white/30 focus:ring-2 focus:ring-white/10"
                    id="homepage-contact-name"
                    name="name"
                    placeholder="Your name"
                    required
                    type="text"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    className="text-sm font-medium text-slate-200"
                    htmlFor="homepage-contact-email"
                  >
                    Email
                  </label>
                  <input
                    autoComplete="email"
                    className="w-full rounded-xl border border-kodex-border bg-black/30 px-4 py-3.5 text-sm text-kodex-text outline-none transition placeholder:text-slate-600 focus:border-white/30 focus:ring-2 focus:ring-white/10"
                    id="homepage-contact-email"
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
                  htmlFor="homepage-contact-message"
                >
                  Message
                </label>
                <textarea
                  className="min-h-40 w-full resize-y rounded-xl border border-kodex-border bg-black/30 px-4 py-3.5 text-sm text-kodex-text outline-none transition placeholder:text-slate-600 focus:border-white/30 focus:ring-2 focus:ring-white/10"
                  id="homepage-contact-message"
                  name="message"
                  placeholder="Tell us a little about your project..."
                  required
                  rows={5}
                />
              </div>

              <button
                className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-kodex-text px-7 py-3.5 text-sm font-semibold text-kodex-bg transition hover:-translate-y-0.5 hover:bg-slate-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto"
                type="button"
              >
                Send Message
              </button>
            </form>

            <div className="mt-8 border-t border-white/[0.09] pt-6">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
                Prefer email?
              </p>
              <a
                className="mt-3 inline-block text-base text-slate-200 transition-colors hover:text-kodex-text sm:text-lg"
                href="mailto:mufashajustin@gmail.com"
              >
                mufashajustin@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
