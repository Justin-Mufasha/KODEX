"use client";

import { useEffect, useState } from "react";
import type { Locale } from "../lib/i18n";

const timeFormatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Africa/Kigali",
  hour: "2-digit",
  minute: "2-digit",
  hourCycle: "h23",
});

export default function KigaliClock({ locale }: { locale: Locale }) {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const updateTime = () => setNow(new Date());

    updateTime();
    const intervalId = window.setInterval(updateTime, 30_000);

    return () => window.clearInterval(intervalId);
  }, []);

  const timeParts = now ? timeFormatter.formatToParts(now) : [];
  const hour = timeParts.find((part) => part.type === "hour")?.value ?? "--";
  const minute = timeParts.find((part) => part.type === "minute")?.value ?? "--";

  return (
    <div
      className="absolute right-4 top-5 z-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-kodex-bg/70 px-3 py-2.5 text-[10px] font-medium uppercase tracking-[0.16em] text-kodex-muted backdrop-blur-md sm:right-10 sm:top-7 sm:gap-3 sm:px-4"
    >
      <div
        aria-label="Local time in Kigali, Rwanda"
        className="inline-flex items-center gap-2 sm:gap-3"
      >
        <span>KGL</span>
        <span aria-hidden="true" className="h-3 w-px bg-white/20" />
        <time
          className="inline-flex min-w-[3.1rem] items-center justify-center font-mono tabular-nums text-white"
          dateTime={now?.toISOString()}
        >
          <span>{hour}</span>
          <span aria-hidden="true">:</span>
          <span>{minute}</span>
        </time>
        <span aria-hidden="true" className="relative flex size-1.5">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-white/60 motion-reduce:animate-none" />
          <span className="relative inline-flex size-1.5 rounded-full bg-white" />
        </span>
      </div>
      <span aria-hidden="true" className="text-white/35">
        ·
      </span>
      <nav aria-label="Choose language" className="inline-flex items-center gap-1">
        {(["en", "fr", "rw"] as const).map((option, index) => (
          <span className="inline-flex items-center gap-1" key={option}>
            {index > 0 && (
              <span aria-hidden="true" className="text-white/35">
                ·
              </span>
            )}
            <a
              aria-current={locale === option ? "page" : undefined}
              className={`rounded-sm px-0.5 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                locale === option ? "text-white" : ""
              }`}
              href={option === "en" ? "/" : `/${option}`}
            >
              {option.toUpperCase()}
            </a>
          </span>
        ))}
      </nav>
    </div>
  );
}
