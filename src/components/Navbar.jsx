import React from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {

  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="fixed top-0 left-0 w-full h-16 flex items-center justify-between px-6 py-4 bg-transparent backdrop-blur-sm shadow-sm z-20">
      
      <div className="text-black font-semibold text-xl">
        <h5>Portfolio</h5>
      </div>

      <div className="hidden md:flex items-center space-x-10 text-black font-semibold text-[17px] px-6">
        <a href="#about" className="hover:text-gray-800 transition">About</a>
        <a href="#skill" className="hover:text-gray-800 transition">Skill</a>
        <a href="#project" className="hover:text-gray-800 transition">Project</a>
        <a href="#education" className="hover:text-gray-800 transition">Education</a>
        <a href="#contact" className="hover:text-gray-800 transition">Contact</a>
      </div>

      <button
        className="md:hidden text-black"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col py-10 space-y-4 h-100 md:hidden z-10 justify-between">
          <a href="#about" className=" flex items-center justify-center" onClick={() => setIsOpen(false)}>About</a>
          <a href="#skill" className=" flex items-center justify-center" onClick={() => setIsOpen(false)}>Skill</a>
          <a href="#project" className=" flex items-center justify-center"  onClick={() => setIsOpen(false)}>Project</a>
          <a href="#education" className=" flex items-center justify-center" onClick={() => setIsOpen(false)}>Education</a>
          <a href="#contact" className=" flex items-center justify-center" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      )}

    </div>
  );
};5
export default Navbar;
