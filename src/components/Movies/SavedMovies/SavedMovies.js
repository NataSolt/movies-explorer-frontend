import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardlist/MoviesCardlist";
import "./SavedMovies.css";

function SavedMovies() {
  return (
    <section className="savedmovies">
      <SearchForm />
      <MoviesCardList />
    </section>
  );
}

export default SavedMovies;
