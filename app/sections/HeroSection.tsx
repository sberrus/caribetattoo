import React from 'react'
import style from "@/app/styles/HeroSection.module.scss"

const HeroSection = () => {
    return (
        <div className={`${style.videoContainer} relative overflow-hidden bg-white`} >
            <video className={style.video} autoPlay loop muted>
                <source src='/assets/video/hero_section_video.mp4' />
            </video>
        </div>
    )
}

export default HeroSection