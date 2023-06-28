import React, { useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);
    setSubmitSuccess(false);

    fetch("https://getform.io/f/92b00edb-a545-4a42-9c7a-6bf6f5b110ef", {
      method: "POST",
      body: new FormData(event.target),
    })
      .then((response) => {
        if (response.ok) {
          setSubmitSuccess(true);
          setName("");
          setEmail("");
          setMessage("");
        } else {
          setSubmitSuccess(false);
        }
        setSubmitting(false);
      })
      .catch(() => {
        setSubmitting(false);
        setSubmitSuccess(false);
      });
  };

  const buttonText = submitSuccess
    ? "Success!"
    : submitSuccess === false
    ? "Submit"
    : "Error";

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center p-4 bg-gray-200">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col max-w-[600px] w-full bg-white rounded-lg shadow-lg p-8 mb-4 mt-20"
      >
        <div className="pb-8">
          <h1 className="text-4xl md:text-5xl font-bold border-b-4 border-[#1d7442] text-[#1d7442] mb-4">
            Contact
          </h1>
          <p className="text-black text-lg">
            Do you have any questions or special tutoring requests?
          </p>
        </div>
        <input
          className="bg-gray-100 p-3 mb-4 rounded-lg"
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={handleNameChange}
          required
        />
        <input
          className="bg-gray-100 p-3 mb-4 rounded-lg"
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <textarea
          className="bg-gray-100 p-3 mb-4 rounded-lg"
          name="message"
          rows="6"
          placeholder="Message"
          value={message}
          onChange={handleMessageChange}
          required
        ></textarea>
        <button
          className="px-6 py-3 rounded-lg font-medium transition duration-300 hover:bg-[#34ae6b] bg-[#229354] text-white"
          type="submit"
          disabled={submitting}
        >
          {submitting ? "Submitting..." : buttonText}
        </button>
      </form>

      <div className="mt-10 flex flex-col items-center">
        <p className="mb-2">Looking for ACT test prep?</p>
        <Link to="https://forms.gle/jiJgreaXWRS3gjac8">
        <button
            id="request"
            className="px-6 py-3 rounded-lg bg-[#229354] text-white border-[#229354] border-2 flex items-center hover:bg-[#34ae6b] hover:border-[#34ae6b] hover:transform hover:scale-105 transition duration-300"
          >
            Request ACT Tutoring
            <span>
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
