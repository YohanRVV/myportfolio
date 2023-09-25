// eslint-disable-next-line no-unused-vars
import React from 'react'
import review from '../assets/portfolio/review.jpg'
import review2 from '../assets/portfolio/review2.jpg'
import navBar from '../assets/portfolio/navbar.jpg'
import reactParallax from '../assets/portfolio/reactParallax.jpg'
import reactSmooth from '../assets/portfolio/reactSmooth.jpg'
import reactWeather from '../assets/portfolio/reactWeather.jpg'


const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            src: review,
            demo: 'https://appclimayrvv.netlify.app/'
        },
        {
            id: 2,
            src: review2,
            demo: 'https://rockyrvv.netlify.app/'
        }
    ]

    return (
        <div name="portfolio" className='bg-gradient-to-b pt-24 md:pt-0 from-black to-gray-800 w-full text-white md:h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                    <p className='py-6'>Check out some of my work right here</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0'>
                    {
                        portfolios.map(({ id, src, demo }) => (
                            <div key={id} className='shadow-md shadow-gray-400 rounded-lg'>
                                <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
                                <div className='flex items-center justify-center'>
                                    <a href={demo} target='_blank' rel='noreferrer' className='bg-indigo-700 hover:bg-indigo-900  text-white font-bold mt-5 mb-2 py-3 px-4 rounded duration-200 hover:scale-105'>
                                        Demo
                                    </a>
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