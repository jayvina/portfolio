import React from 'react'
import { GraduationCap, BookOpen, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className='min-h-screen flex flex-col justify-start items-start px-80 pt-26 '>
        <h6 className='bg-blue-500 text-white px-3 py-0.5 text-[14px] rounded-full flex text-center font-bold'>About me</h6>
        <h1 className='text-4xl font-bold mt-3'>Passionate About Technology & Problem <br/>Solving</h1>

        <div className='mt-10 border-l-3 border-blue-500 pl-6 '>
          <p className='text-lg text-gray-500 font-sans'>I'm a 3rd-year Computer Engineering student with a strong focus on web development. I work with React, JavaScript, HTML, CSS, and Tailwind CSS to build clean and responsive user interfaces. I also have experience with Node.js, Next.js, REST APIs, and Postman on the backend.
             <br/> <br/>
             I often use Figma and Canva for UI/UX planning and design. While I have a solid foundation in DSA, my passion lies in creating practical, user-centered web applications.</p>
        </div>

        <div className='flex justify-between gap-22' >
          <div className='mt-10 p-7 h-70 w-60 border border-gray-100 rounded-2xl hover:shadow-xl text-wrap'>
            <GraduationCap size={16} color="#2156f2" strokeWidth={1.25} className='h-9 w-9 bg-blue-200 px-1 py-1 rounded-lg' />
            <h2 className='mt-3 font-bold text-2xl'>Education</h2>
            <p className='mt-3 font-medium text-gray-400'>Pursuing B.E. in Computer Engineering with focus on software development and systems design.</p>
          </div>

          <div className='mt-10 p-7 h-70 w-60 border border-gray-100 rounded-2xl hover:shadow-xl text-wrap'>
            <BookOpen size={16} color="#2156f2" strokeWidth={1.25} className='h-8 w-8 bg-blue-200 px-1 py-1 rounded-lg' />
            <h2 className='mt-3 font-bold text-2xl'>Learning</h2>
            <p className='mt-3 font-medium text-gray-400'>Actively building applications for personal projects, focusing on practical problem-solving & development workflows. </p>
          </div>

          <div className='mt-10 p-7 h-70 w-60 border border-gray-100 rounded-2xl hover:shadow-xl text-wrap'>
            <Heart size={16} color="#2156f2" strokeWidth={1.25} className='h-8 w-8 bg-blue-200 px-1 py-1 rounded-lg' />
            <h2 className='mt-3 font-bold text-2xl'>Interests</h2>
            <p className='mt-3 font-medium text-gray-400'>Passionate about open source, competitive programming, and building side projects in my free time.</p>
          </div>
          
        </div>
    </div>
  )
}

export default About
