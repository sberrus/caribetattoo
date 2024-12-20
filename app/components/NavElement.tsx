"use client"

import { usePathname } from 'next/navigation'
import React from 'react'

const NavElement = ({ href, title }: { href: string, title: string }) => {
    // location help
    const pathname = usePathname()

    return (
        <a
            key={href}
            href={`${href}`}
            className={`border-b-2 transition-colors duration-300 transform sm:mx-6 ${pathname === href ? "text-gray-800 dark:text-gray-200 border-blue-500 mx-1.5" : "hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 border-transparent"}`}>
            {`${title}`}
        </a>
    )
}

export default NavElement