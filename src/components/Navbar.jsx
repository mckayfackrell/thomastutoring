import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    // navbar
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-gray-600 text-white">
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
      <div className="md:text-xl lg:text-2xl flex-1 px-4">
        <Link to="/">Thomas Fackrell Tutoring</Link>
      </div>

      {/* menu */}
      <ul className="hidden lg:flex">
        <li className="hover:underline md:text-1xl">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:underline md:text-1xl">
          <Link to="/aboutme">About Me</Link>
        </li>
        <li className="hover:underline md:text-1xl">
          <Link to="/resources">Resources</Link>
        </li>
        <li className="hover:underline md:text-1xl">
          <Link to="/faq">FAQ</Link>
        </li>
        <li className="hover:underline md:text-1xl">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="hover:underline md:text-1xl">
          <Link to="https://forms.gle/jiJgreaXWRS3gjac8">
            Request ACT Tutoring
          </Link>
        </li>
      </ul>

      {/* hamburger */}
      <div onClick={handleClick} className="lg:hidden z-10">
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
            : "absolute top-0 left-0 w-full h- bg-gray-600 flex flex-col justify-center items-left transition-opacity duration-500 mt-20"
        }
        style={{ opacity: nav ? 1 : 0 }}
      >
        <li className="py-3 text-xl md:text-3xl hover:underline">
          <Link onClick={handleClick} to="/">
            Home
          </Link>
        </li>
        <li className="py-3 text-xl md:text-3xl hover:underline">
          <Link onClick={handleClick} to="/aboutme">
            About Me
          </Link>
        </li>
        <li className="py-3 text-xl md:text-3xl hover:underline">
          <Link onClick={handleClick} to="/resources">
            Resources
          </Link>
        </li>
        <li className="py-3 text-xl md:text-3xl hover:underline">
          <Link onClick={handleClick} to="/faq">
            FAQ
          </Link>
        </li>
        <li className="py-3 text-xl md:text-3xl hover:underline">
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
        <li className="py-3 text-xl md:text-3xl hover:underline">
          <Link onClick={handleClick} to="https://forms.gle/jiJgreaXWRS3gjac8">
            Request ACT Tutoring
          </Link>
        </li>
        <br></br>
      </ul>
    </div>
  );
};

export default Navbar;
