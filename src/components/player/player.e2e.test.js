import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import {Player} from "./player";
import {movie, noop} from '../../data-test';

configure({adapter: new Adapter()});

it(`Should exit button be pressed`, () => {
  const handleExitClick = jest.fn();

  const player = mount(
      <Player
        movie={movie}
        onExitClick = {handleExitClick}
        isPlaying = {true}
        runtimeVideo = {600000}
        progressVideo={30000}
        toggleMovement={30000}
        loadMovie = {noop}
        togglePlayState = {noop}
        onProgressVideoSet ={noop}
        onCanPlayThrough ={noop}
        location={{pathname: `/player/1`}}
      />
  );

  const exitButton = player.find(`button.player__exit`);
  exitButton.simulate(`click`);
  expect(handleExitClick).toHaveBeenCalledTimes(1);
});

it(`Should play/pause button be pressed`, () => {
  const handlePlayPauseClick = jest.fn();

  const player = mount(
      <Player
        movie={movie}
        onExitClick = {noop}
        isPlaying = {true}
        runtimeVideo = {600000}
        progressVideo={30000}
        toggleMovement={30000}
        togglePlayState = {handlePlayPauseClick}
        loadMovie ={noop}
        onProgressVideoSet ={noop}
        onCanPlayThrough ={noop}
        location={{pathname: `/player/1`}}
      />
  );

  const exitButton = player.find(`button.player__play`);
  exitButton.simulate(`click`);
  expect(handlePlayPauseClick).toHaveBeenCalledTimes(1);
});
