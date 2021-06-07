import React from "react";
import "./css/About.css";
import photo from "../img/pic1.jpg";

export default function About() {
  return (
    <div className="about-container">
      <div className="container about">
        <div className="row">
          <div className="col about-picture">
            <img src={photo} alt="profile" className="profile-img" />
          </div>
          <div className="col">
            <h3>More about me</h3>
            <p>
              To put it simply, Morgan is a rebel. Growing up, Morgan could
              always be found wherever there was trouble. She constantly
              questioned authority and refused to follow the restrictive rules
              set upon her. Left unfulfilled from boring classwork and a
              redundant routine, Morgan began to spend a majority of her time on
              the internet when she was only in grade school. When the computer
              booted up, 10-year-old Morgan knew her opportunities were endless,
              for the world was quite literally in her hands.
            </p>
            <p>
              To put it simply, Morgan is a rebel. Growing up, Morgan could
              always be found wherever there was trouble. She constantly
              questioned authority and refused to follow the restrictive rules
              set upon her. Left unfulfilled from boring classwork and a
              redundant routine, Morgan began to spend a majority of her time on
              the internet when she was only in grade school. When the computer
              booted up, 10-year-old Morgan knew her opportunities were endless,
              for the world was quite literally in her hands.
            </p>
            <p>
              To put it simply, Morgan is a rebel. Growing up, Morgan could
              always be found wherever there was trouble. She constantly
              questioned authority and refused to follow the restrictive rules
              set upon her. Left unfulfilled from boring classwork and a
              redundant routine, Morgan began to spend a majority of her time on
              the internet when she was only in grade school. When the computer
              booted up, 10-year-old Morgan knew her opportunities were endless,
              for the world was quite literally in her hands.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
