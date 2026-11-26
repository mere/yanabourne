import LocaleShell from "@/components/layouts/locale-shell";
import LangAttribute from "@/components/layouts/lang-attribute";

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