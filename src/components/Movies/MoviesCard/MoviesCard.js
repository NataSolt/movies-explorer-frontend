import React from "react";
import { Route } from "react-router-dom";
import movieCard from "../../../images/movie.png";
import "./MoviesCard.css";

function MoviesCard() {
  return (
    <div className="moviescard">
      
      <div className="moviescards__container">
        <div className="moviescard__info">
          <h2 className="moviescard__title">33 слова о дизайне</h2>
          <p className="moviescard__text">1ч 17м</p>
        </div>

        <div className="moviescard__button">
        
          <Route path="/movies">
            <button className="moviescard__button moviescard__button_active" type="button" />
          </Route>

          <Route path="/saved-movies">
            <button className="moviescard__button-delete" type="button" />
          </Route>
        </div>
        
      </div>
      <img className="moviescard__img" src={movieCard} alt="Постер фильма" />
    </div>
    
  );
}

export default MoviesCard;
