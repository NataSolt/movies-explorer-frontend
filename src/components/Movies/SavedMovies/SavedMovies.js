import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardlist/MoviesCardlist";
import Preloader from "../Preloader/Preloader";
import "./SavedMovies.css";

function SavedMovies({
  onSearch,
  onSubmitCheckbox,
  onSaveMovie,
  onDeleteMovie,
  savedMovies,
  preloaderStatus,
  savedMoviesList
}) {
  return (
    <section className="savedmovies">
      <SearchForm onSearch={onSearch} onSubmitCheckbox={onSubmitCheckbox} />
      {preloaderStatus ? (
        <Preloader />
      ) : (
        <MoviesCardList
          foundMovies={savedMovies}
          onSaveMovie={onSaveMovie}
          onDeleteMovie={onDeleteMovie}
          savedMovies={savedMovies}
          savedMoviesList={savedMoviesList}
        />
      )}
    </section>
  );
}

export default SavedMovies;
