import Image from 'next/image'
import React from 'react'

const ArtGrid = () => {
    return (
        <section className='container px-2 mx-auto my-24'>
            <section className='h-screen grid grid-rows-4 grid-cols-2 gap-2 max-w-96 w-full sm:w-8/12 md:8/12 lg:w-8/12 xl:w-3/12 mx-auto'>
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
        </section>
    )
}

export default ArtGrid

// TODO: Optimizar tamaño imagenes para tiempos de respuesta
// TODO: Añadir animaciones a las imagenes para que aparezcan y desaparezcan dependiendo del interception observer