import React, { useEffect, useState } from 'react'

const useWindowSize = () => {
    // states
    const [size, setSize] = useState("")

    useEffect(() => {
        const width: number = window.innerWidth
        if (width <= 640) setSize(() => "sm")
        else if (width <= 768) setSize(() => "md")
        else if (width <= 1024) setSize(() => "lg")
        else if (width <= 1280) setSize(() => "xl")
        else if (width <= 1536) setSize(() => "2xl")
    }, [size])


    return size

}

export default useWindowSize