export default function Footer() {
  return (
    <footer className="border-t border-white/[0.07] bg-[#080A0F] px-6 py-6 text-sm sm:px-10 lg:px-16">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-3 text-center text-slate-500 sm:flex-row sm:text-left">
        <p>© 2026 KODEX. All rights reserved.</p>
        <a
          className="text-slate-400 transition-colors hover:text-white"
          href="mailto:mufashajustin@gmail.com"
        >
          mufashajustin@gmail.com
        </a>
      </div>
    </footer>
  );
}
