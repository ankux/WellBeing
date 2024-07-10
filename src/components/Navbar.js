import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoCloseOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import clsx from "clsx";

function Navbar() {
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
      label: "Contact",
      link: "/contact"
    }
  ];

  return (
    <main>
      <nav className="header font-poppins flex justify-between sticky top-0 px-8 items-center py-6">
        <div className="flex items-center gap-8">
          <section className="flex items-center gap-4">
            {/* menu */}
            <FiMenu
              onClick={() => setMenu(true)}
              className="text-3xl cursor-pointer lg:hidden"
            />
            {/* logo */}
            <a href="/" className="text-4xl font-mono">
              <img src="/assets/logo_transparent.png" className="w-32 pointer-events-none" alt="" />
            </a>
          </section>
          {navlinks.map((link, index) => (
            <a
              key={index}
              href={link.link}
              className="hidden lg:block text-gray-500 hover:text-black"
            >
              {link.label}
            </a>
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
              <a key={index} href={link.link} className="text-lg text-left">
                {link.label}
              </a>
            ))}
          </section>
        </div>

        {/* last section */}
        <section className="flex items-center gap-4">
          {/* cart icon */}
          <AiOutlineShoppingCart className="text-3xl" />
          <FaRegUserCircle className="text-3xl" />
          {/* avatar img */}
        </section>
      </nav>
      <hr className=" " />
    </main>
  );
}

export default Navbar;