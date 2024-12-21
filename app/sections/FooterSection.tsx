import Image from 'next/image'
import React from 'react'

const FooterSection = () => {
    return (
        <footer className="bg-background mt-6 border-t border-y-gray-800">
            <div className="container flex flex-col items-center justify-between p-2 mx-auto space-y-4 sm:space-y-0 sm:flex-row text-gray-400">
                <Image alt='caribe tattoo logo' src={"/assets/decor/logo-background-transparent.png"} height={100} width={100} />
                <div className="flex flex-wrap justify-center mt-6 -mx-4">
                    <a href="#" className="mx-4 text-sm  transition-colors duration-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Reddit"> Home </a>

                    <a href="#" className="mx-4 text-sm  transition-colors duration-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Reddit"> About </a>

                    <a href="#" className="mx-4 text-sm  transition-colors duration-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Reddit"> Teams </a>

                    <a href="#" className="mx-4 text-sm  transition-colors duration-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Reddit"> Privacy </a>

                    <a href="#" className="mx-4 text-sm  transition-colors duration-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Reddit"> Cookies </a>
                </div>

            </div>
            <hr className="mt-8 border-gray-800 md:my-10" />
            <div className='py-8'>
                <p className="text-sm text-gray-500 text-center">©Caribe Tattoo 2024. All Rights Reserved.</p>
            </div>
        </footer >
    )
}

export default FooterSection