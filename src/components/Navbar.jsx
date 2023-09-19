import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { navLinks } from "../constants";

import { logo, menu, close } from "../assets";
import { github } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <nav className="bg-black w-full text-white flex items-center fixed px-6 sm:px-16 py-2 sm:py-5 z-10 nav-opacity">
        <div className="w-full flex justify-between items-center mx-auto max-w-7xl">
          <Link
            to="/" 
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
            className="flex items-center gap-2"
          >
            <img
              src={logo}
              alt="logo"
              className="w-8 h-8 object-contain rounded-full mr-3"
            />
            <p className="text-white sm:text-[20px] font-bold cursor-pointer flex">
              AAKASH
              <span className="sm:block hidden">
                &nbsp; | &nbsp;WEB DEVELOPER
              </span>
            </p>
          </Link>
          <ul className="list-none hidden sm:flex lg:gap-10 sm:gap-4">
            <li>
              <div
                onClick={() =>
                  window.open("https://www.github.com/Aakash265", "_blank")
                }
              >
                <motion.img
                  src={github}
                  className="text-[18px] font-medium cursor-pointer w-7 h-7 object-contain rounded-full"
                  alt="Github"
                  whileHover={{ scale: 1.4 }}
                  whileTap={{ scale: 0.8 }}
                />
              </div>
            </li>
            {navLinks.map((link) => (
              <motion.li
                key={link.id}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                onClick={() => setActive(link.title)}
                className={`${
                  active === link.title ? "text-neutral-400" : "text-zinc-400"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </motion.li>
            ))}
          </ul>
          {/* For mobile navigation */}
          <div className="sm:hidden flex flex-1 justify-end items-center mx-6">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } p-4 black-gradient absolute top-12 right-4 mx-4 my-2 min-w[140px] z-10 rounded-xl`}
            >
              <ul className="list-none flex justify-end items-start flex-col gap-4">
                <li>
                  <div
                    onClick={() =>
                      window.open("https://www.github.com/Aakash265", "_blank")
                    }
                  >
                    <p className="text-[16px] text-gray-500 font-medium cursor-pointer">
                      GitHub
                    </p>
                  </div>
                </li>
                {navLinks.map((link) => (
                  <li
                    key={link.id}
                    className={`${
                      active === link.title ? "text-white" : "text-gray-500"
                    } font-medium cursor-pointer text-[16px]`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(link.title);
                    }}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
