import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import {SignIn} from "./sign-in";
import {noop} from '../../data-test';

configure({adapter: new Adapter()});

it(`Should sing in button be pressed`, () => {
  const handleSubmitForm = jest.fn();
  const passWordMock = `111`;
  const emailMock = `111@gmail.com`;

  const wrapper = mount(
      <SignIn onSubmit={handleSubmitForm}
        onMainPageClick={noop}/>
  );

  const form = wrapper.find(`form`);
  const inputs = form.find(`input`);
  inputs.at(0).instance().value = emailMock;
  inputs.at(1).instance().value = passWordMock;
  inputs.at(0).simulate(`change`);
  inputs.at(1).simulate(`change`);
  form.simulate(`submit`, {preventDefault() {}});
  expect(handleSubmitForm).toHaveBeenCalledTimes(1);
});

it(`Should main page link click`, () => {
  const handleMainPageClick = jest.fn();


  const wrapper = mount(
      <SignIn onSubmit={noop}
        onMainPageClick={handleMainPageClick}/>
  );

  const mainPageLinks = wrapper.find(`a.logo__link`);

  mainPageLinks.at(0).simulate(`click`, {preventDefault() {}});
  mainPageLinks.at(1).simulate(`click`, {preventDefault() {}});

  expect(handleMainPageClick).toHaveBeenCalledTimes(2);
});
