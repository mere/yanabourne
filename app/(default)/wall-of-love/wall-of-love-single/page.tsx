export const metadata = {
  title: 'Wall of Love (Single Post) - Tidy',
  description: 'Page description',
}

import Hero from './hero'
import Stats from '@/components/_local/stats'
import Content from './content'
import RelatedStories from '@/components/_local/related-stories'

export default function WallOfLoveSingle() {
  return (
    <>
      <Hero />
      <Stats />
      <Content />
      <RelatedStories />
    </>
  )
}
