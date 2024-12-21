import Image from 'next/image'
import React from 'react'
import gfont from '../fonts/custom1'

const HeroSection = () => {
    return (
        <div className={`relative overflow-hidden bg-black w-full max-h-screen`} >
            {/* Background video */}
            <div className='relative w-screen brightness-75'>
                <video autoPlay loop muted className='relative w-full md:bottom-80 xl:bottom-900'>
                    <source src='/assets/video/hero_section_video_lg.mp4' />
                </video>
            </div>
            {/* copy and art container */}
            <div className='z-10 h-full w-full absolute bottom-0 flex flex-col items-center justify-center'>
                {/* content wrapper */}
                {/* art container */}
                <div className='relative bottom-10 w-5/6 md:w-3/6 aspect-square xl:w-1/3'>
                    <Image alt='caribe tattoo logo' src={'/assets/decor/logo-background-transparent.png'} fill />
                </div>
                <a href='#' className={`rounded-sm px-5 py-2 bg-yellow-200 text-yellow-900 ${gfont.className}`}>Animate a conocernos</a>
            </div>
        </div>
    )
}

export default HeroSection


//  controlar por tamaño de pantalla, el asset a llamar para mejorar la velocidad de carga
//  obtener asset para pantallas grandes y manejar posición
// Añadir boton debajo del logo