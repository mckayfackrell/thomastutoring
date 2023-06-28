import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import classroom from "../assets/classroom.jpg";

const Home = () => {
  return (
    <div className="w-full h-screen bg-gray-200">
      <div className="max-w-7xl mx-auto px-8 flex flex-col justify-center h-full">
        <div
          className="banner-image bg-cover bg-center bg-no-repeat w-full h-80 sm:h-96"
          style={{ backgroundImage: `url(${classroom})` }}
        ></div>
        <div className="relative">
          <div className="flex flex-col justify-center items-center py-4">
            <p className="py-8 max-w-md sm:max-w-lg lg:max-w-3xl text-lg sm:text-2xl text-center">
              Get the best ACT tutoring services and achieve your target score.
              I will guide you through the exam preparation process, helping you
              master the content and strategies necessary for success.
            </p>
            <div className="flex space-x-4">
              <div>
                <Link to="/aboutme">
                  <button className="px-6 py-3 rounded-lg bg-[#229354] text-white border-[#229354] border-2 flex items-center hover:bg-[#34ae6b] hover:border-[#34ae6b] hover:transform hover:scale-105 transition duration-300">
                    Learn More
                    <span className="ml-3">
                      <HiArrowNarrowRight />
                    </span>
                  </button>
                </Link>
              </div>
              <div>
                <a
                  href="https://forms.gle/jiJgreaXWRS3gjac8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="px-6 py-3 rounded-lg bg-[#229354] text-white border-[#229354] border-2 flex items-center hover:bg-[#34ae6b] hover:border-[#34ae6b] hover:transform hover:scale-105 transition duration-300">
                    Request ACT Tutoring
                    <span className="ml-3">
                      <HiArrowNarrowRight />
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
