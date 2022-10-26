export const MOVIES_URL = "https://api.nomoreparties.co";

export function handleDurationMovies(duration, movie) {
  if (duration === 60) {
    return `1 ч`;
  }

  if (duration === 120) {
    return `2 ч`;
  }

  if (duration > 120) {
    return `2 ч ${movie.duration - 120} м`;
  }

  if (duration > 60 && duration < 120) {
    return `1 ч ${movie.duration - 60} м`;
  }

  if (duration < 60) {
    return `${movie.duration} м`;
  }
}

//экран
export const DEVICEWIDTH_1280 = 1280;
export const DEVICEWIDTH_1110 = 1110;
export const DEVICEWIDTH_768 = 768;
export const DEVICEWIDTH_630 = 630;
export const DEVICEWIDTH_480 = 480;
export const DEVICEWIDTH_320 = 320;

export const MAX_CARDS = 120;
export const CARDS_DEFAULT = 4;
export const CARDS_1280 = 3;
export const CARDS_768 = 2;
export const CARDS_320 = 2;



//карточки
export const DISPLAYED_CARDS_DEFAULT = 12;
export const DISPLAYED_CARDS_1110 = 12;
export const DISPLAYED_CARDS_630 = 8;
export const DISPLAYED_CARDS_320 = 5;
