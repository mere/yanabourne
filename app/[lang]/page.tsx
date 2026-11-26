import { homeMetadata } from '@/lib/site-metadata'
import Hero from '@/components/yana/hero-home'
import Features from '@/components/yana/features-home'
import Contact from '@/components/yana/contact'
import Locations from '@/components/yana/locations'
import Portfolio from '@/components/yana/portfolio'
import Header from '@/components/ui/header'
import Footer from '@/components/ui/footer'
import Certificates from '@/components/yana/certificates'

export const metadata = homeMetadata

export type Lang = 'ru' | 'en';

export function generateStaticParams() {
  return [{ lang: 'en' as const }, { lang: 'ru' as const }];
}

export default async function Home({ params }: { params: Promise<{ lang: Lang }> }) {
  const lang = (await params).lang;
  
  return (
    <>
      <Header lang={lang} />
      <Hero lang={lang} />
      <Features lang={lang} />
      <Locations lang={lang} />
      <Certificates lang={lang} />
      <Portfolio lang={lang} />
      <Contact lang={lang} />
      <Footer lang={lang} />
    </>
  )
}