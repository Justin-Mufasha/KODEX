import WorkPage from "../../work/page";
import { notFound } from "next/navigation";
import { isLocale } from "../../lib/i18n";

export default async function LocalizedWork({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <WorkPage locale={locale} />;
}
