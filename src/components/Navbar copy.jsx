import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    // navbar
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#546f7a] text-black">
      {/* logo */}
      <div>
        <Link to="home" smooth={true} duration={500}>
          <img
            className="hover:cursor-pointer"
            src={Logo}
            alt="Logo"
            style={{ width: "60px" }}
          />
        </Link>
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        <li className="hover:underline md:text-xl">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="hover:underline md:text-xl">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="hover:underline md:text-xl">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="hover:underline md:text-xl">
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className="hover:underline md:text-xl">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile menu */}
      <ul
        onClick={handleClick}
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#546f7a] flex flex-col justify-center items-center"
        }
      >
        <li className="py-3 text-2xl md:text-4xl hover:underline">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-3 text-2xl md:text-4xl hover:underline">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-3 text-2xl md:text-4xl hover:underline">
          <Link
            onClick={handleClick}
            to="skills"
            smooth={true}
            duration={500}
            offset={-80}
          >
            Skills
          </Link>
        </li>
        <li className="py-3 text-2xl md:text-4xl hover:underline">
          <Link
            onClick={handleClick}
            to="projects"
            smooth={true}
            duration={500}
            offset={-80}
          >
            Projects
          </Link>
        </li>
        <li className="py-3 text-2xl md:text-4xl hover:underline">
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
        <li className="py-3 text-2xl md:text-4xl hover:underline">
          <a href="https://www.linkedin.com/in/mckay-fackrell-187066159/">
            <FaLinkedin size={30} />
          </a>
        </li>
        <li className="py-3 text-2xl md:text-4xl hover:underline">
          <a href="https://github.com/mckayfackrell">
            <FaGithub size={30} />
          </a>
        </li>
        <li className="py-3 text-2xl md:text-4xl hover:underline">
          <a
            className="flex justify-between items-center w-full text-black"
            href="https://mckayfackrell.github.io/mckay-portfolio/resume.pdf"
          >
            <BsFillPersonLinesFill size={30} />
          </a>
        </li>
      </ul>

      {/* social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#5f6f3a]">
            <a
              className="flex justify-between items-center w-full text-black"
              href="https://www.linkedin.com/in/mckay-fackrell-187066159/"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#5f6f3a]">
            <a
              className="flex justify-between items-center w-full text-black"
              href="https://github.com/mckayfackrell"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#5f6f3a]">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="flex justify-between items-center w-full text-black"
            >
              Email <HiOutlineMail size={30} />
            </Link>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#5f6f3a]">
            <a
              className="flex justify-between items-center w-full text-black"
              href="https://mckayfackrell.github.io/mckay-portfolio/resume.pdf"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>

      {/* footer */}
      <footer class="fixed bottom-0 left-0 z-20 w-full p-2 bg-[#546f7a] border-gray-200 shadow md:flex md:items-center md:justify-between md:p-3">
        <span class="text-sm text-black sm:text-center dark:black">
          © 2023{" "}
          <a
            href="https://github.com/mckayfackrell"
            class="hover:underline hover:cursor-pointer"
          >
            McKay Fackrell
          </a>
        </span>
      </footer>
    </div>
  );
};

export default Navbar;
