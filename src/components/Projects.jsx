import React from 'react'
import { ExternalLink } from 'lucide-react'
import { useState } from 'react'

const Projects = () => {

  const [showAll, setShowAll] = useState(false);  

  const projects =[{
    title: "NoteNest",
    description: "NoteNest lets you create notes, set priorities, and easily view and manage them all in one place.",
    technologies: ["React", "TailwindCss", "JavaScript" ],
    imagURL: "https://plus.unsplash.com/premium_photo-1665990294060-74d7e7b76dd3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=600",
    githubURL:"https://jayvina.github.io/NoteNest/",
  },
  {
    title: "Web-Page for University",
    description: "A modern university website built with HTML & CSS, featuring a clean, user-friendly interface for students and visitors.",
    technologies: ["HTML", "CSS"],
    imagURL: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dW5pdmVyc2l0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
    githubURL:"https://jayvina.github.io/University-WebPage/",
  },
  {
    title: "Rock-Paper-Scissors",
    description: "A classic game implemented using HTML, CSS, and JavaScript where players can choose rock, paper, or scissors to play against the computer.",
    technologies: ["HTML", "CSS", "JavaScript"],
    imagURL: "https://media.istockphoto.com/id/1324377846/photo/digital-collage-modern-art-rock-scissor-and-paper-hand-sign-with-conflict-geometry.webp?a=1&b=1&s=612x612&w=0&k=20&c=CMetrMxmwslUIu-NxzTgwaiJWmhbrANBxrA6ep-k8pc=",
    githubURL:"https://jayvina.github.io/rock-paper-scissors/",
  },
  {
    title: "Quiz Time",
    description: "A fun and interactive quiz game built with HTML, CSS, and JavaScript to test your knowledge in real time.",
    technologies: ["HTML", "CSS", "JavaScript"],
    imagURL: "https://plus.unsplash.com/premium_photo-1680303134459-912abf8efe2f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHF1aXp8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    githubURL:"https://jayvina.github.io/Quiz-Time/",
  }
]

const visibleProjects = showAll ? projects : projects.slice(0, 2);


  return (
    <div id="project" className='w-full flex flex-col justify-center items-center'>
      <div className=' flex flex-col justify-start items-start px-80 pt-26 w-full pb-3'>
      <h6 className='bg-blue-500 text-white px-3 py-0.5 text-[13px] rounded-full flex text-center font-bold w-22'>My Work</h6>
      <h1 className='text-4xl font-bold mt-2'>My Work</h1>
      <p className='mt-3 text-[16px] text-gray-500'>Here are some of the projects I've worked on to apply and enhance my skills.</p>
      </div>

      <div className=' pl-55 mt-6 flex flex-row flex-wrap gap-6 items-center relative overflow-hidden '>

        {(showAll ? projects : projects.slice(0, 3)).map((project, index) => (
          <div key={index} className='group mb-10 p-5 border border-gray-300 rounded-lg w-85 h-120 gap-4 flex flex-col hover:shadow-lg '>
            <img src={project.imagURL} alt={project.title} className='w-full h-50 object-cover rounded-md mb-1 group-hover:brightness-75 ' />
              <div>
                <h2 className='text-xl font-medium mt-1 text-gray-900 '>{project.title}</h2>
              <p className='text-gray-500 mt-1 text-[14px]'>{project.description}</p>
              </div>
           
              <div className=" flex flex-row flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 px-3 py-1 text-[12px] inline-block rounded-full text-black"
                  >
                    {tech}
                  </span>
                ))}
                </div>
                <div className="flex items-centers gap-3">
                  <a href={project.githubURL} target="_blank" rel="noopener noreferrer">
                    <button className=" cursor-pointer bg-gray-900 border border-fuchsia-700 text-white px-5 py-1 hover:scale-105 rounded-full flex items-center gap-2">
                      <ExternalLink size={16} />
                      view project
                    </button>
                  </a>
                </div>
          </div>
        ))}

        {projects.length > 3 && ( 
          <div className='flex items-center justify-start pl-115 w-full mb-4'>
          <button
            onClick={() => setShowAll(!showAll)}
            className='px-10 py-1 rounded-3xl text-medium text-black bg-transparent border-2 border-gray-400 cursor-pointer'>
            {showAll ? "View Less" : "View all Projects"}
          </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Projects
