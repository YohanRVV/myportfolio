const About = () => {
    return (
        <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
                </div>
                <p className='text-xl mt-20'>
                    Hello, I'm Yohan Velásquez, and this is my portfolio. Over the past few years, I've been dedicated to self-directed learning, refining my programming skills. In addition to my technical expertise, I have also developed strong soft skills in teamwork, leadership, communication, and problem-solving.
                </p>
                <br />
                <p className='text-xl'>
                    Currently, I am seeking my first job in the web development field. I have an advanced level of English, enabling me to communicate fluently in this language and work in an international environment. I possess strong proficiency in HTML, CSS, Javascript, Python, PHP, Laravel, React.JS, Node.Js, Next.JS, Cypress, MySQL, MongoDB, PostgreSQL, Redux, and FetchAPI.
                </p>
            </div>
        </div>
    )
}

export default About