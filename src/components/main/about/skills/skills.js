import React from "react";
import Skill from "./skill";
import Section from "../../section/section";
import "./skills.css";
import skills from "./skills.json";

const Skills = () => {
  return (
    <div className="skills">
      <Section title="Skills" isButtonVisible={false} />
      <div className="row">
        {skills.map((skill, index) => (
          <div className="col-md-3 col-sm-3 col-xs-12 item" key={index}>
            <Skill name={skill.tool} value={skill.rate} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Skills;
