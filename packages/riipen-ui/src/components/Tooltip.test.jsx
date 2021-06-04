import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";

import Tooltip from "./Tooltip.jsx";

describe("<Tooltip>", () => {
  it("renders without errors", () => {
    let error;

    try {
      mount(<Tooltip />);
    } catch (e) {
      error = e;
    }

    expect(error).toEqual(undefined);
  });

  it("renders correct snapshot", () => {
    const wrapper = mount(<Tooltip />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
