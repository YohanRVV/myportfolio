// eslint-disable-next-line no-unused-vars
import React from 'react'
import HeroImage from "../assets/IMG_20230922_220542.jpg"
import { MdKeyboardArrowRight } from "react-icons/md"
import { Link } from 'react-scroll'


const Home = () => {
    return (
        <div name="home" className='h-screen w-full bg-gradient-to-b  from-black via-black to-gray-800'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                <div className='flex flex-col justify-center h-full'>
                    <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                        I am a FullStack Developer
                    </h2>
                    <p className='text-gray-500 py-4 max-w-md'>
                        Welcome to my page! I come with two years of experience in crafting personal projects. Presently, my passion lies in crafting web applications using cutting-edge technologies such as React, Node, Laravel, Tailwind, and Bootstrap. Furthermore, I have hands-on expertise in working with both relational databases like MySQL and non-relational databases like MongoDB.
                    </p>
                    <div>
                        <Link to="portfolio" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                            Portfolio
                            <span className='group-hover:rotate-90 duration-300'>
                                <MdKeyboardArrowRight size={25} className='ml-1' />
                            </span>
                        </Link>
                    </div>
                </div>
                <div>
                    <img src={HeroImage} alt="my profile" className='rounded-2xl mx-auto w-2/3 md:2-full' />
                </div>
            </div>
        </div>
    )
}

export default Home