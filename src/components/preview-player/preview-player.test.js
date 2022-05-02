import React from 'react';
import renderer from 'react-test-renderer';

import PreviewPlayer from './preview-player';
import {movie} from '../../data-test';

it(`PreviewPlayer is rendered correctly`, () => {
  const tree = renderer.create(
      <PreviewPlayer
        video={movie.video}
        preview={movie.poster}
        isPlaying={false}
      >
        <video />
      </PreviewPlayer>, {
        createNodeMock: () => {
          return {};
        }
      }).toJSON();

  expect(tree).toMatchSnapshot();
});

