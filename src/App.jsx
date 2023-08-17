import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";

const App = () => {
  return (
    <div className="relative z-0 bg-neutral-700">
      <div className="content h-screen">
        <Navbar />
        <Hero />
        <About />
      </div>
    </div>
  );
};

export default App;
