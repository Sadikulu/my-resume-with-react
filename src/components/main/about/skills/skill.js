import React from "react";

const Skill = ({ name }) => {
  return (
    <>
      <div className="skill-info clearfix">
        <h3 className="pull-left">{name}</h3>
      </div>
    </>
  );
};
export default Skill;
