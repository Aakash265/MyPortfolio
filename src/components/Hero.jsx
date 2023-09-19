import React from "react";
import { motion } from "framer-motion";

import { flag, location } from "../assets";
import { rightVariant } from "../motion/motion";

const Hero = () => {
  return (
    <section className="relative w-full h-[70%] mx-auto flex flex-row mb-6 sm:mb-2 xs:mb-40">
      <div className="absolute inset-0 max-w-7xl mx-auto flex flex-row gap-6 items-start top-[90px] sm:top-[120px]">
        <motion.div className="flex flex-col" initial="hidden" whileInView="show" transition={{ type: "spring" }} variants={rightVariant()}>
          <div className="flex flex-row max-w-7xl px-6 sm:px-2 xs:px-10">
            <motion.img
              src={location}
              alt="Location_symbol"
              className="w-7 h-7"
              whileHover={{ scale: 1.3 }}
            />
            <p className="flex-row font-medium text-gray-100 text-[20px] ml-2">
            <b>भारत</b>&nbsp;(India),&nbsp;
            </p>
            <img src={flag} alt="Indian_flag" className="w-6 h-6 mt-[3px]" />
          </div>
          <div className="flex flex-col px-6 sm:px-2 xs:px-10">
            <h1 className="font-lg text-gray-200 lg:text-[58px] sm:text-[40px] xs:text-[30px] text-[30px] lg:leading-[80px] mt-5">
              Hi There,
            </h1>
            <div className="flex flex-row">
              <h1 className="font-lg text-gray-200 lg:text-[58px] sm:text-[40px] xs:text-[30px] text-[30px] lg:leading-[80px]">
                I'm&nbsp;
                <span className="text-red-500 underline sm:underline-offset-8 underline-offset-4 font-extrabold lg:text-[58px] sm:text-[50px] xs:text-[40px] text-[30px] lg:leading-[80px]">
                  Aakash
                </span>
                &nbsp;- A passionate Web Developer!
                <h1 className="text-gray-200 font-normal lg:text-[30px] sm:text-[20px] xs:text-[15px] text-[20px] lg:leading-[50px]">
                  Handling his journey in the Full Stack developing world.
                </h1>
              </h1>
            </div>
          </div>
          <div className="flex flex-row gap-3 sm:gap-6 mt-5 px-6 sm:px-2">
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              className="button-resume bg-gradient-to-r from-rose-500 to-red-800 text-white font-medium text-md sm:text-2xl rounded-full py-2 px-6"
            >
              Resume
            </motion.button>
            <a href="#about">
              <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                className="button-more sm:text-red-400 text-white font-medium text-md sm:text-2xl rounded-full py-2 px-6"
              >
                More
              </motion.button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
