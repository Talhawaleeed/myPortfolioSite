import React from "react";

function Card({ content, image, link }) {
  return (
    <div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="card1 relative block w-80 h-80 bg-zinc-900 lg:w-[28rem] lg:h-[25rem] hover:scale-105 transition-transform duration-300"
      >
        <div className="card1 relative w-80 h-80 bg-zinc-900 lg:w-[28rem] lg:h-[25rem] ">
          {image}

          <div className="bar absolute bottom-0 bg-zinc-900 text-white w-full h-20 flex items-center justify-around">
            <p className="text-gray-400 absolute font-mono text-sm leading-tight left-6">
              {content}
            </p>
            <div className="icon absolute right-6 rounded-full w-8 h-8">
              <img src="/images/icon.png" alt="" />
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Card;
