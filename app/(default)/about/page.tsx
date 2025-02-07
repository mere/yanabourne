export const metadata = {
  title: 'About - Tidy',
  description: 'Page description',
}

import Hero from '@/components/_local/hero-about'
import Stats from '@/components/_local/stats-02'
import Content from './content'
import Team from '@/components/_local/team'
import TeamMembers from '@/components/_local/team-members'
import Clients from '@/components/_local/clients-02'
import Cta from '@/components/_local/cta-02'

export default function About() {
  return (
    <>
      <Hero />
      <Stats />
      <Content />
      <Team />
      <TeamMembers />
      <Clients />
      <Cta />
    </>
  )
}
