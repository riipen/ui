import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";

import Popover from "./Popover";

describe("<Popover>", () => {
  it("renders without errors", () => {
    let error;

    try {
      mount(<Popover />);
    } catch (theError) {
      error = theError;
    }

    expect(error).toEqual(undefined);
  });

  it("renders correct snapshot", () => {
    const wrapper = mount(<Popover />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
