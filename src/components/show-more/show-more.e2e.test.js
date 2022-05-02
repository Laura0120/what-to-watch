import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import ShowMore from "./show-more";

configure({adapter: new Adapter()});

it(`Should show more button be pressed`, () => {
  const handleShowMoreButtonClick = jest.fn();

  const showMore = shallow(
      <ShowMore
        onShowMoreClick = {handleShowMoreButtonClick}
      />
  );

  const showMoreButton = showMore.find(`button`);

  showMoreButton.simulate(`click`);

  expect(handleShowMoreButtonClick).toHaveBeenCalledTimes(1);
});

