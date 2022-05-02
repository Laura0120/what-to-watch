import {appState} from "./app-state";
import {ActionType} from "../../action";
import {DEFAULT_GENRE} from '../../../const';
import {movie} from '../../../data-test';


it(`Reducer without additional parameters should return initial state`, () => {
  expect(appState(void 0, {})).toEqual({
    genre: DEFAULT_GENRE,
    isLoading: false
  });
});

it(`Reducer should change the genre to the given value`, () => {
  expect(appState({
    genre: DEFAULT_GENRE,
    isLoading: false
  }, {
    type: ActionType.CHANGE_GENRE,
    payload: movie.genre,
  })).toEqual({
    genre: movie.genre,
    isLoading: false
  });
});

it(`Reducer should change  the flag is loading to opposite`, () => {
  expect(appState({
    genre: DEFAULT_GENRE,
    isLoading: false
  }, {
    type: ActionType.POSTING_COMMENT,
    payload: true,
  })).toEqual({
    genre: DEFAULT_GENRE,
    isLoading: true
  });
});
