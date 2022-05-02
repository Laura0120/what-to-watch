import React from 'react';
import renderer from 'react-test-renderer';

import MoreLikeThis from './more-like-this';
import {movie, noop} from '../../data-test';

it(`MoreLikeThis is rendered correctly`, () => {
  const tree = renderer.create(
      <MoreLikeThis
        movies={[movie]}
        onMovieClick={noop}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
