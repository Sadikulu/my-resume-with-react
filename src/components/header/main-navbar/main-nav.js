import React from "react";
import "./main-nav.css";

const MainNav = () => {
  return (
    <nav className="main-nav">
      <ul className="navigation">
        <li>
          <a href="#about">About Me</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#experience">Expereince</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
        <li>
          <a href="#languages">Languages</a>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
