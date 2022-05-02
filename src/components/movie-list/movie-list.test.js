import React from 'react';
import renderer from 'react-test-renderer';

import MovieListWrapped from './movie-list';
import {movie, noop} from '../../data-test';

it(`MovieListWrapped is rendered correctly`, () => {
  const tree = renderer.create(
      <MovieListWrapped
        movies={[movie]}
        renderedMovieCount = {8}
        renderShowMore={noop}
        renderPlayer={noop}
        onMovieClick={noop}
        onMouseOver={noop}
        onMouseOut={noop}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
