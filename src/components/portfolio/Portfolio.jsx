import React from 'react';
import './portfolio.css';

import ME from "../../asset/ME.JPG";

const data = [
  {
    id: 1,
    image: ME,
    title: "Project title",
    github: "https://github.com",
  },
  {
    id: 2,
    image: ME,
    title: "Project title",
    github: "https://github.com",
  },
  {
    id: 3,
    image: ME,
    title: "Project title",
    github: "https://github.com",
  },
  {
    id: 4,
    image: ME,
    title: "Project title",
    github: "https://github.com",
  },
  {
    id: 5,
    image: ME,
    title: "Project title",
    github: "https://github.com",
  },
  {
    id: 6,
    image: ME,
    title: "Project title",
    github: "https://github.com",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5> My Recent Work </h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">Place image here</div>
                <h3>This is a portfolio item titke (use img and title here)</h3>
                <a href={github} className="btn">
                  Github
                </a>
              </article>
            );
          })
        }
      </div>
    </section>
  );
}

export default Portfolio