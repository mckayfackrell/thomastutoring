import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import Reacting from "../assets/react.png";
import Node from "../assets/node.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Mongo from "../assets/mongo.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#7b904b]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-2xl md:text-4xl font-bold inline border-b-4 text-[#EBE9E9] border-black">
            Skills
          </p>
          <p className="py-4 text-xl md:text-4xl font-bold text-[#41565f]">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-3 md:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md bg-[#5f6f3a] shadow-[#5f6f3a] hover:scale-110 duration-500">
            <img className="w-10 md:w-20 mx-auto py-4" src={HTML} alt="HTML icon" />
            <p className="my-4 font-bold text-sm md:text-lg">HTML</p>
          </div>

          <div className="shadow-md bg-[#5f6f3a] shadow-[#5f6f3a] hover:scale-110 duration-500">
            <img className="w-10 md:w-20 mx-auto py-4" src={CSS} alt="CSS icon" />
            <p className="my-4 font-bold text-sm md:text-lg">CSS</p>
          </div>

          <div className="shadow-md bg-[#5f6f3a] shadow-[#5f6f3a] hover:scale-110 duration-500">
            <img
              className="w-10 md:w-20 mx-auto py-4"
              src={JavaScript}
              alt="JavaScript icon"
            />
            <p className="my-4 font-bold text-sm md:text-lg">JavaScript</p>
          </div>

          <div className="shadow-md bg-[#5f6f3a] shadow-[#5f6f3a] hover:scale-110 duration-500">
            <img
              className="w-10 md:w-20 mx-auto py-4"
              src={Reacting}
              alt="React icon"
            />
            <p className="my-4 font-bold text-sm md:text-lg">React</p>
          </div>

          <div className="shadow-md bg-[#5f6f3a] shadow-[#5f6f3a] hover:scale-110 duration-500">
            <img className="w-10 md:w-20 mx-auto py-4" src={Node} alt="Node icon" />
            <p className="my-4 font-bold text-sm md:text-lg">Node</p>
          </div>

          <div className="shadow-md bg-[#5f6f3a] shadow-[#5f6f3a] hover:scale-110 duration-500">
            <img className="w-10 md:w-20 mx-auto py-4" src={GitHub} alt="GitHub icon" />
            <p className="my-4 font-bold text-sm md:text-lg">GitHub</p>
          </div>

          <div className="shadow-md bg-[#5f6f3a] shadow-[#5f6f3a] hover:scale-110 duration-500">
            <img
              className="w-10 md:w-20 mx-auto py-4"
              src={Tailwind}
              alt="Tailwind icon"
            />
            <p className="my-4 font-bold text-sm md:text-lg">Tailwind</p>
          </div>

          <div className="shadow-md bg-[#5f6f3a] shadow-[#5f6f3a] hover:scale-110 duration-500">
            <img className="w-10 md:w-20 mx-auto py-4" src={Mongo} alt="Mongo icon" />
            <p className="my-4 font-bold text-sm md:text-lg">Mongo</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
