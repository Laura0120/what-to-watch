import {ActionType} from '../../action';
import {extend} from '../../../utils/common';
import {DEFAULT_GENRE} from '../../../const';

const initialState = {
  genre: DEFAULT_GENRE,
  isLoading: false
};

const appState = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return extend(state, {
        genre: action.payload,
      });
    case ActionType.POSTING_COMMENT:
      return extend(state, {
        isLoading: action.payload,
      });
  }

  return state;
};


export {appState};
