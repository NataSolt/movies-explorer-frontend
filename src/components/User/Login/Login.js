import React, {useState} from "react";
import { Link } from "react-router-dom";
import logoHeader from "../../../images/logo-header.svg";
import "./Login.css";

  function Login({onLogin}) {
    const [userData, setUserData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (evt) => {
        const {name, value} = evt.target;
        setUserData({
            ...userData, [name]: value
        });
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        onLogin(userData);
        setUserData({email: '', password: ''});
    }

  return (
    <section className="login">
      <Link to="/">
        <img src={logoHeader} alt="Логотип" className="header__logo" />
      </Link>
      <h2 className="login__title">Рады видеть!</h2>
      <form className="login__form"  onSubmit={handleSubmit}>
        <label className="login__label">E-mail</label>
        <input
          className="login__input"
          name="email"
          type="email"
          id="email"
          required
          value={userData.email}
          onChange={handleChange}
        />

        <label className="login__label">Пароль</label>
        <input
          className="login__input"
          name="password"
          type="password"
          id="password"
          required
          value={userData.password}
          onChange={handleChange}
        />

        <button className="login__submit" type="submit">
          Войти
        </button>
      </form>

      <div className="login__container">
        <p className="login__text">Еще не зарегистрированы? </p>
        <Link className="login__link" to="/sign-up">
          Регистрация
        </Link>
      </div>
    </section>
  );
}

export default Login;