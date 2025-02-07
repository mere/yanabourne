export const metadata = {
  title: 'Wall of Love - Tidy',
  description: 'Page description',
}

import Hero from '@/components/_local/hero-wol'
import Clients from '@/components/_local/clients'
import Customers from '@/components/_local/customers'
import Testimonials from '@/components/_local/testimonials'
import CtaDark from '@/components/_local/cta-dark'

export default function WallOfLove() {
  return (
    <>
      <Hero />
      <Clients />
      <Customers />
      <Testimonials />
      <CtaDark />
    </>
  )
}
