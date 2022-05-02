import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import MovieCard from "./movie-card";
import {movie, noop} from '../../data-test';

configure({adapter: new Adapter()});

it(`Should click on the movie page`, () => {
  const handleMoviePageClick = jest.fn();

  const movieCard = shallow(
      <MovieCard
        movie={movie}
        onMovieClick = {handleMoviePageClick}
        onMouseOver = {noop}
        onMouseOut = {noop}
        renderPlayer = {noop}
      />
  );

  const movieElement = movieCard.find(`article`);
  movieElement.simulate(`click`, {preventDefault() {}});
  expect(handleMoviePageClick).toHaveBeenCalledTimes(1);
});

it(`Should hover mouse over movie card`, () => {
  const handleMovieCardMouseOver = jest.fn();

  const movieCard = shallow(
      <MovieCard
        movie={movie}
        onMovieClick = {noop}
        onMouseOver = {handleMovieCardMouseOver}
        onMouseOut = {noop}
        renderPlayer = {noop}
      />
  );

  const movieElement = movieCard.find(`article`);
  movieElement.simulate(`mouseover`);
  expect(handleMovieCardMouseOver).toHaveBeenCalledTimes(1);
});

it(`Should hover mouse out movie card`, () => {
  const handleMovieCardMouseOut = jest.fn();

  const movieCard = shallow(
      <MovieCard
        movie={movie}
        onMovieClick = {noop}
        onMouseOver = {noop}
        onMouseOut = {handleMovieCardMouseOut}
        renderPlayer = {noop}
      />
  );

  const movieElement = movieCard.find(`article`);
  movieElement.simulate(`mouseout`);
  expect(handleMovieCardMouseOut).toHaveBeenCalledTimes(1);
});
