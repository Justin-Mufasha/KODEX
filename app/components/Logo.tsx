"use client";

export default function Logo() {
  return (
    <a
      aria-label="KODEX home"
      className="fixed bottom-6 left-6 z-30 size-14 rounded-full shadow-[0_0_24px_rgba(190,205,225,0.12)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
      href="#home"
    >
      <img
        alt=""
        aria-hidden="true"
        className="kodex-logo-bob size-full rounded-full object-cover"
        src="/kodex-logo.png"
      />
    </a>
  );
}
