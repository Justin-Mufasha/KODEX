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

export default function WorkPage() {
  return (
    <main className="min-h-[calc(100svh-5rem)] bg-[#0B0D12] px-6 py-20 text-white sm:px-10 sm:py-24 lg:px-16">
      <section className="mx-auto w-full max-w-7xl">
        <p className="mb-5 text-xs font-medium uppercase tracking-[0.32em] text-slate-400">
          Selected projects
        </p>
        <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-6xl md:text-7xl">
          Our Work
        </h1>
        <p className="mt-7 max-w-2xl text-base leading-7 text-slate-300/70 sm:text-lg sm:leading-8">
          A selection of digital experiences and systems designed to move
          businesses forward.
        </p>

        <div className="mt-14 grid gap-6 lg:mt-16 lg:grid-cols-2 lg:gap-8">
          {projects.map((project, index) => (
            <article
              className="group rounded-3xl border border-white/[0.12] bg-gradient-to-br from-white/[0.045] to-white/[0.01] p-3 transition duration-300 ease-out hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_20px_60px_rgba(0,0,0,0.28)] motion-reduce:transition-none sm:p-4"
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
                    <div className="relative w-[68%] rounded-xl border border-white/10 bg-[#0A0C11]/90 p-4 shadow-2xl sm:p-6">
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
                <h2 className="text-2xl font-semibold tracking-[-0.035em] text-white sm:text-3xl">
                  {project.title}
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300/65 sm:text-base sm:leading-7">
                  {project.description}
                </p>
                <ul
                  aria-label="Technologies used"
                  className="mt-6 flex flex-wrap gap-2"
                >
                  {project.technologies.map((technology) => (
                    <li
                      className="rounded-full border border-white/10 bg-white/[0.025] px-3 py-1.5 text-xs text-slate-300/80"
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
      </section>
    </main>
  );
}
