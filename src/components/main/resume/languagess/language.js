import React from "react";

const Language = ({ name, degree }) => {
  return (
    <div class="col-md-12 col-sm-12 col-xs-12">
      <div class="top-item resume-item">
        <h2>{name}</h2>
        <b>:</b>
        <p>{degree}</p>
      </div>
    </div>
  );
};
export default Language;
