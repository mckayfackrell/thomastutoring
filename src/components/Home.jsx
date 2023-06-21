import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import profile from "../assets/profile.jpeg";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#7b904b]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <p className="text-[#EBE9E9] text-3xl">Hello, my name is</p>
            <h1 className="text-4xl sm:text-7xl font-bold text-black">
              McKay Fackrell
            </h1>
            <p className="py-4 max-w-[700px] text-1xl lg:text-2xl">
              I'm a motivated and skilled junior full-stack developer. With
              experience in both front-end and back-end development, I'm ready
              to get out there and make a difference.
            </p>
            <div>
              <Link to="projects" smooth={true} duration={500} offset={-80}>
                <button className="text-black group bg-[#5f6f3a] border-[#5f6f3a] border-2 px-6 py-3 my-2 flex items-center hover:border-black">
                  View Projects
                  <span className="group-hover:rotate-90 duration-300">
                    <HiArrowNarrowRight className="ml-3" />
                  </span>
                </button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div
              className="profile-image"
              style={{
                backgroundImage: `url(${profile})`,
                backgroundSize: `cover`,
                backgroundPosition: `center`,
                borderRadius: `50%`,
                width: `300px`,
                height: `300px`,
                boxShadow: `0px 0px 10px rgba(0, 0, 0, 0.5)`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
