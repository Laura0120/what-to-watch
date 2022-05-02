import React from 'react';
import renderer from 'react-test-renderer';

import GenreList from './genre-list';
import {noop} from '../../data-test';

it(`GenreList is rendered correctly`, () => {
  const tree = renderer.create(
      <GenreList
        genreList={[`All genres`]}
        activeGenre={`All genres`}
        onChangeGenre={noop}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
