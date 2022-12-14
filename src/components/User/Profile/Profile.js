import { Link } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../../../context/CurrentUserContext";
import "./Profile.css";

function Profile({onUpdateUser, isLoading, onSignout}) {
  const currentUser = useContext(CurrentUserContext);
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // useEffect(() => {
  //   setName(currentUser.name);
  //   setEmail(currentUser.email);
  // }, [currentUser]);
  // const handleUpdateName = (e) => {
  //   setName(e.target.value);
  // };
  // const handleUpdateEmail = (e) => {
  //   setEmail(e.target.value);
  // };
  // const handleSubmit = () => {
  //   props.handleSubmit();
  // }

  const [userData, setUserData] = useState({
    name: {
        value: "",
        isValid: true,
        errorMessage: ""
    },
    email: {
        value: "",
        isValid: true,
        errorMessage: ""
    }
});

const isValid = userData.name.isValid && userData.email.isValid;

const [disabled, setDisabled] = useState(false);

useEffect(() => {
    isLoading ? setDisabled(true) : setDisabled(false);
}, [isLoading]);

useEffect(() => {
    isValid === true ? setDisabled(false) : setDisabled(true);
}, [isValid]);

useEffect(() => {
    if (
        currentUser.name === userData.name.value &&
        currentUser.email === userData.email.value
    ) {
        setDisabled(true);
    } else if (isValid) {
        setDisabled(false);
    } else if (!isValid) {
        setDisabled(true);
    }
}, [currentUser, userData, isValid]);

useEffect(() => {
    setUserData({
        name: {
            value: currentUser.name,
            isValid: true,
            errorMessage: ""
        },
        email: {
            value: currentUser.email,
            isValid: true,
            errorMessage: ""
        }
    });
}, [currentUser]);

const handleChange = (evt) => {
    const { name, value, validity, validationMessage } = evt.target;

    setUserData((prevState) => ({
        ...prevState,
        [name]: {
            ...userData[name],
            value,
            isValid: validity.valid,
            errorMessage: validationMessage
        }
    }));
}

const handleSubmit = (evt) => {
    evt.preventDefault();
    onUpdateUser({
        name: userData.name.value,
        email: userData.email.value
    });
}
  return (
    <>
      <section className="profile">
        <h2 className="profile__title">{`????????????, ${currentUser.name}!`}</h2>
        <form
          className="profile__container"
          onSubmit={handleSubmit}
          noValidate
        >
          <label className="profile__box">
            <span className="profile__text">??????</span>
            <input
              className="profile__input"
              name="name"
              type="text"
              required
              minLength="2"
              maxLength="30"
              value={userData.name.value || ""}
              //value={name}
              onChange={handleChange}
              //onChange={handleUpdateName}
            />
          </label>

          <span className="profile__error">
          {/* {props.errorMessage} */}
          {userData.name.errorMessage}
          </span>

          <label className="profile__box">
            <span className="profile__text">E-mail</span>
            <input
              className="profile__input"
              name="email"
              type="email"
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              // value={email}
              // onChange={handleUpdateEmail}
              value={userData.email.value || ""}
                            onChange={handleChange}
            />
          </label>

          <span className="profile__error">
          {/* {props.errorMessage} */}
          {userData.email.errorMessage}
          </span>

          {/* <button className="profile__button" type="button"> */}
          <button
                        className={`profile__button ${
                            isValid && !isLoading ? "" : "profile__button_disabled"
                        }`}
                        type="submit"
                        disabled={disabled}
                    >
            ??????????????????????????
          </button>
          <Link className="profile__link" to="/" onClick={onSignout}>
            ?????????? ???? ????????????????
          </Link>
        </form>
      </section>
    </>
  );
}

export default Profile;