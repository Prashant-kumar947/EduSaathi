import React from 'react'
import SearchBar from './SearchBar'

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full md:pt-36 pt-20 px-7 md:px-0 space-y-7 text-center bg-gradient-to-b from-cyan-100/70'>
      <h1 className='relative font-bold text-gray-800 max-w-3xl mx-auto text-4xl'>Empower your future with the courses designed to <span className='text-blue-600'>fit your choice.</span></h1>
      <p className='md:block hidden text-gray-500 max-w-2xl mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quidem aliquid recusandae dignissimos at ab earum aliquam iste natus cum?</p>
      <p className='md:hidden text-gray-500 max-w-sm mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, ullam. Excepturi, ipsa!</p>
      <SearchBar/>
    </div>
  )
}

export default Hero