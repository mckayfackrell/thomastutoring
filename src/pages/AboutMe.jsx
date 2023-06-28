import React from "react";
import profile from "../assets/profile.jpeg";

const AboutMe = () => {
  return (
    <div className="w-full bg-gray-200">
      <div className="max-w-[1000px] mx-auto px-8 py-8">
        <div className="flex flex-col items-center justify-center">
          <div
            className="profile-image bg-cover bg-center bg-no-repeat w-48 h-48 rounded-full mb-8 mt-20"
            style={{ backgroundImage: `url(${profile})` }}
          ></div>
          <h1 className="text-4xl sm:text-7xl font-bold text-[#1d7442] text-center mb-8">
            About Me
          </h1>
          <div className="max-w-lg text-lg text-center mb-8">
            <p className="mb-4">
              Ever since high school, I have been a natural teacher. My first
              tutoring gig was in my senior year helping one of my friends with
              his calculus homework, making $30 an hour. I would have been happy
              helping him for free because of how much I loved the subject
              matter! I got so much satisfaction out of finding the knowledge
              gaps and explaining things clearly so my friends could finally
              make sense of what we were learning in school.
            </p>
            <p className="mb-4">
              Prior to this, I had taken the ACT in preparation for college
              applications. My first time taking the test, I didn't know much
              about the ACT, and effectively went in blind. I scored well my
              first time through, but I knew I could do better. I set a goal for
              myself to score a 34 (out of 36), and over the course of the next
              few months, I studied the material for the ACT independently,
              including taking practice tests and working through the solutions
              to the problems I had missed. It was this quiet, focused study
              time in my bedroom that made all the difference.
            </p>
            <p className="mb-4">
              When it came time for the test again, to my surprise, I had scored
              a 35! The test was a strategic endeavor and I had figured out how
              to approach it effectively, and the biggest secret was effective
              practice! This experience, and what I have learned about the test
              since then as an adult, are what I will be bringing to the
              tutoring sessions with your child.
            </p>
            <p className="mb-4">
              Owing to my ACT score, primarily, I was awarded a full tuition
              scholarship to Brigham Young University. The summer before my
              first semester, I worked as an instructor at Mathnasium, an after
              school tutoring center helping kids K-12 make sense of math. I had
              a great time relating with the kids there and helping them feel
              motivated and encouraged as I helped them understand what wasn't
              making sense in school.
            </p>
            <p className="mb-4">
              When I was in BYU, I also spent some time as a tutor at the Math
              Lab, tutoring my peers in their mathematics courses ranging from
              Algebra to Multivariate Calculus. I graduated from BYU in April
              2021 with a BS in Mathematics, with an emphasis in Applied
              Mathematics, and went on to join the corporate world as a data
              scientist.
            </p>
            <p className="mb-4">
              Two years later, feeling drained from lack of growth and meaning
              in my role as a data scientist, I stepped away from a six-figure
              salary to re-enter school and pursue my passion: teaching
              mathematics.
            </p>
            <p className="mb-4">
              I am enrolled in a Mathematics Master's program at Northern
              Arizona University which begins this August, where I will also be
              working as a graduate teaching assistant. I am running this
              tutoring business to supplement my income while in grad school.
              While the main focus will be ACT Prep, I can also tutor in
              mathematics and Python coding, based on my academic and
              professional experience.
            </p>
            <p className="mb-4">
              It's my pleasure to work with you and your child in reaching his
              or her goals, and I'm confident I can be of assistance in that
              endeavor. Please let me know how I can be of service to you!
              Thomas Fackrell
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
