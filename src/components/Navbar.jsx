import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-16 flex items-center justify-between px-8 bg-transparent">
      <div className="text-black font-semibold text-xl">
        <h5>Portfolio</h5>
      </div>

      <div className="flex items-center space-x-8 text-black font-semibold text-[16px]">
        <a href="#about" className="hover:text-gray-800 transition">About</a>
        <a href="#skills" className="hover:text-gray-800 transition">Skills</a>
        <a href="#projects" className="hover:text-gray-800 transition">Projects</a>
        <a href="Education" className="hover:text-gray-800 transition">Education</a>
        <a href="#contact" className="hover:text-gray-800 transition">Contact</a>
      </div>

    </div>
  );
};

export default Navbar;
