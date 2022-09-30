import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoHeader from "../../../images/logo-header.svg";
import "./Register.css";

function Register({ onRegister }) {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onRegister(userData);
  };

  return (
    <section className="register">
      <Link to="/">
        <img src={logoHeader} alt="Логотип" className="header__logo" />
      </Link>
      <h2 className="register__title">Добро пожаловать!</h2>
      <form className="register__form" onSubmit={handleSubmit}>
        <label className="register__label">Имя</label>
        <input
          className="register__input"
          name="name"
          type="text"
          id="name"
          required
          value={userData.name}
          onChange={handleChange}
        />

        <label className="register__label">E-mail</label>
        <input
          className="register__input"
          name="email"
          type="email"
          id="email"
          required
          value={userData.email}
          onChange={handleChange}
        />

        <label className="register__label">Пароль</label>
        <input
          className="register__input"
          name="password"
          type="password"
          id="password"
          required
          value={userData.password}
          onChange={handleChange}
        />

        <span className="register__span">Что-то пошло не так...</span>

        <button className="register__submit" type="submit">
          Зарегистрироваться
        </button>
      </form>
      <div className="register__container">
        <p className="register__text">Уже зарегистрированы?</p>
        <Link className="register__link" to="/sign-in">
          Войти
        </Link>
      </div>
    </section>
  );
}

export default Register;
