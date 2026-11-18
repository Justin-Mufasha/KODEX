import InnovationPage from "../../innovation/page";
import { notFound } from "next/navigation";
import { isLocale } from "../../lib/i18n";

export default async function LocalizedInnovation({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <InnovationPage locale={locale} />;
}
