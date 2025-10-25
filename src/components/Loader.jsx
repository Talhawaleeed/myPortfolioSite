import React, { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(SplitText, ScrollTrigger);

function Loader() {

    const [isVisible, setIsVisible] = useState(true);

    
  useGSAP(()=>{

     const tl = gsap.timeline();

    

      tl.from('#heroLogo',{
        rotate: 45,
        delay: 0.2,
        duration: 0.5
      })
      tl.to('#loader', {
          yPercent: -100,
          duration: 1,
          delay:0.5,
          ease:" expo.easeInOut"
      })
      tl.to('#red', {
          top:0,
          height:"100%",
          duration: 1,
          delay: -1,
          ease:" expo.easeInOut"
      })
      tl.to('#red', {
          height: "0%",
          duration: 1,
          delay: -.7,
          ease:" expo.easeInOut",
            onComplete: () => {
    setIsVisible(false);
  },
      })
   

  })
    

if (!isVisible) return null;
  return (
    <>
      <div id="main" className="fixed inset-0 z-[9999] overflow-hidden pointer-events-auto">

        <div
          id="loader"
          className="absolute inset-0 bg-zinc-950 text-white flex items-center justify-center"
        >
          <div id="topheading" className="absolute top-5 left-1/2 -translate-x-1/2 text-center uppercase tracking-tight">
          <p className="text-gray-400 text-sm md:text-base font-mono max-w-lg whitespace-pre-line">
            {"{ Talha waleed }"}
          </p>
          </div>

          <div id="heroLogo" className="flex items-center justify-center">
            <img className="h-[100px] w-[100px]" src="/images/Hero-logo.png" alt="logo" />
          </div>
        </div>

        <div id="red" className="absolute top-full left-0 w-full h-0 bg-zinc-900"></div>
      </div>
    </>
  );
}

export default Loader;


