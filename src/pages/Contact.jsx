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
      className="w-full h-screen bg-[#7b904b] flex justify-center items-center p-4"
    >
      <form
        onSubmit={handleSubmit}
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-2xl md:text-4xl font-bold inline border-b-4 border-black text-white">
            Contact
          </p>
          <p className="text-black py-4 md:text-xl lg:text-2xl">
            {" "}
            Fill out the form here (URL) Submit the form below to get in contact
            with me
          </p>
        </div>
        <input
          className="bg-white p-2"
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={handleNameChange}
          required
        />
        <input
          className="my-4 p-2 bg-white"
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <textarea
          className="bg-white p-2"
          name="message"
          rows="10"
          placeholder="Message"
          value={message}
          onChange={handleMessageChange}
          required
        ></textarea>
        <button
          className="text-black group bg-[#5f6f3a] border-[#5f6f3a] border-2 px-6 py-3 hover:border-black my-8 mx-auto flex items-center"
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
