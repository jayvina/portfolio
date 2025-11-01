import React from 'react'

const Center = () => {
  return (
    
      <div className=' bg-linear-to-br from-white-50 to-blue-100 min-h-screen flex flex-col justify-center items-center pt-24 p-6 '>
        <div className='bg-linear-to-br from-blue-200 to-blue-100 px-4 py-1 rounded-2xl '>
          <h6 className='text-xs text-blue-500 font-semibold'>Computer Engineering Student</h6>
        </div> 
        
        <div>
          <h1 className='text-6xl font-bold text-gray-800 mt-4 text-center tracking-normal'>
            Hello, I'm <span className='text-blue-500'>Jayvina Dhedhi</span>
          </h1>
        </div>
        <div className='mt-8 text-gray-500 text-xl text-center '>
          <p>A passionate computer engineering student with a focus on building 
            <br/> innovative solutions and exploring new technologies.</p>
        </div>
        <div  className= 'mt-4 p-4 rounded-lg flex gap-6'>
          <a href="#project">
            <button className=' scroll-smooths bg-blue-500 rounded-full px-7 py-2 flex items-center text-white cursor-pointer'>View My Work</button>
          </a>
          <button className='flex items-center rounded-full px-7 py-2 border-2 border-gray-300 cursor-pointer'>Download Resume</button>
        </div>
      </div>
  )
}

export default Center
