import React from "react";
import { motion } from "framer-motion";

import { python, cpp, html, css, javascript, react, node, sql, git, java, vscode, intellij, framer, tailwind, mongo } from "../assets";
import { rightVariant, leftVariant } from "../motion/motion";
import SectionWrapper from "../hoc/SectionWrapper";

const Tech = () => {
  return (
    <div>
      <motion.div variants={rightVariant()} initial="hidden" whileInView="show">
        <p className="sm:text-[18px] text-[14px] text-rose-600 uppercase tracking-wider">
          What I am familiar with
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Tech Stack
        </h2>
      </motion.div>

      <motion.p
        variants={leftVariant()}
        initial="hidden"
        whileInView="show"
        className="mt-6 sm:gap-10 text-[20px] max-w-3xl text-gray-400"
      >
        <div className="flex flex-col">
          <div className="flex flex-col">
            <h3>Frontend Technologies:</h3>
            <div className="flex flex-row gap-4 sm:gap-6">
              <motion.img whileHover={{scale: 1.3}} src={html} alt="" className="rounded-full w-10 h-10 mt-3 mb-8" />
              <motion.img whileHover={{scale: 1.3}} src={css} alt="" className="w-10 h-10 mt-3 mb-8" />
              <motion.img whileHover={{scale: 1.3}}
                src={javascript}
                alt=""
                className="rounded-lg w-10 h-10 mt-3 mb-8"
              />
              <motion.img whileHover={{scale: 1.3}} src={react} alt="" className="w-10 h-10 mt-3 mb-8" />
              <motion.img whileHover={{scale: 1.3}} src={tailwind} alt="" className="w-10 h-10 mt-3 mb-8" />
              <motion.img whileHover={{scale: 1.3}} src={framer} alt="" className="w-10 h-10 mt-3 mb-8" />
            </div>
          </div>
          <div className="flex flex-col">
            <h3>Server side Technologies:</h3>
            <div className="flex flex-row gap-4 sm:gap-6">
            <motion.img whileHover={{scale: 1.3}} src={node} alt="" className="rounded-full w-10 h-10 mt-3 mb-8" />
            <motion.img whileHover={{scale: 1.3}} src={python} alt="" className="w-10 h-10 mt-3 mb-8" />
            </div>
          </div>
          <div className="flex flex-col">
            <h3>Database:</h3>
            <div className="flex flex-row gap-4 sm:gap-6">
              <motion.img whileHover={{scale: 1.3}} src={sql} alt="" className="w-16 h-10 mt-3 mb-8" />
              <motion.img whileHover={{scale: 1.3}} src={mongo} alt="" className="rounded-full w-10 h-10 mt-3 mb-8" />
            </div>
          </div>
          <div className="flex flex-col">
            <h3>Version Control:</h3>
            <motion.img whileHover={{scale: 1.3}} src={git} alt="" className="w-10 h-10 mt-3 mb-8" />
          </div>
          <div className="flex flex-col">
            <h3>Other Programming Languages:</h3>
           <div className="flex flex-row gap-4 sm:gap-6">
           <motion.img whileHover={{scale: 1.3}} src={cpp} alt="" className="w-10 h-10 mt-3 mb-8" />
            <motion.img whileHover={{scale: 1.3}} src={java} alt="" className="w-10 h-10 mt-3 mb-8" />
           </div>
          </div>
          <div className="flex flex-col">
            <h3>Development IDEs:</h3>
            <div className="flex flex-row gap-4 sm:gap-6">
            <motion.img whileHover={{scale: 1.3}} src={vscode} alt="" className="w-10 h-10 mt-3" />
            <motion.img whileHover={{scale: 1.3}} src={intellij} alt="" className="w-10 h-10 mt-3" />
            </div>
          </div>
        </div>
      </motion.p>
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
