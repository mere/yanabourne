import type { Metadata } from "next";
import LocaleShell from "@/components/layouts/locale-shell";
import LangAttribute from "@/components/layouts/lang-attribute";

export const metadata: Metadata = {
  title: "Yana Bourne",
  description: "dental therapist, general dentist, and endodontist.",
};

const locales = ["en", "ru"] as const;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <>
      <LangAttribute lang={lang} />
      <LocaleShell>{children}</LocaleShell>
    </>
  );
}