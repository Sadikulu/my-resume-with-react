import React from "react";
import Section from "../../section/section";
import Education from "./education";
import "../resume.css";
import educations from "./educations.json";

const Educations = () => {
  return (
    <section id="education" class="resume">
      <Section title="Education" isButtonVisible={false} />
      <div class="row">
        {educations.map((edu, i) => (
          <div class="col-md-12 col-sm-12 col-xs-12" key={i}>
            <Education {...edu} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Educations;
