import React from 'react';
import { Link } from "react-router-dom";
import logoHeader from '../../../images/logo-header.svg';
import "./Login.css";

function Login() {
    return (
        <section className="login">
            <Link to='/'><img src={logoHeader} alt="Логотип" className="header__logo" /></Link>
            <h2 className="login__title">Рады видеть!</h2>
            <form className="login__form">
                <label className="login__label">E-mail</label>
                <input
                    className="login__input"
                    name="email"
                    type="email"
                    id="email"
                    required
                />

                <label className="login__label">Пароль</label>
                <input
                    className="login__input"
                    name="password"
                    type="password"
                    id="password"
                    required
                />

                <button
                    className="login__submit"
                    type="submit"
                >
                    Войти
                </button>
            </form>

            <div className="login__container">
                <p className="login__text">Еще не зарегистрированы? </p>
                <Link className="login__link" to="/sign-up">Регистрация</Link>
            </div>
        </section>
    )
}

export default Login;