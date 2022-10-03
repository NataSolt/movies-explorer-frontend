import React, { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../Movies/SavedMovies/SavedMovies";
import Header from "../Common_modules/Header/Header";
import Footer from "../Common_modules/Footer/Footer";
import Register from "../User/Register/Register";
import Login from "../User/Login/Login";
import Profile from "../User/Profile/Profile";
import PageNotFound from "../Common_modules/PageNotFound/PageNotFound";
import InfoTooltip from "../Common_modules/InfoTooltip/InfoTooltip";
import imageErr from "../../images/error.png";
import imageSuc from "../../images/success.png";
import "./App.css";

import CurrentUserContext from "../../context/currentUserContext";
import mainApi from "../../utils/MainApi";
import * as auth from "../../utils/auth.js";
import ProtectRoute from "../ProtectRoute/ProtectRoute";

const headerPath = ["/movies", "/", "/saved-movies", "/profile"];
const FooterPath = ["/movies", "/", "/saved-movies"];

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [infoTooltipOpen, setInfoTooltipOpen] = useState(false);
  const [infoTooltipImage, setInfoTooltipImage] = useState(imageSuc);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const history = useHistory();

  function tokenCheck() {
    const token = localStorage.getItem("jwt");
    if (token) {
      mainApi
        .getUser()
        .then((res) => {
          if (res) {
            setCurrentUser({
              name: res.name,
              email: res.email,
              _id: res._id,
            });
            setLoggedIn(true);
          }
        })
        .catch((err) => {});
    }
  }

  useEffect(() => {
    tokenCheck();
  }, []);

  function handleRegister(registerData) {
    setIsLoading(true);
    auth
      .register(registerData)
      .then(() => {
        //Попап успешной регистрации
        setInfoTooltipImage(imageSuc);
        setMessage("Вы успешно зарегистрировались!");
        setInfoTooltipOpen(true);

        //Переадресация пользователя на страницу входа
        history.push("/movies");
      })
      .catch((err) => {
        //Попап ошибки регистрации
        setInfoTooltipImage(imageErr);
        setMessage("Что-то пошло не так! Попробуйте ещё раз.");
        setInfoTooltipOpen(true);

        console.log(`Ошибка ${err}`);
      });
  }

  function handleLogin(loginData) {
    auth
      .authorize(loginData)
      .then((res) => {
        if (res.token) {
          setLoggedIn(true);
          localStorage.setItem("jwt", res.token);
          tokenCheck();
          setInfoTooltipImage(imageSuc);
          setMessage("Вы успешно авторизованы!");
          setInfoTooltipOpen(true);
          history.push("/movies");
        }
      })
      .catch((err) => {
        setInfoTooltipImage(imageErr);
        setMessage("Что-то пошло не так! Попробуйте ещё раз.");
        setInfoTooltipOpen(true);

        console.log(`Ошибка ${err}`);
      });
  }

  function handleSignOut() {
    localStorage.removeItem("jwt");
    setLoggedIn(false);
  }

  function handleUpdateUser(data) {
    mainApi
      .updateUser(data)
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(`Ошибка ${err}`);
      });
  }

  const closeAllPopups = () => {
    setInfoTooltipOpen(false);
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page" lang="ru">
        <Route exact path={headerPath}>
          <Header />
        </Route>

        <Switch>
          <Route exact path="/">
            <Main />
          </Route>

          <Route exact path="/sign-up">
            <Register onRegister={handleRegister} isLoading={isLoading} />
          </Route>

          <Route exact path="/sign-in">
            <Login onLogin={handleLogin} />
          </Route>

          <ProtectRoute exact path="/profile" component={Profile} />

          <ProtectRoute exact path="/movies" component={Movies} />

          <ProtectRoute exact path="/saved-movies" component={SavedMovies} />

          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>

        <Route exact path={FooterPath}>
          <Footer />
        </Route>

        <InfoTooltip
          isOpen={infoTooltipOpen}
          onClose={closeAllPopups}
          image={infoTooltipImage}
          message={message}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
