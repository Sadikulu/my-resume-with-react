import React from "react";
import Section from "../../section/section";
import Experience from "./experience";
import "../resume.css";
import experiences from "./experiences.json";

const Experiences = () => {
  return (
    <section id="experience" class="resume">
      <Section title="Experiences" isButtonVisible={false} />
      <div class="row">
        {experiences.map((exp, i) => (
          <div class="col-md-12 col-sm-12 col-xs-12" key={i}>
            <Experience {...exp} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experiences;
