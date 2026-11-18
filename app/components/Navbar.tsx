"use client";

import { usePathname } from "next/navigation";
import Brand from "./Brand";
import { getLocaleFromPath, getMessages } from "../lib/i18n";

export default function Navbar() {
  const locale = getLocaleFromPath(usePathname());
  const copy = getMessages(locale).nav;
  const prefix = locale === "en" ? "" : `/${locale}`;
  const links = [
    { label: copy.services, href: `${prefix}/services` },
    { label: copy.work, href: `${prefix}/work` },
    { label: copy.innovation, href: `${prefix}/innovation` },
    { label: copy.about, href: `${prefix}/about` },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-kodex-bg">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 py-5 sm:min-h-20 sm:flex-row sm:justify-between sm:gap-8 sm:py-0 sm:px-10 lg:px-16">
        <Brand href={locale === "en" ? "/" : `/${locale}`} />

        <nav
          aria-label={copy.aria}
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
                href={`${prefix}/contact`}
              >
                {copy.contact}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
