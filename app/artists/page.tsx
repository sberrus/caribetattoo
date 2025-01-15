import React from 'react'
import gfont from '../fonts/custom1'

const ArtistsPage = () => {
    return (
        <section className="bg-background pt-14">
            <div className="bg-background">
                <div className="container pt-12 p-6 mx-auto">
                    <h1 className={`${gfont.className} text-2xl font-semibold text-center text-amber-200 capitalize lg:text-3xl`}>Conocenos</h1>
                    <div className="flex justify-center mx-auto mt-6">
                        <span className="inline-block w-40 h-1 bg-amber-200 rounded-full"></span>
                        <span className="inline-block w-3 h-1 mx-1 bg-amber-200 rounded-full"></span>
                        <span className="inline-block w-1 h-1 bg-amber-200 rounded-full"></span>
                    </div>
                    <p className="max-w-2xl mx-auto mt-6 text-center text-gray-200">
                        Creamos el tatuaje perfecto para contar tu historia
                    </p>
                </div>
            </div>


            <div className="container px-6 py-5 mx-auto">
                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
                    <div className="flex flex-col items-center p-4 border sm:p-6 rounded-xl dark:border-gray-700">
                        <img className="object-cover w-full rounded-xl aspect-square" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
                        <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">Sergio Reyes</h1>
                        <p className="mt-2 text-gray-500 capitalize dark:text-gray-300">Tatuador</p>
                    </div>
                    <div className="flex flex-col items-center p-4 border sm:p-6 rounded-xl dark:border-gray-700">
                        <img className="object-cover w-full rounded-xl aspect-square" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />
                        <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">Sergio Reyes</h1>
                        <p className="mt-2 text-gray-500 capitalize dark:text-gray-300">Tatuador</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ArtistsPage