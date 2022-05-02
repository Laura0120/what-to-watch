import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import {Movie} from "./movie";
import {movie, noop} from '../../data-test';

configure({adapter: new Adapter()});

it(`Should add review button be pressed`, () => {
  const handleAddReviewButtonClick = jest.fn();

  const wrapper = mount(
      <Movie
        movie={movie}
        comments={[]}
        moviesLikeThis={[movie]}
        authorizationStatus = {`AUTH`}
        onAddReviewClick={handleAddReviewButtonClick}
        onPlayClick={noop}
        onFavoriteClick={noop}
        renderTabs={noop}
        onMyListButtonClick={noop}
        onMovieClick={noop}
        loadMovie={noop}
        onMainPageClick={noop}
        location={{pathname: `/films/1`}}
      />
  );

  const addReview = wrapper.find(`a.movie-card__button`);

  addReview.simulate(`click`);
  expect(handleAddReviewButtonClick).toHaveBeenCalledTimes(1);
});

it(`Should main page link click`, () => {
  const handleMainPageClick = jest.fn();

  const wrapper = mount(
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
        onMainPageClick={handleMainPageClick}
        location={{pathname: `/films/1`}}
      />
  );

  const mainPageLinks = wrapper.find(`a.logo__link`);

  mainPageLinks.at(0).simulate(`click`, {preventDefault() {}});
  mainPageLinks.at(1).simulate(`click`, {preventDefault() {}});

  expect(handleMainPageClick).toHaveBeenCalledTimes(2);
});
