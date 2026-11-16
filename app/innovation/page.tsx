const experiments = [
  "AI Agent Prototypes",
  "3D Web Experiences",
  "IoT Smart Systems",
];

export default function InnovationPage() {
  return (
    <main className="min-h-[calc(100svh-5rem)] bg-kodex-bg px-6 py-20 text-kodex-text sm:px-10 sm:py-24 lg:px-16">
      <section className="mx-auto w-full max-w-7xl">
        <p className="mb-5 text-xs font-medium uppercase tracking-[0.32em] text-kodex-muted">
          KODEX — TECHNOLOGY &amp; INNOVATION
        </p>
        <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-6xl md:text-7xl">
          Innovation Lab
        </h1>
        <p className="mt-7 max-w-2xl text-base leading-7 text-kodex-muted sm:text-lg sm:leading-8">
          Experiments, prototypes, and future technologies we are exploring at
          KODEX.
        </p>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {experiments.map((experiment, index) => (
            <li
              className="group rounded-2xl border border-white/[0.09] bg-gradient-to-br from-white/[0.045] to-white/[0.01] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:from-white/[0.07] motion-reduce:transition-none sm:p-7"
              key={experiment}
            >
              <div
                aria-hidden="true"
                className="mb-10 flex aspect-[1.7/1] items-center justify-center overflow-hidden rounded-xl border border-white/[0.08] bg-[#050609]"
              >
                {index === 0 ? (
                  <div className="flex items-center gap-3">
                    <span className="size-2 rounded-full bg-white/30" />
                    <span className="h-px w-12 bg-white/20" />
                    <span className="size-3 rounded-full border border-white/40" />
                    <span className="h-px w-12 bg-white/20" />
                    <span className="size-2 rounded-full bg-white/50" />
                  </div>
                ) : index === 1 ? (
                  <div className="relative flex aspect-square w-28 items-center justify-center rounded-full border border-white/20 transition-transform duration-700 group-hover:rotate-6">
                    <div className="aspect-square w-3/4 rounded-full border border-white/35" />
                  </div>
                ) : (
                  <div className="grid grid-cols-3 gap-2">
                    {Array.from({ length: 9 }, (_, cell) => (
                      <span
                        className={`size-3 rounded-sm border border-white/20 ${
                          cell === 4 ? "bg-white/35" : "bg-white/[0.04]"
                        }`}
                        key={cell}
                      />
                    ))}
                  </div>
                )}
              </div>
              <p className="text-xs font-medium tabular-nums tracking-[0.2em] text-kodex-muted">
                EXPERIMENT {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-4 text-xl font-medium leading-snug tracking-[-0.02em] sm:text-2xl">
                {experiment}
              </h2>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
