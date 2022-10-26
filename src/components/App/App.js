import React, { useEffect, useState } from "react";
import { Route, Redirect, Switch, useHistory } from "react-router-dom";
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

import { CurrentUserContext } from "../../context/CurrentUserContext";
import mainApi from "../../utils/MainApi";
import moviesApi from "../../utils/MoviesApi";
// import { register, authorize, checkToken } from "../../utils/auth";
import * as auth from "../../utils/auth.js";
import ProtectRoute from "../ProtectRoute/ProtectRoute";

function App() {
  const history = useHistory();
  const headerPath = ["/movies", "/", "/saved-movies", "/profile"];
  const FooterPath = ["/movies", "/", "/saved-movies"];
  const [currentUser, setCurrentUser] = useState({
    name: "",
    email: "",
    _id: "",
  });
  const [loggedIn, setLoggedIn] = useState(false);
  const [infoTooltipOpen, setInfoTooltipOpen] = useState(false);
  const [infoTooltipImage, setInfoTooltipImage] = useState(imageSuc);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [preloader, setPreloader] = useState(false);

  const [allMovies, setAllMovies] = useState([]);
  const [foundMovies, setFoundMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [savedMoviesList, setSavedMoviesList] = useState([]);

  console.log(savedMovies, "2");
  console.log(savedMoviesList, "3")

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("loadedMovies"))) {
      if (localStorage.getItem("loadedMovies")) {
        setAllMovies(JSON.parse(localStorage.getItem("loadedMovies")));
      }
    }
  }, []);

  useEffect(() => {
    if (
      localStorage.getItem("searchedMovies") &&
      localStorage.getItem("checkboxStatus")
    ) {
      const checkboxStatus = JSON.parse(localStorage.getItem("checkboxStatus"));
      handleCheckboxMovies(checkboxStatus);
    }
  }, []);

  useEffect(() => {
    if (!localStorage.getItem("jwt")) {
      handleSignOut();
    }
  }, []);

  useEffect(() => {
    if (loggedIn && currentUser) {
      getSavedMovies();
    }
  }, [loggedIn, currentUser]);

  useEffect(() => {
    const token = localStorage.getItem("jwt");

    if (token) {
      mainApi.setToken(token);
      mainApi
        .getUser()
        .then((res) => {
          setLoggedIn(true);
          setCurrentUser({
            name: res.name,
            email: res.email,
            _id: res._id,
          });
          history.push("/movies");
        })
        .catch((err) => console.log(err));
    }
  }, [loggedIn]);

  useEffect(() => {
    if (!localStorage.getItem("jwt")) {
      handleSignOut();
    }
  }, []);

  // Регистрация пользователя
  function handleRegister({ name, password, email }) {
    setIsLoading(true);
    auth
      .register({ name, password, email })
      .then(() => {
        handleLogin({ password, email });
        //Попап успешного логина
        setInfoTooltipImage(imageSuc);
        setMessage("Регистрация прошла успешно!");
        setInfoTooltipOpen(true);
        history.push("/movies");
      })
      .catch((err) => {
        setInfoTooltipImage(imageErr);
        setMessage("Что-то пошло не так! Попробуйте ещё раз.");
        setInfoTooltipOpen(true);
        console.log(`Ошибка ${err}`);
      });
  }

  // Авторизация пользователя
  function handleLogin(data) {
    console.log(data);
    auth
      .authorize(data)
      .then((res) => {
        if (res.token) {
          setLoggedIn(true);
          localStorage.setItem("jwt", res.token);
          mainApi.setToken(res.token);

          //Попап успешного логина
          setInfoTooltipImage(imageSuc);
          setMessage("Вы успешно авторизованы!");
          setInfoTooltipOpen(true);
          history.push("/movies");
        }
      })
      .catch((err) => {
        //Попап ошибки входа
        setInfoTooltipImage(imageErr);
        setMessage("Вы ввели неверный e-mail или пароль!");
        setInfoTooltipOpen(true);

        console.log(`Ошибка ${err}`);
      });
  }

  function handleSignOut() {
    localStorage.clear();
    setLoggedIn(false);
    setCurrentUser({ name: "", email: "", _id: "" });
    history.push("/");
    mainApi.setToken(null);
  }

  function handleUpdateUser({ name, email }) {
    setIsLoading(true);
    mainApi
      .updateUser(name, email)
      .then((res) => {
        setCurrentUser({
          name: res.name,
          email: res.email,
        });
        //closeAllPopups();
      })
      .catch((err) => {
        console.log(`Ошибка ${err}`);
      });
  }

  function closeAllPopups() {
    setInfoTooltipOpen(false);
  }

  // Поиск фильмов
  function handleSearchMovies(movie, checked) {
    if (allMovies.length !== 0) {
      const searchMovies = allMovies.filter((item) =>
        item.nameRU.toLowerCase().includes(movie.toLowerCase())
      );

      if (searchMovies.length === 0) {
        setInfoTooltipImage(imageErr);
        setMessage("По вашему запросу ничего не найдено");
        setInfoTooltipOpen(true);
      } else {
        localStorage.setItem("searchWord", movie);
        localStorage.setItem("searchedMovies", JSON.stringify(searchMovies));
        localStorage.setItem("checkboxStatus", JSON.stringify(checked));

        setFoundMovies(searchMovies);
      }
    } else {
      setPreloader(true);

      moviesApi
        .getAllMovies()
        .then((requestMovies) => {
          requestMovies = requestMovies.map((item) => {
            const URL_REGEX =
              /^(https?:\/\/)?([\w-]{1,32}\.[\w-]{1,32})[^\s@]*/;
            if (!URL_REGEX.test(item.trailerLink)) {
              item.trailerLink = "https://www.youtube.com";
            }
            return item;
          });
          const searchMovies = requestMovies.filter((item) =>
            item.nameRU.toLowerCase().includes(movie.toLowerCase())
          );

          if (searchMovies.length === 0) {
            setInfoTooltipImage(imageErr);
            setMessage("По вашему запросу ничего не найдено");
            setInfoTooltipOpen(true);
          } else {
            localStorage.setItem("loadedMovies", JSON.stringify(requestMovies));
            setAllMovies(requestMovies);
            localStorage.setItem("searchWord", movie);
            localStorage.setItem(
              "searchedMovies",
              JSON.stringify(searchMovies)
            );
            localStorage.setItem("checkboxStatus", JSON.stringify(checked));
            setFoundMovies(searchMovies);
          }
        })
        .catch((err) => {
          console.log(`Ошибка ${err}`);
        })
        .finally(() => setPreloader(false));
    }
  }

  function handleCheckboxMovies(checkbox) {
    let shortMovies;

    let movies = JSON.parse(localStorage.getItem("searchedMovies"));

    if (checkbox) {
      shortMovies = movies.filter((item) => item.duration <= 40);
    } else if (!checkbox) {
      shortMovies = movies;
    }
    setFoundMovies(shortMovies);
    localStorage.setItem("checkboxStatus", JSON.stringify(checkbox));
  }

  // Сохранение фильма
  function handleSaveMovie(movie) {
    mainApi
      .createMovie(movie)
      .then((res) => {
        setSavedMovies(savedMovies.concat(res));
        setSavedMoviesList(savedMoviesList.concat(res));
      })
      .catch((err) => {
        console.log(`Ошибка ${err}`);
      });
  }

  // Загрузка фильмов сохраненных пользователем
  function getSavedMovies() {
    mainApi
      .savedMovies()
      .then((res) => {
        const savedMovies = res.filter(
          (movie) => movie.owner === currentUser._id
        );
        setSavedMovies(savedMovies);
        setSavedMoviesList(savedMovies);
      })
      .catch((err) => {
        console.log(`Ошибка ${err}`);
      });
  }

  function handleSearchSaveMovie(req) {
    setPreloader(true);
    const searchMovies = savedMoviesList.filter((item) =>
      item.nameRU.toLowerCase().includes(req.toLowerCase())
    );

    if (searchMovies.length === 0) {
      setInfoTooltipImage(imageErr);
      setMessage("По вашему запросу ничего не найдено");
      setInfoTooltipOpen(true);
      setPreloader(false);
    } else {
      setSavedMovies(searchMovies);
    
      setPreloader(false);
    }
  }

  function handleCheckboxSavedMovies(checkbox) {
    if (checkbox) {
      setSavedMovies(savedMovies.filter((item) => item.duration <= 40));
    } else if (!checkbox) {
      setSavedMovies(savedMoviesList);
    }
  }

  // Удаление фильма
  function handleDeleteMovie(movie) {
    console.log(movie._id);
    mainApi
      .deleteMovie(movie._id)
      .then(() => {
        const newMoviesList = savedMovies.filter(
          (item) => item._id !== movie._id
        );
        setSavedMovies(newMoviesList);
        setSavedMoviesList(
          savedMoviesList.filter((item) => item._id !== movie._id)
        );
      })
      .catch((err) => {
        console.log(`Ошибка ${err}`);
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Route exact path={headerPath}>
          <Header loggedIn={loggedIn} />
        </Route>

        <Switch>
          <Route exact path="/">
            <Main />
          </Route>

          <Route exact path="/signup">
            {loggedIn ? (
              <Redirect to="/" />
            ) : (
              <Register onRegister={handleRegister} isLoading={isLoading} />
            )}
          </Route>

          <Route exact path="/signin">
            {loggedIn ? <Redirect to="/" /> : <Login onLogin={handleLogin} />}{" "}
            {/* <Login onLogin={handleLogin} /> */}
          </Route>

          <ProtectRoute
            exact
            path="/profile"
            component={Profile}
            onUpdateUser={handleUpdateUser}
            isLoading={isLoading}
            onSignout={handleSignOut}
            loggedIn={loggedIn}
          />

          <ProtectRoute
            exact
            path="/movies"
            component={Movies}
            onSearch={handleSearchMovies}
            foundMovies={foundMovies}
            onSaveMovie={handleSaveMovie}
            savedMovies={savedMovies}
            onDeleteMovie={handleDeleteMovie}
            onSubmitCheckbox={handleCheckboxMovies}
            preloaderStatus={preloader}
            savedMoviesList={savedMoviesList}
          />

          <ProtectRoute
            exact
            path="/saved-movies"
            component={SavedMovies}
            onSaveMovie={handleSaveMovie}
            onSearch={handleSearchSaveMovie}
            savedMovies={savedMovies}
            onDeleteMovie={handleDeleteMovie}
            onSubmitCheckbox={handleCheckboxSavedMovies}
            preloaderStatus={preloader}
            savedMoviesList={savedMoviesList}
          />

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
