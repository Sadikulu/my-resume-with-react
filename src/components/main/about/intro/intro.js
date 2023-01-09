import React from "react";
import "./intro.css";

const Intro = () => {
  return (
    <div className="intro">
      <p>
        Hello, My name is Sadik Ulucay. I'm <b>Full Stack Java Developer</b>. I
        received Robotic Coding training when I was an Elementary School
        Teacher. The research I have done about robotic coding has opened the
        doors of the IT Industry for me. The work I have done in this industry
        has made me feel happy. I could only satisfy my curiosity with Java,
        which is an ocean. Then I started a new career in ICT for which I have
        always had a passion. I have completed an education and various training
        courses to specialize in Java technologies. I'm enthusiastic and a good
        team player. I'm highly motivated to grow as Java Developer and want to
        expand my knowledge and skills. I am not afraid to take on new
        challenges and don't hesitate to ask questions until I have got a clear
        picture.
      </p>

      <ul className="info">
        <li>
          <strong>Birthday:</strong> July 25, 1989
        </li>
        <li>
          <strong>Location:</strong> Nevsehir, Turkey
        </li>
        <li>
          <strong>Email:</strong> sadik.ulucay@hotmail.com
        </li>
        <li>
          <strong>Phone:</strong> +90 536 602 49 58
        </li>
      </ul>
    </div>
  );
};

export default Intro;
