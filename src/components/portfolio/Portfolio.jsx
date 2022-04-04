import React from "react";
import "./portfolio.css";

import Button from "@mui/material/Button";

import Nutrition from "../../asset/Nutrition.JPG";

import Sort from "../../asset/Sort.JPG";

const data = [
  {
    id: 1,
    image: Nutrition,
    title: "Nutrition App",
    github: "https://github.com/SushantChhetry/NutritionApp.github.io",
  },
  {
    id: 2,
    image: Sort,
    title: "Array Sorter",
    github: "https://github.com/SushantChhetry/sorting-algorithm-react-app",
  },

];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5> My Recent Work </h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} />
              </div>
              <h3>{title}</h3>
              <a href={github}>
                <Button variant="contained">Github</Button>
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
