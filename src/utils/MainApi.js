export class MainApi {
  constructor({ BASE_URL, headers }) {
    this._BASE_URL = BASE_URL;
    this._headers = headers;
    this._token = null;
  }

  // Функция устанавливает новое значение токена
  setToken(token) {
    this._token = token;
    if (this._token) {
      this._headers = {
        ...this._headers,
        authorization: `Bearer ${token}`,
      };
    }
  }

  //функция ошибки
  _checkResponse = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  };

  getUser() {
    return fetch(this._BASE_URL + "/users/me", {
      method: "GET",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  //замена данных профайла
  updateUser(name, email) {
    return fetch(`${this._BASE_URL}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({ name, email }),
    }).then(this._checkResponse);
  }

  authorize(email, password) {
    return fetch(`${this._BASE_URL}/signin`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({ email, password }),
    }).then(this._checkResponse);
  }

  register({ name, email, password }) {
    return fetch(`${this._BASE_URL}/signup`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({ name, email, password }),
    }).then(this._checkResponse);
  }

  createMovie(movie) {
    return fetch(`${this._BASE_URL}/movies`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `https://api.nomoreparties.co${movie.image.url}`,
        trailerLink: movie.trailerLink,
        thumbnail: `https://api.nomoreparties.co${movie.image.url}`,
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      }),
    }).then(this._checkResponse);
  }

  savedMovies() {
    return fetch(`${this._BASE_URL}/movies`, {
      method: "GET",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  deleteMovie(id) {
    console.log(id);
    return fetch(`${this._BASE_URL}/movies/${id}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._checkResponse);
  }
}

const mainApi = new MainApi({
  BASE_URL: "https://api.poiskkino.nomoredomains.sbs",
  // baseUrl: "http://localhost:3005",
  headers: {
    "Content-Type": "application/json",
  },
});

export default mainApi;
