import React from "react";

const Education = ({ degree, edu, start, end, branch }) => {
  return (
    <div class="col-md-12 col-sm-12 col-xs-12">
      <div class="top-item resume-item">
        <h2>
          {degree}, <i>{edu}</i>
        </h2>
        <span>
          {start} / {end}
        </span>
        <p>{branch}</p>
      </div>
    </div>
  );
};
export default Education;
