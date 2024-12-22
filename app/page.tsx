import React from 'react'
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import FooterSection from './sections/FooterSection'
import ArtGrid from './sections/ArtGrid'
import TestimonialsSection from './sections/TestimonialsSection'
import Image from 'next/image'

const Index = () => {
  return (
    <main>
      <HeroSection />
      <div className='relative border overflow-hidden'>
        <AboutSection />
        <ArtGrid />
        <div className='absolute -top-36 -left-56' style={{ height: 850, width: 850, opacity: "10%" }}>
          <Image alt='Caribe tattoo barco fondo' src={"/assets/decor/pirate-boat.png"} fill />
        </div>
        <div className='absolute -bottom-36 -right-56 -z-10' style={{ height: 850, width: 850, opacity: "10%" }}>
          <Image alt='Caribe tattoo barco fondo' src={"/assets/decor/pirate-boat.png"} fill />
        </div>
      </div>
      <TestimonialsSection />
      {/*  */}
      <FooterSection />
    </main>
  )
}

export default Index