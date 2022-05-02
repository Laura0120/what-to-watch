import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import GenreList from "./genre-list";
import {movie} from '../../data-test';

configure({adapter: new Adapter()});

it(`Should change genre`, () => {
  const handleChangeGenre = jest.fn();

  const genreList = shallow(
      <GenreList
        genreList={[`All genres`, movie.genre]}
        activeGenre={`All genres`}
        onChangeGenre={handleChangeGenre}
      />
  );

  const genres = genreList.find(`a.catalog__genres-link`);
  const genreTwo = genres.at(1);

  genreTwo.simulate(`click`, {preventDefault() {}});
  expect(handleChangeGenre).toHaveBeenCalledTimes(1);
});
