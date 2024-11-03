import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import { RxDashboard } from "react-icons/rx";
import { Link } from 'react-router-dom';
import clsx from "clsx";
import { checkAuth } from '../../CheckAuth';

function Header() {
  const [isSideMenuOpen, setMenu] = useState(false);

  const navlinks = [
    {
      label: "Home",
      link: "/"
    },
    {
      label: "About",
      link: "/about"
    },
    {
      label: "Services",
      link: "/services"
    },
    {
      label: "Experts",
      link: "/experts"
    },
    {
      label: "Contact",
      link: "/contact"
    }
  ];

  return (
    <main>
      <nav className="header font-poppins flex justify-between sticky top-0 px-8 md:px-16 items-center py-6 bg-white shadow">
        <div className="flex items-center gap-8">
          <section className="flex items-center gap-4">
            {/* menu */}
            <FiMenu
              onClick={() => setMenu(true)}
              className="text-3xl cursor-pointer lg:hidden"
            />
            {/* logo */}
            <Link to="/" className="text-4xl font-mono">
              <img src="/assets/logo_transparent.png" className="w-32 pointer-events-none" alt="" />
            </Link>
          </section>
          {navlinks.map((link, index) => (
            <Link
              key={index}
              to={link.link}
              className="hidden lg:block text-gray-500 hover:text-black"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* sidebar mobile menu */}
        <div
          className={clsx(
            "fixed h-full w-screen lg:hidden bg-black/50 backdrop-blur-sm top-0 right-0 -translate-x-full transition-all",
            isSideMenuOpen && "translate-x-0"
          )}
        >
          <section className="text-black bg-white flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 w-56 flex">
            <IoCloseOutline
              onClick={() => setMenu(false)}
              className="mt-0 mb-8 text-3xl cursor-pointer"
            />
            {navlinks.map((link, index) => (
              <Link key={index} to={link.link} className="text-lg text-left">
                {link.label}
              </Link>
            ))}
          </section>
        </div>

        {/* last section */}
        <section className="flex items-center gap-4 relative">
          {
            !checkAuth() 
            ? 
            <Link to="/login" className="relative group">
              <FaRegUserCircle className="text-3xl cursor-pointer" />
              <span className="absolute left-1/2 transform -translate-x-1/2 top-full mt-3 hidden group-hover:block bg-black text-white text-xs font-semibold py-1 px-2 rounded">
                Login
              </span>
            </Link>
            :
            <>
              <Link to="/dashboard" className="relative group">
                <RxDashboard className="text-3xl cursor-pointer" />
                <span className="absolute left-1/2 transform -translate-x-1/2 top-full mt-3 hidden group-hover:block bg-black text-white text-xs font-semibold py-1 px-2 rounded">
                  Dashboard
                </span>
              </Link>
              <Link to="/logout" className="relative group">
                <IoMdLogOut className="text-3xl cursor-pointer" />
                <span className="absolute left-1/2 transform -translate-x-1/2 top-full mt-3 hidden group-hover:block bg-black text-white text-xs font-semibold py-1 px-2 rounded">
                  Logout
                </span>
              </Link>
            </>
          }
        </section>
      </nav>
      <hr />
    </main>
  );
}

export default Header;
