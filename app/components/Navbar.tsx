import React from 'react'
import NavElement from './NavElement'

const Navbar = () => {
    // navbar elements to show
    const navElements = [{ title: "Home", href: "/" }, { title: "Conocenos", href: "/about" }]

    return (
        <nav className={`bg-white dark:bg-transparent fixed z-50 w-full`}>
            {/* background blur */}
            <div className='absolute w-full h-full bg-gray-950 opacity-35' style={{ filter: "blur(2px)" }}></div>
            <div className="container flex items-center justify-center m-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
                {navElements.map(({ href, title }, idx) => (
                    <NavElement href={href} title={title} />
                ))}
            </div>
        </nav>
    )
}

export default Navbar

// TODO: Cambiar comportamiento para que cuando baje el scrol se esconda el icono y se achique el elemento
// TODO: añadir integración para poder coger los datos de los elementos en el navbar desde un fichero /config/navbar.tsx con sus respectivos typos