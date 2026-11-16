const links = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Our Work", href: "/#work" },
  { label: "Innovation Lab", href: "/#innovation" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  return (
    <header className="relative z-20 border-b border-white/[0.07] bg-[#080A0F]/80 backdrop-blur-xl">
      <div className="mx-auto flex min-h-20 max-w-7xl flex-wrap items-center justify-between gap-x-8 gap-y-3 px-6 py-3 sm:px-10 lg:px-16">
        <a
          aria-label="KODEX home"
          className="flex shrink-0 items-center gap-3"
          href="/"
        >
          <span
            aria-hidden="true"
            className="flex size-10 items-center justify-center rounded-full border border-white/20 bg-black text-base font-bold tracking-tight text-white shadow-[0_0_20px_rgba(255,255,255,0.08)]"
          >
            K
          </span>
          <span className="text-sm font-bold tracking-[0.2em] text-white">
            KODEX
          </span>
        </a>

        <nav
          aria-label="Main navigation"
          className="order-3 w-full overflow-x-auto pb-1 sm:order-none sm:w-auto sm:pb-0"
        >
          <ul className="flex min-w-max items-center gap-6 sm:gap-7 lg:gap-9">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  className={`text-xs transition-colors hover:text-white sm:text-[13px] ${
                    link.label === "Contact"
                      ? "rounded-full border border-white/15 px-4 py-2 text-slate-200 hover:border-white/35"
                      : "text-slate-400"
                  }`}
                  href={link.href}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
