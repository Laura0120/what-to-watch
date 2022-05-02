import {createSelector} from "reselect";
import {DEFAULT_GENRE, COUNT_SILIMAR_MOVIE, MAX_COUNT_GENRE} from '../const';
import {adaptToClient, adaptToClientMovie} from '../utils/adapt';
import {getRandomInteger} from '../utils/common';

const getAllMovies = (state) => state.DATA.allMovies;
const getActivGenre = (state) => state.APP_STATE.genre;
const getOpenedMovie = (state) => adaptToClientMovie(state.DATA.openedMovie);

const getMoviesByGenre = createSelector(getAllMovies, getActivGenre, (allMovies, genre) => {
  if (genre === DEFAULT_GENRE) {
    return adaptToClient(allMovies.slice());
  }
  return adaptToClient(allMovies.filter((movie) => movie.genre === genre));
}
);

const getMoviesSimilar = createSelector(getMoviesByGenre, getOpenedMovie, (movies, openedMovie) => {
  const start = getRandomInteger(0, movies.length - COUNT_SILIMAR_MOVIE);
  const moviesLikeThis = movies.filter((movie) => movie.id !== openedMovie.id);
  return moviesLikeThis.slice(start, Math.min(moviesLikeThis.length, start + COUNT_SILIMAR_MOVIE));
});

const getGenreList = createSelector(getAllMovies, (allMovies) => {
  const addGenre = (genres, movie) => {
    genres.push(movie.genre);
    return genres;
  };

  const allGenre = allMovies.reduce(addGenre, [DEFAULT_GENRE]);
  const uniqueGenres = new Set(allGenre);
  const genreList = [...uniqueGenres];

  return genreList.slice(0, Math.min(genreList.length, MAX_COUNT_GENRE));
});

export {getAllMovies, getActivGenre, getMoviesByGenre, getMoviesSimilar, getGenreList};


