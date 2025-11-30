import React from 'react'

const Skill = () => {
  return (
    <div id='skill' className='min-h-screen pt-26 px-10 md:px-80 bg-linear-to-br from-white-50 to-blue-100 '>
      <h6 className='bg-blue-500 text-white px-3 py-0.5 text-[13px] rounded-full flex text-center font-bold w-25'>My Toolbox</h6>
      <h1 className='text-4xl font-bold mt-5'>Skills & Expertise</h1>
        <div className="flex flex-wrap gap-5 mt-10 md:scale-100 scale-95 md:translate-y-0 -translate-y-2">
            {[
                "Java", "HTML", "CSS", "JavaScript", "React.js",
                "TailwindCSS", "Node.js", "Next.js", "MySQL", "MongoDB", "Python", "Git", "Figma", "Canva"
            ].map((skill) => (
                <button
                key={skill}
                className="bg-blue-950 text-white border border-fuchsia-800 
                shadow-[0_0_8px_rgba(168,85,247,0.4)] hover:shadow-[0_0_14px_rgba(168,85,247,0.7)] 
                transition text-md  py-2 rounded-full cursor-pointer font-semibold  md:px-8 md:py-2 px-4 text-sm"
                >
                {skill}
                </button>
            ))}
        </div>
        <div className='bg-white rounded-xl h-50 md:h-45 mt-33  md:scale-100 scale-95
        md:translate-y-0 -translate-y-15
        md:px-9 px-5 md:py-6 py-4'>
            <h2 className='font-bold mt-3 text-2xl'>Continuous Learning</h2>
            <p className='mt-4 text-md text-gray-600'>I'm always expanding my skillset through online courses, documentation, and hands-on projects. Currently exploring cloud services, containerization, and advanced data structures and algorithms.</p>
        </div>
    </div>
  )
}

export default Skill
