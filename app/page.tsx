import React from 'react'
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import FooterSection from './sections/FooterSection'
import ArtGrid from './sections/ArtGrid'

const Index = () => {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ArtGrid />
      {/*  */}
      <FooterSection />
    </main>
  )
}

export default Index