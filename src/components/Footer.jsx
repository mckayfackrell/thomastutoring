import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-600 py-8">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="md:w-1/3">
            <h3 className="text-white text-xl mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/aboutme"
                  className="text-gray-300 hover:text-white transition duration-300"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  to="/resources"
                  className="text-gray-300 hover:text-white transition duration-300"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-gray-300 hover:text-white transition duration-300"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-white transition duration-300"
                >
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="https://forms.gle/jiJgreaXWRS3gjac8"
                  className="text-gray-300 hover:text-white transition duration-300"
                >
                  Request ACT Tutoring
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-300 text-sm">
            &copy; {new Date().getFullYear()} Thomas Fackrell Tutoring. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
