import React, { useRef, useState } from "react";

import { motion } from "framer-motion";
import { rightVariant } from "../motion/motion";
import SectionWrapper from "../hoc/SectionWrapper";

import { linkedin } from "../assets";
import { x } from "../assets";
import { instagram } from "../assets";
import System from "./System";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  return (
    <div className="flex flex-row mt-10 gap-[400px]">
      <div className="bg-neutral-950 w-[40%] p-10 rounded-2xl">
        <motion.div
          variants={rightVariant()}
          initial="hidden"
          whileInView="show"
        >
          <p className="sm:text-[18px] text-[14px] text-rose-600 uppercase tracking-wider">
            Get in touch
          </p>
          <p className="flex-row flex gap-3 mt-2">
            <motion.img
              whileHover={{ scale: 1.2 }}
              src={linkedin}
              alt=""
              className="w-[30px] h-[30px] rounded-2xl  cursor-pointer"
              onClick={() =>
                window.open("https://www.linkedin.com/in/aakash26")
              }
            />
            <motion.img
              whileHover={{ scale: 1.2 }}
              src={x}
              alt=""
              className="w-[30px] h-[30px] rounded-2xl cursor-pointer"
              onClick={() => window.open("https://twitter.com/aetherSky26")}
            />
            <motion.img
              whileHover={{ scale: 1.2 }}
              src={instagram}
              alt=""
              className="w-[30px] h-[30px] rounded-2xl  cursor-pointer"
              onClick={() => window.open("https://instagram.com/_aether26_")}
            />
          </p>
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Contact
          </h2>
        </motion.div>

        {/* form */}
        <form
          ref={formRef}
          // onSubmit={}
          className="mt-8 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-gray-200 font-medium mb-3">
              Your Name
            </span>
            <input 
              type="text"
              name="name"
              value={form.name}
              // onChange={}
              placeholder="What's your good name?"
              className="bg-gradient-to-r from-slate-700 to-zinc-900 py-4 px-6 placeholder:text-gray-400 text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-gray-200 font-medium mb-3">
              Your Email
            </span>
            <input 
              type="email"
              name="email"
              value={form.email}
              // onChange={}
              placeholder="What's your email?"
              className="bg-gradient-to-r from-slate-700 to-zinc-900 py-4 px-6 placeholder:text-gray-400 text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-gray-200 font-medium mb-3">
              Your Message
            </span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              // onChange={}
              placeholder="What do you want to say?"
              className="bg-gradient-to-r from-slate-700 to-zinc-900 py-4 px-6 placeholder:text-gray-400 text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
        </form>
      </div>
      <System />
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
