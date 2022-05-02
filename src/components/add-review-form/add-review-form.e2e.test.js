import React from "react";
import {configure, mount, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import AddReviewForm from "./add-review-form";

configure({adapter: new Adapter()});

it(`form is not submit without rating selection and text`, () => {
  const handleSubmitForm = jest.fn();

  const wrapper = shallow(
      <AddReviewForm
        onSubmit={handleSubmitForm}
        id={1}
        isLoading={false}
      />
  );

  const form = wrapper.find(`form`);
  form.simulate(`submit`, {preventDefault() {}});
  expect(handleSubmitForm).toHaveBeenCalledTimes(0);
});

it(`form is not submit without text`, () => {
  const handleSubmitForm = jest.fn();

  const wrapper = mount(
      <AddReviewForm
        onSubmit={handleSubmitForm}
        id={1}
        isLoading={false}
      />
  );

  const form = wrapper.find(`form`);
  const ratingInputs = wrapper.find(`input.rating__input`);
  const ratingInputFour = ratingInputs.at(3);
  ratingInputFour.simulate(`change`);
  form.simulate(`submit`, {preventDefault() {}});
  expect(handleSubmitForm).toHaveBeenCalledTimes(0);
});

it(`User response passed to callback is consistent with mooks`, () => {
  const handleSubmitForm = jest.fn();
  const commentText = `тестовый текст комментария для проверки формы его отправки`;

  const wrapper = mount(
      <AddReviewForm
        onSubmit={handleSubmitForm}
        id={1}
        isLoading={false}
      />
  );

  const form = wrapper.find(`form`);
  const ratingInputs = wrapper.find(`input.rating__input`);
  const ratingInputFour = ratingInputs.at(3);
  const commentTextElement = wrapper.find(`textarea`);

  ratingInputFour.simulate(`change`);
  commentTextElement.instance().value = commentText;
  commentTextElement.simulate(`change`);
  form.simulate(`submit`, {preventDefault() {}});

  expect(handleSubmitForm).toHaveBeenCalledTimes(1);
  expect(handleSubmitForm.mock.calls[0][0]).toEqual(1);
  expect(handleSubmitForm.mock.calls[0][1]).toEqual({rating: 4, comment: commentText});
});

