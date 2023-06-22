import React from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "What is the cost of your tutoring services?",
      answer:
        "Please contact me directly for information about the cost of my tutoring services.",
    },
    {
      question: "How long are the tutoring sessions?",
      answer: "Each tutoring session typically lasts one hour.",
    },
    {
      question: "Do you offer group tutoring sessions?",
      answer:
        "Yes, I offer group tutoring sessions upon request. Please contact me for more information.",
    },
    // Add more FAQ items here
  ];

  return (
    <div className="w-full h-screen bg-[#FFFFFF]">
      <div className="max-w-[700px] mx-auto px-8 flex flex-col justify-center h-full">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#1d7442] my-8">
          Frequently Asked Questions
        </h1>
        <ul className="py-4">
          {faqs.map((faq, index) => (
            <li key={index} className="py-4">
              <h3 className="text-xl font-semibold">{faq.question}</h3>
              <p className="text-gray-600 mt-2">{faq.answer}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FAQ;
