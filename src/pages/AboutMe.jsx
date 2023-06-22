import React from "react";
import profile from "../assets/profile.jpeg";

const AboutMe = () => {
  return (
    <div className="w-full h-screen bg-[#FFFFFF]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="flex justify-center items-center">
            <div
              className="profile-image"
              style={{
                backgroundImage: `url(${profile})`,
                backgroundSize: `cover`,
                backgroundPosition: `center`,
                width: `300px`,
                height: `300px`,
                boxShadow: `0px 0px 10px rgba(0, 0, 0, 0.5)`,
              }}
            ></div>
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl sm:text-7xl font-bold text-[#1d7442]">
              About Me
            </h1>
            <p className="py-4 max-w-[700px] text-1xl lg:text-2xl">
              Hi, I'm Thomas, a highly experienced ACT tutor with a passion for
              helping students reach their full potential. With a proven track
              record of success, I am dedicated to providing personalized
              tutoring sessions that cater to each student's unique learning
              style and needs.
            </p>
            <p className="py-4 max-w-[700px] text-1xl lg:text-2xl">
              I graduated from Brigham Young University (BYU) with a Bachelor's
              degree in Education, specializing in test preparation strategies
              and techniques, specifically for the ACT exam. I have since worked
              with numerous students, helping them improve their scores and gain
              admission to their dream colleges and universities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
