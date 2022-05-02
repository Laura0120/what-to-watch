const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  UPDATE_MOVIES: `UPDATE_MOVIES`,
  LOAD_MOVIES: `LOAD_MOVIES`,
  LOAD_FAVORITE: `LOAD_FAVORITE`,
  LOAD_PROMO_MOVIE: `LOAD_PROMO_MOVIE`,
  LOAD_MOVIE_BY_ID: `LOAD_MOVIE_BY_ID`,
  LOAD_COMMENTS_BY_MOVIE_ID: `LOAD_COMMENTS_BY_MOVIE_ID`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  POSTING_COMMENT: `POSTING_COMMENT`,
};

const ActionCreator = {
  changeGenre: (activeGenreElement) => ({
    type: ActionType.CHANGE_GENRE,
    payload: activeGenreElement,
  }),
  loadMovies: (movies) => ({
    type: ActionType.LOAD_MOVIES,
    payload: movies,
  }),
  loadFavorite: (movies) => ({
    type: ActionType.LOAD_FAVORITE,
    payload: movies,
  }),
  loadMovieById: (movie) => ({
    type: ActionType.LOAD_MOVIE_BY_ID,
    payload: movie,
  }),
  loadPromoMovie: (movie) => ({
    type: ActionType.LOAD_PROMO_MOVIE,
    payload: movie,
  }),
  loadCommentsByMovieId: (comments) => ({
    type: ActionType.LOAD_COMMENTS_BY_MOVIE_ID,
    payload: comments,
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
  postingComment: (value) => ({
    type: ActionType.POSTING_COMMENT,
    payload: value,
  }),
};

export {ActionType, ActionCreator};
