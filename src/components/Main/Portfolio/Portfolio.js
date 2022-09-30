import React from "react";
import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__info">
          <a
            href="https://github.com/NataSolt/how-to-learn"
            className="portfolio__link"
            target="_blank"
            rel="noreferrer"
          >
            Статичный сайт
            <p className="portfolio__arrow">&#8599;</p>
          </a>
        </li>

        <li className="portfolio__info">
          <a
            href="https://github.com/NataSolt/russian-travel"
            className="portfolio__link"
            target="_blank"
            rel="noreferrer"
          >
            Адаптивный сайт
            <p className="portfolio__arrow">&#8599;</p>
          </a>
        </li>

        <li className="portfolio__info">
          <a
            href="https://solta.nomoredomains.sbs"
            className="portfolio__link"
            target="_blank"
            rel="noreferrer"
          >
            Одностраничное приложение
            <p className="portfolio__arrow">&#8599;</p>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
