import React from 'react'

import { logo } from '../assets'

const Hero = () => {
  return (
  <section className="relative w-full h-screen mx-auto">
    <div className="absolute inset-0 top-[30px] max-w-6xl mx-auto flex flex-row gap-6 justify-center items-center">
        <div className="flex flex-col justify-center items-center">
            <img src={logo} alt="" className="stone-gradient p-[2px] rounded-full w-20 h-20 xs:w-20 xs:h-20 md:w-40 md:h-40 lg:w-60 lg:h-60 shadow-card" />
            <h1 className="font-black text-white lg:text-[65px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-5">
                Hi There, I'm&nbsp;
                <span className="bg-gradient-to-r from-stone-900 via-zinc-900 to-neutral-900 bg-clip-text text-transparent">
                    Aakash
                </span>
            </h1>
            <p className="flex flex-col justify-center items-center text-white mt-2 font-medium lg:text-[20px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]">
                <span>A Developer!</span>
                <span>Handling his journey in Full Stack developing world.</span>
            </p>
            <div className="flex flex-row gap-6 mt-5">
                <button className="button-resume bg-gradient-to-b from-sky-500 to-sky-700 text-white-200 font-medium text-2xl rounded-full py-1 px-6">Resume</button>
                <a href="#about"><button className="button-more text-white-200 font-medium text-2xl rounded-full py-2 px-6">More</button></a>
            </div>
        </div>
    </div>
  </section>
  )
}

export default Hero