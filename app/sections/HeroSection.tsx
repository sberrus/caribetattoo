import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
    return (
        <div className={`relative overflow-hidden bg-black w-full h-screen`} >
            {/* Background video */}
            <div className='absolute h-screen w-screen'>
                <video autoPlay loop muted className='relative w-full md:bottom-80'>
                    <source src='/assets/video/hero_section_video.mp4' />
                </video>
            </div>
            {/* copy and art container */}
            <div className='z-10 h-full relative flex justify-center items-center'>
                {/* content wrapper */}
                {/* art container */}
                <div className='relative bottom-10 w-5/6 md:w-3/6 aspect-square'>
                    <Image alt='caribe tattoo logo' src={'/assets/decor/logo-background-transparent.png'} fill className='h-full w-full' />
                </div>
            </div>
        </div>
    )
}

export default HeroSection

// controlar por tamaño de pantalla, el asset a llamar para mejorar la velocidad de carga