import React from 'react'
import DiceGame from '../assets/portfolio/DiceGame.png';
import Notes from '../assets/portfolio/Notes.png';
import Safar from '../assets/portfolio/Safar.png';
import Portfolio from '../assets/portfolio/Portfolio.png';

const MyWork
 = () => {

    const work = [
        {
            id: 1,
            src: Portfolio,
            codeLink: 'https://github.com/coder2402/Yash-Portfolio',
            demoLink: 'https://flourishing-pie-b59d01.netlify.app/'
        },
        {
            id: 2,
            src: DiceGame,
            codeLink: 'https://github.com/coder2402/Dice-Game',
            demoLink: 'https://musing-engelbart-32c28a.netlify.app/'
        },
        {
            id: 3,
            src: Notes,
            codeLink: 'https://github.com/coder2402/Notes-Website',
            demoLink: 'https://quizzical-ride-38a816.netlify.app/'
        },
        {
            id: 4,
            src: Safar,
            codeLink: 'https://github.com/coder2402/Travelling-blogs'
        },
    ]

  return (
    <div name='myWork' className='bg-gradient-to-b from-gray-800 to-gray-400 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-black text-gray-400'>My Work</p>
                <p className='py-6 text-xl'>Check out some of my work here.</p>
            </div>

            {/* Card */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                {
                    work.map(({id, src, codeLink, demoLink}) => (
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg bg-gradient-to-r from-gray-800 via-gray-400 to-gray-800'>
                            <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
                            <div className='flex items-center justify-center bg-gradient-to-r from-gray-800 via-gray-400 to-gray-800'>
                                {demoLink && (
                                <button className='w-1/2 px-6 py-2 m-4 duration-200 hover:scale-105 bg-gradient-to-r from-gray-800 to-gray-400'><a href={demoLink} target='_blank' rel="noreferrer">Demo</a></button>
                                    
                                )}
                                <button className='w-1/2 px-6 py-2 m-4 duration-200 hover:scale-105 bg-gradient-to-r from-gray-400 to-gray-800'><a href={codeLink} target='_blank' rel="noreferrer">Code</a></button>
                            </div>
                        </div>
                    
                    ))
                }
                </div>

            
        </div>
    </div>
  )
}

export default MyWork
