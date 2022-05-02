import MockAdapter from "axios-mock-adapter";

import {createAPI} from "../../../services/api";
import {loadedData} from "./loaded-data";
import {ActionType} from "../../action";
import {fetchMovies, fetchPromoMovie, fetchFavorite, fetchMovieById, fetchCommentsByMovieId, addReview, changeFavorite} from "../../api-actions";
import {APIRoute} from "../../../const";
import {movie, comment} from '../../../data-test';

const api = createAPI(() => {});

const allMovies = [movie];
const favoriteMovies = [movie];
const openedMovie = movie;
const promoMovie = movie;
const openMovieComments = [comment];


it(`Reducer without additional parameters should return initial state`, () => {
  expect(loadedData(void 0, {})).toEqual({
    allMovies: [],
    favoriteMovies: [],
    openedMovie: {},
    promoMovie: {},
    openMovieComments: [],
  });
});

it(`Reducer should update all movies by load all movies`, () => {
  expect(loadedData({
    allMovies: [],
  }, {
    type: ActionType.LOAD_MOVIES,
    payload: allMovies,
  })).toEqual({
    allMovies,
  });
});

it(`Reducer should update favorite movies by load favorite movies`, () => {
  expect(loadedData({
    favoriteMovies: [],
  }, {
    type: ActionType.LOAD_FAVORITE,
    payload: favoriteMovies,
  })).toEqual({
    favoriteMovies,
  });
});

it(`Reducer should update opened movie by load opened movie`, () => {
  expect(loadedData({
    openedMovie: {},
  }, {
    type: ActionType.LOAD_MOVIE_BY_ID,
    payload: openedMovie,
  })).toEqual({
    openedMovie,
  });
});

it(`Reducer should update promo movie y load promo movie`, () => {
  expect(loadedData({
    promoMovie: {},
  }, {
    type: ActionType.LOAD_PROMO_MOVIE,
    payload: promoMovie,
  })).toEqual({
    promoMovie,
  });
});

it(`Reducer should update comments by load comments`, () => {
  expect(loadedData({
    openMovieComments: [],
  }, {
    type: ActionType.LOAD_COMMENTS_BY_MOVIE_ID,
    payload: openMovieComments,
  })).toEqual({
    openMovieComments,
  });
});

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /movies`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const moviesLoader = fetchMovies();

    apiMock
      .onGet(APIRoute.MOVIES)
      .reply(200, [{fake: true}]);

    return moviesLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_MOVIES,
          payload: [{fake: true}],
        });
      });
  });

  it(`Should make a correct API call to /films/promo`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const moviePromoLoader = fetchPromoMovie();

    apiMock
      .onGet(APIRoute.PROMO)
      .reply(200, [{fake: true}]);

    return moviePromoLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_PROMO_MOVIE,
          payload: [{fake: true}],
        });
      });
  });

  it(`Should make a correct API call to /favorite`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favoriteMoviesLoader = fetchFavorite();

    apiMock
      .onGet(APIRoute.FAVORITE)
      .reply(200, [{fake: true}]);

    return favoriteMoviesLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FAVORITE,
          payload: [{fake: true}],
        });
      });
  });

  it(`Should make a correct API call to /favorite/:id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const isFavoriteChange = changeFavorite(movie.id, movie.isFavorite);

    apiMock
      .onPost(`/favorite/${movie.id}/${1}`)
      .reply(200, [{fake: true}]);

    return isFavoriteChange(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_MOVIE_BY_ID,
          payload: [{fake: true}],
        });
      });
  });

  it(`Should make a correct API call to /films/:id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const movieLoader = fetchMovieById(movie.id);

    apiMock
      .onGet(`/films/${movie.id}`)
      .reply(200, [{fake: true}]);

    return movieLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_MOVIE_BY_ID,
          payload: [{fake: true}],
        });
      });
  });

  it(`Should make a correct API call to /comments/:id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const commentsLoader = fetchCommentsByMovieId(movie.id);

    apiMock
      .onGet(`/comments/${movie.id}`)
      .reply(200, [{fake: true}]);

    return commentsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_COMMENTS_BY_MOVIE_ID,
          payload: [{fake: true}],
        });
      });
  });

  it(`Should make a correct API call to /comments/:id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const reviewtAdd = addReview(movie.id, {rating: comment.rating, comment: comment.comment});

    apiMock
      .onPost(`/comments/${movie.id}`)
      .reply(200, [{fake: true}]);

    return reviewtAdd(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
      });
  });
});
