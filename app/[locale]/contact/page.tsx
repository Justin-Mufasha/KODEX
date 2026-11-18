import ContactPage from "../../contact/page";
import { notFound } from "next/navigation";
import { isLocale } from "../../lib/i18n";

export default async function LocalizedContact({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <ContactPage locale={locale} />;
}
