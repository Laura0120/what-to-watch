import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import MovieButtons from "./movie-buttons";
import {noop} from '../../data-test';

configure({adapter: new Adapter()});

it(`Should play button be pressed`, () => {
  const handlePlayButtonClick = jest.fn();

  const wrapper = shallow(
      <MovieButtons
        id={1}
        isFavorite={true}
        onPlayClick={handlePlayButtonClick}
        onFavoriteClick={noop}
      />
  );

  const playButton = wrapper.find(`button.btn--play`);

  playButton.simulate(`click`);
  expect(handlePlayButtonClick).toHaveBeenCalledTimes(1);
});

it(`Should my list button be pressed`, () => {
  const handleMyListButtonClick = jest.fn();

  const wrapper = shallow(
      <MovieButtons
        id={1}
        isFavorite={true}
        onPlayClick={noop}
        onFavoriteClick={handleMyListButtonClick}
      />
  );

  const myListButton = wrapper.find(`button.btn--list`);

  myListButton.simulate(`click`);
  expect(handleMyListButtonClick).toHaveBeenCalledTimes(1);
});
