import React from "react";
import "./AboutMe.css";
import StudentPhoto from "../../../images/StudentPhoto.jpg";

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__title" id="about-me">
        Студент
      </h2>
      <div className="about-me__container">
        <div className="about-me__info">
          <h3 className="about-me__name">Наталья</h3>
          <p className="about-me__subtitle">Фронтенд-разработчик</p>
          <p className="about-me__text">
            Живу в Санкт-Петербурге, образование связано с художественной
            отраслью. Раньше была индивидуальным предпринимателем. Есть семья,
            двое детей, в затянувшемся декрете увлеклась версткой сайтов и
            изучения JavaScript. Очень понравилось. Решила изучить эту область.
            Прошла курсы фронтенд-разработчика от Яндекс практикум. Планирую
            дальше развивать эти умения и изучать новые.
          </p>
          <a
            href="https://github.com/NataSolt"
            className="about-me__link"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
        <img
          className="about-me__image"
          alt="Фотография студента"
          src={StudentPhoto}
        />
      </div>
    </section>
  );
}

export default AboutMe;
