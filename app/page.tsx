import Ring3D from "./components/Ring3D";

const services = [
  {
    number: "01",
    title: "Intelligent systems",
    description:
      "Practical AI and automation, designed around the way your business works.",
  },
  {
    number: "02",
    title: "Software engineering",
    description:
      "Thoughtful digital products and reliable platforms, made to scale.",
  },
  {
    number: "03",
    title: "Product design",
    description:
      "Clear, considered experiences that make complex ideas feel simple.",
  },
];

const projects = [
  {
    title: "The Eternal Arc",
    description: "An immersive 3D experience for a distinctive brand identity.",
    category: "Digital experience",
  },
  {
    title: "Business Stock Tracker",
    description: "An inventory and sales platform built for local businesses.",
    category: "Business software",
  },
];

const sectionLabel =
  "text-xs font-medium uppercase tracking-[0.16em] text-[#A1A1AA]";
const headingStyle =
  "font-semibold leading-[1.05] tracking-[-0.035em] text-white";
const bodyStyle = "text-base leading-7 text-[#A1A1AA] sm:text-lg sm:leading-8";

export default function Home() {
  return (
    <main className="bg-[#080A0F] text-white">
      <section
        aria-labelledby="home-heading"
        className="flex min-h-[calc(100svh-5rem)] flex-col items-center justify-center overflow-hidden px-6 pb-12 pt-20 text-center sm:px-10 sm:pt-24 lg:px-16"
        id="home"
      >
        <div className="mx-auto w-full max-w-5xl">
          <p className={sectionLabel}>Independent technology partner</p>
          <h1
            className={`${headingStyle} mx-auto mt-7 max-w-5xl text-5xl sm:text-6xl lg:text-7xl`}
            id="home-heading"
          >
            Technology that moves business forward.
          </h1>
          <p className={`${bodyStyle} mx-auto mt-7 max-w-2xl`}>
            We build digital products, software, and intelligent systems for
            businesses ready to move ahead.
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
        className="border-t border-white/10 px-6 py-24 text-center sm:px-10 sm:py-32 lg:px-16"
        id="services"
      >
        <div className="mx-auto max-w-7xl">
          <p className={sectionLabel}>What we do</p>
          <h2
            className={`${headingStyle} mx-auto mt-5 max-w-3xl text-4xl sm:text-5xl lg:text-6xl`}
            id="services-heading"
          >
            Built for what&apos;s next.
          </h2>
          <p className={`${bodyStyle} mx-auto mt-6 max-w-2xl`}>
            Design and engineering, brought together to solve real problems and
            create lasting value.
          </p>

          <div className="mt-16 grid grid-cols-1 gap-10 sm:gap-x-8 lg:grid-cols-3 lg:gap-12">
            {services.map((service) => (
              <article
                className="border-t border-white/15 px-3 pt-7 text-left"
                key={service.number}
              >
                <p className="text-sm tracking-[0.16em] text-[#A1A1AA]">
                  {service.number}
                </p>
                <h3 className="mt-6 text-xl font-medium tracking-tight text-white sm:text-2xl">
                  {service.title}
                </h3>
                <p className="mx-auto mt-3 max-w-sm leading-7 text-[#A1A1AA]">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="work-heading"
        className="border-t border-white/10 px-6 py-24 text-center sm:px-10 sm:py-32 lg:px-16"
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
          <p className={`${bodyStyle} mx-auto mt-6 max-w-2xl`}>
            A selection of work shaped around real people and ambitious ideas.
          </p>

          <div className="mt-12 border-t border-white/15">
            {projects.map((project, index) => (
              <article
                className="border-b border-white/15 px-4 py-8 sm:py-10"
                key={project.title}
              >
                <p className="text-sm tracking-[0.16em] text-[#A1A1AA]">
                  PROJECT 0{index + 1} <span aria-hidden="true">·</span>{" "}
                  {project.category}
                </p>
                <h3 className="mt-4 text-2xl font-medium tracking-tight text-white sm:text-3xl">
                  {project.title}
                </h3>
                <p className="mx-auto mt-3 max-w-xl leading-7 text-[#A1A1AA]">
                  {project.description}
                </p>
              </article>
            ))}
          </div>
          <a
            className="mt-9 inline-flex items-center gap-3 text-sm font-medium text-white transition-colors hover:text-[#A1A1AA] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            href="/work"
          >
            View all work <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <section
        aria-labelledby="innovation-heading"
        className="border-t border-white/10 px-6 py-24 text-center sm:px-10 sm:py-32 lg:px-16"
        id="innovation"
      >
        <div className="mx-auto max-w-4xl">
          <p className={sectionLabel}>KODEX Innovation Lab</p>
          <h2
            className={`${headingStyle} mx-auto mt-5 max-w-3xl text-4xl sm:text-5xl lg:text-6xl`}
            id="innovation-heading"
          >
            Ideas, engineered into reality.
          </h2>
          <p className={`${bodyStyle} mx-auto mt-6 max-w-2xl`}>
            We explore emerging technologies and turn promising ideas into
            purposeful products.
          </p>
          <a
            className="mt-8 inline-flex items-center gap-3 text-sm font-medium text-white transition-colors hover:text-[#A1A1AA] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            href="/innovation"
          >
            Discover the Innovation Lab
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <section
        aria-labelledby="about-heading"
        className="border-t border-white/10 px-6 py-24 text-center sm:px-10 sm:py-32 lg:px-16"
        id="about"
      >
        <div className="mx-auto max-w-4xl">
          <h2
            className={`${headingStyle} mx-auto mt-5 max-w-3xl text-4xl sm:text-5xl lg:text-6xl`}
            id="about-heading"
          >
            Technology, on your terms.
          </h2>
          <p className={`${bodyStyle} mx-auto mt-6 max-w-2xl`}>
            We are an independent technology partner helping organizations
            solve complex challenges with care, clarity, and lasting progress.
          </p>
          <a
            className="mt-8 inline-flex items-center gap-3 text-sm font-medium text-white transition-colors hover:text-[#A1A1AA] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            href="/about"
          >
            More about KODEX <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <section
        aria-labelledby="contact-heading"
        className="border-t border-white/10 px-6 py-28 text-center sm:px-10 sm:py-36 lg:px-16"
        id="contact"
      >
        <div className="mx-auto max-w-4xl">
          <h2
            className={`${headingStyle} mx-auto mt-5 max-w-3xl text-4xl sm:text-5xl lg:text-6xl`}
            id="contact-heading"
          >
            Let&apos;s make it happen.
          </h2>
          <a
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-[#080A0F] transition-colors hover:bg-[#E4E4E7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            href="/contact"
          >
            Talk to our team
          </a>
        </div>
      </section>
    </main>
  );
}
