import React from "react";
import { motion } from "framer-motion";

import { services } from "../constants";
import { fadeIn, hiddenVariant, leftVariant, rightVariant } from "../motion/motion";
import SectionWrapper from "../hoc/SectionWrapper";

const Card = ({index, title, icon}) => {
  return (
    <div className="w-[250px]">
      <motion.div
        variants={hiddenVariant()}
        initial="hidden"
        whileInView="show"
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.2 }}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card ml-10 sm:ml-0"
      >
        <div className="bg-neutral-900 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-gray-300 text-[20px] font-medium text-center">{title}</h3>
        </div>
      </motion.div>
    </div>
  )
}

const About = () => {
  return (
    <>
      <motion.div
        variants={rightVariant()}
        initial="hidden"
        whileInView="show"
      >
        <p className="sm:text-[18px] text-[14px] text-rose-600 uppercase tracking-wider">
          Introduction
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Overview
        </h2>
      </motion.div>
      
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        initial="hidden"
        whileInView="show"
        className="mt-4 text-[17px] max-w-3xl leading-[30px] text-gray-400"
      >
        Acquired a reliable set of skills in C/C++ and Python programming language with the core domain of Web Development. Also procured the skills of HTML, CSS, JS, PHP, Angular, React and Django framework with a basic knowledge of SQL and DevOps. Acquired a few trades in terms of my interests and endeavoring to explore more and grasp the hands-on experience of the developer's world!!!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <Card key={service.title} index={index} {...service} />
        ))}
      </div>

    </>
  );
};

export default SectionWrapper(About, "about");
