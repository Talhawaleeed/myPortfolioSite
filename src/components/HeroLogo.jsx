import React, { useLayoutEffect, useRef } from "react";

import { gsap } from "gsap";
import Buttons from "./Buttons";

function HeroLogo() {
  const logoRef = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const paths = logoRef.current.querySelectorAll("path");
      gsap.fromTo(
        paths,
        { opacity: 0, y: 40, fill: "#ffffff" },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.8,
          delay: 2,
          ease: "power3.out",
        }
      );
    }, logoRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      className="relative w-full h-screen flex flex-col justify-center items-center  text-white gap-5"
      id="logo"
    >
      <svg
        ref={logoRef}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 285.69 97.08"
        className="w-[320px]"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path d="M51.43,95.75H28.84V61.14H18.37L0,42.65H28.84V25.45L51.43,12.74" />
            <path d="M57.73,69.35a33,33,0,0,1,1.7-10.52,28.1,28.1,0,0,1,4.83-8.94A23.25,23.25,0,0,1,72,43.73a22.57,22.57,0,0,1,10.32-2.31,21,21,0,0,1,8.83,1.79,20,20,0,0,1,7.09,5.7h.21l-.21-6.26h22.08v53.1H98.2L98.41,89H98.2a30.34,30.34,0,0,1-7.34,6,18.34,18.34,0,0,1-9.09,2.1,22.06,22.06,0,0,1-10.12-2.26,22.56,22.56,0,0,1-7.55-6.11,28,28,0,0,1-4.72-8.83A33.26,33.26,0,0,1,57.73,69.35Zm22.5-.1a10.1,10.1,0,0,0,2.46,7A8.72,8.72,0,0,0,89.47,79a9,9,0,0,0,6.88-2.72,9.86,9.86,0,0,0,2.57-7,10,10,0,0,0-2.57-7.09,8.91,8.91,0,0,0-6.88-2.77,8.62,8.62,0,0,0-6.78,2.77A10.28,10.28,0,0,0,80.23,69.25Z" />
            <path d="M129.23,95.75V12.25L151.83,0V95.75Z" />
            <path d="M183.27,12.25V35.67c0,1,0,2.19-.05,3.49s-.07,2.62-.1,4-.09,2.66-.16,4-.13,2.43-.2,3.39h.2a46.19,46.19,0,0,1,3.34-3.75,20.13,20.13,0,0,1,3.6-2.88,15.29,15.29,0,0,1,4.21-1.8,20.62,20.62,0,0,1,5.29-.61,18.92,18.92,0,0,1,8.32,1.69,16,16,0,0,1,5.75,4.62,18.93,18.93,0,0,1,3.28,6.88,33.46,33.46,0,0,1,1,8.48V95.75H195.19V68.94a18,18,0,0,0-1-6.42q-1-2.51-4.47-2.51-3.8,0-5.13,2.67a17.07,17.07,0,0,0-1.34,7.49V95.75H160.68V0Z" />
            <path d="M223.14,69.35a33,33,0,0,1,1.69-10.52,28.1,28.1,0,0,1,4.83-8.94,23.45,23.45,0,0,1,7.7-6.16,22.59,22.59,0,0,1,10.33-2.31,21,21,0,0,1,8.83,1.79,20.13,20.13,0,0,1,7.09,5.7h.2l-.2-6.26h22.08v53.1H263.61l.2-6.78h-.2a30.38,30.38,0,0,1-7.35,6,18.34,18.34,0,0,1-9.09,2.1,22,22,0,0,1-10.11-2.26,22.46,22.46,0,0,1-7.55-6.11,28,28,0,0,1-4.73-8.83A33.55,33.55,0,0,1,223.14,69.35Zm22.49-.1a10.06,10.06,0,0,0,2.47,7A8.69,8.69,0,0,0,254.88,79a9,9,0,0,0,6.88-2.72,9.86,9.86,0,0,0,2.57-7,10,10,0,0,0-2.57-7.09,8.94,8.94,0,0,0-6.88-2.77,8.59,8.59,0,0,0-6.78,2.77A10.24,10.24,0,0,0,245.63,69.25Z" />
          </g>
        </g>
      </svg>

      <div className="flex items-center justify-center">
        <div className="intro">
          <p className=" text-gray-400 text-sm md:text-base italic text-center max-w-lg px-4 whitespace-pre-line">
            {
              "{ I’m Talha — a MERN stack developer with a different perspective }"
            }
          </p>
          <div className="center flex justify-center">
          <Buttons />

          </div>
        </div>
      </div>

      {/* <div className="noisy"></div> */}
    </section>
  );
}

export default HeroLogo;
