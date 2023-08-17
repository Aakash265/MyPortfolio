import React from "react";
import { motion, useScroll } from "framer-motion";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";

const App = () => {
    const { scrollYProgress } = useScroll();
  return (
    <div className="relative z-0 bg-neutral-700">
      <div className="content h-screen">
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
        <Navbar />
        <Hero />
        <About />
      </div>
    </div>
  );
};

export default App;
