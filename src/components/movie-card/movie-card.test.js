import React from 'react';
import renderer from 'react-test-renderer';

import MovieCard from './movie-card';
import {movie, noop} from '../../data-test';

it(`MovieCard is rendered correctly`, () => {
  const tree = renderer.create(
      <MovieCard
        movie={movie}
        onMovieClick={noop}
        onMouseOver={noop}
        onMouseOut={noop}
        renderPlayer={noop}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
