import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { navLinks } from "../constants";
import { urls } from "../constants";

import { logo, menu } from "../assets";
import { github } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [top, setTop] = useState("0px");
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <nav className="bg-white w-full text-white flex items-center fixed px-6 sm:px-16 py-2 sm:py-5 z-10">
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
            <p className="text-black sm:text-[20px] font-bold cursor-pointer flex">
              AAKASH
              <span className="sm:block hidden">
                &nbsp; | &nbsp;WEB DEVELOPER
              </span>
            </p>
          </Link>
          <ul className="list-none hidden sm:flex lg:gap-10 sm:gap-4">
            {navLinks.map((link) => (
              <motion.li
                key={link.id}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                onClick={() => setActive(link.title)}
                className={`${
                  active === link.title ? "text-neutral-900" : "text-zinc-700"
                } hover:text-black text-[18px] font-medium cursor-pointer`}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </motion.li>
            ))}
            <li>
              <a href="https://github.com/Aakash265">
                <motion.img
                  src={github}
                  className="on-hover text-[18px] font-medium cursor-pointer w-7 h-7 object-contain rounded-full"
                  alt="Github"
                  whileHover={{ scale: 1.4 }}
                  whileTap={{ scale: 0.8 }}
                />
              </a>
            </li>
          </ul>
          {/* For mobile navigation */}
          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl`}
            >
              <ul className="list-none flex justify-end items-start flex-col gap-4">
                {navLinks.map((link) => (
                  <li
                    key={link.id}
                    className={`${
                      active === link.title ? "text-white" : "text-secondary"
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
