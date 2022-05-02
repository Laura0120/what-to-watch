import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import {AddReview} from "./add-review";
import {movie, noop} from '../../data-test';

configure({adapter: new Adapter()});

it(`Should click on the movie page`, () => {
  const handleMoviePageClick = jest.fn();

  const addReview = shallow(
      <AddReview
        movie={movie}
        onMoviePageClick = {handleMoviePageClick}
        authorizationStatus = {`AUTH`}
        isLoading = {false}
        onMyListButtonClick = {noop}
        onSubmit = {noop}
        onMainPageClick={noop}
      />
  );

  const moviePageLink = addReview.find(`a[href=''].breadcrumbs__link`);
  moviePageLink.simulate(`click`, {preventDefault() {}});
  expect(handleMoviePageClick).toHaveBeenCalledTimes(1);
});

it(`Should movie page link click`, () => {
  const handleMainPageClick = jest.fn();

  const addReview = shallow(
      <AddReview
        movie={movie}
        onMoviePageClick = {noop}
        authorizationStatus = {`AUTH`}
        isLoading = {false}
        onMyListButtonClick = {noop}
        onSubmit = {noop}
        onMainPageClick={handleMainPageClick}
      />
  );

  const mainPageLinks = addReview.find(`a.logo__link`);

  mainPageLinks.simulate(`click`, {preventDefault() {}});

  expect(handleMainPageClick).toHaveBeenCalledTimes(1);
});
