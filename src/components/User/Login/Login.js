import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logoHeader from "../../../images/logo-header.svg";
import "./Login.css";

function Login({ onLogin, isLoading }) {
  const [userData, setUserData] = useState({
    email: {
      value: "",
      isValid: false,
      errorMessage: "",
    },
    password: {
      value: "",
      isValid: false,
      errorMessage: "",
    },
  });

  const isValid = userData.email.isValid && userData.password.isValid;

  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    isLoading ? setDisabled(true) : setDisabled(false);
  }, [isLoading]);

  useEffect(() => {
    isValid ? setDisabled(false) : setDisabled(true);
  }, [isValid]);

  const handleChange = (evt) => {
    const { name, value, validity, validationMessage } = evt.target;

    setUserData((prevState) => ({
      ...prevState,
      [name]: {
        ...userData[name],
        value,
        isValid: validity.valid,
        errorMessage: validationMessage,
      },
    }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onLogin({
      email: userData.email.value,
      password: userData.password.value,
    });
    setUserData({ email: "", password: "" });
  };

  return (
    <section className="login">
      <Link to="/">
        <img src={logoHeader} alt="Логотип" className="header__logo" />
      </Link>
      <h2 className="login__title">Рады видеть!</h2>
      <form className="login__form" onSubmit={handleSubmit}>
        <label className="login__label">E-mail</label>
        <input
          className={`login__input ${
            userData.email.errorMessage && "login__input_error"
          }`}
          name="email"
          type="email"
          id="email"
          required
          value={userData.email.value || ""}
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          onChange={handleChange}
        />

        <span className="login__error">{userData.email.errorMessage}</span>

        <label className="login__label">Пароль</label>
        <input
          className={`login__input ${
            userData.password.errorMessage && "login__input_error"
          }`}
          name="password"
          type="password"
          id="password"
          required
          value={userData.password.value || ""}
          onChange={handleChange}
        />

        <span className="login__error">{userData.password.errorMessage}</span>

        <button
          className={`login__submit ${
            isValid && !isLoading ? "" : "login__submit_disabled"
          }`}
          type="submit"
          disabled={disabled}
        >
          Войти
        </button>
      </form>

      <div className="login__container">
        <p className="login__text">Еще не зарегистрированы? </p>
        <Link className="login__link" to="/signup">
          Регистрация
        </Link>
      </div>
    </section>
  );
}

export default Login;

// function Login(props) {
//   const { onLogin } = props;

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   function handleSubmit(e) {
//     e.preventDefault();

//     if (email && password) {
//       onLogin(email, password);
//     }
//   }

//   function handleChange(e) {
//     const { name, value } = e.target;

//     if (name === "email") {
//       setEmail(value);
//     }

//     if (name === "password") {
//       setPassword(value);
//     }
//   }

// return (
//   <section className="login">
//     <Link to="/">
//       <img src={logoHeader} alt="Логотип" className="header__logo" />
//     </Link>
//     <h2 className="login__title">Рады видеть!</h2>
//     <form className="login__form"  onSubmit={handleSubmit}>
//       <label className="login__label">E-mail</label>
//       <input
//         className="login__input"
//         name="email"
//         type="email"
//         id="email"
//         required
//         value={email}
//         pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
//         onChange={handleChange}
//       />

// <span className="login__error">

//               </span>

//       <label className="login__label">Пароль</label>
//       <input
//         className="login__input"
//         name="password"
//         type="password"
//         id="password"
//         required
//         value={password}
//         onChange={handleChange}
//       />

// <span className="login__error">

//               </span>

//       <button className="login__submit" type="submit">
//         Войти
//       </button>
//     </form>

//     <div className="login__container">
//       <p className="login__text">Еще не зарегистрированы? </p>
//       <Link className="login__link" to="/signup">
//         Регистрация
//       </Link>
//     </div>
//   </section>
// );
// }

// export default Login;
