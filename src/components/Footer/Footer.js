import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-100 py-8 mt-12 font-poppins">
      <div className="container mx-auto p-8 flex flex-col md:flex-row justify-between items-center">
        {/* Logo and Description */}
        <div className="mb-6  md:mb-0 md:w-1/3">
          <img src="/assets/logo_white.png" alt="Logo" className="h-12 mb-2 pointer-events-none" />
          <p className="text-gray-400 text-sm text-left md:w-[80%]">
            Providing comprehensive wellness solutions through personal, group, and online therapy sessions. Start your wellness journey with us today.
          </p>
        </div>
        
        {/* Navigation Links */}
        <div className="flex justify-center flex-col md:flex-row items-center md:w-1/3">
          <Link to="/" className="text-gray-400 hover:text-gray-100 mx-2">Home</Link>
          <Link to="/services" className="text-gray-400 hover:text-gray-100 mx-2">Services</Link>
          <Link to="/contact" className="text-gray-400 hover:text-gray-100 mx-2">Contact</Link>
          <Link to="/about" className="text-gray-400 hover:text-gray-100 mx-2">About</Link>
        </div>

        {/* Contact and Social Links */}
        <div className="flex flex-col mt-4 md:mt-0 items-center md:w-1/3">
          <div className="flex space-x-4 mb-4">
            <FaFacebook className="text-xl hover:text-gray-400" />
            <FaTwitter className="text-xl hover:text-gray-400" />
            <FaInstagram className="text-xl hover:text-gray-400" />
          </div>
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} WellBeing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
