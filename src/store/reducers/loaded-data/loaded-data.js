import {ActionType} from '../../action';
import {extend} from '../../../utils/common';

const initialState = {
  allMovies: [],
  favoriteMovies: [],
  promoMovie: {},
  openedMovie: {},
  openMovieComments: [],
};

const loadedData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_MOVIES:
      return extend(state, {
        allMovies: action.payload,
      });
    case ActionType.LOAD_FAVORITE:
      return extend(state, {
        favoriteMovies: action.payload,
      });
    case ActionType.LOAD_PROMO_MOVIE:
      return extend(state, {
        promoMovie: action.payload,
      });
    case ActionType.LOAD_MOVIE_BY_ID:
      return extend(state, {
        openedMovie: action.payload,
      });
    case ActionType.LOAD_COMMENTS_BY_MOVIE_ID:
      return extend(state, {
        openMovieComments: action.payload,
      });
  }

  return state;
};


export {loadedData};
