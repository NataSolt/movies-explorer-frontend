import logoHeader from "../../../images/logo-header.svg";
import React, { useState } from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import "./Header.css";
import Navigation from "../Navigation/Navigation";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

function Header({ loggedIn }) {
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);

  function handleOpenBurgerMenu() {
    setBurgerMenuOpen(true);
  }

  function handleCloseBurgerMenu() {
    setBurgerMenuOpen(false);
  }

  return (
    <header className="header">
      <Switch>
        <Route exact path="/">
          {loggedIn ? (
            <div className="header__user-container">
              <NavLink to="/">
                <img src={logoHeader} alt="Логотип" className="header__logo" />
              </NavLink>
              <div className="header__user-nav">
                <Navigation />
              </div>
              <button
                className="header__burger-menu"
                type="button"
                onClick={handleOpenBurgerMenu}
              />
            </div>
          ) : (
            <div className="header__container">
              <NavLink to="/">
                <img src={logoHeader} alt="смайл" className="header__logo" />
              </NavLink>
              <div className="header__nav">
                <NavLink to="/signup" className="header__reg-link">
                  Регистрация
                </NavLink>
                <NavLink to="/signin" className="header__login-link">
                  Войти
                </NavLink>
              </div>
            </div>
          )}
        </Route>

        <Route exact path={["/movies", "/saved-movies", "/profile", "/"]}>
          <div>
            <div className="header__user-container">
              <NavLink to="/">
                <img src={logoHeader} alt="Логотип" className="header__logo" />
              </NavLink>
              <div className="header__user-nav">
                <Navigation />
              </div>
              <button
                className="header__burger-menu"
                type="button"
                onClick={handleOpenBurgerMenu}
              />
            </div>
            <BurgerMenu
              isOpen={burgerMenuOpen}
              onCloseBurgerMenu={handleCloseBurgerMenu}
            />
          </div>
        </Route>
      </Switch>
    </header>
  );
}

export default Header;
