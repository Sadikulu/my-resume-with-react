import React from "react";

const Project = ({ name, title, bir, iki, uc, dort, bes }) => {
  return (
    <div className="top-item resume-item">
      <h2>
        <i>{name}</i>
      </h2>
      <h4>{title}</h4>
      <p>{bir}</p>
      <p>{iki}</p>
      <p>{uc}</p>
      <p>{dort}</p>
      <p>{bes}</p>
    </div>
  );
};

export default Project;
