import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
    return (
        <div className={`relative overflow-hidden bg-white w-full h-screen`} >
            {/* Background video */}
            <div className='absolute'>
                <video autoPlay loop muted>
                    <source src='/assets/video/hero_section_video.mp4' />
                </video>
            </div>
            {/* copy and art container */}
            <div className='z-10 h-full relative flex justify-center items-center'>
                {/* content wrapper */}
                <div className='mt-20'>
                    {/* art container */}
                    <div className='relative'>
                        <Image className='drop-shadow-sm' alt='caribe tattoo logo' src={'/assets/decor/logo-background-transparent.png'} width={250} height={250} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection