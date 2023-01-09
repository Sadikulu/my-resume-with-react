import React from "react";

const Experience = ({
  company,
  title,
  date,
  location,
  bir,
  iki,
  uc,
  dort,
  bes,
}) => {
  return (
    <div class="top-item resume-item">
      <h2>
        <i>{company}</i>
      </h2>
      <h4>{title}</h4>
      <span>
        {date} | {location}
      </span>
      <p>
        <ul>
          <li>{bir}</li>
          <li>{iki}</li>
          <li>{uc}</li>
          <li>{dort}</li>
          <li>{bes}</li>
        </ul>
      </p>
    </div>
  );
};

export default Experience;
