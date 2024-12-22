"use client"
import React from 'react'
import NavElement from './NavElement'
import gfont from '../fonts/custom1'

const Navbar = () => {
    // navbar elements to show
    const navElements = [{ title: "Home", href: "/" }, { title: "Artistas", href: "/artist" }, { title: "Conocenos", href: "/about" }]

    return (
        <nav className={`bg-transparent fixed z-50 w-full text-sm md:text-md ${gfont.className}`}>
            {/* background blur */}
            <div className='absolute w-full h-full bg-gray-950 opacity-80' style={{ filter: "blur(.75px)" }}></div>
            <div className="container flex items-center justify-center m-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
                {navElements.map(({ href, title }, idx) => (
                    <NavElement href={href} title={title} key={idx} />
                ))}
            </div>
        </nav>
    )
}

export default Navbar

// TODO: Cambiar comportamiento para que cuando baje el scrol se esconda el icono y se achique el elemento
// TODO: añadir integración para poder coger los datos de los elementos en el navbar desde un fichero /config/navbar.tsx con sus respectivos typos