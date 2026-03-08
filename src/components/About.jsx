import React from 'react'

const cp = [
    {
        id: 1,
        site: 'Codeforces',
        link: 'https://codeforces.com/profile/yashshah03'
    },
    {
        id: 2,
        site: 'Codechef',
        link: 'https://www.codechef.com/users/yashshah03'
    },
]

const About = () => {

  return (
    <div id='about'
    className='w-full h-full bg-gradient-to-b from-gray-400 to-gray-800 text-white pl-5 md:pl-36 pt-28'
    >
        <div className='max-w-screen p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pd-8'>
                <p className='text-4xl font-bold inline border-b-4 border-black text-gray-800'>About</p>
            </div>

            <p className='text-xl mt-10'>
                Inquisitive, energetic pre final year Computer Science student at NIT Surat, with a strong foundation in math, programming logic, coding, machine learning, and web development. 
            </p>
            <br />
            <p className='text-2xl text-black font-bold'>
            Visit my Competitive Programming handles :
            </p>

            <ul className='mt-2'>
                {cp.map(({id, site, link}) => (
                    <li key={id} className='text-xl mt-2'>
                        <a href={link} className='text-blue-500 hover:text-blue-700 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-sm' target='_blank' rel="noreferrer noopener" aria-label={`Visit my ${site} profile`}>{site}</a>
                    </li>
                ))}
            </ul>

            <div className='pd-8 mt-5'>
                <p className='text-3xl font-bold inline text-black'>Personal Details</p>
            </div>

            <ul>
                <li className='text-xl mt-3'><b className='text-black'>Email:</b> <a href="mailto:yashshah2400@gmail.com" className='hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-sm' aria-label="Send an email to yashshah2400@gmail.com">yashshah2400@gmail.com</a></li>
                <li className='text-xl mt-3'><b className='text-black'>Birthday:</b> 24th February 2003</li>
                <li className='text-xl mt-3'><b className='text-black'>Degree:</b> BTECH - Computer Science and Engineering</li>
                <li className='text-xl mt-3'><b className='text-black'>University:</b> National Institute of Technology, Surat</li>
            </ul>
                 
        </div>
    </div>
  )
}

export default About