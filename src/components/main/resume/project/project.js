import React from "react";
import { FiExternalLink } from "react-icons/fi";

const Project = ({ link, name, title, bir, iki, uc, dort, bes }) => {
  return (
    <div className="top-item resume-item">
      <a href={link} target="_blank">
        <h2>
          <i>{name}</i>
        </h2>
        <FiExternalLink />
      </a>
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
