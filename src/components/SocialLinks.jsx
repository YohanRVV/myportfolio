// eslint-disable-next-line no-unused-vars
import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const SocialLinks = () => {

    const links = [
        {
            id: 1,
            child: (
                <>LinkedIn <FaLinkedin size={30} /></>
            ),
            href: 'https://www.linkedin.com/in/yohanrvv18/',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>GitHub <FaGithub size={30} /></>
            ),
            href: 'https://github.com/YohanRVV'
        },
        {
            id: 3,
            child: (
                <>Email <HiOutlineMail size={30} /></>
            ),
            href: 'mailto:yohan.0055@gmail.com'
        },
        {
            id: 4,
            child: (
                <>Resume <BsFillPersonLinesFill size={30} /></>
            ),
            href: 'https://drive.google.com/file/d/1mjNxaUPakEABuyMY2nVgumN52HMZ8Nae/view?usp=sharing',
            style: 'rounded-br-md',
        }
    ]
    return (
        <>

            <div className='hidden lg:flex flex-col top-[35%] left-0 fixed opacity-95'>
                <ul>
                    {links.map(link => (
                        <li key={link.id} className={'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500' + ' ' + link.style}>
                            <a
                                href={link.href}
                                className='flex justify-between items-center w-full text-white font-bold'
                                download={link.download}
                                target='_blank'
                                rel="noreferrer"
                            >
                                {link.child}
                            </a>
                        </li>

                    ))}
                </ul>
            </div>
        </>
    )
}

export default SocialLinks
