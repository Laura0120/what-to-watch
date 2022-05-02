import React from 'react';
import renderer from 'react-test-renderer';

import {Movie} from './movie';
import {movie, noop} from '../../data-test';

it(`Movie is rendered correctly`, () => {
  const tree = renderer.create(
      <Movie
        movie={movie}
        comments={[]}
        moviesLikeThis={[movie]}
        authorizationStatus = {`AUTH`}
        onAddReviewClick={noop}
        onPlayClick={noop}
        onFavoriteClick={noop}
        renderTabs={noop}
        onMyListButtonClick={noop}
        onMovieClick={noop}
        loadMovie={noop}
        onMainPageClick = {noop}
        location={{pathname: `/films/1`}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
