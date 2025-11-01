import React from 'react'

const Skill = () => {
  return (
    <div className='min-h-screen pt-26 px-80 bg-linear-to-br from-white-50 to-blue-100 '>
      <h6 className='bg-blue-500 text-white px-3 py-0.5 text-[13px] rounded-full flex text-center font-bold w-25'>My Toolbox</h6>
      <h1 className='text-4xl font-bold mt-5'>Skills & Expertise</h1>
        <div className="flex flex-wrap gap-5 mt-10">
            {[
                "Java", "HTML", "CSS", "JavaScript", "React.js",
                "TailwindCSS", "Node.js", "Next.js", "SQL", "Python", "Git", "Figma", "Canva"
            ].map((skill) => (
                <button
                key={skill}
                className="bg-blue-950 text-white border border-fuchsia-800 
                shadow-[0_0_8px_rgba(168,85,247,0.4)] hover:shadow-[0_0_14px_rgba(168,85,247,0.7)] 
                transition text-md px-6 py-2 rounded-full cursor-pointer font-semibold"
                >
                {skill}
                </button>
            ))}
        </div>
        <div className='bg-white rounded-xl h-38 mt-46 py-6 px-9'>
            <h2 className='font-bold text-2xl'>Continuous Learning</h2>
            <p className='mt-3 text-md text-gray-600'>I'm always expanding my skillset through online courses, documentation, and hands-on projects. Currently exploring cloud services, containerization, and advanced data structures and algorithms.</p>
        </div>
    </div>
  )
}

export default Skill
