import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
          <li><a href="#home" className="hover:text-blue-200 transition">Home</a></li>
          <li><a href="#about" className="hover:text-blue-200 transition">About</a></li>
          <li><a href="#services" className="hover:text-blue-200 transition">Services</a></li>
          <li><a href="#portfolio" className="hover:text-blue-200 transition">Portfolio</a></li>
          <li><a href="#testimonials" className="hover:text-blue-200 transition">Testimonials</a></li>
          <li><a href="#connect" className="hover:text-blue-200 transition">Let'sContact</a></li>
        </ul>

        {/* Social Icons */}
        <div className="flex gap-4">
          <a href="https://www.facebook.com/pelumi.akinyemi.3720" target="_blank" rel="noopener noreferrer" className="bg-blue-900 p-3 rounded-full hover:bg-blue-700 transition">
            <FaFacebookF />
          </a>
          <a href="https://x.com/akinyemi_p65911?s=09" target="_blank" rel="noopener noreferrer" className="bg-blue-900 p-3 rounded-full hover:bg-blue-700 transition">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/pels_creative?igsh=dG42bXJidHE3cGl1" target="_blank" rel="noopener noreferrer" className="bg-blue-900 p-3 rounded-full hover:bg-blue-700 transition">
            <FaInstagram />
          </a>
          <a href="https://github.com/Pelcreative" target="_blank" rel="noopener noreferrer" className="bg-blue-900 p-3 rounded-full hover:bg-blue-700 transition">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/akinyemi-pelumi-3bab47304" target="_blank" rel="noopener noreferrer" className="bg-blue-900 p-3 rounded-full hover:bg-blue-700 transition">
            <FaLinkedin />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-blue-200 mt-4">
          &copy; {new Date().getFullYear()} Pel's creative. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
