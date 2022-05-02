import React from 'react';
import renderer from 'react-test-renderer';

import MovieButtons from './movie-buttons';
import {noop} from '../../data-test';

it(`MovieButtons is rendered correctly`, () => {
  const tree = renderer.create(
      <MovieButtons
        id={1}
        isFavorite={true}
        onPlayClick={noop}
        onFavoriteClick={noop}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
