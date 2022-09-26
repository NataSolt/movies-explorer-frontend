import React from "react";
import searchIcon from "../../../images/searchicon.svg";
import "./SearchForm.css";

function SearchForm() {
  return (
    <div className="searchform">
      <div className="searchform__container">
        <form className="searchform__form">
          <img
            className="searchform__img"
            src={searchIcon}
            alt="значок лупа"
          ></img>
          <input
            className="searchform__input"
            placeholder="Фильм"
            required
          ></input>
          <button className="searchform__button" type="submit" />
        </form>

        <label className="searchform-checkbox">
          <div className="searchform-checkbox__container">
            <input className="searchform-checkbox__input" type="checkbox" />
            <span className="searchform-checkbox__tumb" />
          </div>
          <p className="searchform-checkbox__text">Короткометражки</p>
        </label>
      </div>
    </div>
  );
}

export default SearchForm;
