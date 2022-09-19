import logoHeader from "../../../images/logo-header.svg";
import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import "./Header.css";
import Navigation from "../Navigation/Navigation";

function Header() {
  return (
    <header className="header">
      <Switch>
        <Route exact path="/">
          <div className="header__container">
            <img src={logoHeader} alt="смайл" className="header__logo" />
            <div className="header__nav">
              <NavLink to="/sign-up" className="header__reg-link">
                Регистрация
              </NavLink>
              <NavLink to="/sign-in" className="header__login-link">
                Войти
              </NavLink>
            </div>
          </div>
        </Route>
        <Route exact path={["/movies", "/saved-movies", "/profile"]}>
          <div className="header__user-container">
            <img src={logoHeader} alt="Логотип" className="header__logo" />
            <div className="header__user-nav">
              <Navigation />
            </div>
            <button className="header__burger-menu" type="button" />
          </div>
        </Route>

        <Route exact path={["/movies", "/saved-movies", "/profile"]}>
          {/* <BurgerMenu /> */}
        </Route>
      </Switch>
    </header>
  );
}

export default Header;
