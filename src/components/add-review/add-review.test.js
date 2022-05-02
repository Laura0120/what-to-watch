import React from 'react';
import renderer from 'react-test-renderer';

import {AddReview} from './add-review';
import {movie, noop} from '../../data-test';

it(`AddReview is rendered correctly`, () => {
  const tree = renderer.create(
      <AddReview
        movie = {movie}
        onMoviePageClick = {noop}
        authorizationStatus = {`AUTH`}
        isLoading = {false}
        onMyListButtonClick = {noop}
        onSubmit = {noop}
        onMainPageClick = {noop}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
