import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";

import Hidden from "./Hidden.jsx";

describe("<Hidden>", () => {
  it("renders without errors", () => {
    let error;
    const size = "sm";

    try {
      mount(<Hidden size={size} />);
    } catch (e) {
      error = e;
    }

    expect(error).toEqual(undefined);
  });

  it("renders correct snapshot", () => {
    const size = "sm";

    const wrapper = mount(<Hidden size={size} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe("default props", () => {
    it("sets correct default props", () => {
      const size = "sm";
      const defaultProps = new Hidden({ size }).type.defaultProps;

      const wrapper = mount(<Hidden size={size} />);

      const component = wrapper.find("Hidden");
      expect(component.props().direction).toEqual(defaultProps.direction);
    });
  });

  describe("children prop", () => {
    it("displays given children", () => {
      const child = <h1>this is a child</h1>;
      const size = "sm";

      const wrapper = mount(<Hidden size={size}>{child}</Hidden>);

      expect(
        wrapper
          .find("Hidden")
          .find("div")
          .contains(child)
      ).toEqual(true);
    });
  });

  describe("direction prop", () => {
    it("applies given direction to the size-direction className on div", () => {
      const direction = "up";
      const size = "sm";
      const className = new RegExp(`.+-${direction}`);

      const wrapper = mount(<Hidden direction={direction} size={size} />);

      expect(
        wrapper
          .find("Hidden")
          .find("div")
          .hasClass(className)
      ).toEqual(true);
    });

    it("gives an error given an invalid direction", () => {
      const direction = "left";
      const size = "sm";

      const errors = jest.spyOn(console, "error").mockImplementation();

      mount(<Hidden size={size} direction={direction} />);

      expect(errors).toHaveBeenCalled();
    });
  });

  describe("size prop", () => {
    it("applies given size to the size-direction className on div", () => {
      const size = "sm";
      const className = new RegExp(`${size}-.+`);

      const wrapper = mount(<Hidden size={size} />);

      expect(
        wrapper
          .find("Hidden")
          .find("div")
          .hasClass(className)
      ).toEqual(true);
    });

    it("gives an error given an invalid size", () => {
      const size = "xxl";
      const errors = jest.spyOn(console, "error").mockImplementation();

      mount(<Hidden size={size} />);

      expect(errors).toHaveBeenCalled();
    });
  });

  describe("classes prop", () => {
    it("appends higher order values to classes prop with withClass decorator", () => {
      const classes = ["riipen", "riipen-hidden"];
      const size = "xs";

      const wrapper = mount(<Hidden size={size} />);

      expect(
        wrapper
          .find("Hidden")
          .props()
          .classes.sort()
      ).toEqual(classes.sort());
    });
  });
});
