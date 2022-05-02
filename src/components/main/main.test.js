import React from 'react';
import renderer from 'react-test-renderer';

import {Main} from './main';
import {movie, noop} from '../../data-test';

it(`Main is rendered correctly`, () => {
  const tree = renderer.create(
      <Main
        genreList={[movie.genre]}
        currentMovies={[movie]}
        promoMovie={movie}
        activeGenre={`All genres`}
        authorizationStatus = {`AUTH`}
        onChangeGenre={noop}
        onMovieClick={noop}
        onFavoriteClick={noop}
        onPlayClick={noop}
        onMyListButtonClick={noop}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
