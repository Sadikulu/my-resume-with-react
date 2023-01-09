import React from "react";
import Section from "../../section/section";
import Project from "./project";
import "../resume.css";
import projects from "./projects.json";

const Projects = () => {
  return (
    <section id="projects" class="resume">
      <Section title="Projects" isButtonVisible={false} />
      <div class="row">
        {projects.map((prj, i) => (
          <div class="col-md-12 col-sm-12 col-xs-12" key={i}>
            <Project {...prj} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
