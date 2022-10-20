import { Route, useLocation } from "react-router-dom";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useEffect, useState } from "react";
import {
  DEVICEWIDTH_1280,
  DEVICEWIDTH_320,
  DEVICEWIDTH_630,
  DEVICEWIDTH_1110,
  CARDS_1280,
  CARDS_768,
  CARDS_320,
  MAX_CARDS,
  CARDS_DEFAULT,
  DISPLAYED_CARDS_DEFAULT,
  DISPLAYED_CARDS_1110,
  DISPLAYED_CARDS_630,
  DISPLAYED_CARDS_320,
} from "../../../utils/constants.js";
import "./MoviesCardlist.css";

function MoviesCardList({
  foundMovies,
  onSaveMovie,
  onDeleteMovie,
  savedMovies,
}) {
  const location = useLocation();

  const [maxCards, setMaxCards] = useState(DISPLAYED_CARDS_DEFAULT);

  const [renderedMovies, setRenderedMovies] = useState([]);

  const [deviceWidth, setDeviceWidth] = useState(DEVICEWIDTH_1280);

  useEffect(() => {
    setMovies();
  }, [maxCards]);

  useEffect(() => {
    checkDeviceWidth();
  }, [deviceWidth, foundMovies, location]);

  useEffect(() => {
    onSubscribeResize();
    return () => offSubscribeResize();
  }, [deviceWidth]);

  function setFoundMovies(count) {
    setMaxCards(count);
    let movies = [];
    foundMovies.forEach((item, i) => {
      if (i < count) {
        movies.push(item);
      }
    });
    setRenderedMovies(movies);
  }

  function checkDeviceWidth() {
    if (deviceWidth >= DEVICEWIDTH_1110) {
      setFoundMovies(DISPLAYED_CARDS_1110);
    } else if (deviceWidth >= DEVICEWIDTH_630) {
      setFoundMovies(DISPLAYED_CARDS_630);
    } else if (deviceWidth >= DEVICEWIDTH_320) {
      setFoundMovies(DISPLAYED_CARDS_320);
    }

    if (location.pathname === "/saved-movies") {
      setMaxCards(MAX_CARDS);
    }
  }

  function handleSubscribeResize() {
    setDeviceWidth(window.innerWidth);
  }

  function onSubscribeResize() {
    window.addEventListener("resize", handleSubscribeResize);
  }

  function offSubscribeResize() {
    window.removeEventListener("resize", handleSubscribeResize);
  }

  function setMovies() {
    let movies = [];
    foundMovies.forEach((item, i) => {
      if (i < maxCards) {
        movies.push(item);
      }
    });
    setRenderedMovies(movies);
  }

  function handleAddButton() {
    if (deviceWidth >= DEVICEWIDTH_1110) {
      setMaxCards(maxCards + CARDS_1280);
    } else if (deviceWidth >= DEVICEWIDTH_630) {
      setMaxCards(maxCards + CARDS_768);
    } else if (deviceWidth >= DEVICEWIDTH_320) {
      setMaxCards(maxCards + CARDS_320);
    } else {
      setMaxCards(maxCards + CARDS_DEFAULT);
    }
  }

  return (
    <div className="moviescardlist">
      <p className="moviescardlist__notfound">Фильмы не найдены</p>
      <ul className="moviescardlist__container">
        {renderedMovies.map((item) => (
          <MoviesCard
            movie={item}
            key={item.id || item._id}
            onSaveMovie={onSaveMovie}
            onDeleteMovie={onDeleteMovie}
            savedMovies={savedMovies}
          />
        ))}
      </ul>

      {foundMovies.length !== renderedMovies.length ? (
        <Route path="/movies">
          <button
            className="moviescardlist__button"
            type="button"
            onClick={handleAddButton}
          >
            Ещё
          </button>
        </Route>
      ) : (
        ""
      )}
    </div>
  );
}

export default MoviesCardList;
