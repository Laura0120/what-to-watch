import React from 'react';
import renderer from 'react-test-renderer';

import {Player} from "./player";
import {movie, noop} from '../../data-test';

it(`Player is rendered correctly`, () => {
  const tree = renderer.create(
      <Player
        movie={movie}
        isPlaying={false}
        runtimeVideo = {600000}
        progressVideo={30000}
        toggleMovement={30000}
        onExitClick={noop}
        togglePlayState={noop}
        loadMovie={noop}
        onCanPlayThrough={noop}
        onProgressVideoSet={noop}
        location={{pathname: `/player/1`}}
      />, {
        createNodeMock: () => {
          return {};
        }
      }).toJSON();


  expect(tree).toMatchSnapshot();
});

