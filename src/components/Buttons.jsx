import React from 'react'

function Buttons() {
 return (
    
<div className="relative flex flex-col sm:flex-row gap-6 mt-8 sm:mt-8 justify-center items-center  px-6 z-50 text-base text-gray-400 font-medium">


      
      <div className="flex gap-4 mt-14">
        <a
          href="#contact"
          className="inline-block px-8 py-2 text-gray-400 hover:text-white  transition-all duration-300  text-sm md:text-base"
        >
          {"{ Let’s Collaborate }"}
        </a>

        <a
          href="/Talha's Resume.pdf"
          download
          className="inline-block px-8 py-2 text-gray-400 hover:text-white  transition-all duration-300 text-sm md:text-base"
        >
          {"{ Download CV }"}
        </a>
      </div>
      </div>
    
  );
}

export default Buttons

