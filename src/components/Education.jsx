import React from 'react'
import { GraduationCap } from 'lucide-react';
import { BookOpen } from 'lucide-react';

const Education = () => {
    
    const education = [
    {
        degree: "Bachelor of Engineering in Computer Science",
        institution: "V.V.P Engineering College, Rajkot",
        duration: "2023 - 2027",
        description: "Pursuing a comprehensive computer engineering degree with emphasis on programming, data structures, algorithms, and software design.  ",
        courses: ["Data Structures & Algorithms", "Object-Oriented Programming", "Database Management Systems", "Computer Networks"],
        icon: <GraduationCap color="#2156f2" className="h-6 w-6 text-primary" />
    },
    {
        degree: "Higher Secondary Education (XII)",
        institution: "Kendriya Vidhyalaya School",
        duration: "2020 - 2023",
        description: "Completed higher secondary education with focus on Physics, Chemistry, and Mathematics.",
        icon: <BookOpen color="#2156f2" className="h-6 w-6 text-primary" />
    }
]


  return (
    <div id='education' className='min-h-screen pt-26 px-80 bg-linear-to-br from-white-50 to-blue-100'>
        <h6 className='bg-blue-500 text-white px-3 py-0.5 text-[13px] rounded-full flex text-center font-bold w-25'>My Toolbox</h6>
        <h1 className='text-4xl font-bold mt-3'>Education</h1>
        <p className='mt-4 text-[17px] text-gray-500'>My academic background, educational journey.</p>

        <div className="space-y-8 ">
            {education.map((item, index) => (
              <div key={index} className="relative mt-12">
                {index !== education.length - 1 && (
                  <div className="absolute top-16 bottom-0 left-6 w-px bg-border ml-3 -mt-4"></div>
                )}
                
                <div className="flex gap-6">
                  <div className="mt-2 bg-white w-12 p-3 rounded-2xl">
                    {item.icon}
                  </div>
                  
                  <div className=" bg-white rounded-2xl p-5 flex-1">
                    <div className="flex flex-wrap justify-between gap-2 mb-2">
                      <h3 className="text-xl font-semibold">{item.degree}</h3>
                      <span className="text-sm px-2 py-1 bg-gray-100 rounded-full">
                        {item.duration}
                      </span>
                    </div>
                    
                    <p className="text-gray-500 mb-2">
                      {item.institution}
                    </p>
                    
                    <p className="text-medium text-gray-500 mb-4">
                      {item.description}
                    </p>
                    
                    {item.courses && (
                      <div>
                        <p className="font-medium mb-2">Key Courses:</p>
                        <div className="flex flex-wrap gap-2">
                          {item.courses.map(course => (
                            <span 
                              key={course} 
                              className=" bg-linear-to-bl from-white to-blue-100 px-3 py-1 rounded-2xl text-xs text-blue-500 font-semibold"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

    </div>
  )
}

export default Education
