const services = [
  "Website development",
  "Web application development",
  "Mobile application development",
  "Custom software and business systems",
  "UI/UX design",
  "Branding and digital design",
  "AI integrations and automation",
  "Chatbots and intelligent systems",
  "APIs and database solutions",
  "Cloud and hosting solutions",
  "E-commerce",
  "IoT and smart systems",
  "Data solutions",
  "Emerging technology",
];

export default function ServicesPage() {
  return (
    <main className="min-h-[calc(100svh-5rem)] bg-[#080A0F] px-6 py-20 text-white sm:px-10 sm:py-24 lg:px-16">
      <section className="mx-auto w-full max-w-7xl">
        <p className="mb-5 text-xs font-medium uppercase tracking-[0.32em] text-slate-400">
          KODEX — TECHNOLOGY &amp; INNOVATION
        </p>
        <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-6xl md:text-7xl">
          Our Services
        </h1>
        <p className="mt-7 max-w-2xl text-base leading-7 text-slate-300/70 sm:text-lg sm:leading-8">
          We design and build digital experiences, software, and intelligent
          systems that help businesses solve problems and grow.
        </p>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {services.map((service, index) => (
            <li
              className="group rounded-2xl border border-white/[0.09] bg-gradient-to-br from-white/[0.045] to-white/[0.01] p-6 transition-colors hover:border-white/20 sm:p-7"
              key={service}
            >
              <span className="text-xs font-medium tabular-nums tracking-[0.16em] text-slate-500">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-8 text-lg font-medium leading-snug tracking-[-0.02em] text-slate-100 sm:text-xl">
                {service}
              </h2>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
