import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";

import Radio from "./Radio";

describe("<Radio>", () => {
  it("renders without errors", () => {
    let error;

    try {
      mount(<Radio />);
    } catch (theError) {
      error = theError;
    }

    expect(error).toEqual(undefined);
  });

  it("renders correct snapshot", () => {
    const wrapper = mount(<Radio />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
