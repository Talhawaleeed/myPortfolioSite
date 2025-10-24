import React from "react";
import Card from "../components/Card";

function Projects() {
  return (
    <>
      <main
        id="projects"
        className="w-full h-screen bg-zinc-950 text-white 
                       flex flex-col justify-center items-center 
                       py-16 px-4 sm:px-6 gap-8"
      >
        <div className="heading text-center mb-20">
          <p className="text-gray-400 text-sm md:text-base italic max-w-lg whitespace-pre-line">
            {"{ my projects }"}
          </p>
        </div>

        <div
          className="flex flex-col items-center gap-8 
                        lg:flex-row lg:gap-14"
        >
          <Card
            content={"// Self discovery social media app"}
            image={<img src="/images/1.jpg" alt="" />}
            link="https://github.com/Talhawaleeed/final-year-project"
          />

          <Card
            content={"// 3d room planner"}
            image={<img src="/images/2.jpg" alt="" />}
            link="https://github.com/Talhawaleeed/3d-room-planner"
          />
        </div>
      </main>
    </>
  );
}

export default Projects;
