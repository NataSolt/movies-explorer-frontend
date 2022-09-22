import React from 'react';
import "./AboutMe.css";
import StudentPhoto from '../../../images/StudentPhoto.jpg';

function AboutMe() {
    return (
        <section className="about-me">
            <h2 className="about-me__title" id="about-me">Студент</h2>
            <div className="about-me__container">
                <div className="about-me__info">
                    <h3 className="about-me__name">Наталья</h3>
                    <p className="about-me__subtitle">Фронтенд-разработчик</p>
                    <p className="about-me__text">Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                    <a href="https://github.com/NataSolt" className="about-me__link" target="_blank" rel="noreferrer" >Github</a>
                </div>
                <img className="about-me__image" alt="Фотография студента" src={StudentPhoto}/>
            </div>
        </section>
    )
}

export default AboutMe;