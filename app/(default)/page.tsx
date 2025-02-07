export const metadata = {
  title: 'Home - Tidy',
  description: 'Page description',
}

import Hero from '@/components/yana/hero-home'
import FeaturesBlocks from '@/components/_local/features-blocks'
import Features from '@/components/yana/features-home'
import Features02 from '@/components/yana/features-home-02'
import Features03 from '@/components/_local/features-home-03'
import Target from '@/components/_local/target'
import PricingSection from '@/components/_local/pricing'
import Cta from '@/components/_local/cta'
import Certificates from '@/components/yana/certificates'
import Contact from '@/components/yana/contact'
import Locations from '@/components/yana/locations'
import Portfolio from '@/components/yana/portfolio'
export default function Home() {
  return (
    <>
      <Hero />
      
      {/* <FeaturesBlocks /> */}
      <Features />
      <Features02 />
      <Locations />
      <Certificates />
      <Portfolio />
      <Contact />
      {/* <Features02 />
      <Features03 />
      <Target />
      <PricingSection /> */}
      {/* <Cta /> */}
    </>
  )
}
