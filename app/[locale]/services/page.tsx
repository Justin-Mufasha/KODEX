import ServicesPage from "../../services/page";
import { notFound } from "next/navigation";
import { isLocale } from "../../lib/i18n";

export default async function LocalizedServices({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <ServicesPage locale={locale} />;
}
