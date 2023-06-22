import React from "react";

const StudentResources = () => {
  const resources = [
    {
      title: "ACT Prep Book",
      description: "A comprehensive guide for ACT preparation.",
      link: "https://www.example.com/act-prep-book",
    },
    {
      title: "Khan Academy - ACT Prep",
      description: "Free online resources for ACT preparation.",
      link: "https://www.khanacademy.org/test-prep/act",
    },
    {
      title: "Official ACT Practice Tests",
      description: "Access official ACT practice tests for practice.",
      link: "https://www.example.com/official-act-practice-tests",
    },
  ];

  return (
    <div className="w-full h-screen bg-[#FFFFFF]">
      <div className="max-w-[700px] mx-auto px-8 flex flex-col justify-center h-full">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#1d7442] my-8">
          Student Resources
        </h1>
        <ul className="py-4">
          {resources.map((resource, index) => (
            <li key={index} className="py-2">
              <a
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 font-medium text-lg"
              >
                {resource.title}
              </a>
              <p className="text-gray-600 text-base">{resource.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StudentResources;
