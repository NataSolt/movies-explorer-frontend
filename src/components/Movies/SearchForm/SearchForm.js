import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import searchIcon from "../../../images/searchicon.svg";
import "./SearchForm.css";

function SearchForm({ onSearch, onSubmitCheckbox }) {
  const [inputValue, setInputValue] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [searchError, setSearchError] = useState({
    errorMessage: "",
    isValid: true,
  });

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/movies") {
      setInputValue(localStorage.getItem("searchWord"));
      setIsChecked(JSON.parse(localStorage.getItem("checkboxStatus")));
    } else if (location.pathname === "/saved-movies") {
      const checkboxStatus = JSON.parse(
        localStorage.getItem("checkboxStatusSavedMovies")
      );
      setIsChecked(checkboxStatus);
      onSubmitCheckbox(checkboxStatus);
    }
  }, [location]);

  useEffect(() => {
    searchError.isValid && setSearchError({ errorMessage: "", isValid: true });
  }, []);

  function handleInputChange(evt) {
    setInputValue(evt.target.value);

    if (evt.target.value.length === 0) {
      setSearchError({
        isValid: evt.target.validity.valid,
        errorMessage: "Нужно ввести ключевое слово",
      });
    } else {
      setSearchError({
        isValid: evt.target.validity.valid,
        errorMessage: "",
      });
    }
  }

  function handleSubmitSearch(evt) {
    evt.preventDefault();

    if (!inputValue) {
      return setSearchError({
        isValid: false,
        errorMessage: "Введите ключевое слово",
      });
    }

    onSearch(inputValue, isChecked);
  }

  function handleChangeCheckbox() {
    setIsChecked(!isChecked);
    onSubmitCheckbox(!isChecked);
  }

  return (
    <div className="searchform">
      <div className="searchform__container">
        <form
          className="searchform__form"
          onSubmit={handleSubmitSearch}
          noValidate
        >
          <img
            className="searchform__img"
            src={searchIcon}
            alt="значок лупа"
          ></img>
          <input
            className="searchform__input"
            placeholder="Фильм"
            required
            name="movie"
            type="text"
            value={inputValue || ""}
            onChange={handleInputChange}
          ></input>
          <button className="searchform__button" type="submit" />
        </form>
        <span className="searchform-checkbox__tumb">
          {searchError.errorMessage}
        </span>
        <FilterCheckbox
          isChecked={isChecked}
          onSubmitCheckbox={handleChangeCheckbox}
        />
      </div>
    </div>
  );
}

export default SearchForm;
