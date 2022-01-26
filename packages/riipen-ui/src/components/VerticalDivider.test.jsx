import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";

import VerticalDivider from "./VerticalDivider";

describe("<VerticalDivider>", () => {
  it("renders without errors", () => {
    let error;

    try {
      mount(<VerticalDivider />);
    } catch (e) {
      error = e;
    }

    expect(error).toEqual(undefined);
  });

  it("renders correct snapshot", () => {
    const wrapper = mount(<VerticalDivider />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("sets correct default props", () => {
    const wrapper = mount(<VerticalDivider />);
    const component = wrapper.find("VerticalDivider");

    expect(component.props().spacing).toEqual(2);
    expect(component.props().width).toEqual(1);
  });

  it("applies custom classes", () => {
    const classes = ["classOne"];

    const wrapper = mount(<VerticalDivider classes={classes} />);

    expect(
      wrapper
        .find("VerticalDivider")
        .childAt(0)
        .hasClass(classes[0])
    ).toEqual(true);
  });
});
