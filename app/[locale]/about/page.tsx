import AboutPage from "../../about/page";
import { notFound } from "next/navigation";
import { isLocale } from "../../lib/i18n";

export default async function LocalizedAbout({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <AboutPage locale={locale} />;
}
