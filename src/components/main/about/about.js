import React from "react";
import Section from "../section/section";
import "./about.css";
import Intro from "./intro/intro";
import Skills from "./skills/skills";

const About = () => {
  return (
    <section id="about" className="about">
      <Section title="About Me" isButtonVisible={true} />
      <Intro />
      <Skills />
    </section>
  );
};

export default About;
