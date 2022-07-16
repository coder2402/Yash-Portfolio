import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import {Link} from 'react-scroll';

const NavBar = () => {

    const elements = [
        {
            id: 1,
            element: 'home'
        },
        {
            id: 2,
            element: 'about'
        },
        {
            id: 3,
            element: 'myWork'
        },
        {
            id: 4,
            element: 'experience'
        },
        {
            id: 5,
            element: 'contact'
        },
    ]

    const [nav, setNav] = useState(false)

  return (
    <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed'>
        <div>
            <h1 className='text-4xl font-mainName ml-2'>Yash Shah</h1>
        </div>

        {/* For laptop/Pc */}
        <ul className='hidden md:flex'>
            {elements.map(({id, element}) => (
                <li key={id} className='px-4 capitalize cursor-pointer font-medium text-gray-500 hover:scale-105 hover:font-bold  duration-200'>
                    <Link to={element} smooth duration={500}>
              {element}
            </Link>
                    
                    </li>
            ))}
        </ul>

        {/* For mobile */}
        <div className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden' onClick={() => setNav(!nav)}>
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && (
            <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
            {elements.map(({id, element}) => (
                    <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl hover:font-bold'>
                        <Link onClick={() => setNav(!nav)} to={element} smooth duration={500}>
              {element}
            </Link>
                    </li>
                ))}
            </ul>
        )}

        
        
    </div>
  )
}

export default NavBar