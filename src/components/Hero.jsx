
import { gsap } from "gsap";
import Navbar from "./Navbar";
import HeroLogo from "./HeroLogo";


function Hero() {


  return (


    <div id="home" className="main w-full h-[70%] bg-zinc-950 text-white">

      <Navbar/>
      <HeroLogo/>
 

    </div>
  );
}

export default Hero;
