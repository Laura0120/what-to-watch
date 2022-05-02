
import React from "react";
import renderer from "react-test-renderer";

import withPlayer from "./with-player";

const MockComponent = () => {

  return (
    <React.Fragment/>
  );
};

const MockComponentWrapped = withPlayer(MockComponent);

it(`withPlayer is rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped/>
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
