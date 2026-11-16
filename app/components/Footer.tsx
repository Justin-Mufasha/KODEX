export default function Footer() {
  return (
    <footer className="border-t border-kodex-border bg-kodex-bg px-6 py-6 text-sm sm:px-10 lg:px-16">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-3 text-center text-kodex-muted sm:flex-row sm:text-left">
        <p>© 2026 KODEX. All rights reserved.</p>
        <a
          className="text-kodex-muted transition-colors hover:text-kodex-text"
          href="mailto:mufashajustin@gmail.com"
        >
          mufashajustin@gmail.com
        </a>
      </div>
    </footer>
  );
}
