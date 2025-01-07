import React from 'react'
import gfont from '../fonts/custom1'

const CTASection = () => {
    return (
        <section className="bg-white dark:bg-amber-200/90 text-amber-900 pb-12" >
            <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
                <h2 className={`${gfont.className} text-2xl font-bold tracking-tight text-amber-700 xl:text-3xl`}>
                    Descubre el arte en tu piel
                </h2>

                <p className="block max-w-4xl mt-4 ">
                    En el corazón de Madrid, te invitamos a vivir una experiencia única. Déjanos ayudarte a crear un diseño que no solo llevarás en tu piel, sino también en tu historia.
                </p>

                <p>
                    Encuentranos a <b>10 minutos</b> del centro comercial la vaguada y a menos de 5 minutos del <b>metro peñagrande</b>
                </p>
            </div>
            <div className='w-full h-96 max-w-6xl mx-auto' >
                <iframe className='w-full h-full'
                    style={{ border: 0 }}
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}&q=Caribe+Tattoo,Madrid,Spain&zoom=15`}
                    allowFullScreen>
                </iframe>
            </div>
        </section>
    )
}

export default CTASection