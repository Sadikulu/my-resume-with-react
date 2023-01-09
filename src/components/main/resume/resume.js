import React from "react";
import "./resume.css";
import Experience from "./experience/experience";
import Education from "./education/education";

const Resume = () => {
  return (
    <>
      <Experience />
      <Education />
    </>
  );
};

export default Resume;
