import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    // navbar
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#c5c5c5] text-black">
      {/* logo */}
      <div>
        <Link to="/">
          <img
            className="hover:cursor-pointer"
            src={Logo}
            alt="Logo"
            style={{ width: "60px" }}
          />
        </Link>
      </div>
      <div className="md:text-xl flex-1 px-4">
        <Link to="/">Thomas Fackrell Tutoring</Link>
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        <li className="hover:underline md:text-xl">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:underline md:text-xl">
          <Link to="/aboutme">About Me</Link>
        </li>
        <li className="hover:underline md:text-xl">
          <Link to="/resources">Resources</Link>
        </li>
        <li className="hover:underline md:text-xl">
          <Link to="/faq">FAQ</Link>
        </li>
        <li className="hover:underline md:text-xl">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="hover:underline md:text-xl">
          <Link to="https://forms.gle/jiJgreaXWRS3gjac8">
            Request ACT Tutoring
          </Link>
        </li>
      </ul>

      {/* hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? (
          <FaBars className="text-2xl hover:cursor-pointer" />
        ) : (
          <FaTimes className="text-2xl hover:cursor-pointer" />
        )}
      </div>

      {/* mobile menu */}
      <ul
        onClick={handleClick}
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#c5c5c5] flex flex-col justify-center items-center transition-opacity duration-500"
        }
        style={{ opacity: nav ? 1 : 0 }}
      >
        <li className="py-3 text-3xl md:text-4xl hover:underline">
          <Link onClick={handleClick} to="/">
            Home
          </Link>
        </li>
        <li className="py-3 text-3xl md:text-4xl hover:underline">
          <Link onClick={handleClick} to="/aboutme">
            About Me
          </Link>
        </li>
        <li className="py-3 text-3xl md:text-4xl hover:underline">
          <Link onClick={handleClick} to="/resources">
            Resources
          </Link>
        </li>
        <li className="py-3 text-3xl md:text-4xl hover:underline">
          <Link onClick={handleClick} to="/faq">
            FAQ
          </Link>
        </li>
        <li className="py-3 text-3xl md:text-4xl hover:underline">
          <Link
            onClick={handleClick}
            to="contact"
            smooth={true}
            duration={500}
            offset={-80}
          >
            Contact
          </Link>
        </li>
        <li className="py-3 text-3xl md:text-4xl hover:underline">
          <Link
            onClick={handleClick}
            to="https://forms.gle/jiJgreaXWRS3gjac8"
            smooth={true}
            duration={500}
            offset={-80}
          >
            Request ACT Tutoring
          </Link>
        </li>
      </ul>

      {/* footer */}
      <footer className="fixed bottom-0 left-0 z-20 w-full p-2 bg-[#c5c5c5]">
        <span className="text-black sm:text-center">
          © 2023 Thomas Fackrell
        </span>
      </footer>
    </div>
  );
};

export default Navbar;
