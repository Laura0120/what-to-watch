import React from 'react';
import renderer from 'react-test-renderer';

import {SignIn} from './sign-in';
import {noop} from '../../data-test';

it(`SignIn is rendered correctly`, () => {
  const tree = renderer.create(
      <SignIn
        onSubmit = {noop}
        onMainPageClick = {noop}/>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
