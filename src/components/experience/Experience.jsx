import React from "react";
import CodeIcon from "@mui/icons-material/Code";
import "./experience.css";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3> Frontend Development </h3>
          <div className="experience__content">
            <article className="experience__details">
              <CodeIcon className="experience_details-icon"/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <CodeIcon className="experience_details-icon"/>
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <CodeIcon className="experience_details-icon"/>
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <CodeIcon className="experience_details-icon"/>
              <div>
                <h4>React</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3> Backend Development </h3>
          <div className="experience__content">
            <article className="experience__details">
              <CodeIcon className="experience_details-icon"/>
              <div>
                <h4>Java</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <CodeIcon className="experience_details-icon"/>
              <div>
                <h4>SQL</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>

            <article className="experience__details">
              <CodeIcon className="experience_details-icon"/>
              <div>
                <h4>GraphQL</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>

            <article className="experience__details">
              <CodeIcon className="experience_details-icon"/>
              <div>
                <h4>Node</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
