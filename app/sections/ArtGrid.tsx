import Image from 'next/image'
import React from 'react'

const ArtGrid = () => {
    return (
        <div className='container px-2 mt-10'>
            {/* mobile layout */}
            <section className='md:hidden h-screen grid grid-rows-4 grid-cols-2 gap-2 max-w-72 mx-auto'>
                <div className="relative">
                    <Image alt="Caribe tattoo" src={"/assets/images/GridArtSection/art1.png"} fill />
                </div>
                <div className="relative row-span-2">
                    <Image alt="Caribe tattoo" src={"/assets/images/GridArtSection/art3.png"} fill />
                </div>
                <div className="relative row-span-2">
                    <Image alt="Caribe tattoo" src={"/assets/images/GridArtSection/art2.png"} fill />
                </div>
                <div className='relative'>
                    <Image alt="Caribe tattoo" src={"/assets/images/GridArtSection/art4.png"} fill />
                </div>
                <div className='relative col-span-2'>
                    <Image alt="Caribe tattoo" src={"/assets/images/GridArtSection/art5.png"} fill />
                </div>
            </section>
            {/* non mobile layout */}
            <section className='hidden border border-red-500'>
                show only in &gt; tablets
            </section>
        </div>
    )
}

export default ArtGrid

// TODO: Optimizar tamaño imagenes para tiempos de respuesta
// TODO: Añadir animaciones a las imagenes para que aparezcan y desaparezcan dependiendo del interception observer