export class MoviesApi {
  constructor({ MOVIES_URL }) {
    this._baseUrl = MOVIES_URL;
  }

  //функция ошибки
  _checkResponse = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  };

  getAllMovies() {
    return fetch(`${this._baseUrl}/beatfilm-movies`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(this._checkResponse);
  }
}

const moviesApi = new MoviesApi({ MOVIES_URL: "https://api.nomoreparties.co" });

export default moviesApi;
