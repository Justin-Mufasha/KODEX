import Ring3D from "./components/Ring3D";

const services = [
  {
    number: "01",
    title: "Intelligent systems",
    description: "AI and automation built around your business.",
  },
  {
    number: "02",
    title: "Software engineering",
    description: "Digital products and platforms, made to scale.",
  },
  {
    number: "03",
    title: "Product design",
    description: "Thoughtful experiences that make complexity feel simple.",
  },
];

const projects = [
  {
    title: "The Eternal Arc",
    category: "Digital experience",
  },
  {
    title: "Business Stock Tracker",
    category: "Business software",
  },
];

const sectionLabel =
  "text-xs font-medium uppercase tracking-[0.16em] text-[#A1A1AA]";
const headingStyle =
  "font-semibold leading-[1.05] tracking-[-0.035em] text-white";

export default function Home() {
  return (
    <main className="bg-[#080A0F] text-white">
      <section
        aria-labelledby="home-heading"
        className="flex min-h-[calc(100svh-5rem)] flex-col items-center justify-center overflow-hidden px-6 py-32 text-center sm:px-10 sm:py-48 lg:px-16"
        id="home"
      >
        <div className="mx-auto w-full max-w-5xl">
          <p className={sectionLabel}>Independent technology partner</p>
          <h1
            className={`${headingStyle} mx-auto mt-7 max-w-5xl text-5xl sm:text-7xl lg:text-8xl`}
            id="home-heading"
          >
            Technology that moves business forward.
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-[#A1A1AA] sm:text-lg sm:leading-8">
            Digital products, software, and intelligent systems for ambitious
            businesses.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-[#080A0F] transition-colors hover:bg-[#E4E4E7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              href="/work"
            >
              Explore our work
            </a>
            <a
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/25 px-6 text-sm font-medium text-white transition-colors hover:border-white/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              href="/contact"
            >
              Start a project
            </a>
          </div>
        </div>
        <div className="mt-5 w-full max-w-[19rem] sm:max-w-[22rem]">
          <Ring3D />
        </div>
      </section>

      <section
        aria-labelledby="services-heading"
        className="border-t border-white/10 px-6 py-32 sm:px-10 sm:py-48 lg:px-16"
        id="services"
      >
        <div className="mx-auto max-w-7xl">
          <p className={sectionLabel}>What we do</p>
          <h2
            className={`${headingStyle} mt-5 max-w-3xl text-4xl sm:text-5xl lg:text-6xl`}
            id="services-heading"
          >
            Built for what&apos;s next.
          </h2>

          <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-3 lg:gap-x-12">
            {services.map((service) => (
              <article
                className="border-t border-white/15 pt-6"
                key={service.number}
              >
                <p className="text-sm tracking-[0.16em] text-[#A1A1AA]">
                  {service.number}
                </p>
                <h3 className="mt-6 text-xl font-medium tracking-tight text-white sm:text-2xl">
                  {service.title}
                </h3>
                <p className="mt-3 max-w-sm leading-7 text-[#A1A1AA]">
                  {service.description}
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
          <p className={sectionLabel}>Selected work</p>
          <h2
            className={`${headingStyle} mt-5 text-4xl sm:text-5xl lg:text-6xl`}
            id="work-heading"
          >
            Made to matter.
          </h2>

          <div className="mt-12 border-t border-white/15">
            {projects.map((project, index) => (
              <article
                className="flex flex-col gap-3 border-b border-white/15 py-8 sm:flex-row sm:items-baseline sm:justify-between sm:py-10"
                key={project.title}
              >
                <h3 className="text-2xl font-medium tracking-tight text-white sm:text-3xl">
                  {project.title}
                </h3>
                <p className="text-sm text-[#A1A1AA]">
                  0{index + 1} <span aria-hidden="true">/</span>{" "}
                  {project.category}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
