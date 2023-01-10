import React from "react";
import Skill from "./skill";
import Section from "../../section/section";
import "./skills.css";
import backs from "./back.json";
import fronts from "./front.json";
import Dev from "./dev";

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <Section title="Skills" isButtonVisible={false} />
      <div className="row">
        <Dev dev="Backend" />
        {backs.map((skill, index) => (
          <div className="col-md-3 col-sm-3 col-xs-12 item" key={index}>
            <Skill name={skill.tool} />
          </div>
        ))}
      </div>
      <div className="row front">
        <Dev dev="Frontend" />
        {fronts.map((skill, index) => (
          <div className="col-md-3 col-sm-3 col-xs-12 item" key={index}>
            <Skill name={skill.tool} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Skills;
