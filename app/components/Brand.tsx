export default function Brand({ href = "/" }: { href?: string }) {
  return (
    <a
      aria-label="KODEX home"
      className="group inline-flex items-center gap-3 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
      href={href}
    >
      <img
        alt=""
        aria-hidden="true"
        className="kodex-logo-bob size-10 shrink-0 rounded-lg object-contain shadow-[0_0_32px_rgba(255,255,255,0.12)]"
        src="/kodex-logo.png"
      />
      <span className="text-xl font-black tracking-[-0.035em]">KODEX</span>
    </a>
  );
}
