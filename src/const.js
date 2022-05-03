export const DEFAULT_GENRE = `All genres`;
export const COUNT_SILIMAR_MOVIE = 4;
export const COUNT_MOVIE_PER_STEP = 8;
export const MAX_COUNT_GENRE = 10;

export const TABS_NAME = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`
};

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const mainUrl = `${process.env.PUBLIC_URL}`;

export const AppRoute = {
  MAIN: mainUrl,
  LOGIN: `${mainUrl}/login`,
  MY_LIST: `${mainUrl}/mylist`,
  FILM_ID: `${mainUrl}/films/:id`,
  FILM_ID_REVIEW: `${mainUrl}/films/:id/review`,
  PLAYER_ID: `${mainUrl}/player/:id`,
};

export const APIRoute = {
  FILMS: `/films`,
  LOGIN: `/login`,
  PROMO: `/films/promo`,
  FAVORITE: `/favorite`,
};

export const RATING_STARS = [1, 2, 3, 4, 5];
