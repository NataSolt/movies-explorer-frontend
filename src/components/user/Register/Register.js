import React from "react";
import { Link } from "react-router-dom";
import logoHeader from "../../../images/logo-header.svg";
import "./Register.css";

function Register() {
  return (
    <section className="register">
      <Link to="/">
        <img src={logoHeader} alt="Логотип" className="headerlogo" />
      </Link>
      <h2 className="register__title">Добро пожаловать!</h2>
      <form className="register__form">
        <label className="register__label">Имя</label>
        <input
          className="register__input"
          name="name"
          type="text"
          id="name"
          required
        />

        <label className="register__label">E-mail</label>
        <input
          className="register__input"
          name="email"
          type="email"
          id="email"
          required
        />

        <label className="register__label">Пароль</label>
        <input
          className="register__input"
          name="password"
          type="password"
          id="password"
          required
        />
        <span className="register__span">Что-то пошло не так...</span>

        <button className="register__submit" type="submit">
          Зарегистрироваться
        </button>
      </form>

      <div className="register__signin-container">
        <p className="register__signin-text">Уже зарегистрированы?</p>
        <Link className="register__signin-link" to="/sign-in">
          Войти
        </Link>
      </div>
    </section>
  );
}

export default Register;
