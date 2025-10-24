import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Loader from "./components/Loader";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <>
    
    <div className="w-full h-screen bg-zinc-950">
      <Loader />
      <Hero />
      <Projects/>
      <Contact/>
    </div>
    </>
  );
}

export default App;
