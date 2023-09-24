
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const NavBar = () => {
    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'portfolio'
        },
        {
            id: 4,
            link: 'experience'
        },
        {
            id: 5,
            link: 'contact'
        },
    ]
    return (
        <>
            <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed bg-opacity-95">
                <div>
                    <h1 className='text-5xl font-signature ml-2'>Yohan</h1>
                </div>

                <ul className='hidden md:flex'>
                    {links.map(link => (
                        <li key={link.id} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>
                            <Link to={link.link} smooth duration={500}>{link.link}</Link>
                        </li>
                    ))}
                </ul>

                <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
                    {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
                </div>
                {nav && (
                    <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
                        {links.map(link => (
                            <li key={link.id} className='px-4 cursor-pointer capitalize py-6'>
                                <Link onClick={() => setNav(!nav)} to={link.link} smooth duration={500}>{link.link}</Link>
                            </li>

                        ))}
                        <div className="flex justify-center items-center absolute space-x-14 bottom-20 left-0 w-full cursor-pointer text-white">
                            <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/yohanrvv18/"><FaLinkedin size={30} /></a>
                            <a target='_blank' rel="noreferrer" href="https://github.com/YohanRVV"><FaGithub size={30} /></a>
                            <a target='_blank' rel="noreferrer" href="mailto:yohan.0055@gmail.com"><HiOutlineMail size={30} /></a>
                            <a target='_blank' rel="noreferrer" href="https://drive.google.com/file/d/1I1Ml3cfMdaZ2xNt66wJVRfSDNe0K8pON/view"><BsFillPersonLinesFill size={30} /></a>
                        </div>
                    </ul>

                )}
            </div>
        </>
    )
}

export default NavBar