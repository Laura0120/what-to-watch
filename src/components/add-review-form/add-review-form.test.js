import React from 'react';
import renderer from 'react-test-renderer';

import AddReviewForm from './add-review-form';
import {noop} from '../../data-test';

it(`AddReviewForm is rendered correctly`, () => {
  const tree = renderer.create(
      <AddReviewForm
        id={1}
        isLoading={false}
        onSubmit={noop}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
