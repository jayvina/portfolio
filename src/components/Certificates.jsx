import React from 'react'
import { useState } from 'react'


const Certificates = () => {

  const [showAll, setShowAll] = useState(false);  

  const projects =[{
    title: "JPMorganChase – Software Engineering Job Simulation",
    description: "Built a Spring Boot microservice with Kafka, implementing data validation, persistence with Spring Data JPA and H2, REST API integration, and end-to-end testing using Maven.",
    technologies: ["Spring Boot", "REST APIs", "Java", "JSON", "Kafka" ],
    imageURL: "/portfolio/images/Deloitte.png",
    URL: " /portfolio/images/Deloitte_Certificate.pdf"
    
  },
  {
    title: "Deloitte Australia – Technology Virtual Experience Program ",
    description: "Completed a job simulation involving development and coding, Wrote a proposal for creating a dashboard.",
    technologies: ["Data Structures", "Formal Communication", "Planning", "Programming", "Software Development" ],
    imageURL: "/portfolio/images/JPMC.png",
    URL: " /portfolio/images/JPMC_Certificate.pdf"
  },
  // {
  //    title: "Deloitte Australia – Technology Virtual Experience Program (Forage)",
  //   description: "Built a Spring Boot microservice with Kafka for high-volume transaction processing, Implemented validation and persistence using Spring Data JPA and H2 database, Integrated external REST APIs and exposed balance query endpoints, Tested end-to-end workflows using Maven and Spring Boot test framework.",
  //   technologies: ["Spring Boot", "REST APIs", "Java", "JSON", "Kafka" ],
  //   imageURL: "/images/Deloitte.png",
  //   URL: "/portoflio/images/Deloitte_Certificate.pdf"
  // },
  
]


  return (
    <div id="certificate"  className='w-full flex flex-col justify-center items-center min-h-screen px-4 sm:px-8'>
     <div className='flex flex-col justify-start items-start w-full max-w-6xl pl-35 pt-12 pb-6'>
      <h6 className='bg-blue-500 text-white px-3 py-1 text-xs sm:text-[13px] rounded-full font-bold mt-4'>My Achievements</h6>
      <h1 className='text-3xl sm:text-4xl font-bold mt-2'>Certificates</h1>
      <p className='mt-3 text-sm sm:text-base text-gray-500 max-w-2xl'>Certifications that showcase my hands-on skills and commitment to learning.</p>
      </div>

      <div className=' w-full max-w-6xl flex flex-wrap gap-6 justify-center items-stretch p-2 '>

        {(showAll ? projects : projects.slice(0, 3)).map((project, index) => (
          <div key={index} className=' bg-gray-50 group
              p-5 border border-gray-300 rounded-lg
              w-full sm:w-[48%] lg:w-[30%]
              flex flex-col gap-4
              hover:shadow-lg hover:shadow-gray-400'>
            <a
              href={project.URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={project.imageURL}
                alt={project.title}
                className=" w-full h-[180px] sm:h-[200px]
                  object-cover rounded-md
                  group-hover:brightness-75 cursor-pointer"
              />
            </a>

           
              <div>
                <h2 className='text-lg sm:text-xl font-bold text-blue-950'>{project.title}</h2>
              <p className='text-gray-500 mt-3 text-sm sm:text-[15px]'>{project.description}</p>
              </div>
           
              <div className=" flex flex-wrap gap-2 mt-auto">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className=" bg-blue-950 text-white
                    px-3 py-1 text-[11px] sm:text-[12px]
                    rounded-full"
                  >
                    {tech}
                  </span>
                ))}
                </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Certificates
