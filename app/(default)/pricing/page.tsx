export const metadata = {
  title: 'Pricing - Tidy',
  description: 'Page description',
}

import Hero from '@/components/_local/hero-pricing'
import CtaPricing from '@/components/_local/cta-pricing'
import Features from '@/components/_local/features-pricing'
import FeaturesTable from '@/components/_local/features-table'
import Faqs from '@/components/_local/faqs'
import Cta from '@/components/_local/cta-dark'

export default function Pricing() {
  return (
    <>
      <Hero />
      <CtaPricing />
      <Features />
      <FeaturesTable />
      <Faqs />
      <Cta />
    </>
  )
}
