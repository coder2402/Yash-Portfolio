import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-full bg-gradient-to-b from-gray-800 to-gray-400 p-4 text-white pt-24'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-black text-gray-400'>Contact</p>
                <p className='py-6 text-xl'>Submit the below form to get in touch with me.</p>
            </div>

            <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-8 text-center py-8 px-12 sm:px-0'>

                <div className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-black text-left pl-2 w-full h-full md:h-56 md:w-3/4 text-xl'>
                <ul>
                <li><p className='text-black font-bold text-2xl'>Location:</p> Sector 14, Udaipur, Rajasthan, 313001</li>
                <li><p className='text-black font-bold text-2xl'>Email:</p> yashshah2400@gmail.com</li>
                <li><p className='text-black font-bold text-2xl'>Call:</p> +91 9460 744274</li>
                </ul>
                </div>
            
                <div className='flex justify-center items-center'>
                    <form action="https://getform.io/f/3f72a5e9-642d-4231-8245-cc38e85f0c06"
                    method='post' className='flex flex-col w-full md:w-1/2'>
                        {/* Security: Added required and maxLength attributes to prevent empty submissions and DoS */}
                        <input type="text" name='name' placeholder='Enter your name' required maxLength={50} className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>

                        <input type="email" name='email' placeholder='Enter your email' required maxLength={100} className='p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none'/>

                        <textarea name="message" rows="10" placeholder='Enter your message' required maxLength={500} className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>

                        <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-105 duration-300'> Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact