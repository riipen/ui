import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";

import SpinnerScale from "./SpinnerScale";

describe("<SpinnerScale>", () => {
  it("renders without errors", () => {
    let error;

    try {
      mount(<SpinnerScale />);
    } catch (theError) {
      error = theError;
    }

    expect(error).toEqual(undefined);
  });

  it("renders correct snapshot", () => {
    const wrapper = mount(<SpinnerScale />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe("default props", () => {
    it("sets correct default props", () => {
      const wrapper = mount(<SpinnerScale />);

      expect(wrapper.find("SpinnerScale").props().classes).toEqual([
        "riipen",
        "riipen-spinnerscale"
      ]);
      expect(wrapper.find("SpinnerScale").props().color).toEqual("primary");
      expect(wrapper.find("SpinnerScale").props().height).toEqual(40);
      expect(wrapper.find("SpinnerScale").props().margin).toEqual(5);
      expect(wrapper.find("SpinnerScale").props().width).toEqual(5);
    });
  });

  describe("classes prop", () => {
    it("applies custom classes", () => {
      const classes = ["classOne"];

      const wrapper = mount(<SpinnerScale classes={classes} />);

      expect(
        wrapper
          .find("SpinnerScale")
          .childAt(0)
          .hasClass(classes[0])
      ).toEqual(true);
    });
  });

  describe("color prop", () => {
    it("applies valid custom colour class", () => {
      const color = "secondary";

      const wrapper = mount(<SpinnerScale color={color} />);

      expect(
        wrapper
          .find("SpinnerScale")
          .childAt(0)
          .childAt(0)
          .hasClass(color)
      ).toEqual(true);
    });

    it("gives an error with invalid color", () => {
      const errors = jest.spyOn(console, "error").mockImplementation();

      mount(<SpinnerScale color="yellow" />);

      expect(errors).toHaveBeenCalled();
    });
  });

  describe("height prop", () => {
    it("sets valid custom height", () => {
      const height = 20;

      const wrapper = mount(<SpinnerScale height={height} />);

      expect(
        wrapper
          .find("JSXStyle")
          .at(0)
          .props().dynamic
      ).toContain(height);
    });
  });

  describe("margin prop", () => {
    it("sets valid custom margin", () => {
      const margin = 20;

      const wrapper = mount(<SpinnerScale margin={margin} />);

      expect(
        wrapper
          .find("JSXStyle")
          .at(0)
          .props().dynamic
      ).toContain(margin);
    });
  });

  describe("width prop", () => {
    it("sets valid custom width", () => {
      const width = 20;

      const wrapper = mount(<SpinnerScale width={width} />);

      expect(
        wrapper
          .find("JSXStyle")
          .at(0)
          .props().dynamic
      ).toContain(width);
    });
  });
});
