import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import UserBlock from "./user-block";

configure({adapter: new Adapter()});

it(`Should on the my list block click`, () => {
  const handleMyListClick = jest.fn();

  const userBlock = shallow(
      <UserBlock
        authorizationStatus = {`AUTH`}
        onMyListButtonClick = {handleMyListClick}
      />
  );

  const userBlockAvatar = userBlock.find(`div.user-block__avatar`);

  userBlockAvatar.simulate(`click`);

  expect(handleMyListClick).toHaveBeenCalledTimes(1);
});
