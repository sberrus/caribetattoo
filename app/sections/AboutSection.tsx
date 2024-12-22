import Image from 'next/image'
import React from 'react'
import gfont from '../fonts/custom1'

const AboutSection = () => {
    return (
        <section className='relative overflow-x-hidden overflow-y-hidden'>
            <div className='md:grid md:grid-cols-2 container mx-auto'>
                <div className='relative h-screen overflow-hidden mx-auto'>
                    {/* images container */}
                    <div className='relative w-36 h-36 top-24 z-20'>
                        {/* Image 1 */}
                        <div className="w-full h-full relative">
                            <Image alt="caribe tattoo tatuaje calabera con daga tinta negra" src="/assets/images/AboutSection/art1.png" fill />
                        </div>
                    </div>
                    <div className="relative left-20 z-10" style={{ width: "250px", height: "500px" }}>
                        {/* Image 2 */}
                        <div className="w-full h-full relative">
                            <Image alt="caribe tattoo tatuaje calabera con daga tinta negra" src="/assets/images/AboutSection/art2.png" fill />
                        </div>
                    </div>
                </div>
                {/* history */}
                <div className='px-6 md:mt-40'>
                    {/* title */}
                    <h2 className={`${gfont.className} text-4xl py-4 text-yellow-100`}>
                        Tatuajes con historia
                    </h2>
                    <div className='tracking-wider'>
                        <p className='pb-5 md:pb-10'>Dos hermanos, una pasión indomable. Tras 8 años recorriendo el mundo con sus agujas, dejando huella en pieles de Venezuela, Perú, Argentina y España, deciden plantar bandera en Madrid.
                        </p>
                        <p>Este no es solo un estudio de tatuajes, es el inicio de una nueva aventura donde la tinta cuenta historias y la rebeldía toma forma. Bienvenidos al primer capítulo de su legado en la capital. Aquí, el arte no tiene fronteras.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection