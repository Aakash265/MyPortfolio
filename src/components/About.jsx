import React from "react";
import { motion } from "framer-motion";

import { paraVariant, textVariant } from "../motion/motion";

const About = () => {
  return (
    <div className="absolute w-full mx-auto bg-neutral-900 mt-60">
      <div>
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        className="max-w-7xl mx-auto relative z-0 sm:mt-20 px-10"
      >
        <p className="mt-10 sm:text-[18px] text-[14px] text-red-600 uppercase">
          Introduction
        </p>
        <h2 className="text-gray-200 font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Overview.
        </h2>
      </motion.div>
      <motion.p
        variants={paraVariant()}
        initial="hidden"
        whileInView="show"
        className="max-w-3xl mx-auto text-lg px-10 mt-4 leading-[30px] z-0 sm:mt-5 text-gray-400"
      >
        Acquired a reliable set of skills in C/C++ and Python programming
        language with the core domain of Web Development. Also procured the
        skills of HTML, CSS, JS, PHP, Angular, React and Django framework with a
        basic knowledge of SQL and DevOps. Acquired a few trades in terms of my
        interests and endeavoring to explore more and grasp the hands-on
        experience of the developer's world!!!
      </motion.p>
      </div>
    </div>
  );
};

export default About;
