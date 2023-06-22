import React, { useState } from "react";

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

    fetch("https://getform.io/f/0be4ed6d-4ad9-4d16-b3ff-664ee3656bba", {
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
    <div
      name="contact"
      id="contact"
      className="w-full h-screen flex justify-center items-center p-4"
    >
      <form
        onSubmit={handleSubmit}
        className="flex flex-col max-w-[600px] w-full bg-white rounded-lg shadow-lg p-8"
      >
        <div className="pb-8">
          <h1 className="text-4xl md:text-5xl font-bold border-b-4 border-[#1d7442] text-[#1d7442] mb-4">
            Contact
          </h1>
          <p className="text-black text-lg">
            Fill out the form below to get in contact with me.
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
          className="px-6 py-3 rounded-lg font-medium transition duration-300 hover:bg-[#34ae6b] bg-[#229354]"
          type="submit"
          disabled={submitting}
        >
          {submitting ? "Submitting..." : buttonText}
        </button>
      </form>
    </div>
  );
};

export default Contact;
