import React from "react";
import "./main.css";
import About from "./about/about";
import Experiences from "./resume/experience/experiences";
import Educations from "./resume/education/educations";
import Projects from "./resume/project/projects";
import Languages from "./resume/languagess/languages";

const Main = () => {
  return (
    <div class="main-content pull-right">
      <About />
      <Experiences />
      <Projects />
      <Educations />
      <Languages />
    </div>
  );
};

export default Main;
