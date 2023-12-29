// eslint-disable-next-line no-unused-vars
import React from 'react'
import review1 from '../assets/portfolio/review.jpg'
import review2 from '../assets/portfolio/review2.jpg'
import review3 from '../assets/portfolio/review3.png'
import navBar from '../assets/portfolio/navbar.jpg'
import reactParallax from '../assets/portfolio/reactParallax.jpg'
import reactSmooth from '../assets/portfolio/reactSmooth.jpg'
import reactWeather from '../assets/portfolio/reactWeather.jpg'


const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            src: review3,
            demo: 'https://dev-gymappyr.pantheonsite.io/',
            parragraph: "This WordPress site features custom post types and taxonomies, utilizes the ACF plugin for advanced functionality, and incorporates the Swiper library and Lightbox for interactive displays."
        },
        {
            id: 2,
            src: review1,
            demo: 'https://appclimayrvv.netlify.app/',
            parragraph: "Weather App made with React. Using API openweathermap"
        },
        {
            id: 3,
            src: review2,
            demo: 'https://rockyrvv.netlify.app/',
            parragraph: "Basic Landing Page using Javascript and Css"
        },

    ]

    return (
        <div name="portfolio" className='bg-gradient-to-b pt-24 md:pt-0 from-black to-gray-800 w-full text-white md:h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                    <p className='py-6'>Check out some of my work right here</p>
                </div>

                <div className='grid sm:grid-cols-3 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {
                        portfolios.map(({ id, src, demo, parragraph }) => (
                            <div key={id} className='shadow-md shadow-gray-400 rounded-lg'>
                                <a href={demo} target='_blank' rel='noreferrer'>
                                    <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
                                </a>
                                <div className='flex items-center justify-center'>
                                    <p className='text-center mt-3'>{parragraph}</p>
                                </div>
                            </div>

                        ))
                    }

                </div>

            </div>
        </div>
    )
}

export default Portfolio
