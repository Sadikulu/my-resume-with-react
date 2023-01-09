import React from "react";
import Section from "../../section/section";
import Language from "./language";
import "../resume.css";
import languages from "./languages.json";

const Languages = () => {
  return (
    <section id="languages" class="resume">
      <Section title="Languages" isButtonVisible={false} />
      <div class="row">
        {languages.map((lng, i) => (
          <div class="col-md-12 col-sm-12 col-xs-12" key={i}>
            <Language {...lng} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Languages;
