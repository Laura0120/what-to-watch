import React from 'react';
import renderer from 'react-test-renderer';

import {movie, noop} from '../../data-test';
import {MyList} from './my-list';

it(`MyList is rendered correctly`, () => {
  const tree = renderer.create(
      <MyList
        movies={[movie]}
        authorizationStatus = {`AUTH`}
        onMovieClick={noop}
        onMyListButtonClick={noop}
        onMainPageClick = {noop}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
