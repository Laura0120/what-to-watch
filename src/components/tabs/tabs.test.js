import React from 'react';
import renderer from 'react-test-renderer';

import Tabs from './tabs';
import {movie, noop, comment} from '../../data-test';

it(`Tabs is rendered correctly`, () => {
  const tree = renderer.create(
      <Tabs
        currentTab={`OVERVIEW`}
        movie={movie}
        onChangeTab={noop}
        comments={[comment]}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
