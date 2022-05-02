import {ActionCreator} from "./action";
import {AuthorizationStatus, APIRoute} from "../const";
import {getErrorMessage} from "../store/error-message";


export const fetchMovies = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => {
      dispatch(ActionCreator.loadMovies(data));
    })
);

export const fetchMovieById = (id) => (dispatch, _getState, api) => (
  api.get(`/films/${id}`)
    .then(({data}) => {
      dispatch(ActionCreator.loadMovieById(data));
    }));

export const fetchPromoMovie = () => (dispatch, _getState, api) => (
  api.get(APIRoute.PROMO)
    .then(({data}) => {
      dispatch(ActionCreator.loadPromoMovie(data));
    })
);

export const fetchFavorite = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FAVORITE)
    .then(({data}) => {
      dispatch(ActionCreator.loadFavorite(data));
    })
);

export const fetchCommentsByMovieId = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/${id}`)
    .then(({data}) => {
      dispatch(ActionCreator.loadCommentsByMovieId(data));
    }));

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch((err) => {
      throw err;
    })
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(() => {
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(ActionCreator.redirectToRoute(`/`));
    }));

export const addReview = (id, {rating, comment}) => (dispatch, _getState, api) => (
  api.post(`/comments/${id}`, {rating, comment})
    .then(({data}) => {
      dispatch(ActionCreator.loadCommentsByMovieId(data));
      dispatch(ActionCreator.redirectToRoute(`/films/${id}`));
      dispatch(ActionCreator.postingComment(false));
    })
    .catch((err) => {
      getErrorMessage(err);
      dispatch(ActionCreator.postingComment(false));
    })
);

export const changeFavorite = (id, status) => (dispatch, _getState, api) => (
  api.post(`/favorite/${id}/${status ? 0 : 1}`)
  .then(({data}) => {
    dispatch(ActionCreator.loadMovieById(data));
  })
  .catch((err) => {
    getErrorMessage(err);
  })
);


