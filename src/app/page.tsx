import React from "react";
import Home from "../components/Home";
import About from "../components/About";
import Services from "../components/Services";
import Projects from "../components/Projects";

function page() {
  return (
    <>
      <Home />
      <About />
      <Services />
      <Projects />
    </>
  );
}

export default page;
