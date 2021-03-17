import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";

import SpinnerPulse from "./SpinnerPulse";

describe("<SpinnerPulse>", () => {
  it("renders without errors", () => {
    let error;

    try {
      mount(<SpinnerPulse />);
    } catch (theError) {
      error = theError;
    }

    expect(error).toEqual(undefined);
  });

  it("renders correct snapshot", () => {
    const wrapper = mount(<SpinnerPulse />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe("default props", () => {
    it("sets correct default props", () => {
      const wrapper = mount(<SpinnerPulse />);

      expect(wrapper.find("SpinnerPulse").props().classes).toEqual([
        "riipen",
        "riipen-spinnerpulse"
      ]);
      expect(wrapper.find("SpinnerPulse").props().color).toEqual("primary");
      expect(wrapper.find("SpinnerPulse").props().margin).toEqual(5);
      expect(wrapper.find("SpinnerPulse").props().size).toEqual(10);
    });
  });

  describe("classes prop", () => {
    it("applies custom classes", () => {
      const classes = ["classOne"];

      const wrapper = mount(<SpinnerPulse classes={classes} />);

      expect(
        wrapper
          .find("SpinnerPulse")
          .childAt(0)
          .hasClass(classes[0])
      ).toEqual(true);
    });
  });

  describe("color prop", () => {
    it("applies valid custom colour class", () => {
      const color = "secondary";

      const wrapper = mount(<SpinnerPulse color={color} />);

      expect(
        wrapper
          .find("SpinnerPulse")
          .childAt(0)
          .childAt(0)
          .hasClass(color)
      ).toEqual(true);
    });

    it("gives an error with invalid color", () => {
      const errors = jest.spyOn(console, "error").mockImplementation();

      mount(<SpinnerPulse color="yellow" />);

      expect(errors).toHaveBeenCalled();
    });
  });

  describe("margin prop", () => {
    it("sets valid custom margin", () => {
      const margin = 20;

      const wrapper = mount(<SpinnerPulse margin={margin} />);

      expect(
        wrapper
          .find("JSXStyle")
          .at(0)
          .props().dynamic
      ).toContain(margin);
    });
  });

  describe("size prop", () => {
    it("sets valid custom size", () => {
      const size = 20;

      const wrapper = mount(<SpinnerPulse size={size} />);

      expect(
        wrapper
          .find("JSXStyle")
          .at(0)
          .props().dynamic
      ).toContain(size);
    });
  });
});
