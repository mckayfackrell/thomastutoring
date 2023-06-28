import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-600 py-8">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="md:w-1/3">
            <h3 className="text-white text-xl mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/aboutme"
                  className="text-gray-300 hover:text-white transition duration-300"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="/resources"
                  className="text-gray-300 hover:text-white transition duration-300"
                >
                  Resources
                </a>
              </li>
              <li>
                <a
                  href="/faq"
                  className="text-gray-300 hover:text-white transition duration-300"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-300 hover:text-white transition duration-300"
                >
                  Contact
                </a>
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
