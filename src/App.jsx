import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Tech from "./components/Tech";

const App = () => {
  return (
    <div className="relative z-0">
      <div className="w-full h-screen bg-main bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Tech />
    </div>
  );
};

export default App;
