"use client"
import React, { useState } from 'react'
import gfont from '../fonts/custom1'

const TestimonialsSection = () => {
    // state
    const [currentTestimonial, setCurrentTestimonial] = useState(0)
    const [testimonial] = useState([
        {
            es: {
                title: "Texto 1 español",
                testimonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat molestias ratione sit excepturi reiciendis iure repudiandae commodi natus incidunt consectetur magnam aspernatur illo consequuntur maiores cum, facilis, unde cupiditate praesentium?",
                testimonialFullName: "Roberto Pérez",
                charge: "Testimonio 1",
                image_url: "https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            },
        },
        {
            es: {
                title: "Texto 2 español",
                testimonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat molestias ratione sit excepturi reiciendis iure repudiandae commodi natus incidunt consectetur magnam aspernatur illo consequuntur maiores cum, facilis, unde cupiditate praesentium?",
                testimonialFullName: "Roberto Pérez",
                charge: "Testimonio 2",
                image_url: "https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            },
        },
        {
            es: {
                title: "Texto 3 español",
                testimonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat molestias ratione sit excepturi reiciendis iure repudiandae commodi natus incidunt consectetur magnam aspernatur illo consequuntur maiores cum, facilis, unde cupiditate praesentium?",
                testimonialFullName: "Roberto Pérez",
                charge: "Testimonio 3",
                image_url: "https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            },
        },
    ])

    const handleClickNextButton: React.MouseEventHandler = (e) => {
        e.preventDefault()

        if (currentTestimonial === testimonial.length - 1) {
            setCurrentTestimonial(() => 0)
            return
        }
        else if (currentTestimonial < testimonial.length - 1) {
            setCurrentTestimonial((current) => current + 1)
        }
    }

    const handleClickPreviousButton: React.MouseEventHandler = (e) => {
        e.preventDefault()
        if (currentTestimonial === 0) {
            setCurrentTestimonial(() => testimonial.length - 1)
            return
        }
        else if (currentTestimonial > 0) {
            setCurrentTestimonial((current) => current - 1)
        }
    }

    return (
        <section className="dark:bg-dark" id='testimonials'>
            <div className="container px-6 py-10 mx-auto">
                <div className="lg:-mx-6 lg:flex lg:items-center transition-all">
                    <img className="object-cover object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[36rem]" src={testimonial[currentTestimonial].es.image_url} alt="" />
                    <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
                        <p className="text-5xl font-semibold text-primary">“</p>
                        <h1 className={`${gfont.className} text-2xl font-semibold text-primary lg:text-3xl lg:w-96`}>
                            {testimonial[currentTestimonial].es.title}
                        </h1>
                        <p className="max-w-lg mt-6 text-gray-500 dark:text-gray-400 ">
                            {testimonial[currentTestimonial].es.testimonial}
                        </p>
                        <h3 className={`${gfont.className} mt-6 text-lg font-medium text-primary`}>{testimonial[currentTestimonial].es.testimonialFullName}</h3>
                        <p className={` text-gray-600 dark:text-gray-300`}>
                            {testimonial[currentTestimonial].es.charge}
                        </p>
                        <div className="flex items-center justify-between mt-12 lg:justify-start">
                            <button title="left arrow" className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100" onClick={handleClickPreviousButton}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button title="right arrow" className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:mx-6 hover:bg-gray-100" onClick={handleClickNextButton}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TestimonialsSection