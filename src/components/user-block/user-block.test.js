import React from 'react';
import renderer from 'react-test-renderer';

import UserBlock from './user-block';
import {noop} from '../../data-test';

it(`UserBlock is rendered correctly`, () => {
  const tree = renderer.create(
      <UserBlock
        id={1}
        authorizationStatus = {`AUTH`}
        onMyListButtonClick={noop}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
