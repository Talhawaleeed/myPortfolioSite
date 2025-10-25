import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Loader from "./components/Loader";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import SkillsCube from "./components/SkillsCube";

function App() {
  return (
    <>
    
    <div className="w-full h-screen bg-zinc-950">
      <Loader />
      <Hero />
      <Projects/>
      <SkillsCube/>
      <Contact/>
    </div>
    </>
  );
}

export default App;
