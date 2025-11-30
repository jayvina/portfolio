import React from 'react'
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer id='contact' className="py-10 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
            <div className="md:col-span-2">
              <h3 className="text-xl font-display font-semibold mb-4">Jayvina Dhedhi</h3>
              <p className="text-slate-300 mb-6 max-w-md">
                A passionate computer engineering student dedicated to creating innovative solutions through technology.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/jayvina/" 
                  className="bg-slate-800 p-2 rounded-full hover:bg-primary/20 transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/jayvina-dhedhi-1a7285150/" 
                  className="bg-slate-800 p-2 rounded-full hover:bg-primary/20 transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                    <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="mailto:jayvinakv0036@gmail.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-800 p-2 rounded-full hover:bg-primary/20 transition-colors duration-300"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/about" className="text-slate-300 hover:text-white transition-colors duration-200 slice-effect">
                    About
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-slate-300 hover:text-white transition-colors duration-200 slice-effect">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-slate-300 hover:text-white transition-colors duration-200 slice-effect">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#education" className="text-slate-300 hover:text-white transition-colors duration-200 slice-effect">
                    Education
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-slate-300 hover:text-white transition-colors duration-200 slice-effect">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <address className="not-italic text-slate-300 space-y-2">
                <p>Rajkot, Gujarat</p>
                <p>India</p>
                <p className="slice-effect hover:text-white transition-colors">
                  <a href="mailto:jayvinakv0036@gmail.com">jayvinakv0036@gmail.com</a>
                </p>
                <p className="slice-effect hover:text-white transition-colors">
                  <a href="tel:+1234567890">+91 9106611726</a>
                </p>
              </address>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer
