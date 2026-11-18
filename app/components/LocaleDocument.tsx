"use client";

import { useEffect, type ReactNode } from "react";
import type { Locale } from "../lib/i18n";

export default function LocaleDocument({
  children,
  locale,
}: {
  children: ReactNode;
  locale: Locale;
}) {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return children;
}
