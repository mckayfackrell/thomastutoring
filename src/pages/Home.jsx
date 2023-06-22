import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import tutor from "../assets/tutor.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-white">
      <div className="max-w-7xl mx-auto px-8 flex flex-col justify-center h-full">
        <div
          className="profile-image bg-contain bg-center bg-no-repeat w-full sm:w-auto sm:h-64 md:h-80 lg:h-96"
          style={{ backgroundImage: `url(${tutor})` }}
        ></div>
        <div className="flex flex-col justify-center items-center py-4">
          <p className="py-8 max-w-md sm:max-w-lg lg:max-w-3xl text-lg sm:text-2xl text-center">
            Get the best ACT tutoring services and achieve your target score. I
            will guide you through the exam preparation process, helping you
            master the content and strategies necessary for success.
          </p>
          <div className="flex space-x-4">
            <div>
              <Link to="/aboutme">
                <button className="text-black group border-black border-2 px-6 py-3 my-2 mr-2 flex items-center hover:border-black hover:transform hover:scale-105 transition duration-300">
                  Learn More
                  <span>
                    <HiArrowNarrowRight className="ml-3" />
                  </span>
                </button>
              </Link>
            </div>
            <div>
              <Link to="https://forms.gle/jiJgreaXWRS3gjac8">
                <button className="text-black group border-black border-2 px-6 py-3 my-2 flex items-center hover:border-black hover:transform hover:scale-105 transition duration-300">
                Request ACT Tutoring
                  <span>
                    <HiArrowNarrowRight className="ml-3" />
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
