import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";

import InputHint from "./InputHint.jsx";

describe("<InputHint>", () => {
  it("renders without errors", () => {
    let error;

    try {
      mount(<InputHint />);
    } catch (e) {
      error = e;
    }

    expect(error).toEqual(undefined);
  });

  it("renders correct snapshot", () => {
    const wrapper = mount(<InputHint />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe("children prop", () => {
    it("renders given children inside the Typography element", () => {
      const child = <span>hello</span>;

      const wrapper = mount(<InputHint>{child}</InputHint>);

      expect(
        wrapper
          .find("InputHint")
          .find("Typography")
          .contains(child)
      ).toEqual(true);
    });
  });

  describe("color prop", () => {
    it("passes color prop through to Typography", () => {
      const color = "white";

      const wrapper = mount(<InputHint color={color} />);

      expect(wrapper.find("Typography").props().color).toEqual(color);
    });
  });

  describe("classes prop", () => {
    it("applies classes to the div inside of InputHint", () => {
      const classes = ["classOne"];

      const wrapper = mount(<InputHint classes={classes} />);

      expect(
        wrapper
          .find("InputHint")
          .childAt(0)
          .find("div")
          .hasClass(classes[0])
      ).toEqual(true);
    });

    it("appends higher order values to classes prop with withClass decorator", () => {
      const classes = ["riipen", "riipen-inputhint"];

      const wrapper = mount(<InputHint />);

      expect(
        wrapper
          .find("InputHint")
          .props()
          .classes.sort()
      ).toEqual(classes.sort());
    });

    it("gives an error when classes are provided as one string", () => {
      const classes = "classOne classTwo";
      const errors = jest.spyOn(console, "error").mockImplementation();

      mount(<InputHint classes={classes} />);

      expect(errors).toHaveBeenCalled();
    });
  });
});
