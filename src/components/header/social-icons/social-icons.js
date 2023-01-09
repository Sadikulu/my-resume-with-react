import React from "react";
import "./social-icons.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className="social-icons">
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/sadik-ulucay/">
            <i>
              <FaLinkedin />
            </i>
          </a>
        </li>
        <li>
          <a href="https://github.com/Sadikulu">
            <i>
              <FaGithub />
            </i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialIcons;
