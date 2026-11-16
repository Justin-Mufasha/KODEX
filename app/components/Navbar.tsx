const links = [
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/#work" },
  { label: "Innovation", href: "/#innovation" },
  { label: "About", href: "/#about" },
];

export default function Navbar() {
  return (
    <header className="relative z-20 border-b border-white/10 bg-[#080A0F]">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 py-5 sm:min-h-20 sm:flex-row sm:justify-between sm:gap-8 sm:py-0 sm:px-10 lg:px-16">
        <a
          aria-label="KODEX home"
          className="shrink-0 text-sm font-semibold tracking-[0.2em] text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          href="/"
        >
          KODEX
        </a>

        <nav
          aria-label="Main navigation"
          className="w-full overflow-x-auto sm:w-auto"
        >
          <ul className="flex min-w-max items-center justify-center gap-5 sm:gap-8">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  className="text-sm text-[#A1A1AA] transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                  href={link.href}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                className="text-sm font-medium text-white transition-colors hover:text-[#A1A1AA] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                href="/#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
