import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LocaleDocument from "../components/LocaleDocument";
import { isLocale } from "../lib/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const titles = {
    en: "KODEX — Technology & Innovation",
    fr: "KODEX — Technologie & innovation",
    rw: "KODEX — Ikoranabuhanga n’udushya",
  };
  const descriptions = {
    en: "Digital products, software, and intelligent systems for ambitious businesses.",
    fr: "Des produits numériques, des logiciels et des systèmes intelligents pour les entreprises ambitieuses.",
    rw: "Ibikoresho bya mudasobwa, porogaramu na sisitemu z’ubwenge bifasha ubucuruzi gutera imbere.",
  };
  return {
    title: titles[locale],
    description: descriptions[locale],
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return <LocaleDocument locale={locale}>{children}</LocaleDocument>;
}
