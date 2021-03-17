import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";

import SpinnerClip from "./SpinnerClip";

describe("<SpinnerClip>", () => {
  it("renders without errors", () => {
    let error;

    try {
      mount(<SpinnerClip />);
    } catch (theError) {
      error = theError;
    }

    expect(error).toEqual(undefined);
  });

  it("renders correct snapshot", () => {
    const wrapper = mount(<SpinnerClip />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe("default props", () => {
    it("sets correct default props", () => {
      const wrapper = mount(<SpinnerClip />);

      expect(wrapper.find("SpinnerClip").props().classes).toEqual([
        "riipen",
        "riipen-spinnerclip"
      ]);
      expect(wrapper.find("SpinnerClip").props().color).toEqual("primary");
      expect(wrapper.find("SpinnerClip").props().size).toEqual(40);
    });
  });

  describe("classes prop", () => {
    it("applies custom classes", () => {
      const classes = ["classOne"];

      const wrapper = mount(<SpinnerClip classes={classes} />);

      expect(
        wrapper
          .find("SpinnerClip")
          .childAt(0)
          .hasClass(classes[0])
      ).toEqual(true);
    });
  });

  describe("color prop", () => {
    it("applies valid custom colour class", () => {
      const color = "secondary";

      const wrapper = mount(<SpinnerClip color={color} />);

      expect(
        wrapper
          .find("SpinnerClip")
          .childAt(0)
          .childAt(0)
          .hasClass(color)
      ).toEqual(true);
    });

    it("gives an error with invalid color", () => {
      const errors = jest.spyOn(console, "error").mockImplementation();

      mount(<SpinnerClip color="yellow" />);

      expect(errors).toHaveBeenCalled();
    });
  });

  describe("size prop", () => {
    it("sets valid custom size", () => {
      const size = 20;

      const wrapper = mount(<SpinnerClip size={size} />);

      expect(wrapper.find("JSXStyle").props().dynamic).toContain(size);
    });
  });
});
