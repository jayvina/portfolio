import React from 'react'
import Navbar from './components/Navbar.jsx'
import Center from './components/Center.jsx'  
import About from './components/About.jsx'
import Skill from './components/Skill.jsx'
import Projects from './components/Projects.jsx'
import Education from './components/Education.jsx'
import Footer from './components/Footer.jsx'


const App = () => {
  return (
    <div>
      <Navbar />
      <Center/>
      <About />
      <Skill />
      <Projects />
      <Education /> 
      <Footer />
    </div>
  )
}

export default App
