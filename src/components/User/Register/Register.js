import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logoHeader from "../../../images/logo-header.svg";
import "./Register.css";

function Register({ onRegister, isLoading }) {
  const [userData, setUserData] = useState({
    name: {
      value: "",
      isValid: false,
      errorMessage: "",
    },
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

  const isValid =
    userData.name.isValid &&
    userData.email.isValid &&
    userData.password.isValid;

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
    onRegister({
      name: userData.name.value,
      email: userData.email.value,
      password: userData.password.value,
    });
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
          className={`register__input ${
            userData.name.errorMessage && "register__input_error"
          }`}
          name="name"
          type="text"
          id="name"
          required
          value={userData.name.value || ""}
          minLength="2"
          maxLength="20"
          onChange={handleChange}
        />

        <span className="register__error">{userData.name.errorMessage}</span>

        <label className="register__label">E-mail</label>
        <input
          className={`register__input ${
            userData.email.errorMessage && "register__input_error"
          }`}
          name="email"
          type="email"
          id="email"
          required
          value={userData.email.value || ""}
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          onChange={handleChange}
        />

        <span className="register__error">{userData.email.errorMessage}</span>

        <label className="register__label">Пароль</label>
        <input
          className={`register__input ${
            userData.password.errorMessage && "register__input_error"
          }`}
          name="password"
          type="password"
          id="password"
          required
          value={userData.password.value || ""}
          onChange={handleChange}
        />

        <span className="register__error">
          {userData.password.errorMessage}
        </span>

        <button
          className={`register__submit ${
            isValid && !isLoading ? "" : "register__submit_disabled"
          }`}
          type="submit"
          disabled={disabled}
        >
          Зарегистрироваться
        </button>
      </form>
      <div className="register__container">
        <p className="register__text">Уже зарегистрированы?</p>
        <Link className="register__link" to="/signin">
          Войти
        </Link>
      </div>
    </section>
  );
}

export default Register;

// function Register(props) {
//   const { onRegister } = props;

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   function handleSubmit(e) {
//     e.preventDefault();

//     if (email && password && name) {
//       const newUser = {
//         name, email, password
//       }
//       onRegister(newUser);
//     }
//   }

//   function handleChange(e) {
//     const { name, value } = e.target;

//     if (name === "name") {
//       setName(value);
//     }

//     if (name === "email") {
//       setEmail(value);
//     }

//     if (name === "password") {
//       setPassword(value);
//     }
//   }

//   return (
//     <section className="register">
//       <Link to="/">
//         <img src={logoHeader} alt="Логотип" className="header__logo" />
//       </Link>
//       <h2 className="register__title">Добро пожаловать!</h2>
//       <form className="register__form" onSubmit={handleSubmit}>
//         <label className="register__label">Имя</label>
//         <input
//           className="register__input"

//           name="name"
//           type="text"
//           id="name"
//           required
//           value={name}
//           minLength="2"
//           maxLength="20"
//           onChange={handleChange}
//         />

//         <span className="register__error">{props.errorMessage}</span>

//         <label className="register__label">E-mail</label>
//         <input
//           className="register__input"

//           name="email"
//           type="email"
//           id="email"
//           required
//           value={email}
//           pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
//           onChange={handleChange}
//         />

//         <span className="register__error">{props.errorMessage}</span>

//         <label className="register__label">Пароль</label>
//         <input
//           className="register__input"
//           name="password"
//           type="password"
//           id="password"
//           required
//           value={password}
//           onChange={handleChange}
//         />

//         <span className="register__error">
//           {password.errorMessage}
//         </span>

//         <button
//           className="register__submit"
//           type="submit"
//         >
//           Зарегистрироваться
//         </button>
//       </form>
//       <div className="register__container">
//         <p className="register__text">Уже зарегистрированы?</p>
//         <Link className="register__link" to="/signin">
//           Войти
//         </Link>
//       </div>
//     </section>
//   );
// }

// export default Register;
