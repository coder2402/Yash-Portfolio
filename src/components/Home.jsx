import React from 'react'
import HeroImage from '../assets/heroImage.png'
import {AiOutlineCaretLeft} from 'react-icons/ai'
import {BiDownload} from 'react-icons/bi'
// import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-gray-800 to-gray-400 pt-20'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>

                <div>
                    <div className='hidden lg:flex group text-white w-fit px-6 py-3 my-2 items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                        <span>
                            <AiOutlineCaretLeft className='mr-3 '/>
                        </span>
                        Check Out My Social Profiles
                    </div>
                </div>

            <div>
                {/* OPTIMIZATION: Added fetchPriority="high" for LCP and explicit dimensions to prevent CLS */}
                <img
                    src={HeroImage}
                    alt="my profile"
                    className='rounded-3xl mx-auto w-2/3 md:w-2/3'
                    width={476}
                    height={524}
                    fetchPriority="high"
                />
            </div>

            <div className='flex flex-col justify-center h-full w-2/3 ml-7'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>Yash Shah</h2>
                <p className='text-black font-bold text-2xl py-3 max-w-md'>I'm a Competitive Programmer.</p>
                <p className='text-black font-bold text-2xl py-3 max-w-md'>I'm a Web Developer</p>
                <p className='text-black font-bold text-2xl py-3 max-w-md'>I'm a Cse Undergrad</p>

                <div>
                    <a href='/resume.pdf' download={true} className='text-xl group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                        Resume
                        <span>
                            <BiDownload className='ml-2'/>
                        </span>
                    </a>
                </div>

                
            </div>
            
        </div>
    </div>
  )
}

export default Home