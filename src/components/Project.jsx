import React from "react";
import { motion } from "framer-motion";

import { rightVariant, fadeIn, hiddenVariant } from "../motion/motion";
import { projects } from "../constants";
import { github, githubLink } from "../assets";
import SectionWrapper from "../hoc/SectionWrapper";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div
      variants={hiddenVariant()}
      initial="hidden"
      whileInView="show"
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
    >
      <div className="bg-gradient-to-b from-neutral-900 via-red-900 to-neutral-900 p-5 rounded-2xl sm:w-[360px] w-full shadow-card">
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={githubLink}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[25px]">{name}</h3>
          <p className="mt-2 text-gray-400 text-[15px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[15px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Project = () => {
  return (
    <div>
      <div>
        <motion.div
          variants={rightVariant()}
          initial="hidden"
          whileInView="show"
        >
          <p className="sm:text-[18px] text-[14px] text-rose-600 uppercase tracking-wider">
            My Works
          </p>
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Projects
          </h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          initial="hidden"
          whileInView="show"
          className="mt-4 text-[17px] max-w-3xl leading-[30px] text-gray-400"
        >
          Following are the projects which represnt my skills and experience as
          these projects reflect my ability to solve complex problems as well as
          work with different technologies.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Project, "projects");
