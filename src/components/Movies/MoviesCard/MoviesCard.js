import React from "react";
import { Route } from "react-router-dom";
//import movieCard from "../../../images/movie.png";
import "./MoviesCard.css";
//import moviesApi from "../../../utils/MoviesApi";
import { MOVIES_URL, handleDurationMovies } from "../../../utils/constants";

function MoviesCard({ movie, onSaveMovie, onDeleteMovie, savedMovies }) {
  const isSaved = savedMovies.find((item) => item.movieId === movie.id);

  function handleSaveMovie() {
    if (!isSaved) {
      onSaveMovie(movie);
    } else {
      onDeleteMovie(movie);
    }
  }

  function handleDeleteMovie() {
    onDeleteMovie(movie);
  }
  
  return (
    <div className="moviescard">
      <div className="moviescards__container">
        <div className="moviescard__info">
          <h2 className="moviescard__title">{movie.nameRU}</h2>
          <p className="moviescard__text">
            {handleDurationMovies(movie.duration, movie)}
          </p>
        </div>

        <div className="moviescard__button">
          <Route path="/movies">
            <button
              className={
                isSaved ? "moviescard__button_active" : "moviescard__button"
              }
              type="button"
              onClick={handleSaveMovie}
            ></button>
          </Route>

          <Route path="/saved-movies">
            <button
              className="moviescard__button-delete"
              type="button"
              onClick={handleDeleteMovie}
            />
          </Route>
        </div>
      </div>
      <a href={movie.trailerLink} target="blank">
        <img
          className="moviescard__img"
          src={
            movie.image.url ? `${MOVIES_URL}${movie.image.url}` : movie.image
          }
          alt={`кадр из фильма "${movie.nameRU}"`}
        />
      </a>
    </div>
  );
}

export default MoviesCard;
