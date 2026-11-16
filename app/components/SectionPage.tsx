type SectionPageProps = {
  title: string;
  description: string;
};

export default function SectionPage({
  title,
  description,
}: SectionPageProps) {
  return (
    <main className="min-h-[calc(100svh-5rem)] bg-[#080A0F] px-6 py-24 text-white sm:px-10 lg:px-16">
      <section className="mx-auto flex w-full max-w-7xl flex-col justify-center">
        <p className="mb-5 text-xs font-medium uppercase tracking-[0.32em] text-slate-400">
          KODEX — TECHNOLOGY &amp; INNOVATION
        </p>
        <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-6xl md:text-7xl">
          {title}
        </h1>
        <p className="mt-7 max-w-2xl text-base leading-7 text-slate-300/70 sm:text-lg sm:leading-8">
          {description}
        </p>
        <p className="mt-5 text-sm text-slate-500">
          This section is currently under construction. Please check back soon.
        </p>
      </section>
    </main>
  );
}
