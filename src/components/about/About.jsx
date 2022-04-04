import React from "react";
import "./about.css";
import ME from "../../asset/ME.JPG";
import IMG2 from "../../asset/IMG2.jpg";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import GroupIcon from "@mui/icons-material/Group";

import Button from "@mui/material/Button";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know me</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={IMG2} alt="about-img" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <WorkspacePremiumIcon className="about__icon" />
              <h5>Education</h5>
              <small>B.S. in Computer Science from JSU</small>
            </article>

            <article className="about__card">
              <GroupIcon className="about__icon" />
              <h5>Experience</h5>
              <small>Intern at MRuns, Research Intern at JSU</small>
            </article>

            <article className="about__card">
              <WorkspacePremiumIcon className="about__icon" />
              <h5>Leadership</h5>
              <small>
                ISO President, International House Alum, Global Ambassador
              </small>
            </article>
          </div>

          <p>
            I am an ambitious, creative, and hardworking programmer who is
            always actively learning and adapting in life. I aspire to become a
            full-stack web developer and currently working towards it. I have
            experience with programming languages such as Javascript, Java, and
            Python and am familiar with tools and frameworks like Docker, AWS,
            Git, and React.js. When I am not programming, you can find me
            exploring new places and trying out new cuisines.
            <quote>
              “However difficult life may seem, there is always something you
              can do and succeed at. —Stephen Hawking”
            </quote>
          </p>
          <a href="#contact">
            <Button variant="contained">Lets Talk</Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
