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
                <div className='text-center'>
                    <a href='#' className={`rounded-md px-5 py-2 bg-yellow-200 bg-opacity-90 text-yellow-950 ${gfont.className}`}>Animate a conocernos</a>

                    <a
                        href={"https://maps.app.goo.gl/pM6ETZ8XGigTwXap7"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='mt-5 text-sm block'>
                        Av. de Monforte de Lemos, 167, 28029 Madrid
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="w-4 h-4 inline mb-1" fill="currentColor">
                            <path d="M14 3h7a1 1 0 011 1v7a1 1 0 01-2 0V5.41l-9.29 9.3a1 1 0 01-1.42-1.42l9.3-9.29H15a1 1 0 010-2z" />
                            <path d="M5 5h5a1 1 0 010 2H6v11h11v-4a1 1 0 012 0v5a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1z" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default HeroSection


//  controlar por tamaño de pantalla, el asset a llamar para mejorar la velocidad de carga
//  obtener asset para pantallas grandes y manejar posición
// Añadir boton debajo del logo