export const metadata = {
  title: 'Yana Bourne',
  description: 'dental therapist, general dentist, and endodontist.',
}

import Hero from '@/components/yana/hero-home'
import Features from '@/components/yana/features-home'
import Features02 from '@/components/yana/features-home-02'
import Certificates from '@/components/yana/certificates'
import Contact from '@/components/yana/contact'
import Locations from '@/components/yana/locations'
import Portfolio from '@/components/yana/portfolio'
export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Features02 />
      <Locations />
      {/* <Certificates /> */}
      <Portfolio />
      <Contact />
     
    </>
  )
}