import React from "react";

function Navbar() {
  return (
    <div>
<nav className="fixed top-0 left-0 w-full h-16 bg-transparent backdrop-blur-md flex justify-center items-center gap-8 px-6 z-50 text-base  whitespace-pre-line text-gray-400 font-medium">


        <a href="#home" className="hover:text-zinc-400 transition-colors">
          Home
        </a>
        <a href="#projects" className="hover:text-zinc-400 transition-colors">
          Projects
        </a>
        <a href="#skills" className="hover:text-zinc-400 transition-colors">
          Skills
        </a>
        <a href="#contact" className="hover:text-zinc-400 transition-colors">
          Contact
        </a>
      </nav>
    </div>
  );
}

export default Navbar;
